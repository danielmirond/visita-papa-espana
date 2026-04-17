import { Locale } from '@/data/i18n/types'

interface Section1 {
  title: string
  steps: string[]
  registerBtn: string
  officialBtn: string
  descriptionStart: string
  freeBold: string
  descriptionMid: string
  regPrevBold: string
  descriptionEnd: string
}

interface Section2 {
  title: string
  trainTitle: string
  trainText: string
  trainTip: string
  planeTitle: string
  planeText: string
  localTitle: string
  localText: string
  consejoLabel: string
}

interface Section3 {
  title: string
  demandText: string
  sponsoredLinks: string
}

interface Section4 {
  title: string
  essentialTitle: string
  essential: string[]
  recommendedTitle: string
  recommended: string[]
}

interface Section5 {
  title: string
  body1: string
  body2: string
  ctaBtn: string
}

interface Sidebar {
  keyDatesTitle: string
  keyDates: string[]
  transportTitle: string
  insuranceTitle: string
  cantGoTitle: string
  cantGoBody: string
  cantGoCta: string
}

export interface ComoAsistirContent {
  heroTitle: string
  heroSubtitle: string
  section1: Section1
  section2: Section2
  section3: Section3
  section4: Section4
  section5: Section5
  sidebar: Sidebar
  sponsoredLink: string
}

const es: ComoAsistirContent = {
  heroTitle: 'Cómo asistir',
  heroSubtitle: 'Guía práctica para asistir a los actos de la visita papal',
  section1: {
    title: '1. Inscripción',
    descriptionStart: 'Los actos públicos son ',
    freeBold: 'gratuitos',
    descriptionMid: ' pero requieren ',
    regPrevBold: 'inscripción previa',
    descriptionEnd: ' por motivos de aforo y seguridad.',
    steps: [
      'Visita la web oficial de inscripción de cada ciudad',
      'Selecciona los actos a los que quieres asistir',
      'Completa el formulario con tus datos',
      'Recibirás un correo de confirmación con tu acreditación',
    ],
    registerBtn: 'Inscripción Madrid',
    officialBtn: 'Web oficial',
  },
  section2: {
    title: '2. Transporte',
    trainTitle: 'En tren (AVE)',
    trainText: 'La mejor opción para Madrid y Barcelona. El AVE conecta las principales ciudades españolas. Madrid-Barcelona en 2h30, Sevilla-Madrid en 2h30, Valencia-Madrid en 1h40.',
    trainTip: 'reserva con la máxima antelación posible para mejores precios.',
    consejoLabel: 'Consejo',
    planeTitle: 'En avión',
    planeText: 'Imprescindible para llegar a Canarias. Vuelos directos desde Madrid y Barcelona a Gran Canaria (LPA) y Tenerife (TFN/TFS). También hay vuelos interinsulares entre Gran Canaria y Tenerife (30 min).',
    localTitle: 'Transporte local',
    localText: 'Se reforzará el transporte público en todas las ciudades durante la visita. Metro, bus y cercanías ampliarán horarios y frecuencias. El coche particular no es recomendable por los cortes de tráfico.',
  },
  section3: {
    title: '3. Alojamiento',
    demandText: 'La demanda de alojamiento será muy alta. Reserva lo antes posible.',
    sponsoredLinks: 'Enlaces patrocinados',
  },
  section4: {
    title: '4. Qué llevar',
    essentialTitle: 'Imprescindible',
    essential: [
      'Acreditación/inscripción impresa o en móvil',
      'DNI o pasaporte',
      'Agua (al menos 1,5 litros)',
      'Protección solar (crema, gorra, gafas)',
      'Calzado cómodo',
      'Batería externa para el móvil',
    ],
    recommendedTitle: 'Recomendable',
    recommended: [
      'Esterilla o cojín para sentarse',
      'Comida ligera (fruta, bocadillo)',
      'Paraguas plegable (por si acaso)',
      'Rosario o artículos religiosos',
      'Banderas o pancartas permitidas',
      'Ropa de manga larga para las vigilias',
    ],
  },
  section5: {
    title: '5. Voluntariado',
    body1: 'La organización necesita miles de voluntarios en cada ciudad para tareas de acogida, hospitality, apoyo logístico y atención a los asistentes.',
    body2: 'En Madrid se buscan 10.000 voluntarios. Es una forma única de vivir la visita desde dentro.',
    ctaBtn: 'Información sobre voluntariado',
  },
  sidebar: {
    keyDatesTitle: 'Fechas clave',
    keyDates: [
      '7 abril: Apertura inscripciones Madrid',
      '24 abril: Cierre inscripción voluntarios Madrid',
      '6-8 junio: Visita a Madrid',
      '9-10 junio: Visita a Barcelona',
      '11 junio: Gran Canaria',
      '12 junio: Tenerife',
    ],
    transportTitle: 'Transporte',
    insuranceTitle: 'Seguro de viaje',
    cantGoTitle: 'Retransmisión en directo',
    cantGoBody: 'Toda la visita podrá seguirse en directo por televisión y plataformas digitales.',
    cantGoCta: 'Dónde seguir la visita',
  },
  sponsoredLink: 'Enlace patrocinado',
}

