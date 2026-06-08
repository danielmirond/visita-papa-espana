import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Cómo se llama el gorro del Papa: solideo, mitra, camauro y tiara',
  description:
    '¿Cómo se llama el gorro del Papa? Guía de los tocados papales: el solideo (zucchetto) blanco, la mitra de las ceremonias, el camauro de invierno, el saturno y la histórica tiara. Qué significa cada uno.',
  alternates: { canonical: `${siteConfig.url}/es/gorro-del-papa` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/gorro-del-papa`,
    title: 'Cómo se llama el gorro del Papa: solideo, mitra, camauro y tiara',
    description: 'Los nombres y el significado de los tocados del Papa León XIV.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'El gorro del Papa León XIV' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

interface Tocado {
  nombre: string
  alias?: string
  texto: string
}

const TOCADOS: Tocado[] = [
  {
    nombre: 'Solideo',
    alias: 'Zucchetto',
    texto:
      'Es el pequeño casquete que cubre la coronilla y el gorro que más se ve en el día a día del Papa. El del Pontífice es siempre blanco (los cardenales lo llevan rojo y los obispos, morado). Su nombre viene del latín «soli Deo» («solo ante Dios»), porque se retiraba únicamente ante el Santísimo. En italiano se le llama zucchetto.',
  },
  {
    nombre: 'Mitra',
    texto:
      'Es el tocado alto y rematado en dos puntas que el Papa —y los obispos— llevan en las grandes celebraciones litúrgicas, como la misa del Corpus en Cibeles o la de la Sagrada Familia. Simboliza la autoridad pastoral. Las dos puntas suelen interpretarse como el Antiguo y el Nuevo Testamento.',
  },
  {
    nombre: 'Camauro',
    texto:
      'Un gorro de terciopelo rojo ribeteado de armiño blanco que los papas usaban antiguamente para protegerse del frío. Había caído en desuso hasta que Benedicto XVI lo lució puntualmente en 2005. Es más un tocado histórico que de uso habitual.',
  },
  {
    nombre: 'Saturno',
    alias: 'Galero',
    texto:
      'El sombrero de ala ancha y copa redonda —de ahí el nombre, por su parecido con el planeta y sus anillos— que el Papa usa al aire libre para protegerse del sol, por ejemplo durante los recorridos en papamóvil. Suele ser rojo o blanco.',
  },
  {
    nombre: 'Tiara',
    alias: 'Triregnum',
    texto:
      'La histórica corona papal de tres niveles, símbolo del poder del Pontífice. Dejó de usarse tras el Concilio Vaticano II: Pablo VI fue el último en ser coronado con ella en 1963. Hoy ya no forma parte del atuendo papal, aunque sigue apareciendo en el escudo de la Santa Sede.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se llama el gorro blanco del Papa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El gorro blanco que el Papa lleva habitualmente se llama solideo (en italiano, zucchetto). Es un casquete que cubre la coronilla; el del Papa es blanco, el de los cardenales rojo y el de los obispos morado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se llama el gorro alto del Papa en la misa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tocado alto y acabado en dos puntas que el Papa lleva en las celebraciones litúrgicas se llama mitra. La comparten también los obispos y simboliza su autoridad pastoral.',
      },
    },
  ],
}

export default function GorroDelPapaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Curiosidades · León XIV</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Cómo se llama el gorro del Papa
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            El Papa no lleva un único «gorro»: cada tocado tiene un nombre y un significado distinto según el momento.
            Esta es la guía de los principales.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8 text-papal-navy/80 leading-relaxed">
          <p>
            Durante la visita del Papa León XIV a España muchos se han preguntado cómo se llama el gorro blanco que
            lleva, o el tocado alto de las misas. La respuesta depende del tocado: el de uso diario es el{' '}
            <strong>solideo</strong>, mientras que en las ceremonias luce la <strong>mitra</strong>. Estos son todos.
          </p>

          {TOCADOS.map((t, i) => (
            <div key={t.nombre} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-heading text-sm font-bold text-papal-gold-dark">{i + 1}.</span>
                <h2 className="font-heading text-xl font-bold text-papal-navy">{t.nombre}</h2>
                {t.alias && (
                  <span className="rounded bg-papal-gold/20 px-2 py-0.5 text-sm font-semibold text-papal-gold-dark">
                    {t.alias}
                  </span>
                )}
              </div>
              <p className="mt-2">{t.texto}</p>
            </div>
          ))}

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Cada prenda del Papa tiene una simbología propia, del solideo blanco al ropaje de las grandes celebraciones.
          </div>

          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/papa-leon-xiv" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              Quién es el Papa León XIV
            </Link>
            <Link href="/es/bandera-vaticano" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              La bandera del Vaticano
            </Link>
            <Link href="/es/visita-papa-madrid-misa-cibeles-movistar-arena-7-junio-directo" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              La visita, en directo
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
