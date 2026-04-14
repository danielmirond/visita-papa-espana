import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { cities } from '@/data/cities'
import { schedule } from '@/data/schedule'
import { formatDateShort } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Ciudades de la visita',
  description: 'Madrid, Barcelona, Gran Canaria y Tenerife: las cuatro ciudades que visitara el Papa Leon XIV en junio de 2026. Informacion practica, transporte y alojamiento.',
}

const CITY_GRADIENTS: Record<string, string> = {
  madrid: 'from-red-600 to-red-800',
  barcelona: 'from-blue-600 to-blue-800',
  'gran-canaria': 'from-yellow-600 to-amber-700',
  tenerife: 'from-emerald-600 to-emerald-800',
}

export default function CiudadesPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ciudades de la visita
          </h1>
          <p className="mt-3 text-white/70">
            El Papa Leon XIV visitara 4 ciudades en 7 dias
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-8">
          {cities.map((city) => {
            const citySchedule = schedule.filter((d) => d.citySlug === city.slug)
            const totalEvents = citySchedule.reduce((acc, d) => acc + d.events.length, 0)

            return (
              <Link
                key={city.slug}
                href={`/ciudades/${city.slug}`}
                className="group block overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`bg-gradient-to-r ${CITY_GRADIENTS[city.slug]} p-6 text-white sm:p-8`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                        {city.name}
                      </h2>
                      <p className="text-sm text-white/80">{city.region}</p>
                    </div>
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      {formatDateShort(city.papalDates.start)}
                      {city.papalDates.start !== city.papalDates.end && (
                        <> - {formatDateShort(city.papalDates.end)}</>
                      )}
                      <span className="ml-2 text-white/70">&middot; {totalEvents} actos</span>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
                    {city.description}
                  </p>
                </div>
                <div className="bg-white p-5">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-papal-navy/50">
                    Actos destacados
                  </h3>
                  <ul className="grid gap-1 sm:grid-cols-2">
                    {city.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-papal-navy/70">
                        <span className="mt-0.5 text-papal-gold">&#x271D;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm font-medium text-papal-gold group-hover:underline">
                    Ver toda la informacion de {city.name} &rarr;
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}
