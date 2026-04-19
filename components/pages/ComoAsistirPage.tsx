import Link from 'next/link'
import Container from '@/components/ui/Container'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import AffiliateNotice from '@/components/affiliate/AffiliateNotice'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { siteConfig } from '@/data/siteConfig'
import { affiliates } from '@/data/affiliates'
import { getDictionary } from '@/data/i18n/dictionaries'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { howToSchema } from '@/lib/schema/generators'
import { getComoAsistirContent } from '@/data/i18n/content/como-asistir'

export default function ComoAsistirPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const t = getComoAsistirContent(locale)
  const hoteles = affiliates.filter((a) => a.category === 'hotel')
  const transporte = affiliates.filter((a) => a.category === 'transporte')
  const seguros = affiliates.filter((a) => a.category === 'seguro')

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.heroTitle, href: localizePath('/como-asistir', locale) },
  ]

  const howToSteps = t.section1.steps.map((step, i) => ({
    name: `${i + 1}`,
    text: step,
  }))

  return (
    <>
      <JsonLd data={howToSchema(t.heroTitle, t.heroSubtitle, howToSteps, locale)} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.heroTitle}
          </h1>
          <p className="mt-3 text-white/70">{t.heroSubtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* Sección 1: Inscripción */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.section1.title}
              </h2>
              <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
                <p className="text-papal-navy/80">
                  {t.section1.descriptionStart}
                  <strong>{t.section1.freeBold}</strong>
                  {t.section1.descriptionMid}
                  <strong>{t.section1.regPrevBold}</strong>
                  {t.section1.descriptionEnd}
                </p>
                <ul className="mt-4 space-y-2">
                  {t.section1.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-papal-navy/70"
                    >
                      <span className="mt-0.5 font-bold text-papal-gold">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={siteConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
                  >
                    {t.section1.registerBtn}
                  </a>
                  <a
                    href={siteConfig.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-bold text-papal-navy hover:bg-gray-50"
                  >
                    {t.section1.officialBtn}
                  </a>
                </div>
              </div>
            </section>

            {/* Sección 2: Transporte */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.section2.title}
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">{t.section2.trainTitle}</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">{t.section2.trainText}</p>
                  <p className="mt-1 text-sm text-papal-navy/70">
                    <strong>{t.section2.consejoLabel}:</strong> {t.section2.trainTip}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">{t.section2.planeTitle}</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">{t.section2.planeText}</p>
                </div>
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">{t.section2.localTitle}</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">{t.section2.localText}</p>
                </div>
              </div>
            </section>

            {/* Sección 3: Alojamiento */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.section3.title}
              </h2>
              <p className="text-papal-navy/70">{t.section3.demandText}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {hoteles.map((hotel) => (
                  <a
                    key={hotel.id}
                    href={hotel.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="rounded-lg border border-papal-gold/20 p-4 transition-colors hover:bg-papal-cream"
                  >
                    <p className="font-bold text-papal-navy">{hotel.displayName}</p>
                    <p className="mt-1 text-xs text-papal-navy/60">{hotel.description}</p>
                    <p className="mt-2 text-xs font-medium text-papal-gold">→</p>
                  </a>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-papal-navy/40">{t.section3.sponsoredLinks}</p>
            </section>

            {/* Sección 4: Qué llevar */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.section4.title}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4">
                  <h3 className="font-bold text-green-800">{t.section4.essentialTitle}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-green-700">
                    {t.section4.essential.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-amber-50 p-4">
                  <h3 className="font-bold text-amber-800">{t.section4.recommendedTitle}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-amber-700">
                    {t.section4.recommended.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Sección 5: Voluntariado */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.section5.title}
              </h2>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-blue-800">{t.section5.body1}</p>
                <p className="mt-2 text-sm text-blue-700">{t.section5.body2}</p>
                <a
                  href={siteConfig.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
                >
                  {t.section5.ctaBtn}
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
              <h3 className="font-heading text-lg font-bold text-papal-navy">
                {t.sidebar.keyDatesTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {t.sidebar.keyDates.map((date, i) => (
                  <li key={i} className="text-papal-navy/70">
                    {date}
                  </li>
                ))}
              </ul>
            </div>

            {transporte.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  {t.sidebar.transportTitle}
                </h3>
                <div className="mt-3 space-y-3">
                  {transporte.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                    >
                      <p className="font-medium text-papal-navy">{item.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{item.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">{t.section3.sponsoredLinks}</p>
              </div>
            )}

            {seguros.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  {t.sidebar.insuranceTitle}
                </h3>
                {seguros.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="mt-3 block rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                  >
                    <p className="font-medium text-papal-navy">{s.displayName}</p>
                    <p className="mt-1 text-xs text-papal-navy/60">{s.description}</p>
                  </a>
                ))}
                <p className="mt-2 text-[10px] text-papal-navy/40">{t.sponsoredLink}</p>
              </div>
            )}

            <BannerPlaceholder size="300x250" label={t.sidebar.insuranceTitle} />

            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <h3 className="font-heading text-lg font-bold">{t.sidebar.cantGoTitle}</h3>
              <p className="mt-1 text-sm text-white/70">{t.sidebar.cantGoBody}</p>
              <Link
                href={localizePath('/donde-ver', locale)}
                className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                {t.sidebar.cantGoCta}
              </Link>
            </div>
          </aside>
        </div>

        <AffiliateNotice locale={locale} />
      </Container>
    </>
  )
}
