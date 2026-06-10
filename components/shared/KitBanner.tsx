'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Banner global con CTA hacia /que-llevar (Kit del peregrino).
 * Se muestra antes del footer en todas las páginas EXCEPTO en la propia
 * página del kit (para no repetirse) y en páginas legales sensibles.
 *
 * Justificación SEO/UX:
 * - Internal linking masivo hacia una página de alta intención de búsqueda
 *   («qué llevar al papa», «kit peregrino», «qué necesito para la visita»).
 * - Refuerza Anchor: «Kit del peregrino» / «Pilgrim kit» — descriptivo,
 *   coincide con el destino → bueno para anchorMismatchDemotion.
 * - Conversión de afiliación: el destino lista los 16 items del kit con
 *   enlaces Amazon afiliados.
 */

type Copy = {
  question: string
  cta: string
  ariaLabel: string
}

const TEXTS: Record<Locale, Copy> = {
  es: { question: '¿Qué necesitas para la visita del Papa?', cta: 'Kit del peregrino →', ariaLabel: 'Ver el kit del peregrino' },
  en: { question: 'What do you need for the Pope’s visit?', cta: 'Pilgrim kit →', ariaLabel: 'See the pilgrim kit' },
  it: { question: 'Cosa serve per la visita del Papa?', cta: 'Kit del pellegrino →', ariaLabel: 'Vedi il kit del pellegrino' },
  fr: { question: 'De quoi avez-vous besoin pour la visite du Pape ?', cta: 'Kit du pèlerin →', ariaLabel: 'Voir le kit du pèlerin' },
  de: { question: 'Was brauchen Sie für den Papstbesuch?', cta: 'Pilgerausrüstung →', ariaLabel: 'Pilgerausrüstung ansehen' },
  pt: { question: 'O que precisa para a visita do Papa?', cta: 'Kit do peregrino →', ariaLabel: 'Ver o kit do peregrino' },
  ca: { question: 'Què necessites per a la visita del Papa?', cta: 'Kit del pelegrí →', ariaLabel: 'Veure el kit del pelegrí' },
  gl: { question: 'Que precisas para a visita do Papa?', cta: 'Kit do peregrino →', ariaLabel: 'Ver o kit do peregrino' },
  eu: { question: 'Zer behar duzu Aita Santuaren bisitarako?', cta: 'Erromes-kita →', ariaLabel: 'Ikusi erromes-kita' },
}

// Slugs traducidos de /que-llevar — para no mostrar el banner en su propia página
const KIT_SLUGS: Record<Locale, string> = {
  es: 'que-llevar',
  en: 'what-to-bring',
  it: 'cosa-portare',
  fr: 'que-emporter',
  de: 'was-mitnehmen',
  pt: 'o-que-levar',
  ca: 'que-portar',
  gl: 'que-levar',
  eu: 'zer-eraman',
}

// Rutas donde NO mostrar el banner (legales, contacto, propio kit)
const HIDE_ON_SLUGS = new Set([
  'aviso-legal', 'legal-notice', 'note-legali', 'mentions-legales', 'impressum', 'avis-legal', 'lege-oharra',
  'privacidad', 'privacy', 'confidentialite', 'datenschutz', 'privacidade', 'privacitat', 'pribatutasuna',
  'politica-cookies', 'cookies-policy', 'politica-cookie', 'politique-cookies', 'cookie-richtlinie', 'politica-galetes', 'cookie-politika',
  'contacto', 'contact', 'contatto', 'kontakt', 'contato', 'contacte', 'kontaktua',
  // Reportaje inmersivo "La escalera de luz" (es/ca)
  'torre-de-jesucristo-sagrada-familia', 'torre-de-jesucrist-sagrada-familia',
])

export default function KitBanner() {
  const pathname = usePathname()
  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE

  // Extraer slug de primer nivel
  const stripped = pathname.replace(`/${currentLocale}/`, '').replace(`/${currentLocale}`, '')
  const firstSegment = stripped.split('/')[0]

  // No mostrar en la home (ya tiene CTAs al kit destacadas), ni en la
  // propia página del kit, ni en páginas legales/contacto
  if (!firstSegment) return null
  if (firstSegment === KIT_SLUGS[currentLocale]) return null
  if (HIDE_ON_SLUGS.has(firstSegment)) return null

  const t = TEXTS[currentLocale] || TEXTS.es

  return (
    <aside
      aria-label={t.ariaLabel}
      className="border-t border-papal-gold/20 bg-papal-cream"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-5 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="font-heading text-base font-bold text-papal-navy sm:text-lg">
          <span aria-hidden="true" className="mr-2">🎒</span>
          {t.question}
        </p>
        <Link
          href={localizePath(`/que-llevar`, currentLocale)}
          className="inline-block rounded-lg bg-papal-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-papal-navy/90"
        >
          {t.cta}
        </Link>
      </div>
    </aside>
  )
}
