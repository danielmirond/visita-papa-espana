import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getAvisoLegal, LEGAL_ENTITY } from '@/lib/legal-i18n'

interface Props {
  locale: Locale
}

const OFFICIAL_URL = 'https://conelpapa.es'

export default function AvisoLegalPage({ locale }: Props) {
  const t = getAvisoLegal(locale)

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10">
          <Breadcrumbs items={[{ name: t.title, href: localizePath('/aviso-legal', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white text-center">{t.title}</h1>
          <p className="mt-2 text-center text-sm text-white/70">Última actualización: {LEGAL_ENTITY.lastUpdated}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-2xl space-y-6 text-papal-navy/85">

          {/* Datos identificativos · art. 10 LSSI */}
          <div className="rounded-xl border-2 border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="font-heading text-lg font-bold text-papal-navy">{t.identBlock}</h2>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">{t.titularLbl}:</dt>
                <dd>{LEGAL_ENTITY.titular}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">{t.nifLbl}:</dt>
                <dd>{LEGAL_ENTITY.nif}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">{t.contactLbl}:</dt>
                <dd>
                  <Link href={localizePath('/contacto', locale)} className="text-papal-gold-dark hover:underline">
                    {t.contactCta}
                  </Link>
                </dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">{t.domainLbl}:</dt>
                <dd>{LEGAL_ENTITY.domain}</dd>
              </div>
            </dl>
          </div>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.aboutTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">
              {t.aboutBody(
                `<a href="${OFFICIAL_URL}" target="_blank" rel="noopener noreferrer" class="text-papal-gold hover:underline">conelpapa.es</a>`
              ).split(/(<a[^>]+>[^<]+<\/a>)/).map((chunk, i) => {
                if (chunk.startsWith('<a')) {
                  return (
                    <a
                      key={i}
                      href={OFFICIAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-papal-gold hover:underline"
                    >
                      conelpapa.es
                    </a>
                  )
                }
                return chunk
              })}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.afilTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.afilBody1}</p>
            <p className="mt-2 text-sm leading-relaxed">
              <strong>{t.afilBody2}</strong>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.ipTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.ipBody}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.privTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">
              {t.privBody('', '').split(/\([^)]*\)/)[0]}
              <Link href={localizePath('/politica-cookies', locale)} className="text-papal-gold hover:underline">
                {locale === 'en' ? 'cookie policy' : locale === 'it' ? 'politica dei cookie' : locale === 'fr' ? 'politique de cookies' : locale === 'de' ? 'Cookie-Richtlinie' : locale === 'pt' ? 'política de cookies' : locale === 'ca' ? 'política de galetes' : locale === 'gl' ? 'política de cookies' : locale === 'eu' ? 'cookie-politika' : 'política de cookies'}
              </Link>
              {' · '}
              <Link href={localizePath('/privacidad', locale)} className="text-papal-gold hover:underline">
                {locale === 'en' ? 'privacy policy' : locale === 'it' ? 'privacy' : locale === 'fr' ? 'politique de confidentialité' : locale === 'de' ? 'Datenschutzerklärung' : locale === 'pt' ? 'política de privacidade' : locale === 'ca' ? 'política de privacitat' : locale === 'gl' ? 'política de privacidade' : locale === 'eu' ? 'pribatutasun-politika' : 'política de privacidad'}
              </Link>
              .
            </p>
            <p className="mt-2 text-sm leading-relaxed">{t.rightsLine}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.liabilityTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.liabilityBody}</p>
          </section>
        </div>
      </Container>
    </>
  )
}
