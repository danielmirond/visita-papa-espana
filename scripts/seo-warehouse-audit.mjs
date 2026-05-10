#!/usr/bin/env node
/**
 * seo-warehouse-audit.mjs
 *
 * Auditoría SEO contra señales del leak Google Content Warehouse (mayo 2024).
 * Recorre el sitemap de producción y detecta:
 *   - Títulos largos/cortos o sin keyword principal
 *   - shortTextScore: páginas con <300 palabras
 *   - anchorMismatchDemotion: links internos con anchor genérico
 *   - article:modified_time: presencia/ausencia del meta tag
 *   - meta description: longitud
 *   - H1 múltiples o ausentes
 *
 * Uso:
 *   node scripts/seo-warehouse-audit.mjs                           (todas las rutas)
 *   node scripts/seo-warehouse-audit.mjs --limit=50                (solo 50 URLs)
 *   node scripts/seo-warehouse-audit.mjs --locale=es               (solo /es/*)
 *   node scripts/seo-warehouse-audit.mjs --base=http://localhost:3000
 */

const args = process.argv.slice(2)
const BASE = (args.find((a) => a.startsWith('--base='))?.split('=')[1]) || 'https://www.visita-papa-2026.com'
const LIMIT = parseInt(args.find((a) => a.startsWith('--limit='))?.split('=')[1] || '0', 10)
const LOCALE_FILTER = args.find((a) => a.startsWith('--locale='))?.split('=')[1] || ''

// Anchors genéricos a detectar (multi-idioma)
const GENERIC_ANCHORS = new Set([
  'aquí', 'aqui', 'click', 'clic', 'ver más', 'ver mas', 'leer más', 'leer mas',
  'más info', 'mas info', 'enlace', 'link', 'here', 'read more', 'click here',
  'more', 'more info', 'qui', 'ici', 'mehr', 'hier', 'aqui', 'aquí', 'aquì',
  'qui sopra', 'ulteriori informazioni', 'saiba mais', 'aquí mateix', 'aquí mesmo',
  'hemen', '→',
])

// Keywords mínimas a esperar en title según slug canónico
const TITLE_HINTS = {
  programa: ['programa', 'schedule', 'programm', 'agenda'],
  ciudades: ['ciudad', 'cities', 'città', 'villes', 'städte', 'cidades', 'ciutats', 'hiriak'],
  'como-asistir': ['asistir', 'attend', 'partecipare', 'assister', 'teilnahme', 'assistir', 'parte hartu'],
  'como-llegar': ['llegar', 'get there', 'arrivare', 'rendre', 'anreise', 'chegar', 'arribar'],
  'donde-ver': ['ver', 'watch', 'vedere', 'regarder', 'ansehen', 'ikusi'],
  faq: ['faq', 'preguntas', 'questions'],
  noticias: ['noticias', 'news', 'notizie', 'actualités', 'nachrichten', 'novas', 'albisteak'],
  'papa-bernabeu': ['bernabéu', 'bernabeu'],
  'vigilia-plaza-lima': ['lima', 'vigilia', 'vigil', 'veglia', 'veillée', 'vetlla', 'bijilia'],
  'intenciones-del-papa': ['intenciones', 'intentions', 'intenzioni', 'gebetsanliegen'],
  'como-inscribirse': ['inscrib', 'register', 'iscrivere', 'inscrire', 'anmeld'],
  'papa-leon-xiv': ['león xiv', 'leo xiv', 'leon xiv', 'léon xiv'],
  himno: ['himno', 'anthem', 'inno', 'hymne', 'hino', 'ereserkia'],
  'alzad-la-mirada': ['mirada', 'eyes', 'occhi', 'yeux', 'augen', 'olhos', 'ulls', 'ollos', 'begi'],
  oracion: ['oración', 'prayer', 'preghiera', 'prière', 'gebet', 'oração', 'oració', 'otoitz'],
}

// ----------------------------- Helpers ---------------------------------

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'SEOWarehouseAudit/1.0' } })
  return { status: r.status, text: r.status === 200 ? await r.text() : '' }
}

