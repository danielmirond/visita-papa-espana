import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import HomeProductShowcase from '@/components/affiliate/HomeProductShowcase'
import JsonLd from '@/components/seo/JsonLd'
import KeyVideos from '@/components/home/KeyVideos'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
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

// Textos de cierre post-visita (modo recap) por idioma. La visita ya concluyó:
// el hero y el CTA final invitan a revivirla en vez de a inscribirse.
const RECAP: Record<Locale, { heroLine: string; revive: string; heading: string; desc: string; keyVideos: string }> = {
  es: {
    heroLine: 'El viaje apostólico de León XIV a España ya ha concluido. Revive cada jornada: vídeos, programa día a día y toda la cobertura.',
    revive: 'Revive la visita',
    heading: 'Revive la visita del Papa a España',
    desc: 'El viaje apostólico de León XIV (6-12 de junio de 2026) ya ha concluido. Repasa el programa día a día, los vídeos clave y toda la cobertura.',
    keyVideos: 'Vídeos clave',
  },
  en: {
    heroLine: 'Pope Leo XIV’s apostolic journey to Spain has ended. Relive every day: videos, day-by-day programme and full coverage.',
    revive: 'Relive the visit',
    heading: 'Relive the Pope’s visit to Spain',
    desc: 'Pope Leo XIV’s apostolic journey (6–12 June 2026) has ended. Browse the day-by-day programme, the key videos and full coverage.',
    keyVideos: 'Key videos',
  },
  it: {
    heroLine: 'Il viaggio apostolico di Leone XIV in Spagna è concluso. Rivivi ogni giornata: video, programma giorno per giorno e tutta la copertura.',
    revive: 'Rivivi la visita',
    heading: 'Rivivi la visita del Papa in Spagna',
    desc: 'Il viaggio apostolico di Leone XIV (6-12 giugno 2026) è concluso. Sfoglia il programma giorno per giorno, i video principali e tutta la copertura.',
    keyVideos: 'Video principali',
  },
  fr: {
    heroLine: 'Le voyage apostolique de Léon XIV en Espagne est terminé. Revivez chaque journée : vidéos, programme jour par jour et toute la couverture.',
    revive: 'Revivez la visite',
    heading: 'Revivez la visite du Pape en Espagne',
    desc: 'Le voyage apostolique de Léon XIV (6-12 juin 2026) est terminé. Parcourez le programme jour par jour, les vidéos clés et toute la couverture.',
    keyVideos: 'Vidéos clés',
  },
  de: {
    heroLine: 'Die Apostolische Reise von Leo XIV. nach Spanien ist beendet. Erleben Sie jeden Tag noch einmal: Videos, Tagesprogramm und die gesamte Berichterstattung.',
    revive: 'Besuch noch einmal erleben',
    heading: 'Erleben Sie den Papstbesuch in Spanien noch einmal',
    desc: 'Die Apostolische Reise von Leo XIV. (6.–12. Juni 2026) ist beendet. Durchstöbern Sie das Tagesprogramm, die wichtigsten Videos und die gesamte Berichterstattung.',
    keyVideos: 'Wichtige Videos',
  },
  pt: {
    heroLine: 'A viagem apostólica de Leão XIV a Espanha terminou. Reviva cada jornada: vídeos, programa dia a dia e toda a cobertura.',
    revive: 'Reviva a visita',
    heading: 'Reviva a visita do Papa a Espanha',
    desc: 'A viagem apostólica de Leão XIV (6-12 de junho de 2026) terminou. Consulte o programa dia a dia, os vídeos principais e toda a cobertura.',
    keyVideos: 'Vídeos principais',
  },
  ca: {
    heroLine: 'El viatge apostòlic de Lleó XIV a Espanya ja ha conclòs. Reviu cada jornada: vídeos, programa dia a dia i tota la cobertura.',
    revive: 'Reviu la visita',
    heading: 'Reviu la visita del Papa a Espanya',
    desc: 'El viatge apostòlic de Lleó XIV (6-12 de juny de 2026) ja ha conclòs. Repassa el programa dia a dia, els vídeos clau i tota la cobertura.',
    keyVideos: 'Vídeos clau',
  },
  gl: {
    heroLine: 'A viaxe apostólica de León XIV a España xa rematou. Revive cada xornada: vídeos, programa día a día e toda a cobertura.',
    revive: 'Revive a visita',
    heading: 'Revive a visita do Papa a España',
    desc: 'A viaxe apostólica de León XIV (6-12 de xuño de 2026) xa rematou. Repasa o programa día a día, os vídeos clave e toda a cobertura.',
    keyVideos: 'Vídeos clave',
  },
  eu: {
    heroLine: 'Leon XIV.aren Espainiarako bidaia apostolikoa amaitu da. Birbizi ezazu egun bakoitza: bideoak, eguneko programa eta estaldura osoa.',
    revive: 'Birbizi bisita',
    heading: 'Birbizi Aita Santuaren Espainiako bisita',
    desc: 'Leon XIV.aren bidaia apostolikoa (2026ko ekainaren 6-12) amaitu da. Begiratu eguneko programa, bideo nagusiak eta estaldura osoa.',
    keyVideos: 'Bideo nagusiak',
  },
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

      {/* Titular/cita del Papa sobre el vídeo */}
      {locale === 'es' && (
        <div className="bg-papal-navy">
          <Container className="py-4 text-center">
            <p className="font-heading text-lg font-bold italic text-papal-gold sm:text-xl">
              «Vosotros podéis cambiar la historia, hacedlo con el amor»
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
              León XIV · Vigilia con los jóvenes en Madrid
            </p>
          </Container>
        </div>
      )}

      {/* Vídeos clave de la visita (recap; sustituye al directo ya finalizado) */}
      <KeyVideos locale={locale} />

      {/* Destacado: resumen de la visita (intención principal post-visita) */}
      {locale === 'es' && (
        <div className="border-b border-papal-gold/20 bg-papal-gold/15">
          <Container className="py-2 text-center">
            <Link
              href="/es/resumen-visita-papa-espana"
              className="inline-flex items-center gap-2 text-sm font-semibold text-papal-navy hover:underline"
            >
              📋 Resumen de la visita: qué pasó cada día y los mejores momentos →
            </Link>
          </Container>
        </div>
      )}

      {/* Destacado: Canarias (11-12 jun) */}
      {locale === 'es' && (
        <div className="border-b border-papal-gold/20 bg-papal-gold/15">
          <Container className="py-2 text-center">
            <Link
              href="/es/ciudades/gran-canaria"
              className="inline-flex items-center gap-2 text-sm font-semibold text-papal-navy hover:underline"
            >
              🗺️ El Papa en Canarias (11-12 jun): Gran Canaria y Tenerife →
            </Link>
          </Container>
        </div>
      )}

      {/* Destacado: reportaje de la Torre de Jesucristo */}
      {locale === 'es' && (
        <div className="border-b border-papal-gold/20 bg-papal-cream">
          <Container className="py-2 text-center">
            <Link
              href="/es/torre-de-jesucristo-sagrada-familia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-papal-navy hover:underline"
            >
              🗼 La Torre de Jesucristo: la iglesia más alta del mundo →
            </Link>
          </Container>
        </div>
      )}

      {/* Hero compacto (franja) */}
      <section className="gradient-navy">
        <Container className="py-7 text-center sm:py-9">
          <p className="text-xs font-medium uppercase tracking-widest text-papal-gold">
            {dict.home.heroDateRange} &middot; Madrid · Barcelona · Gran Canaria · Tenerife
          </p>
          <h1 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
            {dict.home.heroTitle} <span className="text-papal-gold">{dict.home.heroCountry}</span>
          </h1>
          <p className="mt-1 font-heading text-base italic text-papal-gold/80">
            &ldquo;{dict.home.heroMotto}&rdquo;
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
            {RECAP[locale].heroLine}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            <a
              href="#videos-clave"
              className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              {RECAP[locale].revive}
            </a>
            <Link
              href={localizePath('/programa', locale)}
              className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {dict.home.seeProgram}
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

      {/* CTA al reportaje de la Torre (el vídeo ya está en el mosaico de arriba) */}
      {locale === 'es' && (
        <section className="section-padding">
          <Container>
            <Link
              href="/es/torre-de-jesucristo-sagrada-familia"
              className="group mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-papal-gold/30 bg-papal-cream p-6 text-center transition hover:shadow-md sm:flex-row sm:text-left"
            >
              <span className="text-4xl">🗼</span>
              <span className="flex-1">
                <span className="block text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Reportaje · Barcelona</span>
                <span className="mt-1 block font-heading text-xl font-bold text-papal-navy sm:text-2xl">
                  La escalera de luz: la Torre de Jesucristo
                </span>
                <span className="mt-1 block text-sm text-papal-navy/70">
                  La iglesia más alta del mundo, contada paso a paso. Cómo el Papa la bendijo e iluminó.
                </span>
              </span>
              <span className="shrink-0 rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy transition-colors group-hover:bg-papal-gold-light">
                Leer el reportaje →
              </span>
            </Link>
          </Container>
        </section>
      )}

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

      {/* Showcase de productos para home */}
      <HomeProductShowcase locale={locale} />

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

      {/* CTA final: recap post-visita (todos los idiomas) */}
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {RECAP[locale].heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{RECAP[locale].desc}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#videos-clave"
              className="rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              {RECAP[locale].keyVideos}
            </a>
            <Link
              href={localizePath('/programa', locale)}
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {dict.home.viewFullProgram}
            </Link>
            <Link
              href={localizePath('/noticias', locale)}
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {dict.home.latestNews}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
