'use client'

import { openCookieBanner } from './CookieBanner'

interface Props {
  className?: string
  label?: string
}

/**
 * Botón accesible desde cualquier página que reabre el banner de cookies
 * para que el usuario pueda revocar o modificar su consentimiento.
 * Requisito AEPD: mecanismo permanente de revocación del consentimiento.
 */
export default function CookiePreferencesButton({
  className = '',
  label = 'Preferencias de cookies',
}: Props) {
  return (
    <button
      type="button"
      onClick={openCookieBanner}
      className={
        className ||
        'inline-block rounded-lg border-2 border-papal-navy bg-white px-4 py-2 text-sm font-bold text-papal-navy transition hover:bg-papal-cream'
      }
    >
      🍪 {label}
    </button>
  )
}
