/** @type {import('next').NextConfig} */

// Redirect permanente (308 = 301 SEO) del dominio legacy al canónico.
// Se activa con REDIRECT_LEGACY_DOMAIN=visita-papa-2026.es (el dominio antiguo).
// El destino es siempre el dominio canónico definido en CANONICAL_URL.
//
// NOTA: la forma MÁS RECOMENDADA es configurar esto en Vercel Dashboard
// (Settings → Domains → seleccionar .es → "Redirect to" .com con
// "Preserve paths" y status 308). Esto lo hace a nivel de edge antes
// de llegar a la función. Este redirect en next.config.js es una
// alternativa/refuerzo.
const LEGACY_HOST = process.env.REDIRECT_LEGACY_DOMAIN // ej: 'visita-papa-2026.es'
const CANONICAL_HOST = process.env.CANONICAL_HOST // ej: 'www.visita-papa-2026.com'

const legacyRedirects = []
if (LEGACY_HOST && CANONICAL_HOST) {
  legacyRedirects.push({
    source: '/:path*',
    has: [{ type: 'host', value: LEGACY_HOST }],
    destination: `https://${CANONICAL_HOST}/:path*`,
    permanent: true, // 308 (301 SEO)
  })
  legacyRedirects.push({
    source: '/:path*',
    has: [{ type: 'host', value: `www.${LEGACY_HOST}` }],
    destination: `https://${CANONICAL_HOST}/:path*`,
    permanent: true,
  })
}

const nextConfig = {
  compress: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-DNS-Prefetch-Control', value: 'on' }],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  async redirects() {
    return [...legacyRedirects]
  },

  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
