import { City } from '@/types/city'

export const cities: City[] = [
  {
    slug: 'madrid',
    name: 'Madrid',
    region: 'Comunidad de Madrid',
    description: 'Primera parada de la visita papal (6-8 junio). Madrid acogerá los actos de mayor dimensión institucional y eclesial: el encuentro con los Reyes en Zarzuela, la Misa de Corpus Christi en Cibeles, el histórico discurso ante el Congreso y el Senado, y el encuentro diocesano en el Bernabéu.',
    heroImage: '/images/cities/madrid.jpg',
    coordinates: { lat: 40.4168, lng: -3.7038 },
    papalDates: { start: '2026-06-06', end: '2026-06-08' },
    highlights: [
      'Encuentro con los Reyes en el Palacio de la Zarzuela',
      'Vigilia juvenil en el Paseo de la Castellana',
      'Misa de Corpus Christi en la Plaza de Cibeles',
      'Encuentro con la sociedad civil en Movistar Arena',
      'Discurso histórico ante Congreso y Senado',
      'Visita a la Catedral de la Almudena',
      'Encuentro diocesano en el Santiago Bernabéu',
      'Visita al albergue CEDIA 24h en Carabanchel',
    ],
    practicalInfo: {
      transport: [
        'Metro: líneas 1-12 con ampliación de horarios',
        'Cercanías Renfe con refuerzo especial',
        'AVE desde Barcelona (2h30), Sevilla (2h30), Valencia (1h40)',
        'Aeropuerto Adolfo Suárez Madrid-Barajas (MAD)',
      ],
      accommodation: 'Se recomienda reservar con antelación en las zonas Centro, Chamartín y Castellana, cerca de los principales actos. Parroquias y colegios religiosos ofrecerán alojamiento gratuito (registro cerrado el 17 de abril).',
      tips: [
        'Inscríbete en madrid.conelpapa.es para asistir a los actos',
        'Llega con varias horas de antelación a los eventos masivos',
        'Lleva agua, protección solar y calzado cómodo',
        'Consulta las restricciones de tráfico en esmadrid.com',
        'Se necesitan 10.000 voluntarios - inscripción hasta el 24 de abril',
      ],
    },
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    region: 'Cataluña',
    description: 'Barcelona será la parada cultural y simbólica de la visita (9-10 junio). El acto central será la bendición de la Torre de Jesucristo en la Sagrada Familia, coincidiendo con el centenario de la muerte de Gaudí y su proceso de beatificación. También se visitará el Monasterio de Montserrat.',
    heroImage: '/images/cities/barcelona.jpg',
    coordinates: { lat: 41.3874, lng: 2.1686 },
    papalDates: { start: '2026-06-09', end: '2026-06-10' },
    highlights: [
      'Vigilia en Montjuïc',
      'Visita al Monasterio de Montserrat',
      'Misa en la Basílica de la Sagrada Familia',
      'Bendición de la Torre de Jesucristo (172,5 m)',
      'Centenario de Gaudí y proceso de beatificación',
    ],
    practicalInfo: {
      transport: [
        'AVE Madrid-Barcelona (2h 30min)',
        'Aeropuerto El Prat (BCN)',
        'Metro, bus y tranvía con refuerzo',
        'FGC a Montserrat (línea R5 + cremallera)',
      ],
      accommodation: 'Reserva alojamiento en el Eixample (cerca de la Sagrada Familia) o en Sants (buena conexión con Montjuïc y Montserrat).',
      tips: [
        'La Sagrada Familia tendrá acceso controlado para el acto papal',
        'Montjuïc contará con pantallas gigantes para la vigilia',
        'Se esperan cortes de tráfico en el Eixample y Montjuïc',
        'Transporte público será la mejor opción para moverse',
      ],
    },
  },
  {
    slug: 'gran-canaria',
    name: 'Gran Canaria',
    region: 'Islas Canarias',
    description: 'Primera visita de un Papa a las Islas Canarias. El 11 de junio Gran Canaria será el núcleo social de la visita con un fuerte enfoque en la crisis migratoria. El Papa visitará el muelle de Arguineguín, símbolo de la llegada de migrantes, y celebrará misa en el estadio.',
    heroImage: '/images/cities/gran-canaria.jpg',
    coordinates: { lat: 28.1235, lng: -15.4363 },
    papalDates: { start: '2026-06-11', end: '2026-06-11' },
    highlights: [
      'Encuentro en el muelle de Arguineguín (crisis migratoria)',
      'Visita a la Catedral de Santa Ana',
      'Recepción con organizaciones humanitarias',
      'Misa pública en el Estadio de Gran Canaria',
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
        'Reserva vuelos con mucha antelación - la demanda será altísima',
        'Es la primera vez que un Papa visita Canarias',
        'El clima en junio es cálido (25-28°C) - protección solar imprescindible',
        'Arguineguín está a 50 min en coche desde Las Palmas',
      ],
    },
  },
  {
    slug: 'tenerife',
    name: 'Tenerife',
    region: 'Islas Canarias',
    description: 'Tenerife será la última parada de la visita papal el 12 de junio. El Papa visitará el centro de acogida de migrantes de Las Raíces y celebrará la misa de clausura en el Puerto de Santa Cruz, antes de regresar a Roma.',
    heroImage: '/images/cities/tenerife.jpg',
    coordinates: { lat: 28.4636, lng: -16.2518 },
    papalDates: { start: '2026-06-12', end: '2026-06-12' },
    highlights: [
      'Visita al centro de acogida Las Raíces',
      'Misa de clausura en el Puerto de Santa Cruz',
      'Despedida y regreso a Roma',
    ],
    practicalInfo: {
      transport: [
        'Aeropuerto Tenerife Norte (TFN) y Tenerife Sur (TFS)',
        'Vuelos interinsulares desde Gran Canaria (30 min)',
        'Tranvía entre Santa Cruz y La Laguna',
        'Guaguas TITSA',
      ],
      accommodation: 'Santa Cruz de Tenerife y La Laguna son las mejores zonas. Puerto de la Cruz también es opción con buena conexión.',
      tips: [
        'Si vienes desde Gran Canaria, hay vuelos interinsulares frecuentes y ferry',
        'El tranvía conecta Santa Cruz con La Laguna en 30 minutos',
        'La misa de clausura en el puerto será el acto final - muy emotivo',
        'Último día: prepara tu vuelta con antelación',
      ],
    },
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
