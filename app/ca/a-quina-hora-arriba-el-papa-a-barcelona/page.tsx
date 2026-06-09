import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'a-quina-hora-arriba-el-papa-a-barcelona'

export const metadata: Metadata = {
  title: 'A quina hora arriba el Papa a Barcelona? Horaris del 9 i 10 de juny',
  description:
    "A quina hora arriba el Papa Lleó XIV a Barcelona? Arriba a l'aeroport del Prat el 9 de juny de 2026 cap a les 12:25. Consulta tots els horaris d'arribada: Catedral, vetlla de Montjuïc, papamòbil i missa a la Sagrada Família.",
  alternates: {
    canonical: `${siteConfig.url}/ca/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/a-que-hora-llega-el-papa-a-barcelona`,
      ca: `${siteConfig.url}/ca/${SLUG}`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/ca/${SLUG}`,
    title: 'A quina hora arriba el Papa a Barcelona?',
    description: "El Papa arriba al Prat el 9 de juny cap a les 12:25. Tots els horaris de la visita.",
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Arribada del Papa Lleó XIV a Barcelona' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Hora {
  time: string
  title: string
}

const DIA9: Hora[] = [
  { time: '12:25', title: "Arribada a l'aeroport de Barcelona-El Prat (surt de Madrid a les 11:10)" },
  { time: '13:00', title: 'Res de la Hora Mitjana a la Catedral de Barcelona' },
  { time: '20:00', title: "Vetlla amb els joves a l'Estadi Olímpic Lluís Companys (Montjuïc)" },
]

const DIA10: Hora[] = [
  { time: 'Matí', title: 'Visita al Centre Penitenciari Brians 1' },
  { time: '12:00', title: 'Res del Rosari a l’Abadia de Montserrat' },
  { time: '18:30', title: "Recorregut en papamòbil per l'Eixample (Diagonal/Rosselló → Sardenya)" },
  { time: '19:00', title: 'Missa a la Sagrada Família i benedicció de la Torre de Jesucrist' },
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
        text: "El Papa Lleó XIV arriba a l'aeroport de Barcelona-El Prat el dimarts 9 de juny de 2026 cap a les 12:25, després de sortir de Madrid a les 11:10. Els horaris es poden ajustar per motius de seguretat.",
      },
    },
    {
      '@type': 'Question',
      name: 'A quina hora és la missa del Papa a la Sagrada Família?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La missa a la Basílica de la Sagrada Família, amb la benedicció de la Torre de Jesucrist, és el dimecres 10 de juny cap a les 19:00, precedida del recorregut en papamòbil cap a les 18:30.",
      },
    },
    {
      '@type': 'Question',
      name: 'A quina hora passa el papamòbil del Papa a Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "El papamòbil recorre l'Eixample el 10 de juny cap a les 18:30, des de l'avinguda Diagonal amb el carrer Rosselló fins al carrer Sardenya, vora la Sagrada Família.",
      },
    },
  ],
}

function HoraList({ titol, hores }: { titol: string; hores: Hora[] }) {
  return (
    <div>
      <h2 className="mb-3 font-heading text-xl font-bold text-papal-navy">{titol}</h2>
      <ul className="space-y-2">
        {hores.map((h) => (
          <li key={h.title} className="flex gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
            <span className="shrink-0 font-heading text-sm font-bold text-papal-gold-dark">{h.time}</span>
            <span className="text-sm text-papal-navy/80">{h.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AQuinaHoraArribaBarcelonaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · 9-10 de juny</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            A quina hora arriba el Papa a Barcelona?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Hora d&apos;arribada a la ciutat i horaris de tots els actes del Papa Lleó XIV a Barcelona.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Resposta destacada */}
          <div className="rounded-xl border border-papal-gold/40 bg-papal-cream p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Hora d&apos;arribada</p>
            <p className="mt-2 font-heading text-2xl font-bold text-papal-navy sm:text-3xl">
              Dimarts 9 de juny · 12:25
            </p>
            <p className="mt-2 text-papal-navy/75">
              El Papa Lleó XIV arriba a l&apos;<strong>aeroport de Barcelona-El Prat</strong> cap a les{' '}
              <strong>12:25</strong>, després de sortir de Madrid a les 11:10. És l&apos;inici de la seva estada de dos
              dies a Catalunya.
            </p>
          </div>

          <HoraList titol="Horaris del dimarts 9 de juny" hores={DIA9} />
          <HoraList titol="Horaris del dimecres 10 de juny" hores={DIA10} />

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Horaris aproximats a partir de l&apos;agenda oficial; es poden ajustar per motius de seguretat. Per a la ruta
            detallada del papamòbil, consulta el recorregut complet.
          </div>

          {/* Enllaços útils */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/ca/recorregut-papa-barcelona" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Recorregut del papamòbil
            </Link>
            <Link href="/ca/talls-traffic/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Talls de trànsit i metro
            </Link>
            <Link href="/ca/ciutats/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guia de Barcelona
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
