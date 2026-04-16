import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { schedule } from '@/data/schedule'
import { cities } from '@/data/cities'
import { dateToSlug } from '@/lib/utils'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Programa completo',
  description: 'Agenda día a día de la visita del Papa León XIV a España. Todos los actos, misas, encuentros y eventos del 6 al 12 de junio de 2026 en Madrid, Barcelona, Gran Canaria y Tenerife.',
  alternates: getAlternates('/programa', 'es'),
}

const EVENT_TYPE_LABELS: Record<string, string> = {
  misa: 'Misa',
  vigilia: 'Vigilia',
  encuentro: 'Encuentro',
  inauguracion: 'Inauguración',
  traslado: 'Traslado',
  llegada: 'Llegada',
  despedida: 'Despedida',
  'acto-publico': 'Acto público',
}

const EVENT_TYPE_COLORS: Record<string, string> = {
  misa: 'bg-papal-red/90 text-white',
  vigilia: 'bg-papal-navy text-white',
  encuentro: 'bg-papal-navy-light text-white',
  inauguracion: 'bg-papal-gold text-papal-navy',
  traslado: 'bg-papal-navy/40 text-white',
  llegada: 'bg-papal-gold-dark text-white',
  despedida: 'bg-papal-navy/60 text-white',
  'acto-publico': 'bg-papal-navy text-white',
}

export default function ProgramaPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Visita apostólica del Papa León XIV a España',
          startDate: '2026-06-06',
          endDate: '2026-06-12',
          description: 'Programa completo de la visita papal a España',
        }}
      />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Programa de la visita
          </h1>
          <p className="mt-3 text-white/70">
            Agenda completa del 6 al 12 de junio de 2026
          </p>
          <a
            href="/api/calendario"
            download
            className="mt-4 inline-block rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Descargar calendario (.ics)
          </a>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-10">
          {schedule.map((day) => {
            const city = cities.find((c) => c.slug === day.citySlug)
            return (
              <div key={day.date} id={day.date}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-papal-navy text-white">
                    <span className="text-lg font-bold leading-none">
                      {new Date(day.date + 'T12:00:00').getDate()}
                    </span>
                    <span className="text-[10px] uppercase">jun</span>
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-papal-navy">
                      <Link href={`/programa/${dateToSlug(day.date)}`} className="hover:text-papal-gold">
                        {day.label}
                      </Link>
                    </h2>
                    <p className="text-sm text-papal-navy/60">
                      {city?.name}, {city?.region}
                    </p>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-papal-gold/30 pl-6">
                  {day.events.map((event, i) => (
                    <div
                      key={event.id}
                      className={`relative pb-6 ${i === day.events.length - 1 ? 'pb-0' : ''}`}
                    >
                      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-papal-gold bg-white" />
                      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex flex-wrap items-start gap-2">
                          <span className="rounded bg-papal-navy/10 px-2 py-0.5 text-xs font-medium text-papal-navy">
                            {event.startTime}
                          </span>
                          <span className={`rounded px-2 py-0.5 text-xs font-medium ${EVENT_TYPE_COLORS[event.eventType]}`}>
                            {EVENT_TYPE_LABELS[event.eventType]}
                          </span>
                          {event.isPublic && (
                            <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                              Público
                            </span>
                          )}
                          {!event.isConfirmed && (
                            <span className="rounded bg-papal-navy/10 px-2 py-0.5 text-xs font-medium text-papal-navy/60">
                              Pendiente confirmar
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 font-heading text-lg font-bold text-papal-navy">
                          {event.title}
                        </h3>
                        <p className="mt-1 text-sm text-papal-navy/60">
                          {event.description}
                        </p>
                        <p className="mt-2 text-xs text-papal-navy/40">
                          Lugar: {event.location}
                        </p>
                        {event.registrationUrl && (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-xs font-medium text-papal-gold hover:underline"
                          >
                            Inscribirse &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
