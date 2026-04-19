import Link from 'next/link'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
  className?: string
}

const TEXT: Record<Locale, { body: string; more: string }> = {
  es: {
    body: 'Esta página contiene enlaces de afiliación. Si compras o reservas a través de ellos, podríamos recibir una pequeña comisión sin coste adicional para ti. No somos agencia de viajes ni intermediario turístico.',
    more: 'Política de afiliación',
  },
  en: {
    body: 'This page contains affiliate links. If you buy or book through them we may earn a small commission at no extra cost to you. We are not a travel agency or tourism intermediary.',
    more: 'Affiliate policy',
  },
  it: {
    body: 'Questa pagina contiene link di affiliazione. Se acquisti o prenoti tramite essi, potremmo ricevere una piccola commissione senza costi aggiuntivi per te. Non siamo agenzia di viaggi né intermediario turistico.',
    more: 'Politica di affiliazione',
  },
  fr: {
    body: 'Cette page contient des liens d’affiliation. Si tu achètes ou réserves via ces liens, nous pouvons recevoir une petite commission sans coût supplémentaire pour toi. Nous ne sommes ni agence de voyages ni intermédiaire touristique.',
    more: 'Politique d’affiliation',
  },
  de: {
    body: 'Diese Seite enthält Affiliate-Links. Wenn du über sie kaufst oder buchst, erhalten wir eine kleine Provision ohne Mehrkosten für dich. Wir sind weder Reisebüro noch touristischer Vermittler.',
    more: 'Affiliate-Richtlinie',
  },
  pt: {
    body: 'Esta página contém links de afiliação. Se comprares ou reservares através deles, poderemos receber uma pequena comissão sem custo adicional para ti. Não somos agência de viagens nem intermediário turístico.',
    more: 'Política de afiliação',
  },
  ca: {
    body: 'Aquesta pàgina conté enllaços d’afiliació. Si compres o reserves a través d’ells, podem rebre una petita comissió sense cost addicional per a tu. No som agència de viatges ni intermediari turístic.',
    more: 'Política d’afiliació',
  },
  gl: {
    body: 'Esta páxina contén ligazóns de afiliación. Se compras ou reservas a través delas, podemos recibir unha pequena comisión sen custo adicional para ti. Non somos axencia de viaxes nin intermediario turístico.',
    more: 'Política de afiliación',
  },
  eu: {
    body: 'Orri honek afiliazio-estekak ditu. Horien bidez erosten edo erreserbatzen baduzu, komisio txiki bat jaso dezakegu kostu gehigarririk gabe zuretzat. Ez gara bidaia-agentzia ez turismo-bitartekari.',
    more: 'Afiliazio-politika',
  },
}

/**
 * Nota de afiliación reutilizable para añadir al pie de páginas con
 * enlaces patrocinados (kit peregrino, ciudades, como-asistir, guía).
 * Cumple con el art. 20 de la LSSI-CE (identificación clara de la
 * comunicación comercial) y con la Directiva 2005/29/CE (prácticas
 * comerciales desleales).
 */
export default function AffiliateNotice({ locale, className = '' }: Props) {
  const t = TEXT[locale] || TEXT.es
  return (
    <aside
      role="note"
      aria-label={t.body}
      className={`mt-6 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 ${className}`}
    >
      <strong>ℹ️</strong> {t.body}{' '}
      <Link
        href={localizePath('/aviso-legal', locale)}
        className="underline underline-offset-2 hover:text-papal-gold-dark"
      >
        {t.more} →
      </Link>
    </aside>
  )
}
