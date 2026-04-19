import { Locale, LOCALES } from './types'

/**
 * Tabla canónica de rutas: clave interna (igual a la ruta española sin prefijo)
 * → slug traducido por idioma.
 *
 * La clave canónica es la ruta en español (ej: 'programa', 'como-asistir').
 * Para español, el slug no cambia.
 */
export const ROUTE_TRANSLATIONS = {
  programa: {
    es: 'programa', en: 'schedule', it: 'programma', fr: 'programme',
    de: 'programm', pt: 'programa', ca: 'programa', gl: 'programa', eu: 'egitaraua',
  },
  ciudades: {
    es: 'ciudades', en: 'cities', it: 'citta', fr: 'villes',
    de: 'staedte', pt: 'cidades', ca: 'ciutats', gl: 'cidades', eu: 'hiriak',
  },
  'como-asistir': {
    es: 'como-asistir', en: 'how-to-attend', it: 'come-partecipare', fr: 'comment-assister',
    de: 'teilnahme', pt: 'como-assistir', ca: 'com-assistir', gl: 'como-asistir', eu: 'nola-parte-hartu',
  },
  'como-llegar': {
    es: 'como-llegar', en: 'how-to-get-there', it: 'come-arrivare', fr: 'comment-s-y-rendre',
    de: 'anreise', pt: 'como-chegar', ca: 'com-arribar', gl: 'como-chegar', eu: 'nola-heldu',
  },
  'donde-ver': {
    es: 'donde-ver', en: 'where-to-watch', it: 'dove-vedere', fr: 'ou-regarder',
    de: 'wo-ansehen', pt: 'onde-ver', ca: 'on-veure', gl: 'onde-ver', eu: 'non-ikusi',
  },
  mapa: {
    es: 'mapa', en: 'map', it: 'mappa', fr: 'carte',
    de: 'karte', pt: 'mapa', ca: 'mapa', gl: 'mapa', eu: 'mapa',
  },
  noticias: {
    es: 'noticias', en: 'news', it: 'notizie', fr: 'actualites',
    de: 'nachrichten', pt: 'noticias', ca: 'noticies', gl: 'novas', eu: 'albisteak',
  },
  guia: {
    es: 'guia', en: 'guides', it: 'guide', fr: 'guides',
    de: 'ratgeber', pt: 'guias', ca: 'guies', gl: 'guias', eu: 'gidak',
  },
  faq: {
    es: 'faq', en: 'faq', it: 'faq', fr: 'faq',
    de: 'faq', pt: 'faq', ca: 'faq', gl: 'faq', eu: 'faq',
  },
  'que-llevar': {
    es: 'que-llevar', en: 'what-to-bring', it: 'cosa-portare', fr: 'que-emporter',
    de: 'was-mitnehmen', pt: 'o-que-levar', ca: 'que-portar', gl: 'que-levar', eu: 'zer-eraman',
  },
  himno: {
    es: 'himno', en: 'anthem', it: 'inno', fr: 'hymne',
    de: 'hymne', pt: 'hino', ca: 'himne', gl: 'himno', eu: 'ereserkia',
  },
  oracion: {
    es: 'oracion', en: 'prayer', it: 'preghiera', fr: 'priere',
    de: 'gebet', pt: 'oracao', ca: 'oracio', gl: 'oracion', eu: 'otoitza',
  },
  voluntariado: {
    es: 'voluntariado', en: 'volunteering', it: 'volontariato', fr: 'benevolat',
    de: 'ehrenamt', pt: 'voluntariado', ca: 'voluntariat', gl: 'voluntariado', eu: 'boluntariotza',
  },
  'papa-leon-xiv': {
    es: 'papa-leon-xiv', en: 'pope-leo-xiv', it: 'papa-leone-xiv', fr: 'pape-leon-xiv',
    de: 'papst-leo-xiv', pt: 'papa-leao-xiv', ca: 'papa-lleo-xiv', gl: 'papa-leon-xiv', eu: 'leon-xiv-aita-santua',
  },
  'historia-visitas-papales': {
    es: 'historia-visitas-papales', en: 'papal-visits-history', it: 'storia-visite-papali', fr: 'histoire-visites-papales',
    de: 'papstbesuche-geschichte', pt: 'historia-visitas-papais', ca: 'historia-visites-papals', gl: 'historia-visitas-papais', eu: 'bisitaldi-papalen-historia',
  },
  discursos: {
    es: 'discursos', en: 'speeches', it: 'discorsi', fr: 'discours',
    de: 'ansprachen', pt: 'discursos', ca: 'discursos', gl: 'discursos', eu: 'hitzaldiak',
  },
  frases: {
    es: 'frases', en: 'quotes', it: 'citazioni', fr: 'citations',
    de: 'zitate', pt: 'frases', ca: 'frases', gl: 'frases', eu: 'aipuak',
  },
  'dilexi-te': {
    es: 'dilexi-te', en: 'dilexi-te', it: 'dilexi-te', fr: 'dilexi-te',
    de: 'dilexi-te', pt: 'dilexi-te', ca: 'dilexi-te', gl: 'dilexi-te', eu: 'dilexi-te',
  },
  'alzad-la-mirada': {
    es: 'alzad-la-mirada', en: 'lift-up-your-eyes', it: 'alzate-gli-occhi', fr: 'levez-les-yeux',
    de: 'erhebt-eure-augen', pt: 'levantai-os-olhos', ca: 'alceu-els-ulls', gl: 'ergue-os-ollos', eu: 'jaso-begiak',
  },
  contacto: {
    es: 'contacto', en: 'contact', it: 'contatto', fr: 'contact',
    de: 'kontakt', pt: 'contato', ca: 'contacte', gl: 'contacto', eu: 'kontaktua',
  },
  'aviso-legal': {
    es: 'aviso-legal', en: 'legal-notice', it: 'note-legali', fr: 'mentions-legales',
    de: 'impressum', pt: 'aviso-legal', ca: 'avis-legal', gl: 'aviso-legal', eu: 'lege-oharra',
  },
  privacidad: {
    es: 'privacidad', en: 'privacy', it: 'privacy', fr: 'confidentialite',
    de: 'datenschutz', pt: 'privacidade', ca: 'privacitat', gl: 'privacidade', eu: 'pribatutasuna',
  },
  'politica-cookies': {
    es: 'politica-cookies', en: 'cookies-policy', it: 'politica-cookie', fr: 'politique-cookies',
    de: 'cookie-richtlinie', pt: 'politica-cookies', ca: 'politica-galetes', gl: 'politica-cookies', eu: 'cookie-politika',
  },
} as const

