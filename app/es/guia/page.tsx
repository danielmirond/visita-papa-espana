import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { profiles } from '@/data/perfiles'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Guías por tipo de visitante',
  description: 'Guías personalizadas para la visita del Papa León XIV: familias con niños, personas mayores, visitantes internacionales y personas con movilidad reducida.',
  alternates: getAlternates('/guia', 'es'),
}

export default function GuiaPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Guías por tipo de visitante
          </h1>
          <p className="mt-3 text-white/70">
            Recomendaciones personalizadas para cada tipo de visitante
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {profiles.map((profile) => (
            <Link
              key={profile.slug}
              href={`/guia/${profile.slug}`}
              className="group rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h2 className="font-heading text-xl font-bold text-papal-navy group-hover:text-papal-gold">
                {profile.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-papal-navy/60">
                {profile.description}
              </p>
              <p className="mt-3 text-sm font-medium text-papal-gold">
                Ver guía completa &rarr;
              </p>
            </Link>
          ))}
        </div>

        {/* Calendario descargable */}
        <div className="mt-10 rounded-xl bg-papal-cream p-6 text-center sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-papal-navy">
            Añade los eventos a tu calendario
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-papal-navy/60">
            Descarga el calendario con todos los actos de la visita papal.
            Compatible con Google Calendar, Apple Calendar, Outlook y cualquier app de calendario.
          </p>
          <a
            href="/api/calendario"
            download
            className="mt-4 inline-block rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
          >
            Descargar calendario (.ics)
          </a>
        </div>
      </Container>
    </>
  )
}
