import { Locale } from './types'

type PagesExt = {
  programa: {
    title: string
    subtitle: string
    allCities: string
    scheduledFor: string
    attend: string
  }
  eventTypes: {
    misa: string
    vigilia: string
    encuentro: string
    inauguracion: string
    traslado: string
    llegada: string
    despedida: string
    'acto-publico': string
  }
  ciudades: {
    title: string
    subtitle: string
    highlights: string
    practicalInfo: string
    howToGet: string
    accommodation: string
    tips: string
    programIn: string
    viewFullInfo: string
    dates: string
  }
  faq: {
    title: string
    subtitle: string
    notFoundTitle: string
    notFoundDesc: string
    officialSite: string
    practicalGuide: string
  }
  home: {
    dayByDayTitle: string
    dayByDaySubtitle: string // ej: "24 events in 7 days..."
    events: string           // "actos" / "events"
    moreEvents: string       // "más" / "more"
    viewAllNews: string
    newsletterNote: string
    affiliateLabel1: string  // banner 1
    affiliateLabel2: string  // banner 2
    registerBtn: string
    fullGuideBtn: string
    month3letter: string     // "jun" / "Jun"
  }
  shop: {
    title: string
    subtitle: string
    all: string
    disclaimer: string
    categoryMerch: string
    categoryReligioso: string
    categoryLibros: string
    categorySouvenirs: string
    categoryRopa: string
  }
}

const es: PagesExt = {
  programa: {
    title: 'Programa de la visita',
    subtitle: 'Agenda completa del 6 al 12 de junio de 2026',
    allCities: 'Todas las ciudades',
    scheduledFor: 'Programado para',
    attend: 'Inscribirse',
  },
  eventTypes: {
    misa: 'Misa',
    vigilia: 'Vigilia',
    encuentro: 'Encuentro',
    inauguracion: 'Inauguración',
    traslado: 'Traslado',
    llegada: 'Llegada',
    despedida: 'Despedida',
    'acto-publico': 'Acto público',
  },
  ciudades: {
    title: 'Ciudades de la visita',
    subtitle: 'El Papa León XIV visitará 4 ciudades en 7 días',
    highlights: 'Actos destacados',
    practicalInfo: 'Información práctica',
    howToGet: 'Cómo llegar',
    accommodation: 'Alojamiento',
    tips: 'Consejos',
    programIn: 'Programa en',
    viewFullInfo: 'Ver toda la información',
    dates: 'Fechas',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Todo lo que necesita saber sobre la visita del Papa León XIV a España',
    notFoundTitle: '¿No encuentra lo que busca?',
    notFoundDesc: 'Consulte la web oficial para información actualizada.',
    officialSite: 'Web oficial',
    practicalGuide: 'Guía práctica',
  },
  home: {
    dayByDayTitle: 'Programa día a día',
    dayByDaySubtitle: 'actos en 7 días por 4 ciudades de España',
    events: 'actos',
    moreEvents: 'más',
    viewAllNews: 'Ver todas las noticias',
    newsletterNote: 'Recibe las novedades de la visita papal por email',
    affiliateLabel1: 'Reserva tu hotel para la visita papal',
    affiliateLabel2: 'Compara vuelos a Canarias',
    registerBtn: 'Inscribirse en Madrid',
    fullGuideBtn: 'Guía completa',
    month3letter: 'jun',
  },
  shop: {
    title: 'Tienda',
    subtitle: 'Recuerdos oficiales de la visita, artículos religiosos y libros',
    all: 'Todo',
    disclaimer:
      'Algunos productos son de afiliación (Amazon y otros): al comprar recibimos una pequeña comisión sin coste adicional para usted. Los productos marcados como "Oficial" son merchandising propio de la visita.',
    categoryMerch: 'Recuerdos de la visita',
    categoryReligioso: 'Artículos religiosos',
    categoryLibros: 'Libros',
    categorySouvenirs: 'Souvenirs',
    categoryRopa: 'Ropa',
  },
}