const en: ComoAsistirContent = {
  heroTitle: 'How to attend',
  heroSubtitle: 'Practical guide to attend the papal visit events',
  section1: {
    title: '1. Registration',
    descriptionStart: 'Public events are ',
    freeBold: 'free',
    descriptionMid: ' but require ',
    regPrevBold: 'prior registration',
    descriptionEnd: ' due to capacity and security.',
    steps: [
      'Visit the official registration website of each city',
      'Select the events you want to attend',
      'Complete the form with your details',
      'You will receive a confirmation email with your credential',
    ],
    registerBtn: 'Register Madrid',
    officialBtn: 'Official website',
  },
  section2: {
    title: '2. Transport',
    trainTitle: 'By train (AVE)',
    trainText: 'Best option for Madrid and Barcelona. The AVE connects the main Spanish cities. Madrid-Barcelona 2h30, Seville-Madrid 2h30, Valencia-Madrid 1h40.',
    trainTip: 'book as far in advance as possible for better prices.',
    consejoLabel: 'Tip',
    planeTitle: 'By plane',
    planeText: 'Essential to reach the Canary Islands. Direct flights from Madrid and Barcelona to Gran Canaria (LPA) and Tenerife (TFN/TFS). Inter-island flights between Gran Canaria and Tenerife (30 min).',
    localTitle: 'Local transport',
    localText: 'Public transport will be reinforced during the visit. Metro, bus and commuter trains will extend hours and frequencies. Private car is not recommended due to traffic closures.',
  },
  section3: {
    title: '3. Accommodation',
    demandText: 'Accommodation demand will be very high. Book as soon as possible.',
    sponsoredLinks: 'Sponsored links',
  },
  section4: {
    title: '4. What to bring',
    essentialTitle: 'Essential',
    essential: [
      'Credential/registration printed or on phone',
      'ID or passport',
      'Water (at least 1.5 litres)',
      'Sun protection (cream, hat, sunglasses)',
      'Comfortable footwear',
      'Portable phone battery',
    ],
    recommendedTitle: 'Recommended',
    recommended: [
      'Mat or cushion to sit on',
      'Light food (fruit, sandwich)',
      'Folding umbrella (just in case)',
      'Rosary or religious items',
      'Flags or allowed banners',
      'Long-sleeve clothing for vigils',
    ],
  },
  section5: {
    title: '5. Volunteering',
    body1: 'The organisation needs thousands of volunteers in each city for welcome, hospitality, logistics and attendee care.',
    body2: 'Madrid is seeking 10,000 volunteers. A unique way to live the visit from within.',
    ctaBtn: 'Volunteer information',
  },
  sidebar: {
    keyDatesTitle: 'Key dates',
    keyDates: [
      '7 April: Madrid registration opens',
      '24 April: Madrid volunteer registration closes',
      '6-8 June: Visit to Madrid',
      '9-10 June: Visit to Barcelona',
      '11 June: Gran Canaria',
      '12 June: Tenerife',
    ],
    transportTitle: 'Transport',
    insuranceTitle: 'Travel insurance',
    cantGoTitle: 'Live broadcast',
    cantGoBody: 'The entire visit can be followed live on TV and digital platforms.',
    cantGoCta: 'Where to watch',
  },
  sponsoredLink: 'Sponsored link',
}

