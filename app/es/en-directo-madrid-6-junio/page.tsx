import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import LiveBroadcast from '@/components/home/LiveBroadcast'
import { schedule } from '@/data/schedule'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Visita del Papa en directo: Madrid 6 de junio, última hora',
  description:
    'Sigue en directo la visita del Papa León XIV a Madrid el 6 de junio de 2026: retransmisión en vídeo, programa de hoy minuto a minuto y enlaces a la última hora de El País, La Razón y RTVE.',
  alternates: { canonical: `${siteConfig.url}/es/en-directo-madrid-6-junio` },
}

// Directos oficiales para el minuto a minuto (cobertura en tiempo real).
const FUENTES_DIRECTO = [
  { name: 'RTVE — Directo', url: 'https://www.rtve.es/noticias/20260606/visita-papa-madrid-directo-ultima-hora-hoy-resumen-6-junio/17102474.shtml' },
  { name: 'El País — En directo', url: 'https://elpais.com/espana/2026-06-06/visita-del-papa-leon-xiv-a-espana-en-directo.html' },
  { name: 'La Razón — Directo', url: 'https://www.larazon.es/sociedad/visita-papa-leon-xiv-madrid-directo-sigue-ultima-hora-actos-visita-espana-b50m_202606066a23a25844a9ef6825fe2b10.html' },
]

export default function EnDirectoMadrid6() {
  const day = schedule.find((d) => d.date === '2026-06-06')
  const events = day?.events ?? []

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <span className="inline-flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> EN DIRECTO
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Visita del Papa en directo · Madrid, 6 de junio
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Retransmisión en vídeo y seguimiento del primer día del Viaje Apostólico de León XIV a España.
          </p>
        </Container>
      </section>

      {/* Vídeo en directo */}
      <LiveBroadcast locale="es" alwaysEmbed />

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Última hora oficial */}
          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-2 font-heading text-lg font-bold text-papal-navy">📰 Última hora minuto a minuto</h2>
            <p className="mb-3 text-sm text-papal-navy/70">
              Sigue la cobertura en tiempo real en los directos de los principales medios:
            </p>
            <div className="flex flex-wrap gap-2">
              {FUENTES_DIRECTO.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-papal-navy px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-papal-navy/90"
                >
                  {f.name} →
                </a>
              ))}
            </div>
          </div>

          {/* Programa de hoy */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">Programa de hoy en Madrid</h2>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-papal-navy text-white">
                    <span className="text-sm font-bold">{event.startTime}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-papal-navy">{event.title}</h3>
                    <p className="mt-1 text-sm text-papal-navy/60">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-papal-navy/50">
              Horarios aproximados; pueden ajustarse por seguridad. Detalle completo en la{' '}
              <Link href="/es/programa/6-junio" className="text-papal-gold hover:underline">
                página del día
              </Link>
              .
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/programa" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Programa completo
            </Link>
            <Link href="/es/cortes-trafico/madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Cortes de tráfico y metro
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
