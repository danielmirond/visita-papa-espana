import type { Metadata } from 'next'
import VigiliaPlazaLimaPage from '@/components/pages/VigiliaPlazaLimaPage'
import { getMetadataOgImages } from '@/lib/og-image-generator'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Vigilia Plaza de Lima — Papa León XIV · 6 junio 2026',
  description: 'Vigilia juvenil de oración con el Papa León XIV en la Plaza de Lima de Madrid el 6 de junio de 2026 a las 20:30. Inscripción gratuita, accesos, qué llevar, retransmisión.',
  alternates: getAlternates('/vigilia-plaza-lima', 'es'),
}

export default function Page() {
  return <VigiliaPlazaLimaPage locale="es" />
}
