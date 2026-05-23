import Link from 'next/link'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

/**
 * Bloque «Entradas e inscripciones por ciudad» para /como-asistir.
 *
 * Captura queries de Search Console como «entradas papa España»,
 * «papa Cibeles entradas», «inscripción Bernabéu Papa», etc.
 *
 * Cada acto enlaza al detalle de la ciudad o a la landing específica
 * (papa-bernabeu, vigilia-plaza-lima) y a la plataforma oficial de
 * inscripciones conelpapa.es.
 */

interface Props {
  locale: Locale
}

type EventCard = {
  city: string
  date: string
  time: string
  venue: string
  capacity: string
  type: 'open' | 'reg' | 'limited'
  page: string // ruta interna canónica para Link
}

const REG_URL = 'https://inscripciones.conelpapa.es'

const EVENTS_ES: EventCard[] = [
  { city: 'Madrid', date: '6 jun', time: '20:30', venue: 'Vigilia juvenil · Plaza de Lima', capacity: 'Aforo abierto', type: 'open', page: '/vigilia-plaza-lima' },
  { city: 'Madrid', date: '7 jun', time: '10:00', venue: 'Misa Corpus Christi · Plaza de Cibeles', capacity: 'Aforo libre + inscripción', type: 'reg', page: '/ciudades/madrid' },
  { city: 'Madrid', date: '7 jun', time: '18:00', venue: '«Tejer redes» · Movistar Arena', capacity: 'Aforo limitado', type: 'limited', page: '/ciudades/madrid' },
  { city: 'Madrid', date: '8 jun', time: '19:00', venue: 'Encuentro diocesano · Estadio Santiago Bernabéu', capacity: 'Inscripción obligatoria', type: 'reg', page: '/papa-bernabeu' },
  { city: 'Barcelona', date: '9 jun', time: '20:00', venue: 'Vigilia · Estadio Olímpico Lluís Companys', capacity: 'Inscripción obligatoria', type: 'reg', page: '/ciudades/barcelona' },
  { city: 'Barcelona', date: '10 jun', time: '19:30', venue: 'Misa Sagrada Familia · Torre de Jesucristo', capacity: 'Aforo muy limitado', type: 'limited', page: '/ciudades/barcelona' },
  { city: 'Gran Canaria', date: '11 jun', time: '18:30', venue: 'Eucaristía · Estadio de Gran Canaria', capacity: 'Aforo abierto con inscripción', type: 'reg', page: '/ciudades/gran-canaria' },
  { city: 'Tenerife', date: '12 jun', time: '12:15', venue: 'Misa de clausura · Puerto de Santa Cruz', capacity: 'Aforo abierto con inscripción', type: 'reg', page: '/ciudades/tenerife' },
]

