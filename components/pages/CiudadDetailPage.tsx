import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import AffiliateNotice from '@/components/affiliate/AffiliateNotice'
import SocialFeed from '@/components/shared/SocialFeed'
import MeteoWidget from '@/components/shared/MeteoWidget'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { getPagesDict } from '@/data/i18n/dictionaries-pages'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getAffiliatesByCategory } from '@/data/affiliates'
import { formatDateLong, dateToSlug } from '@/lib/utils'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

const CityEventsMap = dynamic(() => import('@/components/map/CityEventsMap'), {
  ssr: false,
  loading: () => (
    <div
      className="overflow-hidden rounded-xl border border-papal-gold/20 bg-papal-cream animate-pulse"
      style={{ height: '420px' }}
    />
  ),
})

const CITY_GRADIENTS: Record<string, string> = {
  madrid: 'from-papal-navy to-papal-navy-light',
  barcelona: 'from-papal-navy-light to-papal-navy',
  'gran-canaria': 'from-papal-gold-dark to-papal-navy',
  tenerife: 'from-papal-navy to-papal-gold-dark',
}

// Etiquetas específicas del detalle de ciudad (no hay en PagesExt)
const EXTRA_LABELS: Record<Locale, {
  backToAll: string
  meteoTitle: string
  mapTitle: string
  mapHint: string
  practicalTitle: string
  datesLbl: string
  until: string
  whereToStay: string
  sponsoredLink: string
  attendanceInfo: string
  attendanceNote: string
  fullGuideBtn: string
}> = {
  es: { backToAll: '← Todas las ciudades', meteoTitle: 'Previsión meteorológica', mapTitle: 'Mapa de los actos en', mapHint: 'Los pins muestran los actos con ubicación conocida. Haga clic en cada uno para ver hora, lugar y tipo de acto.', practicalTitle: 'Información práctica', datesLbl: 'Fechas', until: 'al', whereToStay: 'Dónde alojarse', sponsoredLink: 'Enlace patrocinado', attendanceInfo: 'Información de asistencia', attendanceNote: 'Los actos públicos requieren inscripción previa gratuita.', fullGuideBtn: 'Ver guía completa' },
  en: { backToAll: '← All cities', meteoTitle: 'Weather forecast', mapTitle: 'Map of events in', mapHint: 'Pins show events with known location. Click each one to see time, place and type of event.', practicalTitle: 'Practical information', datesLbl: 'Dates', until: 'to', whereToStay: 'Where to stay', sponsoredLink: 'Sponsored link', attendanceInfo: 'Attendance info', attendanceNote: 'Public events require free prior registration.', fullGuideBtn: 'See full guide' },
  it: { backToAll: '← Tutte le città', meteoTitle: 'Previsioni meteo', mapTitle: 'Mappa degli eventi a', mapHint: 'I pin mostrano gli eventi con ubicazione nota. Clicca su ognuno per orario, luogo e tipo di evento.', practicalTitle: 'Informazioni pratiche', datesLbl: 'Date', until: 'al', whereToStay: 'Dove alloggiare', sponsoredLink: 'Link sponsorizzato', attendanceInfo: 'Informazioni sulla partecipazione', attendanceNote: 'Gli eventi pubblici richiedono registrazione gratuita preventiva.', fullGuideBtn: 'Vedi guida completa' },
  fr: { backToAll: '← Toutes les villes', meteoTitle: 'Prévisions météo', mapTitle: 'Carte des événements à', mapHint: 'Les épingles indiquent les événements avec lieu connu. Cliquez sur chacun pour voir heure, lieu et type d\'événement.', practicalTitle: 'Informations pratiques', datesLbl: 'Dates', until: 'au', whereToStay: 'Où loger', sponsoredLink: 'Lien sponsorisé', attendanceInfo: 'Informations de participation', attendanceNote: 'Les événements publics nécessitent une inscription préalable gratuite.', fullGuideBtn: 'Voir le guide complet' },
  de: { backToAll: '← Alle Städte', meteoTitle: 'Wettervorhersage', mapTitle: 'Karte der Ereignisse in', mapHint: 'Pins zeigen Ereignisse mit bekanntem Ort. Klicken Sie auf jeden, um Uhrzeit, Ort und Art des Ereignisses zu sehen.', practicalTitle: 'Praktische Informationen', datesLbl: 'Daten', until: 'bis', whereToStay: 'Wo übernachten', sponsoredLink: 'Gesponserter Link', attendanceInfo: 'Teilnahmeinformationen', attendanceNote: 'Öffentliche Veranstaltungen erfordern kostenlose vorherige Anmeldung.', fullGuideBtn: 'Vollständigen Leitfaden ansehen' },
  pt: { backToAll: '← Todas as cidades', meteoTitle: 'Previsão meteorológica', mapTitle: 'Mapa dos atos em', mapHint: 'Os pins mostram os atos com localização conhecida. Clique em cada um para ver hora, local e tipo de ato.', practicalTitle: 'Informação prática', datesLbl: 'Datas', until: 'até', whereToStay: 'Onde ficar', sponsoredLink: 'Link patrocinado', attendanceInfo: 'Informação de participação', attendanceNote: 'Os atos públicos requerem inscrição prévia gratuita.', fullGuideBtn: 'Ver guia completo' },
  ca: { backToAll: '← Totes les ciutats', meteoTitle: 'Previsió meteorològica', mapTitle: 'Mapa dels actes a', mapHint: 'Els pins mostren els actes amb ubicació coneguda. Feu clic a cadascun per veure l\'hora, lloc i tipus d\'acte.', practicalTitle: 'Informació pràctica', datesLbl: 'Dates', until: 'fins', whereToStay: 'On allotjar-se', sponsoredLink: 'Enllaç patrocinat', attendanceInfo: 'Informació d\'assistència', attendanceNote: 'Els actes públics requereixen inscripció prèvia gratuïta.', fullGuideBtn: 'Veure guia completa' },
  gl: { backToAll: '← Todas as cidades', meteoTitle: 'Previsión meteorolóxica', mapTitle: 'Mapa dos actos en', mapHint: 'Os pins mostran os actos con localización coñecida. Fai clic en cada un para ver hora, lugar e tipo de acto.', practicalTitle: 'Información práctica', datesLbl: 'Datas', until: 'ao', whereToStay: 'Onde aloxarse', sponsoredLink: 'Ligazón patrocinada', attendanceInfo: 'Información de asistencia', attendanceNote: 'Os actos públicos requiren inscrición previa gratuíta.', fullGuideBtn: 'Ver guía completa' },
  eu: { backToAll: '← Hiri guztiak', meteoTitle: 'Eguraldi aurreikuspena', mapTitle: 'Ekitaldien mapa', mapHint: 'Pinek kokaleku ezaguna duten ekitaldiak erakusten dituzte. Sakatu bakoitza ordua, tokia eta mota ikusteko.', practicalTitle: 'Informazio praktikoa', datesLbl: 'Datak', until: 'arte', whereToStay: 'Non geratu', sponsoredLink: 'Babesletza-esteka', attendanceInfo: 'Parte hartzeari buruzko informazioa', attendanceNote: 'Ekitaldi publikoek aldez aurretiko doako izen-ematea behar dute.', fullGuideBtn: 'Ikusi gida osoa' },
}

