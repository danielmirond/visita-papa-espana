import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { dateToSlug } from '@/lib/utils'
import { siteConfig } from '@/data/siteConfig'
import {
  eventSchema,
  programmeItemListSchema,
  visitMainEventSchema,
} from '@/lib/schema/generators'

const EVENT_TYPE_COLORS: Record<string, string> = {
  misa: 'bg-papal-red text-white',
  vigilia: 'bg-papal-navy text-white',
  encuentro: 'bg-papal-gold text-papal-navy',
  inauguracion: 'bg-papal-gold text-papal-navy',
  traslado: 'bg-papal-navy/30 text-papal-navy',
  llegada: 'bg-papal-gold/60 text-papal-navy',
  despedida: 'bg-papal-navy/30 text-papal-navy',
  'acto-publico': 'bg-papal-navy text-white',
}

const TRAFFIC_LINK_LABELS: Record<Locale, { title: string; description: string; btn: string }> = {
  es: { title: 'Planifica tu viaje considerando el tráfico', description: 'Durante la visita papal se esperan importantes afectaciones de tráfico en todas las ciudades. Consulta los cortes horarios para planificar mejor tu desplazamiento.', btn: 'Ver cortes de tráfico por hora →' },
  en: { title: 'Plan your visit considering traffic closures', description: 'Significant traffic closures are expected in all cities during the papal visit. Check hourly closures to plan your travel better.', btn: 'View hourly traffic closures →' },
  it: { title: 'Pianifica la tua visita considerando il traffico', description: 'Sono previste importanti chiusure del traffico in tutte le città durante la visita papale. Consulta le chiusure orarie per pianificare meglio i tuoi spostamenti.', btn: 'Visualizza chiusure orarie →' },
  fr: { title: 'Planifiez votre visite en tenant compte du trafic', description: 'Des fermetures de circulation importantes sont attendues dans toutes les villes lors de la visite papale. Consultez les fermetures horaires pour mieux planifier vos déplacements.', btn: 'Consulter les fermetures horaires →' },
  de: { title: 'Planen Sie Ihren Besuch unter Berücksichtigung des Verkehrs', description: 'Während des Papstbesuchs sind in allen Städten erhebliche Verkehrssperrungen zu erwarten. Überprüfen Sie die stündlichen Sperrungen, um Ihre Reise besser zu planen.', btn: 'Stündliche Verkehrssperrungen anzeigen →' },
  pt: { title: 'Planeje sua visita considerando o tráfego', description: 'Significativos cortes de tráfego são esperados em todas as cidades durante a visita papal. Consulte os cortes horários para planejar melhor sua viagem.', btn: 'Visualizar cortes horários →' },
  ca: { title: 'Planifica la teva visita tenint en compte el trànsit', description: 'S\'esperen importants afectacions de trànsit a totes les ciutats durant la visita papal. Consulta els talls horaris per planificar millor els teus desplaçaments.', btn: 'Consultar talls de trànsit →' },
  gl: { title: 'Planifica a túa visita considerando o tráfico', description: 'Espérase importantes afectacións de tráfico en todas as cidades durante a visita papal. Consulta os talls horarios para planificar mellor os teus desprazamentos.', btn: 'Ver cortes de tráfico por horas →' },
  eu: { title: 'Planifikatu zure bisita trafikoa kontuan hartuta', description: 'Aita Santuaren bisitaren garaian trafikoa-bozpakatzeak espero dira hiri guztienetan. Kontsultatu orduz orduko tallen orriak zure biaiarentzat plana hobeto egiteko.', btn: 'Ikusi orduz orduko trafikoa-bozpakatzeak →' },
}

export default function ProgramaPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const t = getPagesDict(locale)
  const schedule = getScheduleByLocale(locale)
  const cities = getCitiesByLocale(locale)

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.programa.title, href: localizePath('/programa', locale) },
  ]

  return (
    <>
      {/* Schema: evento principal + lista de items + un Event rico por cada acto */}
      <JsonLd data={visitMainEventSchema(locale)} />
      <JsonLd data={programmeItemListSchema(schedule, locale)} />
      {schedule.flatMap((day) =>
        day.events.map((event) => {
          const city = cities.find((c) => c.slug === day.citySlug)
          return <JsonLd key={event.id} data={eventSchema(event, city, locale)} />
        })
      )}

      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.programa.title}
          </h1>
          <p className="mt-3 text-white/70">{t.programa.subtitle}</p>
          <a
            href="/api/calendario"
            download
            className="mt-4 inline-block rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {nav.common.downloadCalendar}
          </a>
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <div className="mb-8 rounded-xl border border-amber-100 bg-amber-50/40 p-6">
          <h2 className="mb-2 flex items-center gap-2 font-heading text-lg font-bold text-papal-navy">
            ⚠️ {TRAFFIC_LINK_LABELS[locale].title}
          </h2>
          <p className="mb-4 text-sm text-papal-navy/70">{TRAFFIC_LINK_LABELS[locale].description}</p>
          <Link
            href={localizePath('/cortes-trafico', locale)}
            className="inline-block text-sm font-medium text-papal-gold hover:underline"
          >
            {TRAFFIC_LINK_LABELS[locale].btn}
          </Link>
        </div>

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
                      {day.label}
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
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-medium ${EVENT_TYPE_COLORS[event.eventType]}`}
                          >
                            {t.eventTypes[event.eventType]}
                          </span>
                          {event.isPublic && (
                            <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-xs font-medium text-papal-gold-dark">
                              {nav.common.public}
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
                          {nav.common.location}: {event.location}
                        </p>
                        {event.registrationUrl && (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-xs font-medium text-papal-gold hover:underline"
                          >
                            {t.programa.attend} →
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
