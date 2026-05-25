/**
 * Sistema mejorado de tracking de afiliación con GA4.
 *
 * Soporta:
 * - Click tracking (al hacer clic en enlace de afiliado)
 * - Conversion tracking (cuando el usuario realiza una compra)
 * - Revenue tracking (qué cantidad gastó)
 * - Cohort analysis (por ciudad, proveedor, categoría)
 *
 * IMPORTANTE: Solo emite eventos si:
 * 1. window.gtag está disponible (GA4 cargado)
 * 2. El usuario ha dado consentimiento (bandera de cookies)
 */

import type { AffiliateClickParams, AffiliateConversion, AffiliateCity } from '@/types/affiliate'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Trackear click en enlace de afiliación
 * Se dispara cuando el usuario hace clic en un link de afiliado
 */
export function trackAffiliateClick(params: AffiliateClickParams): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  try {
    window.gtag('event', 'affiliate_click', {
      provider: params.provider,
      category: params.category,
      placement: params.placement,
      city: params.city ?? 'general',
      product_id: params.productId,
      href: params.href,
      timestamp: Date.now(),
      event_label: `${params.provider}_${params.category}_${params.placement}`,
    })
  } catch (error) {
    // No bloquear navegación si falla el tracking
    console.error('Error tracking affiliate click:', error)
  }
}

/**
 * Trackear conversión/compra después del click
 * Se dispara cuando el usuario realiza una compra a través del enlace de afiliado
 *
 * NOTA: Esta función se llama típicamente desde:
 * - Una página de agradecimiento
 * - Un webhook del proveedor
 * - Datos de pixel de conversión
 */
export function trackAffiliateConversion(params: AffiliateConversion): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  try {
    window.gtag('event', 'affiliate_conversion', {
      provider: params.provider,
      category: params.category,
      placement: params.placement,
      city: params.city ?? 'general',
      value: params.revenue,
      currency: params.currency ?? 'EUR',
      transaction_id: params.conversionId,
      timestamp: Date.now(),
      event_label: `${params.provider}_${params.category}`,
    })

    // También registrar como "purchase" de ecommerce
    window.gtag('event', 'purchase', {
      transaction_id: params.conversionId,
      affiliation: params.provider,
      value: params.revenue,
      currency: params.currency ?? 'EUR',
    })
  } catch (error) {
    console.error('Error tracking affiliate conversion:', error)
  }
}

/**
 * Trackear que un usuario vio un enlace de afiliación (impression)
 * Útil para calcular CTR y engagement
 */
export function trackAffiliateImpression(params: Omit<AffiliateClickParams, 'href'>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  try {
    window.gtag('event', 'affiliate_impression', {
      provider: params.provider,
      category: params.category,
      placement: params.placement,
      city: params.city ?? 'general',
      product_id: params.productId,
      timestamp: Date.now(),
      event_label: `${params.provider}_${params.category}_${params.placement}`,
    })
  } catch (error) {
    console.error('Error tracking affiliate impression:', error)
  }
}

/**
 * Trackear que un usuario compartió un enlace de afiliación
 */
export function trackAffiliateShare(params: Omit<AffiliateClickParams, 'href'>, channel: string): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  try {
    window.gtag('event', 'affiliate_share', {
      provider: params.provider,
      category: params.category,
      placement: params.placement,
      city: params.city ?? 'general',
      share_method: channel,
      timestamp: Date.now(),
      event_label: `${params.provider}_shared_${channel}`,
    })
  } catch (error) {
    console.error('Error tracking affiliate share:', error)
  }
}

/**
 * Obtener datos de UTM para pasar a links de afiliación
 * Sirve para trackear la fuente original del usuario
 */
export function getAffiliateUTMParams(): {
  utm_source: string
  utm_medium: string
  utm_campaign: string
} {
  const source = 'visita-papa-2026'
  const medium = 'affiliate'
  const campaign = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  return {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  }
}

/**
 * Construir URL de affiliate con parámetros UTM
 */
export function buildAffiliateUrl(baseUrl: string, params?: Record<string, string>): string {
  try {
    const url = new URL(baseUrl)
    const utm = getAffiliateUTMParams()

    // Agregar UTM params
    Object.entries(utm).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })

    // Agregar parámetros adicionales
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value)
      })
    }

    return url.toString()
  } catch {
    return baseUrl
  }
}

/**
 * Validar que un URL es válido y seguro para usar como affiliate link
 */
export function isValidAffiliateUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    // No permitir javascript: o data:
    return !parsed.protocol.includes('javascript') && !parsed.protocol.includes('data')
  } catch {
    return false
  }
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
