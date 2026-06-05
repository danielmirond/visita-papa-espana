import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta la visita del Papa y quién la paga?',
  description:
    'La visita del Papa León XIV a España costará unos 25 millones de euros: quién la paga (empresas, diócesis, fieles y administraciones) y el retorno económico estimado.',
  alternates: { canonical: `${siteConfig.url}/es/cuanto-cuesta-visita-papa` },
}

const FINANCIACION = [
  { pct: '45 %', eur: '≈ 11,25 M€', quien: 'Empresas, fundaciones y benefactores privados' },
  { pct: '30 %', eur: '≈ 7,5 M€', quien: 'Diócesis y Conferencia Episcopal (aportaciones de los fieles)' },
  { pct: '20 %', eur: '≈ 5 M€', quien: 'Administraciones públicas (seguridad, transporte, dispositivos)' },
  { pct: '5 %', eur: '≈ 1,25 M€', quien: 'Pequeños donativos individuales' },
]

export default function CuantoCuestaPage() {
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Coste y financiación</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            ¿Cuánto cuesta la visita del Papa y quién la paga?
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El Viaje Apostólico de León XIV a España (6-12 de junio de 2026) tiene un coste estimado de unos
            25 millones de euros.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            La <strong>visita del Papa León XIV a España</strong> costará en torno a{' '}
            <strong>25 millones de euros</strong>, según el coordinador económico del viaje y vicesecretario para
            Asuntos Económicos de la Conferencia Episcopal Española (CEE), Fernando Giménez Barriocanal. Es una cifra
            superior a la anunciada inicialmente en abril, por el aumento de actos y del dispositivo de seguridad.
          </p>

          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">¿Quién paga la visita del Papa?</h2>
            <p className="mb-4">
              La mayor parte del presupuesto procede de fondos privados y de la propia Iglesia. Las administraciones
              públicas asumen aproximadamente el 20 %, destinado sobre todo a seguridad, transporte y dispositivos de
              los actos multitudinarios. Reparto de la financiación:
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-papal-cream/60 text-papal-navy">
                  <tr>
                    <th className="px-4 py-2">%</th>
                    <th className="px-4 py-2">Importe</th>
                    <th className="px-4 py-2">Quién lo aporta</th>
                  </tr>
                </thead>
                <tbody>
                  {FINANCIACION.map((f) => (
                    <tr key={f.pct} className="border-t border-gray-100">
                      <td className="px-4 py-2 font-bold text-papal-gold-dark">{f.pct}</td>
                      <td className="px-4 py-2">{f.eur}</td>
                      <td className="px-4 py-2">{f.quien}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">Retorno económico estimado</h2>
            <p>
              Pese al coste, los coordinadores calculan un <strong>retorno económico superior a los 150 millones de
              euros</strong> para las ciudades anfitrionas (Madrid, Barcelona, Gran Canaria y Tenerife), gracias a la
              afluencia de peregrinos: hoteles, restauración, transporte y comercio. El segmento hotelero de lujo en
              Madrid es uno de los más beneficiados por la llegada del Pontífice.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Fuentes: Conferencia Episcopal Española e información publicada por Infobae, COPE y Religión en Libertad
            (junio de 2026). Cifras estimadas, sujetas a la liquidación final del viaje.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/programa" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Ver el programa completo
            </Link>
            <Link href="/es/ciudades" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Ciudades de la visita
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
