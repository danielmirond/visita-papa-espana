import Link from 'next/link'
import { trafficClosures } from '@/data/traffic-closures'
import { getCityBySlug } from '@/data/cities'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import TrafficTimeline from '@/components/traffic/TrafficTimeline'
import EMTAlternatives from '@/components/traffic/EMTAlternatives'
import ParkingGuide from '@/components/traffic/ParkingGuide'
import MetroClosures from '@/components/traffic/MetroClosures'

/** Ciudades con página dedicada de cortes (las de mayor demanda de búsqueda) */
export const CORTES_CITIES = ['madrid', 'barcelona'] as const

export function getCityName(slug: string, locale: Locale): string {
  const localized = getCitiesByLocale(locale).find((c) => c.slug === slug)
  return localized?.name || getCityBySlug(slug)?.name || slug
}

/** title + description SEO por ciudad e idioma (orientado a queries por ciudad) */
export function getCortesCityMeta(slug: string, locale: Locale): { title: string; description: string } {
  const city = getCityName(slug, locale)
  const M: Partial<Record<Locale, { title: string; description: string }>> = {
    es: {
      title: `Calles cortadas y metro cerrado en ${city} (Papa 2026)`,
      description: `Calles cortadas, afectaciones al tráfico y estaciones de metro cerradas en ${city} por la visita del Papa León XIV (junio 2026): recorrido, horarios por acto y alternativas de transporte.`,
    },
    en: {
      title: `Street & metro closures in ${city} — Pope 2026`,
      description: `Street closures, closed metro stations and traffic restrictions in ${city} for Pope Leo XIV's visit (June 2026): times by event, affected streets and alternatives.`,
    },
    it: {
      title: `Strade chiuse e metro chiusa a ${city} — Papa 2026`,
      description: `Strade chiuse, stazioni della metro chiuse e restrizioni al traffico a ${city} per la visita di Papa Leone XIV (giugno 2026): orari per evento e alternative.`,
    },
    fr: {
      title: `Rues fermées et métro fermé à ${city} — Pape 2026`,
      description: `Rues fermées, stations de métro fermées et restrictions de circulation à ${city} pour la visite du pape Léon XIV (juin 2026) : horaires par événement et alternatives.`,
    },
    de: {
      title: `Straßensperrungen und U-Bahn in ${city} — Papst 2026`,
      description: `Straßensperrungen, geschlossene U-Bahn-Stationen und Verkehrsbeschränkungen in ${city} zum Besuch von Papst Leo XIV. (Juni 2026): Zeiten je Veranstaltung und Alternativen.`,
    },
    pt: {
      title: `Ruas cortadas e metro fechado em ${city} — Papa 2026`,
      description: `Ruas cortadas, estações de metro fechadas e restrições de trânsito em ${city} pela visita do Papa Leão XIV (junho de 2026): horários por evento e alternativas.`,
    },
    ca: {
      title: `Carrers tallats i metro tancat a ${city} — Papa 2026`,
      description: `Carrers tallats, estacions de metro tancades i restriccions de trànsit a ${city} per la visita del Papa Lleó XIV (juny de 2026): horaris per acte i alternatives.`,
    },
    gl: {
      title: `Rúas cortadas e metro pechado en ${city} — Papa 2026`,
      description: `Rúas cortadas, estacións de metro pechadas e restricións de tráfico en ${city} pola visita do Papa León XIV (xuño de 2026): horarios por acto e alternativas.`,
    },
    eu: {
      title: `Kaleak itxita eta metroa ${city}n — Aita Santua 2026`,
      description: `Kaleak itxita, metro-geltoki itxiak eta trafiko-murrizketak ${city}n Leon XIV.aren bisitagatik (2026ko ekaina): ekitaldi bakoitzeko ordutegiak eta alternatibak.`,
    },
  }
  return M[locale] || M.es!
}

const HUB_LABEL: Partial<Record<Locale, string>> = {
  es: '← Todos los cortes de tráfico',
  en: '← All traffic closures',
}

export default function CortesCiudadPage({ locale, slug }: { locale: Locale; slug: string }) {
  const cityName = getCityName(slug, locale)
  const cityClosures = trafficClosures.filter((c) => c.city === slug)
  const isEs = locale === 'es'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link
            href={localizePath('/cortes-trafico', locale)}
            className="text-sm text-blue-100 hover:text-white"
          >
            {HUB_LABEL[locale] || HUB_LABEL.en}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            {isEs
              ? `Calles cortadas y metro cerrado en ${cityName}`
              : `Street and metro closures in ${cityName}`}
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mt-4">
            {isEs
              ? `Afectaciones al tráfico, calles cortadas, recorrido y estaciones de metro cerradas en ${cityName} durante la visita del Papa León XIV (junio 2026).`
              : `Traffic closures, affected streets and closed metro stations in ${cityName} during Pope Leo XIV's visit (June 2026).`}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Calles cortadas por hora */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">⏰</span>
            {isEs ? `Calles cortadas en ${cityName} por hora` : `Street closures in ${cityName} by hour`}
          </h2>
          {cityClosures.length > 0 ? (
            <TrafficTimeline closures={cityClosures} locale={locale} />
          ) : (
            <div className="bg-gray-50 p-8 rounded text-center">
              <p className="text-gray-600">{isEs ? 'No hay datos para esta ciudad' : 'No data available'}</p>
            </div>
          )}
        </div>

        {/* Estaciones de metro cerradas */}
        <MetroClosures city={slug} cityName={cityName} locale={locale} />

        {/* Transportes alternativos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🚌</span>
            {isEs ? 'Transportes alternativos' : 'Alternative transport'}
          </h2>
          <EMTAlternatives city={slug} locale={locale} />
        </div>

        {/* Aparcamiento */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🅿️</span>
            {isEs ? 'Guía de aparcamiento' : 'Parking guide'}
          </h2>
          <ParkingGuide city={slug} locale={locale} />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {isEs ? `¿Cómo llegar a ${cityName}?` : `How to reach ${cityName}?`}
          </h2>
          <Link
            href={localizePath('/como-llegar', locale)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition mt-2"
          >
            {isEs ? 'Ir a la guía de transporte' : 'Go to transport guide'}
          </Link>
        </div>
      </main>
    </div>
  )
}
