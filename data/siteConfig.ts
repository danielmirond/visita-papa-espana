/**
 * Dominio canónico PREFERIDO: el que queremos que Google indexe.
 *
 * www.visita-papa-2026.com es el dominio canónico único. Todos los
 * demás (visita-papa-2026.com, visita-papa-2026.es, www.visita-papa-2026.es)
 * redirigen aquí con 301 (configurado en next.config.js).
 *
 * Esto garantiza que los canonical, hreflang, sitemap y OG apunten
 * siempre al .com. Si en el futuro cambia el dominio canónico, basta
 * con modificar CANONICAL_URL en Vercel env vars.
 */
const CANONICAL_URL = process.env.CANONICAL_URL || 'https://www.visita-papa-2026.com'

/**
 * Dominio desde el que se sirve la aplicación actualmente.
 * Puede ser distinto del canonical cuando estamos en transición.
 */
const DEPLOY_URL = process.env.DEPLOY_URL || CANONICAL_URL

export const siteConfig = {
  name: 'Visita Papa León XIV a España 2026',
  shortName: 'Papa en España · Guía independiente',
  description: 'Guía informativa INDEPENDIENTE y no oficial de la visita del Papa León XIV a España (6-12 junio 2026). Programa, ciudades, cómo asistir, dónde verlo. Sin afiliación con la Santa Sede ni la Conferencia Episcopal Española.',

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
