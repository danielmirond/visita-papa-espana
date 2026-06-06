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
export interface LiveBroadcastConfig {
  enabled: boolean
  /** Inicio de la retransmisión (ISO con offset de Madrid +02:00) */
  startsAt: string
  /** Fin: tras esta fecha el bloque desaparece */
  endsAt: string
  /** URL del directo de YouTube de RTVE (dejar '' hasta tenerla) */
  youtubeUrl: string
  source: string
}

export const liveBroadcast: LiveBroadcastConfig = {
  enabled: true,
  startsAt: '2026-06-06T09:50:00+02:00',
  endsAt: '2026-06-12T23:59:00+02:00',
  // Señal de RTVE en YouTube (canal: muestra su directo en curso).
  youtubeUrl: 'https://www.youtube.com/channel/UCqlsTzBv49Uiu8Z3IseVgQQ',
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
