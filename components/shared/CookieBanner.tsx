'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'papa-cookie-consent'
// Renovación del consentimiento: 13 meses (buena práctica AEPD/EDPB)
const CONSENT_TTL_MS = 13 * 30 * 24 * 60 * 60 * 1000

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
  timestamp: number
  /** Versión del texto del banner; si cambia el texto, se vuelve a pedir consentimiento */
  version: string
}

const CURRENT_VERSION = '2026-04-19'

function loadConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as Consent
    // Expirar si tiene más de 13 meses o versión distinta
    const expired = Date.now() - parsed.timestamp > CONSENT_TTL_MS
    const obsoleteVersion = parsed.version !== CURRENT_VERSION
    if (expired || obsoleteVersion) return null
    return parsed
  } catch {
    return null
  }
}

function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
  } catch {}
}

export function hasAnalyticsConsent(): boolean {
  const consent = loadConsent()
  return consent?.analytics === true
}

/** Reabre el banner (para llamar desde Footer u otros sitios) */
export function openCookieBanner() {
  window.dispatchEvent(new CustomEvent('cookie-banner-open'))
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const consent = loadConsent()
    if (!consent) {
      // Sin setTimeout: el banner es position:fixed y no afecta al layout
      // principal. La animación slide-up (animate-cookie-slide-up en
      // globals.css) evita el "flash" visual y da sensación de entrada
      // suave sin bloquear LCP.
      setVisible(true)
      return
    }
    // Prerellenar los valores actuales por si abren preferencias
    setAnalytics(consent.analytics)
    setMarketing(consent.marketing)
  }, [])

  // Escuchar eventos externos (link "Preferencias" del footer)
  useEffect(() => {
    const handler = () => {
      const consent = loadConsent()
      if (consent) {
        setAnalytics(consent.analytics)
        setMarketing(consent.marketing)
      }
      setShowDetails(true)
      setVisible(true)
    }
    window.addEventListener('cookie-banner-open', handler)
    return () => window.removeEventListener('cookie-banner-open', handler)
  }, [])

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    })
    setVisible(false)
  }

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    })
    setVisible(false)
  }

  const handleSavePreferences = () => {
    saveConsent({
      necessary: true,
      analytics,
      marketing,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    })
    setVisible(false)
  }

  if (!visible) return null

  // Botones: igual peso visual entre Aceptar y Rechazar (AEPD 2023)
  const btnEqual =
    'flex-1 sm:flex-initial rounded-lg border-2 border-papal-navy bg-white px-4 py-2 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-cream'
  const btnSecondary =
    'rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-medium text-papal-navy transition-colors hover:bg-papal-cream'

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      aria-describedby="cookie-banner-body"
      className="animate-cookie-slide-up fixed inset-x-0 bottom-0 z-[60] border-t-2 border-papal-gold bg-white shadow-[0_-8px_24px_rgba(27,42,74,0.15)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {!showDetails ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1" id="cookie-banner-body">
              <h2 className="font-heading text-base font-bold text-papal-navy">
                Aviso de cookies
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-papal-navy/75">
                El responsable del sitio (Daniel Mirón) utiliza
                <strong> cookies propias técnicas</strong> —necesarias, exentas de consentimiento—
                y <strong>cookies analíticas de terceros</strong> (Google Analytics, Google LLC)
                para medir el uso del sitio y mejorarlo. Las cookies de marketing se usan solo
                si activas la opción correspondiente. Puedes{' '}
                <strong>aceptar todas</strong>, <strong>rechazar todas</strong> (sin consecuencia
                sobre el acceso) o <strong>configurarlas</strong>. Tu elección se guarda 13 meses
                y puedes revocarla en cualquier momento desde el enlace &ldquo;Preferencias de
                cookies&rdquo; del pie de página. Más información en la{' '}
                <Link
                  href="/politica-cookies"
                  className="text-papal-gold-dark underline hover:text-papal-gold"
                >
                  política de cookies
                </Link>{' '}
                y la{' '}
                <Link
                  href="/privacidad"
                  className="text-papal-gold-dark underline hover:text-papal-gold"
                >
                  política de privacidad
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className={btnSecondary}
                aria-label="Abrir preferencias de cookies"
              >
                Preferencias
              </button>
              <button
                onClick={handleRejectAll}
                className={btnEqual}
                aria-label="Rechazar todas las cookies opcionales"
              >
                Rechazar todas
              </button>
              <button
                onClick={handleAcceptAll}
                className={btnEqual}
                aria-label="Aceptar todas las cookies"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-heading text-base font-bold text-papal-navy">
              Preferencias de cookies
            </h2>
            <p className="mt-1 text-xs text-papal-navy/60">
              Marca las categorías que autorizas. Las cookies técnicas son imprescindibles y
              están exentas de consentimiento según el art. 22.2 de la LSSI.
            </p>
            <div className="mt-3 space-y-3">
              <label className="flex items-start gap-3 rounded-lg border border-papal-gold/20 bg-papal-cream p-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 accent-papal-gold"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-papal-navy">
                    Cookies técnicas necesarias
                    <span className="ml-2 text-xs font-normal text-papal-navy/60">
                      (siempre activas · exentas de consentimiento)
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    <code>papa-cookie-consent</code> · propia · duración 13 meses ·
                    almacena tu elección de cookies.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 rounded-lg border border-papal-gold/20 p-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-papal-gold"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-papal-navy">Cookies analíticas</p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    Google Analytics 4 (<strong>Google LLC</strong>, Estados Unidos, amparado
                    por SCCs). Mide páginas vistas, dispositivo y país con IP anonimizada.
                    Cookies: <code>_ga</code>, <code>_ga_*</code> · duración 2 años / 24 h.
                    Transferencia internacional: sí (EE. UU., con cláusulas contractuales tipo
                    aprobadas por la Comisión Europea).
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 rounded-lg border border-papal-gold/20 p-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-papal-gold"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold text-papal-navy">
                    Cookies de marketing y afiliación
                  </p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    Seguimiento de conversión en enlaces de afiliado (Amazon, Booking.com,
                    Skyscanner, Renfe). No se usan para publicidad personalizada. Duración
                    variable según el proveedor (máx. 30 días).
                  </p>
                </div>
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button onClick={() => setShowDetails(false)} className={btnSecondary}>
                Atrás
              </button>
              <button onClick={handleRejectAll} className={btnEqual}>
                Rechazar todas
              </button>
              <button onClick={handleSavePreferences} className={btnEqual}>
                Guardar preferencias
              </button>
              <button onClick={handleAcceptAll} className={btnEqual}>
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
