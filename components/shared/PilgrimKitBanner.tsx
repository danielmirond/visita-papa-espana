import Link from 'next/link'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Banner compacto (variante de tarjeta) con CTA hacia /que-llevar
 * (Kit del peregrino). Pensado para colocarlo destacado en la home,
 * en pareja con <VaticanFlagBanner /> — comparte su estética.
 *
 * Para el banner global de ancho completo (antes del footer) sigue
 * usándose components/shared/KitBanner.tsx.
 */

interface Props {
  locale: Locale
  className?: string
}

const TEXTS: Record<Locale, { body: string; cta: string }> = {
  es: { body: '¿Qué necesitas para la visita del Papa?', cta: 'Kit del peregrino →' },
  en: { body: 'What do you need for the Pope’s visit?', cta: 'Pilgrim kit →' },
  it: { body: 'Cosa serve per la visita del Papa?', cta: 'Kit del pellegrino →' },
  fr: { body: 'De quoi avez-vous besoin pour la visite du Pape ?', cta: 'Kit du pèlerin →' },
  de: { body: 'Was brauchen Sie für den Papstbesuch?', cta: 'Pilgerausrüstung →' },
  pt: { body: 'O que precisa para a visita do Papa?', cta: 'Kit do peregrino →' },
  ca: { body: 'Què necessites per a la visita del Papa?', cta: 'Kit del pelegrí →' },
  gl: { body: 'Que precisas para a visita do Papa?', cta: 'Kit do peregrino →' },
  eu: { body: 'Zer behar duzu Aita Santuaren bisitarako?', cta: 'Erromes-kita →' },
}

export default function PilgrimKitBanner({ locale, className = '' }: Props) {
  const t = TEXTS[locale] || TEXTS.es

  return (
    <Link
      href={localizePath('/que-llevar', locale)}
      className={`group flex items-center gap-3 rounded-xl border border-papal-gold/40 bg-gradient-to-r from-papal-cream to-amber-50 px-4 py-3 transition-shadow hover:shadow-md sm:px-5 sm:py-4 ${className}`}
    >
      <span aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-white text-xl">
        🎒
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-papal-navy sm:text-base">{t.body}</p>
        <p className="mt-0.5 text-xs font-semibold text-papal-gold-dark group-hover:underline">{t.cta}</p>
      </div>
    </Link>
  )
}
