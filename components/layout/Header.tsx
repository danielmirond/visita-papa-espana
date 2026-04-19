'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { localizePath, type RouteKey } from '@/data/i18n/routes'
import { getDictionary } from '@/data/i18n/dictionaries'

// Links de nav con clave canónica (español)
const NAV: { path: string; key: keyof ReturnType<typeof getDictionary>['nav'] }[] = [
  { path: '/', key: 'home' },
  { path: '/programa', key: 'programa' },
  { path: '/ciudades', key: 'ciudades' },
  { path: '/como-llegar', key: 'comoAsistir' }, // Nav label reutilizado; hay sección separada pero ok
  { path: '/donde-ver', key: 'dondeVer' },
  { path: '/mapa', key: 'mapa' },
  { path: '/guia', key: 'guias' },
  { path: '/noticias', key: 'noticias' },
  { path: '/faq', key: 'faq' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE

  const dict = getDictionary(currentLocale)
  const href = (path: string) => localizePath(path, currentLocale)

  return (
    <header className="sticky top-0 z-50 border-b border-papal-gold/20 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={href('/')} className="flex items-center gap-2">
            <span className="text-2xl">&#x271D;</span>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-bold text-papal-navy">
                  Papa en España
                </span>
                <span className="hidden text-xs text-papal-gold sm:inline">2026</span>
              </div>
              <span className="block text-[10px] uppercase tracking-wide text-papal-navy/50">
                Guía independiente
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={href(item.path)}
                className="rounded-md px-3 py-2 text-sm font-medium text-papal-navy/80 transition-colors hover:bg-papal-cream hover:text-papal-navy"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
            <div className="ml-2 border-l border-papal-gold/20 pl-2">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile: language + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="border-t border-papal-gold/10 pb-4 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={href(item.path)}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-papal-navy/80 transition-colors hover:bg-papal-cream"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
