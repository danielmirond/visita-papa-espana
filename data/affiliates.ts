/**
 * Base de datos de enlaces de afiliación.
 * Usa la configuración centralizada de affiliate-config.ts
 */

import type { AffiliateLink } from '@/types/affiliate'
import { getProviderConfig, getSafeAffiliateId, isAffiliateIdValid } from './affiliate-config'
import { buildAffiliateUrl, isValidAffiliateUrl } from '@/lib/affiliate-tracking'

/**
 * Función auxiliar para construir URL de Booking con affiliate ID
 */
function buildBookingUrl(city: string, checkin: string, checkout: string): string {
  const config = getProviderConfig('booking')
  if (!config || !isAffiliateIdValid('booking')) {
    return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}`
  }

  const affiliateId = getSafeAffiliateId(config.affiliateId)
  const baseUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}`

  if (affiliateId) {
    return `${baseUrl}&aid=${affiliateId}`
  }
  return baseUrl
}

/**
 * Función auxiliar para construir URL de Trainline con affiliate ID
 */
function buildTrainlineUrl(): string {
  const config = getProviderConfig('trainline')
  const baseUrl = 'https://www.thetrainline.com/es'

  if (!config || !isAffiliateIdValid('trainline')) {
    return baseUrl
  }

  const affiliateId = getSafeAffiliateId(config.affiliateId)
  if (affiliateId) {
    return buildAffiliateUrl(`${baseUrl}?affid=${affiliateId}`)
  }

  return buildAffiliateUrl(baseUrl)
}

/**
 * Función auxiliar para construir URL de Amazon con tag de afiliado
 */
function buildAmazonUrl(searchTerm: string): string {
  const config = getProviderConfig('amazon')
  const tag = config ? getSafeAffiliateId(config.affiliateId) : null

  const baseUrl = `https://www.amazon.es/s?k=${encodeURIComponent(searchTerm)}`
  if (tag) {
    return `${baseUrl}&tag=${tag}`
  }
  return baseUrl
}

/**
 * Función auxiliar para construir URL de Intermundial
 */
function buildIntermundialUrl(): string {
  const config = getProviderConfig('intermundial')
  const baseUrl = 'https://www.intermundial.es/'

  if (!config || !isAffiliateIdValid('intermundial')) {
    return baseUrl
  }

  const affiliateId = getSafeAffiliateId(config.affiliateId)
  if (affiliateId) {
    return `${baseUrl}?aff=${affiliateId}`
  }

  return baseUrl
}

/**
 * Base de datos de todos los enlaces de afiliación disponibles
 * Se actualiza automáticamente según la configuración en affiliate-config.ts
 */
