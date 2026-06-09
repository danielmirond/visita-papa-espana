import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import DayMapCard from '@/components/map/DayMapCard'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'programa-papa-barcelona-10-juny'

export const metadata: Metadata = {
  title: 'Programa del Papa a Barcelona, 10 de juny: missa a la Sagrada Família',
  description:
    "Programa complet del Papa Lleó XIV a Barcelona el 10 de juny de 2026: la missa a la Sagrada Família i la benedicció de la Torre de Jesucrist (19:00), el recorregut en papamòbil (18:30), Montserrat, Brians 1 i el Raval. Horaris, mapa i localitzacions.",
  alternates: {
    canonical: `${siteConfig.url}/ca/${SLUG}`,
    languages: {
      es: `${siteConfig.url}/es/programa-papa-barcelona-10-junio`,
      ca: `${siteConfig.url}/ca/${SLUG}`,
    },
  },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/ca/${SLUG}`,
    title: 'Programa del Papa a Barcelona, 10 de juny: Sagrada Família',
    description: "La missa a la Sagrada Família i la benedicció de la Torre de Jesucrist, amb horaris, mapa i actes.",
    images: [{ url: `${siteConfig.url}/images/cities/barcelona.webp`, width: 1200, height: 630, alt: 'Missa del Papa a la Sagrada Família' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/barcelona.webp`] },
}

interface Acte {
  time: string
  title: string
  location: string
  text: string
}

const ACTES: Acte[] = [
  {
    time: 'Matí',
    title: 'Visita al Centre Penitenciari Brians 1',
    location: 'Brians 1 · Sant Esteve Sesrovires',
    text: 'Trobada del Papa amb les persones internes i treballadors de la presó, un dels gestos més discrets del viatge.',
  },
  {
    time: '12:00',
    title: 'Res del Rosari a Montserrat',
    location: 'Abadia de Montserrat · Monistrol de Montserrat',
    text: "Pregària mariana davant la Mare de Déu de Montserrat (la Moreneta), amb la comunitat benedictina i el cant de l'Escolania.",
  },
  {
    time: '18:30',
    title: "Recorregut en papamòbil per l'Eixample",
    location: 'Avinguda Diagonal / carrer Rosselló → carrer Sardenya',
    text: "Prop d'1 km en papamòbil des de la confluència de la Diagonal amb Rosselló fins als voltants de la Sagrada Família, a l'altura de Sardenya.",
  },
  {
    time: '19:00',
    title: 'Missa a la Sagrada Família i benedicció de la Torre de Jesucrist',
    location: 'Basílica de la Sagrada Família · c/ Mallorca, 401',
    text: 'Missa solemne presidida per Lleó XIV. Com a acte central, beneeix i inaugura la Torre de Jesucrist (172,5 m), coincidint amb el centenari de la mort de Gaudí.',
  },
  {
    time: 'Tarda',
    title: 'Trobada a la parròquia de Sant Agustí',
    location: 'Església de Sant Agustí · barri del Raval',
    text: "Reunió amb entitats diocesanes d'acció social al Raval, que tanca l'estada del Papa a Barcelona.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A quina hora és la missa del Papa a la Sagrada Família?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La missa del Papa Lleó XIV a la Basílica de la Sagrada Família és el dimecres 10 de juny de 2026 cap a les 19:00, precedida del recorregut en papamòbil cap a les 18:30.',
      },
    },
    {
      '@type': 'Question',
      name: 'Què és la Torre de Jesucrist de la Sagrada Família?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "És la torre central i més alta de la Sagrada Família (172,5 m), que corona el temple de Gaudí. El Papa la beneeix i inaugura durant la missa del 10 de juny, coincidint amb el centenari de la mort de l'arquitecte.",
      },
    },
    {
      '@type': 'Question',
      name: 'Què fa el Papa a Barcelona el 10 de juny?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "El 10 de juny el Papa visita la presó de Brians 1, resa el Rosari a Montserrat (12:00), recorre l'Eixample en papamòbil (18:30), celebra la missa a la Sagrada Família amb la benedicció de la Torre de Jesucrist (19:00) i es reuneix amb entitats socials al Raval.",
      },
    },
  ],
}

export default function ProgramaBarcelona10CaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Barcelona · Dimecres 10 de juny</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Programa del Papa a Barcelona el 10 de juny: la Sagrada Família
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El dia gran de la visita: la missa a la Sagrada Família i la benedicció de la Torre de Jesucrist, amb tots
            els actes, horaris, mapa i localitzacions.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Destacat Sagrada Família */}
          <div className="rounded-xl border border-papal-gold/40 bg-papal-cream p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Acte central · 19:00</p>
            <p className="mt-2 font-heading text-2xl font-bold text-papal-navy sm:text-3xl">
              Missa a la Sagrada Família
            </p>
            <p className="mt-2 text-papal-navy/75">
              El Papa Lleó XIV beneeix i inaugura la <strong>Torre de Jesucrist</strong> (172,5 m), que corona el temple
              de Gaudí, l&apos;any del <strong>centenari de la seva mort</strong>.
            </p>
          </div>

          {/* Mapa del dia */}
          <DayMapCard citySlug="barcelona" date="2026-06-10" locale="ca" />

          {/* Actes amb localització */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">Tots els actes del 10 de juny</h2>
            <ol className="relative space-y-6 border-l-2 border-papal-gold/30 pl-6">
              {ACTES.map((a) => (
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
            Horaris i localitzacions aproximats a partir de l&apos;agenda oficial; es poden ajustar per motius de
            seguretat. Els actes públics requereixen inscripció prèvia fins a completar l&apos;aforament.
          </div>

          {/* Enllaços útils */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/ca/torre-de-jesucrist-sagrada-familia" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              La Torre de Jesucrist
            </Link>
            <Link href="/ca/recorregut-papa-barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Recorregut del papamòbil
            </Link>
            <Link href="/ca/a-quina-hora-arriba-el-papa-a-barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              A quina hora arriba?
            </Link>
            <Link href="/ca/programa/9-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 9 de juny
            </Link>
            <Link href="/ca/talls-traffic/barcelona" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Talls de trànsit i metro
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
