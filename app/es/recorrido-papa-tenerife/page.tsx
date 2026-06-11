import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'recorrido-papa-tenerife'

export const metadata: Metadata = {
  title: 'Recorrido del Papa en Tenerife: itinerario, horarios y misa de clausura (12 junio)',
  description:
    'Recorrido e itinerario del Papa León XIV en Tenerife (12 de junio de 2026): a qué hora llega a Los Rodeos, el centro de acogida Las Raíces, el encuentro en La Laguna y la misa de clausura del viaje a España en el puerto de Santa Cruz de Tenerife. Horarios acto por acto.',
  alternates: { canonical: `${siteConfig.url}/es/${SLUG}` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Recorrido del Papa en Tenerife: itinerario y horarios (12 junio)',
    description: 'Llegada a Los Rodeos, Las Raíces, La Laguna y la misa de clausura en Santa Cruz de Tenerife.',
    images: [{ url: `${siteConfig.url}/images/cities/tenerife.webp`, width: 1200, height: 630, alt: 'Recorrido del Papa León XIV en Tenerife' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/cities/tenerife.webp`] },
}

interface Acto {
  time: string
  title: string
  location: string
  text: string
}

const ACTOS: Acto[] = [
  {
    time: '08:30',
    title: 'Salida de Gran Canaria',
    location: 'Base Aérea de Gando',
    text: 'El Papa León XIV parte de Gran Canaria con destino a Tenerife, en la jornada de clausura de su Viaje Apostólico a España.',
  },
  {
    time: '09:10',
    title: 'Llegada al aeropuerto de Tenerife Norte (Los Rodeos)',
    location: 'Aeropuerto de Tenerife Norte-Ciudad de La Laguna',
    text: 'Recibimiento oficial a su llegada a la isla.',
  },
  {
    time: '09:30',
    title: 'Centro de acogida Las Raíces',
    location: 'Las Raíces · La Laguna',
    text: 'Visita al centro de acogida de personas migrantes, manteniendo el hilo conductor de la etapa canaria: la acogida.',
  },
  {
    time: '10:10',
    title: 'Encuentro en la Plaza del Cristo',
    location: 'Plaza del Cristo · San Cristóbal de La Laguna',
    text: 'Encuentro en La Laguna, ciudad Patrimonio de la Humanidad.',
  },
  {
    time: '12:15',
    title: 'Misa de clausura en el puerto de Santa Cruz',
    location: 'Puerto de Santa Cruz de Tenerife',
    text: 'Misa de clausura del Viaje Apostólico a España, el último gran acto antes del regreso del Papa a Roma.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿A qué hora llega el Papa a Tenerife?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa León XIV llega al aeropuerto de Tenerife Norte (Los Rodeos) el viernes 12 de junio de 2026 hacia las 9:10, tras salir de Gran Canaria a las 8:30. Los horarios pueden ajustarse por seguridad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde y a qué hora es la misa del Papa en Tenerife?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La misa de clausura del viaje del Papa se celebra en el puerto de Santa Cruz de Tenerife el 12 de junio hacia las 12:15. Es el último gran acto antes del regreso a Roma.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hace el Papa en Tenerife el 12 de junio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Papa llega a Los Rodeos (9:10), visita el centro de acogida Las Raíces (9:30), se reúne en la Plaza del Cristo de La Laguna (10:10) y celebra la misa de clausura en el puerto de Santa Cruz de Tenerife (12:15).',
      },
    },
  ],
}

export default function RecorridoTenerifePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Tenerife · Viernes 12 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Recorrido del Papa en Tenerife: itinerario y horarios
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            La jornada de clausura del viaje del Papa León XIV a España: de Los Rodeos a la misa en el puerto de Santa
            Cruz, acto por acto.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Destacado: llegada */}
          <div className="rounded-xl border border-papal-gold/40 bg-papal-cream p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold-dark">Hora de llegada</p>
            <p className="mt-2 font-heading text-2xl font-bold text-papal-navy sm:text-3xl">Viernes 12 de junio · 09:10</p>
            <p className="mt-2 text-papal-navy/75">
              El Papa León XIV llega al <strong>aeropuerto de Tenerife Norte (Los Rodeos)</strong> hacia las{' '}
              <strong>9:10</strong>, tras salir de Gran Canaria a las 8:30. La <strong>misa de clausura</strong> es a las
              12:15 en el puerto de Santa Cruz.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">Todos los actos del 12 de junio</h2>
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
            Horarios y localizaciones aproximados a partir de la agenda oficial de la Diócesis de Tenerife y de la
            cobertura de prensa. Pueden ajustarse por motivos de seguridad.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/visita-papa-canarias" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Agenda de Canarias
            </Link>
            <Link href="/es/ciudades/tenerife" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Guía de Tenerife
            </Link>
            <Link href="/es/programa/12-junio" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Programa del 12 de junio
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
