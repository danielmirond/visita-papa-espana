'use client'

import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import { type Locale } from '@/data/i18n/types'

const BarcelonaPapamobilMap = dynamic(() => import('./BarcelonaPapamobilMap'), {
  ssr: false,
  loading: () => (
    <div
      className="overflow-hidden rounded-xl border border-papal-gold/20 bg-papal-cream animate-pulse"
      style={{ height: '600px' }}
    />
  ),
})

interface Props {
  citySlug: string
  date: string
  locale: Locale
}

/**
 * Componente inteligente que muestra mapas específicos según la ciudad y fecha.
 *
 * Actualmente:
 * - Barcelona 10 junio → BarcelonaPapamobilMap (ruta papamóvil)
 * - Otros días/ciudades → null (sin mapa)
 *
 * Extensible para otros eventos especiales.
 */
export default function DayMapCard({ citySlug, date, locale }: Props) {
  const isBarcelonaDay10 = citySlug === 'barcelona' && date === '2026-06-10'

  if (!isBarcelonaDay10) {
    return null
  }

  return (
    <div className="my-8">
      <Container>
        <div className="rounded-xl border border-papal-gold/20 bg-white overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-papal-navy to-papal-navy-light px-6 py-4 text-white">
            <h2 className="font-heading text-xl font-bold">
              🗺️ Recorrido del Papamóvil · 19:00–19:30
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Ruta interactiva: Rosselló → Sardenya → Sagrada Familia (~1 km)
            </p>
          </div>
          <div className="p-4 md:p-6">
            <BarcelonaPapamobilMap locale={locale} height="600px" />
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-papal-navy/60">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span>Inicio (Rosselló)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span>Ruta activa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-pink-500" />
                <span>Destino (Sagrada Familia)</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-papal-navy/50">
              💡 Haz clic en los marcadores para más información. La vista pública está permitida desde ambas aceras.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
