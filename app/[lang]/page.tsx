import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import NewsletterForm from '@/components/shared/NewsletterForm'
import JsonLd from '@/components/seo/JsonLd'
import { LOCALES, type Locale } from '@/data/i18n/types'
import { getDictionary } from '@/data/i18n/dictionaries'
import { siteConfig } from '@/data/siteConfig'
import { cities } from '@/data/cities'
import { schedule } from '@/data/schedule'

interface Props {
  params: { lang: string }
}

export default function LocalizedHome({ params }: Props) {
  const lang = params.lang as Locale
  if (!LOCALES.includes(lang) || lang === 'es') notFound()
  const dict = getDictionary(lang)

  const totalEvents = schedule.reduce((acc, day) => acc + day.events.length, 0)
  const publicEvents = schedule.reduce(
    (acc, day) => acc + day.events.filter((e) => e.isPublic).length,
    0
  )

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: `${dict.home.heroTitle} ${dict.home.heroCountry}`,
          description: siteConfig.description,
          startDate: '2026-06-06',
          endDate: '2026-06-12',
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          inLanguage: lang,
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/papa-leon-xiv.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-papal-navy/85 via-papal-navy/80 to-papal-navy/95" />
        <Container className="relative py-16 text-center sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-papal-gold">
            {dict.home.heroDateRange}
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {dict.home.heroTitle}
            <br />
            <span className="text-papal-gold">{dict.home.heroCountry}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Madrid &middot; Barcelona &middot; Gran Canaria &middot; Tenerife
          </p>
          <p className="mt-2 font-heading text-xl italic text-papal-gold/80">
            &ldquo;{dict.home.heroMotto}&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              {dict.home.seeProgram}
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/50">
            {lang === 'en' && 'Full content available in Spanish at visita-papa-2026.es'}
            {lang === 'it' && 'Contenuto completo disponibile in spagnolo su visita-papa-2026.es'}
            {lang === 'fr' && 'Contenu complet disponible en espagnol sur visita-papa-2026.es'}
            {lang === 'de' && 'Vollständige Inhalte auf Spanisch unter visita-papa-2026.es verfügbar'}
            {lang === 'pt' && 'Conteúdo completo disponível em espanhol em visita-papa-2026.es'}
          </p>
        </Container>
      </section>

      {/* Cifras */}
      <section className="border-b border-papal-gold/10 bg-papal-cream">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">7</p>
              <p className="text-sm text-papal-navy/60">{dict.home.days}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">4</p>
              <p className="text-sm text-papal-navy/60">{dict.home.cities}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">{totalEvents}</p>
              <p className="text-sm text-papal-navy/60">{dict.home.scheduledEvents}</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-papal-navy">{publicEvents}</p>
              <p className="text-sm text-papal-navy/60">{dict.home.publicEvents}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ciudades */}
      <section className="section-padding">
        <Container>
          <h2 className="mb-2 text-center font-heading text-3xl font-bold text-papal-navy">
            {dict.home.journeyTitle}
          </h2>
          <p className="mb-10 text-center text-papal-navy/60">{dict.home.journeySubtitle}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {cities.map((city) => (
              <div
                key={city.slug}
                className="overflow-hidden rounded-xl border border-gray-100 shadow-sm"
              >
                <div
                  className="relative p-6 text-white"
                  style={{
                    backgroundImage: `url('${city.heroImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-papal-navy/75" />
                  <div className="relative">
                    <h3 className="font-heading text-2xl font-bold">{city.name}</h3>
                    <p className="text-sm text-white/80">{city.region}</p>
                  </div>
                </div>
                <ul className="space-y-1 p-4">
                  {city.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-papal-navy/70"
                    >
                      <span className="mt-0.5 text-papal-gold">&#x271D;</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="bg-white">
        <Container className="py-10">
          <NewsletterForm variant="banner" />
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {dict.home.attendanceInfo}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{dict.home.attendanceDesc}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              {dict.home.registerMadrid}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