const en: PagesExt = {
  programa: {
    title: 'Programme of the visit',
    subtitle: 'Full schedule from 6 to 12 June 2026',
    allCities: 'All cities',
    scheduledFor: 'Scheduled for',
    attend: 'Register',
  },
  eventTypes: {
    misa: 'Mass',
    vigilia: 'Vigil',
    encuentro: 'Meeting',
    inauguracion: 'Inauguration',
    traslado: 'Transfer',
    llegada: 'Arrival',
    despedida: 'Farewell',
    'acto-publico': 'Public event',
  },
  ciudades: {
    title: 'Cities of the visit',
    subtitle: 'Pope Leo XIV will visit 4 cities in 7 days',
    highlights: 'Main events',
    practicalInfo: 'Practical information',
    howToGet: 'How to get there',
    accommodation: 'Accommodation',
    tips: 'Tips',
    programIn: 'Programme in',
    viewFullInfo: 'View full information',
    dates: 'Dates',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know about Pope Leo XIV’s visit to Spain',
    notFoundTitle: 'Can’t find what you’re looking for?',
    notFoundDesc: 'Check the official website for updated information.',
    officialSite: 'Official website',
    practicalGuide: 'Practical guide',
  },
  home: {
    dayByDayTitle: 'Day-by-day programme',
    dayByDaySubtitle: 'events in 7 days across 4 cities of Spain',
    events: 'events',
    moreEvents: 'more',
    viewAllNews: 'View all news',
    newsletterNote: 'Get the latest news of the papal visit by email',
    affiliateLabel1: 'Book your hotel for the papal visit',
    affiliateLabel2: 'Compare flights to the Canary Islands',
    registerBtn: 'Register in Madrid',
    fullGuideBtn: 'Full guide',
    month3letter: 'Jun',
  },
  shop: {
    title: 'Shop',
    subtitle: 'Official visit memorabilia, religious items and books',
    all: 'All',
    disclaimer:
      'Some products are affiliate links (Amazon and others): we receive a small commission at no additional cost to you. Products marked as "Official" are proprietary merchandise of the visit.',
    categoryMerch: 'Visit memorabilia',
    categoryReligioso: 'Religious items',
    categoryLibros: 'Books',
    categorySouvenirs: 'Souvenirs',
    categoryRopa: 'Clothing',
  },
}

const it: PagesExt = {
  programa: {
    title: 'Programma della visita',
    subtitle: 'Agenda completa dal 6 al 12 giugno 2026',
    allCities: 'Tutte le città',
    scheduledFor: 'Programmato per',
    attend: 'Iscriviti',
  },
  eventTypes: {
    misa: 'Messa',
    vigilia: 'Veglia',
    encuentro: 'Incontro',
    inauguracion: 'Inaugurazione',
    traslado: 'Trasferimento',
    llegada: 'Arrivo',
    despedida: 'Congedo',
    'acto-publico': 'Evento pubblico',
  },
  ciudades: {
    title: 'Città della visita',
    subtitle: 'Papa Leone XIV visiterà 4 città in 7 giorni',
    highlights: 'Eventi principali',
    practicalInfo: 'Informazioni pratiche',
    howToGet: 'Come arrivare',
    accommodation: 'Alloggio',
    tips: 'Consigli',
    programIn: 'Programma a',
    viewFullInfo: 'Vedi tutte le informazioni',
    dates: 'Date',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Tutto ciò che devi sapere sulla visita di Papa Leone XIV in Spagna',
    notFoundTitle: 'Non trovi quello che cerchi?',
    notFoundDesc: 'Consulta il sito ufficiale per informazioni aggiornate.',
    officialSite: 'Sito ufficiale',
    practicalGuide: 'Guida pratica',
  },
  home: {
    dayByDayTitle: 'Programma giorno per giorno',
    dayByDaySubtitle: 'eventi in 7 giorni in 4 città della Spagna',
    events: 'eventi',
    moreEvents: 'altri',
    viewAllNews: 'Vedi tutte le notizie',
    newsletterNote: 'Ricevi le novità della visita papale via email',
    affiliateLabel1: 'Prenota il tuo hotel per la visita papale',
    affiliateLabel2: 'Confronta voli per le Canarie',
    registerBtn: 'Iscriviti a Madrid',
    fullGuideBtn: 'Guida completa',
    month3letter: 'giu',
  },
  shop: {
    title: 'Negozio',
    subtitle: 'Ricordi ufficiali della visita, articoli religiosi e libri',
    all: 'Tutti',
    disclaimer:
      'Alcuni prodotti sono link di affiliazione (Amazon e altri): riceviamo una piccola commissione senza costi aggiuntivi per te. I prodotti contrassegnati come "Ufficiale" sono merchandising proprietario della visita.',
    categoryMerch: 'Ricordi della visita',
    categoryReligioso: 'Articoli religiosi',
    categoryLibros: 'Libri',
    categorySouvenirs: 'Souvenir',
    categoryRopa: 'Abbigliamento',
  },
}

