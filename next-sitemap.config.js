/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.SITE_URL || 'https://www.visita-papa-2026.es'

const LOCALES = ['es', 'en', 'it', 'fr', 'de', 'pt']

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  // Excluir la raíz porque es un redirect
  exclude: ['/', '/api/*'],
  alternateRefs: LOCALES.map((locale) => ({
    href: `${SITE_URL}/${locale}`,
    hreflang: locale,
  })).concat([{ href: `${SITE_URL}/es`, hreflang: 'x-default' }]),
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Prioridades por tipo de página
    let priority = 0.6
    let changefreq = 'weekly'

    // Homes de cada idioma: prioridad máxima
    if (LOCALES.some((l) => path === `/${l}`)) {
      priority = 1.0
      changefreq = 'daily'
    }

    // Páginas principales en /es/
    if (
      ['/es/programa', '/es/ciudades', '/es/como-asistir', '/es/como-llegar'].includes(path)
    ) {
      priority = 0.9
      changefreq = 'daily'
    }

    // Páginas de contenido secundarias
    if (['/es/faq', '/es/donde-ver', '/es/guia', '/es/mapa', '/es/noticias'].includes(path)) {
      priority = 0.8
    }

    // Legales menos prioritarias
    if (['/es/aviso-legal', '/es/privacidad', '/es/politica-cookies'].includes(path)) {
      priority = 0.3
    }

    // Generar alternates solo para páginas /es/* que tendrán traducción futura
    const alternateRefs = path.startsWith('/es')
      ? LOCALES.map((locale) => ({
          href: `${SITE_URL}${path.replace('/es', `/${locale}`)}`,
          hreflang: locale,
        })).concat([{ href: `${SITE_URL}${path}`, hreflang: 'x-default' }])
      : LOCALES.map((locale) => ({
          href: `${SITE_URL}/${locale}`,
          hreflang: locale,
        })).concat([{ href: `${SITE_URL}/es`, hreflang: 'x-default' }])

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs,
    }
  },
}
