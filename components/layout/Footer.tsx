'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { NAV_LINKS, siteConfig } from '@/data/siteConfig'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'

export default function Footer() {
  const pathname = usePathname()
  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE
  const prefixHref = (href: string): string => {
    if (href === '/') return `/${currentLocale}`
    return `/${currentLocale}${href}`
  }

  return (
    <footer className="gradient-navy mt-16 text-white/80">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={prefixHref(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-papal-gold"
                  >
                    {link.label}
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
            <div className="mt-4 rounded-lg border border-papal-gold/30 bg-white/5 p-3">
              <p className="text-center font-heading text-sm italic text-papal-gold">
                &ldquo;Alzad la mirada&rdquo;
              </p>
              <p className="mt-1 text-center text-xs text-white/40">
                Juan 4,35
              </p>
            </div>
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
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
