import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema/generators'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface Props {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumbs con JSON-LD BreadcrumbList + UI semántica.
 *
 * El schema BreadcrumbList ayuda a Google a mostrar la jerarquía en
 * los resultados (rich snippet de breadcrumbs).
 * La UI es un <nav aria-label="Breadcrumb"> accesible.
 */
export default function Breadcrumbs({ items, className = '' }: Props) {
  if (items.length === 0) return null

  return (
    <>
      <JsonLd data={breadcrumbSchema(items.map(i => ({ name: i.name, url: i.href })))} />
      <nav
        aria-label="Breadcrumb"
        className={`border-b border-papal-gold/10 bg-papal-cream/40 ${className}`}
      >
        <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-papal-navy/70">
            {items.map((item, i) => {
              const isLast = i === items.length - 1
              return (
                <li key={item.href} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-papal-navy/30">
                      ›
                    </span>
                  )}
                  {isLast ? (
                    <span aria-current="page" className="font-medium text-papal-navy">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-papal-gold-dark"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
