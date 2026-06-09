'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { getProductsByIds, CAROUSEL_ESSENTIAL_IDS, buildAmazonUrl } from '@/data/amazon-products'

/**
 * Carrusel global de una fila (sticky inferior) con los "essentials" para
 * el calor. Aparece en toda la web. Enlaces de afiliación a Amazon.
 * Es descartable: una vez cerrado, no vuelve a mostrarse en la sesión.
 */

const LABELS: Record<Locale, { title: string; close: string }> = {
  es: { title: 'Essentials para el calor', close: 'Cerrar' },
  en: { title: 'Hot-weather essentials', close: 'Close' },
  it: { title: 'Essential per il caldo', close: 'Chiudi' },
  fr: { title: 'Essentiels anti-chaleur', close: 'Fermer' },
  de: { title: 'Hitze-Essentials', close: 'Schließen' },
  pt: { title: 'Essenciais para o calor', close: 'Fechar' },
  ca: { title: 'Essentials per a la calor', close: 'Tancar' },
  gl: { title: 'Essentials para a calor', close: 'Pechar' },
  eu: { title: 'Beroari aurre egiteko', close: 'Itxi' },
}

// Slugs de páginas legales/contacto donde no mostrar el carrusel
const HIDE_ON_SLUGS = new Set([
  'aviso-legal', 'legal-notice', 'note-legali', 'mentions-legales', 'impressum', 'avis-legal', 'lege-oharra',
  'privacidad', 'privacy', 'confidentialite', 'datenschutz', 'privacidade', 'privacitat', 'pribatutasuna',
  'politica-cookies', 'cookies-policy', 'politica-cookie', 'politique-cookies', 'cookie-richtlinie', 'politica-galetes', 'cookie-politika',
  'contacto', 'contact', 'contatto', 'kontakt', 'contato', 'contacte', 'kontaktua',
])

export default function EssentialsCarousel() {
  const pathname = usePathname()
  const [closed, setClosed] = useState(false)

  const locale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) || DEFAULT_LOCALE

  const stripped = pathname.replace(`/${locale}/`, '').replace(`/${locale}`, '')
  const firstSegment = stripped.split('/')[0]
  if (!firstSegment) return null // No mostrar en la home
  if (HIDE_ON_SLUGS.has(firstSegment)) return null
  if (closed) return null

  const products = getProductsByIds(CAROUSEL_ESSENTIAL_IDS)
  const t = LABELS[locale] || LABELS.es

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-blue-600 bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-4 sm:px-4 sm:py-5">
        <span className="hidden whitespace-nowrap text-sm font-bold text-blue-700 sm:inline">
          🎒 {t.title}
        </span>
        <ul className="flex flex-1 gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {products.map((p) => (
            <li key={p.id} className="flex-shrink-0">
              <a
                href={buildAmazonUrl(p.amazonQuery, locale)}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-papal-navy transition-colors hover:border-blue-400 hover:bg-blue-100 sm:text-base"
              >
                <span className="font-semibold">{p.title[locale] || p.title.es}</span>
                <span className="text-xs font-bold text-blue-700 sm:text-sm">
                  €{p.priceRange.min}-{p.priceRange.max}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setClosed(true)}
          aria-label={t.close}
          className="flex-shrink-0 rounded p-1 text-lg leading-none text-papal-navy/50 transition-colors hover:bg-gray-100 hover:text-papal-navy"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
