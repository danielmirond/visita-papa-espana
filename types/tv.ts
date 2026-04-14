export interface TvChannel {
  name: string
  type: 'tv' | 'streaming' | 'radio'
  url?: string
  description: string
  isFree: boolean
}
