import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

/**
 * La raíz es un redirect al idioma detectado (middleware) o a /es como fallback.
 * No debe ser indexada: es una ruta de transición, no una página de contenido.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function RootPage() {
  redirect('/es')
}
