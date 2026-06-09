import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'recorrido-papa-barcelona'

export const metadata: Metadata = {
  title: 'Recorrido del Papa en Barcelona: ruta del papamóvil, horarios y actos',
  description:
    'Recorrido y ruta del Papa León XIV en Barcelona (9-10 junio 2026): a qué hora llega a El Prat, la ruta del papamóvil por el Eixample hasta la Sagrada Familia, la vigilia de Montjuïc, Montserrat, Brians 1 y los horarios de cada acto.',
  alternates: {
    canonical: `${siteConfig.url}/es/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/${SLUG}`,
      ca: `${siteConfig.url}/ca/recorregut-papa-barcelona`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Recorrido del Papa en Barcelona: ruta del papamóvil y horarios',
    description: 'La ruta del papamóvil por el Eixample, horarios de llegada y todos los actos del Papa en Barcelona.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Recorrido del Papa León XIV en Barcelona' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Acto {
  time: string
  title: string
  text: string
}

const DIA9: Acto[] = [
  {
    time: '12:25',
    title: 'Llegada al aeropuerto de Barcelona-El Prat',
    text: 'El Papa León XIV aterriza en Barcelona procedente de Madrid y es recibido con la ceremonia oficial. Arranca su estancia de dos días en Cataluña.',
  },
  {
    time: 'Tarde',
    title: 'Oración en la Catedral de Barcelona',
    text: 'Momento de oración con el Capítulo Catedralicio en la Catedral de la Santa Cruz y Santa Eulalia, en el Barrio Gótico, que abre oficialmente su agenda en la ciudad.',
  },
  {
    time: '20:00',
    title: 'Vigilia con los jóvenes en Montjuïc',
    text: 'Gran vigilia en el Estadi Olímpic Lluís Companys de Montjuïc, con decenas de miles de jóvenes, en la línea de la vigilia de la Plaza de Lima de Madrid.',
  },
]

const DIA10: Acto[] = [
  {
    time: 'Mañana',
    title: 'Visita al Centro Penitenciario Brians 1',
    text: 'El Papa visita la cárcel de Brians 1 (Sant Esteve Sesrovires) para un encuentro con las personas internas, uno de los gestos más discretos y significativos del viaje.',
  },
  {
    time: '12:00',
    title: 'Rezo del Rosario en Montserrat',
    text: 'Oración mariana ante la Virgen de Montserrat en la abadía benedictina, con la comunidad de monjes y el canto de la Escolanía.',
  },
  {
    time: '18:30',
    title: 'Recorrido en papamóvil por el Eixample',
    text: 'El papamóvil recorre cerca de 1 km: parte de la confluencia de la avenida Diagonal con la calle Rosselló y avanza por Rosselló en dirección a la Sagrada Familia, hasta las inmediaciones del templo, a la altura de la calle Sardenya.',
  },
  {
    time: '19:00',
    title: 'Misa en la Sagrada Familia y bendición de la Torre de Jesucristo',
    text: 'Misa solemne en la Basílica de la Sagrada Familia. Como acto central, el Papa bendice e inaugura la Torre de Jesucristo (172,5 m), coincidiendo con el centenario de la muerte de Gaudí.',
  },
  {
    time: 'Tarde',
    title: 'Encuentro en la parroquia de Sant Agustí (Raval)',
    text: 'Reunión con entidades vinculadas a la acción social en el barrio del Raval, cerrando la estancia del Papa en Barcelona.',
  },
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
        text: 'El Papa León XIV llega al aeropuerto de Barcelona-El Prat el martes 9 de junio de 2026 hacia las 12:25. Los horarios pueden ajustarse por motivos de seguridad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el recorrido del papamóvil en Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El 10 de junio, hacia las 18:30, el papamóvil recorre cerca de 1 km por el Eixample: desde la avenida Diagonal con la calle Rosselló avanza por Rosselló hasta la calle Sardenya, junto a la Sagrada Familia, donde se celebra la misa a las 19:00.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántos días estará el Papa en Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa estará dos días en Barcelona, el 9 y el 10 de junio de 2026, con actos en la Catedral, Montjuïc, Montserrat, Brians 1 y la Sagrada Familia.',
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

export default function RecorridoBarcelonaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · 9-10 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Recorrido del Papa en Barcelona: ruta del papamóvil y horarios
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Toda la ruta del Papa León XIV por Barcelona: a qué hora llega, el recorrido del papamóvil por el Eixample
            hasta la Sagrada Familia y los horarios de cada acto.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-papal-navy/80 leading-relaxed">
            El Papa León XIV visita Barcelona el <strong>9 y 10 de junio de 2026</strong>, en la etapa más simbólica de
            su viaje a España. El momento culminante será la <strong>misa en la Sagrada Familia</strong> y la bendición
            de la <strong>Torre de Jesucristo</strong>, precedida de un breve recorrido en papamóvil por el Eixample.
            Estos son la ruta y los horarios, acto por acto.
          </p>

          <DayBlock titulo="Martes 9 de junio" actos={DIA9} />
          <DayBlock titulo="Miércoles 10 de junio" actos={DIA10} />

          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">🚇 Metro, TMB y calles cortadas</h2>
            <p className="text-sm text-papal-navy/75">
              El recorrido del papamóvil y la misa en la Sagrada Familia implican cortes de tráfico y afectaciones en el
              entorno del Eixample. Consulta el detalle de calles cortadas y estaciones de metro afectadas en nuestra
              página de cortes de Barcelona.
            </p>
            <Link
              href="/es/cortes-trafico/barcelona"
              className="mt-3 inline-block rounded-lg bg-papal-navy px-4 py-2 text-sm font-bold text-white hover:bg-papal-navy/90"
            >
              Cortes de tráfico y metro en Barcelona →
            </Link>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horarios y recorrido aproximados a partir de la agenda oficial y de la cobertura de la prensa. Pueden
            ajustarse por motivos de seguridad.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/a-que-hora-llega-el-papa-a-barcelona" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              ¿A qué hora llega?
            </Link>
            <Link href="/es/ciudades/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guía de Barcelona
            </Link>
            <Link href="/es/programa/9-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 9 de junio
            </Link>
            <Link href="/es/programa/10-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 10 de junio
            </Link>
            <Link href="/es/donde-ver" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Dónde ver
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
