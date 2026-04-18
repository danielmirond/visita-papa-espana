import type { Metadata } from "next"
import HistoriaVisitasPage from "@/components/pages/HistoriaVisitasPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("historia-visitas-papales", "eu")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/historia-visitas-papales", "eu"),
}

export default function Page() {
  return <HistoriaVisitasPage locale="eu" />
}
