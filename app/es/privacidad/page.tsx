import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Política de privacidad · visita-papa-2026.com',
  description:
    'Política de privacidad del sitio conforme al RGPD (UE 2016/679) y la LOPDGDD 3/2018. Responsable, datos recogidos, finalidades, derechos ARCO-OLP y contacto.',
  alternates: getAlternates('/privacidad', 'es'),
}

export default function PrivacidadPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <h1 className="font-heading text-3xl font-bold text-white">Política de privacidad</h1>
          <p className="mt-2 text-sm text-white/70">Última actualización: 19 de abril de 2026</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-6 text-papal-navy/85">

          {/* Responsable */}
          <section className="rounded-xl border-2 border-papal-gold/30 bg-papal-cream p-6">
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              1. Responsable del tratamiento
            </h2>
            <dl className="mt-3 space-y-2 text-sm">
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
            <p className="mt-3 text-xs text-papal-navy/70">
              Este sitio web es un proyecto informativo independiente sobre la visita apostólica
              del Papa León XIV a España en junio de 2026. <strong>No tiene vinculación oficial</strong>{' '}
              con la Santa Sede, la Conferencia Episcopal Española ni con administraciones
              públicas o eclesiásticas.
            </p>
          </section>

          {/* Datos */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              2. Datos personales que tratamos
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Tratamos únicamente los datos estrictamente necesarios para prestar el servicio
              informativo del sitio. No solicitamos ni almacenamos categorías especiales de
              datos (origen étnico, convicciones religiosas salvo tu libre adhesión por email
              temático, datos de salud, orientación sexual, etc.).
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead className="bg-papal-cream text-left text-papal-navy">
                  <tr>
                    <th className="border border-papal-gold/20 p-2">Dato</th>
                    <th className="border border-papal-gold/20 p-2">Origen</th>
                    <th className="border border-papal-gold/20 p-2">Finalidad</th>
                    <th className="border border-papal-gold/20 p-2">Base legal</th>
                    <th className="border border-papal-gold/20 p-2">Conservación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">
                      Dirección de email
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Suscripción voluntaria a la newsletter
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Envío de novedades sobre la visita apostólica
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Consentimiento (art. 6.1.a RGPD)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Hasta que te des de baja; supresión al 6.º mes tras la visita si no hay
                      interacción
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">
                      Datos de navegación (IP anonimizada, páginas vistas, dispositivo, país)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Google Analytics 4 (si aceptas cookies analíticas)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Medir tráfico y uso del sitio para mejorarlo
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Consentimiento (art. 6.1.a RGPD)
                    </td>
                    <td className="border border-papal-gold/20 p-2">14 meses</td>
                  </tr>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">
                      Registro del consentimiento de cookies
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Clic del usuario en el banner
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Acreditar la prestación del consentimiento (art. 7.1 RGPD)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Obligación legal (art. 7.1 RGPD)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      13 meses (localStorage)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Destinatarios */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              3. Destinatarios y transferencias internacionales
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Los datos personales no se ceden a terceros con fines comerciales. Únicamente
              son tratados por:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                • <strong>Google LLC</strong> (Google Analytics 4) — Estados Unidos. Transferencia
                amparada por las{' '}
                <a
                  href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold-dark hover:underline"
                >
                  cláusulas contractuales tipo (SCCs)
                </a>{' '}
                aprobadas por la Comisión Europea (Decisión 2021/914) y por el marco{' '}
                <em>EU-US Data Privacy Framework</em> (Decisión de adecuación 2023/1795).
              </li>
              <li>
                • <strong>Vercel Inc.</strong> (hosting y CDN del sitio) — datacenters en la UE
                por defecto; transferencia puntual a EE. UU. amparada por las mismas cláusulas.
              </li>
              <li>
                • <strong>Proveedor de email marketing</strong> (MailerLite EU, proveedor con
                sede en Lituania) — los emails de la newsletter se almacenan en la UE.
              </li>
            </ul>
          </section>

          {/* Derechos */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              4. Tus derechos (ARCO-OLP)
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <strong>Acceso</strong> — conocer qué datos tuyos tratamos.</li>
              <li>• <strong>Rectificación</strong> — corregir datos inexactos o incompletos.</li>
              <li>• <strong>Supresión</strong> ("derecho al olvido") — pedir la eliminación de tus datos.</li>
              <li>• <strong>Oposición</strong> — oponerte al tratamiento.</li>
              <li>• <strong>Limitación</strong> — restringir el tratamiento en determinados supuestos.</li>
              <li>• <strong>Portabilidad</strong> — recibir tus datos en un formato estructurado.</li>
              <li>• <strong>Revocar el consentimiento</strong> en cualquier momento sin que afecte a la licitud del tratamiento previo.</li>
              <li>• <strong>Reclamar ante la AEPD</strong> si consideras que el tratamiento vulnera tus derechos.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed">
              Para ejercerlos, escribe a{' '}
              <Link href="/contacto" className="text-papal-gold-dark hover:underline">formulario de contacto</Link>{' '}
              adjuntando copia de un documento que acredite tu identidad (DNI, pasaporte o
              equivalente). Responderemos en un plazo máximo de 30 días naturales.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Si no estás satisfecho con nuestra respuesta, puedes reclamar ante la{' '}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-papal-gold-dark hover:underline"
              >
                Agencia Española de Protección de Datos (www.aepd.es)
              </a>
              .
            </p>
          </section>

          {/* Seguridad */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              5. Medidas de seguridad
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Aplicamos las medidas técnicas y organizativas apropiadas para garantizar un
              nivel de seguridad adecuado al riesgo (art. 32 RGPD):
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Conexión cifrada HTTPS/TLS 1.3 en todo el sitio.</li>
              <li>• Pseudonimización y anonimización cuando sea técnicamente posible.</li>
              <li>• Acceso restringido mediante autenticación de dos factores.</li>
              <li>• Copias de seguridad diarias cifradas.</li>
              <li>• Revisión periódica de accesos y permisos.</li>
            </ul>
          </section>

          {/* Menores */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              6. Menores de edad
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Este sitio no está dirigido a menores de 14 años. No solicitamos datos de menores
              de forma intencionada. Si detectamos datos de un menor sin consentimiento
              parental, procederemos a su eliminación inmediata (art. 7 LOPDGDD).
            </p>
          </section>

          {/* Cambios */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              7. Modificaciones de esta política
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Podemos modificar esta política para adaptarla a cambios normativos o
              funcionales. Cualquier modificación se anunciará con al menos 15 días de
              antelación en esta misma página, indicando la fecha de entrada en vigor.
            </p>
          </section>

          <section className="rounded-xl bg-papal-cream p-6 text-center">
            <p className="text-sm text-papal-navy/70">
              Consulta también nuestra{' '}
              <Link href="/politica-cookies" className="font-bold text-papal-gold-dark hover:underline">
                política de cookies
              </Link>{' '}
              y el{' '}
              <Link href="/aviso-legal" className="font-bold text-papal-gold-dark hover:underline">
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
