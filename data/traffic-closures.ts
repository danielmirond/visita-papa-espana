/**
 * Estructura de cierres de tráfico para cada ciudad
 * Los cierres están organizados por fecha y hora exacta
 * para facilitar la visualización en timeline
 */

export interface TrafficClosure {
  id: string
  street: string
  description: string
  startTime: string // HH:mm formato 24h
  endTime: string // HH:mm formato 24h
  severity: 'high' | 'medium' | 'low'
  affectedAreas?: string[] // zonas secundarias afectadas
  emtAlternatives?: string[] // líneas alternativas de EMT
  parkingInfo?: string // info sobre aparcamiento
}

export interface CityTrafficClosures {
  city: string
  date: string // YYYY-MM-DD
  closures: TrafficClosure[]
}

export const trafficClosures: CityTrafficClosures[] = [
  // Madrid: 6-9 junio
  {
    city: 'madrid',
    date: '2026-06-06',
    closures: [
      {
        id: 'mad-060600-001',
        street: 'Plaza Mayor',
        description: 'Cierre total. Acto inauguración de la visita',
        startTime: '08:00',
        endTime: '14:00',
        severity: 'high',
        affectedAreas: ['C/ Mayor', 'C/ Bailén', 'C/ Juanelo'],
        emtAlternatives: ['25', '39', '50'],
        parkingInfo: 'Parkings: APK Plaza Mayor (subterráneo), Aparcabuses Centro',
      },
      {
        id: 'mad-060600-002',
        street: 'Paseo de la Castellana',
        description: 'Carril reversible cerrado. Ruta procesional',
        startTime: '14:30',
        endTime: '18:30',
        severity: 'high',
        affectedAreas: ['Nudo de Azca', 'Bernabéu'],
        emtAlternatives: ['5', '7', '27'],
        parkingInfo: 'Estacionamiento restringido en Castellana.',
      },
    ],
  },
  {
    city: 'madrid',
    date: '2026-06-07',
    closures: [
      {
        id: 'mad-070600-001',
        street: 'C/ Bailén - Catedral',
        description: 'Cierre total. Celebración en la Catedral',
        startTime: '09:00',
        endTime: '13:00',
        severity: 'high',
        affectedAreas: ['Plaza Oriente', 'Parque del Retiro (accesos)'],
        emtAlternatives: ['1', '2', '46', '62'],
        parkingInfo: 'Parking Catedral (subterráneo), Centro Comercial Preciados',
      },
      {
        id: 'mad-070600-002',
        street: 'Av. Diagonal - Parque del Retiro',
        description: 'Carril derecha cerrado. Discurso público',
        startTime: '16:00',
        endTime: '19:30',
        severity: 'medium',
        affectedAreas: ['Puerta de Alcalá', 'Salón del Prado'],
        emtAlternatives: ['9', '19', '28'],
        parkingInfo: 'Parkings Retiro cercanos',
      },
    ],
  },
  {
    city: 'madrid',
    date: '2026-06-08',
    closures: [
      {
        id: 'mad-080600-001',
        street: 'Estadio Santiago Bernabéu',
        description: 'Accesos principales cerrados. Gran concentración',
        startTime: '06:00',
        endTime: '22:00',
        severity: 'high',
        affectedAreas: ['Paseo de la Castellana', 'Av. Concha Espina', 'Calle Padre Damián'],
        emtAlternatives: ['5', '16', '27', '40', '147'],
        parkingInfo: 'Prohibido aparcar en zona. Parking Bernabéu lleno desde 07:00. Utilizar Moncloa.',
      },
    ],
  },
  {
    city: 'madrid',
    date: '2026-06-09',
    closures: [
      {
        id: 'mad-090600-001',
        street: 'Puente de Segovia - Palacio Real',
        description: 'Cierre total. Acto de despedida',
        startTime: '08:30',
        endTime: '13:00',
        severity: 'high',
        affectedAreas: ['C/ Bailén', 'Plaza Oriente', 'Templo de Debod'],
        emtAlternatives: ['25', '39', '65'],
        parkingInfo: 'Parking subterráneo Palacio Real, Príncipe Pío',
      },
    ],
  },

  // Barcelona: 9-10 junio
  {
    city: 'barcelona',
    date: '2026-06-09',
    closures: [
      {
        id: 'bcn-090600-001',
        street: 'La Rambla',
        description: 'Cierre total. Recepción oficial y actos religiosos',
        startTime: '09:00',
        endTime: '15:00',
        severity: 'high',
        affectedAreas: ['Plaça Reial', 'Barri Gòtic', 'Portal de l\'Àngel'],
        emtAlternatives: ['TMB 14', 'TMB 3', 'TMB 16'],
        parkingInfo: 'Parking Portal de l\'Àngel, Plaça Catalunya (subterráneo)',
      },
      {
        id: 'bcn-090600-002',
        street: 'Avenida Gaudi - Sagrada Familia',
        description: 'Carril reversible cerrado. Recorrido procesional',
        startTime: '15:30',
        endTime: '19:30',
        severity: 'high',
        affectedAreas: ['Eixample', 'Passeig de Sant Joan'],
        emtAlternatives: ['TMB 2', 'TMB 19', 'TMB 24'],
        parkingInfo: 'Aparcabuses Sagrada Familia, Parking Gaudi',
      },
    ],
  },
  {
    city: 'barcelona',
    date: '2026-06-10',
    closures: [
      {
        id: 'bcn-100600-001',
        street: 'Montjuïc - Plaça d\'Espanya',
        description: 'Accesos cerrados. Acto en Montjuïc',
        startTime: '07:00',
        endTime: '14:00',
        severity: 'high',
        affectedAreas: ['Av. de la Reina María Cristina', 'Anella Olímpica', 'Museu Nacional'],
        emtAlternatives: ['TMB 13', 'TMB 23', 'TMB 150'],
        parkingInfo: 'Estacionamiento en Plaça d\'Espanya subterráneo. Evitar zona hasta las 14h.',
      },
    ],
  },

  // Gran Canaria: 11 junio
  {
    city: 'gran-canaria',
    date: '2026-06-11',
    closures: [
      {
        id: 'gc-110600-001',
        street: 'Playa de las Canteras',
        description: 'Cierre total. Acto de canonización',
        startTime: '08:00',
        endTime: '16:00',
        severity: 'high',
        affectedAreas: ['C/ Vegueta', 'C/ León y Castillo', 'Av. Marítima'],
        emtAlternatives: ['GUAGUA 1', 'GUAGUA 2', 'GUAGUA 3', 'GUAGUA 9'],
        parkingInfo: 'Parking Vegueta, Centro Comercial. Playas del Sur cerradas (exceso afluencia).',
      },
      {
        id: 'gc-110600-002',
        street: 'Av. Marítima Norte',
        description: 'Cierre parcial. Tránsito hacia Santa Brígida',
        startTime: '10:00',
        endTime: '15:30',
        severity: 'medium',
        affectedAreas: ['Barrio de Vegueta', 'Benito Pérez Galdós'],
        emtAlternatives: ['GUAGUA 311', 'GUAGUA 311A'],
        parkingInfo: 'Centro Comercial del Este, Parking Wanda',
      },
    ],
  },

  // Tenerife: 12 junio
  {
    city: 'tenerife',
    date: '2026-06-12',
    closures: [
      {
        id: 'tf-120600-001',
        street: 'Plaza de España - Auditorio',
        description: 'Cierre total. Acto de clausura',
        startTime: '09:00',
        endTime: '14:00',
        severity: 'high',
        affectedAreas: ['C/ Castillo', 'Av. Ángel Guimerá', 'Parque García Sanabria'],
        emtAlternatives: ['TITSA 5', 'TITSA 6', 'TITSA 10'],
        parkingInfo: 'Parking Centro Comercial Carrefour, Av. Ángel Guimerá (subterráneo).',
      },
      {
        id: 'tf-120600-002',
        street: 'Av. Ángel Guimerá',
        description: 'Carril reversible cerrado. Despedida oficial',
        startTime: '14:30',
        endTime: '17:00',
        severity: 'medium',
        affectedAreas: ['Puerto de Santa Cruz', 'Mercado de Nuestra Señora de África'],
        emtAlternatives: ['TITSA 3', 'TITSA 8', 'TITSA 12'],
        parkingInfo: 'Estacionamiento en parking Costa Sahara, Puerto viejo.',
      },
    ],
  },
]

