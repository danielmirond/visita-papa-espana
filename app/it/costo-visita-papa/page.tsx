import type { Metadata } from 'next'
import CosteVisitaPage, { getCosteMeta } from '@/components/pages/CosteVisitaPage'

export const metadata: Metadata = getCosteMeta('it')

export default function Page() {
  return <CosteVisitaPage locale="it" />
}
