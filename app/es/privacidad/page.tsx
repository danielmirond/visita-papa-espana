import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad y tratamiento de datos personales en visita-papa-2026.es conforme al RGPD.',
  alternates: getAlternates('/privacidad', 'es'),
}

export default function PrivacidadPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <h1 className="font-heading text-3xl font-bold text-white">
            Política de privacidad
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
              Responsable del tratamiento
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Este sitio web es un proyecto informativo independiente sobre la visita
              apostólica del Papa León XIV a España en junio de 2026. No tiene vinculación
              oficial con la Santa Sede ni con la Conferencia Episcopal Española.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Datos que recogemos
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Solo recogemos los datos estrictamente necesarios:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-papal-gold">&bull;</span>
                <div>
                  <strong className="text-papal-navy">Dirección de email:</strong> únicamente si te suscribes
                  voluntariamente a la newsletter. Se usa exclusivamente para enviarte novedades
                  sobre la visita papal.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-papal-gold">&bull;</span>
                <div>
                  <strong className="text-papal-navy">Datos de navegación:</strong> si aceptas las cookies
                  analíticas, Google Analytics recopilará de forma anónima información sobre tu
                  visita (páginas vistas, dispositivo, país). La IP se anonimiza.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Finalidad del tratamiento
            </h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>&bull; Enviar información sobre la visita papal a los suscriptores de la newsletter</li>
              <li>&bull; Analizar el uso del sitio web para mejorarlo</li>
              <li>&bull; Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Base legal
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              El tratamiento de tus datos se basa en tu consentimiento expreso (artículo 6.1.a
              del RGPD), que puedes retirar en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Cesión de datos
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              No cedemos tus datos a terceros. Los datos de navegación pueden ser procesados por
              Google LLC (Google Analytics) en Estados Unidos, amparados por las cláusulas
              contractuales tipo aprobadas por la Comisión Europea.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Conservación
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Los emails de la newsletter se conservan mientras mantengas la suscripción activa.
              Puedes darte de baja en cualquier momento desde cada email recibido. Los datos
              anónimos de Google Analytics se conservan durante 14 meses.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Tus derechos
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>&bull; Acceder a tus datos personales</li>
              <li>&bull; Rectificar datos inexactos</li>
              <li>&bull; Solicitar la supresión de tus datos</li>
              <li>&bull; Oponerte al tratamiento</li>
              <li>&bull; Limitar el tratamiento</li>
              <li>&bull; Portabilidad de los datos</li>
              <li>&bull; Retirar el consentimiento en cualquier momento</li>
              <li>&bull; Presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)</li>
            </ul>
            <p className="mt-2 text-sm leading-relaxed">
              Para ejercer estos derechos, puedes contactar con nosotros a través de la web oficial
              de inscripción o de los enlaces del pie de página.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Seguridad
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad
              de tus datos: conexión cifrada HTTPS, servidores en la UE y acceso restringido.
            </p>
          </section>

          <section className="rounded-xl bg-papal-cream p-6 text-center">
            <p className="text-sm text-papal-navy/70">
              Consulta también nuestra{' '}
              <Link href="/politica-cookies" className="font-bold text-papal-gold hover:underline">
                política de cookies
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
