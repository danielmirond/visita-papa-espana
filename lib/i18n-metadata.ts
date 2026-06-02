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

/**
 * Metadata completa para una página de detalle de noticia.
 *
 * Centraliza el patrón que estaba duplicado en las 9 rutas
 * `/noticias/[slug]` (una por idioma) y añade dos señales SEO que
 * faltaban en todas ellas:
 *   - `article:published_time` / `article:modified_time` (vía openGraph
 *     type=article) → señal lastSignificantUpdate del leak Content Warehouse.
 *   - `description` con fallback al título cuando el excerpt está vacío
 *     (evita el issue missing-description).
 */
export function newsMetadata(
  article: { title: string; excerpt?: string; date: string; imageUrl?: string },
  slug: string,
  currentLocale: Locale = 'es'
): Metadata {
  const description = article.excerpt?.trim() || article.title
  // article.date es YYYY-MM-DD; lo emitimos en formato Zulu (UTC, sufijo Z),
  // consistente con el `article:modified_time` global del layout (.toISOString()).
  const iso = `${article.date}T08:00:00Z`

  return {
    title: article.title,
    description,
    alternates: getAlternates(`/noticias/${slug}`, currentLocale),
    // Sobreescribe el `article:modified_time` global del layout (que usa la
    // fecha de build) con la fecha real de la noticia. Así queda un único
    // modified_time coherente con published_time, sin duplicados conflictivos.
    other: {
      'article:modified_time': iso,
    },
    openGraph: {
      type: 'article',
      url: `${siteConfig.url}${localizePath(`/noticias/${slug}`, currentLocale)}`,
      title: article.title,
      description,
      publishedTime: iso,
      ...(article.imageUrl ? { images: [article.imageUrl] } : {}),
    },
  }
}
