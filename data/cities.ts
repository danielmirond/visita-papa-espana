import { City } from '@/types/city'

export const cities: City[] = [
  {
    slug: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid',
    description: 'Primera parada de la visita papal (6-8 junio). Madrid acogera los actos de mayor dimension institucional y eclesial: el encuentro con los Reyes en Zarzuela, la Misa de Corpus Christi en Cibeles, el historico discurso ante el Congreso y el Senado, y el encuentro diocesano en el Bernabeu.',
    heroImage: '/images/cities/madrid.jpg',
    coordinates: { lat: 40.4168, lng: -3.7038 },
    papalDates: { start: '2026-06-06', end: '2026-06-08' },
    highlights: [
      'Encuentro con los Reyes en el Palacio de la Zarzuela',
      'Vigilia juvenil en el Paseo de la Castellana',
      'Misa de Corpus Christi en la Plaza de Cibeles',
      'Encuentro con la sociedad civil en Movistar Arena',
      'Discurso historico ante Congreso y Senado',
      'Visita a la Catedral de la Almudena',
      'Encuentro diocesano en el Santiago Bernabeu',
      'Visita al albergue CEDIA 24h en Carabanchel',
    ],
    practicalInfo: {
      transport: [
        'Metro: lineas 1-12 con ampliacion de horarios',
        'Cercanias Renfe con refuerzo especial',
        'AVE desde Barcelona (2h30), Sevilla (2h30), Valencia (1h40)',
        'Aeropuerto Adolfo Suarez Madrid-Barajas (MAD)',
      ],
      accommodation: 'Se recomienda reservar con antelacion en las zonas Centro, Chamartin y Castellana, cerca de los principales actos. Parroquias y colegios religiosos ofreceran alojamiento gratuito (registro cerrado el 17 de abril).',
      tips: [
        'Inscribete en madrid.conelpapa.es para asistir a los actos',
        'Llega con varias horas de antelacion a los eventos masivos',
        'Lleva agua, proteccion solar y calzado comodo',
        'Consulta las restricciones de trafico en esmadrid.com',
        'Se necesitan 10.000 voluntarios - inscripcion hasta el 24 de abril',
      ],
    },
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    region: 'Cataluna',
    description: 'Barcelona sera la parada cultural y simbolica de la visita (9-10 junio). El acto central sera la bendicion de la Torre de Jesucristo en la Sagrada Familia, coincidiendo con el centenario de la muerte de Gaudi y su proceso de beatificacion. Tambien se visitara el Monasterio de Montserrat.',
    heroImage: '/images/cities/barcelona.jpg',
    coordinates: { lat: 41.3874, lng: 2.1686 },
    papalDates: { start: '2026-06-09', end: '2026-06-10' },
    highlights: [
      'Vigilia en Montjuic',
      'Visita al Monasterio de Montserrat',
      'Misa en la Basilica de la Sagrada Familia',
      'Bendicion de la Torre de Jesucristo (172,5 m)',
      'Centenario de Gaudi y proceso de beatificacion',
    ],
    practicalInfo: {
      transport: [
        'AVE Madrid-Barcelona (2h 30min)',
        'Aeropuerto El Prat (BCN)',
        'Metro, bus y tranvia con refuerzo',
        'FGC a Montserrat (linea R5 + cremallera)',
      ],
      accommodation: 'Reserva alojamiento en el Eixample (cerca de la Sagrada Familia) o en Sants (buena conexion con Montjuic y Montserrat).',
      tips: [
        'La Sagrada Familia tendra acceso controlado para el acto papal',
        'Montjuic contara con pantallas gigantes para la vigilia',
        'Se esperan cortes de trafico en el Eixample y Montjuic',
        'Transporte publico sera la mejor opcion para moverse',
      ],
    },
  },
  {
    slug: 'gran-canaria',
    name: 'Gran Canaria',
    region: 'Islas Canarias',
    description: 'Primera visita de un Papa a las Islas Canarias. El 11 de junio Gran Canaria sera el nucleo social de la visita con un fuerte enfoque en la crisis migratoria. El Papa visitara el muelle de Arguineguin, simbolo de la llegada de migrantes, y celebrara misa en el estadio.',
    heroImage: '/images/cities/gran-canaria.jpg',
    coordinates: { lat: 28.1235, lng: -15.4363 },
    papalDates: { start: '2026-06-11', end: '2026-06-11' },
    highlights: [
      'Encuentro en el muelle de Arguineguin (crisis migratoria)',
      'Visita a la Catedral de Santa Ana',
      'Recepcion con organizaciones humanitarias',
      'Misa publica en el Estadio de Gran Canaria',
      'Primera visita papal a Canarias en la historia',
    ],
    practicalInfo: {
      transport: [
        'Aeropuerto de Gran Canaria (LPA)',
        'Vuelos directos desde Madrid y Barcelona',
        'Guaguas (autobuses) locales Global y municipales',
      ],
      accommodation: 'Las Palmas de Gran Canaria tiene amplia oferta. Zonas recomendadas: Las Canteras, Vegueta (junto a la Catedral) y zona del estadio.',
      tips: [
        'Reserva vuelos con mucha antelacion - la demanda sera altisima',
        'Es la primera vez que un Papa visita Canarias',
        'El clima en junio es calido (25-28°C) - proteccion solar imprescindible',
        'Arguineguin esta a 50 min en coche desde Las Palmas',
      ],
    },
  },
  {
    slug: 'tenerife',
    name: 'Tenerife',
    region: 'Islas Canarias',
    description: 'Tenerife sera la ultima parada de la visita papal el 12 de junio. El Papa visitara el centro de acogida de migrantes de Las Raices y celebrara la misa de clausura en el Puerto de Santa Cruz, antes de regresar a Roma.',
    heroImage: '/images/cities/tenerife.jpg',
    coordinates: { lat: 28.4636, lng: -16.2518 },
    papalDates: { start: '2026-06-12', end: '2026-06-12' },
    highlights: [
      'Visita al centro de acogida Las Raices',
      'Misa de clausura en el Puerto de Santa Cruz',
      'Despedida y regreso a Roma',
    ],
    practicalInfo: {
      transport: [
        'Aeropuerto Tenerife Norte (TFN) y Tenerife Sur (TFS)',
        'Vuelos interinsulares desde Gran Canaria (30 min)',
        'Tranvia entre Santa Cruz y La Laguna',
        'Guaguas TITSA',
      ],
      accommodation: 'Santa Cruz de Tenerife y La Laguna son las mejores zonas. Puerto de la Cruz tambien es opcion con buena conexion.',
      tips: [
        'Si vienes desde Gran Canaria, hay vuelos interinsulares frecuentes y ferry',
        'El tranvia conecta Santa Cruz con La Laguna en 30 minutos',
        'La misa de clausura en el puerto sera el acto final - muy emotivo',
        'Ultimo dia: prepara tu vuelta con antelacion',
      ],
    },
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
