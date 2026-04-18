import type { Metadata } from "next"
import VoluntariadoPage from "@/components/pages/VoluntariadoPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  alternates: getAlternates("/voluntariado", "en"),
}

export default function Page() {
  return <VoluntariadoPage locale="en" />
}
