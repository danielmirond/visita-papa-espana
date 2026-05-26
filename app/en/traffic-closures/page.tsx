import type { Metadata } from 'next'
import CortesTraficoPage from '@/components/pages/CortesTraficoPage'
import { getSeoMeta } from '@/lib/seo-by-route'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  ...(getSeoMeta('cortes-trafico', 'en') || {}),
  alternates: getAlternates('/cortes-trafico', 'en'),
  openGraph: {
    images: [
      {
        url: '/images/cities/madrid.webp',
        width: 1200,
        height: 630,
        alt: 'Traffic Closures Pope Leo XIV',
      },
    ],
  },
}

export default function Page() {
  return <CortesTraficoPage locale="en" />
}
