import type { Metadata } from "next"
import VoluntariadoPage from "@/components/pages/VoluntariadoPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("voluntariado", "eu")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/voluntariado", "eu"),
}

export default function Page() {
  return <VoluntariadoPage locale="eu" />
}
