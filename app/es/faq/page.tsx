import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { faq, FAQ_CATEGORIES } from '@/data/faq'
import { getAlternates } from '@/lib/i18n-metadata'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: 'Resolvemos todas tus dudas sobre la visita del Papa León XIV a España: inscripción, transporte, alojamiento, qué llevar y cómo asistir a los actos.',
  alternates: getAlternates('/faq', 'es'),
}

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const categories = Object.entries(FAQ_CATEGORIES) as [keyof typeof FAQ_CATEGORIES, string][]

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Preguntas frecuentes
          </h1>
          <p className="mt-3 text-white/70">
            Todo lo que necesitas saber sobre la visita del Papa León XIV a España
          </p>
        </Container>
      </section>

      {/* Índice rápido */}
      <section className="border-b border-gray-100 bg-papal-cream">
        <Container className="py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="rounded-full border border-papal-gold/30 px-4 py-1.5 text-xs font-medium text-papal-navy transition-colors hover:bg-papal-gold hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl">
          {categories.map(([key, label]) => {
            const categoryFaqs = faq.filter((item) => item.category === key)
            return (
              <section key={key} id={key} className="mb-10 scroll-mt-20">
                <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                  {label}
                </h2>
                <div className="space-y-3">
                  {categoryFaqs.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-gray-100 bg-white shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-start gap-3 p-5 font-medium text-papal-navy transition-colors hover:text-papal-gold [&::-webkit-details-marker]:hidden">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-papal-gold/20 text-xs font-bold text-papal-gold transition-transform group-open:rotate-45">
                          +
                        </span>
                        <span>{item.question}</span>
                      </summary>
                      <div className="border-t border-gray-50 px-5 pb-5 pt-3">
                        <p className="pl-8 text-sm leading-relaxed text-papal-navy/70">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )
          })}

          {/* CTA */}
          <div className="mt-10 rounded-xl bg-papal-cream p-6 text-center">
            <h3 className="font-heading text-lg font-bold text-papal-navy">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="mt-1 text-sm text-papal-navy/60">
              Consulta la web oficial para información actualizada.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://conelpapa.es"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                Web oficial
              </a>
              <Link
                href="/como-asistir"
                className="rounded-lg border border-papal-navy/20 px-4 py-2 text-sm font-bold text-papal-navy hover:bg-white"
              >
                Guía práctica
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
