'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'papa-cookie-consent'

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
  timestamp: number
}

function loadConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(COOKIE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as Consent
  } catch {
    return null
  }
}

function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent))
    // Notificar al resto de la app para que active/desactive scripts
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: consent }))
  } catch {}
}

export function hasAnalyticsConsent(): boolean {
  const consent = loadConsent()
  return consent?.analytics === true
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const consent = loadConsent()
    if (!consent) {
      // Delay para no afectar LCP
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    })
    setVisible(false)
  }

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    })
    setVisible(false)
  }

  const handleSavePreferences = () => {
    saveConsent({
      necessary: true,
      analytics,
      marketing,
      timestamp: Date.now(),
    })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-papal-gold/30 bg-white shadow-[0_-4px_16px_rgba(27,42,74,0.08)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {!showDetails ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h2 className="font-heading text-base font-bold text-papal-navy">
                Aviso de cookies
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-papal-navy/70">
                Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia.
                Puedes aceptar todas, rechazarlas o configurar tus preferencias. Consulta nuestra{' '}
                <Link href="/politica-cookies" className="text-papal-gold underline hover:text-papal-gold-dark">
                  política de cookies
                </Link>{' '}
                y{' '}
                <Link href="/privacidad" className="text-papal-gold underline hover:text-papal-gold-dark">
                  política de privacidad
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={() => setShowDetails(true)}
                className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-medium text-papal-navy transition-colors hover:bg-papal-cream"
              >
                Preferencias
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-medium text-papal-navy transition-colors hover:bg-papal-cream"
              >
                Rechazar
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
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
                    Cookies necesarias
                    <span className="ml-2 text-xs font-normal text-papal-navy/60">
                      (siempre activas)
                    </span>
                  </p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
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
                  <p className="text-sm font-bold text-papal-navy">
                    Cookies analíticas
                  </p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    Google Analytics. Nos ayudan a entender cómo se usa el sitio de forma anónima.
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
                    Cookies de marketing
                  </p>
                  <p className="mt-0.5 text-xs text-papal-navy/70">
                    Enlaces de afiliación y personalización de contenido patrocinado.
                  </p>
                </div>
              </label>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-medium text-papal-navy transition-colors hover:bg-papal-cream"
              >
                Atrás
              </button>
              <button
                onClick={handleRejectAll}
                className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-medium text-papal-navy transition-colors hover:bg-papal-cream"
              >
                Rechazar todas
              </button>
              <button
                onClick={handleSavePreferences}
                className="rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
