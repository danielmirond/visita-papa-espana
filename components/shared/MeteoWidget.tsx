/**
 * Widget de meteorología: pronóstico diario para los días del viaje papal
 * en una ciudad concreta. Usa Open-Meteo (sin API key, gratis).
 *
 * Server component con revalidate de 1 hora (no es info crítica minuto a minuto).
 */

interface MeteoProps {
  ciudad: string
  lat: number
  lon: number
  /** Fechas ISO a destacar (días del viaje). Ej: ['2026-06-06', '2026-06-07'] */
  fechas: string[]
  /** Si true, compacto (inline); si false, tarjeta completa */
  compact?: boolean
  locale?: string
}

interface OpenMeteoDaily {
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_probability_max: number[]
    weather_code: number[]
    uv_index_max: number[]
  }
}

const WMO_ICONS: Record<number, { icon: string; label: string }> = {
  0: { icon: '☀️', label: 'Despejado' },
  1: { icon: '🌤️', label: 'Principalmente despejado' },
  2: { icon: '⛅', label: 'Parcialmente nublado' },
  3: { icon: '☁️', label: 'Nublado' },
  45: { icon: '🌫️', label: 'Niebla' },
  48: { icon: '🌫️', label: 'Niebla' },
  51: { icon: '🌦️', label: 'Llovizna ligera' },
  53: { icon: '🌦️', label: 'Llovizna' },
  55: { icon: '🌧️', label: 'Llovizna densa' },
  61: { icon: '🌧️', label: 'Lluvia ligera' },
  63: { icon: '🌧️', label: 'Lluvia' },
  65: { icon: '⛈️', label: 'Lluvia intensa' },
  80: { icon: '🌦️', label: 'Chubascos' },
  81: { icon: '🌧️', label: 'Chubascos' },
  82: { icon: '⛈️', label: 'Chubascos fuertes' },
  95: { icon: '⛈️', label: 'Tormenta' },
  96: { icon: '⛈️', label: 'Tormenta con granizo' },
  99: { icon: '⛈️', label: 'Tormenta con granizo' },
}

function iconFor(code: number) {
  return WMO_ICONS[code] || { icon: '🌡️', label: '—' }
}

async function fetchMeteo(lat: number, lon: number): Promise<OpenMeteoDaily | null> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,uv_index_max` +
    `&timezone=Europe/Madrid&forecast_days=14`

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return (await res.json()) as OpenMeteoDaily
  } catch {
    return null
  }
}

export default async function MeteoWidget({
  ciudad,
  lat,
  lon,
  fechas,
  compact = false,
  locale = 'es',
}: MeteoProps) {
  const data = await fetchMeteo(lat, lon)

  // Fallback silencioso: si falla la API no rompemos la página
  if (!data) {
    return null
  }

  // Solo mostrar si alguna fecha del viaje cae dentro del forecast
  const relevantes = fechas
    .map((f) => {
      const idx = data.daily.time.indexOf(f)
      if (idx === -1) return null
      return {
        fecha: f,
        tMax: Math.round(data.daily.temperature_2m_max[idx]),
        tMin: Math.round(data.daily.temperature_2m_min[idx]),
        precProb: data.daily.precipitation_probability_max[idx],
        code: data.daily.weather_code[idx],
        uv: Math.round(data.daily.uv_index_max[idx] || 0),
      }
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)

  // Si todas las fechas están fuera de ventana de pronóstico
  if (relevantes.length === 0) {
    return (
      <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-4 text-sm text-papal-navy/70">
        <p>
          <strong>🌡️ Meteorología en {ciudad}:</strong> el pronóstico fiable está
          disponible a partir de 14 días antes del evento. Vuelve a consultar
          cerca de la fecha.
        </p>
      </div>
    )
  }

  if (compact) {
    return (
      <div className="flex flex-wrap gap-3 text-sm">
        {relevantes.map((d) => {
          const { icon } = iconFor(d.code)
          return (
            <div
              key={d.fecha}
              className="flex items-center gap-2 rounded-lg bg-papal-cream px-3 py-2 text-papal-navy"
            >
              <span className="text-lg">{icon}</span>
              <span>
                {new Date(d.fecha).toLocaleDateString(locale, { day: 'numeric', month: 'short' })}
              </span>
              <span className="font-semibold">{d.tMax}° / {d.tMin}°</span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-papal-navy">
          🌡️ Previsión meteorológica en {ciudad}
        </h3>
        <span className="text-xs text-papal-navy/50">Fuente: Open-Meteo</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {relevantes.map((d) => {
          const { icon, label } = iconFor(d.code)
          return (
            <div
              key={d.fecha}
              className="rounded-lg bg-papal-cream p-3 text-center"
            >
              <div className="text-xs uppercase tracking-wide text-papal-navy/60">
                {new Date(d.fecha).toLocaleDateString(locale, {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                })}
              </div>
              <div className="my-2 text-4xl" aria-label={label}>
                {icon}
              </div>
              <div className="font-bold text-papal-navy">
                {d.tMax}° <span className="text-papal-navy/50">/ {d.tMin}°</span>
              </div>
              <div className="mt-1 text-xs text-papal-navy/70">
                💧 {d.precProb ?? 0}%
                {d.uv >= 6 && (
                  <span className="ml-2 text-red-600">☀️ UV {d.uv}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-papal-navy/50">
        Los pronósticos más allá de 7-10 días son indicativos. Consulta el día anterior para valores fiables.
      </p>
    </div>
  )
}
