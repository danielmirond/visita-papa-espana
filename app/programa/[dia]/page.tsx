import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import { schedule } from '@/data/schedule'
import { cities } from '@/data/cities'
import { slugToDate, dateToSlug, formatDateLong } from '@/lib/utils'

interface Props {
  params: { dia: string }
}

export function generateStaticParams() {
  return schedule.map((day) => ({ dia: dateToSlug(day.date) }))
}

export function generateMetadata({ params }: Props): Metadata {
  const date = slugToDate(params.dia)
  if (!date) return {}
  const day = schedule.find((d) => d.date === date)
  if (!day) return {}
  const city = cities.find((c) => c.slug === day.citySlug)
  return {
    title: `${day.label} - ${city?.name}`,
    description: `Programa del ${formatDateLong(day.date)} en ${city?.name}. ${day.events.length} actos programados para la visita del Papa León XIV.`,
  }
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

export default function DiaPage({ params }: Props) {
  const date = slugToDate(params.dia)
  if (!date) notFound()

  const day = schedule.find((d) => d.date === date)
  if (!day) notFound()

  const city = cities.find((c) => c.slug === day.citySlug)
  const dayIndex = schedule.findIndex((d) => d.date === date)
  const prevDay = dayIndex > 0 ? schedule[dayIndex - 1] : null
  const nextDay = dayIndex < schedule.length - 1 ? schedule[dayIndex + 1] : null

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <Link href="/programa" className="text-sm text-papal-gold hover:underline">
            &larr; Programa completo
          </Link>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white">
            {day.label}
          </h1>
          <p className="mt-2 text-white/70">
            {city?.name}, {city?.region} &middot; {day.events.length} actos
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-4">
          {day.events.map((event) => (
            <div key={event.id} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-papal-navy text-white">
                  <span className="text-sm font-bold">{event.startTime}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                      {EVENT_TYPE_LABELS[event.eventType]}
                    </span>
                    {event.isPublic && (
                      <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                        Acto público
                      </span>
                    )}
                    {!event.isConfirmed && (
                      <span className="rounded bg-papal-navy/10 px-2 py-0.5 text-xs font-medium text-papal-navy/60">
                        Pendiente confirmar
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-heading text-xl font-bold text-papal-navy">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-papal-navy/70">{event.description}</p>
                  <p className="mt-3 text-sm text-papal-navy/50">
                    Lugar: {event.location}
                  </p>
                  {event.registrationUrl && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
                    >
                      Inscribirse
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav prev/next */}
        <div className="mt-10 flex justify-between">
          {prevDay ? (
            <Link
              href={`/programa/${dateToSlug(prevDay.date)}`}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              &larr; {prevDay.label}
            </Link>
          ) : <div />}
          {nextDay ? (
            <Link
              href={`/programa/${dateToSlug(nextDay.date)}`}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              {nextDay.label} &rarr;
            </Link>
          ) : <div />}
        </div>
      </Container>
    </>
  )
}
