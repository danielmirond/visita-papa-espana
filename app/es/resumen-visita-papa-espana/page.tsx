import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'resumen-visita-papa-espana'
const OG = `${siteConfig.url}/images/og/papa-directo-1200x630.jpg`

export const metadata: Metadata = {
  title: 'Resumen de la visita del Papa a España: qué pasó, qué dijo y los mejores momentos',
  description:
    'Resumen completo de la visita del Papa León XIV a España (6-12 de junio de 2026): qué hizo cada día en Madrid, Barcelona, Gran Canaria y Tenerife, qué dijo, los momentos clave —Sagrada Familia, jóvenes, migrantes— y la misa de clausura en Tenerife. Con vídeos.',
  alternates: { canonical: `${siteConfig.url}/es/${SLUG}` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Resumen de la visita del Papa a España: qué pasó y mejores momentos',
    description: 'Todo lo que ocurrió en el viaje de León XIV a España (6-12 jun 2026), día a día, con vídeos.',
    images: [{ url: OG, width: 1200, height: 630, alt: 'Resumen de la visita del Papa León XIV a España' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

interface Jornada {
  fecha: string
  ciudad: string
  highlights: string[]
}

const JORNADAS: Jornada[] = [
  {
    fecha: 'Sábado 6 de junio',
    ciudad: 'Madrid',
    highlights: [
      'Llegada a Madrid y ceremonia de bienvenida en el Palacio Real.',
      'Por la noche, vigilia de oración con los jóvenes, donde dejó una de las frases del viaje: «Vosotros podéis cambiar la historia, hacedlo con el amor».',
    ],
  },
  {
    fecha: 'Domingo 7 de junio · Corpus Christi',
    ciudad: 'Madrid',
    highlights: [
      'Santa Misa del Corpus Christi y procesión eucarística por el centro de Madrid.',
      'Encuentro «Tejer redes» con la sociedad civil.',
    ],
  },
  {
    fecha: 'Lunes 8 de junio',
    ciudad: 'Madrid',
    highlights: [
      'Discurso ante los parlamentarios españoles y encuentro con los obispos.',
      'Oración mariana en la Catedral de la Almudena y gran encuentro con la comunidad diocesana en el Santiago Bernabéu.',
    ],
  },
  {
    fecha: 'Martes 9 de junio · Madrid–Barcelona',
    ciudad: 'Barcelona',
    highlights: [
      'Despedida de Madrid y traslado a Barcelona.',
      'Vigilia de oración en el Estadio Olímpico de Montjuïc.',
    ],
  },
  {
    fecha: 'Miércoles 10 de junio',
    ciudad: 'Barcelona',
    highlights: [
      'Visita al Centro Penitenciario Brians 1 y rezo del Santo Rosario en Montserrat.',
      'Misa en la Sagrada Familia con la inauguración de la Torre de Jesucristo, la iglesia más alta del mundo: el Papa la bendijo y se iluminó la fachada del Nacimiento.',
    ],
  },
  {
    fecha: 'Jueves 11 de junio',
    ciudad: 'Gran Canaria',
    highlights: [
      'Llegada a la Base Aérea de Gando hacia las 10:50 y encuentro con asociaciones de acogida a migrantes, eje de la etapa canaria.',
      'Encuentro en la Catedral de Santa Ana y gran misa en el Estadio de Gran Canaria.',
    ],
  },
  {
    fecha: 'Viernes 12 de junio',
    ciudad: 'Tenerife',
    highlights: [
      'Visita al centro de acogida Las Raíces y encuentro de integración en La Laguna.',
      'Misa de clausura del viaje en el puerto de Santa Cruz de Tenerife (12:15) y regreso a Roma.',
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo fue la visita del Papa a España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa León XIV visitó España del 6 al 12 de junio de 2026, en su viaje apostólico por Madrid (6-9 de junio), Barcelona (10 de junio), Gran Canaria (11 de junio) y Tenerife (12 de junio).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ciudades visitó el Papa en España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuatro: Madrid (unidad y encuentro con jóvenes, autoridades y obispos), Barcelona (la misa en la Sagrada Familia con la inauguración de la Torre de Jesucristo), Gran Canaria y Tenerife (con el acento en la acogida a los migrantes y la misa de clausura).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles fueron los momentos más importantes de la visita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La vigilia con los jóvenes en Madrid, la misa del Corpus Christi, la inauguración de la Torre de Jesucristo en la Sagrada Familia de Barcelona, el encuentro con los migrantes en Canarias y la misa de clausura en el puerto de Santa Cruz de Tenerife.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde fue la misa de clausura del viaje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La misa de clausura se celebró en el puerto de Santa Cruz de Tenerife el 12 de junio de 2026, hacia las 12:15, antes del regreso del Papa a Roma.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Resumen de la visita del Papa León XIV a España (6-12 de junio de 2026)',
  description:
    'Qué hizo el Papa cada día en Madrid, Barcelona, Gran Canaria y Tenerife, los momentos clave y la misa de clausura.',
  image: [OG],
  inLanguage: 'es-ES',
  isAccessibleForFree: true,
  mainEntityOfPage: `${siteConfig.url}/es/${SLUG}`,
}

export default function ResumenVisitaPapaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">6-12 de junio de 2026</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Resumen de la visita del Papa a España
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Qué pasó cada día, qué dijo y los mejores momentos del viaje apostólico de León XIV por Madrid, Barcelona,
            Gran Canaria y Tenerife.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/es#videos-clave"
              className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
            >
              Ver los vídeos clave
            </Link>
            <Link
              href="/es/programa"
              className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Programa completo
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-papal-navy/80 leading-relaxed">
            Durante siete días, del 6 al 12 de junio de 2026, el Papa León XIV recorrió España en un viaje articulado en
            tres acentos: la <strong>unidad y el encuentro</strong> en Madrid, la <strong>belleza y la fe</strong> en
            Barcelona —con la inauguración de la Torre de Jesucristo en la Sagrada Familia— y la{' '}
            <strong>caridad y la acogida a los migrantes</strong> en Canarias, donde cerró el viaje. Este es el resumen,
            jornada a jornada.
          </p>

          {/* Frase destacada */}
          <blockquote className="rounded-xl border-l-4 border-papal-gold bg-papal-cream p-6">
            <p className="font-heading text-xl font-bold italic text-papal-navy sm:text-2xl">
              «Vosotros podéis cambiar la historia, hacedlo con el amor»
            </p>
            <footer className="mt-2 text-sm uppercase tracking-widest text-papal-gold-dark">
              León XIV · Vigilia con los jóvenes en Madrid
            </footer>
          </blockquote>

          {/* Día a día */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">El viaje, día a día</h2>
            <ol className="relative space-y-6 border-l-2 border-papal-gold/30 pl-6">
              {JORNADAS.map((j) => (
                <li key={j.fecha} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-papal-gold ring-4 ring-white" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-papal-navy/50">📍 {j.ciudad}</p>
                  <h3 className="mt-0.5 font-heading text-lg font-bold text-papal-navy">{j.fecha}</h3>
                  <ul className="mt-1 space-y-1">
                    {j.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-papal-navy/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-papal-gold" />
                        <span dangerouslySetInnerHTML={{ __html: h.replace(/«([^»]+)»/g, '<strong>«$1»</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horarios y actos a partir de la agenda oficial del viaje y de la cobertura de prensa. Resumen elaborado tras
            la conclusión del viaje el 12 de junio de 2026.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es#videos-clave" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Vídeos de la visita
            </Link>
            <Link href="/es/torre-de-jesucristo-sagrada-familia" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Reportaje: la Torre de Jesucristo
            </Link>
            <Link href="/es/visita-papa-canarias" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              La visita en Canarias
            </Link>
            <Link href="/es/recorrido-papa-tenerife" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Recorrido en Tenerife
            </Link>
            <Link href="/es/programa" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa completo
            </Link>
            <Link href="/es/noticias" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Todas las noticias
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
