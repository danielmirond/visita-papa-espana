import { getMetroClosures } from '@/data/metro-closures'
import type { Locale } from '@/data/i18n/types'

interface Props {
  city: string
  cityName: string
  locale: Locale
}

/**
 * Sección "Estaciones de metro cerradas" por ciudad. Server-friendly
 * (sin estado). Usada tanto en el hub /cortes-trafico (con tabs) como
 * en las páginas dedicadas por ciudad.
 */
export default function MetroClosures({ city, cityName, locale }: Props) {
  const cityMetro = getMetroClosures(city)
  if (!cityMetro) return null

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        <span className="text-2xl">🚇</span>
        {locale === 'es'
          ? `Estaciones de metro cerradas en ${cityName}`
          : `Closed metro stations in ${cityName}`}
      </h3>
      <p className="text-gray-600 mb-6">
        {locale === 'es'
          ? 'Estaciones de metro y Cercanías que cierran por el dispositivo de seguridad, por día y franja horaria.'
          : 'Metro and commuter-rail stations closed by the security operation, by day and time slot.'}
      </p>
      <div className="space-y-5">
        {cityMetro.groups.map((g, i) => (
          <div key={i} className="rounded-lg border border-red-200 bg-red-50 p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
                {locale === 'es' ? g.day : g.dayEn}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {locale === 'es' ? g.event : g.eventEn}
              </span>
              <span className="text-sm text-gray-600">· {locale === 'es' ? g.schedule : g.scheduleEn}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.stations.map((s) => (
                <li key={s} className="rounded border border-red-200 bg-white px-2.5 py-1 text-sm text-gray-800">
                  🚇 {s}
                </li>
              ))}
            </ul>
            {(locale === 'es' ? g.note : g.noteEn) && (
              <p className="mt-3 text-sm text-gray-600">{locale === 'es' ? g.note : g.noteEn}</p>
            )}
          </div>
        ))}
      </div>
      {cityMetro.freeTransport && (
        <p className="mt-4 rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
          ✅ {locale === 'es' ? cityMetro.freeTransport : cityMetro.freeTransportEn}
        </p>
      )}
      <p className="mt-3 text-xs text-gray-500">
        {locale === 'es' ? 'Fuente' : 'Source'}:{' '}
        <a
          href={cityMetro.source.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          {cityMetro.source.label}
        </a>{' '}
        · {locale === 'es' ? 'sujeto a cambios de última hora' : 'subject to last-minute changes'} ({cityMetro.updatedAt})
      </p>
    </div>
  )
}
