import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { tvChannels } from '@/data/tvChannels'

export const metadata: Metadata = {
  title: 'Dónde ver la visita del Papa',
  description: 'Todos los canales de TV, plataformas de streaming y emisoras de radio que retransmitirán la visita del Papa León XIV a España en junio de 2026.',
}

const TYPE_LABELS: Record<string, string> = {
  tv: 'Televisión',
  streaming: 'Streaming',
  radio: 'Radio',
}

export default function DondeVerPage() {
  const grouped = {
    tv: tvChannels.filter((c) => c.type === 'tv'),
    streaming: tvChannels.filter((c) => c.type === 'streaming'),
    radio: tvChannels.filter((c) => c.type === 'radio'),
  }

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Dónde ver la visita del Papa
          </h1>
          <p className="mt-3 text-white/70">
            TV, streaming y radio: todas las formas de seguir la visita en directo
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mb-8 rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
          <p className="text-center text-sm text-papal-navy/80">
            La cobertura principal correrá a cargo de <strong>RTVE</strong> (La 1, La 2 y RTVE Play) con retransmisión completa de todos los actos principales.
            Los canales religiosos <strong>13TV</strong> y <strong>TRECE</strong> ofrecen cobertura especializada.
            <strong> Vatican News</strong> retransmitirá en directo desde la perspectiva del Vaticano.
          </p>
        </div>

        {(['tv', 'streaming', 'radio'] as const).map((type) => (
          <section key={type} className="mb-10">
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
              {TYPE_LABELS[type]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[type].map((channel) => (
                <div
                  key={channel.name}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading text-lg font-bold text-papal-navy">
                      {channel.name}
                    </h3>
                    <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                      Gratis
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-papal-navy/60">
                    {channel.description}
                  </p>
                  {channel.url && (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-papal-gold hover:underline"
                    >
                      Ir a {channel.name} &rarr;
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl bg-papal-cream p-6">
          <h2 className="font-heading text-xl font-bold text-papal-navy">
            Pantallas gigantes
          </h2>
          <p className="mt-2 text-sm text-papal-navy/70">
            Se instalarán pantallas gigantes en los principales puntos de Madrid, Barcelona y Canarias
            para que los fieles que no puedan acceder a los recintos puedan seguir los actos en directo.
            Los detalles de ubicación se publicarán en las semanas previas a la visita.
          </p>
        </section>
      </Container>
    </>
  )
}
