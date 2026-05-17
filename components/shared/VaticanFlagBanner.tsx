import Link from 'next/link'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Banner contextual para páginas del recorrido papal (ciudades, programa,
 * landings de actos masivos) que invita al lector a llevar la bandera del
 * Vaticano y enlaza a la pillar page /bandera-vaticano.
 *
 * Beneficios:
 * - Internal linking masivo hacia /bandera-vaticano (pillar SEO)
 * - Anchor descriptivo «bandera Vaticano» coincide con destino
 * - Eleva tráfico cualificado a una página con CTA afiliado curado
 */

interface Props {
  locale: Locale
  className?: string
}

const TEXTS: Record<Locale, { body: string; cta: string }> = {
  es: { body: 'Lleva tu bandera del Vaticano para saludar al Pontífice', cta: 'Bandera del Vaticano →' },
  en: { body: 'Bring your Vatican flag to greet the Pontiff', cta: 'Vatican flag →' },
  it: { body: 'Porta la tua bandiera del Vaticano per salutare il Pontefice', cta: 'Bandiera del Vaticano →' },
  fr: { body: 'Apportez votre drapeau du Vatican pour saluer le Pontife', cta: 'Drapeau du Vatican →' },
  de: { body: 'Bringen Sie Ihre Vatikanflagge mit, um den Pontifex zu grüßen', cta: 'Vatikanflagge →' },
  pt: { body: 'Leve a sua bandeira do Vaticano para saudar o Pontífice', cta: 'Bandeira do Vaticano →' },
  ca: { body: 'Porta la teva bandera del Vaticà per saludar el Pontífex', cta: 'Bandera del Vaticà →' },
  gl: { body: 'Leva a túa bandeira do Vaticano para saudar o Pontífice', cta: 'Bandeira do Vaticano →' },
  eu: { body: 'Eraman zure Vatikanoaren bandera Pontifizea agurtzeko', cta: 'Vatikanoaren bandera →' },
}

export default function VaticanFlagBanner({ locale, className = '' }: Props) {
  const t = TEXTS[locale] || TEXTS.es

  return (
    <Link
      href={localizePath('/bandera-vaticano', locale)}
      className={`group flex items-center gap-3 rounded-xl border border-papal-gold/40 bg-gradient-to-r from-papal-cream to-amber-50 px-4 py-3 transition-shadow hover:shadow-md sm:px-5 sm:py-4 ${className}`}
    >
      <span aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-white text-xl">
        <span className="flex h-full w-full overflow-hidden rounded">
          <span className="w-1/2 bg-[#FFE000]" />
          <span className="w-1/2 bg-white" />
        </span>
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-papal-navy sm:text-base">{t.body}</p>
        <p className="mt-0.5 text-xs font-semibold text-papal-gold-dark group-hover:underline">{t.cta}</p>
      </div>
    </Link>
  )
}