/**
 * Líneas EMT/transporte público alternativas generales
 * (aplicables cuando la ruta principal está cerrada)
 */
export const emtAlternativesGeneral: Record<string, string[]> = {
  madrid: [
    'Línea 25: Moncloa - Puerta de América',
    'Línea 50: Circular Ferrocarril de Arganda',
    'Línea 65: Plaza de Castilla - Méndez Álvaro',
    'Metro Línea 1: Valdecarros - Pinar de Chamartín',
    'Cercanías C-1: Alcalá de Henares - Fuenlabrada',
  ],
  barcelona: [
    'TMB Línea 3: Zona Universitaria - Plaça Lesseps',
    'TMB Línea 6: Sants - Barberà del Vallès',
    'TMB Línea 14: Parc Logístic - Plaça Lesseps',
    'Metro Línea 2: Paral·lel - Badalona Pompeu Fabra',
    'Renfe R2 Nord: Aeroport - Mataró',
  ],
  'gran-canaria': [
    'GUAGUA 1: Vegueta - Playa de las Canteras',
    'GUAGUA 2: Ciudad Jardín - Playa de las Canteras',
    'GUAGUA 3: Mercado Vegueta - Playa de las Canteras',
    'GUAGUA 311: Las Palmas - Maspalomas',
  ],
  tenerife: [
    'TITSA 5: San Cristóbal - Icod de los Vinos',
    'TITSA 6: San Cristóbal - La Orotava',
    'TITSA 10: San Cristóbal - Puerto de la Cruz',
    'Tren Tenerife: Intercambiador - Los Rodeos',
  ],
}

