import type { Metadata } from 'next'
import DondeSeAlojaPage, { getDondeSeAlojaMeta } from '@/components/pages/DondeSeAlojaPage'

export const metadata: Metadata = getDondeSeAlojaMeta('fr')

export default function Page() {
  return <DondeSeAlojaPage locale="fr" />
}