const TXT: Record<Locale, {
  title: string
  intro: string
  colDate: string
  colVenue: string
  colCapacity: string
  colAction: string
  detailBtn: string
  registerBtn: string
  badgeOpen: string
  badgeReg: string
  badgeLimited: string
  footnote: string
}> = {
  es: { title: 'Entradas e inscripciones por ciudad', intro: 'Listado de los actos masivos abiertos al público con inscripción gratuita en la plataforma oficial inscripciones.conelpapa.es. La inscripción no garantiza plaza: el orden y la disponibilidad de aforo determinan el acceso.', colDate: 'Fecha y hora', colVenue: 'Acto y lugar', colCapacity: 'Aforo', colAction: 'Inscripción', detailBtn: 'Ver detalle', registerBtn: 'Inscribirse →', badgeOpen: 'Abierto', badgeReg: 'Inscripción', badgeLimited: 'Aforo limitado', footnote: 'La plataforma oficial es inscripciones.conelpapa.es. Recomendamos inscribirse cuanto antes: los grupos parroquiales tienen prioridad de asignación.' },
  en: { title: 'Tickets and registration by city', intro: 'List of public events with free registration on the official platform inscripciones.conelpapa.es. Registration does not guarantee a place: order and venue capacity determine access.', colDate: 'Date and time', colVenue: 'Event and venue', colCapacity: 'Capacity', colAction: 'Registration', detailBtn: 'See detail', registerBtn: 'Register →', badgeOpen: 'Open', badgeReg: 'Registration', badgeLimited: 'Limited capacity', footnote: 'The official platform is inscripciones.conelpapa.es. We recommend registering as soon as possible: parish groups have priority allocation.' },
  it: { title: 'Biglietti e iscrizioni per città', intro: 'Elenco degli atti di massa aperti al pubblico con iscrizione gratuita sulla piattaforma ufficiale inscripciones.conelpapa.es. L\'iscrizione non garantisce il posto: l\'ordine e la disponibilità della capienza determinano l\'accesso.', colDate: 'Data e ora', colVenue: 'Atto e luogo', colCapacity: 'Capienza', colAction: 'Iscrizione', detailBtn: 'Vedi dettaglio', registerBtn: 'Iscriviti →', badgeOpen: 'Aperto', badgeReg: 'Iscrizione', badgeLimited: 'Capienza limitata', footnote: 'La piattaforma ufficiale è inscripciones.conelpapa.es. Raccomandiamo di iscriversi quanto prima: i gruppi parrocchiali hanno priorità di assegnazione.' },
  fr: { title: 'Billets et inscriptions par ville', intro: 'Liste des actes publics avec inscription gratuite sur la plateforme officielle inscripciones.conelpapa.es. L\'inscription ne garantit pas la place : l\'ordre et la disponibilité de capacité déterminent l\'accès.', colDate: 'Date et heure', colVenue: 'Acte et lieu', colCapacity: 'Capacité', colAction: 'Inscription', detailBtn: 'Voir détail', registerBtn: 'S\'inscrire →', badgeOpen: 'Ouvert', badgeReg: 'Inscription', badgeLimited: 'Capacité limitée', footnote: 'La plateforme officielle est inscripciones.conelpapa.es. Nous recommandons de s\'inscrire au plus tôt : les groupes paroissiaux ont priorité d\'attribution.' },
  de: { title: 'Eintrittskarten und Anmeldung nach Stadt', intro: 'Liste der öffentlichen Massenakte mit kostenloser Anmeldung auf der offiziellen Plattform inscripciones.conelpapa.es. Die Anmeldung garantiert keinen Platz: Reihenfolge und Kapazität bestimmen den Zugang.', colDate: 'Datum und Uhrzeit', colVenue: 'Akt und Ort', colCapacity: 'Kapazität', colAction: 'Anmeldung', detailBtn: 'Detail ansehen', registerBtn: 'Anmelden →', badgeOpen: 'Offen', badgeReg: 'Anmeldung', badgeLimited: 'Begrenzte Kapazität', footnote: 'Die offizielle Plattform ist inscripciones.conelpapa.es. Wir empfehlen, sich so früh wie möglich anzumelden: Pfarrgruppen haben Vorrang bei der Zuteilung.' },
  pt: { title: 'Bilhetes e inscrições por cidade', intro: 'Lista dos atos públicos com inscrição gratuita na plataforma oficial inscripciones.conelpapa.es. A inscrição não garante lugar: a ordem e a disponibilidade de lotação determinam o acesso.', colDate: 'Data e hora', colVenue: 'Ato e local', colCapacity: 'Lotação', colAction: 'Inscrição', detailBtn: 'Ver detalhe', registerBtn: 'Inscrever-se →', badgeOpen: 'Aberto', badgeReg: 'Inscrição', badgeLimited: 'Lotação limitada', footnote: 'A plataforma oficial é inscripciones.conelpapa.es. Recomendamos inscrever-se o quanto antes: os grupos paroquiais têm prioridade de atribuição.' },
  ca: { title: 'Entrades i inscripcions per ciutat', intro: 'Llista dels actes massius oberts al públic amb inscripció gratuïta a la plataforma oficial inscripciones.conelpapa.es. La inscripció no garanteix plaça: l\'ordre i la disponibilitat d\'aforament determinen l\'accés.', colDate: 'Data i hora', colVenue: 'Acte i lloc', colCapacity: 'Aforament', colAction: 'Inscripció', detailBtn: 'Veure detall', registerBtn: 'Inscriure\'s →', badgeOpen: 'Obert', badgeReg: 'Inscripció', badgeLimited: 'Aforament limitat', footnote: 'La plataforma oficial és inscripciones.conelpapa.es. Recomanem inscriure\'s com més aviat millor: els grups parroquials tenen prioritat d\'assignació.' },
  gl: { title: 'Entradas e inscricións por cidade', intro: 'Listaxe dos actos masivos abertos ao público con inscrición gratuíta na plataforma oficial inscripciones.conelpapa.es. A inscrición non garante praza: a orde e a dispoñibilidade de aforo determinan o acceso.', colDate: 'Data e hora', colVenue: 'Acto e lugar', colCapacity: 'Aforo', colAction: 'Inscrición', detailBtn: 'Ver detalle', registerBtn: 'Inscribirse →', badgeOpen: 'Aberto', badgeReg: 'Inscrición', badgeLimited: 'Aforo limitado', footnote: 'A plataforma oficial é inscripciones.conelpapa.es. Recomendamos inscribirse canto antes: os grupos parroquiais teñen prioridade de asignación.' },
  eu: { title: 'Sarrerak eta izen-ematea hiriz hiri', intro: 'Publikoarentzat irekita dauden masa-ekitaldien zerrenda, doako izen-emateaz hornituta inscripciones.conelpapa.es plataforma ofizialean. Izen-emateak ez du lekua bermatzen: ordenak eta edukieraren erabilgarritasunak erabakitzen dute sarbidea.', colDate: 'Data eta ordua', colVenue: 'Ekitaldia eta lekua', colCapacity: 'Edukiera', colAction: 'Izen-ematea', detailBtn: 'Xehetasunak', registerBtn: 'Izena eman →', badgeOpen: 'Irekia', badgeReg: 'Izen-ematea', badgeLimited: 'Edukiera mugatua', footnote: 'Plataforma ofiziala inscripciones.conelpapa.es da. Ahalik eta lasterren izena ematea gomendatzen dugu: parrokia-taldeek esleipen-lehentasuna dute.' },
}

