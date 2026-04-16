/**
 * Dominio canónico PREFERIDO: el que queremos que Google indexe.
 * Hoy usamos .es porque es el que está activo. En cuanto el .com esté
 * configurado en Vercel y con DNS propagado, cambiar aquí (o usar la
 * variable de entorno CANONICAL_URL) y automáticamente:
 *   - Todos los <link rel="canonical"> apuntarán al .com
 *   - Todos los hreflang apuntarán al .com
 *   - El sitemap se regenera con URLs .com
 *   - Los metadatos OpenGraph apuntarán al .com
 *
 * El .es debe configurarse en Vercel como "Redirect to" al .com con
 * status 308 (equivalente a 301 permanente para SEO).
 */
const CANONICAL_URL = process.env.CANONICAL_URL || 'https://www.visita-papa-2026.es'

/**
 * Dominio desde el que se sirve la aplicación actualmente.
 * Puede ser distinto del canonical cuando estamos en transición.
 */
const DEPLOY_URL = process.env.DEPLOY_URL || CANONICAL_URL

export const siteConfig = {
  name: 'Visita Papa León XIV a España 2026',
  shortName: 'Papa en España',
  description: 'Guía completa de la visita del Papa León XIV a España del 6 al 12 de junio de 2026. Programa, ciudades, cómo asistir, dónde verlo y toda la información práctica.',

  /** URL canónica (para SEO: canonical, hreflang, sitemap, OG). */
  url: CANONICAL_URL,
  /** URL del deploy actual (para robots.txt, para metadataBase si difiere). */
  deployUrl: DEPLOY_URL,

  visitStartDate: '2026-06-06T10:00:00+02:00',
  visitEndDate: '2026-06-12T20:00:00+01:00',
  officialSite: 'https://conelpapa.es',
  registrationUrl: 'https://madrid.conelpapa.es',
  social: {
    twitter: '',
    instagram: '',
  },
}

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/programa', label: 'Programa' },
  { href: '/ciudades', label: 'Ciudades' },
  { href: '/como-llegar', label: 'Cómo llegar' },
  { href: '/como-asistir', label: 'Cómo asistir' },
  { href: '/donde-ver', label: 'Dónde verlo' },
  { href: '/mapa', label: 'Mapa' },
  { href: '/guia', label: 'Guías' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/faq', label: 'FAQ' },
]
