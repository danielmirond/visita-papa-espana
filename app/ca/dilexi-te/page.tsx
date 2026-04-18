import type { Metadata } from "next"
import DilexiTePage from "@/components/pages/DilexiTePage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("dilexi-te", "ca")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/dilexi-te", "ca"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: "summary_large_image", images: [seo.ogImage] } : undefined,
}

export default function Page() {
  return <DilexiTePage locale="ca" />
}