const it: ComoAsistirContent = {
  heroTitle: 'Come partecipare',
  heroSubtitle: 'Guida pratica per partecipare agli eventi della visita papale',
  section1: {
    title: '1. Iscrizione',
    descriptionStart: 'Gli eventi pubblici sono ',
    freeBold: 'gratuiti',
    descriptionMid: ' ma richiedono ',
    regPrevBold: 'iscrizione previa',
    descriptionEnd: ' per motivi di capienza e sicurezza.',
    steps: [
      'Visita il sito ufficiale di iscrizione di ogni città',
      'Seleziona gli eventi a cui vuoi partecipare',
      'Compila il modulo con i tuoi dati',
      'Riceverai una email di conferma con la tua credenziale',
    ],
    registerBtn: 'Iscrizione Madrid',
    officialBtn: 'Sito ufficiale',
  },
  section2: {
    title: '2. Trasporti',
    trainTitle: 'In treno (AVE)',
    trainText: 'La migliore opzione per Madrid e Barcellona. L’AVE collega le principali città spagnole. Madrid-Barcellona 2h30, Siviglia-Madrid 2h30, Valencia-Madrid 1h40.',
    trainTip: 'prenota con il massimo anticipo per i migliori prezzi.',
    consejoLabel: 'Consiglio',
    planeTitle: 'In aereo',
    planeText: 'Indispensabile per raggiungere le Canarie. Voli diretti da Madrid e Barcellona a Gran Canaria (LPA) e Tenerife (TFN/TFS). Voli interinsulari tra le due isole (30 min).',
    localTitle: 'Trasporti locali',
    localText: 'Il trasporto pubblico sarà rinforzato durante la visita. Metro, bus e treni regionali amplieranno orari e frequenze. L’auto privata è sconsigliata per i blocchi del traffico.',
  },
  section3: {
    title: '3. Alloggio',
    demandText: 'La domanda di alloggio sarà molto alta. Prenota il prima possibile.',
    sponsoredLinks: 'Link sponsorizzati',
  },
  section4: {
    title: '4. Cosa portare',
    essentialTitle: 'Indispensabile',
    essential: [
      'Credenziale/iscrizione stampata o su cellulare',
      'Documento d’identità o passaporto',
      'Acqua (almeno 1,5 litri)',
      'Protezione solare (crema, cappello, occhiali)',
      'Scarpe comode',
      'Power bank per il cellulare',
    ],
    recommendedTitle: 'Consigliato',
    recommended: [
      'Stuoino o cuscino per sedersi',
      'Cibo leggero (frutta, panino)',
      'Ombrello pieghevole (per sicurezza)',
      'Rosario o oggetti religiosi',
      'Bandiere o striscioni consentiti',
      'Abbigliamento a maniche lunghe per le veglie',
    ],
  },
  section5: {
    title: '5. Volontariato',
    body1: 'L’organizzazione ha bisogno di migliaia di volontari in ogni città per accoglienza, hospitality, logistica e assistenza ai partecipanti.',
    body2: 'A Madrid si cercano 10.000 volontari. Un modo unico di vivere la visita dall’interno.',
    ctaBtn: 'Informazioni sul volontariato',
  },
  sidebar: {
    keyDatesTitle: 'Date chiave',
    keyDates: [
      '7 aprile: Apertura iscrizioni Madrid',
      '24 aprile: Chiusura iscrizione volontari Madrid',
      '6-8 giugno: Visita a Madrid',
      '9-10 giugno: Visita a Barcellona',
      '11 giugno: Gran Canaria',
      '12 giugno: Tenerife',
    ],
    transportTitle: 'Trasporti',
    insuranceTitle: 'Assicurazione viaggio',
    cantGoTitle: 'Trasmissione in diretta',
    cantGoBody: 'Tutta la visita potrà essere seguita in diretta TV e sulle piattaforme digitali.',
    cantGoCta: 'Dove seguirla',
  },
  sponsoredLink: 'Link sponsorizzato',
}

