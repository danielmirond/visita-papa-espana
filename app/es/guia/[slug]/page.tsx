import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import { profiles, getProfileBySlug } from '@/data/perfiles'
import { getAffiliateById } from '@/data/affiliates'
import { getAlternates } from '@/lib/i18n-metadata'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const profile = getProfileBySlug(params.slug)
  if (!profile) return {}
  return {
    title: `Guía para ${profile.title.toLowerCase()}`,
    description: `Consejos y recomendaciones para ${profile.title.toLowerCase()} durante la visita del Papa León XIV a España. Qué llevar, qué tener en cuenta y cómo prepararse.`,
    alternates: getAlternates(`/guia/${params.slug}`, 'es'),
  }
}

export default function ProfilePage({ params }: Props) {
  const profile = getProfileBySlug(params.slug)
  if (!profile) notFound()

  const affiliates = profile.affiliateIds
    .map((id) => getAffiliateById(id))
    .filter(Boolean)

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-10">
          <Link href="/guia" className="text-sm text-papal-gold hover:underline">
            &larr; Todas las guías
          </Link>
          <div className="mt-4">
            <div>
              <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                {profile.title}
              </h1>
              <p className="mt-1 text-white/70">{profile.description}</p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">

            {/* Consejos */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Consejos
              </h2>
              <div className="space-y-2">
                {profile.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-papal-gold/20 text-xs font-bold text-papal-gold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-papal-navy/80">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Qué llevar */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Qué llevar
              </h2>
              <div className="rounded-xl bg-papal-cream p-5">
                <ul className="space-y-1.5">
                  {profile.essentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-papal-navy">
                      <span className="mt-0.5">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Advertencias */}
            <section>
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                Aspectos importantes
              </h2>
              <div className="rounded-xl bg-papal-cream border border-papal-gold/20 p-5">
                <ul className="space-y-1.5">
                  {profile.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-papal-navy/80">
                      <span className="mt-0.5">&mdash;</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Calendario */}
            <section className="rounded-xl bg-papal-cream p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-papal-navy">
                Añadir eventos al calendario
              </h3>
              <p className="mt-1 text-sm text-papal-navy/60">
                Todos los actos de la visita en un archivo para su dispositivo.
              </p>
              <a
                href="/api/calendario"
                download
                className="mt-3 inline-block rounded-lg bg-papal-gold px-5 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
              >
                Descargar calendario
              </a>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Afiliados relevantes */}
            {affiliates.length > 0 && (
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-papal-navy">
                  Prepara tu viaje
                </h3>
                <div className="mt-3 space-y-3">
                  {affiliates.map((aff) => aff && (
                    <a
                      key={aff.id}
                      href={aff.url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block rounded-lg border border-papal-gold/20 p-3 transition-colors hover:bg-papal-cream"
                    >
                      <p className="font-medium text-papal-navy">{aff.displayName}</p>
                      <p className="mt-1 text-xs text-papal-navy/60">{aff.description}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-2 text-[10px] text-papal-navy/40">Enlaces patrocinados</p>
              </div>
            )}

            {/* Otras guías */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-papal-navy">
                Otras guías
              </h3>
              <div className="mt-3 space-y-2">
                {profiles
                  .filter((p) => p.slug !== profile.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/guia/${p.slug}`}
                      className="flex items-center gap-2 rounded-lg p-2 text-sm transition-colors hover:bg-gray-50"
                    >
                      <span className="text-papal-navy/80">{p.title}</span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Newsletter */}
          </aside>
        </div>
      </Container>
    </>
  )
}
