import type { Metadata } from 'next'
import LocalizedHome from '@/components/home/LocalizedHome'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  alternates: getAlternates('', 'es'),
}

export default function Page() {
  return <LocalizedHome locale="es" />
}