const fr: PagesExt = {
  programa: {
    title: 'Programme de la visite',
    subtitle: 'Agenda complet du 6 au 12 juin 2026',
    allCities: 'Toutes les villes',
    scheduledFor: 'Prévu pour',
    attend: 'S’inscrire',
  },
  eventTypes: {
    misa: 'Messe',
    vigilia: 'Veillée',
    encuentro: 'Rencontre',
    inauguracion: 'Inauguration',
    traslado: 'Transfert',
    llegada: 'Arrivée',
    despedida: 'Départ',
    'acto-publico': 'Acte public',
  },
  ciudades: {
    title: 'Villes de la visite',
    subtitle: 'Le Pape Léon XIV visitera 4 villes en 7 jours',
    highlights: 'Actes principaux',
    practicalInfo: 'Informations pratiques',
    howToGet: 'Comment s’y rendre',
    accommodation: 'Hébergement',
    tips: 'Conseils',
    programIn: 'Programme à',
    viewFullInfo: 'Voir toutes les informations',
    dates: 'Dates',
  },
  faq: {
    title: 'Foire aux questions',
    subtitle: 'Tout ce qu’il faut savoir sur la visite du Pape Léon XIV en Espagne',
    notFoundTitle: 'Vous ne trouvez pas ce que vous cherchez ?',
    notFoundDesc: 'Consultez le site officiel pour des informations à jour.',
    officialSite: 'Site officiel',
    practicalGuide: 'Guide pratique',
  },
  home: {
    dayByDayTitle: 'Programme jour par jour',
    dayByDaySubtitle: 'événements en 7 jours dans 4 villes d’Espagne',
    events: 'événements',
    moreEvents: 'plus',
    viewAllNews: 'Voir toutes les actualités',
    newsletterNote: 'Recevez les actualités de la visite pontificale par email',
    affiliateLabel1: 'Réservez votre hôtel pour la visite pontificale',
    affiliateLabel2: 'Comparez les vols vers les Canaries',
    registerBtn: 'S’inscrire à Madrid',
    fullGuideBtn: 'Guide complet',
    month3letter: 'juin',
  },
  shop: {
    title: 'Boutique',
    subtitle: 'Souvenirs officiels de la visite, articles religieux et livres',
    all: 'Tout',
    disclaimer:
      'Certains produits sont des liens d’affiliation (Amazon et autres) : nous recevons une petite commission sans frais supplémentaires pour vous. Les produits marqués « Officiel » sont la marchandise propre de la visite.',
    categoryMerch: 'Souvenirs de la visite',
    categoryReligioso: 'Articles religieux',
    categoryLibros: 'Livres',
    categorySouvenirs: 'Souvenirs',
    categoryRopa: 'Vêtements',
  },
}

