import type { Metadata } from "next"
import AlzadLaMiradaPage from "@/components/pages/AlzadLaMiradaPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("alzad-la-mirada", "it")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/alzad-la-mirada", "it"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: "summary_large_image", images: [seo.ogImage] } : undefined,
}

export default function Page() {
  return <AlzadLaMiradaPage locale="it" />
}
