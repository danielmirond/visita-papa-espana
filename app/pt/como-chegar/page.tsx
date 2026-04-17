import type { Metadata } from 'next'
import ComoLlegarPageContent from '@/components/pages/ComoLlegarPage'
import { getComoLlegarLabels } from '@/data/i18n/content/como-llegar'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getComoLlegarLabels('pt')

export const metadata: Metadata = {
  title: t.heroTitle,
  description: t.heroSubtitle,
  alternates: getAlternates('/como-llegar', 'pt'),
}

export default function Page() { return <ComoLlegarPageContent locale="pt" /> }
