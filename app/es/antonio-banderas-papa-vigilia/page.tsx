import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Antonio Banderas y el Papa: «Godspell» en la vigilia de la Plaza de Lima',
  description:
    'Qué hizo Antonio Banderas en la vigilia del Papa León XIV en Madrid: el elenco de su musical «Godspell» interpretó ante el Pontífice algunos de los temas del clásico de Broadway en la Plaza de Lima.',
  alternates: { canonical: `${siteConfig.url}/es/antonio-banderas-papa-vigilia` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/antonio-banderas-papa-vigilia`,
    title: 'Antonio Banderas y el Papa: «Godspell» en la vigilia',
    description: 'El elenco del musical de Antonio Banderas actuó ante León XIV en la Plaza de Lima.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'Antonio Banderas y el Papa en la vigilia' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Antonio Banderas y el Papa: «Godspell» en la vigilia de la Plaza de Lima',
  datePublished: '2026-06-06T23:40:00+02:00',
  dateModified: '2026-06-07T10:30:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

export default function AntonioBanderasPapaPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Vigilia · 6 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Antonio Banderas y el Papa: «Godspell» en la vigilia
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Uno de los momentos más inesperados de la vigilia de León XIV con los jóvenes llegó de la mano del musical
            de Antonio Banderas.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            Durante la <strong>vigilia del Papa León XIV con los jóvenes</strong> en la Plaza de Lima, la noche del
            sábado 6 de junio, se vivió un momento que no figuraba entre los más previsibles del guion: el elenco del
            musical <strong>«Godspell»</strong> —el clásico de Broadway en la versión que Antonio Banderas ha llevado a
            los escenarios españoles— interpretó ante el Pontífice algunos de sus temas más conocidos.
          </p>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Qué hizo Antonio Banderas en la vigilia</h2>
            <p>
              Un grupo de cantantes puso voz y baile al Evangelio con un popurrí de canciones de «Godspell», un musical
              que pone en escena pasajes evangélicos. La actuación elevó la energía del encuentro frente al estadio
              Santiago Bernabéu, en un momento festivo dentro de una velada marcada por la oración y la adoración
              eucarística.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Por qué «Godspell»</h2>
            <p>
              «Godspell» es un musical estrenado en 1971 inspirado en el Evangelio de San Mateo. Antonio Banderas, muy
              vinculado al teatro musical desde su Teatro del Soho en Málaga, ha sido una de las figuras que ha impulsado
              su puesta en escena en España, de ahí que su elenco protagonizara este guiño en una vigilia centrada en
              los jóvenes y la fe.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Información elaborada a partir de la cobertura en directo de la vigilia (ABC y Europa Press, 6 de junio de
            2026).
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/vigilia-papa-madrid" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Crónica completa de la vigilia
            </Link>
            <Link href="/es/conciertos-vigilia-papa" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Conciertos y artistas de la vigilia
            </Link>
            <Link href="/es/frases-papa-madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Las mejores frases del Papa
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
