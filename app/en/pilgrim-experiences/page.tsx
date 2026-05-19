import type { Metadata } from 'next'
import ExperienciasPeregrinosPage from '@/components/pages/ExperienciasPeregrinosPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Pilgrim experiences from previous papal visits · Spain',
  description: 'Testimonios reales de peregrinos en JMJ Madrid 2011, Sagrada Familia 2010, JMJ Santiago 1989, Madrid 2003 y primer viaje 1982. Citas verificadas y vídeos oficiales.',
  alternates: getAlternates('/experiencias-peregrinos', 'en'),
}

export default function Page() {
  return <ExperienciasPeregrinosPage locale="en" />
}
