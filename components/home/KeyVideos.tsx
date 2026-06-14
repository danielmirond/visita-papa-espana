'use client'

import { useState } from 'react'
import type { Locale } from '@/data/i18n/types'

/**
 * Mosaico de vídeos clave de la visita (modo recap, sustituye al directo).
 * Cada celda muestra la miniatura de YouTube; al pulsar carga el reproductor
 * en su sitio (patrón "facade": no embebe 7 iframes a la vez, solo el que
 * pulsas → la home no se ralentiza).
 *
 * 👉 Para añadir un momento: pega aquí su ID de YouTube (la parte tras
 *    `watch?v=` o tras `youtu.be/`). Orden = orden en el mosaico.
 */
interface KeyVideo {
  id?: string // ID de vídeo de YouTube (NO la URL completa)
  list?: string // ID de playlist de YouTube (alternativa a id)
  title: string // titular de la celda
  meta: string // ciudad · fecha
}

const VIDEOS: KeyVideo[] = [
  {
    id: 'L7LwFouh1pE',
    title: 'El Papa bendice e ilumina la Torre de Jesucristo',
    meta: 'Barcelona · 10 de junio',
  },
  {
    id: 'fdf_jNY11V0',
    title: 'El Papa en la Sagrada Familia de Barcelona',
    meta: 'Barcelona · 10 de junio',
  },
  {
    id: '1rege9qSA50',
    title: 'Misa en el Estadio de Gran Canaria',
    meta: 'Gran Canaria · 11 de junio',
  },
  {
    id: 'BHfiCfw3BO4',
    title: 'El Papa en el centro de acogida Las Raíces',
    meta: 'Tenerife · 12 de junio',
  },
  {
    id: 'qKF1UUkgryo',
    title: 'Misa de clausura en el puerto de Santa Cruz',
    meta: 'Tenerife · 12 de junio',
  },
  {
    id: 'EBN_LMKzFcE',
    title: 'Los mensajes de León XIV en su visita a España',
    meta: 'Resumen · RTVE',
  },
  {
    list: 'PLFLBjMW4wU7jfqmJLi2voG1STzquK9cNk',
    title: 'Todos los vídeos de la visita',
    meta: 'Lista completa · RTVE',
  },
]

const STR: Record<'es' | 'en', { kicker: string; heading: string; play: string }> = {
  es: {
    kicker: 'Revive la visita',
    heading: 'Vídeos clave del viaje del Papa León XIV',
    play: 'Reproducir',
  },
  en: {
    kicker: 'Relive the visit',
    heading: 'Key videos of Pope Leo XIV’s journey',
    play: 'Play',
  },
}

function embedSrc(v: KeyVideo) {
  return v.list
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${v.list}&autoplay=1&rel=0`
    : `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`
}

export default function KeyVideos({ locale }: { locale: Locale }) {
  // Índices de las celdas cuyo reproductor ya se ha cargado (tras pulsar).
  const [active, setActive] = useState<number[]>([])
  const t = locale === 'es' ? STR.es : STR.en

  if (VIDEOS.length === 0) return null

  return (
    <section className="bg-papal-navy" id="videos-clave">
      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-4 sm:py-10">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-papal-gold">{t.kicker}</p>
          <h2 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">{t.heading}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => {
            const isActive = active.includes(i)
            const thumb = v.id ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : undefined
            return (
              <figure key={v.id ?? v.list} className="overflow-hidden rounded-xl bg-black/40">
                <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
                  {isActive ? (
                    <iframe
                      src={embedSrc(v)}
                      title={v.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActive((a) => [...a, i])}
                      aria-label={`${t.play}: ${v.title}`}
                      className="group absolute inset-0 h-full w-full"
                    >
                      {thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt={v.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-papal-gold-dark to-papal-navy">
                          <span className="font-heading text-lg font-bold text-white">▶ Lista completa</span>
                        </span>
                      )}
                      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                        <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                      </span>
                    </button>
                  )}
                </div>
                <figcaption className="px-3 py-3">
                  <p className="font-heading text-sm font-bold leading-snug text-white">{v.title}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-papal-gold/80">{v.meta}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
