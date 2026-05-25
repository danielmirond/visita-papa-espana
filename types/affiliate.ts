/**
 * Tipos centralizados para sistema de afiliación.
 * Single source of truth para toda la lógica de afiliados.
 */

// Proveedores soportados
export const AFFILIATE_PROVIDERS = [
  'amazon',
  'booking',
  'trainline',
  'renfe',
  'skyscanner',
  'intermundial',
  'civitatis',
  'getyourguide',
  'holafly',
  'airalo',
  'hertz',
  'sixt',
  'awin',
] as const

export type AffiliateProvider = (typeof AFFILIATE_PROVIDERS)[number]

// Categorías de productos/servicios
export const AFFILIATE_CATEGORIES = [
  'hotel',
  'flight',
  'tour',
  'insurance',
  'esim',
  'car-rental',
  'merchandise',
  'book',
  'gear',
] as const

export type AffiliateCategory = (typeof AFFILIATE_CATEGORIES)[number]

// Ubicaciones donde se muestran enlaces
export const AFFILIATE_PLACEMENTS = [
  'card',      // Tarjeta de producto
  'banner',    // Banner horizontal
  'inline',    // Dentro de párrafo
  'cta',       // Call-to-action button
  'sidebar',   // Barra lateral
  'kit',       // Kit/paquete de enlaces
  'shop',      // Tienda
] as const

export type AffiliatePlacement = (typeof AFFILIATE_PLACEMENTS)[number]

// Ciudades para tracking y segmentación
export const AFFILIATE_CITIES = [
  'madrid',
  'barcelona',
  'gran-canaria',
  'tenerife',
  'general',
] as const

export type AffiliateCity = (typeof AFFILIATE_CITIES)[number]

/**
 * Enlace de afiliación con toda la metadata necesaria
 */
export interface AffiliateLink {
  id: string
  provider: AffiliateProvider
  url: string
  displayName: string
  description: string
  category: AffiliateCategory
  placement: AffiliatePlacement[]
  imageUrl?: string

  // Metadata de gestión
  affiliateId?: string // ID específico del proveedor (ej: "booking_123456")
  commissionRate?: number // Porcentaje de comisión (ej: 5)
  status: 'active' | 'inactive' | 'test' // Estado del enlace
  notes?: string // Notas internas sobre el enlace
}

/**
 * Parámetros para tracking de clicks en afiliados
 */
export interface AffiliateClickParams {
  provider: AffiliateProvider
  category: AffiliateCategory
  placement: AffiliatePlacement
  city?: AffiliateCity
  productId?: string
  href?: string
  revenue?: number // Para conversiones posteriores
}

/**
 * Datos de conversión/compra (enviados después del click)
 */
export interface AffiliateConversion {
  provider: AffiliateProvider
  category: AffiliateCategory
  placement: AffiliatePlacement
  city?: AffiliateCity
  revenue: number
  currency: string
  conversionId: string
  timestamp: number
}

/**
 * Configuración de un proveedor de afiliación
 */
export interface AffiliateProviderConfig {
  provider: AffiliateProvider
  name: string
  website: string
  affiliateId: string // ID único para este proveedor
  active: boolean
  commissionRate?: number
  notes?: string
}
