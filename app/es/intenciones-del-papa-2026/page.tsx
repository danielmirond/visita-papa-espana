import type { Metadata } from 'next'
import IntencionesPapaPage from '@/components/pages/IntencionesPapaPage'
import { getMetadataOgImages } from '@/lib/og-image-generator'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Intenciones del Papa León XIV 2026 — calendario mensual',
  description: 'Las 12 intenciones de oración del Papa León XIV para 2026 publicadas por la Santa Sede: desarme nuclear, niños enfermos, alimentación, deporte, agua, salud mental y familias.',
  alternates: getAlternates('/intenciones-del-papa-2026', 'es'),
}

export default function Page() {
  return <IntencionesPapaPage locale="es" />
}
