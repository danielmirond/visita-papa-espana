import Link from 'next/link'

interface Props {
  size: '728x90' | '300x250' | '320x50' | '970x90'
  label?: string
  className?: string
  href?: string
}

const SIZES: Record<string, { w: number; h: number; name: string }> = {
  '728x90': { w: 728, h: 90, name: 'Leaderboard' },
  '300x250': { w: 300, h: 250, name: 'Rectángulo medio' },
  '320x50': { w: 320, h: 50, name: 'Banner móvil' },
  '970x90': { w: 970, h: 90, name: 'Superleaderboard' },
}

export default function BannerPlaceholder({ size, label, className = '', href }: Props) {
  const dim = SIZES[size]

  const content = (
    <div
      className={`mx-auto flex items-center justify-center rounded border border-dashed border-papal-gold/30 bg-papal-cream/50 ${className}`}
      style={{
        maxWidth: dim.w,
        aspectRatio: `${dim.w}/${dim.h}`,
        width: '100%',
      }}
    >
      <div className="text-center">
        <p className="text-xs font-medium text-papal-navy/30">
          {label || 'Espacio publicitario'}
        </p>
        <p className="text-[10px] text-papal-navy/20">
          {dim.name} ({size})
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="nofollow sponsored noopener" className="block">
        {content}
        <p className="mt-1 text-center text-[9px] text-papal-navy/20">Enlace patrocinado</p>
      </a>
    )
  }

  return content
}
