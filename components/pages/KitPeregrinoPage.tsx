import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import AffiliateNotice from '@/components/affiliate/AffiliateNotice'
import { getKitPeregrino, getKitCategories, type KitCategory } from '@/data/i18n/content/kitPeregrino'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

const L: Record<Locale, {
  breadcrumb: string
  title: string
  subtitle: string
  introTitle: string
  intro: string
  priorityLabels: Record<'imprescindible' | 'recomendado' | 'opcional', string>
  seeOnAmazon: string
  disclaimerLead: string
  tipsTitle: string
  tips: string[]
  priceLabel: string
}> = {
  es: {
    breadcrumb: 'Qué llevar',
    title: 'Kit del peregrino: qué llevar a la visita del Papa',
    subtitle: 'Lista completa y revisada para eventos multitudinarios al aire libre',
    introTitle: 'Por qué esta lista',
    intro:
      'Asistir a un acto papal implica entre 6 y 12 horas al aire libre, colas, calor, multitudes, a veces bajo el sol de junio. Esta lista está pensada a partir de las experiencias reales de peregrinos en la JMJ Madrid 2011, la visita de Benedicto XVI a Barcelona 2010 y grandes eventos vaticanos. Lo agrupamos por prioridad (imprescindible, recomendado, opcional) y categoría.',
    priorityLabels: {
      imprescindible: 'Imprescindible',
      recomendado: 'Recomendado',
      opcional: 'Opcional',
    },
    seeOnAmazon: 'Ver opciones en Amazon →',
    disclaimerLead:
      'Enlaces con etiqueta de afiliado de Amazon. Si compras a través de ellos, podemos recibir una pequeña comisión sin coste adicional para ti. Esto ayuda a mantener la web gratis y sin publicidad intrusiva.',
    tipsTitle: 'Consejos prácticos extra',
    tips: [
      'Lleva ropa cómoda, transpirable y de manga larga ligera: protege del sol mejor que una camiseta corta.',
      'Calzado probado: nunca estrenes zapatillas el día del evento. Lleva tiritas para posibles ampollas.',
      'Comida ligera: bocadillos, fruta, barritas. Evita carnes o lácteos que sufren con el calor.',
      'Guarda las fotos de tus documentos en la nube por si pierdes la cartera.',
      'Prepara el móvil: descarga mapas offline de la ciudad antes del evento.',
      'Punto de encuentro fijo con tu grupo: las multitudes colapsan cobertura y redes.',
    ],
    priceLabel: 'Precio aprox.',
  },
  en: {
    breadcrumb: 'What to bring',
    title: 'Pilgrim kit: what to bring to the Pope’s visit',
    subtitle: 'Complete checklist for outdoor massive events',
    introTitle: 'Why this list',
    intro:
      'A papal event means 6-12 hours outdoors, queues, heat and crowds. This list is based on real pilgrim experiences from WYD Madrid 2011, Benedict XVI’s visit to Barcelona 2010 and major Vatican events. Grouped by priority and category.',
    priorityLabels: { imprescindible: 'Essential', recomendado: 'Recommended', opcional: 'Optional' },
    seeOnAmazon: 'See options on Amazon →',
    disclaimerLead:
      'Amazon affiliate links. If you buy through them we may earn a small commission at no extra cost to you — it helps keep this site free.',
    tipsTitle: 'Extra practical tips',
    tips: [
      'Comfortable, breathable, long-sleeved light clothing: better sun protection than a t-shirt.',
      'Broken-in shoes: never wear brand new trainers on the day. Bring blister plasters.',
      'Light food: sandwiches, fruit, bars. Avoid meat or dairy that suffer with heat.',
      'Store photos of your documents in the cloud in case you lose your wallet.',
      'Prepare your phone: download offline maps before the event.',
      'Fix a meeting point with your group: crowds collapse coverage and networks.',
    ],
    priceLabel: 'Approx. price',
  },
  it: {
    breadcrumb: 'Cosa portare',
    title: 'Kit del pellegrino: cosa portare alla visita del Papa',
    subtitle: 'Lista completa per eventi all’aperto di massa',
    introTitle: 'Perché questa lista',
    intro:
      'Un evento papale significa 6-12 ore all’aperto, code, caldo e folla. Lista basata sulle esperienze reali dei pellegrini della GMG Madrid 2011 e della visita di Benedetto XVI a Barcellona 2010.',
    priorityLabels: { imprescindible: 'Essenziale', recomendado: 'Consigliato', opcional: 'Opzionale' },
    seeOnAmazon: 'Vedi opzioni su Amazon →',
    disclaimerLead:
      'Link di affiliazione Amazon. Se acquisti potremmo ricevere una piccola commissione senza costi per te.',
    tipsTitle: 'Consigli pratici',
    tips: [
      'Abbigliamento comodo, traspirante, maniche lunghe leggere.',
      'Scarpe rodate: mai scarpe nuove il giorno dell’evento.',
      'Cibo leggero: panini, frutta, barrette.',
      'Salva foto dei documenti sul cloud.',
      'Mappe offline scaricate prima dell’evento.',
      'Punto d’incontro fisso col tuo gruppo.',
    ],
    priceLabel: 'Prezzo ind.',
  },
  fr: {
    breadcrumb: 'Que emporter',
    title: 'Kit du pèlerin: que emporter à la visite du Pape',
    subtitle: 'Liste complète pour événements extérieurs massifs',
    introTitle: 'Pourquoi cette liste',
    intro:
      'Un événement papal signifie 6-12 heures en extérieur, files d’attente, chaleur et foule. Liste basée sur les expériences de pèlerins aux JMJ Madrid 2011 et à la visite de Benoît XVI à Barcelone 2010.',
    priorityLabels: { imprescindible: 'Essentiel', recomendado: 'Recommandé', opcional: 'Optionnel' },
    seeOnAmazon: 'Voir options sur Amazon →',
    disclaimerLead:
      'Liens d’affiliation Amazon. Petite commission sans surcoût pour vous si vous achetez.',
    tipsTitle: 'Conseils pratiques',
    tips: [
      'Vêtements confortables, respirants, manches longues légères.',
      'Chaussures rodées: jamais de baskets neuves le jour J.',
      'Nourriture légère: sandwichs, fruits, barres.',
      'Sauvegardez les photos de vos documents dans le cloud.',
      'Cartes hors ligne téléchargées avant l’événement.',
      'Point de rendez-vous fixe avec votre groupe.',
    ],
    priceLabel: 'Prix ind.',
  },
  de: {
    breadcrumb: 'Was mitnehmen',
    title: 'Pilger-Kit: was zur Papstvisite mitnehmen',
    subtitle: 'Vollständige Checkliste für Massen-Outdoor-Veranstaltungen',
    introTitle: 'Warum diese Liste',
    intro:
      'Eine Papstveranstaltung bedeutet 6-12 Stunden im Freien, Schlangen, Hitze und Menschenmassen. Liste basiert auf realen Pilgererfahrungen aus WJT Madrid 2011 und Barcelona 2010.',
    priorityLabels: { imprescindible: 'Essentiell', recomendado: 'Empfohlen', opcional: 'Optional' },
    seeOnAmazon: 'Optionen auf Amazon ansehen →',
    disclaimerLead:
      'Amazon-Affiliate-Links. Kleine Provision ohne Mehrkosten für dich.',
    tipsTitle: 'Praktische Tipps',
    tips: [
      'Bequeme, atmungsaktive Kleidung mit leichten langen Ärmeln.',
      'Eingelaufene Schuhe: niemals neue Turnschuhe am Event-Tag.',
      'Leichte Nahrung: Sandwiches, Obst, Riegel.',
      'Speichere Fotos deiner Dokumente in der Cloud.',
      'Offline-Karten vorher herunterladen.',
      'Fester Treffpunkt mit deiner Gruppe.',
    ],
    priceLabel: 'Preis ca.',
  },
  pt: {
    breadcrumb: 'O que levar',
    title: 'Kit do peregrino: o que levar à visita do Papa',
    subtitle: 'Lista completa para eventos multitudinários ao ar livre',
    introTitle: 'Porquê esta lista',
    intro:
      'Um evento papal significa 6-12 horas ao ar livre, filas, calor e multidões. Lista baseada em experiências reais de peregrinos da JMJ Madrid 2011 e da visita de Bento XVI a Barcelona 2010.',
    priorityLabels: { imprescindible: 'Essencial', recomendado: 'Recomendado', opcional: 'Opcional' },
    seeOnAmazon: 'Ver opções na Amazon →',
    disclaimerLead:
      'Links de afiliação Amazon. Pequena comissão sem custo adicional para si.',
    tipsTitle: 'Conselhos práticos',
    tips: [
      'Roupa confortável, respirável, manga comprida leve.',
      'Calçado já usado: nunca ténis novos no dia.',
      'Comida leve: sandes, fruta, barras.',
      'Guarda fotos dos documentos na nuvem.',
      'Mapas offline descarregados antes.',
      'Ponto de encontro fixo com o teu grupo.',
    ],
    priceLabel: 'Preço ind.',
  },
  ca: {
    breadcrumb: 'Què portar',
    title: 'Kit del pelegrí: què portar a la visita del Papa',
    subtitle: 'Llista completa per a esdeveniments multitudinaris a l’aire lliure',
    introTitle: 'Per què aquesta llista',
    intro:
      'Un acte papal vol dir 6-12 hores a l’aire lliure, cues, calor i multituds. Llista basada en experiències reals de pelegrins de la JMJ Madrid 2011 i de la visita de Benet XVI a Barcelona 2010.',
    priorityLabels: { imprescindible: 'Imprescindible', recomendado: 'Recomanat', opcional: 'Opcional' },
    seeOnAmazon: 'Veure opcions a Amazon →',
    disclaimerLead:
      'Enllaços d’afiliació d’Amazon. Petita comissió sense cost addicional per a tu.',
    tipsTitle: 'Consells pràctics',
    tips: [
      'Roba còmoda, transpirable, màniga llarga lleugera.',
      'Calçat provat: mai sabatilles noves el dia.',
      'Menjar lleuger: entrepans, fruita, barretes.',
      'Desa fotos dels documents al núvol.',
      'Mapes offline descarregats abans.',
      'Punt de trobada fix amb el teu grup.',
    ],
    priceLabel: 'Preu aprox.',
  },
  gl: {
    breadcrumb: 'Que levar',
    title: 'Kit do peregrino: que levar á visita do Papa',
    subtitle: 'Lista completa para eventos multitudinarios ao aire libre',
    introTitle: 'Por que esta lista',
    intro:
      'Un acto papal significa 6-12 horas ao aire libre, colas, calor e multitudes. Lista baseada en experiencias reais de peregrinos da JMX Madrid 2011 e da visita de Bieito XVI a Barcelona 2010.',
    priorityLabels: { imprescindible: 'Imprescindible', recomendado: 'Recomendado', opcional: 'Opcional' },
    seeOnAmazon: 'Ver opcións en Amazon →',
    disclaimerLead:
      'Ligazóns de afiliación de Amazon. Pequena comisión sen custo adicional para ti.',
    tipsTitle: 'Consellos prácticos',
    tips: [
      'Roupa cómoda, transpirable, manga longa lixeira.',
      'Calzado probado: nunca zapatillas novas o día.',
      'Comida lixeira: bocadillos, froita, barriñas.',
      'Garda fotos dos documentos na nube.',
      'Mapas offline descargados antes.',
      'Punto de encontro fixo co teu grupo.',
    ],
    priceLabel: 'Prezo aprox.',
  },
  eu: {
    breadcrumb: 'Zer eraman',
    title: 'Erromesaren kit-a: zer eraman Aita Santuaren bisitaldira',
    subtitle: 'Zerrenda osoa aire zabaleko ekitaldi jendetsuetarako',
    introTitle: 'Zergatik zerrenda hau',
    intro:
      'Aita Santuaren ekitaldi batek 6-12 ordu aire zabalean esan nahi du, ilarak, beroa eta jendetza. Zerrenda erromesen benetako esperientzietan oinarritua.',
    priorityLabels: { imprescindible: 'Ezinbestekoa', recomendado: 'Gomendatua', opcional: 'Aukerakoa' },
    seeOnAmazon: 'Ikusi aukerak Amazon-en →',
    disclaimerLead:
      'Amazon-eko afiliazio-estekak. Komisio txikia kostu gehigarririk gabe zuretzat.',
    tipsTitle: 'Aholku praktikoak',
    tips: [
      'Arropa erosoa, arnasgarria, mahuka luze arina.',
      'Oinetako probatuak: sekula ez estreinatu egunean.',
      'Janari arina: ogitartekoak, fruta, barrak.',
      'Gorde dokumentuen argazkiak hodeian.',
      'Offline mapak aurretik deskargatu.',
      'Zure taldearekin bilgune finkoa.',
    ],
    priceLabel: 'Gutxi gorabeh. prezioa',
  },
}

