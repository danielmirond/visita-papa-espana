import type { Metadata } from 'next'
import BanderaVaticanoPage from '@/components/pages/BanderaVaticanoPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Drapeau du Vatican · histoire, signification et blason',
  description: 'Bandera oficial de la Ciudad del Vaticano: colores amarillo y blanco, escudo con las llaves de San Pedro y la tiara papal, proporción cuadrada 1:1. Adoptada el 7 jun 1929.',
  alternates: getAlternates('/bandera-vaticano', 'fr'),
}

export default function Page() {
  return <BanderaVaticanoPage locale="fr" />
}
