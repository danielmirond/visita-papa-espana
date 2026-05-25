'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { trackAffiliateClick, trackAffiliateImpression, trackAffiliateShare } from '@/lib/affiliate-tracking'
import type { AffiliateClickParams } from '@/types/affiliate'
import AffiliateBadge from './AffiliateBadge'

interface Props extends AffiliateClickParams {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  /**
   * Mostrar badge de "patrocinado"
   * @default true
   */
  showBadge?: boolean
  /**
   * Variante del badge: 'inline', 'badge', 'tooltip'
   * @default 'badge'
   */
  badgeVariant?: 'inline' | 'badge' | 'tooltip'
  /**
   * `rel` por defecto: 'nofollow sponsored noopener noreferrer'
   */
  rel?: string
  /**
   * Ejecutar tracking de impresión al cargar (viewable)
   * @default false
   */
  trackImpression?: boolean
  /**
   * Mostrar menu de compartir social
   * @default false
   */
  showShare?: boolean
}

/**
 * Wrapper mejorado para enlaces de afiliación
 *
 * Garantiza:
 * - rel="nofollow sponsored noopener noreferrer"
 * - target="_blank"
 * - Tracking GA4 de clicks, impressions, shares
 * - Gateado por consentimiento de cookies (window.gtag)
 * - Badge opcional indicando que es patrocinado
 * - Menú de compartir (opcional)
 *
 * Ejemplo básico:
 * ```tsx
 * <AffiliateLink
 *   href="https://booking.com/...&aid=123"
 *   provider="booking"
 *   category="hotel"
 *   placement="card"
 *   city="madrid"
 * >
 *   Ver hoteles en Booking
 * </AffiliateLink>
 * ```
 *
 * Ejemplo con badge y compartir:
 * ```tsx
 * <AffiliateLink
 *   href="https://amazon.es/...&tag=nuus-21"
 *   provider="amazon"
 *   category="merchandise"
 *   placement="card"
 *   showBadge
 *   showShare
 * >
 *   Ver en Amazon
 * </AffiliateLink>
 * ```
 */
export default function AffiliateLink({
  href,
  children,
  className,
  ariaLabel,
  rel = 'nofollow sponsored noopener noreferrer',
  provider,
  category,
  placement,
  city,
  productId,
  revenue,
  showBadge = true,
  badgeVariant = 'badge',
  trackImpression: trackImpressionProp = false,
  showShare = false,
}: Props) {
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Track impression al montar (si está habilitado)
  if (typeof window !== 'undefined' && trackImpressionProp) {
    // Usar requestIdleCallback para no bloquear render
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        trackAffiliateImpression({
          provider,
          category,
          placement,
          city,
          productId,
        })
      })
    }
  }

  const handleClick = () => {
    trackAffiliateClick({
      provider,
      category,
      placement,
      city,
      productId,
      href,
      revenue,
    })
  }

  const handleShare = (channel: 'whatsapp' | 'twitter' | 'facebook' | 'telegram' | 'email') => {
    trackAffiliateShare(
      {
        provider,
        category,
        placement,
        city,
        productId,
      },
      channel
    )

    const text = `Mira este enlace útil para la visita del Papa: ${children}`
    const encodedUrl = encodeURIComponent(href)
    const encodedText = encodeURIComponent(text)

    const shareUrls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:?subject=Link%20para%20visita%20papa&body=${encodedText}`,
    }

    if (shareUrls[channel]) {
      window.open(shareUrls[channel], '_blank', 'noopener noreferrer')
    }

    setShowShareMenu(false)
  }

  return (
    <div className="relative inline-block group">
      <a
        href={href}
        target="_blank"
        rel={rel}
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        <span>{children}</span>
        {showBadge && <AffiliateBadge variant={badgeVariant} size="sm" className="ml-1" />}
      </a>

      {/* Share menu (opcional) */}
      {showShare && (
        <div className="absolute right-0 top-full mt-2 z-50">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            title="Compartir"
            aria-label="Compartir enlace"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15.898 4.045c-3.639-3.639-9.54-3.639-13.179 0-3.638 3.638-3.638 9.537 0 13.174 3.639 3.639 9.54 3.639 13.179 0 3.638-3.636 3.638-9.535 0-13.174zM10 14.4c-.778 0-1.4-.622-1.4-1.4.001-.778.622-1.4 1.4-1.4.777 0 1.399.622 1.399 1.4 0 .778-.621 1.4-1.399 1.4zM10 6.4c-.778 0-1.4.622-1.4 1.4v3c0 .778.622 1.4 1.4 1.4s1.4-.622 1.4-1.4V7.8c0-.778-.622-1.4-1.4-1.4z" />
            </svg>
          </button>

          {showShareMenu && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-lg p-2 border border-gray-200 animate-in fade-in-50 duration-100">
              <button
                onClick={() => handleShare('whatsapp')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Twitter/X
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Facebook
              </button>
              <button
                onClick={() => handleShare('telegram')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Telegram
              </button>
              <button
                onClick={() => handleShare('email')}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Email
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