const fr: ComoAsistirContent = {
  heroTitle: 'Comment assister',
  heroSubtitle: 'Guide pratique pour assister aux actes de la visite papale',
  section1: {
    title: '1. Inscription',
    descriptionStart: 'Les actes publics sont ',
    freeBold: 'gratuits',
    descriptionMid: ' mais nécessitent une ',
    regPrevBold: 'inscription préalable',
    descriptionEnd: ' pour des raisons de capacité et de sécurité.',
    steps: [
      'Visitez le site officiel d’inscription de chaque ville',
      'Sélectionnez les actes auxquels vous souhaitez assister',
      'Remplissez le formulaire avec vos données',
      'Vous recevrez un e-mail de confirmation avec votre accréditation',
    ],
    registerBtn: 'Inscription Madrid',
    officialBtn: 'Site officiel',
  },
  section2: {
    title: '2. Transport',
    trainTitle: 'En train (AVE)',
    trainText: 'La meilleure option pour Madrid et Barcelone. L’AVE relie les principales villes espagnoles. Madrid-Barcelone 2h30, Séville-Madrid 2h30, Valence-Madrid 1h40.',
    trainTip: 'réservez le plus tôt possible pour les meilleurs tarifs.',
    consejoLabel: 'Conseil',
    planeTitle: 'En avion',
    planeText: 'Indispensable pour rejoindre les Canaries. Vols directs depuis Madrid et Barcelone vers Grande Canarie (LPA) et Tenerife (TFN/TFS). Vols inter-îles (30 min).',
    localTitle: 'Transport local',
    localText: 'Les transports en commun seront renforcés pendant la visite. Métro, bus et trains de banlieue étendront horaires et fréquences. La voiture privée est déconseillée en raison des coupures de circulation.',
  },
  section3: {
    title: '3. Hébergement',
    demandText: 'La demande d’hébergement sera très élevée. Réservez le plus tôt possible.',
    sponsoredLinks: 'Liens sponsorisés',
  },
  section4: {
    title: '4. Que prendre',
    essentialTitle: 'Indispensable',
    essential: [
      'Accréditation/inscription imprimée ou sur téléphone',
      'Carte d’identité ou passeport',
      'Eau (au moins 1,5 litre)',
      'Protection solaire (crème, chapeau, lunettes)',
      'Chaussures confortables',
      'Batterie externe pour téléphone',
    ],
    recommendedTitle: 'Recommandé',
    recommended: [
      'Tapis ou coussin pour s’asseoir',
      'Nourriture légère (fruits, sandwich)',
      'Parapluie pliant (au cas où)',
      'Chapelet ou objets religieux',
      'Drapeaux ou banderoles autorisés',
      'Vêtements à manches longues pour les veillées',
    ],
  },
  section5: {
    title: '5. Bénévolat',
    body1: 'L’organisation a besoin de milliers de bénévoles dans chaque ville pour l’accueil, l’hospitality, la logistique et l’attention aux participants.',
    body2: 'Madrid recherche 10 000 bénévoles. Une façon unique de vivre la visite de l’intérieur.',
    ctaBtn: 'Informations bénévolat',
  },
  sidebar: {
    keyDatesTitle: 'Dates clés',
    keyDates: [
      '7 avril : Ouverture inscriptions Madrid',
      '24 avril : Clôture inscription bénévoles Madrid',
      '6-8 juin : Visite à Madrid',
      '9-10 juin : Visite à Barcelone',
      '11 juin : Grande Canarie',
      '12 juin : Tenerife',
    ],
    transportTitle: 'Transport',
    insuranceTitle: 'Assurance voyage',
    cantGoTitle: 'Retransmission en direct',
    cantGoBody: 'Toute la visite pourra être suivie en direct à la télévision et sur les plateformes numériques.',
    cantGoCta: 'Où regarder',
  },
  sponsoredLink: 'Lien sponsorisé',
}