export default function KitPeregrinoPage({ locale }: Props) {
  const t = L[locale] || L.es
  const kitPeregrino = getKitPeregrino(locale)
  const KIT_CATEGORIES = getKitCategories(locale)

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/que-llevar', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <section className="mb-8 rounded-xl border border-papal-gold/30 bg-papal-cream p-6">
          <h2 className="font-heading text-xl font-bold text-papal-navy">{t.introTitle}</h2>
          <p className="mt-2 text-papal-navy/80">{t.intro}</p>
        </section>

        <div className="mb-6 rounded-lg border border-papal-gold/30 bg-white p-4 text-sm text-papal-navy/80">
          <strong>ℹ️ </strong>{t.disclaimerLead}
        </div>

        {KIT_CATEGORIES.map((cat) => {
          const itemsInCat = kitPeregrino.filter((i) => i.category === cat.id as KitCategory)
          if (itemsInCat.length === 0) return null
          return (
            <section key={cat.id} className="mt-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-papal-navy">
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {itemsInCat.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-heading text-lg font-bold text-papal-navy">
                        {item.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${
                          item.priority === 'imprescindible'
                            ? 'bg-red-100 text-red-700'
                            : item.priority === 'recomendado'
                            ? 'bg-papal-gold/20 text-papal-gold-dark'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t.priorityLabels[item.priority]}
                      </span>
                    </div>
                    <p className="text-sm text-papal-navy/70">{item.description}</p>
                    <p className="mt-3 text-xs text-papal-navy/60">
                      {t.priceLabel}: <strong>{item.priceRange}</strong>
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-papal-gold hover:underline"
                    >
                      {t.seeOnAmazon}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )
        })}

        <section className="mt-12 rounded-xl bg-papal-navy p-6 text-white">
          <h2 className="font-heading text-xl font-bold">{t.tipsTitle}</h2>
          <ul className="mt-3 space-y-2 text-white/85">
            {t.tips.map((tip, i) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </section>

        <AffiliateNotice locale={locale} />
      </Container>
    </>
  )
}