const de: PagesExt = {
  programa: {
    title: 'Programm des Besuchs',
    subtitle: 'Vollständiger Terminplan vom 6. bis 12. Juni 2026',
    allCities: 'Alle Städte',
    scheduledFor: 'Geplant für',
    attend: 'Anmelden',
  },
  eventTypes: {
    misa: 'Messe',
    vigilia: 'Vigil',
    encuentro: 'Begegnung',
    inauguracion: 'Einweihung',
    traslado: 'Verlegung',
    llegada: 'Ankunft',
    despedida: 'Abschied',
    'acto-publico': 'Öffentliche Veranstaltung',
  },
  ciudades: {
    title: 'Städte des Besuchs',
    subtitle: 'Papst Leo XIV. besucht 4 Städte in 7 Tagen',
    highlights: 'Wichtigste Ereignisse',
    practicalInfo: 'Praktische Informationen',
    howToGet: 'Anreise',
    accommodation: 'Unterkunft',
    tips: 'Tipps',
    programIn: 'Programm in',
    viewFullInfo: 'Alle Informationen anzeigen',
    dates: 'Termine',
  },
  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Alles, was Sie über den Besuch von Papst Leo XIV. in Spanien wissen müssen',
    notFoundTitle: 'Finden Sie nicht, was Sie suchen?',
    notFoundDesc: 'Besuchen Sie die offizielle Website für aktuelle Informationen.',
    officialSite: 'Offizielle Website',
    practicalGuide: 'Praktischer Leitfaden',
  },
  home: {
    dayByDayTitle: 'Programm Tag für Tag',
    dayByDaySubtitle: 'Veranstaltungen in 7 Tagen in 4 spanischen Städten',
    events: 'Veranstaltungen',
    moreEvents: 'weitere',
    viewAllNews: 'Alle Nachrichten ansehen',
    newsletterNote: 'Erhalten Sie Neuigkeiten des Papstbesuchs per E-Mail',
    affiliateLabel1: 'Buchen Sie Ihr Hotel für den Papstbesuch',
    affiliateLabel2: 'Vergleichen Sie Flüge auf die Kanaren',
    registerBtn: 'In Madrid anmelden',
    fullGuideBtn: 'Vollständiger Leitfaden',
    month3letter: 'Jun',
  },
  shop: {
    title: 'Shop',
    subtitle: 'Offizielle Souvenirs des Besuchs, religiöse Artikel und Bücher',
    all: 'Alle',
    disclaimer:
      'Einige Produkte sind Affiliate-Links (Amazon und andere): Wir erhalten eine kleine Provision ohne zusätzliche Kosten für Sie. Als „Offiziell" gekennzeichnete Produkte sind eigener Merchandise des Besuchs.',
    categoryMerch: 'Souvenirs des Besuchs',
    categoryReligioso: 'Religiöse Artikel',
    categoryLibros: 'Bücher',
    categorySouvenirs: 'Souvenirs',
    categoryRopa: 'Kleidung',
  },
}

const pt: PagesExt = {
  programa: {
    title: 'Programa da visita',
    subtitle: 'Agenda completa de 6 a 12 de junho de 2026',
    allCities: 'Todas as cidades',
    scheduledFor: 'Programado para',
    attend: 'Inscrever-se',
  },
  eventTypes: {
    misa: 'Missa',
    vigilia: 'Vigília',
    encuentro: 'Encontro',
    inauguracion: 'Inauguração',
    traslado: 'Transferência',
    llegada: 'Chegada',
    despedida: 'Despedida',
    'acto-publico': 'Ato público',
  },
  ciudades: {
    title: 'Cidades da visita',
    subtitle: 'O Papa Leão XIV visitará 4 cidades em 7 dias',
    highlights: 'Atos principais',
    practicalInfo: 'Informação prática',
    howToGet: 'Como chegar',
    accommodation: 'Alojamento',
    tips: 'Dicas',
    programIn: 'Programa em',
    viewFullInfo: 'Ver todas as informações',
    dates: 'Datas',
  },
  faq: {
    title: 'Perguntas frequentes',
    subtitle: 'Tudo o que precisa de saber sobre a visita do Papa Leão XIV a Espanha',
    notFoundTitle: 'Não encontra o que procura?',
    notFoundDesc: 'Consulte o site oficial para informação atualizada.',
    officialSite: 'Site oficial',
    practicalGuide: 'Guia prático',
  },
  home: {
    dayByDayTitle: 'Programa dia a dia',
    dayByDaySubtitle: 'atos em 7 dias em 4 cidades de Espanha',
    events: 'atos',
    moreEvents: 'mais',
    viewAllNews: 'Ver todas as notícias',
    newsletterNote: 'Receba as novidades da visita papal por email',
    affiliateLabel1: 'Reserve o seu hotel para a visita papal',
    affiliateLabel2: 'Compare voos para as Canárias',
    registerBtn: 'Inscrever-se em Madrid',
    fullGuideBtn: 'Guia completo',
    month3letter: 'jun',
  },
  shop: {
    title: 'Loja',
    subtitle: 'Recordações oficiais da visita, artigos religiosos e livros',
    all: 'Todos',
    disclaimer:
      'Alguns produtos são links de afiliação (Amazon e outros): recebemos uma pequena comissão sem custo adicional para si. Os produtos marcados como "Oficial" são merchandising próprio da visita.',
    categoryMerch: 'Recordações da visita',
    categoryReligioso: 'Artigos religiosos',
    categoryLibros: 'Livros',
    categorySouvenirs: 'Souvenirs',
    categoryRopa: 'Vestuário',
  },
}

