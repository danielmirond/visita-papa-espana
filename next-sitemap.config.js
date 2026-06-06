/** @type {import('next-sitemap').IConfig} */
// CANONICAL_URL tiene prioridad: cuando actives el .com, las URLs del
// sitemap apuntarán al .com automáticamente.
const SITE_URL =
  process.env.CANONICAL_URL ||
  process.env.SITE_URL ||
  'https://www.visita-papa-2026.com'

const LOCALES = ['es', 'en', 'it', 'fr', 'de', 'pt', 'ca', 'gl', 'eu']

// La tienda está oculta tras un feature flag (NEXT_PUBLIC_SHOP_ENABLED).
// Cuando está desactivada, las páginas /tienda devuelven 404, así que no
// deben aparecer en el sitemap (si no, generan http-error al rastrearlas).
const SHOP_ENABLED = process.env.NEXT_PUBLIC_SHOP_ENABLED === 'true'

// Traducciones de rutas canónicas
const ROUTE_TRANSLATIONS = {
  'cuanto-cuesta-visita-papa': { es: 'cuanto-cuesta-visita-papa', en: 'pope-visit-cost', it: 'costo-visita-papa', fr: 'cout-visite-pape', de: 'kosten-papstbesuch', pt: 'custo-visita-papa', ca: 'cost-visita-papa', gl: 'canto-custa-visita-papa', eu: 'aita-santuaren-bisitaren-kostua' },
  'donde-se-aloja-el-papa': { es: 'donde-se-aloja-el-papa', en: 'where-does-the-pope-stay', it: 'dove-alloggia-il-papa', fr: 'ou-loge-le-pape', de: 'wo-wohnt-der-papst', pt: 'onde-fica-o-papa', ca: 'on-s-allotja-el-papa', gl: 'onde-se-aloxa-o-papa', eu: 'non-egiten-du-lo-aita-santuak' },
  programa: { es: 'programa', en: 'schedule', it: 'programma', fr: 'programme', de: 'programm', pt: 'programa', ca: 'programa', gl: 'programa', eu: 'egitaraua' },
  ciudades: { es: 'ciudades', en: 'cities', it: 'citta', fr: 'villes', de: 'staedte', pt: 'cidades', ca: 'ciutats', gl: 'cidades', eu: 'hiriak' },
  'como-asistir': { es: 'como-asistir', en: 'how-to-attend', it: 'come-partecipare', fr: 'comment-assister', de: 'teilnahme', pt: 'como-assistir', ca: 'com-assistir', gl: 'como-asistir', eu: 'nola-parte-hartu' },
  'como-llegar': { es: 'como-llegar', en: 'how-to-get-there', it: 'come-arrivare', fr: 'comment-s-y-rendre', de: 'anreise', pt: 'como-chegar', ca: 'com-arribar', gl: 'como-chegar', eu: 'nola-heldu' },
  'donde-ver': { es: 'donde-ver', en: 'where-to-watch', it: 'dove-vedere', fr: 'ou-regarder', de: 'wo-ansehen', pt: 'onde-ver', ca: 'on-veure', gl: 'onde-ver', eu: 'non-ikusi' },
  mapa: { es: 'mapa', en: 'map', it: 'mappa', fr: 'carte', de: 'karte', pt: 'mapa', ca: 'mapa', gl: 'mapa', eu: 'mapa' },
  noticias: { es: 'noticias', en: 'news', it: 'notizie', fr: 'actualites', de: 'nachrichten', pt: 'noticias', ca: 'noticies', gl: 'novas', eu: 'albisteak' },
  guia: { es: 'guia', en: 'guides', it: 'guide', fr: 'guides', de: 'ratgeber', pt: 'guias', ca: 'guies', gl: 'guias', eu: 'gidak' },
  faq: { es: 'faq', en: 'faq', it: 'faq', fr: 'faq', de: 'faq', pt: 'faq', ca: 'faq', gl: 'faq', eu: 'faq' },
  tienda: { es: 'tienda', en: 'shop', it: 'negozio', fr: 'boutique', de: 'shop', pt: 'loja', ca: 'botiga', gl: 'tenda', eu: 'denda' },
  'aviso-legal': { es: 'aviso-legal', en: 'legal-notice', it: 'note-legali', fr: 'mentions-legales', de: 'impressum', pt: 'aviso-legal', ca: 'avis-legal', gl: 'aviso-legal', eu: 'lege-oharra' },
  privacidad: { es: 'privacidad', en: 'privacy', it: 'privacy', fr: 'confidentialite', de: 'datenschutz', pt: 'privacidade', ca: 'privacitat', gl: 'privacidade', eu: 'pribatutasuna' },
  'politica-cookies': { es: 'politica-cookies', en: 'cookies-policy', it: 'politica-cookie', fr: 'politique-cookies', de: 'cookie-richtlinie', pt: 'politica-cookies', ca: 'politica-galetes', gl: 'politica-cookies', eu: 'cookie-politika' },
  'que-llevar': { es: 'que-llevar', en: 'what-to-bring', it: 'cosa-portare', fr: 'que-emporter', de: 'was-mitnehmen', pt: 'o-que-levar', ca: 'que-portar', gl: 'que-levar', eu: 'zer-eraman' },
  himno: { es: 'himno', en: 'anthem', it: 'inno', fr: 'hymne', de: 'hymne', pt: 'hino', ca: 'himne', gl: 'himno', eu: 'ereserkia' },
  oracion: { es: 'oracion', en: 'prayer', it: 'preghiera', fr: 'priere', de: 'gebet', pt: 'oracao', ca: 'oracio', gl: 'oracion', eu: 'otoitza' },
  voluntariado: { es: 'voluntariado', en: 'volunteering', it: 'volontariato', fr: 'benevolat', de: 'ehrenamt', pt: 'voluntariado', ca: 'voluntariat', gl: 'voluntariado', eu: 'boluntariotza' },
  'papa-leon-xiv': { es: 'papa-leon-xiv', en: 'pope-leo-xiv', it: 'papa-leone-xiv', fr: 'pape-leon-xiv', de: 'papst-leo-xiv', pt: 'papa-leao-xiv', ca: 'papa-lleo-xiv', gl: 'papa-leon-xiv', eu: 'leon-xiv-aita-santua' },
  'historia-visitas-papales': { es: 'historia-visitas-papales', en: 'papal-visits-history', it: 'storia-visite-papali', fr: 'histoire-visites-papales', de: 'papstbesuche-geschichte', pt: 'historia-visitas-papais', ca: 'historia-visites-papals', gl: 'historia-visitas-papais', eu: 'bisitaldi-papalen-historia' },
  discursos: { es: 'discursos', en: 'speeches', it: 'discorsi', fr: 'discours', de: 'ansprachen', pt: 'discursos', ca: 'discursos', gl: 'discursos', eu: 'hitzaldiak' },
  frases: { es: 'frases', en: 'quotes', it: 'citazioni', fr: 'citations', de: 'zitate', pt: 'frases', ca: 'frases', gl: 'frases', eu: 'aipuak' },
  'dilexi-te': { es: 'dilexi-te', en: 'dilexi-te', it: 'dilexi-te', fr: 'dilexi-te', de: 'dilexi-te', pt: 'dilexi-te', ca: 'dilexi-te', gl: 'dilexi-te', eu: 'dilexi-te' },
  'alzad-la-mirada': { es: 'alzad-la-mirada', en: 'lift-up-your-eyes', it: 'alzate-gli-occhi', fr: 'levez-les-yeux', de: 'erhebt-eure-augen', pt: 'levantai-os-olhos', ca: 'alceu-els-ulls', gl: 'ergue-os-ollos', eu: 'jaso-begiak' },
  contacto: { es: 'contacto', en: 'contact', it: 'contatto', fr: 'contact', de: 'kontakt', pt: 'contato', ca: 'contacte', gl: 'contacto', eu: 'kontaktua' },
  creditos: { es: 'creditos', en: 'credits', it: 'crediti', fr: 'credits', de: 'credits', pt: 'creditos', ca: 'credits', gl: 'creditos', eu: 'kredituak' },
  'papa-bernabeu': { es: 'papa-bernabeu', en: 'pope-bernabeu', it: 'papa-bernabeu', fr: 'pape-bernabeu', de: 'papst-bernabeu', pt: 'papa-bernabeu', ca: 'papa-bernabeu', gl: 'papa-bernabeu', eu: 'aita-santua-bernabeu' },
  'vigilia-plaza-lima': { es: 'vigilia-plaza-lima', en: 'plaza-de-lima-vigil', it: 'veglia-plaza-lima', fr: 'veillee-plaza-lima', de: 'vigil-plaza-lima', pt: 'vigilia-plaza-lima', ca: 'vetlla-plaza-lima', gl: 'vixilia-plaza-lima', eu: 'lima-plaza-bijilia' },
  'intenciones-del-papa-2026': { es: 'intenciones-del-papa-2026', en: 'pope-prayer-intentions-2026', it: 'intenzioni-papa-2026', fr: 'intentions-pape-2026', de: 'gebetsanliegen-papst-2026', pt: 'intencoes-papa-2026', ca: 'intencions-papa-2026', gl: 'intencions-papa-2026', eu: 'aita-santuaren-asmoak-2026' },
  'como-inscribirse': { es: 'como-inscribirse', en: 'how-to-register', it: 'come-iscriversi', fr: 'comment-s-inscrire', de: 'anmeldung', pt: 'como-inscrever-se', ca: 'com-inscriures', gl: 'como-inscribirse', eu: 'nola-izena-eman' },
  'bandera-vaticano': { es: 'bandera-vaticano', en: 'vatican-flag', it: 'bandiera-vaticano', fr: 'drapeau-vatican', de: 'vatikanflagge', pt: 'bandeira-vaticano', ca: 'bandera-vatica', gl: 'bandeira-vaticano', eu: 'vatikanoaren-bandera' },
  'como-llegar-en-tren': { es: 'como-llegar-en-tren', en: 'how-to-get-by-train', it: 'come-arrivare-in-treno', fr: 'comment-venir-en-train', de: 'mit-dem-zug-anreisen', pt: 'como-chegar-de-comboio', ca: 'com-arribar-en-tren', gl: 'como-chegar-en-tren', eu: 'trenez-nola-iritsi' },
  'experiencias-peregrinos': { es: 'experiencias-peregrinos', en: 'pilgrim-experiences', it: 'esperienze-pellegrini', fr: 'experiences-pelerins', de: 'pilgererfahrungen', pt: 'experiencias-peregrinos', ca: 'experiencies-pelegrins', gl: 'experiencias-peregrinos', eu: 'erromes-esperientziak' },
  'papa-congreso-diputados': { es: 'papa-congreso-diputados', en: 'pope-spanish-congress', it: 'papa-congresso-deputati', fr: 'pape-cortes-espagne', de: 'papst-spanisches-parlament', pt: 'papa-congresso-deputados', ca: 'papa-congres-diputats', gl: 'papa-congreso-deputados', eu: 'aita-santua-diputatuen-kongresua' },
  'magnifica-humanitas': { es: 'magnifica-humanitas', en: 'magnifica-humanitas', it: 'magnifica-humanitas', fr: 'magnifica-humanitas', de: 'magnifica-humanitas', pt: 'magnifica-humanitas', ca: 'magnifica-humanitas', gl: 'magnifica-humanitas', eu: 'magnifica-humanitas' },
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

// Rutas localizadas de la tienda (/es/tienda, /en/shop, /it/negozio…).
// Si el flag está off, además de excluirlas del sitemap, las bloqueamos
// en robots.txt para que los buscadores ni las rastreen.
const SHOP_PATHS = LOCALES.map((l) => `/${l}/${ROUTE_TRANSLATIONS.tienda[l]}`)

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/', '/api/*', ...(SHOP_ENABLED ? [] : SHOP_PATHS)],
  robotsTxtOptions: {
    additionalSitemaps: [`${SITE_URL}/news-sitemap.xml`],
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', ...(SHOP_ENABLED ? [] : SHOP_PATHS)] },
    ],
  },
  transform: async (config, path) => {
    const canonical = canonicalOfPath(path)

    // Tienda oculta por feature flag → fuera del sitemap (devuelve 404).
    if (!SHOP_ENABLED && canonical === '/tienda') return null

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
      hrefIsAbsolute: true,
    })).concat([
      {
        href: `${SITE_URL}${localizePath(cleanCanonical, 'es')}`,
        hreflang: 'x-default',
        hrefIsAbsolute: true,
      },
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
