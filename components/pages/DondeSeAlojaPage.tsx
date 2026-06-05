import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getAlternates } from '@/lib/i18n-metadata'

const META: Partial<Record<Locale, { title: string; description: string }>> = {
  es: {
    title: '¿Dónde se aloja el Papa en Madrid y Barcelona? Nunciatura',
    description:
      'Dónde duerme el Papa León XIV durante su visita a España: la Nunciatura Apostólica de Madrid y los Palacios Episcopales de Barcelona y Las Palmas de Gran Canaria.',
  },
  en: {
    title: 'Where does the Pope stay in Madrid and Barcelona?',
    description:
      'Where Pope Leo XIV sleeps during his visit to Spain: the Apostolic Nunciature in Madrid and the Episcopal Palaces of Barcelona and Las Palmas de Gran Canaria.',
  },
}

export function getDondeSeAlojaMeta(locale: Locale): Metadata {
  const m = META[locale] || META.en!
  return { ...m, alternates: getAlternates('/donde-se-aloja-el-papa', locale) }
}

const LUGARES_ES = [
  { ciudad: 'Madrid', lugar: 'Nunciatura Apostólica', texto: 'En Madrid, León XIV se aloja en la Nunciatura Apostólica, la sede diplomática de la Santa Sede en España. Es la residencia habitual de los Papas en sus viajes a Madrid (también lo fue de Juan Pablo II y Benedicto XVI). Dispone de un área reservada de huéspedes ilustres, despacho, comedor y capilla privada.' },
  { ciudad: 'Barcelona', lugar: 'Palacio Episcopal', texto: 'En Barcelona, el Papa pernocta en el Palacio Episcopal, residencia oficial del arzobispo de la ciudad, en pleno Barrio Gótico, frente a la Plaça Nova y junto a la Catedral de la Santa Creu.' },
  { ciudad: 'Gran Canaria', lugar: 'Palacio Episcopal de Las Palmas', texto: 'En Canarias, León XIV se aloja en el Palacio Episcopal de Las Palmas de Gran Canaria, situado junto a la Catedral de Santa Ana, en el histórico barrio de Vegueta.' },
]
const LUGARES_EN = [
  { ciudad: 'Madrid', lugar: 'Apostolic Nunciature', texto: 'In Madrid, Leo XIV stays at the Apostolic Nunciature, the Holy See’s diplomatic mission in Spain. It is the usual residence of Popes on their visits to Madrid (as it was for John Paul II and Benedict XVI). It has a reserved distinguished-guests area, office, dining room and private chapel.' },
  { ciudad: 'Barcelona', lugar: 'Episcopal Palace', texto: 'In Barcelona, the Pope stays at the Episcopal Palace, the official residence of the city’s archbishop, in the heart of the Gothic Quarter, facing Plaça Nova and next to the Cathedral.' },
  { ciudad: 'Gran Canaria', lugar: 'Episcopal Palace of Las Palmas', texto: 'In the Canary Islands, Leo XIV stays at the Episcopal Palace of Las Palmas de Gran Canaria, next to Santa Ana Cathedral, in the historic Vegueta district.' },
]

export default function DondeSeAlojaPage({ locale }: { locale: Locale }) {
  const isEs = locale === 'es'
  const lugares = isEs ? LUGARES_ES : LUGARES_EN
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">
            {isEs ? 'Alojamiento del Papa' : 'Where the Pope stays'}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            {isEs ? '¿Dónde se aloja el Papa durante su visita a España?' : 'Where does the Pope stay during his visit to Spain?'}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            {isEs
              ? 'Durante el viaje (6-12 de junio de 2026), el Papa León XIV duerme en la Nunciatura Apostólica de Madrid y en los Palacios Episcopales de Barcelona y Las Palmas.'
              : 'During the journey (6-12 June 2026), Pope Leo XIV sleeps at the Apostolic Nunciature in Madrid and at the Episcopal Palaces of Barcelona and Las Palmas.'}
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            {isEs
              ? 'Una de las preguntas más buscadas estos días es dónde duerme el Papa durante su estancia en España. A diferencia de los hoteles, el Pontífice se aloja en sedes eclesiásticas y diplomáticas, por motivos de protocolo y seguridad. Estos son sus tres alojamientos:'
              : 'One of the most searched questions these days is where the Pope sleeps during his stay in Spain. Unlike hotels, the Pontiff stays in ecclesiastical and diplomatic venues, for protocol and security reasons. These are his three accommodations:'}
          </p>

          {lugares.map((a) => (
            <div key={a.ciudad} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <h2 className="font-heading text-2xl font-bold text-papal-navy">{a.ciudad}</h2>
                <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-sm font-semibold text-papal-gold-dark">{a.lugar}</span>
              </div>
              <p className="mt-3">{a.texto}</p>
            </div>
          ))}

          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
              {isEs ? '¿Qué es la Nunciatura Apostólica de Madrid?' : 'What is the Apostolic Nunciature of Madrid?'}
            </h2>
            <p>
              {isEs
                ? 'La Nunciatura Apostólica es la embajada de la Santa Sede ante el Reino de España y la residencia del Nuncio (el embajador del Papa). Cuando el Pontífice visita Madrid, se convierte en su «cuartel general»: desde allí se desplaza a los distintos actos. Es un edificio discreto y de acceso restringido, con dispositivo de seguridad reforzado durante la visita.'
                : 'The Apostolic Nunciature is the Holy See’s embassy to the Kingdom of Spain and the residence of the Nuncio (the Pope’s ambassador). When the Pontiff visits Madrid, it becomes his «headquarters»: from there he travels to the various events. It is a discreet, restricted-access building with reinforced security during the visit.'}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            {isEs
              ? 'Fuentes: información publicada por Telecinco, OKDIARIO y Arquitectura y Diseño (junio de 2026).'
              : 'Sources: reporting by Telecinco, OKDIARIO and Arquitectura y Diseño (June 2026).'}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href={localizePath('/programa', locale)} className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              {isEs ? 'Ver el programa completo' : 'See the full schedule'}
            </Link>
            <Link href={localizePath('/cortes-trafico', locale)} className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              {isEs ? 'Cortes de tráfico y metro' : 'Traffic and metro closures'}
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
