import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { cities } from '@/data/cities'
import { formatDateShort } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Mapa del recorrido papal',
  description: 'Mapa con el recorrido del Papa Leon XIV por Espana: Madrid, Barcelona, Gran Canaria y Tenerife del 6 al 12 de junio de 2026.',
}

const CITY_COLORS: Record<string, string> = {
  madrid: 'bg-red-600',
  barcelona: 'bg-blue-600',
  'gran-canaria': 'bg-amber-600',
  tenerife: 'bg-emerald-600',
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
            4 ciudades, 2 comunidades autonomas, 1 archipielago
          </p>
        </Container>
      </section>

      <Container className="py-10">
        {/* Recorrido lineal */}
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

        {/* Mapa embebido */}
        <div className="mt-10">
          <h2 className="mb-4 text-center font-heading text-2xl font-bold text-papal-navy">
            Mapa interactivo
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src={`https://www.google.com/maps/d/embed?mid=1&z=5&ll=38.5,-3.5&q=${cities.map(c => encodeURIComponent(c.name + ', Spain')).join('|')}`}
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del recorrido papal por Espana"
              className="w-full"
            />
          </div>
          <p className="mt-2 text-center text-xs text-papal-navy/40">
            Las ubicaciones exactas de los actos se publicaran en las semanas previas
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
                  <p>Avion: 1h 20min</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium text-papal-navy">Barcelona &rarr; Gran Canaria</span>
                <div className="text-right text-xs text-papal-navy/60">
                  <p>Avion: 3h 30min</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm font-medium text-papal-navy">Gran Canaria &rarr; Tenerife</span>
                <div className="text-right text-xs text-papal-navy/60">
                  <p>Avion: 30min</p>
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
