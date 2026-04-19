import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import JsonLd from '@/components/seo/JsonLd'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { siteConfig } from '@/data/siteConfig'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { visitMainEventSchema } from '@/lib/schema/generators'

const CountdownTimer = dynamic(() => import('@/components/home/CountdownTimer'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center gap-3 sm:gap-5">
      {['--', '--', '--', '--'].map((l, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 sm:h-20 sm:w-20">
            <span className="font-heading text-2xl font-bold text-papal-gold sm:text-4xl">--</span>
          </div>
        </div>
      ))}
    </div>
  ),
})

// SocialFeed ahora es server component (ex widget Twitter/Instagram
// que dependían de terceros y no funcionaban). Se renderiza en SSR
// con las noticias del RSS diario importadas.
import SocialFeed from '@/components/shared/SocialFeed'

const CITY_COLORS: Record<string, string> = {
  madrid: 'from-papal-navy to-papal-navy-light',
  barcelona: 'from-papal-navy-light to-papal-navy',
  'gran-canaria': 'from-papal-gold-dark to-papal-navy',
  tenerife: 'from-papal-navy to-papal-gold-dark',
}

// Mapping de slug español → ruta traducida para el programa
function getDayLink(date: string, locale: Locale): string {
  const day = new Date(date + 'T12:00:00').getDate()
  // Los slugs de día mantienen '-junio' en todos los idiomas de momento
  return localizePath(`/programa/${day}-junio`, locale)
}

function getNewsLink(slug: string, locale: Locale): string {
  return localizePath(`/noticias/${slug}`, locale)
}

export default function LocalizedHome({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale)
  const t = getPagesDict(locale)
  const cities = getCitiesByLocale(locale)
  const schedule = getScheduleByLocale(locale)
  const news = getNewsByLocale(locale)
  const latestNews = news.slice(0, 3)
  const totalEvents = schedule.reduce((acc, day) => acc + day.events.length, 0)
  const publicEvents = schedule.reduce(
    (acc, day) => acc + day.events.filter((e) => e.isPublic).length,
    0
  )

  return (
    <>
      <JsonLd data={visitMainEventSchema(locale)} />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden">
        <Image
          src="/images/hero/papa-leon-xiv.webp"
          alt="Papa León XIV"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-papal-navy/85 via-papal-navy/80 to-papal-navy/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-papal-gold blur-3xl" />
        </div>
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

          <div className="mt-10">
            <CountdownTimer targetDate={siteConfig.visitStartDate} />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href={localizePath('/programa', locale)}
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              {dict.home.seeProgram}
            </Link>
            <Link
              href={localizePath('/como-asistir', locale)}
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {dict.home.howToAttend}
            </Link>
          </div>
        </Container>
      </section>

      {/* Cifras clave */}
      <section className="border-b border-papal-gold/10 bg-papal-cream min-h-[88px]">
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
              <Link
                key={city.slug}
                href={localizePath(`/ciudades/${city.slug}`, locale)}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative overflow-hidden p-6 text-white">
                  <Image
                    src={city.heroImage}
                    alt={city.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${CITY_COLORS[city.slug]} opacity-85`} />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{city.name}</h3>
                      <p className="text-sm text-white/80">{city.region}</p>
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
                        +{city.highlights.length - 3} {t.home.moreEvents}
                      </li>
                    )}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Banner afiliación 1 */}
      <div className="py-6">
        <BannerPlaceholder size="728x90" label={t.home.affiliateLabel1} />
      </div>

      {/* Programa día a día */}
      <section className="section-padding bg-gray-50">
        <Container>
          <h2 className="mb-2 text-center font-heading text-3xl font-bold text-papal-navy">
            {t.home.dayByDayTitle}
          </h2>
          <p className="mb-10 text-center text-papal-navy/60">
            {totalEvents} {t.home.dayByDaySubtitle}
          </p>
          <div className="space-y-3">
            {schedule.map((day) => {
              const city = cities.find((c) => c.slug === day.citySlug)
              return (
                <Link
                  key={day.date}
                  href={getDayLink(day.date, locale)}
                  className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-papal-navy text-white">
                    <span className="text-lg font-bold leading-none">
                      {new Date(day.date + 'T12:00:00').getDate()}
                    </span>
                    <span className="text-[10px] uppercase">{t.home.month3letter}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-bold text-papal-navy">{day.label}</p>
                    <p className="text-sm text-papal-navy/60">
                      {city?.name} &middot; {day.events.length} {t.home.events}
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
                        +{day.events.length - 2} {t.home.moreEvents}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={localizePath('/programa', locale)}
              className="inline-block rounded-lg bg-papal-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-papal-navy-light"
            >
              {dict.home.viewFullProgram}
            </Link>
          </div>
        </Container>
      </section>

      {/* Últimas noticias */}
      <section className="section-padding">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-papal-navy">
            {dict.home.latestNews}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {latestNews.map((article) => (
              <Link
                key={article.slug}
                href={getNewsLink(article.slug, locale)}
                className="group rounded-xl border border-gray-100 p-5 shadow-sm transition-all hover:shadow-md"
              >
                <p className="text-xs text-papal-navy/40">{article.date}</p>
                <h3 className="mt-1 font-heading text-lg font-bold text-papal-navy group-hover:text-papal-gold">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">{article.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={localizePath('/noticias', locale)}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              {t.home.viewAllNews} &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Últimas publicaciones (feed propio alimentado por RSS) */}
      <section className="section-padding">
        <Container>
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-papal-navy">
            {dict.home.fromVatican}
          </h2>
          <div className="mx-auto max-w-2xl">
            <SocialFeed locale={locale} limit={8} />
          </div>
        </Container>
      </section>

      {/* Banner afiliación 2 */}
      <div className="py-4">
        <BannerPlaceholder size="728x90" label={t.home.affiliateLabel2} />
      </div>

      {/* CTA registro */}
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
              {t.home.registerBtn}
            </a>
            <Link
              href={localizePath('/como-asistir', locale)}
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {t.home.fullGuideBtn}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
