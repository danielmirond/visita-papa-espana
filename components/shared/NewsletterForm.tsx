'use client'

import { useState } from 'react'

interface Props {
  variant?: 'inline' | 'banner' | 'footer'
  className?: string
}

export default function NewsletterForm({ variant = 'inline', className = '' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // TODO: Conectar con servicio de email (Mailchimp, ConvertKit, Resend, etc.)
    // Por ahora simula el envío
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 800)
  }

  if (status === 'success') {
    return (
      <div className={`rounded-xl p-6 text-center ${variant === 'banner' ? 'bg-green-50' : ''} ${className}`}>
        <p className="mt-2 font-heading text-lg font-bold text-green-700">
          Suscripción confirmada
        </p>
        <p className="mt-1 text-sm text-green-600">
          Te avisaremos de todas las novedades de la visita papal.
        </p>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={`rounded-xl bg-papal-cream p-6 sm:p-8 ${className}`}>
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-heading text-2xl font-bold text-papal-navy">
            Manténgase informado
          </h3>
          <p className="mt-2 text-sm text-papal-navy/60">
            Recibe las últimas novedades, cambios de programa y consejos prácticos
            para la visita del Papa León XIV directamente en tu email.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="rounded-lg border border-papal-gold/30 px-4 py-2.5 text-sm text-papal-navy placeholder-papal-navy/40 focus:border-papal-gold focus:outline-none focus:ring-1 focus:ring-papal-gold sm:w-72"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-lg bg-papal-gold px-6 py-2.5 text-sm font-bold text-papal-navy transition-colors hover:bg-papal-gold-light disabled:opacity-60"
            >
              {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
            </button>
          </form>
          <p className="mt-2 text-[10px] text-papal-navy/40">
            Sin spam. Solo novedades sobre la visita. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h3 className="font-heading text-lg font-bold text-white">Newsletter</h3>
        <p className="mt-1 text-sm text-white/60">
          Recibe novedades de la visita papal.
        </p>
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            className="flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-papal-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-papal-gold px-3 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light disabled:opacity-60"
          >
            {status === 'loading' ? '...' : 'OK'}
          </button>
        </form>
      </div>
    )
  }

  // inline (default)
  return (
    <div className={`rounded-xl border border-papal-gold/20 bg-papal-cream p-5 ${className}`}>
      <h3 className="font-heading text-lg font-bold text-papal-navy">
        Newsletter
      </h3>
      <p className="mt-1 text-sm text-papal-navy/60">
        Recibe novedades y cambios de programa.
      </p>
      <form onSubmit={handleSubmit} className="mt-3 space-y-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          className="w-full rounded-lg border border-papal-gold/30 px-3 py-2 text-sm text-papal-navy placeholder-papal-navy/40 focus:border-papal-gold focus:outline-none focus:ring-1 focus:ring-papal-gold"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
        </button>
      </form>
    </div>
  )
}
