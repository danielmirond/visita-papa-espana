import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Los cuadros del escenario de la vigilia del Papa en Madrid',
  description:
    'Las grandes obras del Museo del Prado que decoraron el escenario de la vigilia del Papa León XIV en la Plaza de Lima: La Transfiguración, La Última Cena de Juan de Juanes y el Bautismo de Cristo de El Greco.',
  alternates: { canonical: `${siteConfig.url}/es/cuadros-vigilia-papa` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/cuadros-vigilia-papa`,
    title: 'Los cuadros del escenario de la vigilia del Papa en Madrid',
    description: 'Las obras del Prado en el escenario de la vigilia: El Greco, Juan de Juanes y más.',
    images: [{ url: `${siteConfig.url}/images/og/papa-directo-1200x675.jpg`, width: 1200, height: 675, alt: 'Cuadros del escenario de la vigilia del Papa' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/og/papa-directo-1200x675.jpg`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Los cuadros del escenario de la vigilia del Papa en Madrid',
  datePublished: '2026-06-06T21:30:00+02:00',
  dateModified: '2026-06-06T21:30:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/og/papa-directo-1200x675.jpg`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

const CUADROS = [
  {
    obra: 'La Última Cena',
    autor: 'Juan de Juanes',
    texto:
      'La célebre tabla de Juan de Juanes (Vicente Macip), una de las representaciones más conocidas de la institución de la Eucaristía. Una elección muy ligada al sentido de la noche, centrada en la adoración eucarística.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/la-ultima-cena/2800c04d-a3ad-41eb-a75b-fe359d7d1dde',
  },
  {
    obra: 'El Bautismo de Cristo',
    autor: 'El Greco',
    texto:
      'Obra de la etapa madura de El Greco (Doménikos Theotokópoulos), de intensa fuerza espiritual y color, dentro de su gran ciclo sobre la vida de Cristo.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/bautismo-de-cristo/388206cf-943c-46ac-911c-3b63a0ac0200',
  },
  {
    obra: 'La Transfiguración',
    autor: 'Museo del Prado',
    texto:
      'La Transfiguración del Señor, escena en la que Cristo se manifiesta en gloria ante sus discípulos. Consulta la ficha completa y la autoría en el Museo del Prado.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/la-transfiguracion/eed62f0d-1fb1-44c6-af98-96301160b7f2',
  },
]

export default function CuadrosVigiliaPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Arte · Vigilia 6 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Los cuadros del escenario de la vigilia del Papa
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El escenario de la vigilia con los jóvenes en la Plaza de Lima se decoró con grandes obras del Museo del
            Prado dedicadas a la vida de Cristo: El Greco, Juan de Juanes y otros maestros.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            La escenografía de la vigilia juvenil quiso unir <strong>fe y patrimonio artístico</strong>: el gran
            telón del escenario reprodujo obras maestras de la pintura española conservadas en el{' '}
            <strong>Museo del Prado</strong>, con escenas centrales de la vida de Jesús que acompañaron la oración y la
            adoración eucarística.
          </p>

          {CUADROS.map((c, i) => (
            <div key={c.obra} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-heading text-sm font-bold text-papal-gold-dark">{i + 1}.</span>
                <h2 className="font-heading text-xl font-bold text-papal-navy">{c.obra}</h2>
                <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-sm font-semibold text-papal-gold-dark">{c.autor}</span>
              </div>
              <p className="mt-2">{c.texto}</p>
              <a
                href={c.prado}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-bold text-papal-gold hover:underline"
              >
                Ver en el Museo del Prado →
              </a>
            </div>
          ))}

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Enlaces a las fichas oficiales del Museo del Prado. La escenografía incluyó varias obras maestras dedicadas
            a la vida de Cristo.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/vigilia-papa-madrid" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Crónica de la vigilia
            </Link>
            <Link href="/es/frases-papa-madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Las mejores frases
            </Link>
            <Link href="/es/en-directo-madrid-6-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Seguir en directo
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
