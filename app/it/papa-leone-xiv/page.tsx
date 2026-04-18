import type { Metadata } from "next"
import PapaBiografiaPage from "@/components/pages/PapaBiografiaPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  alternates: getAlternates("/papa-leon-xiv", "it"),
}

export default function Page() {
  return <PapaBiografiaPage locale="it" />
}
