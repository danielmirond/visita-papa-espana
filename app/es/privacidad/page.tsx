import type { Metadata } from 'next'
import PrivacidadPage from '@/components/pages/PrivacidadPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('privacidad', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? 'Política de privacidad',
  description: seo?.description ?? 'Política de privacidad del sitio conforme al RGPD.',
  alternates: getAlternates('/privacidad', 'es'),
}

export default function Page() {
  return <PrivacidadPage locale="es" />
}
