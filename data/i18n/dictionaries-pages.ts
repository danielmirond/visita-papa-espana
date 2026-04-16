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
}

const pagesMap: Record<Locale, PagesExt> = { es, en, it, fr, de, pt }

export function getPagesDict(locale: Locale): PagesExt {
  return pagesMap[locale] || es
}
