import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'a-que-hora-llega-el-papa-a-barcelona'

export const metadata: Metadata = {
  title: '¿A qué hora llega el Papa a Barcelona? Horarios del 9 y 10 de junio',
  description:
    '¿A qué hora llega el Papa León XIV a Barcelona? Llega al aeropuerto de El Prat el 9 de junio de 2026 hacia las 12:25. Consulta todos los horarios de llegada: Catedral, vigilia de Montjuïc, papamóvil y misa en la Sagrada Familia.',
  alternates: {
    canonical: `${siteConfig.url}/es/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/${SLUG}`,
      ca: `${siteConfig.url}/ca/a-quina-hora-arriba-el-papa-a-barcelona`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: '¿A qué hora llega el Papa a Barcelona?',
    description: 'El Papa llega a El Prat el 9 de junio hacia las 12:25. Todos los horarios de la visita.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Llegada del Papa León XIV a Barcelona' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Hora {
  time: string
  title: string
}

const DIA9: Hora[] = [
  { time: '12:25', title: 'Llegada al aeropuerto de Barcelona-El Prat (sale de Madrid a las 11:10)' },
  { time: '13:00', title: 'Rezo de la Hora Media en la Catedral de Barcelona' },
  { time: '20:00', title: 'Vigilia con los jóvenes en el Estadio Olímpico Lluís Companys (Montjuïc)' },
]

const DIA10: Hora[] = [
  { time: 'Mañana', title: 'Visita al Centro Penitenciario Brians 1' },
  { time: '12:00', title: 'Rezo del Rosario en la Abadía de Montserrat' },
  { time: '18:30', title: 'Recorrido en papamóvil por el Eixample (Diagonal/Rosselló → Sardenya)' },
  { time: '19:00', title: 'Misa en la Sagrada Familia y bendición de la Torre de Jesucristo' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿A qué hora llega el Papa a Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa León XIV llega al aeropuerto de Barcelona-El Prat el martes 9 de junio de 2026 hacia las 12:25, tras salir de Madrid a las 11:10. Los horarios pueden ajustarse por motivos de seguridad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A qué hora es la misa del Papa en la Sagrada Familia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La misa en la Basílica de la Sagrada Familia, con la bendición de la Torre de Jesucristo, es el miércoles 10 de junio hacia las 19:00, precedida del recorrido en papamóvil sobre las 18:30.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A qué hora pasa el papamóvil del Papa en Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El papamóvil recorre el Eixample el 10 de junio hacia las 18:30, desde la avenida Diagonal con la calle Rosselló hasta la calle Sardenya, junto a la Sagrada Familia.',
      },
    },
  ],
}

function HoraList({ titulo, horas }: { titulo: string; horas: Hora[] }) {
  return (
    <div>
      <h2 className="mb-3 font-heading text-xl font-bold text-papal-navy">{titulo}</h2>
      <ul className="space-y-2">
        {horas.map((h) => (
          <li key={h.title} className="flex gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
            <span className="shrink-0 font-heading text-sm font-bold text-papal-gold-dark">{h.time}</span>
            <span className="text-sm text-papal-navy/80">{h.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AQueHoraLlegaBarcelonaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · 9-10 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            ¿A qué hora llega el Papa a Barcelona?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Hora de llegada a la ciudad y horarios de todos los actos del Papa León XIV en Barcelona.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Respuesta destacada */}
          <div className="rounded-xl border border-papal-gold/40 bg-papal-cream p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Hora de llegada</p>
            <p className="mt-2 font-heading text-2xl font-bold text-papal-navy sm:text-3xl">
              Martes 9 de junio · 12:25
            </p>
            <p className="mt-2 text-papal-navy/75">
              El Papa León XIV llega al <strong>aeropuerto de Barcelona-El Prat</strong> hacia las <strong>12:25</strong>,
              tras salir de Madrid a las 11:10. Es el inicio de su estancia de dos días en Cataluña.
            </p>
          </div>

          <HoraList titulo="Horarios del martes 9 de junio" horas={DIA9} />
          <HoraList titulo="Horarios del miércoles 10 de junio" horas={DIA10} />

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horarios aproximados a partir de la agenda oficial; pueden ajustarse por motivos de seguridad. Para la ruta
            detallada del papamóvil, consulta el recorrido completo.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/recorrido-papa-barcelona" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Recorrido del papamóvil
            </Link>
            <Link href="/es/cortes-trafico/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Cortes de tráfico y metro
            </Link>
            <Link href="/es/ciudades/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guía de Barcelona
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
