export interface TransportOption {
  name: string
  duration: string
  description: string
  affiliateId?: string
  url?: string
}

export interface CityTransport {
  citySlug: string
  cityName: string
  fromCities: TransportOption[]
  airport: string
  airportCode: string
  localTransport: string[]
  specialInfo: string
  trafficClosures: string[]
}

export const cityTransports: CityTransport[] = [
  {
    citySlug: 'madrid',
    cityName: 'Madrid',
    airport: 'Adolfo Suárez Madrid-Barajas',
    airportCode: 'MAD',
    fromCities: [
      { name: 'AVE desde Barcelona', duration: '2h 30min', description: 'Salidas cada hora de Sants a Atocha', affiliateId: 'renfe' },
      { name: 'AVE desde Sevilla', duration: '2h 30min', description: 'Trayecto directo desde Santa Justa', affiliateId: 'renfe' },
      { name: 'AVE desde Valencia', duration: '1h 40min', description: 'Salidas frecuentes desde Joaquín Sorolla', affiliateId: 'renfe' },
      { name: 'AVE desde Málaga', duration: '2h 40min', description: 'Directo desde Málaga María Zambrano', affiliateId: 'renfe' },
      { name: 'Autobús desde Lisboa', duration: '7h 30min', description: 'ALSA y FlixBus con salidas diarias' },
      { name: 'Autobús desde París', duration: '18h', description: 'FlixBus directo' },
    ],
    localTransport: [
      'Metro: 12 líneas, la red más extensa. Abono turístico desde 8,40 €/día',
      'Cercanías Renfe: 9 líneas, conecta con todos los aeropuertos y afueras',
      'EMT (autobuses): más de 200 líneas urbanas',
      'Taxi: tarifa fija desde el aeropuerto al centro (30 €)',
      'BiciMAD: bicicletas eléctricas públicas',
    ],
    specialInfo: 'Durante la visita papal se reforzarán Metro y Cercanías con horarios ampliados hasta la 01:30h. Se habilitarán servicios especiales lanzadera desde Atocha y Chamartín a los principales actos (Cibeles, Bernabéu, Castellana).',
    trafficClosures: [
      'Plaza de Cibeles y alrededores: 6-7 de junio (Misa de Corpus Christi)',
      'Paseo de la Castellana completo: noche del 6 de junio (Vigilia juvenil)',
      'Entorno del Congreso: 8 de junio mañana',
      'Zona Santiago Bernabéu: 8 de junio tarde-noche',
    ],
  },
  {
    citySlug: 'barcelona',
    cityName: 'Barcelona',
    airport: 'Josep Tarradellas Barcelona-El Prat',
    airportCode: 'BCN',
    fromCities: [
      { name: 'AVE desde Madrid', duration: '2h 30min', description: 'Cada hora, Atocha a Sants', affiliateId: 'renfe' },
      { name: 'AVE desde Zaragoza', duration: '1h 20min', description: 'Trayecto directo', affiliateId: 'renfe' },
      { name: 'TGV desde París', duration: '6h 25min', description: 'Directo desde Gare de Lyon', affiliateId: 'renfe' },
      { name: 'Autobús desde Andorra', duration: '3h 30min', description: 'Andbus, varias salidas diarias' },
      { name: 'Vuelos Madrid-Barcelona', duration: '1h 20min', description: 'Puente aéreo con salidas cada 30 min' },
    ],
    localTransport: [
      'Metro: 8 líneas, conexión directa con aeropuerto (L9 Sud)',
      'TMB autobuses: más de 100 líneas',
      'Tranvía: 6 líneas metropolitanas',
      'FGC: tren para Montserrat (línea R5 + cremallera)',
      'Bicing: red de bicicletas públicas',
      'Taxi negro y amarillo: tarifa desde aeropuerto al centro ~30 €',
    ],
    specialInfo: 'La Sagrada Familia tendrá acceso controlado durante el acto papal. Montjuïc contará con servicios especiales de transporte desde Plaza España. Renfe y FGC reforzarán los trenes a Montserrat el 10 de junio.',
    trafficClosures: [
      'Entorno Sagrada Familia (Eixample): 10 de junio todo el día',
      'Montjuïc: 9 de junio noche (vigilia)',
      'Acceso a Montserrat: tráfico regulado 10 de junio',
    ],
  },
  {
    citySlug: 'gran-canaria',
    cityName: 'Gran Canaria',
    airport: 'Gran Canaria',
    airportCode: 'LPA',
    fromCities: [
      { name: 'Vuelo desde Madrid', duration: '2h 40min', description: 'Múltiples salidas diarias (Iberia, Ryanair, Vueling)', affiliateId: 'skyscanner-canarias' },
      { name: 'Vuelo desde Barcelona', duration: '3h 00min', description: 'Vuelos directos diarios', affiliateId: 'skyscanner-canarias' },
      { name: 'Vuelo desde Tenerife', duration: '30min', description: 'Puente aéreo interinsular Binter/Canaryfly', affiliateId: 'skyscanner-canarias' },
      { name: 'Ferry desde Tenerife', duration: '1h 30min', description: 'Fred Olsen y Naviera Armas, varias salidas diarias' },
    ],
    localTransport: [
      'Global: guaguas (autobuses) interurbanas por toda la isla',
      'Guaguas Municipales (San Telmo): en Las Palmas ciudad',
      'Taxi: tarifa aeropuerto-Las Palmas ~35 €',
      'Alquiler de coche: imprescindible para moverse por la isla',
    ],
    specialInfo: 'Se habilitarán guaguas especiales desde Las Palmas a Arguineguín el 11 de junio. El estadio de Gran Canaria tendrá parking habilitado y lanzaderas desde Siete Palmas.',
    trafficClosures: [
      'Muelle de Arguineguín: 11 de junio medio día',
      'Entorno Catedral de Santa Ana (Vegueta): 11 de junio tarde',
      'Estadio de Gran Canaria: 11 de junio noche',
    ],
  },
  {
    citySlug: 'tenerife',
    cityName: 'Tenerife',
    airport: 'Tenerife Norte y Tenerife Sur',
    airportCode: 'TFN / TFS',
    fromCities: [
      { name: 'Vuelo desde Madrid', duration: '2h 45min', description: 'Iberia, Ryanair, Air Europa — múltiples frecuencias', affiliateId: 'skyscanner-canarias' },
      { name: 'Vuelo desde Barcelona', duration: '3h 10min', description: 'Vueling, Ryanair diarios', affiliateId: 'skyscanner-canarias' },
      { name: 'Vuelo desde Gran Canaria', duration: '30min', description: 'Binter y Canaryfly cada media hora', affiliateId: 'skyscanner-canarias' },
      { name: 'Ferry desde Gran Canaria', duration: '1h 30min', description: 'Agaete o Las Palmas a Santa Cruz' },
    ],
    localTransport: [
      'Tranvía: línea 1 Santa Cruz — La Laguna (30 min)',
      'TITSA: red de guaguas por toda la isla',
      'Taxi: aeropuerto Norte a Santa Cruz ~25 €, Sur ~85 €',
      'Alquiler de coche recomendado para el resto de la isla',
    ],
    specialInfo: 'La misa de clausura en el Puerto de Santa Cruz contará con servicios especiales de guaguas desde La Laguna y el aeropuerto. Parking limitado: se recomienda transporte público.',
    trafficClosures: [
      'Puerto de Santa Cruz: 12 de junio todo el día',
      'Entorno centro de acogida Las Raíces: 12 de junio mañana',
      'Accesos al aeropuerto TFN: posibles refuerzos 12 de junio tarde',
    ],
  },
]

export function getTransportByCity(citySlug: string): CityTransport | undefined {
  return cityTransports.find((t) => t.citySlug === citySlug)
}
