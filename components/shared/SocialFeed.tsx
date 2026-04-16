import Link from 'next/link'
import { getNewsByLocale } from '@/data/i18n/content/news'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'

/**
 * "Feed social" auto-hospedado.
 *
 * Sustituye los widgets rotos de Twitter e Instagram por tarjetas
 * estilo red social alimentadas por las noticias RSS que importamos
 * a diario (Alfa y Omega, Conferencia Episcopal, Vatican News).
 *
 * Ventajas frente al widget oficial:
 * - Nunca se rompe (sin dependencias de terceros)
 * - Sin cookies de terceros
 * - Sin ad-blockers
 * - Misma estética en los 9 idiomas
 * - Carga instantánea (server component, sin JS cliente)
 */

interface Props {
  locale: Locale
  limit?: number
  className?: string
}

const SOURCE_META: Record<string, { handle: string; avatar: string; color: string }> = {
  'Alfa y Omega': {
    handle: '@alfayomegasem',
    avatar: 'A',
    color: 'from-blue-600 to-blue-800',
  },
  'Conferencia Episcopal Española': {
    handle: '@eiglesiaes',
    avatar: 'C',
    color: 'from-red-600 to-red-800',
  },
  'Vatican News': {
    handle: '@VaticanNews',
    avatar: 'V',
    color: 'from-papal-gold-dark to-papal-gold',
  },
  'Oficina de Prensa de la Santa Sede': {
    handle: '@HolySeePress',
    avatar: 'S',
    color: 'from-papal-navy to-papal-navy-light',
  },
  'Archidiócesis de Madrid': {
    handle: '@archimadrid',
    avatar: 'M',
    color: 'from-red-700 to-red-900',
  },
}

function formatRelativeDate(isoDate: string, locale: Locale): string {
  const d = new Date(isoDate + 'T12:00:00')
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 1) {
    return ({ es: 'Hoy', en: 'Today', it: 'Oggi', fr: "Aujourd'hui", de: 'Heute', pt: 'Hoje', ca: 'Avui', gl: 'Hoxe', eu: 'Gaur' } as Record<Locale, string>)[locale]
  }
  if (diffDays === 1) {
    return ({ es: 'Ayer', en: 'Yesterday', it: 'Ieri', fr: 'Hier', de: 'Gestern', pt: 'Ontem', ca: 'Ahir', gl: 'Onte', eu: 'Atzo' } as Record<Locale, string>)[locale]
  }
  if (diffDays < 7) {
    const label = ({ es: 'hace', en: 'ago', it: 'fa', fr: 'il y a', de: 'vor', pt: 'há', ca: 'fa', gl: 'hai', eu: 'duela' } as Record<Locale, string>)[locale]
    const d = ({ es: 'd', en: 'd', it: 'g', fr: 'j', de: 'T', pt: 'd', ca: 'd', gl: 'd', eu: 'e' } as Record<Locale, string>)[locale]
    return `${label} ${diffDays}${d}`
  }
  return d.toLocaleDateString(locale === 'eu' ? 'eu-ES' : locale)
}

export default function SocialFeed({ locale, limit = 6, className = '' }: Props) {
  const t = getPagesDict(locale)
  const news = getNewsByLocale(locale).slice(0, limit)

  return (
    <div className={`overflow-hidden rounded-xl border border-papal-gold/20 bg-white ${className}`}>
      <div className="border-b border-papal-gold/10 bg-papal-cream px-5 py-3">
        <h3 className="font-heading text-base font-bold text-papal-navy">
          {t.home.dayByDayTitle === 'Programa día a día' ? 'Últimas publicaciones' : t.home.viewAllNews}
        </h3>
      </div>
      <div className="max-h-[560px] overflow-y-auto divide-y divide-gray-100">
        {news.map((article) => {
          const meta =
            SOURCE_META[article.source || ''] || {
              handle: '@source',
              avatar: article.source?.[0] || '?',
              color: 'from-papal-navy to-papal-navy-light',
            }

          return (
            <Link
              key={article.slug}
              href={localizePath(`/noticias/${article.slug}`, locale)}
              className="group block p-4 transition-colors hover:bg-papal-cream/30"
            >
              <div className="flex gap-3">
                {/* Avatar */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${meta.color} font-heading text-sm font-bold text-white`}
                  aria-hidden="true"
                >
                  {meta.avatar}
                </div>

                {/* Contenido */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-heading text-sm font-bold text-papal-navy">
                      {article.source || ''}
                    </span>
                    <span className="text-xs text-papal-navy/40">{meta.handle}</span>
                    <span className="text-xs text-papal-navy/30">·</span>
                    <span className="text-xs text-papal-navy/40">
                      {formatRelativeDate(article.date, locale)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-papal-navy group-hover:text-papal-gold-dark">
                    {article.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-papal-navy/60">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-5 py-2.5 text-center">
        <Link
          href={localizePath('/noticias', locale)}
          className="text-xs font-medium text-papal-gold hover:underline"
        >
          {t.home.viewAllNews} →
        </Link>
      </div>
    </div>
  )
}
