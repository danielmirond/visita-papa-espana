import type { Metadata } from 'next'
import MagnificaHumanitasPage from '@/components/pages/MagnificaHumanitasPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Magnifica humanitas · primeira encíclica Leão XIV (25 maio 2026)',
  description: 'Primera encíclica del Papa León XIV sobre la dignidad humana en la era de la inteligencia artificial. Publicación 25 may 2026, firmada el 135º aniversario de Rerum Novarum (1891). PDF, contexto y antecedentes.',
  alternates: getAlternates('/magnifica-humanitas', 'pt'),
}

export default function Page() {
  return <MagnificaHumanitasPage locale="pt" />
}
