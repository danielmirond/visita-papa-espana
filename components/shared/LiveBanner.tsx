'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Franja global "EN DIRECTO" que aparece en TODAS las páginas mientras dura
 * la cobertura en vivo. Enlaza al liveblog del día (es). Se oculta sola:
 *  - tras el fin de la ventana de cobertura (END),
 *  - en la propia página del directo (para no duplicar).
 */
const LIVE = {
  href: '/es/visita-papa-leon-madrid-8-junio-congreso-bernabeu',
  label: 'EN DIRECTO · El Papa en Madrid: Congreso y Bernabéu',
  // Fin de la cobertura del día (Madrid, +02:00)
  end: '2026-06-08T23:00:00+02:00',
}

export default function LiveBanner() {
  const pathname = usePathname()
  // Se renderiza por defecto (también en SSR) para que el enlace sea rastreable
  // en todas las páginas. En cliente se oculta sola al terminar la cobertura.
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (Date.now() >= new Date(LIVE.end).getTime()) setHidden(true)
  }, [])

  if (hidden) return null
  // No mostrar en la propia página del directo (evita duplicar).
  if (pathname?.includes('visita-papa-leon-madrid-8-junio-congreso-bernabeu')) return null

  return (
    <div className="bg-red-600 text-white">
      <Link
        href={LIVE.href}
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-sm font-bold hover:underline"
      >
        <span className="inline-flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-white" />
        {LIVE.label}
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