const de: ComoAsistirContent = {
  heroTitle: 'Teilnahme',
  heroSubtitle: 'Praktischer Leitfaden zur Teilnahme an den Veranstaltungen des Papstbesuchs',
  section1: {
    title: '1. Anmeldung',
    descriptionStart: 'Öffentliche Veranstaltungen sind ',
    freeBold: 'kostenlos',
    descriptionMid: ', erfordern jedoch eine ',
    regPrevBold: 'vorherige Anmeldung',
    descriptionEnd: ' aus Kapazitäts- und Sicherheitsgründen.',
    steps: [
      'Besuchen Sie die offizielle Anmeldeseite jeder Stadt',
      'Wählen Sie die Veranstaltungen aus, an denen Sie teilnehmen möchten',
      'Füllen Sie das Formular mit Ihren Daten aus',
      'Sie erhalten eine Bestätigungs-E-Mail mit Ihrer Akkreditierung',
    ],
    registerBtn: 'Anmeldung Madrid',
    officialBtn: 'Offizielle Website',
  },
  section2: {
    title: '2. Verkehr',
    trainTitle: 'Mit dem Zug (AVE)',
    trainText: 'Beste Option für Madrid und Barcelona. Der AVE verbindet die wichtigsten spanischen Städte. Madrid-Barcelona 2h30, Sevilla-Madrid 2h30, Valencia-Madrid 1h40.',
    trainTip: 'buchen Sie so früh wie möglich für die besten Preise.',
    consejoLabel: 'Tipp',
    planeTitle: 'Mit dem Flugzeug',
    planeText: 'Unverzichtbar, um die Kanaren zu erreichen. Direktflüge von Madrid und Barcelona nach Gran Canaria (LPA) und Teneriffa (TFN/TFS). Inter-Insel-Flüge zwischen Gran Canaria und Teneriffa (30 min).',
    localTitle: 'Nahverkehr',
    localText: 'Der öffentliche Nahverkehr wird während des Besuchs verstärkt. Metro, Busse und Nahverkehrszüge erweitern Zeiten und Frequenzen. Das private Auto wird wegen Verkehrssperrungen nicht empfohlen.',
  },
  section3: {
    title: '3. Unterkunft',
    demandText: 'Die Nachfrage nach Unterkünften wird sehr hoch sein. Buchen Sie so früh wie möglich.',
    sponsoredLinks: 'Gesponserte Links',
  },
  section4: {
    title: '4. Was mitbringen',
    essentialTitle: 'Unverzichtbar',
    essential: [
      'Akkreditierung/Anmeldung ausgedruckt oder auf dem Handy',
      'Ausweis oder Reisepass',
      'Wasser (mindestens 1,5 Liter)',
      'Sonnenschutz (Creme, Hut, Brille)',
      'Bequemes Schuhwerk',
      'Powerbank für das Handy',
    ],
    recommendedTitle: 'Empfohlen',
    recommended: [
      'Matte oder Kissen zum Sitzen',
      'Leichte Nahrung (Obst, Sandwich)',
      'Faltbarer Regenschirm (für alle Fälle)',
      'Rosenkranz oder religiöse Gegenstände',
      'Erlaubte Flaggen oder Banner',
      'Langarmkleidung für die Vigilien',
    ],
  },
  section5: {
    title: '5. Freiwilligenarbeit',
    body1: 'Die Organisation benötigt Tausende Freiwillige in jeder Stadt für Empfang, Hospitality, Logistik und Betreuung der Teilnehmer.',
    body2: 'In Madrid werden 10.000 Freiwillige gesucht. Eine einzigartige Möglichkeit, den Besuch von innen zu erleben.',
    ctaBtn: 'Informationen zur Freiwilligenarbeit',
  },
  sidebar: {
    keyDatesTitle: 'Wichtige Daten',
    keyDates: [
      '7. April: Anmeldung Madrid öffnet',
      '24. April: Anmeldung Freiwillige Madrid schließt',
      '6.-8. Juni: Besuch in Madrid',
      '9.-10. Juni: Besuch in Barcelona',
      '11. Juni: Gran Canaria',
      '12. Juni: Teneriffa',
    ],
    transportTitle: 'Verkehr',
    insuranceTitle: 'Reiseversicherung',
    cantGoTitle: 'Live-Übertragung',
    cantGoBody: 'Der gesamte Besuch kann live im Fernsehen und auf digitalen Plattformen verfolgt werden.',
    cantGoCta: 'Wo ansehen',
  },
  sponsoredLink: 'Gesponserter Link',
}

const pt: ComoAsistirContent = {
  heroTitle: 'Como assistir',
  heroSubtitle: 'Guia prático para assistir aos atos da visita papal',
  section1: {
    title: '1. Inscrição',
    descriptionStart: 'Os atos públicos são ',
    freeBold: 'gratuitos',
    descriptionMid: ' mas exigem ',
    regPrevBold: 'inscrição prévia',
    descriptionEnd: ' por motivos de lotação e segurança.',
    steps: [
      'Visite o site oficial de inscrição de cada cidade',
      'Selecione os atos aos quais deseja assistir',
      'Preencha o formulário com os seus dados',
      'Receberá um e-mail de confirmação com a sua credencial',
    ],
    registerBtn: 'Inscrição Madrid',
    officialBtn: 'Site oficial',
  },
  section2: {
    title: '2. Transporte',
    trainTitle: 'De comboio (AVE)',
    trainText: 'Melhor opção para Madrid e Barcelona. O AVE liga as principais cidades espanholas. Madrid-Barcelona 2h30, Sevilha-Madrid 2h30, Valência-Madrid 1h40.',
    trainTip: 'reserve com a máxima antecedência para melhores preços.',
    consejoLabel: 'Dica',
    planeTitle: 'De avião',
    planeText: 'Imprescindível para chegar às Canárias. Voos diretos de Madrid e Barcelona para Gran Canária (LPA) e Tenerife (TFN/TFS). Voos interilhas (30 min).',
    localTitle: 'Transporte local',
    localText: 'O transporte público será reforçado durante a visita. Metro, autocarros e comboios suburbanos alargarão horários e frequências. O carro particular não é recomendado devido aos cortes de tráfego.',
  },
  section3: {
    title: '3. Alojamento',
    demandText: 'A procura de alojamento será muito alta. Reserve o mais cedo possível.',
    sponsoredLinks: 'Links patrocinados',
  },
  section4: {
    title: '4. O que levar',
    essentialTitle: 'Imprescindível',
    essential: [
      'Credencial/inscrição impressa ou no telemóvel',
      'Cartão de cidadão ou passaporte',
      'Água (pelo menos 1,5 litros)',
      'Proteção solar (creme, chapéu, óculos)',
      'Calçado confortável',
      'Bateria externa para o telemóvel',
    ],
    recommendedTitle: 'Recomendável',
    recommended: [
      'Esteira ou almofada para sentar',
      'Comida leve (fruta, sandes)',
      'Guarda-chuva dobrável (por precaução)',
      'Terço ou artigos religiosos',
      'Bandeiras ou cartazes permitidos',
      'Roupa de manga comprida para as vigílias',
    ],
  },
  section5: {
    title: '5. Voluntariado',
    body1: 'A organização precisa de milhares de voluntários em cada cidade para acolhimento, hospitality, apoio logístico e atenção aos participantes.',
    body2: 'Em Madrid procuram-se 10.000 voluntários. Uma forma única de viver a visita por dentro.',
    ctaBtn: 'Informação sobre voluntariado',
  },
  sidebar: {
    keyDatesTitle: 'Datas chave',
    keyDates: [
      '7 abril: Abertura inscrições Madrid',
      '24 abril: Fecho inscrição voluntários Madrid',
      '6-8 junho: Visita a Madrid',
      '9-10 junho: Visita a Barcelona',
      '11 junho: Gran Canária',
      '12 junho: Tenerife',
    ],
    transportTitle: 'Transporte',
    insuranceTitle: 'Seguro de viagem',
    cantGoTitle: 'Transmissão em direto',
    cantGoBody: 'Toda a visita poderá ser seguida em direto pela televisão e plataformas digitais.',
    cantGoCta: 'Onde ver',
  },
  sponsoredLink: 'Link patrocinado',
}

