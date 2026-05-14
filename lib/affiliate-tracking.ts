/**
 * Tracking GA4 de clicks en enlaces de afiliación.
 *
 * Solo emite eventos si:
 *   1. window.gtag está disponible (GA cargado)
 *   2. El usuario ha dado consentimiento (la guarda ya la aplica
 *      <GoogleAnalytics>: si no hay consent, no se carga gtag.js,
 *      por lo que window.gtag no existe y la función es un no-op).
 *
 * Evento estándar: 'affiliate_click' con parámetros provider, category,
 * placement y opcional city para análisis por ciudad de la visita.
 */

type Provider = 'amazon' | 'booking' | 'intermundial' | 'skyscanner' | 'civitatis' | 'getyourguide' | 'holafly' | 'airalo' | 'hertz' | 'sixt' | 'awin' | 'other'
type Category = 'hotel' | 'flight' | 'tour' | 'insurance' | 'esim' | 'car-rental' | 'merch' | 'book' | 'gear' | 'other'
type Placement = 'card' | 'banner' | 'inline' | 'cta' | 'sidebar' | 'kit' | 'shop'

export interface AffiliateClickParams {
  provider: Provider
  category: Category
  placement: Placement
  city?: 'madrid' | 'barcelona' | 'gran-canaria' | 'tenerife' | 'general'
  productId?: string
  href?: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

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
    })
  } catch {
    // No bloquear navegación si falla el tracking
  }
}
