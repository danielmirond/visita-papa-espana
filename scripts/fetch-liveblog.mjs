#!/usr/bin/env node
/**
 * fetch-liveblog.mjs
 *
 * Lee los directos (liveblogs) de varios medios que exponen su feed como
 * JSON-LD LiveBlogPosting → liveBlogUpdate, fusiona las actualizaciones,
 * las ordena por hora (más reciente primero) y las imprime en JSON.
 *
 * NO se publican tal cual: sirven de materia prima para REESCRIBIRLAS con
 * texto propio antes de meterlas en data/liveblog.ts.
 *
 * Uso: node scripts/fetch-liveblog.mjs [--limit=15]
 */

const SOURCES = [
  { name: 'El Mundo', url: 'https://www.elmundo.es/espana/2026/06/06/6a23bffc751d9c417fcf9680-directo.html' },
  { name: 'ABC', url: 'https://www.abc.es/sociedad/visita-papa-leon-xiv-madrid-directo-llega-20260605145954-di.html' },
  { name: 'Europa Press', url: 'https://www.europapress.es/sociedad/noticia-visita-papa-espana-2026-directo-agenda-recorrido-discursos-anecdotas-ultima-hora-leon-xiv-20260606055952.html' },
  { name: 'La Vanguardia', url: 'https://www.lavanguardia.com/politica/20260606/11557866/papa-leon-xiv-visita-espana-madrid-ultima-hora-hoy-en-directo.html' },
]

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
const LIMIT = parseInt(process.argv.find((a) => a.startsWith('--limit='))?.split('=')[1] || '15', 10)

function strip(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
}

function madridTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d)) return ''
  return d.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' })
}

function extractUpdates(html, source) {
  const blocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  for (const b of blocks) {
    let j
    try {
      j = JSON.parse(b)
    } catch {
      continue
    }
    const arr = Array.isArray(j) ? j : j['@graph'] || [j]
    for (const o of arr) {
      if (o['@type'] === 'LiveBlogPosting' && Array.isArray(o.liveBlogUpdate)) {
        return o.liveBlogUpdate
          .map((u) => ({
            source,
            iso: u.datePublished || u.dateModified || '',
            time: madridTime(u.datePublished || u.dateModified),
            headline: strip(u.headline || u.name || ''),
            body: strip(u.articleBody || u.text || u.description || '').slice(0, 600),
          }))
          .filter((u) => u.headline)
      }
    }
  }
  return []
}

async function main() {
  const all = []
  for (const s of SOURCES) {
    try {
      const res = await fetch(s.url, { headers: { 'User-Agent': UA } })
      if (!res.ok) {
        console.error(`  ✗ ${s.name}: HTTP ${res.status}`)
        continue
      }
      const html = await res.text()
      const ups = extractUpdates(html, s.name)
      console.error(`  ✓ ${s.name}: ${ups.length} updates`)
      all.push(...ups)
    } catch (e) {
      console.error(`  ✗ ${s.name}: ${e.message}`)
    }
  }
  all.sort((a, b) => (b.iso || '').localeCompare(a.iso || ''))
  console.log(JSON.stringify(all.slice(0, LIMIT), null, 2))
}

main()