interface Props {
  locale: Locale
  slug: string
}

export default function CiudadDetailPage({ locale, slug }: Props) {
  const cities = getCitiesByLocale(locale)
  const schedule = getScheduleByLocale(locale)
  const pagesDict = getPagesDict(locale)
  const t = pagesDict.ciudades
  const extra = EXTRA_LABELS[locale] || EXTRA_LABELS.es

  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

  const citySchedule = schedule.filter((d) => d.citySlug === city.slug)
  const hotels = getAffiliatesByCategory('hotel').filter(
    (a) => a.id.includes(city.slug) || a.id.includes(city.name.toLowerCase())
  )

  // Generar array de fechas ISO entre inicio y fin
  const meteoFechas: string[] = []
  const mStart = new Date(city.papalDates.start)
  const mEnd = new Date(city.papalDates.end)
  for (let d = new Date(mStart); d <= mEnd; d.setDate(d.getDate() + 1)) {
    meteoFechas.push(d.toISOString().slice(0, 10))
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: city.name,
          address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: 'ES' },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lng,
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src={city.heroImage}
          alt={city.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${CITY_GRADIENTS[city.slug] || 'from-papal-navy to-papal-navy-light'} opacity-80`}
        />
        <Container className="relative py-12 text-white sm:py-16">
          <Link
            href={localizePath('/ciudades', locale)}
            className="text-sm text-white/70 hover:text-white"
          >
            {extra.backToAll}
          </Link>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">{city.name}</h1>
          <p className="mt-1 text-white/80">{city.region}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            {city.description}
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.highlights}
              </h2>
              <ul className="space-y-2">
                {city.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3"
                  >
                    <span className="mt-0.5 text-papal-gold">&#x271D;</span>
                    <span className="text-papal-navy/80">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Programa */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {t.programIn} {city.name}
              </h2>
              {citySchedule.map((day) => (
                <div key={day.date} className="mb-6">
                  <Link
                    href={localizePath(`/programa/${dateToSlug(day.date)}`, locale)}
                    className="mb-3 block font-heading text-lg font-bold text-papal-navy hover:text-papal-gold"
                  >
                    {day.label}
                  </Link>
                  <div className="space-y-2">
                    {day.events.map((event) => (
                      <div
                        key={event.id}
                        className="flex gap-3 rounded-lg border border-gray-100 p-3"
                      >
                        <span className="flex-shrink-0 rounded bg-papal-navy px-2 py-0.5 text-xs font-bold text-white">
                          {event.startTime}
                        </span>
                        <div>
                          <p className="font-medium text-papal-navy">{event.title}</p>
                          <p className="text-xs text-papal-navy/50">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Meteo */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {extra.meteoTitle}
              </h2>
              <MeteoWidget
                ciudad={city.name}
                lat={city.coordinates.lat}
                lon={city.coordinates.lng}
                fechas={meteoFechas}
                locale={locale}
              />
            </section>

            {/* Mapa */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {extra.mapTitle} {city.name}
              </h2>
              <CityEventsMap
                events={citySchedule.flatMap((d) => d.events)}
                cityCenter={city.coordinates}
                cityName={city.name}
                locale={locale}
                height="420px"
              />
              <p className="mt-2 text-xs text-papal-navy/40">{extra.mapHint}</p>
            </section>

            {/* Info práctica */}
            <section className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                {extra.practicalTitle}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">{t.howToGet}</h3>
                  <ul className="space-y-1">
                    {city.practicalInfo.transport.map((tx) => (
                      <li
                        key={tx}
                        className="flex items-start gap-2 text-sm text-papal-navy/70"
                      >
                        <span className="text-papal-gold">&#9679;</span>
                        {tx}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">{t.accommodation}</h3>
                  <p className="text-sm text-papal-navy/70">{city.practicalInfo.accommodation}</p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-papal-navy">{t.tips}</h3>
                  <ul className="space-y-1">
                    {city.practicalInfo.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 text-sm text-papal-navy/70"
                      >
                        <span className="text-papal-gold">&#9679;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
              <h3 className="font-heading text-lg font-bold text-papal-navy">{extra.datesLbl}</h3>
              <p className="mt-1 text-sm text-papal-navy/70">
                {formatDateLong(city.papalDates.start)}
                {city.papalDates.start !== city.papalDates.end && (
                  <>
                    <br />
                    {extra.until} {formatDateLong(city.papalDates.end)}
                  </>
                )}
              </p>
            </div>

            {hotels.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  {extra.whereToStay}
                </h3>
                <div className="mt-3 space-y-3">
                  {hotels.map((hotel) => (
                    <a
                      key={hotel.id}
                      href={hotel.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-papal-gold/20 p-3 transition-colors hover:bg-papal-cream"
                    >
                      <p className="font-medium text-papal-navy">{hotel.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{hotel.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">{extra.sponsoredLink}</p>
              </div>
            )}

            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <h3 className="font-heading text-lg font-bold">{extra.attendanceInfo}</h3>
              <p className="mt-1 text-sm text-white/70">{extra.attendanceNote}</p>
              <Link
                href={localizePath('/como-asistir', locale)}
                className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                {extra.fullGuideBtn}
              </Link>
            </div>

            <BannerPlaceholder size="300x250" label="Alojamiento recomendado" />
            <SocialFeed locale={locale} limit={4} />
          </aside>
        </div>

        <AffiliateNotice locale={locale} />
      </Container>
    </>
  )
}
