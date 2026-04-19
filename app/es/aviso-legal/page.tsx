import type { Metadata } from 'next'
import AvisoLegalPage from '@/components/pages/AvisoLegalPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const seo = getSeoMeta('aviso-legal', 'es')

export const metadata: Metadata = {
  title: seo?.title ?? 'Aviso legal',
  description: seo?.description ?? 'Aviso legal conforme al art. 10 LSSI-CE.',
  alternates: getAlternates('/aviso-legal', 'es'),
}

export default function Page() {
  return <AvisoLegalPage locale="es" />
}
