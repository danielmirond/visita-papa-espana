import type { Metadata } from "next"
import KitPeregrinoPage from "@/components/pages/KitPeregrinoPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("que-llevar", "it")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/que-llevar", "it"),
}

export default function Page() {
  return <KitPeregrinoPage locale="it" />
}
