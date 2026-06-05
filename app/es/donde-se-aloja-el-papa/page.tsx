import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: '¿Dónde se aloja el Papa en Madrid y Barcelona? Nunciatura',
  description:
    'Dónde duerme el Papa León XIV durante su visita a España: la Nunciatura Apostólica de Madrid y los Palacios Episcopales de Barcelona y Las Palmas de Gran Canaria.',
  alternates: { canonical: `${siteConfig.url}/es/donde-se-aloja-el-papa` },
}

const ALOJAMIENTOS = [
  {
    ciudad: 'Madrid',
    lugar: 'Nunciatura Apostólica',
    texto:
      'En Madrid, León XIV se aloja en la Nunciatura Apostólica, la sede diplomática de la Santa Sede en España. Es la residencia habitual de los Papas en sus viajes a Madrid (también lo fue de Juan Pablo II y Benedicto XVI). Dispone de un área reservada de huéspedes ilustres, despacho, comedor y capilla privada.',
  },
  {
    ciudad: 'Barcelona',
    lugar: 'Palacio Episcopal',
    texto:
      'En Barcelona, el Papa pernocta en el Palacio Episcopal, residencia oficial del arzobispo de la ciudad, en pleno Barrio Gótico, frente a la Plaça Nova y junto a la Catedral de la Santa Creu.',
  },
  {
    ciudad: 'Gran Canaria',
    lugar: 'Palacio Episcopal de Las Palmas',
    texto:
      'En Canarias, León XIV se aloja en el Palacio Episcopal de Las Palmas de Gran Canaria, situado junto a la Catedral de Santa Ana, en el histórico barrio de Vegueta.',
  },
]

export default function DondeSeAlojaPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Alojamiento del Papa</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            ¿Dónde se aloja el Papa durante su visita a España?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Durante el viaje (6-12 de junio de 2026), el Papa León XIV duerme en la Nunciatura Apostólica de Madrid y
            en los Palacios Episcopales de Barcelona y Las Palmas.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            Una de las preguntas más buscadas estos días es <strong>dónde duerme el Papa</strong> durante su estancia
            en España. A diferencia de los hoteles, el Pontífice se aloja en sedes eclesiásticas y diplomáticas, por
            motivos de protocolo y seguridad. Estos son sus tres alojamientos:
          </p>

          {ALOJAMIENTOS.map((a) => (
            <div key={a.ciudad} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <h2 className="font-heading text-2xl font-bold text-papal-navy">{a.ciudad}</h2>
                <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-sm font-semibold text-papal-gold-dark">
                  {a.lugar}
                </span>
              </div>
              <p className="mt-3">{a.texto}</p>
            </div>
          ))}

          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
              ¿Qué es la Nunciatura Apostólica de Madrid?
            </h2>
            <p>
              La Nunciatura Apostólica es la embajada de la Santa Sede ante el Reino de España y la residencia del
              Nuncio (el embajador del Papa). Cuando el Pontífice visita Madrid, se convierte en su «cuartel general»:
              desde allí se desplaza a los distintos actos. Es un edificio discreto y de acceso restringido, con
              dispositivo de seguridad reforzado durante la visita.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Fuentes: información publicada por Telecinco, OKDIARIO y Arquitectura y Diseño (junio de 2026).
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/programa" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Ver el programa completo
            </Link>
            <Link href="/es/cortes-trafico" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Cortes de tráfico y metro
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
