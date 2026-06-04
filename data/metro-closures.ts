/**
 * Estaciones de metro / cercanías cerradas durante la visita del Papa
 * León XIV (6-12 junio 2026), por ciudad.
 *
 * Responde a una intención de búsqueda con fuerte crecimiento:
 * «estaciones de metro cerradas por la visita del papa», «metro cerrado
 * visita papa», «calles cortadas Barcelona visita papa».
 *
 * Fuentes oficiales y de prensa (sujeto a cambios de última hora; cada
 * ciudad enlaza su fuente). Verificar siempre el día del evento con
 * Metro de Madrid (@metro_madrid) y TMB (@TMBinfo).
 */

export interface MetroClosureGroup {
  day: string
  dayEn: string
  event: string
  eventEn: string
  schedule: string
  scheduleEn: string
  /** Nombres de estación (propios; iguales en todos los idiomas) */
  stations: string[]
  note?: string
  noteEn?: string
}

export interface CityMetroClosures {
  city: 'madrid' | 'barcelona' | 'gran-canaria' | 'tenerife'
  groups: MetroClosureGroup[]
  freeTransport?: string
  freeTransportEn?: string
  source: { label: string; url: string }
  /** Fecha de última verificación (YYYY-MM-DD) */
  updatedAt: string
}

export const metroClosures: CityMetroClosures[] = [
  {
    city: 'madrid',
    updatedAt: '2026-06-04',
    freeTransport:
      'Autobuses de la EMT y BiciMAD gratuitos del 3 al 9 de junio (excepto la línea Exprés Aeropuerto).',
    freeTransportEn:
      'EMT buses and BiciMAD bike-sharing are free from 3 to 9 June (except the Airport Express line).',
    source: {
      label: 'El Debate / Ayuntamiento de Madrid',
      url: 'https://www.eldebate.com/espana/madrid/20260529/estas-seran-15-estaciones-metro-cerradas-visita-leon-xiv-madrid-cns_422894.html',
    },
    groups: [
      {
        day: 'Sáb 6 jun',
        dayEn: 'Sat 6 Jun',
        event: 'Vigilia juvenil — Plaza de Lima',
        eventEn: 'Youth vigil — Plaza de Lima',
        schedule: '17:00–22:00',
        scheduleEn: '5:00–10:00 PM',
        stations: ['Nuevos Ministerios (accesos junto a Plaza de Lima)', 'Cuzco', 'Santiago Bernabéu'],
        note: 'Cierre de accesos por el dispositivo de seguridad en el entorno de Plaza de Lima.',
        noteEn: 'Entrance closures due to the security operation around Plaza de Lima.',
      },
      {
        day: 'Dom 7 jun',
        dayEn: 'Sun 7 Jun',
        event: 'Misa del Corpus — Plaza de Cibeles',
        eventEn: 'Corpus Christi Mass — Plaza de Cibeles',
        schedule: '06:00–10:00',
        scheduleEn: '6:00–10:00 AM',
        stations: [
          'Bilbao',
          'Tribunal',
          'Plaza de España',
          'Noviciado',
          'Ópera',
          'Sol',
          'Sevilla',
          'Banco de España',
          'Retiro',
          'Príncipe de Vergara',
          'Serrano',
          'Colón',
          'Chueca',
        ],
      },
      {
        day: 'Dom 7 jun',
        dayEn: 'Sun 7 Jun',
        event: 'Misa del Corpus — Plaza de Cibeles',
        eventEn: 'Corpus Christi Mass — Plaza de Cibeles',
        schedule: '10:00–14:00',
        scheduleEn: '10:00 AM–2:00 PM',
        stations: ['Colón', 'Serrano', 'Velázquez', 'Retiro', 'Banco de España', 'Sevilla', 'Chueca'],
        note: 'Las suspensiones son puntuales y dentro del horario establecido: confirma tu línea antes de viajar.',
        noteEn: 'Suspensions are punctual and within the set schedule: check your line before travelling.',
      },
    ],
  },
  {
    city: 'barcelona',
    updatedAt: '2026-06-04',
    source: {
      label: 'TMB / Metrópoli (El Español)',
      url: 'https://metropoliabierta.elespanol.com/movilidad/20260528/calles-cortadas-estaciones-metro-cerradas-visita-papa-leon-xiv-refuerzo-servicio-desvios-trafico/1003742765356_0.html',
    },
    groups: [
      {
        day: 'Mié 10 jun',
        dayEn: 'Wed 10 Jun',
        event: 'Misa en la Sagrada Família y papamóvil',
        eventEn: 'Mass at the Sagrada Família and popemobile',
        schedule: 'Todo el día',
        scheduleEn: 'All day',
        stations: ['Sagrada Família (L2 y L5) — los trenes pasan sin detenerse'],
        note: 'Perímetro blindado de 9 manzanas (Rosselló, Lepant, València y Sicília). Calles cortadas: Rosselló, Mallorca, Provença, Marina y Sardenya. Refuerzo de L1–L5 y lanzadera Plaça Espanya–Estadi Olímpic.',
        noteEn: 'Sealed 9-block perimeter (Rosselló, Lepant, València and Sicília). Closed streets: Rosselló, Mallorca, Provença, Marina and Sardenya. Reinforced L1–L5 and shuttle Plaça Espanya–Olympic Stadium.',
      },
    ],
  },
]

export function getMetroClosures(city: string): CityMetroClosures | undefined {
  return metroClosures.find((c) => c.city === city)
}
