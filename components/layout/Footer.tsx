'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { siteConfig, featureFlags } from '@/data/siteConfig'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { openCookieBanner } from '@/components/shared/CookieBanner'

export default function Footer() {
  const pathname = usePathname()
  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE
  const dict = getDictionary(currentLocale)
  const pagesDict = getPagesDict(currentLocale)
  const prefixHref = (p: string) => localizePath(p, currentLocale)

  const navItems: { path: string; label: string }[] = [
    { path: '/', label: dict.nav.home },
    { path: '/programa', label: dict.nav.programa },
    { path: '/ciudades', label: dict.nav.ciudades },
    { path: '/como-asistir', label: dict.nav.comoAsistir },
    { path: '/donde-ver', label: dict.nav.dondeVer },
    { path: '/mapa', label: dict.nav.mapa },
    { path: '/noticias', label: dict.nav.noticias },
    { path: '/guia', label: dict.nav.guias },
    { path: '/faq', label: dict.nav.faq },
    ...(featureFlags.shopEnabled
      ? [{ path: '/tienda', label: pagesDict.shop.title }]
      : []),
  ]

  // Nuevas páginas temáticas: biografía del Papa, kit, himno, oración, voluntariado
  const extraItems: { path: string; labelByLocale: Partial<Record<Locale, string>> }[] = [
    {
      path: '/papa-leon-xiv',
      labelByLocale: { es: 'Papa León XIV', en: 'Pope Leo XIV', it: 'Papa Leone XIV', fr: 'Pape Léon XIV', de: 'Papst Leo XIV', pt: 'Papa Leão XIV', ca: 'Papa Lleó XIV', gl: 'Papa León XIV', eu: 'Leon XIV.a' },
    },
    {
      path: '/voluntariado',
      labelByLocale: { es: 'Voluntariado', en: 'Volunteering', it: 'Volontariato', fr: 'Bénévolat', de: 'Ehrenamt', pt: 'Voluntariado', ca: 'Voluntariat', gl: 'Voluntariado', eu: 'Boluntariotza' },
    },
    {
      path: '/que-llevar',
      labelByLocale: { es: 'Qué llevar', en: 'What to bring', it: 'Cosa portare', fr: 'Que emporter', de: 'Was mitnehmen', pt: 'O que levar', ca: 'Què portar', gl: 'Que levar', eu: 'Zer eraman' },
    },
    {
      path: '/himno',
      labelByLocale: { es: 'Himno', en: 'Anthem', it: 'Inno', fr: 'Hymne', de: 'Hymne', pt: 'Hino', ca: 'Himne', gl: 'Himno', eu: 'Ereserkia' },
    },
    {
      path: '/oracion',
      labelByLocale: { es: 'Oración', en: 'Prayer', it: 'Preghiera', fr: 'Prière', de: 'Gebet', pt: 'Oração', ca: 'Oració', gl: 'Oración', eu: 'Otoitza' },
    },
    {
      path: '/historia-visitas-papales',
      labelByLocale: { es: 'Historia de visitas', en: 'Visits history', it: 'Storia visite', fr: 'Histoire visites', de: 'Besuche-Geschichte', pt: 'História das visitas', ca: 'Història de visites', gl: 'Historia das visitas', eu: 'Bisitaldien historia' },
    },
  ]

  return (
    <footer className="gradient-navy mt-16 text-white/80">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Marca */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">&#x271D;</span>
              <span className="font-heading text-lg font-bold text-white">
                Papa en España
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Guía completa de la visita del Papa León XIV a España.
              6-12 de junio de 2026.
            </p>
            <p className="mt-2 text-sm font-medium text-papal-gold">
              &ldquo;Alzad la mirada&rdquo;
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Secciones
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={prefixHref(item.path)}
                    className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Páginas temáticas */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              {currentLocale === 'en' ? 'More' : currentLocale === 'fr' ? 'Plus' : currentLocale === 'de' ? 'Mehr' : currentLocale === 'it' ? 'Altro' : currentLocale === 'pt' ? 'Mais' : currentLocale === 'ca' ? 'Més' : currentLocale === 'gl' ? 'Máis' : currentLocale === 'eu' ? 'Gehiago' : 'Más'}
            </h3>
            <ul className="space-y-2">
              {extraItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={prefixHref(item.path)}
                    className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                  >
                    {item.labelByLocale[currentLocale] || item.labelByLocale.es}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces oficiales */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Enlaces oficiales
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                >
                  Con el Papa (oficial)
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                >
                  Inscripción Madrid
                </a>
              </li>
              <li>
                <a
                  href="https://www.archimadrid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                >
                  Archidiócesis de Madrid
                </a>
              </li>
              <li>
                <a
                  href="https://www.vaticannews.va/es.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                >
                  Vatican News
                </a>
              </li>
            </ul>
          </div>

          {/* Lema */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Visita apostólica
            </h3>
            <p className="text-sm text-white/60">
              Del 6 al 12 de junio de 2026
            </p>
            <p className="text-sm text-white/60">
              Madrid &middot; Barcelona &middot; Gran Canaria &middot; Tenerife
            </p>
            <Link
              href={prefixHref('/alzad-la-mirada')}
              className="mt-4 block rounded-lg border border-papal-gold/30 bg-white/5 p-3 transition hover:bg-white/10"
            >
              <p className="text-center font-heading text-sm italic text-papal-gold">
                &ldquo;Alzad la mirada&rdquo;
              </p>
              <p className="mt-1 text-center text-xs text-white/40">
                Juan 4,35 — ¿de dónde viene?
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              Este sitio no es una web oficial. Información recopilada de fuentes públicas.
            </p>
            <nav className="flex flex-wrap gap-4 text-xs text-white/60">
              <Link href={prefixHref('/aviso-legal')} className="hover:text-papal-gold">
                Aviso legal
              </Link>
              <Link href={prefixHref('/privacidad')} className="hover:text-papal-gold">
                Privacidad
              </Link>
              <Link href={prefixHref('/politica-cookies')} className="hover:text-papal-gold">
                Cookies
              </Link>
              <Link href={prefixHref('/contacto')} className="hover:text-papal-gold">
                Contacto
              </Link>
              <button
                type="button"
                onClick={openCookieBanner}
                className="hover:text-papal-gold"
                aria-label="Reabrir el banner de cookies para modificar o revocar el consentimiento"
              >
                🍪 Preferencias de cookies
              </button>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
