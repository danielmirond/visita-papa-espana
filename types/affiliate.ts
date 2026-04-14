export type AffiliateProvider = 'booking' | 'renfe' | 'skyscanner' | 'amazon' | 'seguro' | 'sim' | 'otro'
export type AffiliateCategory = 'hotel' | 'transporte' | 'merchandising' | 'seguro' | 'telecom'
export type AffiliatePlacement = 'sidebar' | 'inline' | 'banner' | 'card'

export interface AffiliateLink {
  id: string
  provider: AffiliateProvider
  url: string
  displayName: string
  description: string
  category: AffiliateCategory
  placement: AffiliatePlacement[]
  imageUrl?: string
}
