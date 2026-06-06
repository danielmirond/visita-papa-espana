import { news } from '@/data/news'
import { siteConfig } from '@/data/siteConfig'

// Google News sitemap: solo artículos de las últimas 48 h.
// Se regenera en cada petición (la ventana de 2 días cambia con el tiempo).
export const dynamic = 'force-dynamic'

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const now = Date.now()
  const TWO_DAYS = 2 * 24 * 60 * 60 * 1000

  const recent = news.filter((a) => {
    const t = new Date(`${a.date}T08:00:00Z`).getTime()
    return !isNaN(t) && now - t <= TWO_DAYS
  })

  const urls = recent
    .map((a) => {
      const loc = `${siteConfig.url}/es/noticias/${a.slug}`
      const pubDate = `${a.date}T08:00:00Z`
      return `  <url>
    <loc>${esc(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>${esc(siteConfig.name)}</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${esc(a.title)}</news:title>
    </news:news>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600, s-maxage=600',
    },
  })
}
