'use client'

import { useState } from 'react'
import type { Locale } from '@/data/i18n/types'

/**
 * Selector de vídeos clave de la visita (modo recap, sustituye al directo).
 * Pestañas estilo señal: cada una carga un embed de YouTube.
 *
 * 👉 Para añadir un momento: pega aquí su ID de YouTube (la parte tras
 *    `watch?v=` o tras `youtu.be/`). El primero del array es el que se
 *    muestra por defecto. Orden = orden de las pestañas.
 */
interface KeyVideo {
  id: string // ID de YouTube (NO la URL completa)
  label: string // texto de la pestaña (corto)
  title: string // titular sobre el player
  meta: string // ciudad · fecha
}

const VIDEOS: KeyVideo[] = [
  {
    id: 'L7LwFouh1pE',
    label: 'Torre de Jesucristo',
    title: 'El Papa bendice e ilumina la Torre de Jesucristo',
    meta: 'Barcelona · 10 de junio',
  },
  // 👇 Pega aquí el resto de momentos clave (vigilia de los jóvenes en Madrid,
  //    misa de clausura en Tenerife, llegada a España, etc.). Ejemplo:
  // { id: 'XXXXXXXXXXX', label: 'Vigilia jóvenes', title: 'Vigilia con los jóvenes en Madrid', meta: 'Madrid · 7 de junio' },
  // { id: 'XXXXXXXXXXX', label: 'Misa de clausura', title: 'Misa de clausura en Santa Cruz de Tenerife', meta: 'Tenerife · 12 de junio' },
]

const STR: Record<'es' | 'en', { kicker: string; heading: string; openYt: string }> = {
  es: {
    kicker: 'Revive la visita',
    heading: 'Vídeos clave del viaje del Papa León XIV',
    openYt: 'Ver en YouTube',
  },
  en: {
    kicker: 'Relive the visit',
    heading: 'Key videos of Pope Leo XIV’s journey',
    openYt: 'Watch on YouTube',
  },
}

export default function KeyVideos({ locale }: { locale: Locale }) {
  const [sel, setSel] = useState(0)
  const t = locale === 'es' ? STR.es : STR.en

  if (VIDEOS.length === 0) return null
  const current = VIDEOS[Math.min(sel, VIDEOS.length - 1)]

  return (
    <section className="bg-papal-navy" id="videos-clave">
      <div className="mx-auto max-w-5xl px-3 py-6 sm:px-4 sm:py-8">
        <div className="mb-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-papal-gold">{t.kicker}</p>
          <h2 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">{t.heading}</h2>
        </div>

        {/* Selector de vídeos */}
        {VIDEOS.length > 1 && (
          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setSel(i)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                  i === sel ? 'bg-papal-gold text-papal-navy' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Titular del vídeo activo */}
        <div className="mb-2 text-center">
          <p className="font-heading text-base font-bold text-white sm:text-lg">{current.title}</p>
          <p className="text-xs uppercase tracking-wide text-papal-gold/80">{current.meta}</p>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            key={current.id}
            src={`https://www.youtube-nocookie.com/embed/${current.id}`}
            title={current.title}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-2 text-center">
          <a
            href={`https://www.youtube.com/watch?v=${current.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white/80 underline hover:text-papal-gold"
          >
            ▶ {t.openYt}
          </a>
        </div>
      </div>
    </section>
  )
}
