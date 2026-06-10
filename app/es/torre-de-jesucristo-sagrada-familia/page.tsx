import type { Metadata } from 'next'
import { Cormorant_Garamond, Spectral, IBM_Plex_Mono } from 'next/font/google'
import JsonLd from '@/components/seo/JsonLd'
import EscaleraDeLuz from '@/components/reportaje/EscaleraDeLuz'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'torre-de-jesucristo-sagrada-familia'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' })
const spectral = Spectral({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--font-spectral', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
  description:
    'Reportaje visual sobre la Torre de Jesucristo de la Sagrada Familia: sus 172,5 metros, la cruz iluminada de cuatro brazos, el mirador interior, las 18 torres, las tres fachadas, el centenario de Gaudí y la bendición del Papa León XIV. Datos, historia, vídeos y cronología.',
  alternates: {
    canonical: `${siteConfig.url}/es/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/${SLUG}`,
      ca: `${siteConfig.url}/ca/torre-de-jesucrist-sagrada-familia`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
    description: 'Los 172,5 m, la cruz iluminada, el mirador, las 18 torres y el centenario de Gaudí. Reportaje visual.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'La Torre de Jesucristo de la Sagrada Familia' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La Torre de Jesucristo de la Sagrada Familia: la iglesia más alta del mundo',
  datePublished: '2026-06-09T12:00:00+02:00',
  dateModified: '2026-06-10T09:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/cities/barcelona.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto mide la Torre de Jesucristo de la Sagrada Familia?',
      acceptedAnswer: { '@type': 'Answer', text: 'La Torre de Jesucristo alcanza los 172,5 metros, lo que convierte a la Sagrada Familia en la iglesia más alta del mundo, unos 11 metros por encima del anterior récord.' },
    },
    {
      '@type': 'Question',
      name: '¿Por qué la Sagrada Familia mide 172,5 metros y no más?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gaudí diseñó la torre deliberadamente por debajo de la montaña de Montjuïc, porque consideraba que ninguna obra humana debía superar a la obra de Dios, es decir, a la naturaleza.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo bendice el Papa la Torre de Jesucristo?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Papa León XIV bendice e inaugura la Torre de Jesucristo el 10 de junio de 2026, durante la misa en la Sagrada Familia, coincidiendo con el centenario de la muerte de Gaudí.' },
    },
  ],
}

export default function TorreJesucristoPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <div className={`${cormorant.variable} ${spectral.variable} ${plexMono.variable}`}>
        <EscaleraDeLuz locale="es" />
      </div>
    </>
  )
}
