import type { Metadata } from 'next'
import ComoLlegarEnTrenPage from '@/components/pages/ComoLlegarEnTrenPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Come arrivare in treno alla visita del Papa · Madrid e Barcellona',
  description: 'Guía para llegar en AVE o tren internacional a Madrid y Barcelona para la visita del Papa León XIV (6-12 jun 2026). Trainline vs Renfe, rutas, precios y FAQ.',
  alternates: getAlternates('/como-llegar-en-tren', 'it'),
}

export default function Page() {
  return <ComoLlegarEnTrenPage locale="it" />
}
