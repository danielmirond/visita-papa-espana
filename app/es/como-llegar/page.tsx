import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import BannerPlaceholder from '@/components/affiliate/BannerPlaceholder'
import { cityTransports } from '@/data/transporte'
import { getAffiliateById } from '@/data/affiliates'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('como-llegar', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/como-llegar', 'es'),
}

export default function ComoLlegarPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Cómo llegar
          </h1>
          <p className="mt-3 text-white/70">
            Guía de transporte para llegar a las ciudades de la visita papal
          </p>
        </Container>
      </section>

      {/* Índice */}
      <section className="border-b border-papal-gold/10 bg-papal-cream">
        <Container className="py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {cityTransports.map((city) => (
              <a
                key={city.citySlug}
                href={`#${city.citySlug}`}
                className="rounded-full border border-papal-gold/30 px-4 py-1.5 text-xs font-medium text-papal-navy transition-colors hover:bg-papal-gold hover:text-white"
              >
                {city.cityName}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        {/* Intro general */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-papal-navy/70">
            El Papa León XIV visitará cuatro ciudades del 6 al 12 de junio de 2026.
            A continuación encontrará toda la información sobre cómo llegar a cada una,
            el transporte público local y las afectaciones de tráfico previstas.
          </p>
        </div>

        {/* Banner afiliación general */}
        <div className="mb-10">
          <BannerPlaceholder size="728x90" label="Reserva tus billetes con antelación" />
        </div>

        {/* Secciones por ciudad */}
        <div className="space-y-12">
          {cityTransports.map((city) => (
            <section key={city.citySlug} id={city.citySlug} className="scroll-mt-20">
              <div className="mb-6 border-b border-papal-gold/20 pb-4">
                <h2 className="font-heading text-2xl font-bold text-papal-navy">
                  {city.cityName}
                </h2>
                <p className="mt-1 text-sm text-papal-navy/60">
                  Aeropuerto: {city.airport} ({city.airportCode})
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Llegar desde otras ciudades */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="mb-3 font-heading text-lg font-bold text-papal-navy">
                      Cómo llegar desde otras ciudades
                    </h3>
                    <div className="space-y-2">
                      {city.fromCities.map((option, i) => {
                        const affiliate = option.affiliateId
                          ? getAffiliateById(option.affiliateId)
                          : null
                        return (
                          <div
                            key={i}
                            className="flex flex-col gap-2 rounded-lg border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-papal-navy">{option.name}</p>
                              <p className="mt-0.5 text-sm text-papal-navy/60">
                                {option.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="rounded bg-papal-cream px-2 py-0.5 text-xs font-medium text-papal-navy">
                                {option.duration}
                              </span>
                              {affiliate && (
                                <a
                                  href={affiliate.url}
                                  target="_blank"
                                  rel="nofollow sponsored noopener"
                                  className="rounded-lg bg-papal-gold px-3 py-1.5 text-xs font-bold text-papal-navy hover:bg-papal-gold-light"
                                >
                                  Reservar
                                </a>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Transporte local */}
                  <div>
                    <h3 className="mb-3 font-heading text-lg font-bold text-papal-navy">
                      Transporte local
                    </h3>
                    <ul className="space-y-1.5">
                      {city.localTransport.map((t, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-papal-navy/70"
                        >
                          <span className="mt-0.5 text-papal-gold">&bull;</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info especial visita papal */}
                  <div className="rounded-xl bg-papal-cream p-5">
                    <h3 className="font-heading text-base font-bold text-papal-navy">
                      Servicios especiales para la visita papal
                    </h3>
                    <p className="mt-2 text-sm text-papal-navy/70">{city.specialInfo}</p>
                  </div>

                  {/* Cortes de tráfico */}
                  <div className="rounded-xl border border-papal-gold/30 bg-white p-5">
                    <h3 className="font-heading text-base font-bold text-papal-navy">
                      Afectaciones de tráfico
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {city.trafficClosures.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-papal-navy/70"
                        >
                          <span className="mt-0.5 text-papal-gold">&mdash;</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-papal-navy/40">
                      Información orientativa. Se recomienda consultar las fuentes oficiales
                      los días previos.
                    </p>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-4">
                  <div className="rounded-xl border border-papal-gold/20 bg-white p-5">
                    <h4 className="font-heading text-sm font-bold text-papal-navy">
                      Ver programa en {city.cityName}
                    </h4>
                    <Link
                      href={`/ciudades/${city.citySlug}`}
                      className="mt-2 block text-sm font-medium text-papal-gold hover:underline"
                    >
                      Actos y ubicaciones &rarr;
                    </Link>
                  </div>
                  <BannerPlaceholder size="300x250" label={`Hoteles en ${city.cityName}`} />
                </aside>
              </div>
            </section>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 rounded-xl bg-papal-cream p-6 text-center sm:p-8">
          <h2 className="font-heading text-xl font-bold text-papal-navy">
            ¿Necesita alojamiento?
          </h2>
          <p className="mt-2 text-sm text-papal-navy/60">
            Consulte nuestra guía completa con recomendaciones por zona y consejos prácticos.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/como-asistir"
              className="rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
            >
              Guía de asistencia
            </Link>
            <Link
              href="/ciudades"
              className="rounded-lg border border-papal-navy/20 px-5 py-2 text-sm font-bold text-papal-navy hover:bg-white"
            >
              Información por ciudad
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
