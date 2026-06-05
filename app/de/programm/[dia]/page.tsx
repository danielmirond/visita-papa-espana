import type { Metadata } from 'next'
import DiaPage, { getDiaMeta } from '@/components/pages/DiaPage'
import { getScheduleByLocale } from '@/data/i18n/content/schedule'
import { dateToSlug } from '@/lib/utils'

interface Props {
  params: { dia: string }
}

export function generateStaticParams() {
  return getScheduleByLocale('de').map((d) => ({ dia: dateToSlug(d.date) }))
}

export function generateMetadata({ params }: Props): Metadata {
  return getDiaMeta('de', params.dia)
}

export default function Page({ params }: Props) {
  return <DiaPage locale="de" dia={params.dia} />
}