function extract(html, regex, group = 1) {
  const m = html.match(regex)
  return m ? m[group] : null
}

function extractAll(html, regex, group = 1) {
  const out = []
  let m
  while ((m = regex.exec(html))) out.push(m[group])
  return out
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function countWords(text) {
  return text.split(/\s+/).filter((w) => w.length > 1).length
}

function getCanonicalSlug(path) {
  // Saca el primer slug detrás del locale (/es/foo → 'foo')
  const m = path.match(/^\/[a-z]{2}\/([^/]+)/)
  return m ? m[1] : null
}

function expectedKeywords(slug) {
  if (!slug) return []
  // Busca match en TITLE_HINTS por prefijo
  for (const key of Object.keys(TITLE_HINTS)) {
    if (slug.startsWith(key) || key.startsWith(slug.slice(0, 8))) return TITLE_HINTS[key]
  }
  return []
}

// ----------------------------- Audit -----------------------------------

function auditPage(url, html) {
  const issues = []

  // Title
  const title = extract(html, /<title>([^<]+)<\/title>/i)
  if (!title) {
    issues.push({ severity: 'high', type: 'missing-title', detail: 'No <title>' })
  } else {
    if (title.length < 30) issues.push({ severity: 'medium', type: 'short-title', detail: `${title.length} chars: "${title.slice(0, 60)}"` })
    if (title.length > 65) issues.push({ severity: 'low', type: 'long-title', detail: `${title.length} chars: "${title.slice(0, 60)}"` })
    const path = new URL(url).pathname
    const slug = getCanonicalSlug(path)
    const hints = expectedKeywords(slug)
    if (hints.length && !hints.some((h) => title.toLowerCase().includes(h.toLowerCase()))) {
      issues.push({ severity: 'high', type: 'title-no-keyword', detail: `Title "${title.slice(0, 60)}..." no contiene ninguna de [${hints.join(', ')}]` })
    }
  }

  // Meta description
  const desc = extract(html, /<meta\s+name="description"\s+content="([^"]+)"/i)
  if (!desc) {
    issues.push({ severity: 'high', type: 'missing-description', detail: 'No meta description' })
  } else {
    if (desc.length < 70) issues.push({ severity: 'medium', type: 'short-description', detail: `${desc.length} chars` })
    if (desc.length > 165) issues.push({ severity: 'low', type: 'long-description', detail: `${desc.length} chars` })
  }

  // article:modified_time
  const modTime = extract(html, /<meta\s+property="article:modified_time"\s+content="([^"]+)"/i)
  if (!modTime) {
    issues.push({ severity: 'medium', type: 'no-modified-time', detail: 'Sin article:modified_time (señal lastSignificantUpdate)' })
  }

  // H1 count
  const h1s = extractAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi)
  if (h1s.length === 0) issues.push({ severity: 'high', type: 'no-h1', detail: '0 H1' })
  else if (h1s.length > 1) issues.push({ severity: 'medium', type: 'multiple-h1', detail: `${h1s.length} H1` })

  // Word count (shortTextScore)
  // Nos quedamos solo con <main> si existe; si no, todo el body.
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i)
  const corpus = mainMatch ? mainMatch[0] : html
  const text = stripHtml(corpus)
  const words = countWords(text)
  if (words < 300) issues.push({ severity: 'high', type: 'short-content', detail: `${words} palabras (<300)` })

  // Anchor mismatch (genericos)
  const links = extractAll(html, /<a\s+[^>]*?href="([^"]+)"[^>]*?>([\s\S]*?)<\/a>/gi, 0)
  let genericCount = 0
  const genericExamples = []
  for (const linkHtml of links) {
    const anchor = stripHtml(linkHtml).toLowerCase().trim()
    if (!anchor || anchor.length > 50) continue
    if (GENERIC_ANCHORS.has(anchor)) {
      genericCount++
      if (genericExamples.length < 3) genericExamples.push(anchor)
    }
  }
  if (genericCount > 0) {
    issues.push({ severity: 'medium', type: 'generic-anchors', detail: `${genericCount} anchor(s) genéricos: ${genericExamples.join(', ')}` })
  }

  return { url, words, titleLen: title?.length, descLen: desc?.length, h1Count: h1s.length, issues }
}

