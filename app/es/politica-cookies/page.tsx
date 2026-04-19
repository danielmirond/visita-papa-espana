import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { getAlternates } from '@/lib/i18n-metadata'
import CookiePreferencesButton from '@/components/shared/CookiePreferencesButton'

export const metadata: Metadata = {
  title: 'Política de cookies · visita-papa-2026.com',
  description:
    'Política de cookies conforme a la Guía AEPD 2023, LSSI-CE art. 22.2, RGPD y LOPDGDD. Tabla completa de cookies, finalidades, duración y cómo revocar el consentimiento.',
  alternates: getAlternates('/politica-cookies', 'es'),
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10 text-center">
          <h1 className="font-heading text-3xl font-bold text-white">Política de cookies</h1>
          <p className="mt-2 text-sm text-white/70">Última actualización: 19 de abril de 2026</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-6 text-papal-navy/85">
          {/* Responsable */}
          <section className="rounded-xl border border-papal-gold/20 bg-papal-cream p-5">
            <h2 className="font-heading text-lg font-bold text-papal-navy">
              Responsable del tratamiento
            </h2>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="font-semibold text-papal-navy">Titular:</dt>
                <dd>Daniel Mirón (persona física)</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-papal-navy">NIF:</dt>
                <dd>44039446N</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-papal-navy">Contacto:</dt>
                <dd>
                  <Link href="/contacto" className="text-papal-gold-dark hover:underline">
                    Formulario de contacto
                  </Link>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-papal-navy">Sitio:</dt>
                <dd>www.visita-papa-2026.com</dd>
              </div>
            </dl>
          </section>

          {/* Qué son las cookies */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">¿Qué son las cookies?</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Las cookies son pequeños archivos de texto que un sitio web instala en tu
              dispositivo cuando lo visitas. Se usan para reconocer tu navegador en visitas
              posteriores y para recoger información sobre el uso del sitio. No ejecutan código
              malicioso ni acceden a archivos personales.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Esta política se redacta conforme a la <strong>Guía sobre el uso de las cookies</strong>{' '}
              (v2.1, junio 2023) de la Agencia Española de Protección de Datos (AEPD), al{' '}
              <strong>artículo 22.2 de la LSSI-CE</strong>, al <strong>Reglamento (UE) 2016/679 (RGPD)</strong>{' '}
              y a la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>.
            </p>
          </section>

          {/* Tipos utilizados */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Cookies utilizadas en este sitio
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Clasificadas según el criterio de la Guía AEPD 2023: por titularidad (propias /
              terceros), finalidad (técnicas, preferencias, análisis, marketing), y plazo
              (sesión / persistentes).
            </p>

            {/* Tabla técnicas */}
            <h3 className="mt-6 font-heading text-base font-bold text-papal-navy">
              1. Cookies técnicas propias (exentas de consentimiento · art. 22.2 LSSI)
            </h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead className="bg-papal-cream text-left text-papal-navy">
                  <tr>
                    <th className="border border-papal-gold/20 p-2">Nombre</th>
                    <th className="border border-papal-gold/20 p-2">Titular</th>
                    <th className="border border-papal-gold/20 p-2">Finalidad</th>
                    <th className="border border-papal-gold/20 p-2">Duración</th>
                    <th className="border border-papal-gold/20 p-2">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-papal-gold/20 p-2 font-mono">papa-cookie-consent</td>
                    <td className="border border-papal-gold/20 p-2">visita-papa-2026.com</td>
                    <td className="border border-papal-gold/20 p-2">
                      Almacenar la elección del usuario sobre las categorías de cookies (imprescindible
                      para que el banner recuerde la preferencia).
                    </td>
                    <td className="border border-papal-gold/20 p-2">13 meses</td>
                    <td className="border border-papal-gold/20 p-2">localStorage (persistente)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabla analíticas */}
            <h3 className="mt-6 font-heading text-base font-bold text-papal-navy">
              2. Cookies analíticas de terceros (requieren consentimiento)
            </h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead className="bg-papal-cream text-left text-papal-navy">
                  <tr>
                    <th className="border border-papal-gold/20 p-2">Nombre</th>
                    <th className="border border-papal-gold/20 p-2">Titular</th>
                    <th className="border border-papal-gold/20 p-2">Finalidad</th>
                    <th className="border border-papal-gold/20 p-2">Duración</th>
                    <th className="border border-papal-gold/20 p-2">Política</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-papal-gold/20 p-2 font-mono">_ga</td>
                    <td className="border border-papal-gold/20 p-2">
                      Google LLC (Google Analytics 4)
                    </td>
                    <td className="border border-papal-gold/20 p-2">
                      Distinguir usuarios únicos mediante ID aleatorio. IP anonimizada. No
                      contiene datos personales directos.
                    </td>
                    <td className="border border-papal-gold/20 p-2">2 años</td>
                    <td className="border border-papal-gold/20 p-2" rowSpan={2}>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-papal-gold-dark underline hover:text-papal-gold"
                      >
                        Política de privacidad de Google
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-papal-gold/20 p-2 font-mono">_ga_&lt;ID&gt;</td>
                    <td className="border border-papal-gold/20 p-2">Google LLC</td>
                    <td className="border border-papal-gold/20 p-2">
                      Mantener el estado de sesión en GA4 (ID de propiedad de medición).
                    </td>
                    <td className="border border-papal-gold/20 p-2">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-papal-navy/70">
              <strong>Transferencia internacional:</strong> los datos de Google Analytics pueden
              ser tratados por Google LLC en Estados Unidos, amparados por las{' '}
              <a
                href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-papal-gold-dark underline hover:text-papal-gold"
              >
                cláusulas contractuales tipo (SCCs)
              </a>{' '}
              aprobadas por la Comisión Europea (Decisión 2021/914) y por el marco{' '}
              <em>EU-US Data Privacy Framework</em> (Decisión de adecuación 2023/1795).
            </p>

            {/* Tabla marketing/afiliación */}
            <h3 className="mt-6 font-heading text-base font-bold text-papal-navy">
              3. Cookies de marketing y afiliación (requieren consentimiento)
            </h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead className="bg-papal-cream text-left text-papal-navy">
                  <tr>
                    <th className="border border-papal-gold/20 p-2">Proveedor</th>
                    <th className="border border-papal-gold/20 p-2">Finalidad</th>
                    <th className="border border-papal-gold/20 p-2">Duración máx.</th>
                    <th className="border border-papal-gold/20 p-2">Política</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">Amazon EU</td>
                    <td className="border border-papal-gold/20 p-2">
                      Registro de clic para atribución de comisión de afiliado. Se instalan solo
                      al hacer clic en un enlace de afiliado (no de forma proactiva).
                    </td>
                    <td className="border border-papal-gold/20 p-2">24 horas</td>
                    <td className="border border-papal-gold/20 p-2">
                      <a
                        href="https://www.amazon.es/gp/help/customer/display.html?nodeId=201909010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-papal-gold-dark underline hover:text-papal-gold"
                      >
                        amazon.es/privacy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">Booking.com</td>
                    <td className="border border-papal-gold/20 p-2">
                      Atribución de reserva en programa de afiliados. Solo al clic.
                    </td>
                    <td className="border border-papal-gold/20 p-2">30 días</td>
                    <td className="border border-papal-gold/20 p-2">
                      <a
                        href="https://www.booking.com/content/privacy.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-papal-gold-dark underline hover:text-papal-gold"
                      >
                        booking.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-papal-gold/20 p-2">Skyscanner</td>
                    <td className="border border-papal-gold/20 p-2">
                      Atribución de clic-out a partner. Solo al clic.
                    </td>
                    <td className="border border-papal-gold/20 p-2">30 días</td>
                    <td className="border border-papal-gold/20 p-2">
                      <a
                        href="https://www.skyscanner.net/media/cookie-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-papal-gold-dark underline hover:text-papal-gold"
                      >
                        skyscanner/cookies
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-papal-navy/70">
              <strong>Nota:</strong> estas cookies pertenecen al dominio del proveedor y se
              instalan únicamente cuando el usuario hace clic activamente en un enlace de
              afiliación. Si rechazas las cookies de marketing, los enlaces siguen funcionando
              pero no se registra la atribución de la venta.
            </p>

            {/* Embebidos */}
            <h3 className="mt-6 font-heading text-base font-bold text-papal-navy">
              Cookies y trackers que este sitio NO utiliza
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>❌ No usamos píxel de Facebook / Meta.</li>
              <li>❌ No usamos Google Ads ni cookies de publicidad personalizada.</li>
              <li>❌ No embebemos contenido de Twitter, Instagram, Facebook ni TikTok.</li>
              <li>❌ No usamos Google Maps (mapas servidos con Leaflet + OpenStreetMap).</li>
              <li>❌ No vendemos ni compartimos datos con <em>data brokers</em>.</li>
            </ul>
          </section>

          {/* Revocar */}
          <section className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Revocar o modificar tu consentimiento
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Puedes revocar o modificar tu elección en cualquier momento pulsando aquí:
            </p>
            <CookiePreferencesButton className="mt-3" />
            <p className="mt-3 text-sm leading-relaxed">
              También puedes gestionar las cookies borrándolas directamente desde tu navegador:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold-dark hover:underline"
                >
                  Google Chrome →
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold-dark hover:underline"
                >
                  Mozilla Firefox →
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold-dark hover:underline"
                >
                  Safari →
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-papal-gold-dark hover:underline"
                >
                  Microsoft Edge →
                </a>
              </li>
            </ul>
          </section>

          {/* Plazo de consentimiento */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">
              Plazo de conservación del consentimiento
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              De acuerdo con las directrices de la AEPD y del EDPB, el consentimiento
              prestado <strong>se renueva cada 13 meses</strong>. Transcurrido ese plazo,
              el banner se mostrará de nuevo para que vuelvas a indicar tu preferencia. Si
              el texto o las categorías del banner se modifican sustancialmente, el
              consentimiento se solicita de nuevo antes del plazo.
            </p>
          </section>

          {/* Base legal */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">Base legal</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <strong>Cookies técnicas:</strong> interés legítimo del responsable (art. 22.2
                LSSI-CE), exentas de consentimiento.
              </li>
              <li>
                <strong>Cookies analíticas y de marketing:</strong> consentimiento del usuario
                (art. 6.1.a RGPD + art. 22.2 LSSI-CE) manifestado mediante acción afirmativa
                clara en el banner.
              </li>
            </ul>
          </section>

          {/* Derechos */}
          <section>
            <h2 className="font-heading text-xl font-bold text-papal-navy">Tus derechos</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Tienes derecho a ser informado, a revocar el consentimiento, a acceder, rectificar,
              suprimir, oponerte, limitar y portar tus datos. Para ejercerlos escribe a{' '}
              <Link href="/contacto" className="text-papal-gold-dark hover:underline">formulario de contacto</Link>{' '}
              adjuntando copia de un documento que acredite tu identidad. Si consideras que el
              tratamiento vulnera tus derechos, puedes presentar una reclamación ante la{' '}
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

          <section className="rounded-xl bg-papal-cream p-6 text-center">
            <p className="text-sm text-papal-navy/70">
              Consulta también nuestra{' '}
              <Link href="/privacidad" className="font-bold text-papal-gold-dark hover:underline">
                política de privacidad
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
