/**
 * Coordenadas geográficas de los venues de la visita papal.
 *
 * Se usan para dibujar pins en los mapas por ciudad. Todas las
 * coordenadas son aproximadas pero suficientemente precisas para
 * un mapa interactivo a escala urbana/regional.
 */

import type { PapalEvent } from '@/types/schedule'

export interface VenueCoords {
  lat: number
  lng: number
}

/**
 * Lookup por coincidencia del texto `location` en el evento.
 * Se busca primero por substring normalizado.
 */
const VENUE_COORDS: Array<{ match: RegExp; coords: VenueCoords }> = [
  // MADRID
  {
    match: /adolfo\s+su[aá]rez|barajas/i,
    coords: { lat: 40.4719, lng: -3.5626 }, // Aeropuerto
  },
  {
    match: /zarzuela/i,
    coords: { lat: 40.4495, lng: -3.7504 }, // Palacio de la Zarzuela
  },
  {
    match: /cedia|carabanchel/i,
    coords: { lat: 40.3906, lng: -3.7350 }, // Carabanchel
  },
  {
    match: /plaza\s+de\s+lima/i,
    coords: { lat: 40.4558, lng: -3.6896 }, // Plaza de Lima
  },
  {
    match: /plaza\s+de\s+cibeles|cibeles/i,
    coords: { lat: 40.4196, lng: -3.6929 }, // Plaza de Cibeles
  },
  {
    match: /movistar\s+arena/i,
    coords: { lat: 40.4234, lng: -3.6740 }, // Movistar Arena
  },
  {
    match: /congreso\s+de\s+los\s+diputados|congreso/i,
    coords: { lat: 40.4164, lng: -3.6975 }, // Congreso
  },
  {
    match: /sede\s+de\s+la\s+cee|cee$/i,
    coords: { lat: 40.4356, lng: -3.7004 }, // Sede CEE
  },
  {
    match: /almudena/i,
    coords: { lat: 40.4156, lng: -3.7144 }, // Catedral de la Almudena
  },
  {
    match: /bernab[eé]u/i,
    coords: { lat: 40.4530, lng: -3.6884 }, // Santiago Bernabéu
  },
  {
    match: /ifema/i,
    coords: { lat: 40.4664, lng: -3.6156 }, // IFEMA
  },

  // BARCELONA
  {
    match: /sagrada\s+fam[ií]lia/i,
    coords: { lat: 41.4036, lng: 2.1744 }, // Sagrada Família
  },
  {
    match: /montju[iï]c/i,
    coords: { lat: 41.3641, lng: 2.1553 }, // Montjuïc (MNAC)
  },
  {
    match: /montserrat/i,
    coords: { lat: 41.5933, lng: 1.8372 }, // Monasterio de Montserrat
  },
  {
    match: /madrid\s*-\s*barcelona|barcelona\s*-\s*madrid/i,
    // Para traslados en tren AVE — usamos Sants como punto de Barcelona
    coords: { lat: 41.3793, lng: 2.1400 },
  },

  // GRAN CANARIA
  {
    match: /arguinegu[ií]n/i,
    coords: { lat: 27.7597, lng: -15.6894 }, // Muelle de Arguineguín
  },
  {
    match: /catedral\s+de\s+santa\s+ana|las\s+palmas/i,
    coords: { lat: 28.0995, lng: -15.4169 }, // Catedral de Santa Ana
  },
  {
    match: /palacio\s+episcopal/i,
    coords: { lat: 28.0994, lng: -15.4168 }, // Palacio Episcopal (anexo a catedral)
  },
  {
    match: /estadio\s+de\s+gran\s+canaria/i,
    coords: { lat: 28.1005, lng: -15.4558 }, // Estadio Gran Canaria
  },

  // TENERIFE
  {
    match: /las\s+ra[ií]ces/i,
    coords: { lat: 28.4840, lng: -16.3089 }, // Centro de acogida Las Raíces (La Laguna)
  },
  {
    match: /puerto\s+de\s+santa\s+cruz/i,
    coords: { lat: 28.4636, lng: -16.2518 }, // Puerto de Santa Cruz de Tenerife
  },
  {
    match: /aeropuerto\s+de\s+tenerife/i,
    coords: { lat: 28.4827, lng: -16.3415 }, // Tenerife Norte
  },
]

/**
 * Devuelve las coordenadas para un evento según su campo `location`.
 * Si no hay match, devuelve null (el componente mapa lo omite).
 */
export function getEventCoords(event: PapalEvent): VenueCoords | null {
  for (const entry of VENUE_COORDS) {
    if (entry.match.test(event.location)) {
      return entry.coords
    }
  }
  return null
}
