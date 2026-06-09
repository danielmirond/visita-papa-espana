import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import DayMapCard from '@/components/map/DayMapCard'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'programa-papa-barcelona-10-junio'

export const metadata: Metadata = {
  title: 'Programa del Papa en Barcelona, 10 de junio: misa en la Sagrada Familia',
  description:
    'Programa completo del Papa León XIV en Barcelona el 10 de junio de 2026: la misa en la Sagrada Familia y la bendición de la Torre de Jesucristo (19:00), el recorrido en papamóvil (18:30), Montserrat, Brians 1 y el Raval. Horarios, mapa y localizaciones.',
  alternates: {
    canonical: `${siteConfig.url}/es/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/${SLUG}`,
      ca: `${siteConfig.url}/ca/programa-papa-barcelona-10-juny`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Programa del Papa en Barcelona, 10 de junio: Sagrada Familia',
    description: 'La misa en la Sagrada Familia y la bendición de la Torre de Jesucristo, con horarios, mapa y actos.',
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Misa del Papa en la Sagrada Familia' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Acto {
  time: string
  title: string
  location: string
  text: string
}

const ACTOS: Acto[] = [
  {
    time: 'Mañana',
    title: 'Visita al Centro Penitenciario Brians 1',
    location: 'Brians 1 · Sant Esteve Sesrovires',
    text: 'Encuentro del Papa con las personas internas y trabajadores de la prisión, uno de los gestos más discretos del viaje.',
  },
  {
    time: '12:00',
    title: 'Rezo del Rosario en Montserrat',
    location: 'Abadía de Montserrat · Monistrol de Montserrat',
    text: 'Oración mariana ante la Mare de Déu de Montserrat (la Moreneta), con la comunidad benedictina y el canto de la Escolanía.',
  },
  {
    time: '18:30',
    title: 'Recorrido en papamóvil por el Eixample',
    location: 'Avenida Diagonal / calle Rosselló → calle Sardenya',
    text: 'Cerca de 1 km en papamóvil desde la confluencia de la Diagonal con Rosselló hasta las inmediaciones de la Sagrada Familia, a la altura de Sardenya.',
  },
  {
    time: '19:00',
    title: 'Misa en la Sagrada Familia y bendición de la Torre de Jesucristo',
    location: 'Basílica de la Sagrada Familia · c/ Mallorca, 401',
    text: 'Misa solemne presidida por León XIV. Como acto central, bendice e inaugura la Torre de Jesucristo (172,5 m), coincidiendo con el centenario de la muerte de Gaudí.',
  },
  {
    time: 'Tarde',
    title: 'Encuentro en la parroquia de Sant Agustí',
    location: 'Església de Sant Agustí · barrio del Raval',
    text: 'Reunión con entidades diocesanas de acción social en el Raval, que cierra la estancia del Papa en Barcelona.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿A qué hora es la misa del Papa en la Sagrada Familia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La misa del Papa León XIV en la Basílica de la Sagrada Familia es el miércoles 10 de junio de 2026 hacia las 19:00, precedida del recorrido en papamóvil sobre las 18:30.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la Torre de Jesucristo de la Sagrada Familia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es la torre central y más alta de la Sagrada Familia (172,5 m), que culmina el templo de Gaudí. El Papa la bendice e inaugura durante la misa del 10 de junio, coincidiendo con el centenario de la muerte del arquitecto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hace el Papa en Barcelona el 10 de junio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El 10 de junio el Papa visita la cárcel de Brians 1, reza el Rosario en Montserrat (12:00), recorre el Eixample en papamóvil (18:30), celebra la misa en la Sagrada Familia con la bendición de la Torre de Jesucristo (19:00) y se reúne con entidades sociales en el Raval.',
      },
    },
  ],
}

export default function ProgramaBarcelona10Page() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · Miércoles 10 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Programa del Papa en Barcelona el 10 de junio: la Sagrada Familia
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El día grande de la visita: la misa en la Sagrada Familia y la bendición de la Torre de Jesucristo, con todos
            los actos, horarios, mapa y localizaciones.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Destacado Sagrada Familia */}
          <div className="rounded-xl border border-papal-gold/40 bg-papal-cream p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Acto central · 19:00</p>
            <p className="mt-2 font-heading text-2xl font-bold text-papal-navy sm:text-3xl">
              Misa en la Sagrada Familia
            </p>
            <p className="mt-2 text-papal-navy/75">
              El Papa León XIV bendice e inaugura la <strong>Torre de Jesucristo</strong> (172,5 m), que culmina el templo
              de Gaudí, en el año del <strong>centenario de su muerte</strong>.
            </p>
          </div>

          {/* Mapa del día */}
          <DayMapCard citySlug="barcelona" date="2026-06-10" locale="es" />

          {/* Actos con localización */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">Todos los actos del 10 de junio</h2>
            <ol className="relative space-y-6 border-l-2 border-papal-gold/30 pl-6">
              {ACTOS.map((a) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-papal-gold ring-4 ring-white" />
                  <span className="text-sm font-bold text-papal-gold-dark">{a.time}</span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-papal-navy">{a.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-papal-navy/50">📍 {a.location}</p>
                  <p className="mt-1 text-papal-navy/75">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horarios y localizaciones aproximados a partir de la agenda oficial; pueden ajustarse por motivos de
            seguridad. Los actos públicos requieren inscripción previa hasta completar aforo.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/recorrido-papa-barcelona" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Recorrido del papamóvil
            </Link>
            <Link href="/es/a-que-hora-llega-el-papa-a-barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              ¿A qué hora llega?
            </Link>
            <Link href="/es/programa/9-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 9 de junio
            </Link>
            <Link href="/es/cortes-trafico/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Cortes de tráfico y metro
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