export const affiliates: AffiliateLink[] = [
  // ============================================================
  // HOTELES
  // ============================================================
  {
    id: 'booking-madrid',
    provider: 'booking',
    url: buildBookingUrl('Madrid', '2026-06-05', '2026-06-09'),
    displayName: 'Hoteles en Madrid',
    description: 'Reserva tu hotel en Madrid para la visita del Papa (5-9 junio). Cancelación gratuita en la mayoría de alojamientos.',
    category: 'hotel',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 3,
  },
  {
    id: 'booking-barcelona',
    provider: 'booking',
    url: buildBookingUrl('Barcelona', '2026-06-08', '2026-06-11'),
    displayName: 'Hoteles en Barcelona',
    description: 'Alojamiento en Barcelona para los actos en la Sagrada Familia y Montjuïc (8-11 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 3,
  },
  {
    id: 'booking-gran-canaria',
    provider: 'booking',
    url: buildBookingUrl('Las Palmas de Gran Canaria', '2026-06-10', '2026-06-12'),
    displayName: 'Hoteles en Gran Canaria',
    description: 'Alojamiento en Las Palmas para la visita papal a Canarias (10-12 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 3,
  },
  {
    id: 'booking-tenerife',
    provider: 'booking',
    url: buildBookingUrl('Santa Cruz de Tenerife', '2026-06-11', '2026-06-13'),
    displayName: 'Hoteles en Tenerife',
    description: 'Alojamiento en Santa Cruz de Tenerife para la misa de clausura (11-13 junio).',
    category: 'hotel',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 3,
  },

  // ============================================================
  // TRANSPORTE
  // ============================================================
  {
    id: 'trainline-spain',
    provider: 'trainline',
    url: buildTrainlineUrl(),
    displayName: 'Tren a España · Trainline',
    description: 'Compara y compra billetes de tren a Madrid, Barcelona y resto de España. Multiidioma, ideal para peregrinos europeos.',
    category: 'flight',
    placement: ['card', 'inline', 'cta'],
    status: 'active',
    commissionRate: 4,
    notes: 'Cubre Renfe, SNCF, Trenitalia, DB',
  },
  {
    id: 'renfe-fallback',
    provider: 'renfe',
    url: 'https://www.renfe.com/es/es',
    displayName: 'Billetes AVE - Renfe',
    description: 'Reserva billetes de AVE para viajar a Madrid y Barcelona. Consigue los mejores precios comprando con antelación.',
    category: 'flight',
    placement: ['card', 'inline'],
    status: 'inactive', // Fallback si Trainline no está disponible
    commissionRate: 0,
    notes: 'Fallback de Trainline - Renfe no tiene programa público',
  },
  {
    id: 'skyscanner-canarias',
    provider: 'skyscanner',
    url: 'https://www.skyscanner.es/vuelos-a-gran-canaria.html',
    displayName: 'Vuelos a Canarias',
    description: 'Compara precios de vuelos a Gran Canaria y Tenerife. Reserva con antelación para conseguir las mejores ofertas.',
    category: 'flight',
    placement: ['card', 'inline', 'cta'],
    status: 'active',
    commissionRate: 2,
  },

  // ============================================================
  // TOURS Y ACTIVIDADES
  // ============================================================
  {
    id: 'civitatis-madrid',
    provider: 'civitatis',
    url: 'https://www.civitatis.com/es/madrid/?ref=VISITA_PAPA_2026',
    displayName: 'Tours en Madrid',
    description: 'Tours guiados, museos, experiencias gastronómicas en Madrid. Cancela gratis hasta 24h antes.',
    category: 'tour',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 10,
  },
  {
    id: 'getyourguide-barcelona',
    provider: 'getyourguide',
    url: 'https://www.getyourguide.com/barcelona-l113/?partner_id=VISITA_PAPA_2026',
    displayName: 'Atracciones en Barcelona',
    description: 'Sagrada Familia, Park Güell, tours privados. Entrada sin colas a principales atracciones.',
    category: 'tour',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 5,
  },

  // ============================================================
  // SEGUROS
  // ============================================================
  {
    id: 'intermundial-travel',
    provider: 'intermundial',
    url: buildIntermundialUrl(),
    displayName: 'Seguro de viaje',
    description: 'Cobertura completa: asistencia médica, cancelaciones, pérdida de equipaje, robo. Reembolsos rápidos.',
    category: 'insurance',
    placement: ['card', 'banner', 'cta'],
    status: 'active',
    commissionRate: 8,
  },

  // ============================================================
  // eSIM / TELECOM
  // ============================================================
  {
    id: 'holafly-esim',
    provider: 'holafly',
    url: 'https://holafly.com?utm_source=visita-papa-2026&utm_medium=affiliate',
    displayName: 'eSIM Holafly',
    description: 'Conectividad global sin cambiar tu tarjeta SIM. Datos ilimitados en Europa. Activación instantánea.',
    category: 'esim',
    placement: ['card', 'inline', 'sidebar'],
    status: 'active',
    commissionRate: 3,
  },
  {
    id: 'airalo-esim',
    provider: 'airalo',
    url: 'https://airalo.com?utm_source=visita-papa-2026',
    displayName: 'Airalo eSIM',
    description: 'eSIM global con cobertura en 200+ países. Planes flexibles por días o GB. Sin contratos.',
    category: 'esim',
    placement: ['card', 'inline', 'sidebar'],
    status: 'active',
    commissionRate: 5,
  },

  // ============================================================
  // ALQUILER DE COCHES
  // ============================================================
  {
    id: 'hertz-rental',
    provider: 'hertz',
    url: 'https://www.hertz.es/?utm_source=visita-papa-2026',
    displayName: 'Alquiler coches - Hertz',
    description: 'Alquila coche en Madrid, Barcelona, Canarias. Seguro incluido, flexible, best price guarantee.',
    category: 'car-rental',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 5,
  },
  {
    id: 'sixt-rental',
    provider: 'sixt',
    url: 'https://www.sixt.es/?utm_source=visita-papa-2026',
    displayName: 'Alquiler premium - Sixt',
    description: 'Coches de lujo y premium. Flota nueva, servicio impecable, entrega/recogida flexible.',
    category: 'car-rental',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 5,
  },

  // ============================================================
  // MERCHANDISING
  // ============================================================
  {
    id: 'amazon-merchandise',
    provider: 'amazon',
    url: buildAmazonUrl('papa leon xiv'),
    displayName: 'Artículos Papa León XIV',
    description: 'Recuerdos, libros, artículos conmemorativos de la visita del Papa a España.',
    category: 'merchandise',
    placement: ['card', 'inline', 'shop'],
    status: 'active',
    commissionRate: 5,
  },
  {
    id: 'amazon-travel-gear',
    provider: 'amazon',
    url: buildAmazonUrl('mochila peregrinacion'),
    displayName: 'Mochilas y equipo de viaje',
    description: 'Mochilas, sacos de dormir, botas de peregrino. Calidad probada para caminatas largas.',
    category: 'gear',
    placement: ['card', 'inline', 'sidebar'],
    status: 'active',
    commissionRate: 5,
  },
  {
    id: 'amazon-religion-books',
    provider: 'amazon',
    url: buildAmazonUrl('libro leon xiv papa'),
    displayName: 'Libros sobre el Papa León XIV',
    description: 'Biografías, análisis doctrinal, historia del pontificado de León XIV.',
    category: 'book',
    placement: ['card', 'inline'],
    status: 'active',
    commissionRate: 5,
  },
]

/**
 * Obtener todos los enlaces de afiliación
 */
export function getAllAffiliates(): AffiliateLink[] {
  return affiliates.filter((a) => a.status === 'active' && isValidAffiliateUrl(a.url))
}

/**
 * Obtener enlaces de afiliación por categoría
 */
export function getAffiliatesByCategory(category: string): AffiliateLink[] {
  return affiliates.filter((a) => a.category === category && a.status === 'active' && isValidAffiliateUrl(a.url))
}

/**
 * Obtener enlace de afiliación por ID
 */
export function getAffiliateById(id: string): AffiliateLink | undefined {
  return affiliates.find((a) => a.id === id && a.status === 'active' && isValidAffiliateUrl(a.url))
}

/**
 * Obtener enlaces de afiliación por proveedor
 */
export function getAffiliatesByProvider(provider: string): AffiliateLink[] {
  return affiliates.filter((a) => a.provider === provider && a.status === 'active' && isValidAffiliateUrl(a.url))
}

/**
 * Obtener enlaces de afiliación por placement (ubicación en la página)
 */
export function getAffiliatesByPlacement(placement: string): AffiliateLink[] {
  return affiliates.filter((a) => a.placement.includes(placement as any) && a.status === 'active' && isValidAffiliateUrl(a.url))
}
