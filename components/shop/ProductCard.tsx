import { Product } from '@/types/shop'
import { type Locale } from '@/data/i18n/types'

interface Props {
  product: Product
  locale: Locale
}

// Etiqueta visible del origen — opcional, transparencia
const SOURCE_LABELS: Record<string, string> = {
  amazon: 'Amazon',
  printful: 'Printful',
  redbubble: 'Redbubble',
  teespring: 'Teespring',
  other: '',
}

export default function ProductCard({ product, locale }: Props) {
  const image = product.images[0]
  const hasImage = image && !image.includes('placeholder')
  const isFeatured = product.tags?.includes('destacado')
  const isNew = product.tags?.includes('nuevo')
  const priceDisplay = product.price != null ? `${product.price.toFixed(2).replace('.', ',')} €` : '—'

  return (
    <a
      href={product.buyUrl}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
    >
      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden bg-papal-cream">
        {hasImage ? (
          // Usamos img nativo (no next/image) porque los PoD pueden servir
          // imágenes remotas que cambian, y para evitar el coste de optimización.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-papal-gold/50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 7h16v13H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 7V4h6v3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="mt-2 text-xs text-papal-gold/50">Imagen próximamente</p>
            </div>
          </div>
        )}
        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isFeatured && (
            <span className="rounded bg-papal-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-papal-navy">
              Destacado
            </span>
          )}
          {isNew && (
            <span className="rounded bg-papal-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Nuevo
            </span>
          )}
          {product.isOfficialMerch && (
            <span className="rounded bg-papal-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Oficial
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-bold text-papal-navy group-hover:text-papal-gold-dark">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-papal-navy/60">{product.description}</p>

        <div className="mt-3 flex items-end justify-between pt-2">
          <div>
            <p className="font-heading text-lg font-bold text-papal-navy">{priceDisplay}</p>
            {SOURCE_LABELS[product.source] && (
              <p className="text-[10px] text-papal-navy/40">vía {SOURCE_LABELS[product.source]}</p>
            )}
          </div>
          <span className="rounded-lg bg-papal-gold px-3 py-1.5 text-xs font-bold text-papal-navy transition-colors group-hover:bg-papal-gold-light">
            Ver →
          </span>
        </div>
      </div>
    </a>
  )
}
