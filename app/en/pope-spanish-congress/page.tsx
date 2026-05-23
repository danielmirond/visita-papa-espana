import type { Metadata } from 'next'
import PapaCongresoDiputadosPage from '@/components/pages/PapaCongresoDiputadosPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Pope Leo XIV at the Spanish Congress of Deputies · 8 Jun 2026',
  description: 'Primera vez en la historia que un Papa pronuncia un discurso en el Parlamento español. Sesión conjunta Congreso + Senado el lunes 8 de junio de 2026 a las 10:30. Protocolo, antecedentes y cómo seguirlo en directo.',
  alternates: getAlternates('/papa-congreso-diputados', 'en'),
}

export default function Page() {
  return <PapaCongresoDiputadosPage locale="en" />
}
