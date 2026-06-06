#!/usr/bin/env node
/**
 * auto-liveblog.mjs
 *
 * Pipeline autónomo del liveblog:
 * 1. Lee directos de medios (El Mundo, ABC, Europa Press, La Vanguardia)
 *    vía su JSON-LD LiveBlogPosting.
 * 2. Identifica las actualizaciones MÁS NUEVAS que la última entrada
 *    publicada en data/liveblog.ts.
 * 3. Reescribe brevemente con un titular nuevo y un resumen, atribuyendo
 *    la fuente (no copia literal).
 * 4. Inserta hasta N entradas al principio de `entries` y actualiza
 *    `dateModified`.
 * 5. (Opcional) Hace `git add/commit/push` si --commit.
 *
 * Uso:
 *   node scripts/auto-liveblog.mjs               (modifica el archivo)
 *   node scripts/auto-liveblog.mjs --commit      (+ commit y push a main)
 *   node scripts/auto-liveblog.mjs --max=3       (máx 3 entradas nuevas)
 *   node scripts/auto-liveblog.mjs --dry-run     (no escribe)
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FILE = join(__dirname, '..', 'data', 'liveblog.ts')

const args = process.argv.slice(2)
const argVal = (n, d = '') => args.find((a) => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=') || d
const MAX = parseInt(argVal('max', '3'), 10)
const DRY = args.includes('--dry-run')
const COMMIT = args.includes('--commit')

const SOURCES = [
  { name: 'El Mundo', url: 'https://www.elmundo.es/espana/2026/06/06/6a23bffc751d9c417fcf9680-directo.html' },
  { name: 'ABC', url: 'https://www.abc.es/sociedad/visita-papa-leon-xiv-madrid-directo-llega-20260605145954-di.html' },
  { name: 'Europa Press', url: 'https://www.europapress.es/sociedad/noticia-visita-papa-espana-2026-directo-agenda-recorrido-discursos-anecdotas-ultima-hora-leon-xiv-20260606055952.html' },
  { name: 'La Vanguardia', url: 'https://www.lavanguardia.com/politica/20260606/11557866/papa-leon-xiv-visita-espana-madrid-ultima-hora-hoy-en-directo.html' },
]
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

function strip(s) {
  return (s || '')
    .replace(/&lt;[\s\S]*?&gt;/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/\s+/g, ' ')
    .trim()
}

function madridTime(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d)) return ''
  return d.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' })
}

function extract(html, source) {
  const blocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  for (const b of blocks) {
    let j
    try { j = JSON.parse(b) } catch { continue }
    const arr = Array.isArray(j) ? j : j['@graph'] || [j]
    for (const o of arr) {
      if (o['@type'] === 'LiveBlogPosting' && Array.isArray(o.liveBlogUpdate)) {
        return o.liveBlogUpdate
          .map((u) => ({
            source,
            iso: u.datePublished || u.dateModified || '',
            time: madridTime(u.datePublished || u.dateModified),
            headline: strip(u.headline || u.name || ''),
            body: strip(u.articleBody || u.text || u.description || ''),
          }))
          .filter((u) => u.headline || u.body)
      }
    }
  }
  return []
}

/**
 * Reescribe brevemente una entrada del medio:
 *   - Titular: limpio y corto, sin la marca del medio.
 *   - Cuerpo: hasta 3-4 frases informativas + atribución a la fuente.
 *   - Si el "headline" del medio es genérico ("directo: agenda…"),
 *     usa la primera frase del cuerpo como titular.
 * Esto NO es traducción literal: se reordena y se atribuye la fuente.
 */
function rewrite(u) {
  const generic = /en directo|agenda oficial|última hora|ultima hora/i.test(u.headline)
  const sentences = u.body.split(/(?<=[\.\?\!])\s+/).filter((s) => s.length > 8)
  const firstSentence = sentences[0] || u.body || u.headline

  let title = u.headline
  if (generic || !title) title = firstSentence
  // Recorta el título a algo razonable y quita comillas exteriores
  title = title.replace(/^["“«]\s*|\s*["”»]$/g, '').trim()
  if (title.length > 110) title = title.slice(0, 108).replace(/\s+\S*$/, '') + '…'

  // Cuerpo: hasta 4 frases. Si solo hay 1, repite/expande con el headline.
  const bodyParts = sentences.slice(0, 4)
  let body = bodyParts.join(' ').trim()
  if (!body) body = u.headline
  if (body.length > 600) body = body.slice(0, 598).replace(/\s+\S*$/, '') + '…'

  // Atribución
  body = `${body} (Según ${u.source}.)`

  return {
    time: u.time,
    datetime: u.iso,
    title,
    body,
  }
}