const ca: PagesExt = {
  programa: {
    title: 'Programa de la visita',
    subtitle: 'Agenda completa del 6 al 12 de juny de 2026',
    allCities: 'Totes les ciutats',
    scheduledFor: 'Programat per a',
    attend: 'Inscriure’s',
  },
  eventTypes: {
    misa: 'Missa',
    vigilia: 'Vetlla',
    encuentro: 'Trobada',
    inauguracion: 'Inauguració',
    traslado: 'Desplaçament',
    llegada: 'Arribada',
    despedida: 'Comiat',
    'acto-publico': 'Acte públic',
  },
  ciudades: {
    title: 'Ciutats de la visita',
    subtitle: 'El Papa Lleó XIV visitarà 4 ciutats en 7 dies',
    highlights: 'Actes destacats',
    practicalInfo: 'Informació pràctica',
    howToGet: 'Com arribar',
    accommodation: 'Allotjament',
    tips: 'Consells',
    programIn: 'Programa a',
    viewFullInfo: 'Veure tota la informació',
    dates: 'Dates',
  },
  faq: {
    title: 'Preguntes freqüents',
    subtitle: 'Tot el que cal saber sobre la visita del Papa Lleó XIV a Espanya',
    notFoundTitle: 'No trobes el que busques?',
    notFoundDesc: 'Consulta la web oficial per a informació actualitzada.',
    officialSite: 'Web oficial',
    practicalGuide: 'Guia pràctica',
  },
  home: {
    dayByDayTitle: 'Programa dia a dia',
    dayByDaySubtitle: 'actes en 7 dies per 4 ciutats d’Espanya',
    events: 'actes',
    moreEvents: 'més',
    viewAllNews: 'Veure totes les notícies',
    newsletterNote: 'Rep les novetats de la visita papal per email',
    affiliateLabel1: 'Reserva el teu hotel per a la visita papal',
    affiliateLabel2: 'Compara vols a les Canàries',
    registerBtn: 'Inscriure’s a Madrid',
    fullGuideBtn: 'Guia completa',
    month3letter: 'juny',
  },
  shop: {
    title: 'Botiga commemorativa',
    subtitle: 'Articles oficials i no oficials de la visita papal',
    all: 'Tots',
    disclaimer: 'Enllaços d’afiliació. Podem rebre una comissió sense cost addicional per a tu.',
    categoryMerch: 'Marxandatge',
    categoryReligioso: 'Religiós',
    categoryLibros: 'Llibres',
    categorySouvenirs: 'Records',
    categoryRopa: 'Roba',
  },
}

const gl: PagesExt = {
  programa: {
    title: 'Programa da visita',
    subtitle: 'Axenda completa do 6 ao 12 de xuño de 2026',
    allCities: 'Todas as cidades',
    scheduledFor: 'Programado para',
    attend: 'Inscribirse',
  },
  eventTypes: {
    misa: 'Misa',
    vigilia: 'Vixilia',
    encuentro: 'Encontro',
    inauguracion: 'Inauguración',
    traslado: 'Traslado',
    llegada: 'Chegada',
    despedida: 'Despedida',
    'acto-publico': 'Acto público',
  },
  ciudades: {
    title: 'Cidades da visita',
    subtitle: 'O Papa León XIV visitará 4 cidades en 7 días',
    highlights: 'Actos destacados',
    practicalInfo: 'Información práctica',
    howToGet: 'Como chegar',
    accommodation: 'Aloxamento',
    tips: 'Consellos',
    programIn: 'Programa en',
    viewFullInfo: 'Ver toda a información',
    dates: 'Datas',
  },
  faq: {
    title: 'Preguntas frecuentes',
    subtitle: 'Todo o que necesitas saber sobre a visita do Papa León XIV a España',
    notFoundTitle: 'Non atopas o que buscas?',
    notFoundDesc: 'Consulta a web oficial para información actualizada.',
    officialSite: 'Web oficial',
    practicalGuide: 'Guía práctica',
  },
  home: {
    dayByDayTitle: 'Programa día a día',
    dayByDaySubtitle: 'actos en 7 días por 4 cidades de España',
    events: 'actos',
    moreEvents: 'máis',
    viewAllNews: 'Ver todas as novas',
    newsletterNote: 'Recibe as novidades da visita papal por email',
    affiliateLabel1: 'Reserva o teu hotel para a visita papal',
    affiliateLabel2: 'Compara voos a Canarias',
    registerBtn: 'Inscribirse en Madrid',
    fullGuideBtn: 'Guía completa',
    month3letter: 'xuño',
  },
  shop: {
    title: 'Tenda conmemorativa',
    subtitle: 'Artigos oficiais e non oficiais da visita papal',
    all: 'Todos',
    disclaimer: 'Ligazóns de afiliación. Podemos recibir unha comisión sen custo adicional para ti.',
    categoryMerch: 'Merchandising',
    categoryReligioso: 'Relixioso',
    categoryLibros: 'Libros',
    categorySouvenirs: 'Recordos',
    categoryRopa: 'Roupa',
  },
}

