import Link from 'next/link'
import Container from '@/components/ui/Container'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { cityTransports } from '@/data/transporte'
import { getAffiliateById } from '@/data/affiliates'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getComoLlegarLabels } from '@/data/i18n/content/como-llegar'

export default function ComoLlegarPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const t = getComoLlegarLabels(locale)
  const cities = getCitiesByLocale(locale)

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.heroTitle, href: localizePath('/como-llegar', locale) },
  ]

  // Mapa slug → nombre traducido de la ciudad
  const cityNameBySlug = Object.fromEntries(cities.map((c) => [c.slug, c.name]))

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.heroTitle}
          </h1>
          <p className="mt-3 text-white/70">{t.heroSubtitle}</p>
        </Container>
      </section>

      {/* Índice */}
      <section className="border-b border-papal-gold/10 bg-papal-cream">
        <Container className="py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {cityTransports.map((city) => (
              <a
                key={city.citySlug}
                href={`#${city.citySlug}`}
                className="rounded-full border border-papal-gold/30 px-4 py-1.5 text-xs font-medium text-papal-navy transition-colors hover:bg-papal-gold hover:text-white"
              >
                {cityNameBySlug[city.citySlug] || city.cityName}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-papal-navy/70">{t.intro}</p>
        </div>

        <div className="mb-10">
          <BannerPlaceholder size="728x90" label={t.affiliateLabel + ' …'} />
        </div>

        <div className="space-y-12">
          {cityTransports.map((city) => {
            const displayName = cityNameBySlug[city.citySlug] || city.cityName
            return (
              <section key={city.citySlug} id={city.citySlug} className="scroll-mt-20">
                <div className="mb-6 border-b border-papal-gold/20 pb-4">
                  <h2 className="font-heading text-2xl font-bold text-papal-navy">
                    {displayName}
                  </h2>
                  <p className="mt-1 text-sm text-papal-navy/60">
                    {t.airport}: {city.airport} ({city.airportCode})
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="mb-3 font-heading text-lg font-bold text-papal-navy">
                        {t.howToReach}
                      </h3>
                      <div className="space-y-2">
                        {city.fromCities.map((option, i) => {
                          const affiliate = option.affiliateId
                            ? getAffiliateById(option.affiliateId)
                            : null
                          return (
                            <div
                              key={i}
                              className="flex flex-col gap-2 rounded-lg border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-papal-navy">
                                  {option.name}
                                </p>
                                <p className="mt-0.5 text-sm text-papal-navy/60">
                                  {option.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="rounded bg-papal-cream px-2 py-0.5 text-xs font-medium text-papal-navy">
                                  {option.duration}
                                </span>
                                {affiliate && (
                                  <a
                                    href={affiliate.url}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    className="rounded-lg bg-papal-gold px-3 py-1.5 text-xs font-bold text-papal-navy hover:bg-papal-gold-light"
                                  >
                                    {t.reserveAction}
                                  </a>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 font-heading text-lg font-bold text-papal-navy">
                        {t.localTransport}
                      </h3>
                      <ul className="space-y-1.5">
                        {city.localTransport.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-papal-navy/70"
                          >
                            <span className="mt-0.5 text-papal-gold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-papal-cream p-5">
                      <h3 className="font-heading text-base font-bold text-papal-navy">
                        {t.specialServices}
                      </h3>
                      <p className="mt-2 text-sm text-papal-navy/70">{city.specialInfo}</p>
                    </div>

                    <div className="rounded-xl border border-papal-gold/30 bg-white p-5">
                      <h3 className="font-heading text-base font-bold text-papal-navy">
                        {t.trafficClosures}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {city.trafficClosures.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-papal-navy/70"
                          >
                            <span className="mt-0.5 text-papal-gold">—</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs text-papal-navy/40">{t.trafficIntro}</p>
                    </div>
                  </div>

                  <aside className="space-y-4">
                    <div className="rounded-xl border border-papal-gold/20 bg-white p-5">
                      <h4 className="font-heading text-sm font-bold text-papal-navy">
                        {t.seeProgramIn} {displayName}
                      </h4>
                      <Link
                        href={localizePath(`/ciudades/${city.citySlug}`, locale)}
                        className="mt-2 block text-sm font-medium text-papal-gold hover:underline"
                      >
                        {t.venuesAndLocations} →
                      </Link>
                    </div>
                    <BannerPlaceholder size="300x250" label={`${t.affiliateLabel} ${displayName}`} />
                  </aside>
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-12 rounded-xl bg-papal-cream p-6 text-center sm:p-8">
          <h2 className="font-heading text-xl font-bold text-papal-navy">
            {t.needAccommodationTitle}
          </h2>
          <p className="mt-2 text-sm text-papal-navy/60">{t.needAccommodationBody}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href={localizePath('/como-asistir', locale)}
              className="rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
            >
              {t.guidelineBtn}
            </Link>
            <Link
              href={localizePath('/ciudades', locale)}
              className="rounded-lg border border-papal-navy/20 px-5 py-2 text-sm font-bold text-papal-navy hover:bg-white"
            >
              {t.cityInfoBtn}
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
