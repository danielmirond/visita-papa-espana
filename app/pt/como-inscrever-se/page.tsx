import type { Metadata } from 'next'
import ComoInscribirsePage from '@/components/pages/ComoInscribirsePage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Cómo inscribirse a los actos del Papa León XIV — guía oficial 2026',
  description: 'Guía paso a paso de inscripción a los actos públicos del Viaje Apostólico de León XIV (6-12 jun 2026). Plataforma oficial inscripciones.conelpapa.es: 6 pasos, modos de asistencia, datos requeridos.',
  alternates: getAlternates('/como-inscribirse', 'pt'),
}

export default function Page() {
  return <ComoInscribirsePage locale="pt" />
}
