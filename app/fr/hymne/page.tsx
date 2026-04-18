import type { Metadata } from "next"
import HimnoOracionPage from "@/components/pages/HimnoOracionPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  alternates: getAlternates("/himno", "fr"),
}

export default function Page() {
  return <HimnoOracionPage locale="fr" variant="himno" />
}
