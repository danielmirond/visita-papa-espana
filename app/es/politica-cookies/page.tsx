import type { Metadata } from 'next'
import PoliticaCookiesPage from '@/components/pages/PoliticaCookiesPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('politica-cookies', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? 'Política de cookies',
  description: seo?.description ?? 'Política de cookies conforme a la Guía AEPD 2023 y al RGPD.',
  alternates: getAlternates('/politica-cookies', 'es'),
}

export default function Page() {
  return <PoliticaCookiesPage locale="es" />
}
