import type { Metadata } from "next"
import KitPeregrinoPage from "@/components/pages/KitPeregrinoPage"
import { getAlternates } from "@/lib/i18n-metadata"

export const metadata: Metadata = {
  alternates: getAlternates("/que-llevar", "de"),
}

export default function Page() {
  return <KitPeregrinoPage locale="de" />
}
