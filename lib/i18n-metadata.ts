import type { Metadata } from 'next'
import { siteConfig } from '@/data/siteConfig'
import { LOCALES, HTML_LANG, type Locale } from '@/data/i18n/types'

/**
 * Genera los alternates (hreflang + canonical) para una página.
 *
 * @param path  Ruta sin prefijo de idioma (ej: "/programa", "/ciudades/madrid")
 * @param currentLocale  Locale de la página actual
 */
export function getAlternates(
  path: string = '',
  currentLocale: Locale = 'es'
): NonNullable<Metadata['alternates']> {
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : ''

  const languages: Record<string, string> = {}
  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = `${siteConfig.url}/${locale}${cleanPath}`
  }
  languages['x-default'] = `${siteConfig.url}/es${cleanPath}`

  return {
    canonical: `${siteConfig.url}/${currentLocale}${cleanPath}`,
    languages,
  }
}
