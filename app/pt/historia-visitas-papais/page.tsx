import type { Metadata } from "next"
import HistoriaVisitasPage from "@/components/pages/HistoriaVisitasPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  title: "Historia de visitas papales a España (1982-2026)",
  description: "Juan Pablo II (5 visitas), Benedicto XVI (3), León XIV (2026). Por qué Francisco nunca visitó España. Cronología completa con fuentes.",
  alternates: getAlternates("/historia-visitas-papales", "pt"),
}

export default function Page() {
  return <HistoriaVisitasPage locale="pt" />
}
