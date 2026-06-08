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

// Directos del 8 de junio (Congreso de los Diputados + Bernabéu). Los medios
// abren una URL nueva por día; algunas reutilizan la misma URL "rolling".
// El script descarta automáticamente las que devuelvan 404 o sin JSON-LD.
const SOURCES = [
  { name: 'OKDiario', url: 'https://okdiario.com/espana/papa-leon-xiv-madrid-directo-agenda-horarios-reunion-pedro-sanchez-discurso-congreso-ultima-hora-visita-hoy-17937499' },
  { name: 'El Español', url: 'https://www.elespanol.com/madrid/20260607/visita-papa-leon-xiv-madrid-directo-horario-misa-cibeles-cortes-trafico-agenda-oficial-actos-domingo/1003744276656_10.html' },
  { name: 'ABC', url: 'https://www.abc.es/sociedad/visita-papa-leon-xiv-madrid-directo-agenda-20260607115324-di.html' },
  { name: 'Lecturas', url: 'https://www.lecturas.com/actualidad/visita-papa-leon-xiv-a-madrid-directo_193939' },
  { name: 'Europa Press', url: 'https://www.europapress.es/sociedad/noticia-visita-papa-espana-2026-directo-agenda-recorrido-discursos-anecdotas-ultima-hora-leon-xiv-20260606055952.html' },
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

/**
 * Normaliza la fecha de un liveBlogUpdate a ISO con offset de Madrid.
 * Algunos medios (p. ej. Lecturas) usan "DD/MM/YYYY HH:MM", que new Date()
 * interpreta como MM/DD (formato US) y manda la fecha al futuro. Lo convertimos
 * explícitamente para no corromper el orden ni dateModified.
 */
function toIso(raw) {
  if (!raw) return ''
  const m = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})[ T](\d{2}):(\d{2})/)
  if (m) {
    const [, dd, mm, yyyy, HH, MM] = m
    return `${yyyy}-${mm}-${dd}T${HH}:${MM}:00+02:00`
  }
  return raw
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
          .map((u) => {
            const iso = toIso(u.datePublished || u.dateModified || '')
            return {
              source,
              iso,
              time: madridTime(iso),
              headline: strip(u.headline || u.name || ''),
              body: strip(u.articleBody || u.text || u.description || ''),
            }
          })
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
  // Actualizar dateModified al máximo iso (por epoch) de las nuevas
  const newest = entries.reduce((a, b) => (new Date(a.datetime).getTime() >= new Date(b.datetime).getTime() ? a : b))
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
  // El liveblog ACTIVO es el primer bloque del archivo (donde se insertan las
  // entradas nuevas). Acotamos las lecturas a ese bloque para no deduplicar
  // contra horas/títulos de liveblogs de días anteriores.
  const blockStarts = [...src.matchAll(/export const liveblog\w+:/g)].map((m) => m.index)
  const activeBlock =
    blockStarts.length >= 2 ? src.slice(blockStarts[0], blockStarts[1]) : src
  const lastIso = readFirstEntryIso(activeBlock)
  const publishedTimes = readPublishedTimes(activeBlock)
  const publishedTitles = readPublishedTitlesNormalised(activeBlock)
  console.error(`Última entrada publicada: ${lastIso || '(ninguna)'} · ${publishedTimes.size} entradas previas`)

  const lastMs = lastIso ? new Date(lastIso).getTime() : 0
  const updates = await fetchAll()
  // Filtrar por EPOCH (no string: hay isos en Z y en +02:00), hora no
  // publicada, titular no publicado. Coge las MÁS NUEVAS.
  const seen = new Set()
  const fresh = updates
    .filter((u) => u.iso && u.headline)
    .filter((u) => { const t = new Date(u.iso).getTime(); return !isNaN(t) && t > lastMs })
    .filter((u) => u.time && !publishedTimes.has(u.time))
    .filter((u) => {
      const rew = rewrite(u)
      const norm = normalise(rew.title)
      if (publishedTitles.has(norm)) return false
      if (seen.has(u.time) || seen.has(norm)) return false
      seen.add(u.time); seen.add(norm)
      return true
    })
    .sort((a, b) => new Date(b.iso).getTime() - new Date(a.iso).getTime()) // DESC: las más nuevas primero
    .slice(0, MAX)
  console.error(`Novedades: ${fresh.length} (limit=${MAX})`)
  if (!fresh.length) {
    console.error('Nada que publicar.')
    return
  }

  // fresh ya viene de más nueva a más antigua → ese es el orden de inserción
  // (la más nueva queda arriba del todo).
  const rewritten = fresh.map(rewrite)
  const inserted = rewritten

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
