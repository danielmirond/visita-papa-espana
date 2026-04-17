import type { Metadata } from 'next'
import ComoAsistirPageContent from '@/components/pages/ComoAsistirPage'
import { getComoAsistirContent } from '@/data/i18n/content/como-asistir'
import { getAlternates } from '@/lib/i18n-metadata'

const t = getComoAsistirContent('fr')

export const metadata: Metadata = {
  title: t.heroTitle,
  description: t.heroSubtitle,
  alternates: getAlternates('/como-asistir', 'fr'),
}

export default function Page() { return <ComoAsistirPageContent locale="fr" /> }
