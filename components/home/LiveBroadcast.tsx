'use client'

import { useState, useEffect } from 'react'
import { liveBroadcast, toYouTubeEmbed } from '@/data/liveBroadcast'
import type { Locale } from '@/data/i18n/types'

interface Strings {
  live: string
  startsAtPrefix: string // "Empieza a las"
  today: string
  tomorrow: string
  countdownPrefix: string // "Empieza en"
  soon: string // "El directo está a punto de empezar"
  watchOnRtve: string
  source: (s: string) => string
}

const L: Record<'es' | 'en', Strings> = {
  es: {
    live: 'EN DIRECTO',
    startsAtPrefix: 'Empieza a las',
    today: 'hoy',
    tomorrow: 'mañana',
    countdownPrefix: 'Empieza en',
    soon: 'El directo está a punto de empezar…',
    watchOnRtve: 'Ver en RTVE',
    source: (s) => `Señal de ${s}`,
  },
  en: {
    live: 'LIVE',
    startsAtPrefix: 'Starts at',
    today: 'today',
    tomorrow: 'tomorrow',
    countdownPrefix: 'Starts in',
    soon: 'The live stream is about to begin…',
    watchOnRtve: 'Watch on RTVE',
    source: (s) => `${s} signal`,
  },
}

function two(n: number) {
  return String(n).padStart(2, '0')
}

function fmtTime(iso: string, locale: Locale) {
  return new Date(iso).toLocaleTimeString(locale === 'es' ? 'es-ES' : 'en-GB', {
    timeZone: 'Europe/Madrid',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function isTomorrow(startMs: number, nowMs: number) {
  const fmt = (ms: number) =>
    new Date(ms).toLocaleDateString('es-ES', { timeZone: 'Europe/Madrid', day: '2-digit', month: '2-digit', year: 'numeric' })
  return fmt(startMs) !== fmt(nowMs)
}

export default function LiveBroadcast({ locale }: { locale: Locale }) {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!liveBroadcast.enabled) return null

  const start = new Date(liveBroadcast.startsAt).getTime()
  const end = new Date(liveBroadcast.endsAt).getTime()
  const t = locale === 'es' ? L.es : L.en
  const embed = toYouTubeEmbed(liveBroadcast.youtubeUrl)

  // Pre-montaje (SSR): banner de anuncio neutral para evitar mismatch de hidratación
  const startLabel = `${t.startsAtPrefix} ${fmtTime(liveBroadcast.startsAt, locale)}`

  if (now === null) {
    return (
      <Announcement t={t} startLabel={startLabel} when="" />
    )
  }

  if (now > end) return null

  // En ventana de directo
  if (now >= start) {
    if (embed) {
      return (
        <section className="bg-papal-navy">
          <div className="mx-auto max-w-5xl px-3 py-4 sm:px-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                {t.live}
              </span>
              <span className="text-sm font-semibold text-white">{t.source(liveBroadcast.source)}</span>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                src={embed}
                title={t.source(liveBroadcast.source)}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )
    }
    // Directo en ventana pero sin URL configurada todavía
    return <Announcement t={t} startLabel={t.soon} when="" live />
  }

  // Antes del inicio: cuenta atrás
  const diff = Math.max(0, start - now)
  const h = Math.floor(diff / 3_600_000)
  const m = Math.floor((diff % 3_600_000) / 60_000)
  const s = Math.floor((diff % 60_000) / 1000)
  const when = isTomorrow(start, now) ? t.tomorrow : t.today
  const countdown = h > 0 ? `${h}h ${two(m)}m ${two(s)}s` : `${m}m ${two(s)}s`

  return <Announcement t={t} startLabel={`${startLabel} (${when})`} when={`${t.countdownPrefix} ${countdown}`} />
}

function Announcement({
  t,
  startLabel,
  when,
  live = false,
}: {
  t: Strings
  startLabel: string
  when: string
  live?: boolean
}) {
  return (
    <section className="border-b border-red-700 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 text-xs font-bold">
            <span className="h-2 w-2 rounded-full bg-white" />
            {live ? t.live : '📡'}
          </span>
          <span className="text-sm font-bold sm:text-base">{startLabel}</span>
          {when && <span className="text-sm text-white/85">· {when}</span>}
        </div>
        <a
          href="https://www.rtve.es/directo/la-1/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white px-4 py-1.5 text-sm font-bold text-red-700 transition-colors hover:bg-red-50"
        >
          {t.watchOnRtve} →
        </a>
      </div>
    </section>
  )
}
