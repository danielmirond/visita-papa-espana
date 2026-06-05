#!/usr/bin/env node
/**
 * ping-search-engines.mjs
 *
 * Notifica a los buscadores que el contenido ha cambiado.
 *
 *  - Bing / Yandex / Seznam / Naver  → IndexNow (funciona y es lo recomendado).
 *  - Google                          → ya NO admite ping de sitemap (deprecado
 *                                      en 2023). Se hace un intento best-effort
 *                                      y se recuerda usar Search Console / la
 *                                      Indexing API si se configuran credenciales.
 *
 * Uso:
 *   node scripts/ping-search-engines.mjs                 (todas las URLs del sitemap)
 *   node scripts/ping-search-engines.mjs --urls=a,b,c    (solo esas URLs)
 *   node scripts/ping-search-engines.mjs --limit=500
 *
 * Variables de entorno:
 *   SITE_URL / CANONICAL_URL  → base del sitio (def: https://www.visita-papa-2026.com)
 *   INDEXNOW_KEY              → clave IndexNow (def: la del repo)
 */

const args = process.argv.slice(2)
const argVal = (name, def = '') =>
  args.find((a) => a.startsWith(`--${name}=`))?.split('=').slice(1).join('=') || def

const BASE = (process.env.CANONICAL_URL || process.env.SITE_URL || 'https://www.visita-papa-2026.com').replace(/\/$/, '')
const HOST = new URL(BASE).host
const KEY = process.env.INDEXNOW_KEY || 'be4e9b78f0cd515ee1ecbf8ed3520903'
const KEY_LOCATION = `${BASE}/${KEY}.txt`
const SITEMAP = `${BASE}/sitemap-0.xml`
const LIMIT = parseInt(argVal('limit', '0'), 10)

async function getSitemapUrls() {
  const res = await fetch(SITEMAP, { headers: { 'User-Agent': 'ping-search-engines/1.0' } })
  if (!res.ok) throw new Error(`Sitemap inaccesible (HTTP ${res.status}) en ${SITEMAP}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

async function submitIndexNow(urls) {
  // IndexNow admite hasta 10.000 URLs por petición. Lotes por seguridad.
  const BATCH = 10000
  let ok = 0
  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH)
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    })
    // 200 = ok, 202 = aceptado/en validación. Otros → avisar.
    if (res.status === 200 || res.status === 202) {
      ok += urlList.length
      console.log(`  IndexNow: ${urlList.length} URLs enviadas (HTTP ${res.status})`)
    } else {
      const body = await res.text().catch(() => '')
      console.error(`  IndexNow ERROR HTTP ${res.status}: ${body.slice(0, 200)}`)
    }
  }
  return ok
}

async function pingGoogleBestEffort() {
  // El ping de sitemap de Google está DEPRECADO (devuelve 404 desde 2023).
  // Se intenta de todas formas, pero lo correcto es Search Console / Indexing API.
  try {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`
    const res = await fetch(url, { method: 'GET' })
    console.log(`  Google ping (deprecado): HTTP ${res.status} — Google ignora este endpoint.`)
  } catch (e) {
    console.log(`  Google ping no disponible: ${e.message}`)
  }
  console.log('  Google: confía en el lastmod del sitemap. Para envío directo, configura la Indexing API (service account).')
}

async function main() {
  let urls
  const urlsArg = argVal('urls')
  if (urlsArg) {
    urls = urlsArg.split(',').map((u) => u.trim()).filter(Boolean)
  } else {
    urls = await getSitemapUrls()
  }
  if (LIMIT > 0) urls = urls.slice(0, LIMIT)

  console.log(`Host: ${HOST}`)
  console.log(`URLs a notificar: ${urls.length}`)
  console.log('— IndexNow (Bing/Yandex/…) —')
  const sent = await submitIndexNow(urls)
  console.log('— Google —')
  await pingGoogleBestEffort()
  console.log(`\nHecho. IndexNow: ${sent}/${urls.length} URLs.`)
}

main().catch((e) => {
  console.error('Error fatal:', e.message)
  process.exit(1)
})
