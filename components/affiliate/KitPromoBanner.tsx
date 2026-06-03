import Link from 'next/link'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Banner horizontal (formato leaderboard) que ocupa los espacios antes
 * reservados a publicidad en la home y los reaprovecha como CTA interna
 * hacia /que-llevar (Kit del peregrino), con el ángulo «lo que necesitas
 * para la vigilia y la misa».
 *
 * - Internal linking hacia una página de alta intención + afiliación.
 * - Anchor descriptivo coincide con el destino (Kit del peregrino).
 */

interface Props {
  locale: Locale
  className?: string
}

const TEXTS: Record<Locale, { body: string; cta: string }> = {
  es: { body: 'Lo que necesitas para la vigilia y la misa', cta: 'Kit del peregrino →' },
  en: { body: 'What you need for the vigil and the Mass', cta: 'Pilgrim kit →' },
  it: { body: 'Cosa ti serve per la veglia e la Messa', cta: 'Kit del pellegrino →' },
  fr: { body: 'Ce qu’il vous faut pour la veillée et la messe', cta: 'Kit du pèlerin →' },
  de: { body: 'Was du für die Vigil und die Messe brauchst', cta: 'Pilgerausrüstung →' },
  pt: { body: 'O que precisa para a vigília e a missa', cta: 'Kit do peregrino →' },
  ca: { body: 'El que necessites per a la vetlla i la missa', cta: 'Kit del pelegrí →' },
  gl: { body: 'O que precisas para a vixilia e a misa', cta: 'Kit do peregrino →' },
  eu: { body: 'Bijiliarako eta mezarako behar duzuna', cta: 'Erromes-kita →' },
}

export default function KitPromoBanner({ locale, className = '' }: Props) {
  const t = TEXTS[locale] || TEXTS.es

  return (
    <Link
      href={localizePath('/que-llevar', locale)}
      className={`mx-auto flex w-full max-w-[728px] items-center justify-center gap-3 rounded-xl border border-papal-gold/40 bg-gradient-to-r from-papal-cream to-amber-50 px-4 py-4 text-center transition-shadow hover:shadow-md ${className}`}
    >
      <span aria-hidden="true" className="text-2xl">🎒</span>
      <span className="text-sm font-medium text-papal-navy sm:text-base">{t.body}</span>
      <span className="text-sm font-semibold text-papal-gold-dark group-hover:underline">{t.cta}</span>
    </Link>
  )
}
