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

import { createSign } from 'node:crypto'

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

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/**
 * Envía (re-submite) el sitemap a Google Search Console vía su API oficial
 * (sitemaps.submit). Es lo soportado para "avisar" a Google: el ping de
 * sitemap está deprecado y la Indexing API solo admite JobPosting/BroadcastEvent.
 *
 * Requiere (como secrets en GitHub):
 *   GOOGLE_SA_KEY  → JSON de una service account en base64
 *   GSC_PROPERTY   → propiedad de Search Console (ej. "https://www.visita-papa-2026.com/"
 *                    o "sc-domain:visita-papa-2026.com")
 * La service account debe estar añadida como usuario en esa propiedad de GSC.
 */
async function submitGoogleSearchConsole() {
  const rawKey = process.env.GOOGLE_SA_KEY
  const property = process.env.GSC_PROPERTY
  if (!rawKey || !property) {
    console.log('  GSC: omitido (define GOOGLE_SA_KEY y GSC_PROPERTY para activar el envío oficial a Google).')
    return
  }
  try {
    const sa = JSON.parse(Buffer.from(rawKey, 'base64').toString('utf8'))
    const now = Math.floor(Date.now() / 1000)
    const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
    const claim = base64url(
      JSON.stringify({
        iss: sa.client_email,
        scope: 'https://www.googleapis.com/auth/webmasters',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
      })
    )
    const signer = createSign('RSA-SHA256')
    signer.update(`${header}.${claim}`)
    const signature = signer.sign(sa.private_key).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    const assertion = `${header}.${claim}.${signature}`

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    })
    const token = (await tokenRes.json()).access_token
    if (!token) {
      console.error('  GSC ERROR: no se obtuvo access_token.')
      return
    }
    const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/sitemaps/${encodeURIComponent(`${BASE}/sitemap.xml`)}`
    const res = await fetch(endpoint, { method: 'PUT', headers: { Authorization: `Bearer ${token}` } })
    if (res.status === 200 || res.status === 204) {
      console.log(`  GSC: sitemap re-enviado a Search Console (HTTP ${res.status}).`)
    } else {
      console.error(`  GSC ERROR HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`)
    }
  } catch (e) {
    console.error(`  GSC ERROR: ${e.message}`)
  }
}

/** Obtiene un access_token de Google para una service account y un scope. */
async function googleAccessToken(scope) {
  const rawKey = process.env.GOOGLE_SA_KEY
  if (!rawKey) return null
  const sa = JSON.parse(Buffer.from(rawKey, 'base64').toString('utf8'))
  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = base64url(
    JSON.stringify({ iss: sa.client_email, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })
  )
  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claim}`)
  const signature = signer.sign(sa.private_key).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claim}.${signature}` }),
  })
  return (await tokenRes.json()).access_token || null
}

/**
 * Google Indexing API (urlNotifications:publish). SOLO es válido para
 * páginas con BroadcastEvent (livestream) o JobPosting — como el liveblog,
 * que lleva VideoObject + BroadcastEvent. Fuerza un re-rastreo rápido.
 * Requiere GOOGLE_SA_KEY y que la service account sea propietaria en GSC.
 */
async function notifyGoogleIndexing(urls) {
  if (!urls.length) return
  if (!process.env.GOOGLE_SA_KEY) {
    console.log('  Indexing API: omitido (define GOOGLE_SA_KEY).')
    return
  }
  try {
    const token = await googleAccessToken('https://www.googleapis.com/auth/indexing')
    if (!token) {
      console.error('  Indexing API ERROR: no se obtuvo access_token.')
      return
    }
    for (const url of urls) {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      })
      console.log(`  Indexing API: ${url} → HTTP ${res.status}`)
    }
  } catch (e) {
    console.error(`  Indexing API ERROR: ${e.message}`)
  }
}

async function main() {
  // Modo dedicado: --index=url1,url2 → solo notifica a la Indexing API.
  const indexArg = argVal('index')
  if (indexArg) {
    const u = indexArg.split(',').map((x) => x.trim()).filter(Boolean)
    console.log(`Indexing API: ${u.length} URL(s)`)
    await notifyGoogleIndexing(u)
    return
  }

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
  await submitGoogleSearchConsole()
  await pingGoogleBestEffort()
  console.log(`\nHecho. IndexNow: ${sent}/${urls.length} URLs.`)
}

main().catch((e) => {
  console.error('Error fatal:', e.message)
  process.exit(1)
})