// ------------------------------- Main ----------------------------------

async function main() {
  console.log(`Sitemap: ${BASE}/sitemap-0.xml`)
  const { text: smXml, status } = await fetchText(`${BASE}/sitemap-0.xml`)
  if (status !== 200) {
    console.error(`Sitemap inaccesible (HTTP ${status})`)
    process.exit(1)
  }

  let urls = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  if (LOCALE_FILTER) urls = urls.filter((u) => u.includes(`/${LOCALE_FILTER}/`) || u.endsWith(`/${LOCALE_FILTER}`))
  if (LIMIT > 0) urls = urls.slice(0, LIMIT)
  console.log(`URLs a auditar: ${urls.length}\n`)

  const results = []
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    process.stdout.write(`\r[${i + 1}/${urls.length}] ${url.slice(0, 80).padEnd(80)}`)
    try {
      const { status: s, text: html } = await fetchText(url)
      if (s !== 200) {
        results.push({ url, words: 0, issues: [{ severity: 'high', type: 'http-error', detail: `HTTP ${s}` }] })
        continue
      }
      results.push(auditPage(url, html))
    } catch (e) {
      results.push({ url, words: 0, issues: [{ severity: 'high', type: 'fetch-error', detail: e.message }] })
    }
  }
  process.stdout.write('\n\n')

  // ---- Aggregate report ----
  const byType = {}
  let high = 0, med = 0, low = 0
  for (const r of results) {
    for (const issue of r.issues) {
      if (issue.severity === 'high') high++
      else if (issue.severity === 'medium') med++
      else low++
      byType[issue.type] = (byType[issue.type] || 0) + 1
    }
  }

  console.log('═══════════════════════════════════════════════════════')
  console.log('  RESUMEN')
  console.log('═══════════════════════════════════════════════════════')
  console.log(`  URLs auditadas:    ${results.length}`)
  console.log(`  Issues HIGH:       ${high}`)
  console.log(`  Issues MEDIUM:     ${med}`)
  console.log(`  Issues LOW:        ${low}`)
  console.log()
  console.log('  Por tipo:')
  for (const [type, count] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${type.padEnd(28)} ${count}`)
  }

  // ---- TOP 10 worst pages ----
  const worst = [...results]
    .map((r) => ({ ...r, score: r.issues.reduce((s, i) => s + (i.severity === 'high' ? 3 : i.severity === 'medium' ? 1 : 0), 0) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)

  console.log('\n═══════════════════════════════════════════════════════')
  console.log('  TOP 10 PÁGINAS PEORES (por gravedad)')
  console.log('═══════════════════════════════════════════════════════')
  for (const r of worst) {
    console.log(`\n  ${r.url}`)
    console.log(`  ${r.words ?? '?'} palabras · ${r.issues.length} issue(s) · score=${r.score}`)
    for (const i of r.issues) {
      const tag = i.severity === 'high' ? '🔴' : i.severity === 'medium' ? '🟡' : '⚪'
      console.log(`    ${tag} [${i.type}] ${i.detail}`)
    }
  }

  // ---- Examples per type ----
  console.log('\n═══════════════════════════════════════════════════════')
  console.log('  EJEMPLOS POR TIPO DE ISSUE (primeros 3 de cada uno)')
  console.log('═══════════════════════════════════════════════════════')
  const examplesByType = {}
  for (const r of results) {
    for (const i of r.issues) {
      if (!examplesByType[i.type]) examplesByType[i.type] = []
      if (examplesByType[i.type].length < 3) examplesByType[i.type].push({ url: r.url, detail: i.detail })
    }
  }
  for (const [type, examples] of Object.entries(examplesByType)) {
    console.log(`\n  ▸ ${type} (${byType[type]} total):`)
    for (const e of examples) console.log(`      ${e.url}\n      └ ${e.detail}`)
  }
}

main().catch((e) => {
  console.error('Error fatal:', e)
  process.exit(1)
})