const eu: PagesExt = {
  programa: {
    title: 'Bisitaldiaren egitaraua',
    subtitle: '2026ko ekainaren 6tik 12rako egitaraua',
    allCities: 'Hiri guztiak',
    scheduledFor: 'Antolatua',
    attend: 'Izena eman',
  },
  eventTypes: {
    misa: 'Meza',
    vigilia: 'Bijilia',
    encuentro: 'Topaketa',
    inauguracion: 'Inauguraziao',
    traslado: 'Lekualdaketa',
    llegada: 'Heltzea',
    despedida: 'Agurra',
    'acto-publico': 'Ekitaldi publikoa',
  },
  ciudades: {
    title: 'Bisitaldiaren hiriak',
    subtitle: 'Leon XIV.a Aita Santuak 4 hiri bisitatuko ditu 7 egunetan',
    highlights: 'Ekitaldi nabarmenak',
    practicalInfo: 'Informazio praktikoa',
    howToGet: 'Nola heldu',
    accommodation: 'Ostatua',
    tips: 'Aholkuak',
    programIn: 'Egitaraua',
    viewFullInfo: 'Ikusi informazio osoa',
    dates: 'Datak',
  },
  faq: {
    title: 'Ohiko galderak',
    subtitle: 'Leon XIV.a Aita Santuaren Espainiarako bisitaldiari buruz jakin behar duzun guztia',
    notFoundTitle: 'Ez duzu bilatzen duzuna aurkitzen?',
    notFoundDesc: 'Kontsultatu webgune ofiziala informazio eguneratua eskuratzeko.',
    officialSite: 'Webgune ofiziala',
    practicalGuide: 'Gida praktikoa',
  },
  home: {
    dayByDayTitle: 'Egunez eguneko egitaraua',
    dayByDaySubtitle: 'ekitaldi 7 egunetan Espainiako 4 hiritan',
    events: 'ekitaldi',
    moreEvents: 'gehiago',
    viewAllNews: 'Ikusi albiste guztiak',
    newsletterNote: 'Jaso bisitaldi papalaren berriak eposta bidez',
    affiliateLabel1: 'Erreserbatu hotela bisitaldirako',
    affiliateLabel2: 'Konparatu Kanarietarako hegaldiak',
    registerBtn: 'Izena eman Madrilen',
    fullGuideBtn: 'Gida osoa',
    month3letter: 'eka',
  },
  shop: {
    title: 'Oroigarrien denda',
    subtitle: 'Bisitaldi papalaren produktu ofizialak eta ez-ofizialak',
    all: 'Guztiak',
    disclaimer: 'Afiliazio-estekak. Komisio bat jaso dezakegu kostu gehigarririk gabe zuretzat.',
    categoryMerch: 'Merchandising',
    categoryReligioso: 'Erlijiosoa',
    categoryLibros: 'Liburuak',
    categorySouvenirs: 'Oroigarriak',
    categoryRopa: 'Arropa',
  },
}

const pagesMap: Record<Locale, PagesExt> = { es, en, it, fr, de, pt, ca, gl, eu }

export function getPagesDict(locale: Locale): PagesExt {
  return pagesMap[locale] || es
}
