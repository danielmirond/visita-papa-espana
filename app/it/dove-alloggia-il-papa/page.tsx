import type { Metadata } from 'next'
import DondeSeAlojaPage, { getDondeSeAlojaMeta } from '@/components/pages/DondeSeAlojaPage'

export const metadata: Metadata = getDondeSeAlojaMeta('it')

export default function Page() {
  return <DondeSeAlojaPage locale="it" />
}
