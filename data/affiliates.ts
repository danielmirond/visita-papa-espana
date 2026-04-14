import { AffiliateLink } from '@/types/affiliate'

export const affiliates: AffiliateLink[] = [
  // Hoteles
  {
    id: 'booking-madrid',
    provider: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Madrid&checkin=2026-06-05&checkout=2026-06-09&aid=TUAFFILIATEID',
    displayName: 'Hoteles en Madrid',
    description: 'Reserva tu hotel en Madrid para la visita del Papa (5-9 junio). Cancelacion gratuita en la mayoria de alojamientos.',
    category: 'hotel',
    placement: ['card', 'inline'],
  },
  {
    id: 'booking-barcelona',
    provider: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Barcelona&checkin=2026-06-08&checkout=2026-06-11&aid=TUAFFILIATEID',
    displayName: 'Hoteles en Barcelona',
    description: 'Alojamiento en Barcelona para los actos en la Sagrada Familia y Montjuic (8-11 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
  },
  {
    id: 'booking-las-palmas',
    provider: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Las+Palmas+de+Gran+Canaria&checkin=2026-06-10&checkout=2026-06-12&aid=TUAFFILIATEID',
    displayName: 'Hoteles en Gran Canaria',
    description: 'Alojamiento en Las Palmas para la visita papal a Canarias (10-12 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
  },
  {
    id: 'booking-tenerife',
    provider: 'booking',
    url: 'https://www.booking.com/searchresults.html?ss=Santa+Cruz+de+Tenerife&checkin=2026-06-11&checkout=2026-06-13&aid=TUAFFILIATEID',
    displayName: 'Hoteles en Tenerife',
    description: 'Alojamiento en Santa Cruz de Tenerife para la misa de clausura (11-13 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
  },
  // Transporte
  {
    id: 'renfe',
    provider: 'renfe',
    url: 'https://www.renfe.com/es/es',
    displayName: 'Billetes AVE - Renfe',
    description: 'Reserva billetes de AVE para viajar a Madrid y Barcelona. Consigue los mejores precios comprando con antelacion.',
    category: 'transporte',
    placement: ['card', 'inline'],
  },
  {
    id: 'skyscanner-canarias',
    provider: 'skyscanner',
    url: 'https://www.skyscanner.es/vuelos-a-gran-canaria.html',
    displayName: 'Vuelos a Canarias',
    description: 'Compara precios de vuelos a Gran Canaria y Tenerife. Reserva con antelacion para conseguir las mejores ofertas.',
    category: 'transporte',
    placement: ['card', 'inline'],
  },
  // Seguros
  {
    id: 'seguro-viaje',
    provider: 'seguro',
    url: 'https://www.intermundial.es/?aff=TUAFFILIATEID',
    displayName: 'Seguro de viaje',
    description: 'Viaja tranquilo con un seguro que cubra asistencia medica, cancelaciones y perdida de equipaje.',
    category: 'seguro',
    placement: ['card', 'banner'],
  },
  // Merchandising
  {
    id: 'amazon-religioso',
    provider: 'amazon',
    url: 'https://www.amazon.es/s?k=papa+leon+xiv&tag=TUAFFILIATEID',
    displayName: 'Articulos Papa Leon XIV',
    description: 'Recuerdos, libros y articulos conmemorativos de la visita del Papa a Espana.',
    category: 'merchandising',
    placement: ['card', 'inline'],
  },
]

export function getAffiliatesByCategory(category: string): AffiliateLink[] {
  return affiliates.filter((a) => a.category === category)
}

export function getAffiliateById(id: string): AffiliateLink | undefined {
  return affiliates.find((a) => a.id === id)
}
