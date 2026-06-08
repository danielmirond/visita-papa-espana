import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'El discurso de Antonio Banderas al Papa León XIV en el Movistar Arena',
  description:
    'Qué dijo Antonio Banderas al Papa León XIV: su emotivo discurso en el Movistar Arena («Jesús es el mayor protagonista de la película de la vida», «el arte debe ser una alternativa a la violencia») y el «Godspell» de la vigilia de Madrid.',
  alternates: { canonical: `${siteConfig.url}/es/antonio-banderas-papa-vigilia` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/antonio-banderas-papa-vigilia`,
    title: 'El discurso de Antonio Banderas al Papa León XIV',
    description: 'Qué dijo Banderas al Papa en el Movistar Arena y el «Godspell» de la vigilia de Madrid.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'Antonio Banderas y el Papa León XIV' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'El discurso de Antonio Banderas al Papa León XIV en el Movistar Arena',
  datePublished: '2026-06-07T18:30:00+02:00',
  dateModified: '2026-06-08T12:30:00+02:00',
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
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Antonio Banderas y el Papa</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            El discurso de Antonio Banderas al Papa León XIV
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El actor protagonizó dos de los momentos más comentados del viaje: su emotivo discurso ante el Papa en el
            Movistar Arena y el «Godspell» de la vigilia de Madrid.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            <strong>Antonio Banderas</strong> ha sido uno de los rostros más comentados de la visita del Papa León XIV a
            España. El domingo 7 de junio pronunció un <strong>emotivo discurso ante el Pontífice en el Movistar Arena</strong>,
            dentro del encuentro con el mundo de la cultura, el arte, la economía y el deporte; y la víspera, su musical
            <strong> «Godspell»</strong> había protagonizado un momento inesperado en la vigilia de Madrid.
          </p>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Qué dijo Antonio Banderas al Papa en el Movistar Arena</h2>
            <p>
              En su intervención, Banderas partió de un recuerdo de infancia ligado a la Semana Santa de Málaga: «cuando
              solo tenía cuatro años nació en mí una pregunta que solo contenía una palabra: Dios». El actor reivindicó el
              papel del arte frente a la técnica y la violencia, en una reflexión que conectó con el discurso del propio
              Papa sobre la inteligencia artificial.
            </p>
            <div className="mt-4 space-y-3">
              {[
                'Jesucristo es el mayor protagonista de la película de la vida; en todas las artes, Jesús es un icono de paz.',
                'El arte debe ser una alternativa a la violencia. A todas las violencias.',
                'En un mundo a veces simplificado, el arte nos ayuda a recuperar la profundidad y el alma que la inteligencia artificial trata de robarnos.',
              ].map((q) => (
                <blockquote key={q} className="rounded-xl border-l-4 border-papal-gold bg-papal-cream/50 p-4 font-heading italic text-papal-navy">
                  «{q}»
                </blockquote>
              ))}
            </div>
            <p className="mt-4 text-sm text-papal-navy/60">
              — Antonio Banderas, en el encuentro con el Papa León XIV (Movistar Arena, 7 de junio de 2026).
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">El «Godspell» de la vigilia de Madrid</h2>
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
