'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Franja global que aparece en TODAS las páginas (es) destacando la etapa de
 * Barcelona. Enlaza la página principal de la ciudad y el recorrido del
 * papamóvil. Renderizada en SSR para que ambos enlaces sean rastreables; se
 * oculta sola tras el fin de la etapa de Barcelona y en sus propias páginas.
 */
const BANNER = {
  // Fin de la etapa de Canarias (Madrid, +02:00)
  end: '2026-06-12T23:00:00+02:00',
  links: [
    { href: '/es/ciudades/gran-canaria', label: 'Guía de Gran Canaria' },
    { href: '/es/visita-papa-canarias', label: 'Agenda en Canarias' },
  ],
}

export default function LiveBanner() {
  const pathname = usePathname()
  // Se renderiza por defecto (también en SSR) para que los enlaces sean
  // rastreables en todas las páginas. En cliente se oculta al terminar la etapa.
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (Date.now() >= new Date(BANNER.end).getTime()) setHidden(true)
  }, [])

  if (hidden) return null
  // No mostrar en las propias páginas de Canarias (evita duplicar).
  if (pathname === '/es/ciudades/gran-canaria' || pathname?.includes('visita-papa-canarias')) return null

  return (
    <div className="bg-papal-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-center text-sm font-bold">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-papal-gold" />
          El Papa en Canarias · 11-12 jun
        </span>
        {BANNER.links.map((l) => (
          <Link key={l.href} href={l.href} className="text-papal-gold hover:underline">
            {l.label} →
          </Link>
        ))}
      </div>
    </div>
  )
}
