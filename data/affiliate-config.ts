/**
 * Configuración centralizada de Affiliate IDs.
 * Single source of truth para IDs de afiliación por proveedor.
 *
 * IMPORTANTE: Los IDs reales deben estar en variables de entorno.
 * Este archivo usa valores por defecto/test para desarrollo.
 */

import type { AffiliateProviderConfig } from '@/types/affiliate'

/**
 * Función auxiliar para obtener Affiliate ID de env vars con fallback
 */
function getAffiliateId(envKey: string, defaultValue: string): string {
  if (typeof process === 'undefined') return defaultValue
  const value = process.env[`NEXT_PUBLIC_${envKey}`]
  return value || defaultValue
}

/**
 * Configuración de todos los proveedores de afiliación
 */
export const AFFILIATE_PROVIDER_CONFIG: Record<string, AffiliateProviderConfig> = {
  booking: {
    provider: 'booking',
    name: 'Booking.com',
    website: 'https://booking.com',
    affiliateId: getAffiliateId('BOOKING_AID', 'BOOKING_DEV_AID'),
    active: true,
    commissionRate: 3,
    notes: 'Comisión por reserva de hotel',
  },
  trainline: {
    provider: 'trainline',
    name: 'Trainline',
    website: 'https://thetrainline.com',
    affiliateId: getAffiliateId('TRAINLINE_AID', 'TRAINLINE_DEV_AID'),
    active: true,
    commissionRate: 4,
    notes: 'Billete de tren europeo, multiidioma',
  },
  renfe: {
    provider: 'renfe',
    name: 'Renfe',
    website: 'https://renfe.com',
    affiliateId: getAffiliateId('RENFE_AID', ''),
    active: false, // Renfe no tiene programa público de afiliados
    commissionRate: 0,
    notes: 'Sin programa de afiliados público - uso como fallback de Trainline',
  },
  skyscanner: {
    provider: 'skyscanner',
    name: 'Skyscanner',
    website: 'https://skyscanner.es',
    affiliateId: getAffiliateId('SKYSCANNER_AID', 'SKYSCANNER_DEV_AID'),
    active: true,
    commissionRate: 2,
    notes: 'Búsqueda de vuelos',
  },
  amazon: {
    provider: 'amazon',
    name: 'Amazon.es',
    website: 'https://amazon.es',
    affiliateId: getAffiliateId('AMAZON_TAG', 'nuus-21'),
    active: true,
    commissionRate: 5,
    notes: 'Etiqueta de afiliado de Amazon',
  },
  intermundial: {
    provider: 'intermundial',
    name: 'Intermundial',
    website: 'https://intermundial.es',
    affiliateId: getAffiliateId('INTERMUNDIAL_AID', 'INTERMUNDIAL_DEV_AID'),
    active: true,
    commissionRate: 8,
    notes: 'Seguro de viaje',
  },
  civitatis: {
    provider: 'civitatis',
    name: 'Civitatis',
    website: 'https://civitatis.com',
    affiliateId: getAffiliateId('CIVITATIS_AID', 'CIVITATIS_DEV_AID'),
    active: true,
    commissionRate: 10,
    notes: 'Tours y actividades',
  },
  getyourguide: {
    provider: 'getyourguide',
    name: 'GetYourGuide',
    website: 'https://getyourguide.com',
    affiliateId: getAffiliateId('GETYOURGUIDE_AID', 'GETYOURGUIDE_DEV_AID'),
    active: true,
    commissionRate: 5,
    notes: 'Tours y atracciones',
  },
  holafly: {
    provider: 'holafly',
    name: 'Holafly',
    website: 'https://holafly.com',
    affiliateId: getAffiliateId('HOLAFLY_AID', 'HOLAFLY_DEV_AID'),
    active: true,
    commissionRate: 3,
    notes: 'eSIM para viajeros',
  },
  airalo: {
    provider: 'airalo',
    name: 'Airalo',
    website: 'https://airalo.com',
    affiliateId: getAffiliateId('AIRALO_AID', 'AIRALO_DEV_AID'),
    active: true,
    commissionRate: 5,
    notes: 'eSIM global',
  },
  hertz: {
    provider: 'hertz',
    name: 'Hertz',
    website: 'https://hertz.es',
    affiliateId: getAffiliateId('HERTZ_AID', 'HERTZ_DEV_AID'),
    active: true,
    commissionRate: 5,
    notes: 'Alquiler de coches',
  },
  sixt: {
    provider: 'sixt',
    name: 'Sixt',
    website: 'https://sixt.es',
    affiliateId: getAffiliateId('SIXT_AID', 'SIXT_DEV_AID'),
    active: true,
    commissionRate: 5,
    notes: 'Alquiler de coches premium',
  },
  awin: {
    provider: 'awin',
    name: 'Awin',
    website: 'https://awin.com',
    affiliateId: getAffiliateId('AWIN_PID', 'AWIN_DEV_PID'),
    active: false,
    commissionRate: 0,
    notes: 'Red de afiliación (fallback)',
  },
}

/**
 * Obtener configuración de un proveedor
 */
export function getProviderConfig(provider: string): AffiliateProviderConfig | null {
  return AFFILIATE_PROVIDER_CONFIG[provider] || null
}

/**
 * Obtener todos los proveedores activos
 */
export function getActiveProviders(): AffiliateProviderConfig[] {
  return Object.values(AFFILIATE_PROVIDER_CONFIG).filter((p) => p.active)
}

/**
 * Validar que el affiliate ID está configurado correctamente
 */
export function isAffiliateIdValid(provider: string): boolean {
  const config = getProviderConfig(provider)
  if (!config) return false
  if (!config.active) return false
  // Un affiliate ID válido no debe ser "DEV" ni vacío
  return !config.affiliateId.includes('DEV') && config.affiliateId.length > 0
}

/**
 * Limpiar affiliate ID de valores por defecto/test
 * Si es un "DEV" ID, retornar null para no enviar a usuario
 */
export function getSafeAffiliateId(id: string): string | null {
  if (!id || id.includes('DEV') || id === '') {
    return null
  }
  return id
}
