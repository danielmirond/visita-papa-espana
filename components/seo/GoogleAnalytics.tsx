'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { hasAnalyticsConsent } from '@/components/shared/CookieBanner'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    // Comprobar consentimiento inicial
    setConsent(hasAnalyticsConsent())

    // Escuchar cambios de consentimiento
    const handler = () => setConsent(hasAnalyticsConsent())
    window.addEventListener('cookie-consent-change', handler)
    return () => window.removeEventListener('cookie-consent-change', handler)
  }, [])

  if (!GA_ID || !consent) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
