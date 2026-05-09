'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick, type AffiliateClickParams } from '@/lib/affiliate-tracking'

interface Props extends AffiliateClickParams {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  /**
   * `rel` por defecto: 'nofollow sponsored noopener noreferrer'.
   * No tocar salvo necesidad legal/tecnica concreta.
   */
  rel?: string
}

/**
 * Wrapper estándar para CUALQUIER enlace externo de afiliación.
 *
 * Garantiza:
 *   - rel="nofollow sponsored noopener noreferrer"
 *   - target="_blank"
 *   - Tracking GA4 'affiliate_click' (gateado por consentimiento del banner
 *     de cookies vía window.gtag, que solo existe si hay consent).
 *
 * Uso:
 *   <AffiliateLink
 *     href="https://amazon.es/...&tag=nuus-21"
 *     provider="amazon"
 *     category="merch"
 *     placement="kit"
 *     city="madrid"
 *   >
 *     Ver en Amazon
 *   </AffiliateLink>
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
}: Props) {
  const handleClick = () => {
    trackAffiliateClick({ provider, category, placement, city, productId, href })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
