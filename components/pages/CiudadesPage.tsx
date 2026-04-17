import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { formatDateShort } from '@/lib/utils'
import { citySchema } from '@/lib/schema/generators'

const CITY_GRADIENTS: Record<string, string> = {
  madrid: 'from-papal-navy to-papal-navy-light',
  barcelona: 'from-papal-navy-light to-papal-navy',
  'gran-canaria': 'from-papal-gold-dark to-papal-gold',
  tenerife: 'from-papal-navy to-papal-gold-dark',
}

export default function CiudadesPageContent({ locale }: { locale: Locale }) {
  const t = getPagesDict(locale)
  const nav = getDictionary(locale)
  const cities = getCitiesByLocale(locale)
  const schedule = getScheduleByLocale(locale)

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.ciudades.title, href: localizePath('/ciudades', locale) },
  ]

  return (
    <>
      {/* Un City schema por cada una: geo + containedInPlace España + sameAs Wikidata */}
      {cities.map((city) => {
        const schema = citySchema(city, locale)
        return schema ? <JsonLd key={city.slug} data={schema} /> : null
      })}

      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.ciudades.title}
          </h1>
          <p className="mt-3 text-white/70">{t.ciudades.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-8">
          {cities.map((city) => {
            const citySchedule = schedule.filter((d) => d.citySlug === city.slug)
            const totalEvents = citySchedule.reduce((acc, d) => acc + d.events.length, 0)

            return (
              <Link
                key={city.slug}
                href={localizePath(`/ciudades/${city.slug}`, locale)}
                className="group block overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-lg"
              >
                <div
                  className="relative p-6 text-white sm:p-8"
                  style={{
                    backgroundImage: `url('${city.heroImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${CITY_GRADIENTS[city.slug]} opacity-85`} />
                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{city.name}</h2>
                        <p className="text-sm text-white/80">{city.region}</p>
                      </div>
                      <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        {formatDateShort(city.papalDates.start)}
                        {city.papalDates.start !== city.papalDates.end && (
                          <> - {formatDateShort(city.papalDates.end)}</>
                        )}
                        <span className="ml-2 text-white/70">· {totalEvents}</span>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
                      {city.description}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-papal-navy/50">
                    {t.ciudades.highlights}
                  </h3>
                  <ul className="grid gap-1 sm:grid-cols-2">
                    {city.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-papal-navy/70">
                        <span className="mt-0.5 text-papal-gold">✝</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm font-medium text-papal-gold group-hover:underline">
                    {t.ciudades.viewFullInfo} {city.name} →
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}
