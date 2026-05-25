'use client'

/**
 * Badge visual para indicar que un enlace es patrocinado/afiliación
 * Mejora la transparencia y confianza del usuario
 */

interface Props {
  variant?: 'inline' | 'badge' | 'tooltip'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function AffiliateBadge({ variant = 'badge', size = 'md', className = '' }: Props) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  }

  // Badge tradicional (pequeño)
  if (variant === 'badge') {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 ${sizeClasses[size]} ${className}`}
        title="Enlace patrocinado - Nos apoya sin costo extra para ti"
      >
        <svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="font-medium">Patrocinado</span>
      </span>
    )
  }

  // Inline text (subtil)
  if (variant === 'inline') {
    return (
      <span
        className={`inline text-amber-600 italic ${sizeClasses[size]} ${className}`}
        title="Enlace patrocinado - Gana comisión sin afectarte"
      >
        (patrocinado)
      </span>
    )
  }

  // Tooltip info (con información adicional)
  if (variant === 'tooltip') {
    return (
      <div className={`group relative inline-block ${className}`}>
        <svg
          className="w-4 h-4 text-amber-600 cursor-help"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>

        {/* Tooltip */}
        <div className="invisible group-hover:visible absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
          Enlace patrocinado. <br />
          Nos ayuda sin costo extra.
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    )
  }

  return null
}
