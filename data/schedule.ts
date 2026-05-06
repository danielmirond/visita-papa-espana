import { ScheduleDay } from '@/types/schedule'

/**
 * Programa oficial del Viaje Apostólico del Papa León XIV a España
 * (6-12 de junio de 2026).
 *
 * Fuente: programa publicado por la Sala de Prensa de la Santa Sede
 * y la Conferencia Episcopal Española el 6 de mayo de 2026.
 *   - Vatican News: vaticannews.va/es/papa/news/2026-05/papa-leon-xiv-...
 *   - CEE: conferenciaepiscopal.es/agenda-oficial-papa-viaje-espana
 *
 * Horarios en hora local española.
 */

export const schedule: ScheduleDay[] = [
  // ===========================================================================
  // SÁBADO 6 DE JUNIO — MADRID
  // ===========================================================================
  {
    date: '2026-06-06',
    citySlug: 'madrid',
    label: 'Sábado 6 de junio',
    events: [
      {
        id: 'llegada-madrid',
        title: 'Llegada a Madrid',
        description: 'Llegada del Papa León XIV al Aeropuerto Adolfo Suárez Madrid-Barajas y recepción oficial por las autoridades civiles y eclesiásticas.',
        date: '2026-06-06',
        startTime: '10:30',
        citySlug: 'madrid',
        location: 'Aeropuerto Adolfo Suárez Madrid-Barajas',
        eventType: 'llegada',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'palacio-real',
        title: 'Ceremonia de bienvenida en el Palacio Real',
        description: 'Ceremonia oficial de bienvenida con los Reyes Felipe VI y Letizia, autoridades del Estado y el cuerpo diplomático en el Palacio Real de Madrid.',
        date: '2026-06-06',
        startTime: '11:30',
        citySlug: 'madrid',
        location: 'Palacio Real de Madrid',
        eventType: 'acto-publico',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'cedia-carabanchel',
        title: 'Visita al proyecto social CEDIA 24 Horas',
        description: 'Visita a los operadores y asistidos del proyecto social «CEDIA 24 HORAS» en el Centro de Información y Acogida de Cáritas en el barrio de Carabanchel. Encuentro con personas en exclusión social.',
        date: '2026-06-06',
        startTime: '18:00',
        citySlug: 'madrid',
        location: 'CEDIA 24h, Cáritas Madrid · Carabanchel',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'vigilia-plaza-lima',
        title: 'Vigilia de oración con los jóvenes',
        description: 'Gran vigilia de oración con jóvenes en la Plaza de Lima. Recorrido del Papa en papamóvil, palabras del Santo Padre y adoración eucarística.',
        date: '2026-06-06',
        startTime: '20:30',
        citySlug: 'madrid',
        location: 'Plaza de Lima, Madrid',
        eventType: 'vigilia',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es/auth',
      },
    ],
  },

  // ===========================================================================
  // DOMINGO 7 DE JUNIO — MADRID (Solemnidad del Corpus Christi)
  // ===========================================================================
  {
    date: '2026-06-07',
    citySlug: 'madrid',
    label: 'Domingo 7 de junio · Corpus Christi',
    events: [
      {
        id: 'misa-cibeles',
        title: 'Santa Misa del Corpus Christi y procesión eucarística',
        description: 'Santa Misa solemne del Corpus Christi presidida por el Papa León XIV en la Plaza de Cibeles, seguida de procesión eucarística por las zonas adyacentes. Jornada de la Caridad.',
        date: '2026-06-07',
        startTime: '10:00',
        citySlug: 'madrid',
        location: 'Plaza de Cibeles',
        eventType: 'misa',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es/auth',
      },
      {
        id: 'movistar-arena',
        title: 'Encuentro «Tejer redes» con la sociedad civil',
        description: 'Encuentro «Tejer redes con el mundo de la cultura, del arte, de la economía y del deporte» en el Movistar Arena.',
        date: '2026-06-07',
        startTime: '18:00',
        citySlug: 'madrid',
        location: 'Movistar Arena',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
      },
    ],
  },

  // ===========================================================================
  // LUNES 8 DE JUNIO — MADRID
  // ===========================================================================
  {
    date: '2026-06-08',
    citySlug: 'madrid',
    label: 'Lunes 8 de junio',
    events: [
      {
        id: 'audiencia-presidente',
        title: 'Audiencia con el Presidente del Gobierno',
        description: 'Audiencia privada del Papa León XIV con el Presidente del Gobierno de España en la Nunciatura Apostólica.',
        date: '2026-06-08',
        startTime: '09:30',
        citySlug: 'madrid',
        location: 'Nunciatura Apostólica',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'congreso',
        title: 'Discurso ante los parlamentarios españoles',
        description: 'Encuentro y discurso del Santo Padre con los parlamentarios españoles en el Congreso de los Diputados. Acto histórico en sesión conjunta con el Senado.',
        date: '2026-06-08',
        startTime: '10:30',
        citySlug: 'madrid',
        location: 'Congreso de los Diputados',
        eventType: 'acto-publico',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'obispos-cee',
        title: 'Encuentro con los obispos españoles',
        description: 'Encuentro del Papa con la Conferencia Episcopal Española y todos los obispos de España en su sede.',
        date: '2026-06-08',
        startTime: '12:30',
        citySlug: 'madrid',
        location: 'Sede de la Conferencia Episcopal Española',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'almudena',
        title: 'Oración mariana en la Catedral de la Almudena',
        description: 'Oración mariana en la Catedral de Santa María la Real de la Almudena ante la imagen de la Virgen patrona de Madrid.',
        date: '2026-06-08',
        startTime: '17:00',
        citySlug: 'madrid',
        location: 'Catedral de Santa María la Real de la Almudena',
        eventType: 'acto-publico',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'bernabeu-diocesano',
        title: 'Encuentro con la comunidad diocesana en el Bernabéu',
        description: 'Gran encuentro multitudinario del Papa con la comunidad diocesana de Madrid en el Estadio Santiago Bernabéu.',
        date: '2026-06-08',
        startTime: '19:00',
        citySlug: 'madrid',
        location: 'Estadio Santiago Bernabéu',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://madrid.conelpapa.es',
      },
    ],
  },

  // ===========================================================================
  // MARTES 9 DE JUNIO — MADRID → BARCELONA
  // ===========================================================================
  {
    date: '2026-06-09',
    citySlug: 'madrid',
    label: 'Martes 9 de junio · Madrid–Barcelona',
    events: [
      {
        id: 'voluntarios-ifema',
        title: 'Encuentro con los voluntarios de la visita',
        description: 'Acto de agradecimiento del Papa León XIV a los voluntarios del Viaje Apostólico en IFEMA Madrid.',
        date: '2026-06-09',
        startTime: '09:30',
        citySlug: 'madrid',
        location: 'IFEMA Madrid',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'traslado-barcelona',
        title: 'Traslado a Barcelona',
        description: 'Vuelo Madrid–Barcelona. Llegada al Aeropuerto Josep Tarradellas Barcelona-El Prat a las 12:25.',
        date: '2026-06-09',
        startTime: '11:30',
        citySlug: 'barcelona',
        location: 'Madrid · Aeropuerto El Prat',
        eventType: 'traslado',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'hora-media-catedral-bcn',
        title: 'Rezo de la Hora Media en la Catedral de Barcelona',
        description: 'Rezo litúrgico de la Hora Media en la Catedral de la Santa Cruz y Santa Eulalia con el cabildo y representantes de la Iglesia de Barcelona.',
        date: '2026-06-09',
        startTime: '13:00',
        citySlug: 'barcelona',
        location: 'Catedral de la Santa Cruz y Santa Eulalia',
        eventType: 'acto-publico',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'vigilia-lluis-companys',
        title: 'Vigilia de oración en el Estadio Olímpico',
        description: 'Vigilia de oración presidida por el Papa León XIV en el Estadio Olímpico Lluís Companys de Montjuïc, con miles de fieles de las diócesis catalanas.',
        date: '2026-06-09',
        startTime: '20:00',
        citySlug: 'barcelona',
        location: 'Estadio Olímpico Lluís Companys, Montjuïc',
        eventType: 'vigilia',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es/auth',
      },
    ],
  },

  // ===========================================================================
  // MIÉRCOLES 10 DE JUNIO — BARCELONA
  // ===========================================================================
  {
    date: '2026-06-10',
    citySlug: 'barcelona',
    label: 'Miércoles 10 de junio',
    events: [
      {
        id: 'brians-1',
        title: 'Visita al Centro Penitenciario Brians 1',
        description: 'Visita pastoral del Papa León XIV al Centro Penitenciario Brians 1 (Sant Esteve Sesrovires). Encuentro con internos y trabajadores en uno de los gestos más significativos del viaje.',
        date: '2026-06-10',
        startTime: '10:50',
        citySlug: 'barcelona',
        location: 'Centro Penitenciario Brians 1, Sant Esteve Sesrovires',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'rosario-montserrat',
        title: 'Rezo del Santo Rosario en Montserrat',
        description: 'Rezo del Santo Rosario presidido por el Papa en la Abadía de Nuestra Señora de Montserrat, ante la imagen de la Moreneta, patrona de Cataluña.',
        date: '2026-06-10',
        startTime: '12:00',
        citySlug: 'barcelona',
        location: 'Abadía de Nuestra Señora de Montserrat',
        eventType: 'acto-publico',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'iglesia-san-agustin',
        title: 'Encuentro con realidades diocesanas de caridad',
        description: 'Encuentro del Santo Padre con las realidades diocesanas de caridad y asistencia (Cáritas Diocesana y otras entidades) en la iglesia de San Agustín, en el Raval barcelonés.',
        date: '2026-06-10',
        startTime: '16:30',
        citySlug: 'barcelona',
        location: 'Iglesia de San Agustín, Raval',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'misa-sagrada-familia',
        title: 'Santa Misa en la Sagrada Familia · inauguración Torre de Jesucristo',
        description: 'Santa Misa solemne en la Basílica de la Sagrada Familia presidida por el Papa León XIV. Durante la celebración tendrá lugar la inauguración y bendición de la Torre de Jesucristo (172,5 m), coincidiendo con el centenario de la muerte de Antoni Gaudí y su proceso de beatificación.',
        date: '2026-06-10',
        startTime: '19:30',
        citySlug: 'barcelona',
        location: 'Basílica de la Sagrada Familia',
        eventType: 'misa',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es/auth',
      },
    ],
  },

  // ===========================================================================
  // JUEVES 11 DE JUNIO — GRAN CANARIA
  // ===========================================================================
  {
    date: '2026-06-11',
    citySlug: 'gran-canaria',
    label: 'Jueves 11 de junio',
    events: [
      {
        id: 'llegada-canarias',
        title: 'Llegada a Gran Canaria',
        description: 'Llegada del Papa León XIV a la Base Aérea de Gran Canaria/Gando. Recepción oficial.',
        date: '2026-06-11',
        startTime: '10:50',
        citySlug: 'gran-canaria',
        location: 'Base Aérea de Gran Canaria · Gando',
        eventType: 'llegada',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'arguineguin',
        title: 'Encuentro con asociaciones de acogida a migrantes',
        description: 'Encuentro del Papa con las asociaciones de acogida a personas migrantes en el muelle de Arguineguín, símbolo de la ruta atlántica y de la crisis migratoria canaria. Acto de fuerte carga simbólica sobre los derechos y la dignidad de los migrantes.',
        date: '2026-06-11',
        startTime: '11:40',
        citySlug: 'gran-canaria',
        location: 'Muelle de Arguineguín',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'catedral-santa-ana',
        title: 'Encuentro en la Catedral de Santa Ana',
        description: 'Encuentro del Santo Padre con obispos, sacerdotes, diáconos, religiosos, religiosas, seminaristas y agentes de pastoral en la Catedral de Santa Ana de Las Palmas.',
        date: '2026-06-11',
        startTime: '13:30',
        citySlug: 'gran-canaria',
        location: 'Catedral de Santa Ana, Las Palmas de Gran Canaria',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'misa-estadio-gc',
        title: 'Santa Misa en el Estadio de Gran Canaria',
        description: 'Santa Misa pública presidida por el Papa León XIV en el Estadio de Gran Canaria, con la presencia de las diócesis canarias y peregrinos venidos de toda España. Acto abierto al público hasta completar aforo, con inscripción previa obligatoria gestionada por la Diócesis de Canarias.',
        date: '2026-06-11',
        startTime: '18:30',
        citySlug: 'gran-canaria',
        location: 'Estadio de Gran Canaria',
        eventType: 'misa',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es',
      },
    ],
  },

  // ===========================================================================
  // VIERNES 12 DE JUNIO — TENERIFE
  // ===========================================================================
  {
    date: '2026-06-12',
    citySlug: 'tenerife',
    label: 'Viernes 12 de junio',
    events: [
      {
        id: 'salida-gc',
        title: 'Salida desde Gran Canaria',
        description: 'Salida del Papa desde la Base Aérea de Gando hacia el Aeropuerto Tenerife Norte-Los Rodeos.',
        date: '2026-06-12',
        startTime: '08:30',
        citySlug: 'tenerife',
        location: 'Base Aérea de Gando · Tenerife Norte',
        eventType: 'traslado',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'las-raices',
        title: 'Visita a los migrantes del centro Las Raíces',
        description: 'Visita del Papa León XIV al centro de acogida Las Raíces (La Laguna), encuentro con migrantes y trabajadores sociales.',
        date: '2026-06-12',
        startTime: '09:30',
        citySlug: 'tenerife',
        location: 'Centro de acogida Las Raíces, La Laguna',
        eventType: 'encuentro',
        isPublic: false,
        isConfirmed: true,
      },
      {
        id: 'plaza-cristo-laguna',
        title: 'Encuentro de integración en La Laguna',
        description: 'Encuentro con las realidades de integración de personas migrantes en la Plaza del Cristo de La Laguna, ante el Real Santuario del Santísimo Cristo.',
        date: '2026-06-12',
        startTime: '10:10',
        citySlug: 'tenerife',
        location: 'Plaza del Cristo, San Cristóbal de La Laguna',
        eventType: 'encuentro',
        isPublic: true,
        isConfirmed: true,
      },
      {
        id: 'misa-santa-cruz',
        title: 'Santa Misa de clausura en Santa Cruz de Tenerife',
        description: 'Santa Misa de clausura del Viaje Apostólico, presidida por el Papa León XIV en el Puerto de Santa Cruz de Tenerife.',
        date: '2026-06-12',
        startTime: '12:15',
        citySlug: 'tenerife',
        location: 'Puerto de Santa Cruz de Tenerife',
        eventType: 'misa',
        isPublic: true,
        isConfirmed: true,
        registrationUrl: 'https://inscripciones.conelpapa.es/auth',
      },
      {
        id: 'despedida',
        title: 'Ceremonia de despedida y regreso a Roma',
        description: 'Ceremonia oficial de despedida del Papa León XIV en el Aeropuerto Tenerife Norte-Los Rodeos. Fin del Viaje Apostólico a España.',
        date: '2026-06-12',
        startTime: '17:00',
        citySlug: 'tenerife',
        location: 'Aeropuerto Tenerife Norte-Los Rodeos',
        eventType: 'despedida',
        isPublic: false,
        isConfirmed: true,
      },
    ],
  },
]

export function getScheduleByCity(citySlug: string): ScheduleDay[] {
  return schedule.filter((day) => day.citySlug === citySlug)
}

export function getScheduleByDate(date: string): ScheduleDay | undefined {
  return schedule.find((day) => day.date === date)
}
