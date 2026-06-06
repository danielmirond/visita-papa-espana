import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Vigilia del Papa con los jóvenes en Madrid: crónica y frases',
  description:
    'Crónica de la vigilia de León XIV con los jóvenes en la Plaza de Lima (6 de junio de 2026): qué es, cuánto dura, los artistas (Siloé, Hakuna, Beret), las mejores frases y los momentos clave.',
  alternates: { canonical: `${siteConfig.url}/es/vigilia-papa-madrid` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/vigilia-papa-madrid`,
    title: 'Vigilia del Papa con los jóvenes en Madrid: crónica y frases',
    description: 'La vigilia juvenil de León XIV en la Plaza de Lima: qué es, cuánto dura, artistas y frases.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'Vigilia del Papa en Madrid' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Vigilia del Papa León XIV con los jóvenes en Madrid: crónica',
  datePublished: '2026-06-06T22:00:00+02:00',
  dateModified: '2026-06-06T22:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

const FRASES = [
  'Vosotros podéis cambiar la historia, hacedlo con el amor.',
  'Sed humanos, hombres y mujeres de carne y hueso. No apariencias, sino rostros fiables.',
  'Ante el vacío de la indiferencia y la violencia de la guerra y de la mentira, sed vosotros mismos chispa de una humanidad nueva.',
  'En el silencio comprendemos que las ideologías pasan mientras la verdad permanece.',
  'Si ardéis en la fe, transmitiréis su fuego vivo.',
]

const MOMENTOS = [
  { time: '20:30', text: 'León XIV recorre la Plaza de Lima en papamóvil entre el clamor de los jóvenes.' },
  { time: '21:11', text: 'El Papa anima a no tener miedo a las vocaciones: sacerdotal, religiosa o de servicio en la Iglesia.' },
  { time: '21:38', text: 'Fito Robles, voz de Siloé, canta junto al sacerdote Jaime Salmoreno.' },
  { time: '21:46', text: 'Suena el «Ubi caritas» y comienza la exposición del Santísimo.' },
  { time: '21:47', text: 'El Papa inicia la adoración eucarística ante la multitud.' },
]

export default function VigiliaPapaMadrid() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Crónica · 6 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Vigilia del Papa con los jóvenes en Madrid
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            León XIV presidió una multitudinaria vigilia de oración con los jóvenes en la Plaza de Lima, dentro de su
            primer día de visita a España.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10 text-papal-navy/80 leading-relaxed">
          <p>
            La <strong>vigilia con los jóvenes</strong> fue el gran acto de la tarde-noche del sábado 6 de junio en
            Madrid. Concebida como un «festival de la fe», combinó música, testimonios, oración y adoración eucarística,
            con el Papa León XIV como protagonista de un encuentro multitudinario en la <strong>Plaza de Lima</strong>.
          </p>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">¿Qué es la vigilia del Papa?</h2>
            <p>
              Una vigilia es un encuentro de oración prolongada, habitualmente al atardecer, que precede a una gran
              celebración. En esta ocasión, la vigilia juvenil reunió a cientos de miles de jóvenes para rezar con el
              Papa, escuchar su mensaje y participar en la adoración del Santísimo. Es uno de los formatos más
              característicos de las grandes citas eclesiales con jóvenes, herederas del espíritu de las Jornadas
              Mundiales de la Juventud.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">¿Cuánto dura la vigilia?</h2>
            <p>
              El acto se extendió durante varias horas: las puertas de la Plaza de Lima se abrieron por la tarde, el
              festival musical previo arrancó alrededor de las 18:30 y el Papa inició su recorrido en papamóvil hacia
              las 20:30. Entre las palabras del Pontífice, la música y la adoración eucarística, la vigilia se prolongó
              hasta bien entrada la noche.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Momentos clave</h2>
            <ul className="space-y-3">
              {MOMENTOS.map((m) => (
                <li key={m.time} className="flex gap-3">
                  <span className="font-bold text-papal-gold-dark">{m.time}</span>
                  <span>{m.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Las mejores frases</h2>
            <div className="space-y-3">
              {FRASES.map((f) => (
                <blockquote key={f} className="rounded-xl border-l-4 border-papal-gold bg-papal-cream/50 p-4 font-heading italic text-papal-navy">
                  «{f}»
                </blockquote>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">Los artistas</h2>
            <p>
              El cartel musical de la vigilia y el «festival de la fe» previo lo encabezaron <strong>Siloé</strong>,
              <strong> Hakuna Group Music</strong> y <strong>Beret</strong>. Puedes ver el cartel completo de todos
              los actos en nuestra página de conciertos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/en-directo-madrid-6-junio" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Seguir en directo
            </Link>
            <Link href="/es/frases-papa-madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Las mejores frases
            </Link>
            <Link href="/es/conciertos-vigilia-papa" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Conciertos de la vigilia
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
