import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { cities } from '@/data/cities'
import { formatDateShort } from '@/lib/utils'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

// Mapa solo en cliente (Leaflet necesita window)
const PapalRouteMap = dynamic(() => import('@/components/map/PapalRouteMap'), {
  ssr: false,
  loading: () => (
    <div
      className="overflow-hidden rounded-xl border border-papal-gold/20 bg-papal-cream animate-pulse"
      style={{ height: '500px' }}
    />
  ),
})

const seo = getSeoMeta('mapa', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/mapa', 'es'),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: 'summary_large_image', images: [seo.ogImage] } : undefined,
}

const CITY_COLORS: Record<string, string> = {
  madrid: 'bg-papal-navy',
  barcelona: 'bg-papal-navy-light',
  'gran-canaria': 'bg-papal-gold-dark',
  tenerife: 'bg-papal-gold',
}

export default function MapaPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Mapa del recorrido
          </h1>
          <p className="mt-3 text-white/70">
            4 ciudades, 2 comunidades autónomas, 1 archipiélago
          </p>
        </Container>
      </section>

      <Container className="py-10">
        {/* Recorrido lineal (visual) */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            {cities.map((city, i) => (
              <div key={city.slug} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Linea vertical */}
                {i < cities.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-full w-0.5 bg-papal-gold/30" />
                )}
                {/* Circulo */}
                <div className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white ${CITY_COLORS[city.slug]}`}>
                  <span className="text-sm font-bold">{i + 1}</span>
                </div>
                {/* Contenido */}
                <Link
                  href={`/ciudades/${city.slug}`}
                  className="flex-1 rounded-xl border border-gray-100 p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-papal-navy">
                        {city.name}
                      </h2>
                      <p className="text-sm text-papal-navy/60">{city.region}</p>
                    </div>
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-papal-navy/70">
                      {formatDateShort(city.papalDates.start)}
                      {city.papalDates.start !== city.papalDates.end && (
                        <> - {formatDateShort(city.papalDates.end)}</>
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-papal-navy/60">
                    {city.highlights[0]}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa interactivo (Leaflet + OpenStreetMap, sin Google) */}
        <div className="mt-10">
          <h2 className="mb-4 text-center font-heading text-2xl font-bold text-papal-navy">
            Mapa interactivo
          </h2>
          <PapalRouteMap locale="es" height="540px" />
          <p className="mt-2 text-center text-xs text-papal-navy/40">
            Los pins marcan las 4 ciudades de la visita en orden. Haga clic en cada
            pin para ver las fechas y acceder a la información detallada.
          </p>
        </div>

        {/* Distancias */}
        <div className="mt-10">
          <h2 className="mb-4 text-center font-heading text-2xl font-bold text-papal-navy">
            Distancias entre ciudades
          </h2>
          <div className="mx-auto max-w-xl rounded-xl border border-gray-100 p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium text-papal-navy">Madrid &rarr; Barcelona</span>
                <div className="text-right text-xs text-papal-navy/60">
                  <p>AVE: 2h 30min</p>
                  <p>Avión: 1h 20min</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium text-papal-navy">Barcelona &rarr; Gran Canaria</span>
                <div className="text-right text-xs text-papal-navy/60">
                  <p>Avión: 3h 30min</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium text-papal-navy">Gran Canaria &rarr; Tenerife</span>
                <div className="text-right text-xs text-papal-navy/60">
                  <p>Avión: 30min</p>
                  <p>Ferry: 1h 30min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
