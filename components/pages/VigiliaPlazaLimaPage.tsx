import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
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
  whyTitle: string
  whyBody: string
  agendaTitle: string
  agendaIntro: string
  agenda: AgendaItem[]
  practicalTitle: string
  practicalItems: PracticalItem[]
  prepareTitle: string
  prepareBody: string
  relatedTitle: string
  relatedLinks: RelatedLink[]
}

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Vigilia Plaza de Lima',
    title: 'Vigilia juvenil con el Papa León XIV en la Plaza de Lima — 6 de junio 2026',
    subtitle: 'Sábado 6 de junio · 20:30 h · Plaza de Lima, Madrid',
    intro: 'La gran vigilia de oración con jóvenes en la Plaza de Lima abrirá el Viaje Apostólico del Papa León XIV a España. El sábado 6 de junio a las 20:30, el Santo Padre recorrerá la zona en papamóvil saludando a los peregrinos y presidirá una vigilia con palabras del Pontífice y adoración eucarística. Es uno de los actos más esperados por los jóvenes católicos españoles e internacionales.',
    whyTitle: '¿Por qué la Plaza de Lima?',
    whyBody: 'La Plaza de Lima, en el norte de Madrid junto al Estadio Santiago Bernabéu, ofrece un espacio amplio capaz de acoger a decenas de miles de jóvenes. Su configuración —con avenidas anchas como Paseo de la Castellana y Avenida de Concha Espina— permite el recorrido del papamóvil y un acceso ordenado de los peregrinos. La elección de este enclave también facilita la conexión con los actos del día siguiente en la Plaza de Cibeles (misa del Corpus Christi) y prepara el ambiente para el encuentro diocesano del lunes 8 en el propio Bernabéu.',
    agendaTitle: 'Agenda del 6 de junio',
    agendaIntro: 'Programa oficial publicado por la Conferencia Episcopal Española y la Sala de Prensa de la Santa Sede.',
    agenda: [
      { time: '10:30', text: 'Llegada al Aeropuerto Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Ceremonia de bienvenida en el Palacio Real' },
      { time: '18:00', text: 'Visita al proyecto social CEDIA 24 Horas (Cáritas, Carabanchel)' },
      { time: '20:30', text: 'Vigilia juvenil de oración · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Información práctica',
    practicalItems: [
      { label: 'Fecha', value: 'Sábado 6 de junio de 2026' },
      { label: 'Hora', value: '20:30 (apertura de zonas: 17:00)' },
      { label: 'Lugar', value: 'Plaza de Lima, Madrid (junto al Estadio Bernabéu)' },
      { label: 'Acto', value: 'Saludo en papamóvil + palabras del Papa + adoración eucarística' },
      { label: 'Inscripción', value: 'Obligatoria gratuita en madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Retransmisión', value: 'TVE La 1, COPE, RNE y vaticannews.va' },
    ],
    prepareTitle: 'Cómo prepararse',
    prepareBody: 'Lleva ropa cómoda y calzado deportivo: estarás varias horas de pie. Trae agua (botella reutilizable, hay puntos de llenado), gorra o sombrero (en junio Madrid supera 30 °C al atardecer), protector solar SPF 50+, una luz frontal o linterna pequeña para la adoración eucarística y el rosario si lo deseas. Llega con al menos 3 horas de antelación: las inmediaciones se cierran al tráfico y se realizan controles de seguridad. Consulta la guía completa en nuestra sección Qué llevar al kit del peregrino.',
    relatedTitle: 'Otros actos en Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Encuentro diocesano en el Bernabéu (8 jun)' },
      { href: '/ciudades/madrid', text: 'Madrid: actos completos del 6-9 junio' },
      { href: '/como-asistir', text: 'Cómo asistir e inscribirse' },
      { href: '/que-llevar', text: 'Kit del peregrino: qué llevar' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Plaza de Lima Vigil',
    title: 'Youth vigil with Pope Leo XIV at Plaza de Lima — 6 June 2026',
    subtitle: 'Saturday 6 June · 8:30 pm · Plaza de Lima, Madrid',
    intro: 'The great prayer vigil with young people at Plaza de Lima will open Pope Leo XIV’s Apostolic Journey to Spain. On Saturday 6 June at 8:30 pm, the Holy Father will tour the area in the popemobile greeting pilgrims and will preside over a vigil with the Pope’s words and Eucharistic adoration. It is one of the most awaited acts by Spanish and international Catholic youth.',
    whyTitle: 'Why Plaza de Lima?',
    whyBody: 'Plaza de Lima, in northern Madrid next to Santiago Bernabéu Stadium, offers a wide space capable of hosting tens of thousands of young people. Its configuration —with broad avenues such as Paseo de la Castellana and Avenida de Concha Espina— allows the popemobile route and orderly pilgrim access. This location also facilitates connection with the next day’s events at Plaza de Cibeles (Corpus Christi Mass) and sets the atmosphere for the Monday 8 diocesan gathering at the Bernabéu itself.',
    agendaTitle: 'Agenda for 6 June',
    agendaIntro: 'Official program published by the Spanish Episcopal Conference and the Press Office of the Holy See.',
    agenda: [
      { time: '10:30', text: 'Arrival at Adolfo Suárez Madrid-Barajas Airport' },
      { time: '11:30', text: 'Welcome ceremony at the Royal Palace' },
      { time: '18:00', text: 'Visit to CEDIA 24 Hours social project (Caritas, Carabanchel)' },
      { time: '20:30', text: 'Youth prayer vigil · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Practical information',
    practicalItems: [
      { label: 'Date', value: 'Saturday 6 June 2026' },
      { label: 'Time', value: '8:30 pm (zones open from 5:00 pm)' },
      { label: 'Venue', value: 'Plaza de Lima, Madrid (next to Bernabéu Stadium)' },
      { label: 'Event', value: 'Popemobile greeting + Pope’s address + Eucharistic adoration' },
      { label: 'Registration', value: 'Free mandatory registration at madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Broadcast', value: 'TVE La 1, COPE, RNE and vaticannews.va' },
    ],
    prepareTitle: 'How to prepare',
    prepareBody: 'Wear comfortable clothes and sports shoes: you will be standing for several hours. Bring water (refillable bottle, refilling points available), cap or hat (Madrid exceeds 30 °C at sunset in June), SPF 50+ sunscreen, a small headlamp or torch for the Eucharistic adoration, and your rosary if you wish. Arrive at least 3 hours early: surroundings close to traffic and security checks are carried out. See our full guide in the Pilgrim kit section.',
    relatedTitle: 'Other events in Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Diocesan gathering at the Bernabéu (8 Jun)' },
      { href: '/ciudades/madrid', text: 'Madrid: complete events 6-9 June' },
      { href: '/como-asistir', text: 'How to attend and register' },
      { href: '/que-llevar', text: 'Pilgrim kit: what to bring' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Veglia Plaza de Lima',
    title: 'Veglia giovanile con Papa Leone XIV in Plaza de Lima — 6 giugno 2026',
    subtitle: 'Sabato 6 giugno · ore 20:30 · Plaza de Lima, Madrid',
    intro: 'La grande veglia di preghiera con i giovani in Plaza de Lima aprirà il Viaggio Apostolico di Papa Leone XIV in Spagna. Sabato 6 giugno alle 20:30, il Santo Padre percorrerà la zona in papamobile salutando i pellegrini e presiederà una veglia con le parole del Pontefice e l’adorazione eucaristica. È uno degli atti più attesi dai giovani cattolici spagnoli e internazionali.',
    whyTitle: 'Perché Plaza de Lima?',
    whyBody: 'Plaza de Lima, nel nord di Madrid accanto allo Stadio Santiago Bernabéu, offre uno spazio ampio capace di accogliere decine di migliaia di giovani. La sua configurazione —con ampie strade come Paseo de la Castellana e Avenida de Concha Espina— permette il percorso della papamobile e un accesso ordinato dei pellegrini. La scelta di questo luogo facilita anche il collegamento con gli atti del giorno successivo in Plaza de Cibeles (Messa del Corpus Christi) e prepara l’atmosfera per l’incontro diocesano di lunedì 8 al Bernabéu stesso.',
    agendaTitle: 'Agenda del 6 giugno',
    agendaIntro: 'Programma ufficiale pubblicato dalla Conferenza Episcopale Spagnola e dalla Sala Stampa della Santa Sede.',
    agenda: [
      { time: '10:30', text: 'Arrivo all’Aeroporto Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Cerimonia di benvenuto al Palazzo Reale' },
      { time: '18:00', text: 'Visita al progetto sociale CEDIA 24 Ore (Caritas, Carabanchel)' },
      { time: '20:30', text: 'Veglia giovanile di preghiera · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Informazioni pratiche',
    practicalItems: [
      { label: 'Data', value: 'Sabato 6 giugno 2026' },
      { label: 'Ora', value: '20:30 (apertura zone: 17:00)' },
      { label: 'Luogo', value: 'Plaza de Lima, Madrid (accanto allo Stadio Bernabéu)' },
      { label: 'Atto', value: 'Saluto in papamobile + parole del Papa + adorazione eucaristica' },
      { label: 'Iscrizione', value: 'Obbligatoria e gratuita su madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Trasmissione', value: 'TVE La 1, COPE, RNE e vaticannews.va' },
    ],
    prepareTitle: 'Come prepararsi',
    prepareBody: 'Indossa abiti comodi e scarpe sportive: starai diverse ore in piedi. Porta acqua (bottiglia riutilizzabile, ci sono punti di rifornimento), berretto o cappello (a giugno Madrid supera i 30 °C al tramonto), crema solare SPF 50+, una piccola torcia frontale per l’adorazione eucaristica e il rosario se vuoi. Arriva con almeno 3 ore di anticipo: le vicinanze si chiudono al traffico e si effettuano controlli di sicurezza. Consulta la guida completa nella nostra sezione Cosa portare al kit del pellegrino.',
    relatedTitle: 'Altri atti a Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Incontro diocesano al Bernabéu (8 giu)' },
      { href: '/ciudades/madrid', text: 'Madrid: atti completi 6-9 giugno' },
      { href: '/como-asistir', text: 'Come partecipare e iscriversi' },
      { href: '/que-llevar', text: 'Kit del pellegrino: cosa portare' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Veillée Plaza de Lima',
    title: 'Veillée des jeunes avec le Pape Léon XIV à Plaza de Lima — 6 juin 2026',
    subtitle: 'Samedi 6 juin · 20h30 · Plaza de Lima, Madrid',
    intro: 'La grande veillée de prière avec les jeunes à Plaza de Lima ouvrira le Voyage apostolique du Pape Léon XIV en Espagne. Le samedi 6 juin à 20h30, le Saint-Père parcourra la zone en papamobile en saluant les pèlerins et présidera une veillée avec les paroles du Pontife et l’adoration eucharistique. C’est l’un des actes les plus attendus par les jeunes catholiques espagnols et internationaux.',
    whyTitle: 'Pourquoi Plaza de Lima ?',
    whyBody: 'Plaza de Lima, au nord de Madrid près du stade Santiago Bernabéu, offre un vaste espace capable d’accueillir des dizaines de milliers de jeunes. Sa configuration —avec de larges avenues comme le Paseo de la Castellana et l’Avenida de Concha Espina— permet le parcours de la papamobile et un accès ordonné des pèlerins. Le choix de ce lieu facilite aussi la connexion avec les actes du lendemain à Plaza de Cibeles (Messe du Corpus Christi) et prépare l’atmosphère pour la rencontre diocésaine du lundi 8 au Bernabéu même.',
    agendaTitle: 'Agenda du 6 juin',
    agendaIntro: 'Programme officiel publié par la Conférence épiscopale espagnole et la Salle de presse du Saint-Siège.',
    agenda: [
      { time: '10:30', text: 'Arrivée à l’aéroport Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Cérémonie de bienvenue au Palais Royal' },
      { time: '18:00', text: 'Visite au projet social CEDIA 24 Heures (Caritas, Carabanchel)' },
      { time: '20:30', text: 'Veillée de prière des jeunes · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Informations pratiques',
    practicalItems: [
      { label: 'Date', value: 'Samedi 6 juin 2026' },
      { label: 'Heure', value: '20h30 (ouverture des zones : 17h00)' },
      { label: 'Lieu', value: 'Plaza de Lima, Madrid (près du stade Bernabéu)' },
      { label: 'Acte', value: 'Salut en papamobile + paroles du Pape + adoration eucharistique' },
      { label: 'Inscription', value: 'Obligatoire et gratuite sur madrid.conelpapa.es' },
      { label: 'Métro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Diffusion', value: 'TVE La 1, COPE, RNE et vaticannews.va' },
    ],
    prepareTitle: 'Comment se préparer',
    prepareBody: 'Portez des vêtements confortables et des chaussures de sport : vous serez debout plusieurs heures. Apportez de l’eau (bouteille réutilisable, points de remplissage disponibles), une casquette ou un chapeau (Madrid dépasse 30 °C au coucher du soleil en juin), une crème solaire SPF 50+, une petite lampe frontale pour l’adoration eucharistique et votre rosaire si vous le souhaitez. Arrivez au moins 3 heures à l’avance : les abords sont fermés à la circulation et des contrôles de sécurité sont effectués. Consultez le guide complet dans notre section Que apporter au kit du pèlerin.',
    relatedTitle: 'Autres actes à Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Rencontre diocésaine au Bernabéu (8 juin)' },
      { href: '/ciudades/madrid', text: 'Madrid : actes complets 6-9 juin' },
      { href: '/como-asistir', text: 'Comment assister et s’inscrire' },
      { href: '/que-llevar', text: 'Kit du pèlerin : que apporter' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Plaza de Lima Vigil',
    title: 'Jugendvigil mit Papst Leo XIV. an der Plaza de Lima — 6. Juni 2026',
    subtitle: 'Samstag, 6. Juni · 20:30 Uhr · Plaza de Lima, Madrid',
    intro: 'Die große Gebetsvigil mit Jugendlichen an der Plaza de Lima eröffnet die Apostolische Reise von Papst Leo XIV. nach Spanien. Am Samstag, dem 6. Juni um 20:30 Uhr wird der Heilige Vater die Zone im Papamobil durchqueren und eine Vigil mit Worten des Pontifex und eucharistischer Anbetung leiten. Es ist einer der am meisten erwarteten Akte der spanischen und internationalen katholischen Jugend.',
    whyTitle: 'Warum die Plaza de Lima?',
    whyBody: 'Die Plaza de Lima im Norden Madrids neben dem Stadion Santiago Bernabéu bietet einen weiten Raum, der Zehntausende Jugendliche aufnehmen kann. Ihre Konfiguration —mit breiten Straßen wie dem Paseo de la Castellana und der Avenida de Concha Espina— ermöglicht die Papamobil-Route und einen geordneten Pilgerzugang. Die Wahl dieses Ortes erleichtert auch die Verbindung zu den Akten des Folgetags an der Plaza de Cibeles (Fronleichnamsmesse) und bereitet die Atmosphäre für die Diözesanbegegnung am Montag, 8. Juni, im Bernabéu selbst vor.',
    agendaTitle: 'Tagesablauf am 6. Juni',
    agendaIntro: 'Offizielles Programm der Spanischen Bischofskonferenz und des Pressebüros des Heiligen Stuhls.',
    agenda: [
      { time: '10:30', text: 'Ankunft am Flughafen Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Begrüßungszeremonie im Königspalast' },
      { time: '18:00', text: 'Besuch des Sozialprojekts CEDIA 24 Stunden (Caritas, Carabanchel)' },
      { time: '20:30', text: 'Jugendgebetsvigil · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Praktische Informationen',
    practicalItems: [
      { label: 'Datum', value: 'Samstag, 6. Juni 2026' },
      { label: 'Uhrzeit', value: '20:30 (Zonenöffnung: 17:00)' },
      { label: 'Ort', value: 'Plaza de Lima, Madrid (neben Bernabéu-Stadion)' },
      { label: 'Akt', value: 'Gruß im Papamobil + Worte des Papstes + eucharistische Anbetung' },
      { label: 'Anmeldung', value: 'Pflicht und kostenlos auf madrid.conelpapa.es' },
      { label: 'U-Bahn', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Übertragung', value: 'TVE La 1, COPE, RNE und vaticannews.va' },
    ],
    prepareTitle: 'Wie man sich vorbereitet',
    prepareBody: 'Trage bequeme Kleidung und Sportschuhe: du wirst mehrere Stunden stehen. Bring Wasser mit (wiederverwendbare Flasche, Auffüllstationen vorhanden), Mütze oder Hut (Madrid überschreitet im Juni 30 °C bei Sonnenuntergang), Sonnencreme LSF 50+, eine kleine Stirnlampe für die eucharistische Anbetung und deinen Rosenkranz, wenn du möchtest. Komm mindestens 3 Stunden früher: die Umgebung wird für den Verkehr gesperrt und Sicherheitskontrollen durchgeführt. Vollständige Anleitung im Abschnitt Was zum Pilgerset mitbringen.',
    relatedTitle: 'Weitere Akte in Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Diözesanbegegnung im Bernabéu (8. Juni)' },
      { href: '/ciudades/madrid', text: 'Madrid: alle Akte 6.-9. Juni' },
      { href: '/como-asistir', text: 'Wie man teilnimmt und sich anmeldet' },
      { href: '/que-llevar', text: 'Pilgerset: was mitbringen' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Vigília Plaza de Lima',
    title: 'Vigília juvenil com o Papa Leão XIV na Plaza de Lima — 6 de junho 2026',
    subtitle: 'Sábado 6 de junho · 20:30 · Plaza de Lima, Madrid',
    intro: 'A grande vigília de oração com jovens na Plaza de Lima abrirá a Viagem Apostólica do Papa Leão XIV a Espanha. No sábado 6 de junho às 20:30, o Santo Padre percorrerá a zona em papamóvel cumprimentando os peregrinos e presidirá uma vigília com as palavras do Pontífice e a adoração eucarística. É um dos atos mais aguardados pelos jovens católicos espanhóis e internacionais.',
    whyTitle: 'Porquê a Plaza de Lima?',
    whyBody: 'A Plaza de Lima, no norte de Madrid junto ao Estádio Santiago Bernabéu, oferece um espaço amplo capaz de acolher dezenas de milhares de jovens. A sua configuração —com avenidas largas como o Paseo de la Castellana e a Avenida de Concha Espina— permite o percurso do papamóvel e um acesso ordenado dos peregrinos. A escolha deste local facilita também a ligação com os atos do dia seguinte na Plaza de Cibeles (Missa de Corpus Christi) e prepara a atmosfera para o encontro diocesano de segunda-feira 8 no próprio Bernabéu.',
    agendaTitle: 'Agenda de 6 de junho',
    agendaIntro: 'Programa oficial publicado pela Conferência Episcopal Espanhola e a Sala de Imprensa da Santa Sé.',
    agenda: [
      { time: '10:30', text: 'Chegada ao Aeroporto Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Cerimónia de boas-vindas no Palácio Real' },
      { time: '18:00', text: 'Visita ao projeto social CEDIA 24 Horas (Cáritas, Carabanchel)' },
      { time: '20:30', text: 'Vigília juvenil de oração · Plaza de Lima', highlight: true },
    ],
    practicalTitle: 'Informações práticas',
    practicalItems: [
      { label: 'Data', value: 'Sábado 6 de junho de 2026' },
      { label: 'Hora', value: '20:30 (abertura de zonas: 17:00)' },
      { label: 'Local', value: 'Plaza de Lima, Madrid (junto ao Estádio Bernabéu)' },
      { label: 'Ato', value: 'Saudação em papamóvel + palavras do Papa + adoração eucarística' },
      { label: 'Inscrição', value: 'Obrigatória e gratuita em madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Transmissão', value: 'TVE La 1, COPE, RNE e vaticannews.va' },
    ],
    prepareTitle: 'Como preparar-se',
    prepareBody: 'Use roupa confortável e calçado desportivo: estará várias horas de pé. Leve água (garrafa reutilizável, há pontos de enchimento), boné ou chapéu (em junho Madrid ultrapassa os 30 °C ao pôr do sol), protetor solar FPS 50+, uma pequena lanterna frontal para a adoração eucarística e o terço se desejar. Chegue com pelo menos 3 horas de antecedência: as imediações fecham ao trânsito e há controlos de segurança. Consulte o guia completo na secção O que levar ao kit do peregrino.',
    relatedTitle: 'Outros atos em Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu (8 jun)' },
      { href: '/ciudades/madrid', text: 'Madrid: atos completos 6-9 junho' },
      { href: '/como-asistir', text: 'Como assistir e inscrever-se' },
      { href: '/que-llevar', text: 'Kit do peregrino: o que levar' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Vetlla Plaça de Lima',
    title: 'Vetlla juvenil amb el Papa Lleó XIV a la Plaça de Lima — 6 de juny 2026',
    subtitle: 'Dissabte 6 de juny · 20:30 h · Plaça de Lima, Madrid',
    intro: 'La gran vetlla de pregària amb joves a la Plaça de Lima obrirà el Viatge Apostòlic del Papa Lleó XIV a Espanya. El dissabte 6 de juny a les 20:30, el Sant Pare recorrerà la zona en papamòbil saludant els pelegrins i presidirà una vetlla amb paraules del Pontífex i adoració eucarística. És un dels actes més esperats pels joves catòlics espanyols i internacionals.',
    whyTitle: 'Per què la Plaça de Lima?',
    whyBody: 'La Plaça de Lima, al nord de Madrid al costat de l’Estadi Santiago Bernabéu, ofereix un espai ampli capaç d’acollir desenes de milers de joves. La seva configuració —amb avingudes amples com el Paseo de la Castellana i l’Avenida de Concha Espina— permet el recorregut del papamòbil i un accés ordenat dels pelegrins. L’elecció d’aquest enclavament també facilita la connexió amb els actes de l’endemà a la Plaça de Cibeles (missa del Corpus Christi) i prepara l’ambient per a la trobada diocesana del dilluns 8 al mateix Bernabéu.',
    agendaTitle: 'Agenda del 6 de juny',
    agendaIntro: 'Programa oficial publicat per la Conferència Episcopal Espanyola i la Sala de Premsa de la Santa Seu.',
    agenda: [
      { time: '10:30', text: 'Arribada a l’Aeroport Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Cerimònia de benvinguda al Palau Reial' },
      { time: '18:00', text: 'Visita al projecte social CEDIA 24 Hores (Càritas, Carabanchel)' },
      { time: '20:30', text: 'Vetlla juvenil de pregària · Plaça de Lima', highlight: true },
    ],
    practicalTitle: 'Informació pràctica',
    practicalItems: [
      { label: 'Data', value: 'Dissabte 6 de juny de 2026' },
      { label: 'Hora', value: '20:30 (obertura de zones: 17:00)' },
      { label: 'Lloc', value: 'Plaça de Lima, Madrid (al costat de l’Estadi Bernabéu)' },
      { label: 'Acte', value: 'Salutació en papamòbil + paraules del Papa + adoració eucarística' },
      { label: 'Inscripció', value: 'Obligatòria i gratuïta a madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Retransmissió', value: 'TVE La 1, COPE, RNE i vaticannews.va' },
    ],
    prepareTitle: 'Com preparar-se',
    prepareBody: 'Porta roba còmoda i calçat esportiu: estaràs diverses hores dret. Porta aigua (ampolla reutilitzable, hi ha punts d’ompliment), gorra o barret (al juny Madrid supera els 30 °C al capvespre), protector solar FPS 50+, una petita llanterna frontal per a l’adoració eucarística i el rosari si ho desitges. Arriba amb almenys 3 hores d’antelació: les immediacions es tanquen al trànsit i s’efectuen controls de seguretat. Consulta la guia completa a la nostra secció Què portar al kit del pelegrí.',
    relatedTitle: 'Altres actes a Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Trobada diocesana al Bernabéu (8 juny)' },
      { href: '/ciudades/madrid', text: 'Madrid: actes complets 6-9 juny' },
      { href: '/como-asistir', text: 'Com assistir i inscriure’s' },
      { href: '/que-llevar', text: 'Kit del pelegrí: què portar' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Vixilia Praza de Lima',
    title: 'Vixilia xuvenil co Papa León XIV na Praza de Lima — 6 de xuño 2026',
    subtitle: 'Sábado 6 de xuño · 20:30 h · Praza de Lima, Madrid',
    intro: 'A gran vixilia de oración con mozos na Praza de Lima abrirá a Viaxe Apostólica do Papa León XIV a España. O sábado 6 de xuño ás 20:30, o Santo Padre percorrerá a zona en papamóbil saudando os peregrinos e presidirá unha vixilia con palabras do Pontífice e adoración eucarística. É un dos actos máis esperados polos mozos católicos españois e internacionais.',
    whyTitle: 'Por que a Praza de Lima?',
    whyBody: 'A Praza de Lima, no norte de Madrid xunto ao Estadio Santiago Bernabéu, ofrece un espazo amplo capaz de acoller decenas de milleiros de mozos. A súa configuración —con avenidas anchas como o Paseo de la Castellana e a Avenida de Concha Espina— permite o percorrido do papamóbil e un acceso ordenado dos peregrinos. A escolla deste enclave tamén facilita a conexión cos actos do día seguinte na Praza de Cibeles (Misa do Corpus Christi) e prepara o ambiente para o encontro diocesano do luns 8 no propio Bernabéu.',
    agendaTitle: 'Axenda do 6 de xuño',
    agendaIntro: 'Programa oficial publicado pola Conferencia Episcopal Española e a Sala de Prensa da Santa Sede.',
    agenda: [
      { time: '10:30', text: 'Chegada ao Aeroporto Adolfo Suárez Madrid-Barajas' },
      { time: '11:30', text: 'Cerimonia de benvida no Pazo Real' },
      { time: '18:00', text: 'Visita ao proxecto social CEDIA 24 Horas (Cáritas, Carabanchel)' },
      { time: '20:30', text: 'Vixilia xuvenil de oración · Praza de Lima', highlight: true },
    ],
    practicalTitle: 'Información práctica',
    practicalItems: [
      { label: 'Data', value: 'Sábado 6 de xuño de 2026' },
      { label: 'Hora', value: '20:30 (apertura de zonas: 17:00)' },
      { label: 'Lugar', value: 'Praza de Lima, Madrid (xunto ao Estadio Bernabéu)' },
      { label: 'Acto', value: 'Saúdo en papamóbil + palabras do Papa + adoración eucarística' },
      { label: 'Inscrición', value: 'Obrigatoria e gratuíta en madrid.conelpapa.es' },
      { label: 'Metro', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Retransmisión', value: 'TVE La 1, COPE, RNE e vaticannews.va' },
    ],
    prepareTitle: 'Como prepararse',
    prepareBody: 'Leva roupa cómoda e calzado deportivo: estarás varias horas de pé. Trae auga (botella reutilizable, hai puntos de enchemento), gorra ou sombreiro (en xuño Madrid supera 30 °C no solpor), protector solar FPS 50+, unha pequena lanterna frontal para a adoración eucarística e o rosario se o desexas. Chega con polo menos 3 horas de antelación: as inmediacións péchanse ao tráfico e fanse controis de seguridade. Consulta a guía completa na nosa sección Que levar ao kit do peregrino.',
    relatedTitle: 'Outros actos en Madrid',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Encontro diocesano no Bernabéu (8 xuño)' },
      { href: '/ciudades/madrid', text: 'Madrid: actos completos 6-9 xuño' },
      { href: '/como-asistir', text: 'Como asistir e inscribirse' },
      { href: '/que-llevar', text: 'Kit do peregrino: que levar' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Lima Plazako Bijilia',
    title: 'Gazteen bijilia Leon XIV.a Aita Santuarekin Lima plazan — 2026ko ekainak 6',
    subtitle: 'Larunbata, ekainak 6 · 20:30 · Lima plaza, Madril',
    intro: 'Lima plazan gazteekin egingo den otoitz-bijilia handiak Leon XIV.a Aita Santuaren Espainiarako Bidaia Apostolikoa irekiko du. Larunbata, ekainaren 6an, 20:30ean, Aita Santuak papamobilean zeharkatuko du eremua erromesak agurtuz, eta bijilia bat zuzenduko du Pontifizearen hitzekin eta adorazio eukaristikoarekin. Espainiako eta nazioarteko gazte katolikoek gehien itxaroten dituzten ekitaldietako bat da.',
    whyTitle: 'Zergatik Lima plaza?',
    whyBody: 'Lima plazak, Madrilen iparraldean Santiago Bernabéu Estadioaren ondoan, hamarnaka mila gazte hartzeko gai den eremu zabala eskaintzen du. Bere konfigurazioa —Paseo de la Castellana eta Concha Espina etorbidea bezalako etorbide zabalekin— papamobilaren ibilbidea eta erromesen sarbide ordenatua ahalbidetzen du. Toki honen aukeraketak hurrengo eguneko Cibeles plazako (Corpus Christi meza) ekitaldiekin lotura ere errazten du, eta astelehen 8ko Bernabéuko elizbarrutiko topaketarako giroa prestatzen du.',
    agendaTitle: 'Ekainaren 6ko egitaraua',
    agendaIntro: 'Espainiako Apezpiku Konferentziak eta Aulki Santuaren Prentsa Bulegoak argitaratutako programa ofiziala.',
    agenda: [
      { time: '10:30', text: 'Adolfo Suárez Madrid-Barajas aireportura iristea' },
      { time: '11:30', text: 'Ongi etorriaren zeremonia Errege Jauregian' },
      { time: '18:00', text: 'CEDIA 24 Ordu gizarte-proiektuaren bisita (Caritas, Carabanchel)' },
      { time: '20:30', text: 'Gazteen otoitz-bijilia · Lima plaza', highlight: true },
    ],
    practicalTitle: 'Informazio praktikoa',
    practicalItems: [
      { label: 'Data', value: 'Larunbata, 2026ko ekainak 6' },
      { label: 'Ordua', value: '20:30 (eremu-irekiera: 17:00)' },
      { label: 'Lekua', value: 'Lima plaza, Madril (Bernabéu Estadioaren ondoan)' },
      { label: 'Ekitaldia', value: 'Agurra papamobilean + Aita Santuaren hitzak + adorazio eukaristikoa' },
      { label: 'Izena ematea', value: 'Derrigorrezkoa eta doan madrid.conelpapa.es bidez' },
      { label: 'Metroa', value: 'Santiago Bernabéu (L10), Cuzco (L10), Plaza de Castilla (L1, L9, L10)' },
      { label: 'Cercanías', value: 'Nuevos Ministerios (C1, C2, C7, C8, C10)' },
      { label: 'Igorpena', value: 'TVE La 1, COPE, RNE eta vaticannews.va' },
    ],
    prepareTitle: 'Nola prestatu',
    prepareBody: 'Erabili arropa erosoa eta kirol-oinetakoak: ordu batzuk emango dituzu zutik. Eraman ura (botila berrerabilgarria, betetze-puntuak daude), txapela edo bisera (ekainean Madrilek 30 °C gainditzen ditu ilunabarrean), eguzki-krema FPS 50+, kopetazko argi txikia adorazio eukaristikorako eta arrosarioa nahi baduzu. Iritsi gutxienez 3 ordu lehenago: inguruak trafikorako ixten dira eta segurtasun-kontrolak egiten dira. Ikus gida osoa Erromes-kita ataletan.',
    relatedTitle: 'Beste ekitaldi batzuk Madrilen',
    relatedLinks: [
      { href: '/papa-bernabeu', text: 'Bernabéuko elizbarrutiko topaketa (ekainak 8)' },
      { href: '/ciudades/madrid', text: 'Madril: ekainaren 6-9ko ekitaldi guztiak' },
      { href: '/como-asistir', text: 'Nola parte hartu eta izena eman' },
      { href: '/que-llevar', text: 'Erromes-kita: zer eraman' },
    ],
  },
}

export default function VigiliaPlazaLimaPage({ locale }: Props) {
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
        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.whyTitle}</h2>
          <p>{t.whyBody}</p>

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

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.prepareTitle}</h2>
          <p>{t.prepareBody}</p>

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
