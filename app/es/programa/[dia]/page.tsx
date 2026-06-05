import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import MeteoWidget from '@/components/shared/MeteoWidget'
import DayMapCard from '@/components/map/DayMapCard'
import TrafficTimeline from '@/components/traffic/TrafficTimeline'
import { schedule } from '@/data/schedule'
import { cities } from '@/data/cities'
import { trafficClosures } from '@/data/traffic-closures'
import { getContextualProducts, buildAmazonUrl } from '@/data/amazon-products'
import type { PapalEvent } from '@/types/schedule'
import { slugToDate, dateToSlug, formatDateLong } from '@/lib/utils'
import { getAlternates } from '@/lib/i18n-metadata'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  params: { dia: string }
}

export function generateStaticParams() {
  return schedule.map((day) => ({ dia: dateToSlug(day.date) }))
}

// Prioridad para elegir el "acto central" del día (menor = más relevante).
// Se prefieren siempre los actos públicos.
const EVENT_PRIORITY: Record<string, number> = {
  misa: 1,
  vigilia: 2,
  inauguracion: 3,
  encuentro: 4,
  'acto-publico': 5,
  despedida: 6,
  llegada: 7,
  traslado: 8,
}

function getCentralEvent(events: PapalEvent[]): PapalEvent | undefined {
  return [...events].sort((a, b) => {
    const pa = (a.isPublic ? 0 : 100) + (EVENT_PRIORITY[a.eventType] ?? 9)
    const pb = (b.isPublic ? 0 : 100) + (EVENT_PRIORITY[b.eventType] ?? 9)
    return pa - pb
  })[0]
}

function dayNumber(date: string): number {
  return new Date(date + 'T12:00:00').getDate()
}

export function generateMetadata({ params }: Props): Metadata {
  const date = slugToDate(params.dia)
  if (!date) return {}
  const day = schedule.find((d) => d.date === date)
  if (!day) return {}
  const city = cities.find((c) => c.slug === day.citySlug)
  const central = getCentralEvent(day.events)
  const cityName = city?.name ?? ''
  const title = central
    ? `${central.title} — ${cityName} ${dayNumber(day.date)} jun`
    : `${day.label} en ${cityName}`
  const description = central
    ? `${central.title} (${central.startTime}) y ${day.events.length} actos del Papa León XIV en ${cityName} el ${formatDateLong(day.date)}: horarios, recorrido, cortes de tráfico, previsión del tiempo y cómo asistir.`
    : `Actos del Papa León XIV en ${cityName} el ${formatDateLong(day.date)}.`
  return {
    title,
    description,
    alternates: getAlternates(`/programa/${params.dia}`, 'es'),
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
  const central = getCentralEvent(day.events)
  const dayIndex = schedule.findIndex((d) => d.date === date)
  const prevDay = dayIndex > 0 ? schedule[dayIndex - 1] : null
  const nextDay = dayIndex < schedule.length - 1 ? schedule[dayIndex + 1] : null

  const dayClosures = trafficClosures.filter((c) => c.city === day.citySlug && c.date === day.date)
  const hasCortesPage = day.citySlug === 'madrid' || day.citySlug === 'barcelona'
  const products = getContextualProducts({ city: day.citySlug as never, placement: 'programa' }).slice(0, 10)

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <Link href={localizePath('/programa', 'es')} className="text-sm text-papal-gold hover:underline">
            &larr; Programa completo
          </Link>
          {central && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-papal-gold">
              Acto central · {central.startTime} · {EVENT_TYPE_LABELS[central.eventType]}
            </p>
          )}
          <h1 className="mt-2 font-heading text-3xl font-bold text-white">
            {central ? central.title : day.label}
          </h1>
          <p className="mt-2 text-white/70">
            {day.label} &middot; {city?.name}, {city?.region} &middot; {day.events.length} actos
          </p>
        </Container>
      </section>

      {/* Previsión del tiempo */}
      {city && (
        <Container className="pt-8">
          <h2 className="mb-3 font-heading text-xl font-bold text-papal-navy">
            🌤️ Previsión del tiempo · {city.name}
          </h2>
          <MeteoWidget
            ciudad={city.name}
            lat={city.coordinates.lat}
            lon={city.coordinates.lng}
            fechas={[day.date]}
            locale="es"
          />
        </Container>
      )}

      {/* Recorrido (papamóvil / mapa del día) */}
      <DayMapCard citySlug={day.citySlug} date={day.date} locale="es" />

      <Container className="py-10">
        {/* Actos del día */}
        <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">Actos del día</h2>
        <div className="space-y-4">
          {day.events.map((event) => (
            <div
              key={event.id}
              className={`rounded-xl border bg-white p-6 shadow-sm ${
                central && event.id === central.id ? 'border-papal-gold ring-1 ring-papal-gold/40' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-papal-navy text-white">
                  <span className="text-sm font-bold">{event.startTime}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                      {EVENT_TYPE_LABELS[event.eventType]}
                    </span>
                    {central && event.id === central.id && (
                      <span className="rounded bg-papal-gold px-2 py-0.5 text-xs font-bold text-papal-navy">
                        Acto central
                      </span>
                    )}
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
                  <h3 className="mt-2 font-heading text-xl font-bold text-papal-navy">{event.title}</h3>
                  <p className="mt-2 text-papal-navy/70">{event.description}</p>
                  <p className="mt-3 text-sm text-papal-navy/50">Lugar: {event.location}</p>
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

        {/* Cortes de tráfico del día */}
        {dayClosures.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
              🚧 Cortes de tráfico en {city?.name} · {day.label}
            </h2>
            <TrafficTimeline closures={dayClosures} locale="es" />
            <Link
              href={localizePath(hasCortesPage ? `/cortes-trafico/${day.citySlug}` : '/cortes-trafico', 'es')}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-papal-gold hover:underline"
            >
              Ver calles cortadas y metro cerrado en {city?.name} &rarr;
            </Link>
          </section>
        )}

        {/* Carrusel de productos */}
        {products.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-1 font-heading text-2xl font-bold text-papal-navy">🎒 Lo que necesitas para este día</h2>
            <p className="mb-4 text-sm text-papal-navy/60">
              Selección para los actos en {city?.name}. Enlaces de afiliación.
            </p>
            <ul className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {products.map((p) => (
                <li key={p.id} className="w-56 flex-shrink-0">
                  <a
                    href={buildAmazonUrl(p.amazonQuery, 'es')}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex h-full flex-col rounded-xl border border-papal-gold/30 bg-papal-cream/50 p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-papal-navy">{p.title.es || p.title.en}</span>
                    <span className="mt-1 flex-1 text-xs text-papal-navy/60">{p.description.es || ''}</span>
                    <span className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-bold text-papal-gold-dark">
                        €{p.priceRange.min}-{p.priceRange.max}
                      </span>
                      <span className="text-xs text-papal-navy/50">Amazon</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Nav prev/next */}
        <div className="mt-12 flex justify-between border-t border-gray-100 pt-6">
          {prevDay ? (
            <Link
              href={`/programa/${dateToSlug(prevDay.date)}`}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              &larr; {prevDay.label}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link
              href={`/programa/${dateToSlug(nextDay.date)}`}
              className="text-sm font-medium text-papal-gold hover:underline"
            >
              {nextDay.label} &rarr;
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  )
}
