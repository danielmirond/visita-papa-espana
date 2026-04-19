'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Franja persistente y no cerrable en la parte superior del sitio que
 * deja claro que este es un proyecto informativo independiente, SIN
 * vinculación oficial con la Santa Sede, la Conferencia Episcopal
 * Española ni ninguna institución vinculada a la visita apostólica.
 *
 * Cumplimiento legal y prevención de riesgos:
 * - Evita inducir a confusión respecto a una web oficial
 * - Refuerza el disclaimer de no-oficialidad más allá del pie de página
 * - Reduce riesgo de requerimientos de la CEE o del Vaticano por uso de
 *   dominio que pueda confundir
 */

const TEXTS: Record<Locale, { label: string; link: string }> = {
  es: { label: 'Sitio informativo independiente · no oficial', link: 'Más información' },
  en: { label: 'Independent informational website · not official', link: 'More info' },
  it: { label: 'Sito informativo indipendente · non ufficiale', link: 'Più info' },
  fr: { label: 'Site informatif indépendant · non officiel', link: 'Plus d’infos' },
  de: { label: 'Unabhängige Informationsseite · nicht offiziell', link: 'Mehr Infos' },
  pt: { label: 'Site informativo independente · não oficial', link: 'Mais info' },
  ca: { label: 'Lloc informatiu independent · no oficial', link: 'Més info' },
  gl: { label: 'Sitio informativo independente · non oficial', link: 'Máis info' },
  eu: { label: 'Informazio-webgune independentea · ez ofiziala', link: 'Info gehiago' },
}

export default function UnofficialNotice() {
  const pathname = usePathname()
  const currentLocale: Locale =
    (LOCALES.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) as Locale) ||
    DEFAULT_LOCALE
  const t = TEXTS[currentLocale] || TEXTS.es

  return (
    <div
      role="note"
      aria-label={t.label}
      className="bg-papal-navy text-white/90 text-[11px] sm:text-xs border-b border-papal-gold/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-1.5 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
        <span aria-hidden="true">⚠️</span>
        <span className="font-medium">{t.label}</span>
        <span aria-hidden="true">·</span>
        <Link
          href={localizePath('/aviso-legal', currentLocale)}
          className="underline underline-offset-2 hover:text-papal-gold"
        >
          {t.link}
        </Link>
      </div>
    </div>
  )
}
