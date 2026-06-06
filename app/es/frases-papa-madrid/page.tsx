import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Las mejores frases del Papa en Madrid: vigilia, jóvenes y oración',
  description:
    'Las mejores frases del Papa León XIV en su primer día en Madrid: la vigilia con los jóvenes en la Plaza de Lima, el encuentro con los pobres en CEDIA y la oración. Citas textuales.',
  alternates: { canonical: `${siteConfig.url}/es/frases-papa-madrid` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/frases-papa-madrid`,
    title: 'Las mejores frases del Papa en Madrid: vigilia, jóvenes y oración',
    description: 'Citas textuales de León XIV en su primer día en Madrid.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'Frases del Papa en Madrid' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

interface Quote {
  text: string
  context: string
}

const VIGILIA: Quote[] = [
  { text: 'Sed humanos, hombres y mujeres de carne y hueso. No apariencias, sino rostros fiables.', context: 'Misión a los jóvenes' },
  { text: 'Ante el vacío de la indiferencia y la violencia de la guerra y de la mentira, sed vosotros mismos chispa de una humanidad nueva.', context: 'Vigilia, Plaza de Lima' },
  { text: 'Si ardéis en la fe, transmitiréis su fuego vivo.', context: 'A los jóvenes' },
  { text: 'En el silencio comprendemos que las ideologías pasan mientras la verdad permanece.', context: 'Sobre el silencio y la verdad' },
  { text: 'El matrimonio también es una vocación: no tengáis miedo del matrimonio y de formar una familia.', context: 'Vocación' },
  { text: 'No tengáis miedo de pensar en una vocación a la vida sacerdotal, religiosa o a otros servicios en la Iglesia.', context: 'Vocación' },
  { text: 'Los cristianos son en el mundo lo que el alma es en el cuerpo.', context: 'Vigilia juvenil' },
  { text: 'Yo también estoy entre vosotros como un madrileño más.', context: 'Cercanía con Madrid' },
]

const POBRES: Quote[] = [
  { text: 'No es posible olvidar a los pobres si no queremos salir fuera de la corriente viva de la Iglesia.', context: 'Centro CEDIA de Cáritas' },
  { text: 'La alegría y el dolor de cada uno son la alegría y el dolor de todos.', context: 'Encuentro con los más vulnerables' },
  { text: 'Una casa en la que nadie se queda solo.', context: 'Sobre la acogida' },
  { text: 'Gracias por abrazar la cruz para llegar caminando juntos a la esperanza y la alegría de la resurrección.', context: 'A los voluntarios' },
]

const ESTADO: Quote[] = [
  { text: 'Vengo entre ustedes para confirmar, alentar e inspirar una renovada fidelidad al Evangelio y una cooperación más profunda entre las fuerzas de esta Nación.', context: 'Palacio Real' },
  { text: '¡Es un pueblo lleno de pasión, que ama la vida y lo manifiesta!', context: 'Sobre España, en el Palacio Real' },
  { text: 'No es la cultura del enfrentamiento, sino la del encuentro, la que genera estabilidad y prosperidad.', context: 'Discurso en el Palacio Real' },
]

function quoteSchema(all: Quote[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Las mejores frases del Papa León XIV en Madrid',
    datePublished: '2026-06-06T21:45:00+02:00',
    dateModified: '2026-06-06T21:45:00+02:00',
    author: { '@id': `${siteConfig.url}#organization` },
    publisher: { '@id': `${siteConfig.url}#organization` },
    image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
    about: { '@id': `${siteConfig.url}#visit-event` },
    articleBody: all.map((q) => `«${q.text}» (${q.context})`).join(' '),
    isAccessibleForFree: true,
  }
}

function Section({ title, quotes }: { title: string; quotes: Quote[] }) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{title}</h2>
      <div className="space-y-4">
        {quotes.map((q) => (
          <figure key={q.text} className="rounded-xl border-l-4 border-papal-gold bg-papal-cream/50 p-5">
            <blockquote className="font-heading text-lg italic text-papal-navy">«{q.text}»</blockquote>
            <figcaption className="mt-2 text-sm text-papal-navy/60">— León XIV · {q.context}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function FrasesPapaMadrid() {
  return (
    <>
      <JsonLd data={quoteSchema([...VIGILIA, ...POBRES, ...ESTADO])} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Frases · 6 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Las mejores frases del Papa en Madrid: vigilia, jóvenes y oración
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Citas textuales de León XIV en su primer día en Madrid: la vigilia con los jóvenes en la Plaza de Lima,
            el encuentro con los más vulnerables y la ceremonia de Estado.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          <Section title="🕯️ Vigilia con los jóvenes (Plaza de Lima)" quotes={VIGILIA} />
          <Section title="🤲 Encuentro con los pobres y voluntarios" quotes={POBRES} />
          <Section title="🏛️ Ceremonia de Estado (Palacio Real)" quotes={ESTADO} />

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Citas recogidas de la cobertura en directo de RTVE, El Mundo, ABC y Europa Press (6 de junio de 2026).
            Transcripción aproximada de las palabras del Papa.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/en-directo-madrid-6-junio" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Seguir en directo
            </Link>
            <Link href="/es/conciertos-vigilia-papa" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Conciertos de la vigilia
            </Link>
            <Link href="/es/frases" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Más frases de León XIV
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
