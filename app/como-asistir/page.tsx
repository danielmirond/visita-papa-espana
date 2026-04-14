import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/data/siteConfig'
import { affiliates } from '@/data/affiliates'

export const metadata: Metadata = {
  title: 'Cómo asistir a la visita del Papa',
  description: 'Guía práctica para asistir a la visita del Papa León XIV a España: inscripción, transporte, alojamiento, qué llevar y recomendaciones para los actos.',
}

export default function ComoAsistirPage() {
  const hoteles = affiliates.filter((a) => a.category === 'hotel')
  const transporte = affiliates.filter((a) => a.category === 'transporte')
  const seguros = affiliates.filter((a) => a.category === 'seguro')

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Cómo asistir
          </h1>
          <p className="mt-3 text-white/70">
            Guía práctica para asistir a los actos de la visita papal
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            {/* Inscripción */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                1. Inscripción
              </h2>
              <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-6">
                <p className="text-papal-navy/80">
                  Los actos públicos son <strong>gratuitos</strong> pero requieren <strong>inscripción previa</strong> por motivos de aforo y seguridad.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-papal-navy/70">
                    <span className="mt-0.5 font-bold text-papal-gold">1</span>
                    Visita la web oficial de inscripción de cada ciudad
                  </li>
                  <li className="flex items-start gap-2 text-sm text-papal-navy/70">
                    <span className="mt-0.5 font-bold text-papal-gold">2</span>
                    Selecciona los actos a los que quieres asistir
                  </li>
                  <li className="flex items-start gap-2 text-sm text-papal-navy/70">
                    <span className="mt-0.5 font-bold text-papal-gold">3</span>
                    Completa el formulario con tus datos
                  </li>
                  <li className="flex items-start gap-2 text-sm text-papal-navy/70">
                    <span className="mt-0.5 font-bold text-papal-gold">4</span>
                    Recibirás un correo de confirmación con tu acreditación
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={siteConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
                  >
                    Inscripción Madrid
                  </a>
                  <a
                    href={siteConfig.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-bold text-papal-navy hover:bg-gray-50"
                  >
                    Web oficial
                  </a>
                </div>
              </div>
            </section>

            {/* Transporte */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                2. Transporte
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">En tren (AVE)</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">
                    La mejor opción para Madrid y Barcelona. El AVE conecta las principales ciudades españolas.
                    Madrid-Barcelona en 2h30, Sevilla-Madrid en 2h30, Valencia-Madrid en 1h40.
                  </p>
                  <p className="mt-1 text-sm text-papal-navy/70">
                    <strong>Consejo:</strong> reserva con la máxima antelación posible para mejores precios.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">En avión</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">
                    Imprescindible para llegar a Canarias. Vuelos directos desde Madrid y Barcelona a Gran Canaria (LPA) y Tenerife (TFN/TFS).
                    También hay vuelos interinsulares entre Gran Canaria y Tenerife (30 min).
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 p-5">
                  <h3 className="font-bold text-papal-navy">Transporte local</h3>
                  <p className="mt-1 text-sm text-papal-navy/70">
                    Se reforzará el transporte público en todas las ciudades durante la visita.
                    Metro, bus y cercanías ampliarán horarios y frecuencias.
                    El coche particular no es recomendable por los cortes de tráfico.
                  </p>
                </div>
              </div>
            </section>

            {/* Alojamiento */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                3. Alojamiento
              </h2>
              <p className="text-papal-navy/70">
                La demanda de alojamiento será muy alta. Reserva lo antes posible.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {hoteles.map((hotel) => (
                  <a
                    key={hotel.id}
                    href={hotel.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="rounded-lg border border-papal-gold/20 p-4 transition-colors hover:bg-papal-cream"
                  >
                    <p className="font-bold text-papal-navy">{hotel.displayName}</p>
                    <p className="mt-1 text-xs text-papal-navy/60">{hotel.description}</p>
                    <p className="mt-2 text-xs font-medium text-papal-gold">
                      Ver ofertas &rarr;
                    </p>
                  </a>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-papal-navy/40">
                Enlaces patrocinados
              </p>
            </section>

            {/* Qué llevar */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                4. Qué llevar
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4">
                  <h3 className="font-bold text-green-800">Imprescindible</h3>
                  <ul className="mt-2 space-y-1 text-sm text-green-700">
                    <li>&bull; Acreditación/inscripción impresa o en móvil</li>
                    <li>&bull; DNI o pasaporte</li>
                    <li>&bull; Agua (al menos 1,5 litros)</li>
                    <li>&bull; Protección solar (crema, gorra, gafas)</li>
                    <li>&bull; Calzado cómodo</li>
                    <li>&bull; Batería externa para el móvil</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-amber-50 p-4">
                  <h3 className="font-bold text-amber-800">Recomendable</h3>
                  <ul className="mt-2 space-y-1 text-sm text-amber-700">
                    <li>&bull; Esterilla o cojín para sentarse</li>
                    <li>&bull; Comida ligera (fruta, bocadillo)</li>
                    <li>&bull; Paraguas plegable (por si acaso)</li>
                    <li>&bull; Rosario o artículos religiosos</li>
                    <li>&bull; Banderas o pancartas permitidas</li>
                    <li>&bull; Ropa de manga larga para las vigilias</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Voluntariado */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                5. Voluntariado
              </h2>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-blue-800">
                  La organización necesita <strong>miles de voluntarios</strong> en cada ciudad para tareas de acogida,
                  hospitality, apoyo logístico y atención a los asistentes.
                </p>
                <p className="mt-2 text-sm text-blue-700">
                  En Madrid se buscan <strong>10.000 voluntarios</strong>. Es una forma única de vivir la visita desde dentro.
                </p>
                <a
                  href={siteConfig.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Información sobre voluntariado
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
              <h3 className="font-heading text-lg font-bold text-papal-navy">Fechas clave</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">7 abril:</strong> Apertura inscripciones Madrid
                </li>
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">24 abril:</strong> Cierre inscripción voluntarios Madrid
                </li>
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">6-8 junio:</strong> Visita a Madrid
                </li>
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">9-10 junio:</strong> Visita a Barcelona
                </li>
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">11 junio:</strong> Gran Canaria
                </li>
                <li className="text-papal-navy/70">
                  <strong className="text-papal-navy">12 junio:</strong> Tenerife
                </li>
              </ul>
            </div>

            {/* Transporte afiliados */}
            {transporte.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">Transporte</h3>
                <div className="mt-3 space-y-3">
                  {transporte.map((t) => (
                    <a
                      key={t.id}
                      href={t.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                    >
                      <p className="font-medium text-papal-navy">{t.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{t.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">Enlaces patrocinados</p>
              </div>
            )}

            {/* Seguro */}
            {seguros.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">Seguro de viaje</h3>
                {seguros.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="mt-3 block rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
                  >
                    <p className="font-medium text-papal-navy">{s.displayName}</p>
                    <p className="mt-1 text-xs text-papal-navy/60">{s.description}</p>
                  </a>
                ))}
                <p className="mt-2 text-[10px] text-papal-navy/40">Enlace patrocinado</p>
              </div>
            )}

            {/* Dónde ver */}
            <div className="rounded-xl bg-papal-navy p-5 text-white">
              <h3 className="font-heading text-lg font-bold">Retransmisión en directo</h3>
              <p className="mt-1 text-sm text-white/70">
                Toda la visita podrá seguirse en directo por televisión y plataformas digitales.
              </p>
              <Link
                href="/donde-ver"
                className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                Dónde seguir la visita
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
