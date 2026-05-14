import type { Metadata } from 'next'
import PapaBernabeuPage from '@/components/pages/PapaBernabeuPage'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'El Papa León XIV en el Bernabéu — 8 de junio 2026',
  description: 'Encuentro diocesano del Papa León XIV con la comunidad de Madrid en el Estadio Santiago Bernabéu el 8 de junio de 2026, segunda visita papal al estadio tras san Juan Pablo II en 1982.',
  alternates: getAlternates('/papa-bernabeu', 'de'),
}

export default function Page() {
  return <PapaBernabeuPage locale="de" />
}
