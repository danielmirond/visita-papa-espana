import type { Metadata } from 'next'
import CosteVisitaPage, { getCosteMeta } from '@/components/pages/CosteVisitaPage'

export const metadata: Metadata = getCosteMeta('pt')

export default function Page() {
  return <CosteVisitaPage locale="pt" />
}
