'use client'

import { useState } from 'react'
import type { CityTrafficClosures } from '@/data/traffic-closures'
import type { Locale } from '@/data/i18n/types'

interface TrafficTimelineProps {
  closures: CityTrafficClosures[]
  locale: Locale
}

const severityColors = {
  high: 'border-red-500 bg-red-50',
  medium: 'border-yellow-500 bg-yellow-50',
  low: 'border-blue-500 bg-blue-50',
}

const severityLabels = {
  es: { high: 'Alto impacto', medium: 'Impacto medio', low: 'Bajo impacto' },
  en: { high: 'High impact', medium: 'Medium impact', low: 'Low impact' },
  it: { high: 'Alto impatto', medium: 'Impatto medio', low: 'Basso impatto' },
  fr: { high: 'Impact élevé', medium: 'Impact moyen', low: 'Faible impact' },
  de: { high: 'Hohes Verkehrsaufkommen', medium: 'Mittlerer Verkehr', low: 'Geringer Verkehr' },
  pt: { high: 'Alto impacto', medium: 'Impacto médio', low: 'Baixo impacto' },
  ca: { high: 'Alt impacte', medium: 'Impacte mitjà', low: 'Baix impacte' },
  gl: { high: 'Alto impacto', medium: 'Impacto medio', low: 'Baixo impacto' },
  eu: { high: 'Eragina handia', medium: 'Eragina ertaina', low: 'Eragina txikia' },
}

export default function TrafficTimeline({ closures, locale }: TrafficTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const allClosures = closures.flatMap((cityDay) =>
    cityDay.closures.map((closure) => ({
      ...closure,
      date: cityDay.date,
    }))
  )

  return (
    <div className="space-y-4">
      {allClosures.map((closure) => (
        <div
          key={closure.id}
          className={`border-l-4 rounded-r p-6 cursor-pointer transition hover:shadow-md ${severityColors[closure.severity]}`}
          onClick={() => setExpandedId(expandedId === closure.id ? null : closure.id)}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">{closure.street}</h4>
              <p className="text-sm text-gray-600 mt-1">{closure.description}</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white rounded text-sm font-semibold text-gray-700">
                {severityLabels[locale][closure.severity]}
              </span>
            </div>
          </div>

          {/* Time and Basic Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <span>🕐</span>
              <span>
                {closure.startTime} - {closure.endTime}
              </span>
            </div>
          </div>

          {/* Expanded Details */}
          {expandedId === closure.id && (
            <div className="mt-6 pt-6 border-t border-gray-300 space-y-4">
              {closure.affectedAreas && closure.affectedAreas.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                    <span>📍</span>
                    {locale === 'es' ? 'Zonas Afectadas' : 'Affected Areas'}
                  </h5>
                  <ul className="space-y-1">
                    {closure.affectedAreas.map((area, idx) => (
                      <li key={idx} className="text-sm text-gray-600 ml-6">
                        • {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {closure.emtAlternatives && closure.emtAlternatives.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                    <span>🚌</span>
                    {locale === 'es' ? 'Líneas EMT Alternativas' : 'Alternative EMT Lines'}
                  </h5>
                  <ul className="space-y-1">
                    {closure.emtAlternatives.map((line, idx) => (
                      <li key={idx} className="text-sm text-gray-600 ml-6">
                        • {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {closure.parkingInfo && (
                <div>
                  <h5 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                    <span>ℹ️</span>
                    {locale === 'es' ? 'Información de Aparcamiento' : 'Parking Information'}
                  </h5>
                  <p className="text-sm text-gray-600 ml-6">{closure.parkingInfo}</p>
                </div>
              )}
            </div>
          )}

          {/* Expand Indicator */}
          <div className="flex justify-center mt-2">
            <span className="text-xs text-gray-500">
              {expandedId === closure.id ? '▲' : '▼'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
