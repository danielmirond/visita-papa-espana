import type { Metadata } from "next"
import AvisoLegalPage from "@/components/pages/AvisoLegalPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("aviso-legal", "eu")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/aviso-legal", "eu"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
}

export default function Page() {
  return <AvisoLegalPage locale="eu" />
}
