import type { Metadata } from "next"
import DiscursosPage from "@/components/pages/DiscursosPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("discursos", "es")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/discursos", "es"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: "summary_large_image", images: [seo.ogImage] } : undefined,
}

export default function Page() {
  return <DiscursosPage locale="es" />
}
