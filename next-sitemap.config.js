/** @type {import('next-sitemap').IConfig} */
// CANONICAL_URL tiene prioridad: cuando actives el .com, las URLs del
// sitemap apuntarán al .com automáticamente.
const SITE_URL =
  process.env.CANONICAL_URL ||
  process.env.SITE_URL ||
  'https://www.visita-papa-2026.es'

const LOCALES = ['es', 'en', 'it', 'fr', 'de', 'pt']

// Traducciones de rutas canónicas
const ROUTE_TRANSLATIONS = {
  programa: { es: 'programa', en: 'schedule', it: 'programma', fr: 'programme', de: 'programm', pt: 'programa' },
  ciudades: { es: 'ciudades', en: 'cities', it: 'citta', fr: 'villes', de: 'staedte', pt: 'cidades' },
  'como-asistir': { es: 'como-asistir', en: 'how-to-attend', it: 'come-partecipare', fr: 'comment-assister', de: 'teilnahme', pt: 'como-assistir' },
  'como-llegar': { es: 'como-llegar', en: 'how-to-get-there', it: 'come-arrivare', fr: 'comment-s-y-rendre', de: 'anreise', pt: 'como-chegar' },
  'donde-ver': { es: 'donde-ver', en: 'where-to-watch', it: 'dove-vedere', fr: 'ou-regarder', de: 'wo-ansehen', pt: 'onde-ver' },
  mapa: { es: 'mapa', en: 'map', it: 'mappa', fr: 'carte', de: 'karte', pt: 'mapa' },
  noticias: { es: 'noticias', en: 'news', it: 'notizie', fr: 'actualites', de: 'nachrichten', pt: 'noticias' },
  guia: { es: 'guia', en: 'guides', it: 'guide', fr: 'guides', de: 'ratgeber', pt: 'guias' },
  faq: { es: 'faq', en: 'faq', it: 'faq', fr: 'faq', de: 'faq', pt: 'faq' },
  'aviso-legal': { es: 'aviso-legal', en: 'legal-notice', it: 'note-legali', fr: 'mentions-legales', de: 'impressum', pt: 'aviso-legal' },
  privacidad: { es: 'privacidad', en: 'privacy', it: 'privacy', fr: 'confidentialite', de: 'datenschutz', pt: 'privacidade' },
  'politica-cookies': { es: 'politica-cookies', en: 'cookies-policy', it: 'politica-cookie', fr: 'politique-cookies', de: 'cookie-richtlinie', pt: 'politica-cookies' },
}

// Build reverse map: localized slug per locale → canonical key
const REVERSE = {}
for (const locale of LOCALES) {
  REVERSE[locale] = {}
  for (const key of Object.keys(ROUTE_TRANSLATIONS)) {
    REVERSE[locale][ROUTE_TRANSLATIONS[key][locale]] = key
  }
}

function localizePath(canonicalPath, locale) {
  if (!canonicalPath || canonicalPath === '/') return `/${locale}`
  const clean = canonicalPath.startsWith('/') ? canonicalPath.slice(1) : canonicalPath
  const parts = clean.split('/')
  const first = parts[0]
  const translated = ROUTE_TRANSLATIONS[first] ? ROUTE_TRANSLATIONS[first][locale] : first
  return `/${locale}/${[translated, ...parts.slice(1)].join('/')}`
}

// Dado un path generado por Next (ej: /en/schedule), saca la clave canónica
function canonicalOfPath(path) {
  const clean = path.startsWith('/') ? path.slice(1) : path
  const [loc, slug, ...rest] = clean.split('/').filter(Boolean)
  if (!LOCALES.includes(loc)) return path
  if (!slug) return '/'
  const key = REVERSE[loc]?.[slug]
  if (!key) return '/' + [slug, ...rest].join('/')
  return '/' + [key, ...rest].join('/')
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
  },
  transform: async (config, path) => {
    const canonical = canonicalOfPath(path)
    const cleanCanonical = canonical === '/' ? '' : canonical

    let priority = 0.6
    let changefreq = 'weekly'

    // Homes
    if (LOCALES.some((l) => path === `/${l}`)) {
      priority = 1.0
      changefreq = 'daily'
    }
    // Principales
    if (['/programa', '/ciudades', '/como-asistir', '/como-llegar'].includes(canonical)) {
      priority = 0.9
      changefreq = 'daily'
    }
    if (['/faq', '/donde-ver', '/guia', '/mapa', '/noticias'].includes(canonical)) {
      priority = 0.8
    }
    if (['/aviso-legal', '/privacidad', '/politica-cookies'].includes(canonical)) {
      priority = 0.3
    }

    // Alternates: todas las versiones traducidas de la ruta canónica
    const alternateRefs = LOCALES.map((locale) => ({
      href: `${SITE_URL}${localizePath(cleanCanonical, locale)}`,
      hreflang: locale,
    })).concat([
      { href: `${SITE_URL}${localizePath(cleanCanonical, 'es')}`, hreflang: 'x-default' },
    ])

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs,
    }
  },
}
