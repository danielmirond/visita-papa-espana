import type { Metadata } from 'next'
import ComoAsistirPageContent from '@/components/pages/ComoAsistirPage'
import { getComoAsistirContent } from '@/data/i18n/content/como-asistir'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getComoAsistirContent('it')

const seo = getSeoMeta('como-asistir', 'it')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/como-asistir', 'it'),
}

export default function Page() { return <ComoAsistirPageContent locale="it" /> }
