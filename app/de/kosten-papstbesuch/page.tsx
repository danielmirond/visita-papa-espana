import type { Metadata } from 'next'
import CosteVisitaPage, { getCosteMeta } from '@/components/pages/CosteVisitaPage'

export const metadata: Metadata = getCosteMeta('de')

export default function Page() {
  return <CosteVisitaPage locale="de" />
}
