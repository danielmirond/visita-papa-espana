import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Información sobre el uso de cookies en visita-papa-2026.es conforme al Reglamento General de Protección de Datos (RGPD).',
  alternates: getAlternates('/politica-cookies', 'es'),
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <h1 className="font-heading text-3xl font-bold text-white">
            Política de cookies
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Última actualización: 15 de abril de 2026
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-2xl space-y-6 text-papal-navy/80">
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              ¿Qué son las cookies?
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
              cuando visitas un sitio web. Permiten reconocer tu navegador y recordar
              información sobre tu visita.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Cookies que utilizamos
            </h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
                <h3 className="font-bold text-papal-navy">1. Cookies necesarias</h3>
                <p className="mt-1 text-sm">
                  Imprescindibles para el funcionamiento básico del sitio. No requieren consentimiento.
                </p>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>
                    <strong>papa-cookie-consent</strong> — Almacena tus preferencias de cookies.
                    Duración: permanente hasta que la elimines.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
                <h3 className="font-bold text-papal-navy">2. Cookies analíticas</h3>
                <p className="mt-1 text-sm">
                  Nos ayudan a entender cómo se usa el sitio para mejorarlo. Solo se activan con tu consentimiento.
                </p>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>
                    <strong>_ga, _ga_*</strong> — Google Analytics. IP anonimizada.
                    Duración: 2 años.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
                <h3 className="font-bold text-papal-navy">3. Cookies de terceros</h3>
                <p className="mt-1 text-sm">
                  Se activan al interactuar con contenido embebido de terceros (Twitter, Instagram, Google Maps).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Cómo gestionar tus cookies
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Puedes aceptar, rechazar o configurar tus preferencias desde el banner de cookies
              que aparece al entrar por primera vez. También puedes modificar tu elección en
              cualquier momento borrando las cookies de este sitio desde tu navegador.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Para más información sobre cómo gestionar cookies en tu navegador:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-papal-gold hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-papal-gold hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-papal-gold hover:underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-papal-gold hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Base legal
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              El uso de cookies en este sitio se rige por el Reglamento (UE) 2016/679 (RGPD),
              la Ley Orgánica 3/2018 de Protección de Datos Personales y la Ley 34/2002 de
              Servicios de la Sociedad de la Información (LSSI-CE).
            </p>
          </section>

          <section className="rounded-xl bg-papal-cream p-6 text-center">
            <p className="text-sm text-papal-navy/70">
              Consulta también nuestra{' '}
              <Link href="/privacidad" className="font-bold text-papal-gold hover:underline">
                política de privacidad
              </Link>{' '}
              y nuestro{' '}
              <Link href="/aviso-legal" className="font-bold text-papal-gold hover:underline">
                aviso legal
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  )
}
