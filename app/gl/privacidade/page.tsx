import type { Metadata } from "next"
import PrivacidadPage from "@/components/pages/PrivacidadPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("privacidad", "gl")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/privacidad", "gl"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
}

export default function Page() {
  return <PrivacidadPage locale="gl" />
}
