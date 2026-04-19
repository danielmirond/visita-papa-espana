import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Aviso legal y política de afiliación',
  description: 'Aviso legal, política de privacidad y transparencia sobre enlaces de afiliación en visitapapa2026.es.',
  alternates: getAlternates('/aviso-legal', 'es'),
}

export default function AvisoLegalPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <h1 className="font-heading text-3xl font-bold text-white">
            Aviso legal
          </h1>
        </Container>
      </section>

      <Container className="py-10">
        <div className="prose prose-papal mx-auto max-w-2xl text-papal-navy/80">

          {/* Datos identificativos · art. 10 LSSI-CE */}
          <div className="rounded-xl border-2 border-papal-gold/30 bg-papal-cream p-5 not-prose">
            <h2 className="font-heading text-lg font-bold text-papal-navy">
              Datos identificativos (art. 10 LSSI-CE)
            </h2>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">Titular:</dt>
                <dd>Daniel Mirón (persona física)</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">NIF:</dt>
                <dd>44039446N</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">Contacto:</dt>
                <dd>
                  <Link href="/contacto" className="text-papal-gold-dark hover:underline">
                    Formulario de contacto
                  </Link>
                </dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="font-semibold text-papal-navy">Dominio:</dt>
                <dd>www.visita-papa-2026.com</dd>
              </div>
            </dl>
          </div>

          <h2 className="mt-8 font-heading text-xl font-bold text-papal-navy">Sobre este sitio</h2>
          <p className="text-sm leading-relaxed">
            Este sitio web es un proyecto informativo independiente y <strong>no tiene vinculación oficial</strong> con
            la Santa Sede, la Conferencia Episcopal Española, el Gobierno de España ni ninguna otra institución
            pública o religiosa. La información publicada se recopila de fuentes públicas y puede contener
            inexactitudes. Para información oficial, consulta{' '}
            <a href="https://conelpapa.es" target="_blank" rel="noopener noreferrer" className="text-papal-gold hover:underline">
              conelpapa.es
            </a>.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-papal-navy">Política de afiliación</h2>
          <p className="text-sm leading-relaxed">
            Este sitio web participa en programas de afiliación. Esto significa que algunos de los enlaces a
            productos y servicios (hoteles, transporte, seguros, merchandising) son <strong>enlaces de afiliado</strong>.
            Si realizas una compra a través de estos enlaces, recibimos una pequeña comisión sin coste adicional para ti.
          </p>
          <p className="text-sm leading-relaxed">
            Los enlaces de afiliación están siempre identificados con la etiqueta &ldquo;Enlace patrocinado&rdquo; o
            &ldquo;Enlaces patrocinados&rdquo; y llevan el atributo <code>rel=&ldquo;nofollow sponsored&rdquo;</code>.
          </p>
          <p className="text-sm leading-relaxed">
            La inclusión de enlaces de afiliación no influye en el contenido editorial ni en las recomendaciones
            que hacemos. Solo recomendamos servicios que consideramos útiles para los visitantes de la visita papal.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-papal-navy">Propiedad intelectual</h2>
          <p className="text-sm leading-relaxed">
            Las imágenes utilizadas en este sitio proceden de fuentes con licencia libre (Wikimedia Commons, Unsplash)
            o son de elaboración propia. Si crees que algún contenido infringe tus derechos, contacta con nosotros
            para su retirada inmediata.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-papal-navy">Privacidad y cookies</h2>
          <p className="text-sm leading-relaxed">
            Este sitio utiliza cookies técnicas propias (exentas de consentimiento) y cookies analíticas
            de Google Analytics 4 (previo consentimiento del usuario). Los emails recogidos para la
            newsletter se usan exclusivamente para enviar información sobre la visita papal y no se
            comparten con terceros. Consulta el detalle completo y los tipos de cookies en nuestra{' '}
            <a href="/politica-cookies" className="text-papal-gold hover:underline">
              política de cookies
            </a>{' '}
            y{' '}
            <a href="/privacidad" className="text-papal-gold hover:underline">
              política de privacidad
            </a>
            .
          </p>
          <p className="text-sm leading-relaxed">
            Para ejercer tus derechos (acceso, rectificación, supresión, oposición, limitación,
            portabilidad y revocación del consentimiento) escribe a{' '}
            <Link href="/contacto" className="text-papal-gold-dark hover:underline">formulario de contacto</Link>
            .
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-papal-navy">Limitación de responsabilidad</h2>
          <p className="text-sm leading-relaxed">
            La información de este sitio se proporciona &ldquo;tal cual&rdquo; y puede cambiar sin previo aviso.
            No nos hacemos responsables de decisiones tomadas en base a la información publicada aquí.
            Los horarios, lugares y programa de la visita papal pueden variar. Consulta siempre las fuentes
            oficiales antes de hacer planes definitivos.
          </p>
        </div>
      </Container>
    </>
  )
}