async function fetchAll() {
  const out = []
  for (const s of SOURCES) {
    try {
      const res = await fetch(s.url, { headers: { 'User-Agent': UA } })
      if (!res.ok) {
        console.error(`  ✗ ${s.name}: HTTP ${res.status}`)
        continue
      }
      const html = await res.text()
      const ups = extract(html, s.name)
      console.error(`  ✓ ${s.name}: ${ups.length} updates`)
      out.push(...ups)
    } catch (e) {
      console.error(`  ✗ ${s.name}: ${e.message}`)
    }
  }
  return out
}

function readFirstEntryIso(src) {
  // Busca el primer { time: '...', datetime: '...' } en entries[]
  const m = src.match(/entries:\s*\[\s*\{\s*time:\s*'[^']*',\s*datetime:\s*'([^']+)'/)
  return m ? m[1] : null
}

function readPublishedTimes(src) {
  // Devuelve el set de HH:MM ya publicados
  return new Set([...src.matchAll(/^\s+time:\s*'([0-9]{1,2}:[0-9]{2})'/gm)].map((m) => m[1]))
}

function readPublishedTitlesNormalised(src) {
  // Conjunto de titulares normalizados ya publicados (para dedupe)
  return new Set(
    [...src.matchAll(/^\s+title:\s*(['"])((?:[^'"\\]|\\.)*)\1/gm)].map((m) => normalise(m[2]))
  )
}

function normalise(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .slice(0, 6)
    .join(' ')
}

function insertEntries(src, entries) {
  if (!entries.length) return src
  const block = entries
    .map(
      (e) => `    {
      time: '${e.time}',
      datetime: '${e.datetime}',
      title: ${JSON.stringify(e.title)},
      body: ${JSON.stringify(e.body)},
    },`
    )
    .join('\n')
  // Insertar tras "entries: ["
  let next = src.replace(/(entries:\s*\[\n)/, `$1${block}\n`)
  // Actualizar dateModified al máximo iso de las nuevas
  const newest = entries.reduce((a, b) => (a.datetime > b.datetime ? a : b))
  next = next.replace(/dateModified:\s*'[^']*'/, `dateModified: '${newest.datetime}'`)
  return next
}

function gitCommitPush(titlePart) {
  try {
    execSync('git add data/liveblog.ts', { stdio: 'pipe' })
    const msg = `liveblog: ${titlePart}\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
    execSync(`git -c user.name="Liveblog Bot" -c user.email="bot@visita-papa-2026.com" commit -m ${JSON.stringify(msg)}`, { stdio: 'pipe' })
    execSync('git push origin main', { stdio: 'pipe' })
    console.error('  ✓ git push OK')
  } catch (e) {
    console.error(`  ✗ git: ${e.stderr?.toString()?.slice(0, 200) || e.message}`)
    process.exitCode = 1
  }
}

async function main() {
  const src = readFileSync(FILE, 'utf8')
  const lastIso = readFirstEntryIso(src)
  const publishedTimes = readPublishedTimes(src)
  const publishedTitles = readPublishedTitlesNormalised(src)
  console.error(`Última entrada publicada: ${lastIso || '(ninguna)'} · ${publishedTimes.size} entradas previas`)

  const updates = await fetchAll()
  // Filtrar: más nuevos que lastIso, hora no publicada, titular no publicado
  const seen = new Set()
  const fresh = updates
    .filter((u) => u.iso && u.headline)
    .filter((u) => !lastIso || u.iso > lastIso)
    .filter((u) => u.time && !publishedTimes.has(u.time))
    .filter((u) => {
      const rew = rewrite(u)
      const norm = normalise(rew.title)
      if (publishedTitles.has(norm)) return false
      if (seen.has(u.time) || seen.has(norm)) return false
      seen.add(u.time); seen.add(norm)
      return true
    })
    .sort((a, b) => a.iso.localeCompare(b.iso)) // ascendente: para insertar las más antiguas primero (quedan al final del bloque insertado)
    .slice(0, MAX)
  console.error(`Novedades: ${fresh.length} (limit=${MAX})`)
  if (!fresh.length) {
    console.error('Nada que publicar.')
    return
  }

  // Reescribir y preparar; las insertamos en orden inverso (más recientes arriba)
  const rewritten = fresh.map(rewrite)
  const inserted = [...rewritten].reverse()

  const next = insertEntries(src, inserted)
  if (DRY) {
    console.error('--- dry-run ---')
    rewritten.forEach((e) => console.error(e.time, '·', e.title))
    return
  }
  writeFileSync(FILE, next)
  console.error(`Insertadas ${inserted.length} entradas en data/liveblog.ts`)
  rewritten.forEach((e) => console.error('  +', e.time, '·', e.title.slice(0, 70)))

  if (COMMIT) {
    const newest = rewritten[rewritten.length - 1]
    const titlePart = `${newest.time} ${newest.title.slice(0, 70)}`
    gitCommitPush(titlePart)
  }
}

main().catch((e) => {
  console.error('Error fatal:', e)
  process.exit(1)
})
