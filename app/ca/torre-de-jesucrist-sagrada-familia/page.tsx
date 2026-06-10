import type { Metadata } from 'next'
import { Cormorant_Garamond, Spectral, IBM_Plex_Mono } from 'next/font/google'
import JsonLd from '@/components/seo/JsonLd'
import EscaleraDeLuz from '@/components/reportaje/EscaleraDeLuz'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'torre-de-jesucrist-sagrada-familia'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })
const spectral = Spectral({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--font-spectral', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  title: "La Torre de Jesucrist de la Sagrada Família: l'església més alta del món",
  description:
    "Reportatge visual sobre la Torre de Jesucrist de la Sagrada Família: els 172,5 metres, la creu il·luminada de quatre braços, el mirador interior, les 18 torres, les tres façanes, el centenari de Gaudí i la benedicció del Papa Lleó XIV. Dades, història, vídeos i cronologia.",
  alternates: {
    canonical: `${siteConfig.url}/ca/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/torre-de-jesucristo-sagrada-familia`,
      ca: `${siteConfig.url}/ca/${SLUG}`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/ca/${SLUG}`,
    title: "La Torre de Jesucrist de la Sagrada Família: l'església més alta del món",
    description: 'Els 172,5 m, la creu il·luminada, el mirador, les 18 torres i el centenari de Gaudí. Reportatge visual.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'La Torre de Jesucrist de la Sagrada Família' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "La Torre de Jesucrist de la Sagrada Família: l'església més alta del món",
  datePublished: '2026-06-09T12:00:00+02:00',
  dateModified: '2026-06-10T09:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/cities/barcelona.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

export default function TorreJesucristCaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div className={`${cormorant.variable} ${spectral.variable} ${plexMono.variable}`}>
        <EscaleraDeLuz locale="ca" />
      </div>
    </>
  )
}
