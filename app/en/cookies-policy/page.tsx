import type { Metadata } from "next"
import PoliticaCookiesPage from "@/components/pages/PoliticaCookiesPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("politica-cookies", "en")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/politica-cookies", "en"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
}

export default function Page() {
  return <PoliticaCookiesPage locale="en" />
}
