import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import MeteoWidget from '@/components/shared/MeteoWidget'
import DayMapCard from '@/components/map/DayMapCard'
import TrafficTimeline from '@/components/traffic/TrafficTimeline'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getCityBySlug } from '@/data/cities'
import { trafficClosures } from '@/data/traffic-closures'
import { getContextualProducts, buildAmazonUrl } from '@/data/amazon-products'
import type { PapalEvent } from '@/types/schedule'
import type { Locale } from '@/data/i18n/types'
import { slugToDate } from '@/lib/utils'
import { getAlternates } from '@/lib/i18n-metadata'
import { localizePath } from '@/data/i18n/routes'

// Prioridad para elegir el "acto central" del día (menor = más relevante).
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

function clamp(text: string, max = 160): string {
  if (!text || text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const s = cut.lastIndexOf(' ')
  return (s > max * 0.6 ? cut.slice(0, s) : cut).replace(/[.,;:\s]+$/, '') + '…'
}

const JUN: Record<Locale, string> = {
  es: 'jun', en: 'Jun', it: 'giu', fr: 'juin', de: 'Jun', pt: 'jun', ca: 'jun', gl: 'xuño', eu: 'eka',
}

const EVENT_TYPE_LABELS: Record<'es' | 'en', Record<string, string>> = {
  es: { misa: 'Misa', vigilia: 'Vigilia', encuentro: 'Encuentro', inauguracion: 'Inauguración', traslado: 'Traslado', llegada: 'Llegada', despedida: 'Despedida', 'acto-publico': 'Acto público' },
  en: { misa: 'Mass', vigilia: 'Vigil', encuentro: 'Encounter', inauguracion: 'Inauguration', traslado: 'Transfer', llegada: 'Arrival', despedida: 'Farewell', 'acto-publico': 'Public event' },
}

type Strings = {
  back: string
  central: string
  events: string
  weather: string
  eventsOfDay: string
  publicAct: string
  pending: string
  place: string
  register: string
  cortes: (c: string) => string
  cortesLink: (c: string) => string
  productsTitle: string
  productsSubtitle: (c: string) => string
}

const STR: Record<'es' | 'en', Strings> = {
  es: {
    back: '← Programa completo',
    central: 'Acto central',
    events: 'actos',
    weather: 'Previsión del tiempo',
    eventsOfDay: 'Actos del día',
    publicAct: 'Acto público',
    pending: 'Pendiente confirmar',
    place: 'Lugar:',
    register: 'Inscribirse',
    cortes: (c) => `🚧 Cortes de tráfico en ${c}`,
    cortesLink: (c) => `Ver calles cortadas y metro cerrado en ${c} →`,
    productsTitle: '🎒 Lo que necesitas para este día',
    productsSubtitle: (c) => `Selección para los actos en ${c}. Enlaces de afiliación.`,
  },
  en: {
    back: '← Full schedule',
    central: 'Central act',
    events: 'events',
    weather: 'Weather forecast',
    eventsOfDay: 'Events of the day',
    publicAct: 'Public event',
    pending: 'To be confirmed',
    place: 'Location:',
    register: 'Register',
    cortes: (c) => `🚧 Traffic closures in ${c}`,
    cortesLink: (c) => `See street and metro closures in ${c} →`,
    productsTitle: '🎒 What you need for this day',
    productsSubtitle: (c) => `Picks for the events in ${c}. Affiliate links.`,
  },
}

function strings(locale: Locale): Strings {
  return locale === 'es' ? STR.es : STR.en
}
function typeLabels(locale: Locale) {
  return locale === 'es' ? EVENT_TYPE_LABELS.es : EVENT_TYPE_LABELS.en
}
function cityName(slug: string, locale: Locale): string {
  return getCitiesByLocale(locale).find((c) => c.slug === slug)?.name || getCityBySlug(slug)?.name || slug
}

export function getDiaMeta(locale: Locale, diaSlug: string): Metadata {
  const date = slugToDate(diaSlug)
  if (!date) return {}
  const day = getScheduleByLocale(locale).find((d) => d.date === date)
  if (!day) return {}
  const central = getCentralEvent(day.events)
  const name = cityName(day.citySlug, locale)
  const isEs = locale === 'es'
  const title = central
    ? `${central.title} — ${name} ${dayNumber(day.date)} ${JUN[locale]}`
    : `${day.label} · ${name}`
  const description = central
    ? clamp(
        isEs
          ? `${central.title} (${central.startTime}) y ${day.events.length} actos del Papa León XIV en ${name} · ${day.label}: horarios, recorrido, cortes de tráfico, previsión del tiempo y cómo asistir.`
          : `${central.title} (${central.startTime}) and ${day.events.length} events of Pope Leo XIV in ${name} · ${day.label}: times, route, traffic closures, weather forecast and how to attend.`
      )
    : `${day.label} · ${name}`
  return {
    title,
    description,
    alternates: getAlternates(`/programa/${diaSlug}`, locale),
  }
}

export default function DiaPage({ locale, dia }: { locale: Locale; dia: string }) {
  const date = slugToDate(dia)
  if (!date) notFound()

  const schedule = getScheduleByLocale(locale)
  const day = schedule.find((d) => d.date === date)
  if (!day) notFound()

  const t = strings(locale)
  const tl = typeLabels(locale)
  const name = cityName(day.citySlug, locale)
  const baseCity = getCityBySlug(day.citySlug)
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
          <Link href={localizePath('/programa', locale)} className="text-sm text-papal-gold hover:underline">
            {t.back}
          </Link>
          {central && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-papal-gold">
              {t.central} · {central.startTime} · {tl[central.eventType]}
            </p>
          )}
          <h1 className="mt-2 font-heading text-3xl font-bold text-white">{central ? central.title : day.label}</h1>
          <p className="mt-2 text-white/70">
            {day.label} &middot; {name}
            {baseCity?.region ? `, ${baseCity.region}` : ''} &middot; {day.events.length} {t.events}
          </p>
        </Container>
      </section>

      {/* Previsión del tiempo */}
      {baseCity && (
        <Container className="pt-8">
          <h2 className="mb-3 font-heading text-xl font-bold text-papal-navy">
            🌤️ {t.weather} · {name}
          </h2>
          <MeteoWidget
            ciudad={name}
            lat={baseCity.coordinates.lat}
            lon={baseCity.coordinates.lng}
            fechas={[day.date]}
            locale={locale}
          />
        </Container>
      )}

      {/* Recorrido (papamóvil / mapa del día) */}
      <DayMapCard citySlug={day.citySlug} date={day.date} locale={locale} />

      <Container className="py-10">
        <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">{t.eventsOfDay}</h2>
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
                      {tl[event.eventType]}
                    </span>
                    {central && event.id === central.id && (
                      <span className="rounded bg-papal-gold px-2 py-0.5 text-xs font-bold text-papal-navy">{t.central}</span>
                    )}
                    {event.isPublic && (
                      <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">{t.publicAct}</span>
                    )}
                    {!event.isConfirmed && (
                      <span className="rounded bg-papal-navy/10 px-2 py-0.5 text-xs font-medium text-papal-navy/60">{t.pending}</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-bold text-papal-navy">{event.title}</h3>
                  <p className="mt-2 text-papal-navy/70">{event.description}</p>
                  <p className="mt-3 text-sm text-papal-navy/50">{t.place} {event.location}</p>
                  {event.registrationUrl && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
                    >
                      {t.register}
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
              {t.cortes(name)} · {day.label}
            </h2>
            <TrafficTimeline closures={dayClosures} locale={locale} />
            <Link
              href={localizePath(hasCortesPage ? `/cortes-trafico/${day.citySlug}` : '/cortes-trafico', locale)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-papal-gold hover:underline"
            >
              {t.cortesLink(name)}
            </Link>
          </section>
        )}

        {/* Carrusel de productos */}
        {products.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-1 font-heading text-2xl font-bold text-papal-navy">{t.productsTitle}</h2>
            <p className="mb-4 text-sm text-papal-navy/60">{t.productsSubtitle(name)}</p>
            <ul className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {products.map((p) => (
                <li key={p.id} className="w-56 flex-shrink-0">
                  <a
                    href={buildAmazonUrl(p.amazonQuery, locale)}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex h-full flex-col rounded-xl border border-papal-gold/30 bg-papal-cream/50 p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-papal-navy">{p.title[locale] || p.title.es}</span>
                    <span className="mt-1 flex-1 text-xs text-papal-navy/60">{p.description[locale] || p.description.es || ''}</span>
                    <span className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-bold text-papal-gold-dark">€{p.priceRange.min}-{p.priceRange.max}</span>
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
            <Link href={localizePath(`/programa/${dayNumber(prevDay.date)}-junio`, locale)} className="text-sm font-medium text-papal-gold hover:underline">
              ← {prevDay.label}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link href={localizePath(`/programa/${dayNumber(nextDay.date)}-junio`, locale)} className="text-sm font-medium text-papal-gold hover:underline">
              {nextDay.label} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  )
}
