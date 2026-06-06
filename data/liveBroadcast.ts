/**
 * Configuración de la RETRANSMISIÓN EN DIRECTO en la home.
 *
 * Antes de `startsAt` se muestra una cuenta atrás; entre `startsAt` y
 * `endsAt` se incrusta el directo de YouTube; después se oculta.
 *
 * 👉 Para activar el directo, pega la URL del directo de RTVE en YouTube
 *    en `youtubeUrl` (vale watch?v=…, youtu.be/…, /live/… o /embed/…,
 *    o un canal con /embed/live_stream?channel=UC…).
 */
export interface LiveSignal {
  label: string
  youtubeUrl: string
}

export interface LiveBroadcastConfig {
  enabled: boolean
  /** Inicio de la retransmisión (ISO con offset de Madrid +02:00) */
  startsAt: string
  /** Fin: tras esta fecha el bloque desaparece */
  endsAt: string
  /** Señal por defecto (compat) — debe coincidir con signals[defaultSignal] */
  youtubeUrl: string
  /** Señales seleccionables (usar SIEMPRE URL de vídeo watch?v=…; el embed por
   *  canal live_stream?channel ya no lo soporta YouTube) */
  signals: LiveSignal[]
  /** Índice de la señal por defecto (la que mejor funciona) */
  defaultSignal: number
  source: string
}

export const liveBroadcast: LiveBroadcastConfig = {
  enabled: true,
  startsAt: '2026-06-06T09:50:00+02:00',
  endsAt: '2026-06-12T23:59:00+02:00',
  signals: [
    { label: 'RTVE 24h', youtubeUrl: 'https://www.youtube.com/watch?v=b4tE5aKhtlg' },
    { label: 'Señal 2', youtubeUrl: 'https://www.youtube.com/watch?v=ptCETju1Wv0' },
    { label: 'Señal 3', youtubeUrl: 'https://www.youtube.com/watch?v=aTU1oUvmJEQ' },
    { label: 'Señal 4', youtubeUrl: 'https://www.youtube.com/watch?v=h-PXqNkwm0M' },
    { label: 'RTVE', youtubeUrl: 'https://www.youtube.com/watch?v=_EKs0D2BRbc' },
  ],
  // Por defecto: RTVE 24h (señal genérica que no se corta).
  defaultSignal: 0,
  youtubeUrl: 'https://www.youtube.com/watch?v=b4tE5aKhtlg',
  source: 'RTVE',
}

/** Convierte una URL/ID de YouTube en la URL de incrustación (/embed/…). */
export function toYouTubeEmbed(input: string): string | null {
  if (!input) return null
  const url = input.trim()
  const id =
    url.match(/[?&]v=([\w-]{11})/)?.[1] ||
    url.match(/youtu\.be\/([\w-]{11})/)?.[1] ||
    url.match(/\/live\/([\w-]{11})/)?.[1] ||
    url.match(/\/embed\/([\w-]{11})/)?.[1] ||
    (/^[\w-]{11}$/.test(url) ? url : null)
  if (id) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0`
  const channel = url.match(/channel=(UC[\w-]+)/)?.[1] || url.match(/youtube\.com\/(?:channel\/)?(UC[\w-]+)/)?.[1]
  if (channel) return `https://www.youtube-nocookie.com/embed/live_stream?channel=${channel}&autoplay=1&mute=1`
  return null
}
