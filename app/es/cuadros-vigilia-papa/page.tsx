import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Los cinco cuadros del escenario de la vigilia del Papa',
  description:
    'Las grandes obras del Museo del Prado que decoraron el escenario de la vigilia del Papa León XIV en la Plaza de Lima: La Transfiguración, La Última Cena de Juan de Juanes y el Bautismo de Cristo de El Greco.',
  alternates: { canonical: `${siteConfig.url}/es/cuadros-vigilia-papa` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/cuadros-vigilia-papa`,
    title: 'Los cinco cuadros del escenario de la vigilia del Papa',
    description: 'Las obras del Prado en el escenario de la vigilia: El Greco, Juan de Juanes y más.',
    images: [{ url: `${siteConfig.url}/images/og/papa-directo-1200x675.jpg`, width: 1200, height: 675, alt: 'Cuadros del escenario de la vigilia del Papa' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/og/papa-directo-1200x675.jpg`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Los cinco cuadros del escenario de la vigilia del Papa',
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
    obra: 'La Transfiguración',
    autor: 'Copia de Rafael',
    ficha: '1520-1528 · Óleo sobre tabla, 402 × 267 cm · Sala 049',
    texto:
      'Copia a escala real del último original de Rafael, ejecutada —según Vasari— por sus colaboradores más cercanos a partir de un cartón del prototipo. El original es el cuadro de altar más ambicioso de Rafael, hoy en la Pinacoteca Vaticana. Representa a Cristo manifestándose en gloria ante sus discípulos.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/la-transfiguracion/eed62f0d-1fb1-44c6-af98-96301160b7f2',
  },
  {
    obra: 'La Última Cena',
    autor: 'Juan de Juanes',
    ficha: 'Óleo sobre tabla',
    texto:
      'La célebre tabla de Juan de Juanes (Vicente Macip), una de las representaciones más conocidas de la institución de la Eucaristía. Una elección muy ligada al sentido de la noche, centrada en la adoración eucarística.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/la-ultima-cena/2800c04d-a3ad-41eb-a75b-fe359d7d1dde',
  },
  {
    obra: 'El Bautismo de Cristo',
    autor: 'El Greco',
    ficha: 'Óleo sobre lienzo',
    texto:
      'Obra de la etapa madura de El Greco (Doménikos Theotokópoulos), de intensa fuerza espiritual y color, dentro de su gran ciclo sobre la vida de Cristo.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/bautismo-de-cristo/388206cf-943c-46ac-911c-3b63a0ac0200',
  },
  {
    obra: 'Las bodas de Caná',
    autor: 'Museo del Prado',
    ficha: 'Siglo XVII · Óleo sobre lámina de cobre, 66,5 × 91,8 cm',
    texto:
      'El primer milagro de Jesús, la conversión del agua en vino en las bodas de Caná. Una delicada obra del siglo XVII pintada sobre lámina de cobre. Consulta la autoría en la ficha del Museo del Prado.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/las-bodas-de-cana/08712c2d-e3a3-47b4-b500-5df9f132f2b1',
  },
  {
    obra: 'Jesús en casa de Marta y María',
    autor: 'Museo del Prado',
    ficha: 'Museo del Prado',
    texto:
      'La escena evangélica del encuentro de Jesús con las hermanas Marta y María, símbolo de la vida activa y la contemplativa. Consulta la ficha completa y la autoría en el Museo del Prado.',
    prado: 'https://www.museodelprado.es/coleccion/obra-de-arte/jesus-en-casa-de-marta-y-maria/f9727dc0-0d32-4691-9c74-42de83eb8ce5',
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
            Los cinco cuadros del escenario de la vigilia del Papa
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
              {c.ficha && <p className="mt-1 text-xs text-papal-navy/50">{c.ficha}</p>}
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
