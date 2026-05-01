#!/usr/bin/env node
/**
 * fetch-news.mjs
 *
 * Lee RSS de fuentes católicas oficiales y añade noticias relevantes
 * sobre la visita del Papa León XIV a España al archivo data/news.ts.
 *
 * Ejecución:
 *   node scripts/fetch-news.mjs                     (añade al archivo)
 *   node scripts/fetch-news.mjs --dry-run           (solo imprime)
 *   node scripts/fetch-news.mjs --max=3             (límite por fuente)
 *
 * Fuentes:
 *   - Alfa y Omega (alfayomega.es/feed)
 *   - Conferencia Episcopal Española (conferenciaepiscopal.es/feed)
 *   - Vatican News ES (vaticannews.va/es.rss.xml)
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const NEWS_FILE = join(__dirname, '..', 'data', 'news.ts')

const FEEDS = [
  { name: 'Alfa y Omega', url: 'https://alfayomega.es/feed/' },
  { name: 'Conferencia Episcopal Española', url: 'https://www.conferenciaepiscopal.es/feed/' },
  { name: 'Vatican News', url: 'https://www.vaticannews.va/es.rss.xml' },
  { name: 'ACI Prensa', url: 'https://www.aciprensa.com/rss' },
  { name: 'Omnes Mag', url: 'https://www.omnesmag.com/feed/' },
  { name: 'Ecclesia', url: 'https://revistaecclesia.es/feed/' },
  { name: 'Religión Digital', url: 'https://www.religiondigital.org/rss/' },
  { name: 'Vida Nueva', url: 'https://www.vidanuevadigital.com/feed/' },
]

// =============================================================================
// FILTRADO POR CAPAS
// =============================================================================
// Tier 1 (VISIT_KEYWORDS): noticia específica del viaje a España.
// Tier 2 (POPE_MAGISTERIUM): magisterio de León XIV (encíclicas, audiencias,
//        mensajes) — relevante como contenido contextual aunque no mencione España.
// Tier 3 (SPAIN_PREP): preparación de la Iglesia española para la visita
//        (voluntarios, peregrinos, diócesis anfitrionas).
// =============================================================================

// Tier 1: muy específico al viaje — lugares concretos o menciones explícitas.
const VISIT_KEYWORDS = [
  /sagrada\s+famil[ií]a/i,
  /plaza\s+de\s+(lima|cibeles)/i,
  /arguinegu[ií]n/i,
  /las\s+ra[ií]ces/i,
  /montjuic/i,
  /montserrat/i,
  /bernab[eé]u/i,
  /almudena/i,
  /zarzuela/i,
  /conelpapa/i,
  /archimadrid/i,
  /alzad\s+la\s+mirada/i,
  /viaje\s+(papal|apost[oó]lico|pastoral)\s+a\s+espa[ñn]a/i,
  /visita\s+(papal|apost[oó]lica|pastoral)\s+a\s+espa[ñn]a/i,
  /visita\s+(del\s+)?papa\s+(a|en|de)\s+espa[ñn]a/i,
  /visita\s+de\s+le[oó]n\s+xiv\s+a\s+espa[ñn]a/i,
  /papa\s+en\s+espa[ñn]a/i,
  /papa\s+.{0,50}\s+madrid/i,
  /papa\s+.{0,50}\s+barcelona/i,
  /papa\s+.{0,50}\s+canarias/i,
  /papa\s+.{0,50}\s+tenerife/i,
  /le[oó]n\s+xiv\s+.{0,50}\s+(madrid|barcelona|canarias|tenerife|espa[ñn]a)/i,
  /(madrid|barcelona|canarias|tenerife|espa[ñn]a)\s+.{0,50}\s+le[oó]n\s+xiv/i,
  /\b6\s*(-|a|al)\s*12\s+(de\s+)?junio/i, // fechas de la visita
]

// Tier 2: magisterio de León XIV. Requiere que aparezca León XIV / Papa
// junto con un tema doctrinal o acto magisterial. Solo aplicamos esta capa
// a fuentes con alta señal y baja redundancia (no a portales generalistas).
const POPE_MAGISTERIUM_PATTERNS = [
  /le[oó]n\s+xiv\s+.{0,80}(encíclica|enciclica|exhortación|exhortacion|carta apost[oó]lica|mensaje|catequesis|audiencia general|ángelus|angelus|homilía|homilia|discurso|motu proprio)/i,
  /(encíclica|enciclica|exhortación|exhortacion|catequesis|homilía|homilia)\s+.{0,80}\s+le[oó]n\s+xiv/i,
  /el\s+papa\s+.{0,60}\s+(pide|llama|denuncia|exhorta|recuerda|pronuncia|publica|firma)\s+/i,
  /le[oó]n\s+xiv\s+.{0,60}\s+(pide|llama|denuncia|exhorta|recuerda|pronuncia|publica|firma)\s+/i,
  /audiencia\s+(general|de\s+los\s+miércoles|del\s+santo\s+padre)/i,
  /(ángelus|angelus|regina\s+caeli)\s+.{0,40}\s+le[oó]n\s+xiv/i,
]

// Tier 3: preparación de la Iglesia española para la visita.
// Combinaciones de: keyword de preparación + España/diócesis/CEE.
const SPAIN_PREP_PATTERNS = [
  /(voluntari[oa]s?|peregrin[oa]s?|inscrip[cs]i[oó]n|preparativos?|preparaci[oó]n)\s+.{0,60}\s+(papa|le[oó]n\s+xiv|visita|viaje)/i,
  /(papa|le[oó]n\s+xiv|visita|viaje)\s+.{0,60}\s+(voluntari[oa]s?|peregrin[oa]s?|inscrip[cs]i[oó]n|preparativos?|preparaci[oó]n)/i,
  /conferencia\s+episcopal\s+espa[ñn]ola\s+.{0,80}\s+(papa|le[oó]n\s+xiv|visita|viaje)/i,
  /(arz?obispado|archidi[oó]cesis|di[oó]cesis)\s+(de\s+)?(madrid|barcelona|canarias|tenerife)\s+.{0,80}\s+(papa|visita|viaje|le[oó]n\s+xiv)/i,
  /(asamblea\s+plenaria|cardenal\s+omella|argüello|argüello|cobo|os[oó]ro)\s+.{0,60}\s+(papa|visita|viaje|le[oó]n\s+xiv)/i,
  /(papa|le[oó]n\s+xiv|visita|viaje|peregrinos?)\s+.{0,60}\s+(asamblea\s+plenaria|cardenal\s+omella|argüello|argüello|cobo|os[oó]ro)/i,
  /himno\s+(oficial\s+)?(de\s+la\s+)?visita/i,
]

// Fuentes en las que aplicamos las capas Tier 2 y Tier 3 (alta señal).
const HIGH_SIGNAL_SOURCES = new Set([
  'Alfa y Omega',
  'Conferencia Episcopal Española',
  'Vatican News',
  'Ecclesia',
  'Omnes Mag',
  'Vida Nueva',
])

// Ciudades relacionadas a detectar en el texto para el campo relatedCities
const CITY_MATCHERS = {
  madrid: /madrid|cibeles|bernab[eé]u|almudena|castellana|zarzuela|carabanchel|lima/i,
  barcelona: /barcelona|sagrada\s+famil[ií]a|montjuic|montserrat|gaud[ií]/i,
  'gran-canaria': /gran\s+canaria|arguinegu[ií]n|las\s+palmas/i,
  tenerife: /tenerife|las\s+ra[ií]ces|santa\s+cruz/i,
}

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const MAX_PER_FEED = parseInt(
  args.find((a) => a.startsWith('--max='))?.split('=')[1] || '5',
  10
)

// ----------------------------- XML parsing -----------------------------

function extractTag(xml, tag, startAt = 0) {
  const open = xml.indexOf(`<${tag}`, startAt)
  if (open === -1) return null
  const contentStart = xml.indexOf('>', open) + 1
  const close = xml.indexOf(`</${tag}>`, contentStart)
  if (close === -1) return null
  return {
    content: xml.slice(contentStart, close),
    end: close + tag.length + 3,
  }
}

function decodeCdata(text) {
  if (!text) return ''
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]*>/g, '') // Quitar cualquier HTML
    .replace(/\s+/g, ' ')
    .trim()
}

function parseRss(xml) {
  const items = []
  let cursor = 0
  while (true) {
    const item = extractTag(xml, 'item', cursor)
    if (!item) break
    cursor = item.end

    const titleRaw = extractTag(item.content, 'title')?.content || ''
    const linkRaw = extractTag(item.content, 'link')?.content || ''
    const descRaw = extractTag(item.content, 'description')?.content || ''
    const dateRaw =
      extractTag(item.content, 'pubDate')?.content ||
      extractTag(item.content, 'dc:date')?.content ||
      ''

    items.push({
      title: decodeCdata(titleRaw),
      link: decodeCdata(linkRaw),
      description: decodeCdata(descRaw),
      date: dateRaw.trim(),
    })
  }
  return items
}

// ----------------------------- Filtering -------------------------------

function isRelevant(item, sourceName) {
  // El TÍTULO es la señal más fuerte (la descripción suele ser ruido).
  // Devuelve { ok, category } o null si no pasa.
  const title = item.title
  const url = item.link.toLowerCase()

  // Tier 1 — viaje específico a España. Cualquier fuente.
  const titleHasVisit = VISIT_KEYWORDS.some((rx) => rx.test(title))
  const urlHasVisit =
    /viaje-del-papa-a-espana|papa-leon-xiv-(espana|madrid|barcelona|canarias|tenerife)|visita-papa-leon-xiv-espana|visita-pastoral-madrid|viaje-papa-espana|visita-pontifical-espana/i.test(
      url
    )
  if (titleHasVisit || urlHasVisit) return { ok: true, category: 'visita' }

  // Tier 2 y Tier 3 solo en fuentes de alta señal (evita ruido).
  if (!HIGH_SIGNAL_SOURCES.has(sourceName)) return null

  // Tier 2 — magisterio del Papa León XIV (contexto doctrinal).
  if (POPE_MAGISTERIUM_PATTERNS.some((rx) => rx.test(title))) {
    return { ok: true, category: 'papa' }
  }

  // Tier 3 — preparación de la Iglesia española para la visita.
  if (SPAIN_PREP_PATTERNS.some((rx) => rx.test(title))) {
    return { ok: true, category: 'iglesia-espana' }
  }

  return null
}

function detectCities(item) {
  const text = `${item.title} ${item.description}`
  const cities = []
  for (const [slug, rx] of Object.entries(CITY_MATCHERS)) {
    if (rx.test(text)) cities.push(slug)
  }
  return cities.length > 0 ? cities : ['madrid', 'barcelona', 'gran-canaria', 'tenerife']
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function isoDate(dateStr) {
  if (!dateStr) return new Date().toISOString().slice(0, 10)
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10)
  return d.toISOString().slice(0, 10)
}

// --------------------------- File I/O ----------------------------------

function escapeForTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function buildNewsEntry(item, sourceName) {
  const slug = slugify(item.title)
  const excerpt = item.description.slice(0, 220) + (item.description.length > 220 ? '…' : '')
  return {
    slug,
    title: item.title,
    excerpt,
    content: item.description,
    date: isoDate(item.date),
    source: sourceName,
    sourceUrl: item.link,
    relatedCities: detectCities(item),
  }
}

function formatTsEntry(entry) {
  const cities = entry.relatedCities.map((c) => `'${c}'`).join(', ')
  return `  {
    slug: '${escapeForTs(entry.slug)}',
    title: '${escapeForTs(entry.title)}',
    excerpt: '${escapeForTs(entry.excerpt)}',
    content: '${escapeForTs(entry.content)}',
    date: '${entry.date}',
    source: '${escapeForTs(entry.source)}',
    sourceUrl: '${escapeForTs(entry.sourceUrl)}',
    relatedCities: [${cities}],
  },`
}

function readExistingSlugsAndUrls() {
  const content = readFileSync(NEWS_FILE, 'utf8')
  const slugs = new Set()
  const urls = new Set()
  const slugRx = /slug:\s*['"]([^'"]+)['"]/g
  const urlRx = /sourceUrl:\s*['"]([^'"]+)['"]/g
  let m
  while ((m = slugRx.exec(content))) slugs.add(m[1])
  while ((m = urlRx.exec(content))) urls.add(m[1])
  return { existingSlugs: slugs, existingUrls: urls }
}

function insertIntoNewsFile(entries) {
  const content = readFileSync(NEWS_FILE, 'utf8')
  const marker = 'export const news: NewsArticle[] = ['
  const idx = content.indexOf(marker)
  if (idx === -1) throw new Error('No se encontró el array "news" en news.ts')
  const insertAt = idx + marker.length
  const block = '\n' + entries.map(formatTsEntry).join('\n') + '\n'
  const updated = content.slice(0, insertAt) + block + content.slice(insertAt)
  writeFileSync(NEWS_FILE, updated, 'utf8')
}

// ------------------------------- Main ----------------------------------

async function fetchFeed(feed) {
  const res = await fetch(feed.url, {
    headers: {
      'User-Agent': 'VisitaPapa2026Bot/1.0 (+https://www.visita-papa-2026.es)',
      Accept: 'application/rss+xml, application/xml, text/xml',
    },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} ${feed.url}`)
  const xml = await res.text()
  return parseRss(xml)
}

async function main() {
  const { existingSlugs, existingUrls } = readExistingSlugsAndUrls()
  const added = []
  const perSource = {}

  for (const feed of FEEDS) {
    try {
      const items = await fetchFeed(feed)
      const relevant = items
        .map((it) => ({ item: it, match: isRelevant(it, feed.name) }))
        .filter(({ match }) => match)
        .slice(0, MAX_PER_FEED)
      perSource[feed.name] = {
        total: relevant.length,
        visita: relevant.filter((r) => r.match.category === 'visita').length,
        papa: relevant.filter((r) => r.match.category === 'papa').length,
        'iglesia-espana': relevant.filter((r) => r.match.category === 'iglesia-espana').length,
      }
      for (const { item, match } of relevant) {
        if (!item.title || !item.link) continue
        if (existingUrls.has(item.link)) continue
        const entry = buildNewsEntry(item, feed.name)
        if (existingSlugs.has(entry.slug)) continue
        existingSlugs.add(entry.slug)
        existingUrls.add(item.link)
        added.push({ ...entry, _category: match.category })
      }
    } catch (err) {
      console.error(`  ✗ Error en ${feed.name}: ${err.message}`)
      perSource[feed.name] = `error: ${err.message}`
    }
  }

  console.log('RSS results:', perSource)

  if (added.length === 0) {
    console.log('No hay noticias nuevas.')
    return
  }

  console.log(`\n${added.length} noticia(s) nueva(s):`)
  added.forEach((e) => {
    console.log(`  - [${e.source}/${e._category}] ${e.title}`)
  })

  // _category es solo para log; lo eliminamos antes de escribir al .ts
  added.forEach((e) => delete e._category)

  if (DRY_RUN) {
    console.log('\n[DRY RUN] No se ha escrito nada.')
    return
  }

  insertIntoNewsFile(added)
  console.log(`\n✓ ${added.length} noticia(s) añadida(s) a data/news.ts`)
}

main().catch((err) => {
  console.error('Error fatal:', err)
  process.exit(1)
})
