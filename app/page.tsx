import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

/**
 * La raíz es un redirect al idioma por defecto como fallback cuando el
 * middleware no actúa (p. ej. bots sin Accept-Language).
 * No debe ser indexada: es una ruta de transición, no una página de contenido.
 *
 * Usamos permanentRedirect (308 = 301 SEO) porque el destino de este fallback
 * es fijo (siempre /es). El redirect basado en idioma del middleware usa 302
 * con Vary: Accept-Language.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/es',
  },
}

export default function RootPage() {
  permanentRedirect('/es')
}
