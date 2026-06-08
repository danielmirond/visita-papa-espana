import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'visita-papa-canarias'

export const metadata: Metadata = {
  title: 'Visita del Papa a Canarias: agenda, horarios y recorrido (Gran Canaria y Tenerife)',
  description:
    'Agenda y horarios de la visita del Papa León XIV a Canarias (11-12 junio 2026): Gran Canaria (Arguineguín, Catedral de Santa Ana y misa en el Estadio de Gran Canaria) y Tenerife (Las Raíces, La Laguna y misa de clausura en el puerto de Santa Cruz).',
  alternates: { canonical: `${siteConfig.url}/es/${SLUG}` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Visita del Papa a Canarias: agenda, horarios y recorrido',
    description: 'Toda la agenda del Papa León XIV en Gran Canaria y Tenerife (11-12 de junio), acto por acto.',
    images: [{ url: `${siteConfig.url}/images/cities/gran-canaria.webp`, width: 1200, height: 630, alt: 'Visita del Papa León XIV a Canarias' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/gran-canaria.webp`] },
}

interface Acto {
  time: string
  title: string
  text: string
}

const GRAN_CANARIA: Acto[] = [
  {
    time: '10:50',
    title: 'Llegada a la Base Aérea de Gando',
    text: 'El Papa León XIV aterriza en Gran Canaria procedente de Barcelona. Comienza la etapa canaria del viaje, centrada en la acogida a los migrantes.',
  },
  {
    time: '11:40',
    title: 'Puerto de Arguineguín: encuentro con los migrantes',
    text: 'Encuentro con las realidades de acogida a las personas migrantes en el muelle de Arguineguín, uno de los puntos de llegada de cayucos a las islas y símbolo del eje migratorio de la visita.',
  },
  {
    time: '13:30',
    title: 'Catedral de Santa Ana (Vegueta)',
    text: 'Encuentro con obispos, sacerdotes, diáconos, religiosos, seminaristas y agentes de la pastoral en la catedral de Las Palmas de Gran Canaria.',
  },
  {
    time: '14:00',
    title: 'Apertura de la Fan Zone (Estadio de Gran Canaria)',
    text: 'Se abre la zona habilitada en el anexo del Estadio de Gran Canaria antes de la gran misa. Acceso con inscripción previa hasta completar aforo.',
  },
  {
    time: 'Tarde',
    title: 'Misa multitudinaria en el Estadio de Gran Canaria',
    text: 'Eucaristía multitudinaria en el Estadio de Gran Canaria, acto central de la jornada en la isla.',
  },
]

const TENERIFE: Acto[] = [
  {
    time: '09:10',
    title: 'Llegada al aeropuerto de Tenerife Norte (Los Rodeos)',
    text: 'El Papa parte de Gran Canaria a las 8:30 y aterriza en el aeropuerto de Tenerife Norte hacia las 9:10.',
  },
  {
    time: '09:30',
    title: 'Centro de acogida Las Raíces',
    text: 'Visita al centro de acogida Las Raíces, donde se atiende a personas migrantes, continuando el hilo conductor del viaje en las islas.',
  },
  {
    time: '10:10',
    title: 'Plaza del Cristo, La Laguna',
    text: 'Encuentro en la Plaza del Cristo de San Cristóbal de La Laguna, ciudad Patrimonio de la Humanidad.',
  },
  {
    time: '12:15',
    title: 'Misa de clausura en el puerto de Santa Cruz de Tenerife',
    text: 'Misa de clausura del Viaje Apostólico a España en el puerto de Santa Cruz de Tenerife, último gran acto antes del regreso del Papa a Roma.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué días visita el Papa Canarias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa León XIV visita Canarias el jueves 11 de junio (Gran Canaria) y el viernes 12 de junio de 2026 (Tenerife), donde celebra la misa de clausura de su viaje a España.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A qué hora llega el Papa a Gran Canaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa llega a la Base Aérea de Gando (Gran Canaria) el 11 de junio hacia las 10:50. Por la mañana acude a Arguineguín (11:40) y a la Catedral de Santa Ana (13:30), y por la tarde preside la misa en el Estadio de Gran Canaria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde es la misa del Papa en Tenerife?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La misa de clausura del viaje del Papa en Tenerife se celebra en el puerto de Santa Cruz de Tenerife el 12 de junio hacia las 12:15.',
      },
    },
  ],
}

function DayBlock({ titulo, actos }: { titulo: string; actos: Acto[] }) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{titulo}</h2>
      <ol className="relative space-y-6 border-l-2 border-papal-gold/30 pl-6">
        {actos.map((a) => (
          <li key={a.title} className="relative">
            <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-papal-gold ring-4 ring-white" />
            <span className="text-sm font-bold text-papal-gold-dark">{a.time}</span>
            <h3 className="mt-1 font-heading text-lg font-bold text-papal-navy">{a.title}</h3>
            <p className="mt-1 text-papal-navy/75">{a.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function VisitaPapaCanariasPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Canarias · 11-12 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Visita del Papa a Canarias: agenda, horarios y recorrido
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Toda la agenda del Papa León XIV en Gran Canaria (11 de junio) y Tenerife (12 de junio), donde celebra la
            misa de clausura de su viaje a España.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-papal-navy/80 leading-relaxed">
            Canarias es la última etapa del Viaje Apostólico del Papa León XIV a España, con un fuerte acento en la{' '}
            <strong>acogida a las personas migrantes</strong>. El archipiélago acoge dos jornadas: el 11 de junio en{' '}
            <strong>Gran Canaria</strong> y el 12 de junio en <strong>Tenerife</strong>. Estos son todos los actos y sus
            horarios.
          </p>

          <DayBlock titulo="Jueves 11 de junio · Gran Canaria" actos={GRAN_CANARIA} />
          <DayBlock titulo="Viernes 12 de junio · Tenerife" actos={TENERIFE} />

          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">🚌 Transporte y movilidad</h2>
            <p className="text-sm text-papal-navy/75">
              Se espera una fuerte afluencia en torno al Estadio de Gran Canaria y al puerto de Santa Cruz de Tenerife.
              En Gran Canaria, Guaguas Municipales refuerza las conexiones hacia el estadio y habilita servicios
              especiales de regreso tras la misa, con cambios temporales en algunas líneas. Consulta siempre la
              información oficial el mismo día y prevé llegar con antelación.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horarios aproximados a partir de la agenda oficial de la Diócesis de Canarias y de la cobertura de prensa.
            Pueden ajustarse por motivos de seguridad. Los actos públicos requieren inscripción previa hasta completar
            aforo.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/ciudades/gran-canaria" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Guía de Gran Canaria
            </Link>
            <Link href="/es/ciudades/tenerife" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guía de Tenerife
            </Link>
            <Link href="/es/programa/11-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 11 de junio
            </Link>
            <Link href="/es/programa/12-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 12 de junio
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