export default function EntradasPorCiudad({ locale }: Props) {
  const t = TXT[locale] || TXT.es

  return (
    <section id="entradas" className="scroll-mt-20">
      <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
        🎟️ {t.title}
      </h2>
      <p className="text-sm text-papal-navy/70">{t.intro}</p>

      <div className="mt-4 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-papal-navy/10 text-xs uppercase tracking-wide text-papal-navy/60">
              <th className="px-3 py-2 text-left">{t.colDate}</th>
              <th className="px-3 py-2 text-left">{t.colVenue}</th>
              <th className="px-3 py-2 text-left">{t.colCapacity}</th>
              <th className="px-3 py-2 text-left">{t.colAction}</th>
            </tr>
          </thead>
          <tbody>
            {EVENTS_ES.map((ev, i) => {
              const badge =
                ev.type === 'open'
                  ? { label: t.badgeOpen, color: 'bg-green-100 text-green-800' }
                  : ev.type === 'limited'
                    ? { label: t.badgeLimited, color: 'bg-amber-100 text-amber-800' }
                    : { label: t.badgeReg, color: 'bg-blue-100 text-blue-800' }
              return (
                <tr key={i} className="border-b border-gray-100 hover:bg-papal-cream/30">
                  <td className="px-3 py-3 align-top">
                    <span className="block font-bold text-papal-navy">{ev.date}</span>
                    <span className="text-xs text-papal-navy/60">{ev.time}</span>
                  </td>
                  <td className="px-3 py-3 align-top">
                    <span className="block font-medium text-papal-navy">{ev.venue}</span>
                    <span className="text-xs text-papal-navy/60">{ev.city}</span>
                  </td>
                  <td className="px-3 py-3 align-top">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${badge.color}`}>{badge.label}</span>
                  </td>
                  <td className="px-3 py-3 align-top">
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                      <Link
                        href={localizePath(ev.page, locale)}
                        className="rounded border border-papal-navy/20 px-2 py-1 text-center text-xs text-papal-navy hover:bg-papal-cream"
                      >
                        {t.detailBtn}
                      </Link>
                      <a
                        href={REG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-papal-gold px-2 py-1 text-center text-xs font-bold text-papal-navy hover:bg-papal-gold-light"
                      >
                        {t.registerBtn}
                      </a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-papal-navy/60">{t.footnote}</p>
    </section>
  )
}
