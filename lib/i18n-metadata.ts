import type { Metadata } from 'next'
import { siteConfig } from '@/data/siteConfig'
import { LOCALES, HTML_LANG, type Locale } from '@/data/i18n/types'
import { localizePath, RouteKey } from '@/data/i18n/routes'

/**
 * Genera los alternates (hreflang + canonical) para una página usando
 * la CLAVE CANÓNICA (nombre español) de la ruta.
 *
 * Ejemplo:
 *   getAlternates('/programa', 'en')
 *   canonical → https://.../en/schedule
 *   alternates → https://.../es/programa, https://.../en/schedule, ...
 *
 * Para rutas dinámicas, el slug final se pasa tal cual:
 *   getAlternates(`/ciudades/${params.slug}`, 'en')
 *   → https://.../en/cities/madrid
 */
export function getAlternates(
  path: string = '',
  currentLocale: Locale = 'es'
): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {}

  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = `${siteConfig.url}${localizePath(path, locale)}`
  }
  languages['x-default'] = `${siteConfig.url}${localizePath(path, 'es')}`

  return {
    canonical: `${siteConfig.url}${localizePath(path, currentLocale)}`,
    languages,
  }
}
