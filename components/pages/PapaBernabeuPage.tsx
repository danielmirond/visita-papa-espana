import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type AgendaItem = { time: string; text: string; highlight?: boolean }
type PracticalItem = { label: string; value: string }
type RelatedLink = { href: string; text: string }
type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  historyTitle: string
  historyBody: string
  agendaTitle: string
  agendaIntro: string
  agenda: AgendaItem[]
  practicalTitle: string
  practicalItems: PracticalItem[]
  relatedTitle: string
  relatedLinks: RelatedLink[]
}

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Papa en el Bernabéu',
    title: 'El Papa León XIV en el Estadio Santiago Bernabéu — encuentro diocesano del 8 de junio',
    subtitle: 'Lunes 8 de junio de 2026 · 19:00 h · Santiago Bernabéu, Madrid',
    intro:
      'El lunes 8 de junio de 2026, el Estadio Santiago Bernabéu acogerá uno de los actos centrales del Viaje Apostólico del Papa León XIV a España: el encuentro multitudinario del Santo Padre con la comunidad diocesana de Madrid. Es la segunda vez en la historia que un Papa preside un acto en este estadio, tras la histórica visita de san Juan Pablo II el 3 de noviembre de 1982.',
    historyTitle: 'Antecedente: san Juan Pablo II en 1982',
    historyBody:
      'El 3 de noviembre de 1982, durante su primer Viaje Apostólico a España, san Juan Pablo II celebró un acto multitudinario en el Estadio Santiago Bernabéu con más de 90.000 fieles. Aquel encuentro marcó un hito en la memoria pastoral del Madrid católico y abrió la tradición del Bernabéu como recinto de actos eclesiales de gran convocatoria. Cuarenta y cuatro años después, el Papa León XIV vuelve al mismo estadio para encontrarse con la comunidad diocesana de Madrid en el contexto del centenario aproximado de aquel primer viaje papal.',
    agendaTitle: 'Agenda del 8 de junio',
    agendaIntro: 'Programa oficial publicado por la Conferencia Episcopal Española y la Sala de Prensa de la Santa Sede.',
    agenda: [
      { time: '09:30', text: 'Audiencia con el Presidente del Gobierno · Nunciatura Apostólica' },
      { time: '10:30', text: 'Discurso ante los parlamentarios · Congreso de los Diputados' },
      { time: '12:30', text: 'Encuentro con los obispos · Sede de la Conferencia Episcopal Española' },
      { time: '17:00', text: 'Oración mariana · Catedral de Santa María la Real de la Almudena' },
      { time: '19:00', text: 'Encuentro diocesano con el Papa · Estadio Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Información práctica',
    practicalItems: [
      { label: 'Fecha', value: 'Lunes 8 de junio de 2026' },
      { label: 'Hora', value: '19:00 (apertura de puertas: 16:00)' },
      { label: 'Lugar', value: 'Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacidad', value: 'Aproximadamente 78.000 personas (acto cubierto)' },
      { label: 'Inscripción', value: 'Obligatoria a través de madrid.conelpapa.es' },
      { label: 'Acceso', value: 'Gratuito con credencial · controles de seguridad en accesos' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Retransmisión', value: 'TVE La 1, COPE, RNE y streaming en vaticannews.va' },
    ],
    relatedTitle: 'Otros actos en Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo del viaje' },
      { href: '/ciudades/madrid', text: 'Madrid: actos completos del 6-9 junio' },
      { href: '/como-asistir', text: 'Cómo asistir e inscribirse' },
      { href: '/que-llevar', text: 'Qué llevar al acto' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pope at the Bernabéu',
    title: 'Pope Leo XIV at Santiago Bernabéu Stadium — diocesan gathering on 8 June',
    subtitle: 'Monday 8 June 2026 · 7:00 pm · Santiago Bernabéu, Madrid',
    intro:
      'On Monday 8 June 2026, the Santiago Bernabéu Stadium will host one of the central acts of Pope Leo XIV’s Apostolic Journey to Spain: the multitudinous gathering of the Holy Father with the diocesan community of Madrid. It is the second time in history that a Pope presides over an event at this stadium, following the historic visit of Saint John Paul II on 3 November 1982.',
    historyTitle: 'Precedent: Saint John Paul II in 1982',
    historyBody:
      'On 3 November 1982, during his first Apostolic Journey to Spain, Saint John Paul II celebrated a multitudinous event at Santiago Bernabéu Stadium with more than 90,000 faithful. That encounter marked a milestone in the pastoral memory of Catholic Madrid and opened the tradition of the Bernabéu as a venue for major ecclesial events. Forty-four years later, Pope Leo XIV returns to the same stadium to meet the diocesan community of Madrid.',
    agendaTitle: 'Agenda for 8 June',
    agendaIntro: 'Official program published by the Spanish Episcopal Conference and the Press Office of the Holy See.',
    agenda: [
      { time: '09:30', text: 'Audience with the Prime Minister · Apostolic Nunciature' },
      { time: '10:30', text: 'Address to parliamentarians · Congress of Deputies' },
      { time: '12:30', text: 'Meeting with the bishops · Spanish Episcopal Conference HQ' },
      { time: '17:00', text: 'Marian prayer · Almudena Cathedral' },
      { time: '19:00', text: 'Diocesan gathering with the Pope · Santiago Bernabéu Stadium', highlight: true },
    ],
    practicalTitle: 'Practical information',
    practicalItems: [
      { label: 'Date', value: 'Monday 8 June 2026' },
      { label: 'Time', value: '7:00 pm (doors open at 4:00 pm)' },
      { label: 'Venue', value: 'Santiago Bernabéu Stadium, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacity', value: 'Approximately 78,000 people (covered venue)' },
      { label: 'Registration', value: 'Mandatory via madrid.conelpapa.es' },
      { label: 'Access', value: 'Free with credential · security checks at entrances' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Broadcast', value: 'TVE La 1, COPE, RNE and streaming at vaticannews.va' },
    ],
    relatedTitle: 'Other events in Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Full schedule of the journey' },
      { href: '/ciudades/madrid', text: 'Madrid: complete events 6-9 June' },
      { href: '/como-asistir', text: 'How to attend and register' },
      { href: '/que-llevar', text: 'What to bring to the event' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Papa al Bernabéu',
    title: 'Papa Leone XIV nello Stadio Santiago Bernabéu — incontro diocesano dell’8 giugno',
    subtitle: 'Lunedì 8 giugno 2026 · ore 19:00 · Santiago Bernabéu, Madrid',
    intro:
      'Lunedì 8 giugno 2026, lo Stadio Santiago Bernabéu ospiterà uno degli atti centrali del Viaggio Apostolico di Papa Leone XIV in Spagna: l’incontro multitudinario del Santo Padre con la comunità diocesana di Madrid. È la seconda volta nella storia che un Papa presiede un atto in questo stadio, dopo la storica visita di san Giovanni Paolo II del 3 novembre 1982.',
    historyTitle: 'Precedente: san Giovanni Paolo II nel 1982',
    historyBody:
      'Il 3 novembre 1982, durante il suo primo Viaggio Apostolico in Spagna, san Giovanni Paolo II celebrò un atto multitudinario allo Stadio Santiago Bernabéu con oltre 90.000 fedeli. Quell’incontro segnò un’impronta nella memoria pastorale di Madrid cattolica e aprì la tradizione del Bernabéu come sede di grandi atti ecclesiali. Quarantaquattro anni dopo, Papa Leone XIV torna nello stesso stadio per incontrare la comunità diocesana di Madrid.',
    agendaTitle: 'Agenda dell’8 giugno',
    agendaIntro: 'Programma ufficiale pubblicato dalla Conferenza Episcopale Spagnola e dalla Sala Stampa della Santa Sede.',
    agenda: [
      { time: '09:30', text: 'Udienza con il Presidente del Governo · Nunziatura Apostolica' },
      { time: '10:30', text: 'Discorso ai parlamentari · Congresso dei Deputati' },
      { time: '12:30', text: 'Incontro con i vescovi · Sede della CEE' },
      { time: '17:00', text: 'Preghiera mariana · Cattedrale dell’Almudena' },
      { time: '19:00', text: 'Incontro diocesano con il Papa · Stadio Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Informazioni pratiche',
    practicalItems: [
      { label: 'Data', value: 'Lunedì 8 giugno 2026' },
      { label: 'Ora', value: '19:00 (apertura porte: 16:00)' },
      { label: 'Luogo', value: 'Stadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacità', value: 'Circa 78.000 persone (recinto coperto)' },
      { label: 'Iscrizione', value: 'Obbligatoria su madrid.conelpapa.es' },
      { label: 'Accesso', value: 'Gratuito con accredito · controlli di sicurezza' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Trasmissione', value: 'TVE La 1, COPE, RNE e streaming su vaticannews.va' },
    ],
    relatedTitle: 'Altri atti a Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programma completo del viaggio' },
      { href: '/ciudades/madrid', text: 'Madrid: atti completi 6-9 giugno' },
      { href: '/como-asistir', text: 'Come partecipare e iscriversi' },
      { href: '/que-llevar', text: 'Cosa portare all’atto' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Le Pape au Bernabéu',
    title: 'Le Pape Léon XIV au stade Santiago Bernabéu — rencontre diocésaine du 8 juin',
    subtitle: 'Lundi 8 juin 2026 · 19h00 · Santiago Bernabéu, Madrid',
    intro:
      'Le lundi 8 juin 2026, le stade Santiago Bernabéu accueillera l’un des actes centraux du Voyage apostolique du Pape Léon XIV en Espagne : la rencontre multitudinaire du Saint-Père avec la communauté diocésaine de Madrid. C’est la deuxième fois dans l’histoire qu’un Pape préside un acte dans ce stade, après la visite historique de saint Jean-Paul II le 3 novembre 1982.',
    historyTitle: 'Précédent : saint Jean-Paul II en 1982',
    historyBody:
      'Le 3 novembre 1982, lors de son premier Voyage apostolique en Espagne, saint Jean-Paul II célébra un acte multitudinaire au stade Santiago Bernabéu avec plus de 90 000 fidèles. Cette rencontre marqua un jalon dans la mémoire pastorale du Madrid catholique et inaugura la tradition du Bernabéu comme lieu de grands actes ecclésiaux. Quarante-quatre ans plus tard, le Pape Léon XIV revient dans le même stade pour rencontrer la communauté diocésaine de Madrid.',
    agendaTitle: 'Agenda du 8 juin',
    agendaIntro: 'Programme officiel publié par la Conférence épiscopale espagnole et la Salle de presse du Saint-Siège.',
    agenda: [
      { time: '09:30', text: 'Audience avec le Premier ministre · Nonciature apostolique' },
      { time: '10:30', text: 'Discours aux parlementaires · Congrès des députés' },
      { time: '12:30', text: 'Rencontre avec les évêques · Siège de la CEE' },
      { time: '17:00', text: 'Prière mariale · Cathédrale de l’Almudena' },
      { time: '19:00', text: 'Rencontre diocésaine avec le Pape · Stade Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Informations pratiques',
    practicalItems: [
      { label: 'Date', value: 'Lundi 8 juin 2026' },
      { label: 'Heure', value: '19h00 (ouverture des portes : 16h00)' },
      { label: 'Lieu', value: 'Stade Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacité', value: 'Environ 78 000 personnes (enceinte couverte)' },
      { label: 'Inscription', value: 'Obligatoire sur madrid.conelpapa.es' },
      { label: 'Accès', value: 'Gratuit avec accréditation · contrôles de sécurité' },
      { label: 'Métro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Diffusion', value: 'TVE La 1, COPE, RNE et streaming sur vaticannews.va' },
    ],
    relatedTitle: 'Autres actes à Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programme complet du voyage' },
      { href: '/ciudades/madrid', text: 'Madrid : actes complets 6-9 juin' },
      { href: '/como-asistir', text: 'Comment assister et s’inscrire' },
      { href: '/que-llevar', text: 'Que apporter à l’acte' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Papst im Bernabéu',
    title: 'Papst Leo XIV. im Stadion Santiago Bernabéu — Diözesanbegegnung am 8. Juni',
    subtitle: 'Montag, 8. Juni 2026 · 19:00 Uhr · Santiago Bernabéu, Madrid',
    intro:
      'Am Montag, dem 8. Juni 2026, wird das Stadion Santiago Bernabéu einen der zentralen Akte der Apostolischen Reise von Papst Leo XIV. nach Spanien beherbergen: die Massenbegegnung des Heiligen Vaters mit der Diözesangemeinschaft von Madrid. Es ist das zweite Mal in der Geschichte, dass ein Papst einen Akt in diesem Stadion leitet, nach dem historischen Besuch des heiligen Johannes Paul II. am 3. November 1982.',
    historyTitle: 'Vorgänger: Johannes Paul II. im Jahr 1982',
    historyBody:
      'Am 3. November 1982, während seiner ersten Apostolischen Reise nach Spanien, feierte der heilige Johannes Paul II. einen Massenakt im Stadion Santiago Bernabéu mit mehr als 90.000 Gläubigen. Diese Begegnung markierte einen Meilenstein im pastoralen Gedächtnis des katholischen Madrid und eröffnete die Tradition des Bernabéu als Ort kirchlicher Großveranstaltungen. Vierundvierzig Jahre später kehrt Papst Leo XIV. ins selbe Stadion zurück, um die Diözesangemeinschaft Madrids zu treffen.',
    agendaTitle: 'Tagesablauf am 8. Juni',
    agendaIntro: 'Offizielles Programm der Spanischen Bischofskonferenz und des Pressebüros des Heiligen Stuhls.',
    agenda: [
      { time: '09:30', text: 'Audienz mit dem Ministerpräsidenten · Apostolische Nuntiatur' },
      { time: '10:30', text: 'Ansprache an die Parlamentarier · Abgeordnetenkongress' },
      { time: '12:30', text: 'Begegnung mit den Bischöfen · Sitz der CEE' },
      { time: '17:00', text: 'Marianisches Gebet · Almudena-Kathedrale' },
      { time: '19:00', text: 'Diözesanbegegnung mit dem Papst · Stadion Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Praktische Informationen',
    practicalItems: [
      { label: 'Datum', value: 'Montag, 8. Juni 2026' },
      { label: 'Uhrzeit', value: '19:00 (Türöffnung: 16:00)' },
      { label: 'Ort', value: 'Stadion Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Kapazität', value: 'Etwa 78.000 Personen (überdachter Bereich)' },
      { label: 'Anmeldung', value: 'Pflicht über madrid.conelpapa.es' },
      { label: 'Zugang', value: 'Kostenlos mit Akkreditierung · Sicherheitskontrollen' },
      { label: 'U-Bahn', value: 'Santiago Bernabéu (L10)' },
      { label: 'Übertragung', value: 'TVE La 1, COPE, RNE und Streaming auf vaticannews.va' },
    ],
    relatedTitle: 'Weitere Akte in Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Vollständiges Reiseprogramm' },
      { href: '/ciudades/madrid', text: 'Madrid: alle Akte 6.-9. Juni' },
      { href: '/como-asistir', text: 'Wie man teilnimmt und sich anmeldet' },
      { href: '/que-llevar', text: 'Was zum Akt mitbringen' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Papa no Bernabéu',
    title: 'O Papa Leão XIV no Estádio Santiago Bernabéu — encontro diocesano de 8 de junho',
    subtitle: 'Segunda-feira 8 de junho de 2026 · 19:00 · Santiago Bernabéu, Madrid',
    intro:
      'Na segunda-feira 8 de junho de 2026, o Estádio Santiago Bernabéu acolherá um dos atos centrais da Viagem Apostólica do Papa Leão XIV a Espanha: o encontro multitudinário do Santo Padre com a comunidade diocesana de Madrid. É a segunda vez na história que um Papa preside um ato neste estádio, após a histórica visita de são João Paulo II em 3 de novembro de 1982.',
    historyTitle: 'Antecedente: são João Paulo II em 1982',
    historyBody:
      'A 3 de novembro de 1982, durante a sua primeira Viagem Apostólica a Espanha, são João Paulo II celebrou um ato multitudinário no Estádio Santiago Bernabéu com mais de 90.000 fiéis. Esse encontro marcou um marco na memória pastoral do Madrid católico e abriu a tradição do Bernabéu como local de grandes atos eclesiais. Quarenta e quatro anos depois, o Papa Leão XIV regressa ao mesmo estádio para se encontrar com a comunidade diocesana de Madrid.',
    agendaTitle: 'Agenda de 8 de junho',
    agendaIntro: 'Programa oficial publicado pela Conferência Episcopal Espanhola e a Sala de Imprensa da Santa Sé.',
    agenda: [
      { time: '09:30', text: 'Audiência com o Primeiro-Ministro · Nunciatura Apostólica' },
      { time: '10:30', text: 'Discurso aos parlamentares · Congresso dos Deputados' },
      { time: '12:30', text: 'Encontro com os bispos · Sede da CEE' },
      { time: '17:00', text: 'Oração mariana · Catedral da Almudena' },
      { time: '19:00', text: 'Encontro diocesano com o Papa · Estádio Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Informações práticas',
    practicalItems: [
      { label: 'Data', value: 'Segunda-feira 8 de junho de 2026' },
      { label: 'Hora', value: '19:00 (abertura de portas: 16:00)' },
      { label: 'Local', value: 'Estádio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacidade', value: 'Cerca de 78.000 pessoas (recinto coberto)' },
      { label: 'Inscrição', value: 'Obrigatória em madrid.conelpapa.es' },
      { label: 'Acesso', value: 'Gratuito com credencial · controlos de segurança' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Transmissão', value: 'TVE La 1, COPE, RNE e streaming em vaticannews.va' },
    ],
    relatedTitle: 'Outros atos em Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo da viagem' },
      { href: '/ciudades/madrid', text: 'Madrid: atos completos 6-9 junho' },
      { href: '/como-asistir', text: 'Como assistir e inscrever-se' },
      { href: '/que-llevar', text: 'O que levar ao ato' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Papa al Bernabéu',
    title: 'El Papa Lleó XIV a l’Estadi Santiago Bernabéu — trobada diocesana del 8 de juny',
    subtitle: 'Dilluns 8 de juny de 2026 · 19:00 h · Santiago Bernabéu, Madrid',
    intro:
      'El dilluns 8 de juny de 2026, l’Estadi Santiago Bernabéu acollirà un dels actes centrals del Viatge Apostòlic del Papa Lleó XIV a Espanya: la trobada multitudinària del Sant Pare amb la comunitat diocesana de Madrid. És la segona vegada en la història que un Papa presideix un acte en aquest estadi, després de la històrica visita de sant Joan Pau II del 3 de novembre de 1982.',
    historyTitle: 'Antecedent: sant Joan Pau II el 1982',
    historyBody:
      'El 3 de novembre de 1982, durant el seu primer Viatge Apostòlic a Espanya, sant Joan Pau II va celebrar un acte multitudinari a l’Estadi Santiago Bernabéu amb més de 90.000 fidels. Aquella trobada va marcar una fita en la memòria pastoral del Madrid catòlic i va obrir la tradició del Bernabéu com a recinte d’actes eclesials de gran convocatòria. Quaranta-quatre anys després, el Papa Lleó XIV torna al mateix estadi per trobar-se amb la comunitat diocesana de Madrid.',
    agendaTitle: 'Agenda del 8 de juny',
    agendaIntro: 'Programa oficial publicat per la Conferència Episcopal Espanyola i la Sala de Premsa de la Santa Seu.',
    agenda: [
      { time: '09:30', text: 'Audiència amb el President del Govern · Nunciatura Apostòlica' },
      { time: '10:30', text: 'Discurs als parlamentaris · Congrés dels Diputats' },
      { time: '12:30', text: 'Trobada amb els bisbes · Seu de la CEE' },
      { time: '17:00', text: 'Pregària mariana · Catedral de la Almudena' },
      { time: '19:00', text: 'Trobada diocesana amb el Papa · Estadi Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Informació pràctica',
    practicalItems: [
      { label: 'Data', value: 'Dilluns 8 de juny de 2026' },
      { label: 'Hora', value: '19:00 (obertura de portes: 16:00)' },
      { label: 'Lloc', value: 'Estadi Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacitat', value: 'Aproximadament 78.000 persones (recinte cobert)' },
      { label: 'Inscripció', value: 'Obligatòria a madrid.conelpapa.es' },
      { label: 'Accés', value: 'Gratuït amb credencial · controls de seguretat' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Retransmissió', value: 'TVE La 1, COPE, RNE i streaming a vaticannews.va' },
    ],
    relatedTitle: 'Altres actes a Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programa complet del viatge' },
      { href: '/ciudades/madrid', text: 'Madrid: actes complets 6-9 juny' },
      { href: '/como-asistir', text: 'Com assistir i inscriure’s' },
      { href: '/que-llevar', text: 'Què portar a l’acte' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Papa no Bernabéu',
    title: 'O Papa León XIV no Estadio Santiago Bernabéu — encontro diocesano do 8 de xuño',
    subtitle: 'Luns 8 de xuño de 2026 · 19:00 h · Santiago Bernabéu, Madrid',
    intro:
      'O luns 8 de xuño de 2026, o Estadio Santiago Bernabéu acollerá un dos actos centrais da Viaxe Apostólica do Papa León XIV a España: o encontro multitudinario do Santo Padre coa comunidade diocesana de Madrid. É a segunda vez na historia que un Papa preside un acto neste estadio, despois da histórica visita de san Xoán Paulo II do 3 de novembro de 1982.',
    historyTitle: 'Antecedente: san Xoán Paulo II en 1982',
    historyBody:
      'O 3 de novembro de 1982, durante a súa primeira Viaxe Apostólica a España, san Xoán Paulo II celebrou un acto multitudinario no Estadio Santiago Bernabéu con máis de 90.000 fieis. Aquel encontro marcou un fito na memoria pastoral do Madrid católico e abriu a tradición do Bernabéu como recinto de actos eclesiais de gran convocatoria. Corenta e catro anos despois, o Papa León XIV volta ao mesmo estadio para encontrarse coa comunidade diocesana de Madrid.',
    agendaTitle: 'Axenda do 8 de xuño',
    agendaIntro: 'Programa oficial publicado pola Conferencia Episcopal Española e a Sala de Prensa da Santa Sede.',
    agenda: [
      { time: '09:30', text: 'Audiencia co Presidente do Goberno · Nunciatura Apostólica' },
      { time: '10:30', text: 'Discurso aos parlamentarios · Congreso dos Deputados' },
      { time: '12:30', text: 'Encontro cos bispos · Sede da CEE' },
      { time: '17:00', text: 'Oración mariana · Catedral da Almudena' },
      { time: '19:00', text: 'Encontro diocesano co Papa · Estadio Santiago Bernabéu', highlight: true },
    ],
    practicalTitle: 'Información práctica',
    practicalItems: [
      { label: 'Data', value: 'Luns 8 de xuño de 2026' },
      { label: 'Hora', value: '19:00 (apertura de portas: 16:00)' },
      { label: 'Lugar', value: 'Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid' },
      { label: 'Capacidade', value: 'Aproximadamente 78.000 persoas (recinto cuberto)' },
      { label: 'Inscrición', value: 'Obrigatoria en madrid.conelpapa.es' },
      { label: 'Acceso', value: 'Gratuíto con credencial · controis de seguridade' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10)' },
      { label: 'Retransmisión', value: 'TVE La 1, COPE, RNE e streaming en vaticannews.va' },
    ],
    relatedTitle: 'Outros actos en Madrid',
    relatedLinks: [
      { href: '/programa', text: 'Programa completo da viaxe' },
      { href: '/ciudades/madrid', text: 'Madrid: actos completos 6-9 xuño' },
      { href: '/como-asistir', text: 'Como asistir e inscribirse' },
      { href: '/que-llevar', text: 'Que levar ao acto' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Aita Santua Bernabéun',
    title: 'Leon XIV.a Aita Santua Santiago Bernabéu Estadioan — ekainaren 8ko elizbarrutiko topaketa',
    subtitle: 'Astelehena, 2026ko ekainak 8 · 19:00 · Santiago Bernabéu, Madril',
    intro:
      '2026ko ekainaren 8an, astelehenez, Santiago Bernabéu Estadioak Leon XIV.a Aita Santuaren Espainiarako Bidaia Apostolikoaren ekitaldi nagusietako bat hartuko du: Aita Santuak Madrilgo elizbarrutiko erkidegoarekin egingo duen topaketa multitudinarioa. Bigarren aldia da historian Aita Santu batek estadio honetan ekitaldi bat zuzentzen, San Joan Paulo II.aren 1982ko azaroaren 3ko bisita historikoaren ondoren.',
    historyTitle: 'Aurrekaria: San Joan Paulo II.a 1982an',
    historyBody:
      '1982ko azaroaren 3an, Espainiarako lehen Bidaia Apostolikoan, San Joan Paulo II.ak ekitaldi multitudinarioa ospatu zuen Santiago Bernabéu Estadioan, 90.000 fededun baino gehiagorekin. Topaketa hark mugarri bat ezarri zuen Madril katolikoaren oroimen pastoralean eta Bernabéuren tradizioa ireki zuen, deialdi handiko ekitaldi eklesialetarako leku gisa. Berrogeita lau urte geroago, Leon XIV.a Aita Santua estadiora itzuliko da, Madrilgo elizbarrutiko erkidegoarekin elkartzeko.',
    agendaTitle: 'Ekainaren 8ko egitaraua',
    agendaIntro: 'Espainiako Apezpiku Konferentziak eta Aulki Santuaren Prentsa Bulegoak argitaratutako programa ofiziala.',
    agenda: [
      { time: '09:30', text: 'Audientzia Gobernuko Presidentearekin · Nuntziatura Apostolikoa' },
      { time: '10:30', text: 'Hitzaldia parlamentariei · Diputatuen Kongresua' },
      { time: '12:30', text: 'Apezpikuekin topaketa · CEEko egoitza' },
      { time: '17:00', text: 'Maria-otoitza · Almudenako Katedrala' },
      { time: '19:00', text: 'Aita Santuarekin elizbarrutiko topaketa · Santiago Bernabéu Estadioa', highlight: true },
    ],
    practicalTitle: 'Informazio praktikoa',
    practicalItems: [
      { label: 'Data', value: 'Astelehena, 2026ko ekainak 8' },
      { label: 'Ordua', value: '19:00 (ate-irekiera: 16:00)' },
      { label: 'Lekua', value: 'Santiago Bernabéu Estadioa, Concha Espina etorbidea 1, Madril' },
      { label: 'Edukiera', value: 'Gutxi gorabehera 78.000 pertsona (estalitako eremua)' },
      { label: 'Izena ematea', value: 'Derrigorrezkoa madrid.conelpapa.es bidez' },
      { label: 'Sarrera', value: 'Doan kreditazioarekin · segurtasun-kontrolak' },
      { label: 'Metroa', value: 'Santiago Bernabéu (L10)' },
      { label: 'Igorpena', value: 'TVE La 1, COPE, RNE eta streaminga vaticannews.va-n' },
    ],
    relatedTitle: 'Beste ekitaldi batzuk Madrilen',
    relatedLinks: [
      { href: '/programa', text: 'Bidaiaren programa osoa' },
      { href: '/ciudades/madrid', text: 'Madril: ekainaren 6-9ko ekitaldi guztiak' },
      { href: '/como-asistir', text: 'Nola parte hartu eta izena eman' },
      { href: '/que-llevar', text: 'Zer eraman ekitaldira' },
    ],
  },
}

export default function PapaBernabeuPage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.historyTitle}</h2>
          <p>{t.historyBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.agendaTitle}</h2>
          <p className="text-sm text-papal-navy/70">{t.agendaIntro}</p>
          <ul className="not-prose mt-4 space-y-2">
            {t.agenda.map((ev) => (
              <li
                key={ev.time}
                className={`flex gap-4 rounded-lg border p-3 ${
                  ev.highlight ? 'border-papal-gold bg-papal-gold/10' : 'border-papal-navy/10'
                }`}
              >
                <span className="font-mono font-bold text-papal-navy">{ev.time}</span>
                <span className="text-papal-navy/90">{ev.text}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.practicalTitle}</h2>
          <dl className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {t.practicalItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-papal-navy/10 bg-white p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">{item.label}</dt>
                <dd className="mt-1 text-sm text-papal-navy">{item.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(link.href, locale)}
                  className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  )
}
