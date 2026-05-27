import type { Metadata } from 'next'
import MagnificaHumanitasPage from '@/components/pages/MagnificaHumanitasPage'
import { getAlternates } from '@/lib/i18n-metadata'
import { getMetadataOgImages } from '@/lib/og-image-generator'

export const metadata: Metadata = {
  title: 'Magnifica humanitas · primera encíclica León XIV (25 may 2026)',
  description: 'Primera encíclica del Papa León XIV sobre la dignidad humana en la era de la inteligencia artificial. Publicación 25 may 2026, firmada el 135º aniversario de Rerum Novarum (1891). PDF, contexto y antecedentes.',
  alternates: getAlternates('/magnifica-humanitas', 'es'),
  openGraph: {
    images: getMetadataOgImages('magnifica-humanitas', 'es'),
  },
}

export default function Page() {
  return <MagnificaHumanitasPage locale="es" />
}
