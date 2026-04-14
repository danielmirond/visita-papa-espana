export interface CityPracticalInfo {
  transport: string[]
  accommodation: string
  tips: string[]
}

export interface City {
  slug: string
  name: string
  region: string
  description: string
  heroImage: string
  coordinates: { lat: number; lng: number }
  papalDates: { start: string; end: string }
  highlights: string[]
  practicalInfo: CityPracticalInfo
}
