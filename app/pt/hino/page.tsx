import type { Metadata } from "next"
import HimnoOracionPage from "@/components/pages/HimnoOracionPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  alternates: getAlternates("/himno", "pt"),
}

export default function Page() {
  return <HimnoOracionPage locale="pt" variant="himno" />
}
