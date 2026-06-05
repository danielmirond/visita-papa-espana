import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import type { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'
import { getAlternates } from '@/lib/i18n-metadata'

const META: Partial<Record<Locale, { title: string; description: string }>> = {
  es: {
    title: '¿Cuánto cuesta la visita del Papa y quién la paga?',
    description:
      'La visita del Papa León XIV a España costará unos 25 millones de euros: quién la paga (empresas, diócesis, fieles y administraciones) y el retorno económico estimado.',
  },
  en: {
    title: 'How much does the Pope’s visit cost and who pays?',
    description:
      'Pope Leo XIV’s visit to Spain will cost about 25 million euros: who pays for it (companies, dioceses, faithful and public administrations) and the estimated economic return.',
  },
}

export function getCosteMeta(locale: Locale): Metadata {
  const m = META[locale] || META.en!
  return { ...m, alternates: getAlternates('/cuanto-cuesta-visita-papa', locale) }
}

const FIN_ES = [
  { pct: '45 %', eur: '≈ 11,25 M€', quien: 'Empresas, fundaciones y benefactores privados' },
  { pct: '30 %', eur: '≈ 7,5 M€', quien: 'Diócesis y Conferencia Episcopal (aportaciones de los fieles)' },
  { pct: '20 %', eur: '≈ 5 M€', quien: 'Administraciones públicas (seguridad, transporte, dispositivos)' },
  { pct: '5 %', eur: '≈ 1,25 M€', quien: 'Pequeños donativos individuales' },
]
const FIN_EN = [
  { pct: '45%', eur: '≈ €11.25M', quien: 'Companies, foundations and private benefactors' },
  { pct: '30%', eur: '≈ €7.5M', quien: 'Dioceses and the Spanish Bishops’ Conference (the faithful’s offerings)' },
  { pct: '20%', eur: '≈ €5M', quien: 'Public administrations (security, transport, logistics)' },
  { pct: '5%', eur: '≈ €1.25M', quien: 'Small individual donations' },
]

export default function CosteVisitaPage({ locale }: { locale: Locale }) {
  const isEs = locale === 'es'
  const fin = isEs ? FIN_ES : FIN_EN
  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">
            {isEs ? 'Coste y financiación' : 'Cost and funding'}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            {isEs ? '¿Cuánto cuesta la visita del Papa y quién la paga?' : 'How much does the Pope’s visit cost and who pays?'}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            {isEs
              ? 'El Viaje Apostólico de León XIV a España (6-12 de junio de 2026) tiene un coste estimado de unos 25 millones de euros.'
              : 'Pope Leo XIV’s Apostolic Journey to Spain (6-12 June 2026) has an estimated cost of about 25 million euros.'}
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            {isEs
              ? 'La visita del Papa León XIV a España costará en torno a 25 millones de euros, según el coordinador económico del viaje y vicesecretario para Asuntos Económicos de la Conferencia Episcopal Española (CEE), Fernando Giménez Barriocanal. Es una cifra superior a la anunciada inicialmente en abril, por el aumento de actos y del dispositivo de seguridad.'
              : 'Pope Leo XIV’s visit to Spain will cost around 25 million euros, according to the journey’s economic coordinator and deputy secretary for Economic Affairs of the Spanish Bishops’ Conference (CEE), Fernando Giménez Barriocanal. This is higher than the figure first announced in April, due to the increase in events and the security operation.'}
          </p>

          <div>
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
              {isEs ? '¿Quién paga la visita del Papa?' : 'Who pays for the Pope’s visit?'}
            </h2>
            <p className="mb-4">
              {isEs
                ? 'La mayor parte del presupuesto procede de fondos privados y de la propia Iglesia. Las administraciones públicas asumen aproximadamente el 20 %, destinado sobre todo a seguridad, transporte y dispositivos. Reparto:'
                : 'Most of the budget comes from private funds and the Church itself. Public administrations cover roughly 20%, mainly for security, transport and logistics. Breakdown:'}
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-papal-cream/60 text-papal-navy">
                  <tr>
                    <th className="px-4 py-2">%</th>
                    <th className="px-4 py-2">{isEs ? 'Importe' : 'Amount'}</th>
                    <th className="px-4 py-2">{isEs ? 'Quién lo aporta' : 'Who contributes'}</th>
                  </tr>
                </thead>
                <tbody>
                  {fin.map((f) => (
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
            <h2 className="mb-3 font-heading text-2xl font-bold text-papal-navy">
              {isEs ? 'Retorno económico estimado' : 'Estimated economic return'}
            </h2>
            <p>
              {isEs
                ? 'Pese al coste, los coordinadores calculan un retorno económico superior a los 150 millones de euros para las ciudades anfitrionas (Madrid, Barcelona, Gran Canaria y Tenerife), gracias a la afluencia de peregrinos: hoteles, restauración, transporte y comercio.'
                : 'Despite the cost, coordinators estimate an economic return of over 150 million euros for the host cities (Madrid, Barcelona, Gran Canaria and Tenerife), thanks to the influx of pilgrims: hotels, dining, transport and retail.'}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            {isEs
              ? 'Fuentes: Conferencia Episcopal Española e información publicada por Infobae, COPE y Religión en Libertad (junio de 2026). Cifras estimadas.'
              : 'Sources: Spanish Bishops’ Conference and reporting by Infobae, COPE and Religión en Libertad (June 2026). Estimated figures.'}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href={localizePath('/programa', locale)} className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              {isEs ? 'Ver el programa completo' : 'See the full schedule'}
            </Link>
            <Link href={localizePath('/ciudades', locale)} className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              {isEs ? 'Ciudades de la visita' : 'Cities of the visit'}
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
