export type Locale = 'es' | 'en' | 'it' | 'fr' | 'de' | 'pt' | 'ca' | 'gl' | 'eu'

export const LOCALES: Locale[] = ['es', 'en', 'it', 'fr', 'de', 'pt', 'ca', 'gl', 'eu']

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  it: 'Italiano',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ca: 'Català',
  gl: 'Galego',
  eu: 'Euskara',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  it: '🇮🇹',
  fr: '🇫🇷',
  de: '🇩🇪',
  pt: '🇵🇹',
  ca: '🏴󠁥󠁳󠁣󠁴󠁿',
  gl: '🏴󠁥󠁳󠁧󠁡󠁿',
  eu: '🏴󠁥󠁳󠁰󠁶󠁿',
}

export const DEFAULT_LOCALE: Locale = 'es'

// HTML lang attribute values
export const HTML_LANG: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-GB',
  it: 'it-IT',
  fr: 'fr-FR',
  de: 'de-DE',
  pt: 'pt-PT',
  ca: 'ca-ES',
  gl: 'gl-ES',
  eu: 'eu-ES',
}

export interface Dictionary {
  nav: {
    home: string
    programa: string
    ciudades: string
    comoAsistir: string
    dondeVer: string
    mapa: string
    noticias: string
    guias: string
    faq: string
  }
  home: {
    heroDateRange: string
    heroTitle: string
    heroCountry: string
    heroMotto: string
    seeProgram: string
    howToAttend: string
    daysLabel: string
    hoursLabel: string
    minLabel: string
    secLabel: string
    days: string
    cities: string
    scheduledEvents: string
    publicEvents: string
    journeyTitle: string
    journeySubtitle: string
    moreEvents: string
    programTitle: string
    programSubtitle: string
    viewFullProgram: string
    latestNews: string
    viewAllNews: string
    attendanceInfo: string
    attendanceDesc: string
    registerMadrid: string
    fullGuide: string
    fromVatican: string
  }
  common: {
    readMore: string
    loading: string
    backToHome: string
    downloadCalendar: string
    sponsoredLink: string
    sponsoredLinks: string
    public: string
    private: string
    pending: string
    location: string
    registration: string
  }
  cookies: {
    title: string
    description: string
    preferences: string
    reject: string
    acceptAll: string
    necessary: string
    necessaryDesc: string
    analytics: string
    analyticsDesc: string
    marketing: string
    marketingDesc: string
    back: string
    rejectAll: string
    savePreferences: string
    alwaysActive: string
  }
  footer: {
    siteDisclaimer: string
    sections: string
    officialLinks: string
    officialSite: string
    registrationMadrid: string
    archimadrid: string
    vaticanNews: string
    apostolicVisit: string
    legal: string
    privacy: string
    cookiesPolicy: string
  }
}
