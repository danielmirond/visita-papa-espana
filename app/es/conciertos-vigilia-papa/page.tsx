import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Conciertos de la vigilia del Papa: Siloé, Hakuna, Beret y más',
  description:
    'Artistas y conciertos de la vigilia con jóvenes en la Plaza de Lima y del encuentro en el Bernabéu: Siloé, Hakuna, Beret, Niña Pastori, Rozalén, Bustamante, Antonio Banderas, Daniel Diges, Diana Navarro, Íñigo Quintero y más.',
  alternates: { canonical: `${siteConfig.url}/es/conciertos-vigilia-papa` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/conciertos-vigilia-papa`,
    title: 'Conciertos de la vigilia del Papa: Siloé, Hakuna, Beret y más',
    description:
      'Artistas que actúan ante el Papa León XIV en la vigilia juvenil de la Plaza de Lima y en el Bernabéu.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'Conciertos vigilia Papa' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

const VIGILIA = [
  { name: 'Siloé', tag: 'pop' },
  { name: 'Hakuna Group Music', tag: 'católico' },
  { name: 'Beret', tag: 'pop urbano' },
]

const OTROS_MADRID = [
  { name: 'Niña Pastori', tag: 'flamenco' },
  { name: 'Antonio Banderas', tag: 'actor' },
  { name: 'Rozalén', tag: 'cantautora' },
  { name: 'David Bustamante', tag: 'pop' },
  { name: 'Pablo López', tag: 'pop' },
]

const BERNABEU = [
  { name: 'Daniel Diges', tag: 'pop' },
  { name: 'Diana Navarro', tag: 'copla / pop' },
  { name: 'Íñigo Quintero', tag: 'pop' },
  { name: 'El Pulpo (Hakuna)', tag: 'católico' },
  { name: 'La Voz del Desierto', tag: 'católico' },
]

function Card({ list }: { list: { name: string; tag: string }[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {list.map((a) => (
        <li key={a.name} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="font-heading text-lg font-bold text-papal-navy">{a.name}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-papal-gold-dark">{a.tag}</p>
        </li>
      ))}
    </ul>
  )
}

export default function ConciertosVigiliaPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Música en la visita</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Conciertos de la vigilia del Papa: Siloé, Hakuna, Beret y más
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Artistas que actúan ante León XIV durante su visita a España: la vigilia juvenil en la Plaza de Lima
            (6 de junio) y el encuentro diocesano en el Bernabéu (8 de junio).
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10 text-papal-navy/80 leading-relaxed">
          <p>
            La música forma parte central de los grandes actos de la visita. La <strong>vigilia de oración con los
            jóvenes</strong> en la Plaza de Lima del sábado 6 de junio se vive como un auténtico «festival de la fe»,
            con conciertos previos a la llegada del Papa. Días después, el <strong>encuentro diocesano del Bernabéu</strong>
            (lunes 8) también tiene un fuerte componente musical.
          </p>

          {/* Vigilia Plaza de Lima */}
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">
              🎤 Vigilia juvenil en la Plaza de Lima · sábado 6 de junio
            </h2>
            <p className="mb-4 text-sm text-papal-navy/70">
              Festival de la fe previo a la vigilia (a partir de las 18:30), antes del recorrido del Papa en papamóvil
              y la adoración eucarística (20:30):
            </p>
            <Card list={VIGILIA} />
          </div>

          {/* Otros actos en Madrid */}
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">
              🎶 Otros actos musicales en Madrid
            </h2>
            <p className="mb-4 text-sm text-papal-navy/70">
              Artistas que participan en los distintos actos del viaje en Madrid (vigilia, misa de Cibeles, encuentros):
            </p>
            <Card list={OTROS_MADRID} />
          </div>

          {/* Bernabéu */}
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-papal-navy">
              🏟️ Encuentro diocesano en el Bernabéu · lunes 8 de junio
            </h2>
            <p className="mb-4 text-sm text-papal-navy/70">
              Música en directo durante el gran acto de León XIV en el estadio Santiago Bernabéu:
            </p>
            <Card list={BERNABEU} />
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Fuentes: información publicada por Infobae, El País, Leonoticias y la organización «Con el Papa» (junio de 2026).
            Cartel sujeto a posibles ajustes de última hora.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/vigilia-plaza-lima" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Vigilia Plaza de Lima
            </Link>
            <Link href="/es/papa-bernabeu" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Papa en el Bernabéu
            </Link>
            <Link href="/es/himno" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Himno oficial «Alzad la mirada»
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
