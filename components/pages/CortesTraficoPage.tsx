'use client'

import { useState } from 'react'
import { trafficClosures, emtAlternativesGeneral, parkingInfo } from '@/data/traffic-closures'
import type { Locale } from '@/data/i18n/types'
import TrafficTimeline from '@/components/traffic/TrafficTimeline'
import EMTAlternatives from '@/components/traffic/EMTAlternatives'
import ParkingGuide from '@/components/traffic/ParkingGuide'
import TabsByCity from '@/components/traffic/TabsByCity'

interface CortesTraficoPageProps {
  locale: Locale
}

const cityData: Record<string, { name: string; dates: string }> = {
  madrid: { name: 'Madrid', dates: '6-9 junio' },
  barcelona: { name: 'Barcelona', dates: '9-10 junio' },
  'gran-canaria': { name: 'Gran Canaria', dates: '11 junio' },
  tenerife: { name: 'Tenerife', dates: '12 junio' },
}

export default function CortesTraficoPage({ locale }: CortesTraficoPageProps) {
  const [activeCity, setActiveCity] = useState<string>('madrid')

  const cityClosures = trafficClosures.filter((c) => c.city === activeCity)
  const currentCity = cityData[activeCity]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚠️</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              {locale === 'es' ? 'Cortes de Tráfico' : 'Traffic Closures'}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            {locale === 'es'
              ? 'Información completa sobre los cierres de tráfico día a día durante la visita del Papa León XIV a España (6-12 de junio de 2026).'
              : 'Complete information about daily traffic closures during Pope Leo XIV\'s visit to Spain (June 6-12, 2026).'}
          </p>
        </div>
      </section>

      {/* City Selector Tabs */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <TabsByCity active={activeCity} onSelect={setActiveCity} cities={cityData} />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Current City Info */}
        <div className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">📍</span>
              {currentCity.name}
            </h2>
            <p className="text-gray-600 flex items-center gap-2">
              <span className="text-xl">🕐</span>
              {currentCity.dates}
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            {locale === 'es' ? 'Cierres por Hora' : 'Hourly Closures'}
          </h3>
          {cityClosures.length > 0 ? (
            <TrafficTimeline closures={cityClosures} locale={locale} />
          ) : (
            <div className="bg-gray-50 p-8 rounded text-center">
              <p className="text-gray-600">
                {locale === 'es' ? 'No hay datos para esta ciudad' : 'No data available for this city'}
              </p>
            </div>
          )}
        </div>

        {/* EMT Alternatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🚌</span>
            {locale === 'es' ? 'Transportes Alternativos' : 'Alternative Transport'}
          </h3>
          <EMTAlternatives city={activeCity} locale={locale} />
        </div>

        {/* Parking Guide */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🅿️</span>
            {locale === 'es' ? 'Guía de Aparcamiento' : 'Parking Guide'}
          </h3>
          <ParkingGuide city={activeCity} locale={locale} />
        </div>

        {/* General Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-16">
          <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            {locale === 'es' ? 'Recomendaciones Generales' : 'General Recommendations'}
          </h3>
          <ul className="space-y-3 text-amber-800">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                {locale === 'es'
                  ? 'Evite viajar entre las 6:00 y las 22:00 en los horarios indicados'
                  : 'Avoid traveling between 6:00 and 22:00 on the scheduled times'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                {locale === 'es'
                  ? 'Utilice transporte público o taxis en lo posible'
                  : 'Use public transport or taxis whenever possible'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                {locale === 'es'
                  ? 'Consulte la app de tráfico municipal para actualizaciones en tiempo real'
                  : 'Check municipal traffic app for real-time updates'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                {locale === 'es'
                  ? 'Aumente el tiempo de viaje al menos 40% en zonas afectadas'
                  : 'Add at least 40% extra travel time in affected areas'}
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Back to Transport */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {locale === 'es' ? '¿Cómo llegar a las ciudades?' : 'How to reach the cities?'}
          </h3>
          <p className="text-gray-600 mb-4">
            {locale === 'es'
              ? 'Descubre las mejores opciones de transporte por tren, autobús o avión'
              : 'Discover the best transport options by train, bus or plane'}
          </p>
          <a
            href={locale === 'es' ? '/es/como-llegar' : `/en/how-to-get-there`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition"
          >
            {locale === 'es' ? 'Ir a Guía de Transporte' : 'Go to Transport Guide'}
          </a>
        </div>
      </main>
    </div>
  )
}
