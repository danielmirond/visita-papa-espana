'use client'

import { useEffect } from 'react'

interface Props {
  platform: 'twitter' | 'instagram'
  className?: string
}

export default function SocialFeed({ platform, className = '' }: Props) {
  useEffect(() => {
    if (platform !== 'twitter') return
    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
    if (existingScript) {
      // Si ya existe, disparar re-escaneo
      ;(window as any).twttr?.widgets?.load?.()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
  }, [platform])

  if (platform === 'twitter') {
    return (
      <div className={`overflow-hidden rounded-xl border border-papal-gold/20 bg-white ${className}`}>
        <div className="border-b border-papal-gold/10 bg-papal-cream px-4 py-3">
          <h3 className="font-heading text-sm font-bold text-papal-navy">
            Vatican News en X
          </h3>
        </div>
        <div className="max-h-[500px] overflow-y-auto p-2">
          <a
            className="twitter-timeline"
            data-height="480"
            data-chrome="noheader nofooter noborders transparent"
            data-theme="light"
            data-lang="es"
            href="https://twitter.com/vaticannews_es"
          >
            Cargando publicaciones de @vaticannews_es...
          </a>
        </div>
      </div>
    )
  }

  if (platform === 'instagram') {
    // Instagram no permite embeber perfiles, solo posts individuales.
    // Mostramos una tarjeta de enlace elegante al perfil oficial.
    return (
      <div className={`overflow-hidden rounded-xl border border-papal-gold/20 bg-white ${className}`}>
        <div className="border-b border-papal-gold/10 bg-papal-cream px-4 py-3">
          <h3 className="font-heading text-sm font-bold text-papal-navy">
            Instagram del Vaticano
          </h3>
        </div>
        <div className="flex min-h-[480px] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-papal-gold/30 bg-papal-cream">
            <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-papal-gold" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c-2.58 0-2.9.01-3.91.06-1.01.05-1.7.2-2.3.44-.62.24-1.14.56-1.67 1.08-.52.53-.84 1.05-1.08 1.67-.23.6-.39 1.29-.44 2.3C2.51 9.1 2.5 9.42 2.5 12s.01 2.9.06 3.91c.05 1.01.2 1.7.44 2.3.24.62.56 1.14 1.08 1.67.53.52 1.05.84 1.67 1.08.6.23 1.29.39 2.3.44 1.01.05 1.33.06 3.91.06s2.9-.01 3.91-.06c1.01-.05 1.7-.2 2.3-.44.62-.24 1.14-.56 1.67-1.08.52-.53.84-1.05 1.08-1.67.23-.6.39-1.29.44-2.3.05-1.01.06-1.33.06-3.91s-.01-2.9-.06-3.91c-.05-1.01-.2-1.7-.44-2.3a4.6 4.6 0 00-1.08-1.67 4.6 4.6 0 00-1.67-1.08c-.6-.23-1.29-.39-2.3-.44C14.9 2.51 14.58 2.5 12 2.5z" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className="font-heading text-lg font-bold text-papal-navy">@franciscus</p>
            <p className="mt-1 text-sm text-papal-navy/60">Cuenta oficial del Papa en Instagram</p>
          </div>
          <a
            href="https://www.instagram.com/franciscus/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light"
          >
            Ver en Instagram
          </a>
          <a
            href="https://www.instagram.com/vaticannews.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-papal-navy/60 hover:text-papal-gold hover:underline"
          >
            También: @vaticannews.es
          </a>
        </div>
      </div>
    )
  }

  return null
}