const ca: ComoAsistirContent = {
  heroTitle: 'Com assistir',
  heroSubtitle: 'Guia pràctica per assistir als actes de la visita papal',
  section1: {
    title: '1. Inscripció',
    descriptionStart: 'Els actes públics són ',
    freeBold: 'gratuïts',
    descriptionMid: ' però requereixen ',
    regPrevBold: 'inscripció prèvia',
    descriptionEnd: ' per motius d’aforament i seguretat.',
    steps: [
      'Visita la web oficial d’inscripció de cada ciutat',
      'Selecciona els actes als quals vols assistir',
      'Omple el formulari amb les teves dades',
      'Rebràs un correu de confirmació amb la teva acreditació',
    ],
    registerBtn: 'Inscripció Madrid',
    officialBtn: 'Web oficial',
  },
  section2: {
    title: '2. Transport',
    trainTitle: 'En tren (AVE)',
    trainText: 'La millor opció per a Madrid i Barcelona. L’AVE connecta les principals ciutats espanyoles. Madrid-Barcelona 2h30, Sevilla-Madrid 2h30, València-Madrid 1h40.',
    trainTip: 'reserva amb la màxima antelació possible per a millors preus.',
    consejoLabel: 'Consell',
    planeTitle: 'En avió',
    planeText: 'Imprescindible per arribar a les Canàries. Vols directes des de Madrid i Barcelona a Gran Canària (LPA) i Tenerife (TFN/TFS). Vols interinsulars entre Gran Canària i Tenerife (30 min).',
    localTitle: 'Transport local',
    localText: 'El transport públic es reforçarà durant la visita. Metro, bus i rodalies ampliaran horaris i freqüències. El cotxe particular no és recomanable pels talls de trànsit.',
  },
  section3: {
    title: '3. Allotjament',
    demandText: 'La demanda d’allotjament serà molt alta. Reserva com més aviat millor.',
    sponsoredLinks: 'Enllaços patrocinats',
  },
  section4: {
    title: '4. Què portar',
    essentialTitle: 'Imprescindible',
    essential: [
      'Acreditació/inscripció impresa o al mòbil',
      'DNI o passaport',
      'Aigua (almenys 1,5 litres)',
      'Protecció solar (crema, gorra, ulleres)',
      'Calçat còmode',
      'Bateria externa per al mòbil',
    ],
    recommendedTitle: 'Recomanable',
    recommended: [
      'Estoreta o coixí per seure',
      'Menjar lleuger (fruita, entrepà)',
      'Paraigua plegable (per si de cas)',
      'Rosari o articles religiosos',
      'Banderes o pancartes permeses',
      'Roba de màniga llarga per a les vetlles',
    ],
  },
  section5: {
    title: '5. Voluntariat',
    body1: 'L’organització necessita milers de voluntaris a cada ciutat per a tasques d’acollida, hospitality, suport logístic i atenció als assistents.',
    body2: 'A Madrid es busquen 10.000 voluntaris. Una manera única de viure la visita des de dins.',
    ctaBtn: 'Informació sobre voluntariat',
  },
  sidebar: {
    keyDatesTitle: 'Dates clau',
    keyDates: [
      '7 abril: Obertura inscripcions Madrid',
      '24 abril: Tancament inscripció voluntaris Madrid',
      '6-8 juny: Visita a Madrid',
      '9-10 juny: Visita a Barcelona',
      '11 juny: Gran Canària',
      '12 juny: Tenerife',
    ],
    transportTitle: 'Transport',
    insuranceTitle: 'Assegurança de viatge',
    cantGoTitle: 'Retransmissió en directe',
    cantGoBody: 'Tota la visita es podrà seguir en directe per televisió i plataformes digitals.',
    cantGoCta: 'On seguir-la',
  },
  sponsoredLink: 'Enllaç patrocinat',
}

