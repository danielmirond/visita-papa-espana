import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl">&#x271D;</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-papal-navy">
        Pagina no encontrada
      </h1>
      <p className="mt-2 text-papal-navy/60">
        La pagina que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-papal-gold px-6 py-3 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
      >
        Volver al inicio
      </Link>
    </Container>
  )
}
