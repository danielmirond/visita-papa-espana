export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string // YYYY-MM-DD
  source?: string
  sourceUrl?: string
  imageUrl?: string
  relatedCities: string[]
}
