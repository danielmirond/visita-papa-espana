'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { translateCurrentPath } from '@/data/i18n/routes'

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  // Detectar locale actual de la URL
  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Generar URL traducida para cada idioma preservando la ruta canónica
  const getUrlForLocale = (locale: Locale): string => {
    return translateCurrentPath(pathname, locale)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Cambiar idioma"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-papal-navy/80 transition-colors hover:bg-papal-cream"
      >
        <span className="text-base leading-none">{LOCALE_FLAGS[currentLocale]}</span>
        <span className="hidden font-medium sm:inline">{currentLocale.toUpperCase()}</span>
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-1 min-w-[160px] overflow-hidden rounded-lg border border-papal-gold/20 bg-white shadow-lg"
        >
          {LOCALES.map((locale) => (
            <Link
              key={locale}
              href={getUrlForLocale(locale)}
              onClick={() => setOpen(false)}
              role="menuitem"
              className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-papal-cream ${
                locale === currentLocale ? 'bg-papal-cream font-bold text-papal-navy' : 'text-papal-navy/80'
              }`}
            >
              <span className="text-base leading-none">{LOCALE_FLAGS[locale]}</span>
              <span>{LOCALE_LABELS[locale]}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
