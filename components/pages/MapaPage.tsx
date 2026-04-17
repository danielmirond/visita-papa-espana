import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { getDictionary } from '@/data/i18n/dictionaries'
import { getCitiesByLocale } from '@/data/i18n/content/cities'
import { type Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { formatDateShort } from '@/lib/utils'

const PapalRouteMap = dynamic(() => import('@/components/map/PapalRouteMap'), {
  ssr: false,
  loading: () => (
    <div
      className="overflow-hidden rounded-xl border border-papal-gold/20 bg-papal-cream animate-pulse"
      style={{ height: '500px' }}
    />
  ),
})

const MAP_TITLES: Record<Locale, { title: string; subtitle: string; interactive: string; hint: string }> = {
  es: { title: 'Mapa del recorrido', subtitle: '4 ciudades, 2 comunidades autónomas, 1 archipiélago', interactive: 'Mapa interactivo', hint: 'Haga clic en cada pin para ver las fechas y acceder a la información detallada.' },
  en: { title: 'Papal route map', subtitle: '4 cities, 2 autonomous communities, 1 archipelago', interactive: 'Interactive map', hint: 'Click each pin to see dates and detailed information.' },
  it: { title: 'Mappa del percorso', subtitle: '4 città, 2 comunità autonome, 1 arcipelago', interactive: 'Mappa interattiva', hint: 'Fai clic su ogni pin per vedere le date e accedere alle informazioni dettagliate.' },
  fr: { title: 'Carte du parcours', subtitle: '4 villes, 2 communautés autonomes, 1 archipel', interactive: 'Carte interactive', hint: 'Cliquez sur chaque épingle pour voir les dates et les informations détaillées.' },
  de: { title: 'Karte der Reise', subtitle: '4 Städte, 2 autonome Gemeinschaften, 1 Archipel', interactive: 'Interaktive Karte', hint: 'Klicken Sie auf jede Markierung, um Termine und detaillierte Informationen zu sehen.' },
  pt: { title: 'Mapa do percurso', subtitle: '4 cidades, 2 comunidades autónomas, 1 arquipélago', interactive: 'Mapa interativo', hint: 'Clique em cada pino para ver datas e informações detalhadas.' },
  ca: { title: 'Mapa del recorregut', subtitle: '4 ciutats, 2 comunitats autònomes, 1 arxipèlag', interactive: 'Mapa interactiu', hint: 'Feu clic a cada pin per veure les dates i la informació detallada.' },
  gl: { title: 'Mapa do percorrido', subtitle: '4 cidades, 2 comunidades autónomas, 1 arquipélago', interactive: 'Mapa interactivo', hint: 'Fai clic en cada pin para ver as datas e a información detallada.' },
  eu: { title: 'Ibilbidearen mapa', subtitle: '4 hiri, 2 erkidego autonomo, 1 artxipelago', interactive: 'Mapa interaktiboa', hint: 'Egin klik pin bakoitzean datak eta xehetasunak ikusteko.' },
}

export default function MapaPageContent({ locale }: { locale: Locale }) {
  const nav = getDictionary(locale)
  const cities = getCitiesByLocale(locale)
  const t = MAP_TITLES[locale]

  const breadcrumbs = [
    { name: nav.nav.home, href: localizePath('/', locale) },
    { name: t.title, href: localizePath('/mapa', locale) },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        {/* Recorrido lineal listado */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="relative">
            {cities.map((city, i) => (
              <div key={city.slug} className="relative flex gap-4 pb-6 last:pb-0">
                {i < cities.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-full w-0.5 bg-papal-gold/30" />
                )}
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-papal-gold to-papal-gold-dark text-sm font-bold text-papal-navy">
                  {i + 1}
                </div>
                <a
                  href={localizePath(`/ciudades/${city.slug}`, locale)}
                  className="flex-1 rounded-xl border border-gray-100 p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-papal-navy">{city.name}</h2>
                      <p className="text-sm text-papal-navy/60">{city.region}</p>
                    </div>
                    <span className="rounded bg-papal-cream px-2 py-1 text-xs font-medium text-papal-navy/70">
                      {formatDateShort(city.papalDates.start)}
                      {city.papalDates.start !== city.papalDates.end && (
                        <> - {formatDateShort(city.papalDates.end)}</>
                      )}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mb-4 text-center font-heading text-2xl font-bold text-papal-navy">
          {t.interactive}
        </h2>
        <PapalRouteMap locale={locale} height="540px" />
        <p className="mt-2 text-center text-xs text-papal-navy/40">{t.hint}</p>
      </Container>
    </>
  )
}
