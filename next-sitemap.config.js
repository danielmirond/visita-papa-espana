/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.visita-papa-2026.es',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  alternateRefs: [
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es'), hreflang: 'es' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es') + '/en', hreflang: 'en' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es') + '/it', hreflang: 'it' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es') + '/fr', hreflang: 'fr' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es') + '/de', hreflang: 'de' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es') + '/pt', hreflang: 'pt' },
    { href: (process.env.SITE_URL || 'https://www.visita-papa-2026.es'), hreflang: 'x-default' },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Prioridades personalizadas por ruta
    const priorities = {
      '/': 1.0,
      '/programa': 0.9,
      '/ciudades': 0.9,
      '/como-asistir': 0.9,
      '/faq': 0.8,
      '/donde-ver': 0.8,
      '/guia': 0.8,
      '/mapa': 0.7,
      '/noticias': 0.7,
    }

    const changefreqs = {
      '/': 'daily',
      '/programa': 'daily',
      '/noticias': 'daily',
      '/faq': 'weekly',
    }

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
