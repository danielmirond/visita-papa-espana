'use client'

import { emtAlternativesGeneral } from '@/data/traffic-closures'
import type { Locale } from '@/data/i18n/types'

interface EMTAlternativesProps {
  city: string
  locale: Locale
}

export default function EMTAlternatives({ city, locale }: EMTAlternativesProps) {
  const alternatives = emtAlternativesGeneral[city] || []

  if (alternatives.length === 0) {
    return (
      <div className="bg-gray-50 p-8 rounded text-center">
        <p className="text-gray-600">
          {locale === 'es'
            ? 'No hay datos de transporte público alternativo'
            : 'No alternative transport data available'}
        </p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {alternatives.map((route, idx) => (
        <div key={idx} className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r hover:shadow-md transition">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🚌</span>
            <p className="text-gray-700">{route}</p>
          </div>
        </div>
      ))}

      {/* General Tips */}
      <div className="md:col-span-2 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r mt-6">
        <h4 className="font-bold text-blue-900 mb-3">
          {locale === 'es' ? 'Consejos de Transporte' : 'Transport Tips'}
        </h4>
        <ul className="space-y-2 text-blue-800 text-sm">
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Consulta las apps de transporte municipal para horarios en tiempo real'
                : 'Check municipal transport apps for real-time schedules'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Compra bonos de transporte anticipadamente (descuentos disponibles)'
                : 'Buy travel passes in advance (discounts available)'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'El transporte público es gratis/reducido para peregrinos acreditados'
                : 'Free/reduced public transport for accredited pilgrims'}
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>
              {locale === 'es'
                ? 'Aumenta 45 minutos en tus viajes durante los horarios de cierre'
                : 'Add 45 minutes to journey times during closure hours'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
