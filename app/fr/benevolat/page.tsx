import type { Metadata } from "next"
import VoluntariadoPage from "@/components/pages/VoluntariadoPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("voluntariado", "fr")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/voluntariado", "fr"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: 'summary_large_image', images: [seo.ogImage] } : undefined,
}

export default function Page() {
  return <VoluntariadoPage locale="fr" />
}
