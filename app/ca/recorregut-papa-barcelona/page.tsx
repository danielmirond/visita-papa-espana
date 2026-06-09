import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'recorregut-papa-barcelona'

export const metadata: Metadata = {
  title: 'Recorregut del Papa a Barcelona: ruta del papamòbil, horaris i actes',
  description:
    "Agenda i horaris de la visita del Papa Lleó XIV a Barcelona (9-10 de juny de 2026): a quina hora arriba a El Prat, la ruta del papamòbil per l'Eixample fins a la Sagrada Família, la vetlla de Montjuïc, Montserrat, Brians 1 i els horaris de cada acte.",
  alternates: {
    canonical: `${siteConfig.url}/ca/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/recorrido-papa-barcelona`,
      ca: `${siteConfig.url}/ca/${SLUG}`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/ca/${SLUG}`,
    title: 'Recorregut del Papa a Barcelona: ruta del papamòbil i horaris',
    description: "La ruta del papamòbil per l'Eixample, horaris d'arribada i tots els actes del Papa a Barcelona.",
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Recorregut del Papa Lleó XIV a Barcelona' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Acte {
  time: string
  title: string
  text: string
}

const DIA9: Acte[] = [
  {
    time: '12:25',
    title: "Arribada a l'aeroport de Barcelona-El Prat",
    text: "El Papa Lleó XIV aterra a Barcelona procedent de Madrid i és rebut amb la cerimònia oficial. Comença la seva estada de dos dies a Catalunya.",
  },
  {
    time: 'Tarda',
    title: 'Pregària a la Catedral de Barcelona',
    text: "Moment de pregària amb el Capítol Catedralici a la Catedral de la Santa Creu i Santa Eulàlia, al Barri Gòtic, que obre oficialment la seva agenda a la ciutat.",
  },
  {
    time: '20:00',
    title: 'Vetlla amb els joves a Montjuïc',
    text: "Gran vetlla a l'Estadi Olímpic Lluís Companys de Montjuïc, amb desenes de milers de joves, en la línia de la vetlla de la plaça de Lima de Madrid.",
  },
]

const DIA10: Acte[] = [
  {
    time: 'Matí',
    title: 'Visita al Centre Penitenciari Brians 1',
    text: "El Papa visita la presó de Brians 1 (Sant Esteve Sesrovires) per a una trobada amb les persones internes, un dels gestos més discrets i significatius del viatge.",
  },
  {
    time: '12:00',
    title: 'Res del Rosari a Montserrat',
    text: "Pregària mariana davant la Mare de Déu de Montserrat a l'abadia benedictina, amb la comunitat de monjos i el cant de l'Escolania.",
  },
  {
    time: '18:30',
    title: "Recorregut en papamòbil per l'Eixample",
    text: "El papamòbil recorre prop d'1 km: surt de la confluència de l'avinguda Diagonal amb el carrer Rosselló i avança per Rosselló en direcció a la Sagrada Família, fins als voltants del temple, a l'altura del carrer Sardenya.",
  },
  {
    time: '19:00',
    title: 'Missa a la Sagrada Família i benedicció de la Torre de Jesucrist',
    text: "Missa solemne a la Basílica de la Sagrada Família. Com a acte central, el Papa beneeix i inaugura la Torre de Jesucrist (172,5 m), coincidint amb el centenari de la mort de Gaudí.",
  },
  {
    time: 'Tarda',
    title: 'Trobada a la parròquia de Sant Agustí (Raval)',
    text: "Reunió amb entitats vinculades a l'acció social al barri del Raval, que tanca l'estada del Papa a Barcelona.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A quina hora arriba el Papa a Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "El Papa Lleó XIV arriba a l'aeroport de Barcelona-El Prat el dimarts 9 de juny de 2026 cap a les 12:25. Els horaris es poden ajustar per motius de seguretat.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quin és el recorregut del papamòbil a Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "El 10 de juny, cap a les 18:30, el papamòbil recorre prop d'1 km per l'Eixample: des de l'avinguda Diagonal amb el carrer Rosselló avança per Rosselló fins al carrer Sardenya, vora la Sagrada Família, on se celebra la missa a les 19:00.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quants dies estarà el Papa a Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa estarà dos dies a Barcelona, el 9 i el 10 de juny de 2026, amb actes a la Catedral, Montjuïc, Montserrat, Brians 1 i la Sagrada Família.',
      },
    },
  ],
}

function DayBlock({ titol, actes }: { titol: string; actes: Acte[] }) {
  return (
    <div>
      <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{titol}</h2>
      <ol className="relative space-y-6 border-l-2 border-papal-gold/30 pl-6">
        {actes.map((a) => (
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

export default function RecorregutBarcelonaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · 9-10 de juny</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Recorregut del Papa a Barcelona: ruta del papamòbil i horaris
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Tota la ruta del Papa Lleó XIV per Barcelona: a quina hora arriba, el recorregut del papamòbil per
            l&apos;Eixample fins a la Sagrada Família i els horaris de cada acte.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-papal-navy/80 leading-relaxed">
            El Papa Lleó XIV visita Barcelona el <strong>9 i 10 de juny de 2026</strong>, en l&apos;etapa més simbòlica
            del seu viatge a Espanya. El moment culminant serà la <strong>missa a la Sagrada Família</strong> i la
            benedicció de la <strong>Torre de Jesucrist</strong>, precedida d&apos;un breu recorregut en papamòbil per
            l&apos;Eixample. Aquests són la ruta i els horaris, acte per acte.
          </p>

          <DayBlock titol="Dimarts 9 de juny" actes={DIA9} />
          <DayBlock titol="Dimecres 10 de juny" actes={DIA10} />

          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">🚇 Metro, TMB i carrers tallats</h2>
            <p className="text-sm text-papal-navy/75">
              El recorregut del papamòbil i la missa a la Sagrada Família impliquen talls de trànsit i afectacions a
              l&apos;entorn de l&apos;Eixample. Consulta el detall de carrers tallats i estacions de metro afectades a la
              nostra pàgina de talls de Barcelona.
            </p>
            <Link
              href="/ca/talls-traffic/barcelona"
              className="mt-3 inline-block rounded-lg bg-papal-navy px-4 py-2 text-sm font-bold text-white hover:bg-papal-navy/90"
            >
              Talls de trànsit i metro a Barcelona →
            </Link>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horaris i recorregut aproximats a partir de l&apos;agenda oficial i de la cobertura de la premsa. Es poden
            ajustar per motius de seguretat.
          </div>

          {/* Enllaços útils */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/ca/a-quina-hora-arriba-el-papa-a-barcelona" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              A quina hora arriba?
            </Link>
            <Link href="/ca/ciutats/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guia de Barcelona
            </Link>
            <Link href="/ca/programa/9-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 9 de juny
            </Link>
            <Link href="/ca/programa/10-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 10 de juny
            </Link>
            <Link href="/ca/on-veure" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              On veure-ho
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
