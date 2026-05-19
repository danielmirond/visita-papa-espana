/**
 * Trainline · constructor de URLs con afiliación.
 *
 * Trainline tiene programa de afiliados a través de AWIN (recomendado) o
 * directamente con su programa propio. La variable de entorno
 * NEXT_PUBLIC_TRAINLINE_AID se rellena al dar de alta y desbloquea
 * comisión 4-6% por venta. Mientras esté vacía, los enlaces apuntan a
 * Trainline pero SIN tracking de afiliación (no se pierde la conversión,
 * solo se pierde la comisión).
 *
 * El parámetro de afiliación en Trainline es `affid` cuando se opera por
 * su programa directo, o `awc=<click ID>` cuando se opera vía AWIN.
 * Cuando se active AWIN se sustituye por su deep-link generator.
 */

const TRAINLINE_BASE = 'https://www.thetrainline.com/es/buy/journey-search-results'
const TRAINLINE_AID = process.env.NEXT_PUBLIC_TRAINLINE_AID || ''

/** Códigos de estación Trainline (UIC) para las ciudades del recorrido. */
const STATIONS = {
  madrid: '00007178000', // Madrid Puerta de Atocha
  barcelona: '00007178200', // Barcelona Sants
  zaragoza: '00007117200', // Zaragoza Delicias
  sevilla: '00007178100', // Sevilla Santa Justa
  valencia: '00007117100', // València Joaquín Sorolla
  malaga: '00007178300', // Málaga María Zambrano
  cordoba: '00007117300', // Córdoba
  paris: '00008700151', // Paris (gran cabecera para usuarios FR)
} as const

type StationCode = keyof typeof STATIONS

interface JourneyOptions {
  from: StationCode
  to: StationCode
  /** YYYY-MM-DD. Por defecto: 5 jun 2026 (víspera de la visita). */
  date?: string
  /** HH:mm. Por defecto: 10:00. */
  time?: string
  /** 1-9. Por defecto: 1. */
  adults?: number
  /** Idioma: 'es', 'en', 'fr', 'it', 'de', 'pt'. */
  locale?: string
}

/**
 * Construye un URL de búsqueda Trainline con afiliación si está disponible.
 *
 * @example
 * buildTrainlineJourneyUrl({ from: 'paris', to: 'madrid', date: '2026-06-05' })
 */
export function buildTrainlineJourneyUrl(opts: JourneyOptions): string {
  const date = opts.date || '2026-06-05'
  const time = opts.time || '10:00'
  const adults = opts.adults || 1
  const locale = opts.locale || 'es'

  const params = new URLSearchParams({
    origin: STATIONS[opts.from],
    destination: STATIONS[opts.to],
    outwardDate: `${date}T${time}:00`,
    passengers: `${adults}|0|0|0`,
  })

  if (TRAINLINE_AID) {
    params.set('affid', TRAINLINE_AID)
    params.set('utm_source', 'visita-papa-2026')
    params.set('utm_medium', 'affiliate')
  }

  const base = TRAINLINE_BASE.replace('/es/', `/${locale}/`)
  return `${base}?${params.toString()}`
}

/** URL de la home de Trainline con afiliación (para CTAs genéricos). */
export function buildTrainlineHomeUrl(locale: string = 'es'): string {
  const base = `https://www.thetrainline.com/${locale}`
  if (!TRAINLINE_AID) return base
  return `${base}?affid=${TRAINLINE_AID}&utm_source=visita-papa-2026&utm_medium=affiliate`
}

/**
 * Indica si la afiliación Trainline está activa (hay AID configurado).
 * Útil para componentes que muestran/ocultan badges de «mejor precio».
 */
export function isTrainlineAffiliateActive(): boolean {
  return Boolean(TRAINLINE_AID)
}
