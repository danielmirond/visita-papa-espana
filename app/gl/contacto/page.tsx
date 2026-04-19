import type { Metadata } from "next"
import ContactoPage from "@/components/pages/ContactoPage"
import { getAlternates } from "@/lib/i18n-metadata"
import { getSeoMeta } from "@/lib/seo-by-route"

const seo = getSeoMeta("contacto", "gl")

export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: getAlternates("/contacto", "gl"),
  openGraph: seo?.ogImage ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }] } : undefined,
  twitter: seo?.ogImage ? { card: "summary_large_image", images: [seo.ogImage] } : undefined,
  robots: { index: true, follow: true },
}

export default function Page() {
  return <ContactoPage locale="gl" />
}
