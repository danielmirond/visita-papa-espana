/** @type {import('next').NextConfig} */

/**
 * Redirects 301 de dominio canónico.
 *
 * Estructura final:
 *   https://www.visita-papa-2026.com ← destino canónico ÚNICO
 *   https://visita-papa-2026.com     → 301 → www.visita-papa-2026.com (canonicalizar a www)
 *   https://www.visita-papa-2026.es  → 301 → www.visita-papa-2026.com (dominio legacy)
 *   https://visita-papa-2026.es      → 301 → www.visita-papa-2026.com
 *
 * statusCode: 301 explícito (no `permanent: true` que genera 308).
 * Preserve paths: el /:path* en source y destination lo garantiza.
 *
 * Ambos dominios están en el mismo proyecto Vercel, así que todos los
 * requests llegan a esta función y se redirigen antes de servir contenido.
 */
const CANONICAL_HOST = 'www.visita-papa-2026.com'

const domainRedirects = [
  // Legacy .es → .com (con www)
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'www.visita-papa-2026.es' }],
    destination: `https://${CANONICAL_HOST}/:path*`,
    statusCode: 301,
  },
  // Legacy .es → .com (sin www)
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'visita-papa-2026.es' }],
    destination: `https://${CANONICAL_HOST}/:path*`,
    statusCode: 301,
  },
  // Canonicalizar .com: sin www → con www
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'visita-papa-2026.com' }],
    destination: `https://${CANONICAL_HOST}/:path*`,
    statusCode: 301,
  },
]

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
    return [...domainRedirects]
  },

  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