const gl: ComoAsistirContent = {
  heroTitle: 'Como asistir',
  heroSubtitle: 'Guía práctica para asistir aos actos da visita papal',
  section1: {
    title: '1. Inscrición',
    descriptionStart: 'Os actos públicos son ',
    freeBold: 'gratuítos',
    descriptionMid: ' pero requiren ',
    regPrevBold: 'inscrición previa',
    descriptionEnd: ' por motivos de aforo e seguridade.',
    steps: [
      'Visita a web oficial de inscrición de cada cidade',
      'Selecciona os actos aos que queres asistir',
      'Completa o formulario cos teus datos',
      'Recibirás un correo de confirmación coa túa credencial',
    ],
    registerBtn: 'Inscrición Madrid',
    officialBtn: 'Web oficial',
  },
  section2: {
    title: '2. Transporte',
    trainTitle: 'En tren (AVE)',
    trainText: 'A mellor opción para Madrid e Barcelona. O AVE conecta as principais cidades españolas. Madrid-Barcelona 2h30, Sevilla-Madrid 2h30, Valencia-Madrid 1h40.',
    trainTip: 'reserva coa máxima antelación posible para mellores prezos.',
    consejoLabel: 'Consello',
    planeTitle: 'En avión',
    planeText: 'Imprescindible para chegar ás Canarias. Voos directos dende Madrid e Barcelona a Gran Canaria (LPA) e Tenerife (TFN/TFS). Voos interinsulares (30 min).',
    localTitle: 'Transporte local',
    localText: 'O transporte público reforzarase durante a visita. Metro, bus e cercanías ampliarán horarios e frecuencias. O coche particular non é recomendable polos cortes de tráfico.',
  },
  section3: {
    title: '3. Aloxamento',
    demandText: 'A demanda de aloxamento será moi alta. Reserva canto antes.',
    sponsoredLinks: 'Ligazóns patrocinadas',
  },
  section4: {
    title: '4. Que levar',
    essentialTitle: 'Imprescindible',
    essential: [
      'Credencial/inscrición impresa ou no móbil',
      'DNI ou pasaporte',
      'Auga (polo menos 1,5 litros)',
      'Protección solar (crema, gorra, lentes)',
      'Calzado cómodo',
      'Batería externa para o móbil',
    ],
    recommendedTitle: 'Recomendable',
    recommended: [
      'Esterilla ou coxín para sentar',
      'Comida lixeira (froita, bocadillo)',
      'Paraugas pregable (por se acaso)',
      'Rosario ou artigos relixiosos',
      'Bandeiras ou pancartas permitidas',
      'Roupa de manga longa para as vixilias',
    ],
  },
  section5: {
    title: '5. Voluntariado',
    body1: 'A organización precisa miles de voluntarios en cada cidade para tarefas de acollida, hospitality, apoio loxístico e atención aos asistentes.',
    body2: 'En Madrid búscanse 10.000 voluntarios. Unha forma única de vivir a visita dende dentro.',
    ctaBtn: 'Información sobre voluntariado',
  },
  sidebar: {
    keyDatesTitle: 'Datas clave',
    keyDates: [
      '7 abril: Apertura inscricións Madrid',
      '24 abril: Peche inscrición voluntarios Madrid',
      '6-8 xuño: Visita a Madrid',
      '9-10 xuño: Visita a Barcelona',
      '11 xuño: Gran Canaria',
      '12 xuño: Tenerife',
    ],
    transportTitle: 'Transporte',
    insuranceTitle: 'Seguro de viaxe',
    cantGoTitle: 'Retransmisión en directo',
    cantGoBody: 'Toda a visita poderase seguir en directo por televisión e plataformas dixitais.',
    cantGoCta: 'Onde seguila',
  },
  sponsoredLink: 'Ligazón patrocinada',
}