/**
 * Información general de aparcamiento por ciudad
 */
export const parkingInfo: Record<
  string,
  {
    name: string
    address: string
    spaces: number
    price: string
    accessible: boolean
  }[]
> = {
  madrid: [
    {
      name: 'APK Plaza Mayor',
      address: 'Plaza Mayor, 27 - 28012',
      spaces: 550,
      price: '2,50€ la hora / 18€ día',
      accessible: true,
    },
    {
      name: 'Parking Bernabéu',
      address: 'Paseo de la Castellana, 259',
      spaces: 800,
      price: '3€ la hora',
      accessible: true,
    },
    {
      name: 'Aparcabuses Centro',
      address: 'C/ Goya, 85',
      spaces: 400,
      price: '12€ día',
      accessible: false,
    },
    {
      name: 'Moncloa Visitantes',
      address: 'Av. Complutense, 40',
      spaces: 1200,
      price: '1,50€ la hora',
      accessible: true,
    },
  ],
  barcelona: [
    {
      name: 'Plaça Catalunya (subterráneo)',
      address: 'Plaça de Catalunya',
      spaces: 650,
      price: '2,80€ la hora / 24€ día',
      accessible: true,
    },
    {
      name: 'Portal de l\'Àngel',
      address: 'Passeig de Gràcia, 19',
      spaces: 580,
      price: '2,80€ la hora',
      accessible: true,
    },
    {
      name: 'Parking Sagrada Familia',
      address: 'C/ Mallorca, 401',
      spaces: 300,
      price: '3€ la hora',
      accessible: true,
    },
  ],
  'gran-canaria': [
    {
      name: 'Parking Vegueta',
      address: 'C/ Mayor de Triana',
      spaces: 400,
      price: '1,50€ la hora',
      accessible: true,
    },
    {
      name: 'Centro Comercial del Este',
      address: 'Av. Marítima',
      spaces: 800,
      price: 'Gratuito primeras 2h (con compra)',
      accessible: true,
    },
  ],
  tenerife: [
    {
      name: 'Centro Comercial Carrefour',
      address: 'Av. Ángel Guimerá',
      spaces: 500,
      price: 'Gratuito (con compra >20€)',
      accessible: true,
    },
    {
      name: 'Parking Costa Sahara',
      address: 'C/ Castillo, 45',
      spaces: 350,
      price: '1,20€ la hora',
      accessible: true,
    },
  ],
}
