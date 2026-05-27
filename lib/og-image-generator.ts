/**
 * Centralized og:image URL generator for all routes.
 *
 * Handles:
 * - Static routes with predefined images
 * - Dynamic routes with parameterized og:image generation
 * - Fallback to default pope image if not found
 * - Multi-language og:image variants (future: text overlay per language)
 */

import type { Locale } from '@/data/i18n/types'
import type { RouteKey } from '@/data/i18n/routes'
import { siteConfig } from '@/data/siteConfig'

/**
 * Static og:images per route.
 * If a dynamic route needs custom og:image, add it here with {locale} placeholder.
 */
const OG_IMAGE_BY_ROUTE: Partial<Record<RouteKey, string>> = {
  // Home + informational pages
  'papa-leon-xiv': '/images/og/papa-leon-xiv.webp',
  'historia-visitas-papales': '/images/og/historia-visitas.webp',
  'alzad-la-mirada': '/images/og/papa-leon-xiv.webp',
  contacto: '/images/og/papa-leon-xiv.webp',
  creditos: '/images/og/papa-leon-xiv.webp',
  'aviso-legal': '/images/og/papa-leon-xiv.webp',
  privacidad: '/images/og/papa-leon-xiv.webp',
  'politica-cookies': '/images/og/papa-leon-xiv.webp',

  // Content pages
  discursos: '/images/og/discursos.webp',
  frases: '/images/og/frases.webp',
  'dilexi-te': '/images/og/papa-leon-xiv.webp',

  // Main experience pages
  ciudades: '/images/og/ciudades.webp',
  programa: '/images/og/programa.webp',
  'como-asistir': '/images/og/como-asistir.webp',
  'como-llegar': '/images/og/como-llegar.webp',
  'donde-ver': '/images/og/donde-ver.webp',
  mapa: '/images/og/mapa.webp',

  // Event-related
  noticias: '/images/og/noticias.webp',
  guia: '/images/og/guia.webp',
  faq: '/images/og/faq.webp',
  himno: '/images/og/himno.webp',
  oracion: '/images/og/oracion.webp',

  // Shop + preparation
  'que-llevar': '/images/og/que-llevar.webp',
  voluntariado: '/images/og/voluntariado.webp',
  'cortes-trafico': '/images/og/cortes-trafico.webp',
}

/**
 * Default og:image for routes not in OG_IMAGE_BY_ROUTE.
 * Falls back to main pope image.
 */
const DEFAULT_OG_IMAGE = '/images/og/papa-leon-xiv.webp'

/**
 * Get og:image URL for a route.
 *
 * Supports:
 * - Static routes: return image from OG_IMAGE_BY_ROUTE
 * - Dynamic routes: generate parameterized URL (e.g., /api/og?type=city&slug=madrid)
 * - Fallback: return DEFAULT_OG_IMAGE if not found
 *
 * @param route - Route key (e.g., 'programa', 'ciudades')
 * @param locale - Language locale (used for dynamic image generation)
 * @param params - Dynamic parameters (e.g., {slug: 'madrid', date: '2026-06-06'})
 * @returns Absolute URL to og:image
 */
export function getOgImageForRoute(
  route: RouteKey | string,
  locale: Locale = 'es',
  params?: Record<string, string | number>
): string {
  // Static route with predefined image
  if (route in OG_IMAGE_BY_ROUTE) {
    const imagePath = OG_IMAGE_BY_ROUTE[route as RouteKey]
    return `${siteConfig.url}${imagePath}`
  }

  // Dynamic routes: generate via API endpoint
  // Examples:
  // - /programa/[dia] → /api/og?type=programa&date=2026-06-06&locale=es
  // - /ciudades/[slug] → /api/og?type=ciudad&slug=madrid&locale=es
  // - /noticias/[slug] → /api/og?type=noticia&slug=article-title&locale=es
  // - /guia/[slug] → /api/og?type=guia&slug=guide-name&locale=es

  if (params) {
    const searchParams = new URLSearchParams()
    searchParams.set('locale', locale)

    // Determine og:image type from route pattern
    if (route.includes('programa')) {
      searchParams.set('type', 'programa')
      if (params.dia) searchParams.set('date', String(params.dia))
      if (params.city) searchParams.set('city', String(params.city))
    } else if (route.includes('ciudades')) {
      searchParams.set('type', 'ciudad')
      if (params.slug) searchParams.set('slug', String(params.slug))
    } else if (route.includes('noticias')) {
      searchParams.set('type', 'noticia')
      if (params.slug) searchParams.set('slug', String(params.slug))
    } else if (route.includes('guia')) {
      searchParams.set('type', 'guia')
      if (params.slug) searchParams.set('slug', String(params.slug))
    } else {
      // Fallback for unknown dynamic routes
      searchParams.set('type', 'default')
      Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, String(value))
      })
    }

    return `${siteConfig.url}/api/og?${searchParams.toString()}`
  }

  // Fallback: return default image
  return `${siteConfig.url}${DEFAULT_OG_IMAGE}`
}

/**
 * Get next.js metadata object for og:image.
 * Use in generateMetadata() in page.tsx files.
 *
 * @example
 * // Static route
 * export const generateMetadata = async () => {
 *   return {
 *     openGraph: {
 *       images: getMetadataOgImages('programa', 'es'),
 *     },
 *   }
 * }
 *
 * @example
 * // Dynamic route
 * export const generateMetadata = async (props: { params: { slug: string } }) => {
 *   return {
 *     openGraph: {
 *       images: getMetadataOgImages('ciudades', 'es', { slug: props.params.slug }),
 *     },
 *   }
 * }
 */
export function getMetadataOgImages(
  route: RouteKey | string,
  locale: Locale = 'es',
  params?: Record<string, string | number>
) {
  const url = getOgImageForRoute(route, locale, params)
  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: `Visita Papa León XIV a España - ${locale}`,
      type: 'image/webp',
    },
  ]
}

/**
 * Export static og:image mapping for reference.
 * Useful for auditing which routes have og:images.
 */
export { OG_IMAGE_BY_ROUTE }
