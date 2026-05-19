import type { Metadata } from 'next'
import ComoLlegarEnTrenPage from '@/components/pages/ComoLlegarEnTrenPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Comment venir en train à la visite du Pape · Madrid et Barcelone',
  description: 'Guía para llegar en AVE o tren internacional a Madrid y Barcelona para la visita del Papa León XIV (6-12 jun 2026). Trainline vs Renfe, rutas, precios y FAQ.',
  alternates: getAlternates('/como-llegar-en-tren', 'fr'),
}

export default function Page() {
  return <ComoLlegarEnTrenPage locale="fr" />
}
