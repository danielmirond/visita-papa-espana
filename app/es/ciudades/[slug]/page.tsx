import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import NewsletterForm from '@/components/shared/NewsletterForm'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import SocialFeed from '@/components/shared/SocialFeed'
import MeteoWidget from '@/components/shared/MeteoWidget'
import { cities, getCityBySlug } from '@/data/cities'
import { getScheduleByCity } from '@/data/schedule'
import { getAffiliatesByCategory } from '@/data/affiliates'
import { formatDateLong, dateToSlug } from '@/lib/utils'
import { getAlternates } from '@/lib/i18n-metadata'

// Mapa de la ciudad (client-only, Leaflet)
const CityEventsMap = dynamic(() => import('@/components/map/CityEventsMap'), {
  ssr: false,
  loading: () => (
    <div
      className="overflow-hidden rounded-xl border border-papal-gold/20 bg-papal-cream animate-pulse"
      style={{ height: '420px' }}
    />
  ),
})

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.slug)
  if (!city) return {}
  // Formato de fechas en español
  const start = new Date(city.papalDates.start)
  const end = new Date(city.papalDates.end)
  const fmt = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })
  const datesLabel = start.toDateString() === end.toDateString()
    ? fmt(start)
    : `${fmt(start)} al ${fmt(end)}`
  return {
    title: `Visita del Papa León XIV a ${city.name} · ${datesLabel} 2026`,
    description: `Programa, actos, cómo asistir, cómo llegar y alojamiento para la visita del Papa León XIV a ${city.name} (${datesLabel} 2026). Mapa, meteo y guía práctica.`,
    alternates: getAlternates(`/ciudades/${params.slug}`, 'es'),
  }
}

const CITY_GRADIENTS: Record<string, string> = {
  madrid: 'from-papal-navy to-papal-navy-light',
  barcelona: 'from-papal-navy-light to-papal-navy',
  'gran-canaria': 'from-papal-gold-dark to-papal-navy',
  tenerife: 'from-papal-navy to-papal-gold-dark',
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.slug)
  if (!city) notFound()

  const citySchedule = getScheduleByCity(city.slug)
  const hotels = getAffiliatesByCategory('hotel').filter(
    (a) => a.id.includes(city.slug) || a.id.includes(city.name.toLowerCase())
  )

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: city.name,
          address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'ES' },
          geo: { '@type': 'GeoCoordinates', latitude: city.coordinates.lat, longitude: city.coordinates.lng },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${city.heroImage}')` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${CITY_GRADIENTS[city.slug]} opacity-80`} />
        <Container className="relative py-12 text-white sm:py-16">
          <Link href="/ciudades" className="text-sm text-white/70 hover:text-white">
            &larr; Todas las ciudades
          </Link>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
            {city.name}
          </h1>
          <p className="mt-1 text-white/80">{city.region}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            {city.description}
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Actos destacados
              </h2>
              <ul className="space-y-2">
                {city.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3">
                    <span className="mt-0.5 text-papal-gold">&#x271D;</span>
                    <span className="text-papal-navy/80">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Programa */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Programa en {city.name}
              </h2>
              {citySchedule.map((day) => (
                <div key={day.date} className="mb-6">
                  <Link
                    href={`/programa/${dateToSlug(day.date)}`}
                    className="mb-3 block font-heading text-lg font-bold text-papal-navy hover:text-papal-gold"
                  >
                    {day.label}
                  </Link>
                  <div className="space-y-2">
                    {day.events.map((event) => (
                      <div key={event.id} className="flex gap-3 rounded-lg border border-gray-100 p-3">
                        <span className="flex-shrink-0 rounded bg-papal-navy px-2 py-0.5 text-xs font-bold text-white">
                          {event.startTime}
                        </span>
                        <div>
                          <p className="font-medium text-papal-navy">{event.title}</p>
                          <p className="text-xs text-papal-navy/50">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Meteo: previsión para los días del viaje */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Previsión meteorológica
              </h2>
              <MeteoWidget
                ciudad={city.name}
                lat={city.coordinates.lat}
                lon={city.coordinates.lng}
                fechas={(() => {
                  const arr: string[] = []
                  const start = new Date(city.papalDates.start)
                  const end = new Date(city.papalDates.end)
                  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                    arr.push(d.toISOString().slice(0, 10))
                  }
                  return arr
                })()}
                locale="es"
              />
            </section>

            {/* Mapa de los actos en la ciudad */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Mapa de los actos en {city.name}
              </h2>
              <CityEventsMap
                events={citySchedule.flatMap((d) => d.events)}
                cityCenter={city.coordinates}
                cityName={city.name}
                locale="es"
                height="420px"
              />
              <p className="mt-2 text-xs text-papal-navy/40">
                Los pins muestran los actos con ubicación conocida. Haga clic en cada uno
                para ver hora, lugar y tipo de acto.
              </p>
            </section>

            {/* Info práctica */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Información práctica
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">Cómo llegar</h3>
                  <ul className="space-y-1">
                    {city.practicalInfo.transport.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-papal-navy/70">
                        <span className="text-papal-gold">&#9679;</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">Alojamiento</h3>
                  <p className="text-sm text-papal-navy/70">{city.practicalInfo.accommodation}</p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">Consejos</h3>
                  <ul className="space-y-1">
                    {city.practicalInfo.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-papal-navy/70">
                        <span className="text-papal-gold">&#9679;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Fecha */}
            <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
              <h3 className="font-heading text-lg font-bold text-papal-navy">Fechas</h3>
              <p className="mt-1 text-sm text-papal-navy/70">
                {formatDateLong(city.papalDates.start)}
                {city.papalDates.start !== city.papalDates.end && (
                  <><br />al {formatDateLong(city.papalDates.end)}</>
                )}
              </p>
            </div>

            {/* Afiliados hoteles */}
            {hotels.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  Dónde alojarse
                </h3>
                <div className="mt-3 space-y-3">
                  {hotels.map((hotel) => (
                    <a
                      key={hotel.id}
                      href={hotel.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-papal-gold/20 p-3 transition-colors hover:bg-papal-cream"
                    >
                      <p className="font-medium text-papal-navy">{hotel.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{hotel.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">
                  Enlace patrocinado
                </p>
              </div>
            )}

            {/* CTA inscripción */}
            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <h3 className="font-heading text-lg font-bold">Información de asistencia</h3>
              <p className="mt-1 text-sm text-white/70">
                Los actos públicos requieren inscripción previa gratuita.
              </p>
              <Link
                href="/como-asistir"
                className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                Ver guía completa
              </Link>
            </div>

            {/* Banner */}
            <BannerPlaceholder size="300x250" label="Alojamiento recomendado" />

            {/* Newsletter */}
            <NewsletterForm variant="inline" />

            {/* Últimas publicaciones */}
            <SocialFeed locale="es" limit={4} />
          </aside>
        </div>
      </Container>
    </>
  )
}
