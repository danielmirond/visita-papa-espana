import type { Metadata } from 'next'
import ComoLlegarPageContent from '@/components/pages/ComoLlegarPage'
import { getComoLlegarLabels } from '@/data/i18n/content/como-llegar'
import { getAlternates } from '@/lib/i18n-metadata'
import { getSeoMeta } from '@/lib/seo-by-route'

const t = getComoLlegarLabels('en')

const seo = getSeoMeta('como-llegar', 'en')

export const metadata: Metadata = {
  title: seo?.title ?? undefined,
  description: seo?.description ?? undefined,
  alternates: getAlternates('/como-llegar', 'en'),
}

export default function Page() { return <ComoLlegarPageContent locale="en" /> }
