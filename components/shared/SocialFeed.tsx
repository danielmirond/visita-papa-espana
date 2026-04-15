'use client'

import { useEffect, useRef } from 'react'

interface Props {
  platform: 'twitter' | 'instagram'
  className?: string
}

export default function SocialFeed({ platform, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (platform === 'twitter') {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.head.appendChild(script)
      return () => {
        document.head.removeChild(script)
      }
    }

    if (platform === 'instagram') {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.head.appendChild(script)
      return () => {
        document.head.removeChild(script)
      }
    }
  }, [platform])

  if (platform === 'twitter') {
    return (
      <div className={`overflow-hidden rounded-xl border border-papal-gold/20 ${className}`}>
        <div className="border-b border-papal-gold/10 bg-papal-cream px-4 py-3">
          <h3 className="font-heading text-sm font-bold text-papal-navy">
            Publicaciones del Vaticano
          </h3>
        </div>
        <div ref={containerRef} className="max-h-[500px] overflow-y-auto bg-white p-2">
          <a
            className="twitter-timeline"
            data-height="480"
            data-chrome="noheader nofooter noborders transparent"
            data-theme="light"
            data-lang="es"
            href="https://twitter.com/Abordo_Papa"
          >
            Cargando publicaciones...
          </a>
        </div>
      </div>
    )
  }

  if (platform === 'instagram') {
    return (
      <div className={`overflow-hidden rounded-xl border border-papal-gold/20 ${className}`}>
        <div className="border-b border-papal-gold/10 bg-papal-cream px-4 py-3">
          <h3 className="font-heading text-sm font-bold text-papal-navy">
            Instagram del Vaticano
          </h3>
        </div>
        <div ref={containerRef} className="bg-white p-3">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/vatican/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '3px',
              margin: '0 auto',
              maxWidth: '100%',
              padding: 0,
              width: '100%',
            }}
          />
        </div>
      </div>
    )
  }

  return null
}
