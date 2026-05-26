'use client'

import { parkingInfo } from '@/data/traffic-closures'
import type { Locale } from '@/data/i18n/types'

interface ParkingGuideProps {
  city: string
  locale: Locale
}

export default function ParkingGuide({ city, locale }: ParkingGuideProps) {
  const lots = parkingInfo[city] || []

  if (lots.length === 0) {
    return (
      <div className="bg-gray-50 p-8 rounded text-center">
        <p className="text-gray-600">
          {locale === 'es'
            ? 'No hay datos de aparcamiento para esta ciudad'
            : 'No parking data available for this city'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {lots.map((lot, idx) => (
        <div key={idx} className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <span className="text-2xl">🅿️</span>
                {lot.name}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{lot.address}</p>
            </div>
            {lot.accessible && (
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded text-xs font-semibold text-green-800">
                <span className="text-lg">♿</span>
                {locale === 'es' ? 'Accesible' : 'Accessible'}
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">{locale === 'es' ? 'Plazas:' : 'Spaces:'}</span>
              <span>{lot.spaces.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-xl">💵</span>
              <span className="font-semibold">{lot.price}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Parking Recommendations */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r mt-8">
        <h4 className="font-bold text-purple-900 mb-3">
          {locale === 'es' ? 'Recomendaciones de Aparcamiento' : 'Parking Recommendations'}
        </h4>
        <ul className="space-y-2 text-purple-800 text-sm">
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Llega con 2 horas de anticipación; los aparcamientos se llenan rápido'
                : 'Arrive 2 hours early; parking fills up quickly'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Busca aparcamiento en zonas alejadas del centro y usa transporte público'
                : 'Look for parking outside the center and use public transport'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Algunos aparcamientos ofrecen descuentos para peregrinos con acreditación'
                : 'Some parking lots offer discounts for accredited pilgrims'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Considera usar servicios de parking en el aeropuerto para días completos'
                : 'Consider airport parking services for full-day stays'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
