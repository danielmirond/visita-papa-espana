import type { Metadata } from "next"
import FrasesPage from "@/components/pages/FrasesPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("frases", "pt")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/frases", "pt"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: "summary_large_image", images: [seo.ogImage] } : undefined,
}

export default function Page() {
  return <FrasesPage locale="pt" />
}