const eu: ComoAsistirContent = {
  heroTitle: 'Nola parte hartu',
  heroSubtitle: 'Gida praktikoa bisitaldi papalaren ekitaldietan parte hartzeko',
  section1: {
    title: '1. Izen-ematea',
    descriptionStart: 'Ekitaldi publikoak ',
    freeBold: 'doakoak',
    descriptionMid: ' dira, baina ',
    regPrevBold: 'aldez aurretik izena ematea',
    descriptionEnd: ' eskatzen da edukiera eta segurtasun arrazoiengatik.',
    steps: [
      'Bisitatu hiri bakoitzaren izen-emate webgune ofiziala',
      'Hautatu zein ekitalditara joan nahi duzun',
      'Bete inprimakia zure datuekin',
      'Baieztapen email bat jasoko duzu zure egiaztagiriarekin',
    ],
    registerBtn: 'Izen-ematea Madril',
    officialBtn: 'Webgune ofiziala',
  },
  section2: {
    title: '2. Garraioa',
    trainTitle: 'Trenez (AVE)',
    trainText: 'Madril eta Bartzelonarako aukerarik onena. AVEk Espainiako hiri nagusiak lotzen ditu. Madril-Bartzelona 2h30, Sevilla-Madril 2h30, Valentzia-Madril 1h40.',
    trainTip: 'erreserbatu ahalik eta lehenen, prezio onenetarako.',
    consejoLabel: 'Aholkua',
    planeTitle: 'Hegazkinez',
    planeText: 'Ezinbestekoa Kanarietara iristeko. Zuzeneko hegaldiak Madriletik eta Bartzelonatik Gran Canariara (LPA) eta Tenerifera (TFN/TFS). Uharte arteko hegaldiak (30 min).',
    localTitle: 'Tokiko garraioa',
    localText: 'Garraio publikoa indartuko da bisitaldian zehar. Metroa, autobusak eta aldiriko trenak ordutegia eta maiztasuna luzatuko dituzte. Kotxe partikularra ez da gomendagarria trafiko-murrizketengatik.',
  },
  section3: {
    title: '3. Ostatua',
    demandText: 'Ostatu eskaera oso altua izango da. Erreserbatu lehenbailehen.',
    sponsoredLinks: 'Esteka babestuak',
  },
  section4: {
    title: '4. Zer eraman',
    essentialTitle: 'Ezinbestekoa',
    essential: [
      'Egiaztagiria/izen-ematea inprimatuta edo mugikorrean',
      'NAN edo pasaportea',
      'Ura (gutxienez 1,5 litro)',
      'Eguzki-babesa (krema, txapela, betaurrekoak)',
      'Oinetako erosoak',
      'Power bank mugikorrerako',
    ],
    recommendedTitle: 'Gomendagarria',
    recommended: [
      'Alfonbra txikia edo koltxoia eseriZ',
      'Janari arina (fruta, ogitartekoa)',
      'Aterki tolesgarria (badaezpada)',
      'Arrosarioa edo objektu erlijiosoak',
      'Ikurrinak edo pankartak baimenduak',
      'Mahuka luzeko arropa bijilientzat',
    ],
  },
  section5: {
    title: '5. Boluntariotza',
    body1: 'Antolakuntzak milaka boluntario behar ditu hiri bakoitzean, harrera, hospitality, laguntza logistikoa eta parte-hartzaileen arreta egiteko.',
    body2: 'Madrilen 10.000 boluntario bilatzen ari dira. Bisitaldia barrutik bizitzeko modu bakarra.',
    ctaBtn: 'Boluntariotzari buruzko informazioa',
  },
  sidebar: {
    keyDatesTitle: 'Data garrantzitsuak',
    keyDates: [
      'Apirilak 7: Madrilgo izen-emateak zabalik',
      'Apirilak 24: Madrilgo boluntarioen izen-ematea itxita',
      'Ekainak 6-8: Madrilera bisita',
      'Ekainak 9-10: Bartzelonara bisita',
      'Ekainak 11: Gran Canaria',
      'Ekainak 12: Tenerife',
    ],
    transportTitle: 'Garraioa',
    insuranceTitle: 'Bidaia asegurua',
    cantGoTitle: 'Zuzeneko emisioa',
    cantGoBody: 'Bisitaldi osoa zuzenean jarraitu ahal izango da telebistan eta plataforma digitaletan.',
    cantGoCta: 'Non jarraitu',
  },
  sponsoredLink: 'Esteka babestua',
}

const map: Record<Locale, ComoAsistirContent> = { es, en, it, fr, de, pt, ca, gl, eu }

export function getComoAsistirContent(locale: Locale): ComoAsistirContent {
  return map[locale] || es
}
