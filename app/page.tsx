import Link from 'next/link'
import Container from '@/components/ui/Container'
import CountdownTimer from '@/components/home/CountdownTimer'
import NewsletterForm from '@/components/shared/NewsletterForm'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'
import { cities } from '@/data/cities'
import { schedule } from '@/data/schedule'
import { news } from '@/data/news'
import { formatDateShort } from '@/lib/utils'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Visita apostólica del Papa León XIV a España',
  description: siteConfig.description,
  startDate: '2026-06-06',
  endDate: '2026-06-12',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: [
    { '@type': 'Place', name: 'Madrid', address: { '@type': 'PostalAddress', addressCountry: 'ES', addressLocality: 'Madrid' } },
    { '@type': 'Place', name: 'Barcelona', address: { '@type': 'PostalAddress', addressCountry: 'ES', addressLocality: 'Barcelona' } },
    { '@type': 'Place', name: 'Gran Canaria', address: { '@type': 'PostalAddress', addressCountry: 'ES', addressLocality: 'Las Palmas de Gran Canaria' } },
    { '@type': 'Place', name: 'Tenerife', address: { '@type': 'PostalAddress', addressCountry: 'ES', addressLocality: 'Santa Cruz de Tenerife' } },
  ],
  performer: { '@type': 'Person', name: 'Papa León XIV' },
  organizer: { '@type': 'Organization', name: 'Conferencia Episcopal Española', url: 'https://conferenciaepiscopal.es' },
}

const CITY_COLORS: Record<string, string> = {
  madrid: 'from-red-600 to-red-800',
  barcelona: 'from-blue-600 to-blue-800',
  'gran-canaria': 'from-yellow-600 to-amber-700',
  tenerife: 'from-emerald-600 to-emerald-800',
}

const CITY_EMOJIS: Record<string, string> = {
  madrid: '',
  barcelona: '',
  'gran-canaria': '',
  tenerife: '',
}

export default function HomePage() {
  const totalEvents = schedule.reduce((acc, day) => acc + day.events.length, 0)
  const publicEvents = schedule.reduce(
    (acc, day) => acc + day.events.filter((e) => e.isPublic).length,
    0
  )
  const latestNews = news.slice(0, 3)

  return (
    <>
      <JsonLd data={eventJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/papa-leon-xiv.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-papal-navy/85 via-papal-navy/80 to-papal-navy/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-papal-gold blur-3xl" />
        </div>
        <Container className="relative py-16 text-center sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-papal-gold">
            6 - 12 de junio de 2026
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Visita del Papa León XIV
            <br />
            <span className="text-papal-gold">a España</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Madrid &middot; Barcelona &middot; Gran Canaria &middot; Tenerife
          </p>
          <p className="mt-2 font-heading text-xl italic text-papal-gold/80">
            &ldquo;Alzad la mirada&rdquo;
          </p>

          <div className="mt-10">
            <CountdownTimer targetDate={siteConfig.visitStartDate} />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/programa"
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              Ver programa completo
            </Link>
            <Link
              href="/como-asistir"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Cómo asistir
            </Link>
          </div>
        </Container>
      </section>

      {/* Cifras clave */}
      <section className="border-b border-papal-gold/10 bg-papal-cream">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">7</p>
              <p className="text-sm text-papal-navy/60">días</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">4</p>
              <p className="text-sm text-papal-navy/60">ciudades</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">{totalEvents}</p>
              <p className="text-sm text-papal-navy/60">actos programados</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">{publicEvents}</p>
              <p className="text-sm text-papal-navy/60">actos públicos</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ciudades */}
      <section className="section-padding">
        <Container>
          <h2 className="mb-2 text-center font-heading text-3xl font-bold text-papal-navy">
            Recorrido por España
          </h2>
          <p className="mb-10 text-center text-papal-navy/60">
            Tres pilares: unidad (Madrid), belleza (Barcelona), caridad (Canarias)
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ciudades/${city.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${CITY_COLORS[city.slug]} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-3xl">{CITY_EMOJIS[city.slug]}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold">{city.name}</h3>
                      <p className="text-sm text-white/80">{city.region}</p>
                    </div>
                    <div className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                      {formatDateShort(city.papalDates.start)}
                      {city.papalDates.start !== city.papalDates.end && (
                        <> - {formatDateShort(city.papalDates.end)}</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {city.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-papal-navy/70">
                        <span className="mt-0.5 text-papal-gold">&#9679;</span>
                        {h}
                      </li>
                    ))}
                    {city.highlights.length > 3 && (
                      <li className="text-sm font-medium text-papal-gold group-hover:underline">
                        +{city.highlights.length - 3} actos más
                      </li>
                    )}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Programa resumen */}
      <section className="section-padding bg-gray-50">
        <Container>
          <h2 className="mb-2 text-center font-heading text-3xl font-bold text-papal-navy">
            Programa día a día
          </h2>
          <p className="mb-10 text-center text-papal-navy/60">
            {totalEvents} actos en 7 días por 4 ciudades de España
          </p>
          <div className="space-y-3">
            {schedule.map((day) => {
              const city = cities.find((c) => c.slug === day.citySlug)
              return (
                <Link
                  key={day.date}
                  href={`/programa/${new Date(day.date + 'T12:00:00').getDate()}-junio`}
                  className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-papal-navy text-white">
                    <span className="text-lg font-bold leading-none">
                      {new Date(day.date + 'T12:00:00').getDate()}
                    </span>
                    <span className="text-[10px] uppercase">jun</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-bold text-papal-navy">
                      {day.label}
                    </p>
                    <p className="text-sm text-papal-navy/60">
                      {city?.name} &middot; {day.events.length} actos
                    </p>
                  </div>
                  <div className="hidden flex-shrink-0 sm:block">
                    {day.events.slice(0, 2).map((e) => (
                      <p key={e.id} className="text-right text-xs text-papal-navy/50">
                        {e.startTime} - {e.title.length > 35 ? e.title.slice(0, 35) + '...' : e.title}
                      </p>
                    ))}
                    {day.events.length > 2 && (
                      <p className="text-right text-xs font-medium text-papal-gold">
                        +{day.events.length - 2} más
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/programa"
              className="inline-block rounded-lg bg-papal-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-papal-navy-light"
            >
              Ver programa completo
            </Link>
          </div>
        </Container>
      </section>

      {/* Últimas noticias */}
      <section className="section-padding">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-papal-navy">
            Últimas noticias
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {latestNews.map((article) => (
              <Link
                key={article.slug}
                href={`/noticias/${article.slug}`}
                className="group rounded-xl border border-gray-100 p-5 shadow-sm transition-all hover:shadow-md"
              >
                <p className="text-xs text-papal-navy/40">{article.date}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-papal-navy group-hover:text-papal-gold">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/noticias"
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              Ver todas las noticias &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="bg-white">
        <Container className="py-10">
          <NewsletterForm variant="banner" />
        </Container>
      </section>

      {/* CTA registro */}
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            ¿Quieres asistir?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Los actos son gratuitos pero requieren inscripción previa.
            Regístrate en la web oficial para reservar tu plaza.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              Inscribirse en Madrid
            </a>
            <Link
              href="/como-asistir"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Guía completa
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