export type RouteKey = keyof typeof ROUTE_TRANSLATIONS

// Mapa inverso: slug localizado → clave canónica
const REVERSE_MAP: Record<Locale, Record<string, RouteKey>> = {} as Record<
  Locale,
  Record<string, RouteKey>
>
for (const locale of LOCALES) {
  REVERSE_MAP[locale] = {}
  for (const key of Object.keys(ROUTE_TRANSLATIONS) as RouteKey[]) {
    const slug = ROUTE_TRANSLATIONS[key][locale]
    REVERSE_MAP[locale][slug] = key
  }
}

/**
 * Dada una ruta "canónica" (español sin prefijo) y un locale,
 * devuelve la URL final con el prefijo y los slugs traducidos.
 *
 * Ejemplos:
 *   localizePath('/programa', 'en')         → '/en/schedule'
 *   localizePath('/ciudades/madrid', 'it')  → '/it/citta/madrid'
 *   localizePath('/', 'fr')                 → '/fr'
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path || path === '/') return `/${locale}`

  const clean = path.startsWith('/') ? path.slice(1) : path
  const segments = clean.split('/').filter(Boolean)
  if (segments.length === 0) return `/${locale}`

  const [first, ...rest] = segments
  const routeKey = first as RouteKey
  const translated =
    ROUTE_TRANSLATIONS[routeKey] ? ROUTE_TRANSLATIONS[routeKey][locale] : first

  return `/${locale}/${[translated, ...rest].join('/')}`
}

/**
 * Dada una URL completa con locale y slugs localizados,
 * devuelve el locale y la clave canónica.
 * Ej: '/en/schedule/6-junio' → { locale: 'en', routeKey: 'programa', rest: ['6-junio'] }
 */
export function parseLocalizedPath(path: string): {
  locale: Locale | null
  routeKey: RouteKey | null
  rest: string[]
  canonical: string // ruta canónica (español, sin prefijo) para debug
} {
  const clean = path.startsWith('/') ? path.slice(1) : path
  const segments = clean.split('/').filter(Boolean)
  if (segments.length === 0) return { locale: null, routeKey: null, rest: [], canonical: '/' }

  const [maybeLocale, maybeSlug, ...rest] = segments
  if (!LOCALES.includes(maybeLocale as Locale)) {
    return { locale: null, routeKey: null, rest: segments, canonical: '/' + segments.join('/') }
  }

  const locale = maybeLocale as Locale
  if (!maybeSlug) return { locale, routeKey: null, rest: [], canonical: '/' }

  const routeKey = REVERSE_MAP[locale][maybeSlug] || null
  const canonical = routeKey ? '/' + [routeKey, ...rest].join('/') : '/' + [maybeSlug, ...rest].join('/')

  return { locale, routeKey, rest, canonical }
}

/**
 * Obtiene el equivalente traducido de la ruta actual en otro idioma.
 * Ej: '/en/schedule/6-junio' + locale 'it' → '/it/programma/6-junio'
 */
export function translateCurrentPath(currentPath: string, targetLocale: Locale): string {
  const { routeKey, rest } = parseLocalizedPath(currentPath)
  if (!routeKey) return `/${targetLocale}`
  const translatedSlug = ROUTE_TRANSLATIONS[routeKey][targetLocale]
  return `/${targetLocale}/${[translatedSlug, ...rest].join('/')}`
}
