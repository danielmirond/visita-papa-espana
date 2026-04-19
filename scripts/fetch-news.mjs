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
]

// Para ser relevante, la noticia tiene que cumplir DOS condiciones (AND):
//   1. Mencionar al Papa / León XIV / Vaticano
//   2. Mencionar España, una ciudad de la visita o un lugar específico
// Esto evita incluir noticias de otros viajes papales (Camerún, etc.).
const POPE_KEYWORDS = [
  /papa(\s+le[oó]n\s+xiv)?/i,
  /le[oó]n\s+xiv/i,
  /pont[ií]fice/i,
  /santo\s+padre/i,
]

// Debe ser muy específico a la visita: lugares concretos o menciones
// de "viaje/visita a España". Quitamos palabras ambiguas que aparecen
// en contextos no relacionados (ej: "sacerdotes españoles" en Camerún).
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

function isRelevant(item) {
  // Para ser relevante el TÍTULO (no solo la descripción) debe mencionar
  // la visita a España o un lugar específico. Así evitamos que noticias
  // sobre otros viajes papales se cuelen por mencionar "España" de pasada.
  const title = item.title
  const url = item.link.toLowerCase()

  const titleHasVisit = VISIT_KEYWORDS.some((rx) => rx.test(title))
  const urlHasVisit =
    /viaje-del-papa-a-espana|papa-leon-xiv-(espana|madrid|barcelona|canarias|tenerife)|visita-papa-leon-xiv-espana|visita-pastoral-madrid|viaje-papa-espana|visita-pontifical-espana/i.test(
      url
    )

  return titleHasVisit || urlHasVisit
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
      const relevant = items.filter(isRelevant).slice(0, MAX_PER_FEED)
      perSource[feed.name] = relevant.length
      for (const item of relevant) {
        if (!item.title || !item.link) continue
        if (existingUrls.has(item.link)) continue
        const entry = buildNewsEntry(item, feed.name)
        if (existingSlugs.has(entry.slug)) continue
        existingSlugs.add(entry.slug)
        existingUrls.add(item.link)
        added.push(entry)
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
    console.log(`  - [${e.source}] ${e.title}`)
  })

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
