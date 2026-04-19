import Link from 'next/link'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { Locale } from '@/data/i18n/types'
import { localizePath } from '@/data/i18n/routes'

interface Props {
  locale: Locale
}

interface ImageCredit {
  file: string
  title: string
  author: string
  source: string
  sourceUrl: string
  license: string
  licenseUrl: string
  modifications?: string
}

/**
 * Atribuciones de imágenes, fuentes de datos y dependencias open source
 * del sitio. Cumple con las obligaciones de attribution de Creative
 * Commons BY-SA 4.0 (arts. 3 y 4) y facilita el ejercicio de derechos
 * de autor y la verificación de licencias.
 */
const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: '/images/hero/papa-leon-xiv.webp',
    title: 'Papa León XIV — retrato oficial',
    author: 'Vatican Media / Wikimedia Commons',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pope_Leo_XIV_1.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    modifications: 'Recortada y convertida a WebP.',
  },
  {
    file: '/images/cities/madrid.webp',
    title: 'Puerta de Alcalá, Madrid',
    author: 'Felipe Gabaldón',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Puerta_de_Alcal%C3%A1_(Madrid)',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    modifications: 'Conversión a WebP y ajuste de contraste.',
  },
  {
    file: '/images/cities/barcelona.webp',
    title: 'Sagrada Família, Barcelona',
    author: 'C messier',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Sagrada_Fam%C3%ADlia',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    modifications: 'Conversión a WebP.',
  },
  {
    file: '/images/cities/gran-canaria.webp',
    title: 'Catedral de Las Palmas de Gran Canaria',
    author: 'El Coleccionista de Instantes',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Catedral_de_Santa_Ana_(Las_Palmas)',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    modifications: 'Recortada y convertida a WebP.',
  },
  {
    file: '/images/cities/tenerife.webp',
    title: 'Basílica de la Candelaria, Tenerife',
    author: 'Berthold Werner',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Bas%C3%ADlica_de_Candelaria',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    modifications: 'Conversión a WebP.',
  },
]

const DATA_SOURCES = [
  { name: 'Vatican.va', url: 'https://www.vatican.va', desc: 'Portal oficial de la Santa Sede — biografía del Papa, discursos y viajes apostólicos.' },
  { name: 'Sala Stampa della Santa Sede', url: 'https://press.vatican.va', desc: 'Oficina de Prensa de la Santa Sede — boletines oficiales.' },
  { name: 'Vatican News', url: 'https://www.vaticannews.va', desc: 'Agencia de noticias oficial del Vaticano en 53 idiomas.' },
  { name: 'Conferencia Episcopal Española', url: 'https://www.conferenciaepiscopal.es', desc: 'Web oficial de la CEE — actos, programa y logística del viaje apostólico.' },
  { name: 'Con el Papa', url: 'https://conelpapa.es', desc: 'Portal oficial del viaje apostólico del Papa León XIV a España 2026.' },
  { name: 'Wikipedia', url: 'https://es.wikipedia.org', desc: 'Artículos verificados bajo licencia CC BY-SA 4.0.' },
  { name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org', desc: 'Archivo multimedia con licencias libres.' },
  { name: 'Wikidata', url: 'https://www.wikidata.org', desc: 'Base de conocimientos estructurados enlazada en JSON-LD.' },
  { name: 'Open-Meteo', url: 'https://open-meteo.com', desc: 'API de previsión meteorológica libre y gratuita.' },
  { name: 'OpenStreetMap', url: 'https://www.openstreetmap.org', desc: 'Cartografía colaborativa bajo licencia ODbL.' },
  { name: 'CartoDB Voyager', url: 'https://carto.com', desc: 'Tiles de mapa base (requiere atribución OSM).' },
  { name: 'Alfa y Omega', url: 'https://alfayomega.es', desc: 'Semanario católico (España) — agregación RSS de noticias.' },
]

const OSS_DEPENDENCIES = [
  { name: 'Next.js', version: '14.2', url: 'https://nextjs.org', license: 'MIT' },
  { name: 'React', version: '18', url: 'https://react.dev', license: 'MIT' },
  { name: 'Tailwind CSS', version: '3.4', url: 'https://tailwindcss.com', license: 'MIT' },
  { name: 'Leaflet', version: '1.9', url: 'https://leafletjs.com', license: 'BSD-2-Clause' },
  { name: 'next-sitemap', version: '4.x', url: 'https://github.com/iamvishnusankar/next-sitemap', license: 'MIT' },
  { name: 'Playfair Display', version: '—', url: 'https://fonts.google.com/specimen/Playfair+Display', license: 'OFL' },
  { name: 'Inter', version: '—', url: 'https://fonts.google.com/specimen/Inter', license: 'OFL' },
]

const L: Record<Locale, {
  breadcrumb: string
  title: string
  subtitle: string
  imgTitle: string
  imgLead: string
  dataTitle: string
  dataLead: string
  ossTitle: string
  ossLead: string
  reportTitle: string
  reportBody: string
  reportCta: string
  licenseLbl: string
  authorLbl: string
  sourceLbl: string
  modificationsLbl: string
}> = {
  es: {
    breadcrumb: 'Créditos',
    title: 'Créditos y atribuciones',
    subtitle: 'Listado completo de las fuentes, imágenes, dependencias y licencias utilizadas en este sitio.',
    imgTitle: 'Imágenes',
    imgLead: 'Todas las imágenes proceden de archivos con licencia libre (Wikimedia Commons, Unsplash) o son de elaboración propia. Cumplimos las obligaciones de atribución de Creative Commons.',
    dataTitle: 'Fuentes de datos',
    dataLead: 'Las informaciones publicadas se contrastan con las siguientes fuentes oficiales y enciclopédicas.',
    ossTitle: 'Dependencias open source',
    ossLead: 'Este sitio se construye sobre software libre y gratuito. Gracias a sus autores.',
    reportTitle: '¿Crees que falta una atribución?',
    reportBody: 'Si eres titular de una imagen o contenido publicado aquí y consideras que la atribución es incorrecta o insuficiente, escríbenos por el formulario de contacto para corregirlo de inmediato.',
    reportCta: 'Formulario de contacto',
    licenseLbl: 'Licencia',
    authorLbl: 'Autor',
    sourceLbl: 'Fuente',
    modificationsLbl: 'Modificaciones',
  },
  en: {
    breadcrumb: 'Credits',
    title: 'Credits & attributions',
    subtitle: 'Full list of sources, images, dependencies and licences used on this site.',
    imgTitle: 'Images',
    imgLead: 'All images come from freely-licensed archives (Wikimedia Commons, Unsplash) or are original. We comply with Creative Commons attribution requirements.',
    dataTitle: 'Data sources',
    dataLead: 'Information published here is cross-checked with the following official and encyclopedic sources.',
    ossTitle: 'Open source dependencies',
    ossLead: 'This site is built on free and open source software. Thanks to the authors.',
    reportTitle: 'Think an attribution is missing?',
    reportBody: 'If you are the owner of an image or content published here and you believe the attribution is incorrect or insufficient, write to us via the contact form and we will fix it immediately.',
    reportCta: 'Contact form',
    licenseLbl: 'Licence',
    authorLbl: 'Author',
    sourceLbl: 'Source',
    modificationsLbl: 'Modifications',
  },
  it: {
    breadcrumb: 'Crediti', title: 'Crediti e attribuzioni',
    subtitle: 'Elenco completo di fonti, immagini, dipendenze e licenze utilizzate su questo sito.',
    imgTitle: 'Immagini',
    imgLead: 'Tutte le immagini provengono da archivi con licenza libera (Wikimedia Commons, Unsplash) o sono originali. Rispettiamo i requisiti di attribuzione Creative Commons.',
    dataTitle: 'Fonti di dati',
    dataLead: 'Le informazioni pubblicate sono verificate con le seguenti fonti ufficiali ed enciclopediche.',
    ossTitle: 'Dipendenze open source', ossLead: 'Questo sito è costruito su software libero e gratuito. Grazie agli autori.',
    reportTitle: 'Pensi che manchi un\'attribuzione?',
    reportBody: 'Se sei il titolare di un\'immagine o contenuto e ritieni che l\'attribuzione sia errata o insufficiente, scrivici tramite il modulo di contatto per correggerlo immediatamente.',
    reportCta: 'Modulo di contatto',
    licenseLbl: 'Licenza', authorLbl: 'Autore', sourceLbl: 'Fonte', modificationsLbl: 'Modifiche',
  },
  fr: {
    breadcrumb: 'Crédits', title: 'Crédits et attributions',
    subtitle: 'Liste complète des sources, images, dépendances et licences utilisées sur ce site.',
    imgTitle: 'Images',
    imgLead: 'Toutes les images proviennent d\'archives sous licence libre (Wikimedia Commons, Unsplash) ou sont originales. Nous respectons les exigences d\'attribution Creative Commons.',
    dataTitle: 'Sources de données',
    dataLead: 'Les informations publiées ici sont croisées avec les sources officielles et encyclopédiques suivantes.',
    ossTitle: 'Dépendances open source', ossLead: 'Ce site est construit sur des logiciels libres et gratuits. Merci aux auteurs.',
    reportTitle: 'Une attribution manque ?',
    reportBody: 'Si tu es propriétaire d\'une image ou d\'un contenu publié et que tu considères l\'attribution incorrecte ou insuffisante, écris-nous via le formulaire de contact pour la corriger immédiatement.',
    reportCta: 'Formulaire de contact',
    licenseLbl: 'Licence', authorLbl: 'Auteur', sourceLbl: 'Source', modificationsLbl: 'Modifications',
  },
  de: {
    breadcrumb: 'Credits', title: 'Credits & Attributionen',
    subtitle: 'Vollständige Liste der Quellen, Bilder, Abhängigkeiten und Lizenzen dieser Website.',
    imgTitle: 'Bilder',
    imgLead: 'Alle Bilder stammen aus frei lizenzierten Archiven (Wikimedia Commons, Unsplash) oder sind Originale. Wir erfüllen die Creative-Commons-Attributionspflichten.',
    dataTitle: 'Datenquellen',
    dataLead: 'Die hier veröffentlichten Informationen werden mit folgenden offiziellen und enzyklopädischen Quellen abgeglichen.',
    ossTitle: 'Open-Source-Abhängigkeiten', ossLead: 'Diese Website basiert auf freier Open-Source-Software. Dank an die Autoren.',
    reportTitle: 'Fehlt eine Attribution?',
    reportBody: 'Wenn du Inhaber eines hier veröffentlichten Bildes oder Inhalts bist und die Attribution für unzureichend hältst, schreib uns über das Kontaktformular — wir korrigieren es sofort.',
    reportCta: 'Kontaktformular',
    licenseLbl: 'Lizenz', authorLbl: 'Autor', sourceLbl: 'Quelle', modificationsLbl: 'Änderungen',
  },
  pt: {
    breadcrumb: 'Créditos', title: 'Créditos e atribuições',
    subtitle: 'Lista completa das fontes, imagens, dependências e licenças utilizadas neste site.',
    imgTitle: 'Imagens',
    imgLead: 'Todas as imagens provêm de arquivos com licença livre (Wikimedia Commons, Unsplash) ou são originais. Cumprimos os requisitos de atribuição Creative Commons.',
    dataTitle: 'Fontes de dados',
    dataLead: 'As informações publicadas aqui são contrastadas com as seguintes fontes oficiais e enciclopédicas.',
    ossTitle: 'Dependências open source', ossLead: 'Este site é construído sobre software livre e gratuito. Obrigado aos autores.',
    reportTitle: 'Achas que falta uma atribuição?',
    reportBody: 'Se és titular de uma imagem ou conteúdo aqui publicado e consideras que a atribuição está incorreta ou é insuficiente, escreve-nos pelo formulário de contacto para corrigirmos imediatamente.',
    reportCta: 'Formulário de contacto',
    licenseLbl: 'Licença', authorLbl: 'Autor', sourceLbl: 'Fonte', modificationsLbl: 'Modificações',
  },
  ca: {
    breadcrumb: 'Crèdits', title: 'Crèdits i atribucions',
    subtitle: 'Llista completa de fonts, imatges, dependències i llicències utilitzades en aquest lloc.',
    imgTitle: 'Imatges',
    imgLead: 'Totes les imatges provenen d\'arxius amb llicència lliure (Wikimedia Commons, Unsplash) o són originals. Complim els requisits d\'atribució Creative Commons.',
    dataTitle: 'Fonts de dades',
    dataLead: 'Les informacions publicades aquí es contrasten amb les següents fonts oficials i enciclopèdiques.',
    ossTitle: 'Dependències open source', ossLead: 'Aquest lloc es construeix sobre programari lliure i gratuït. Gràcies als autors.',
    reportTitle: 'Creus que falta una atribució?',
    reportBody: 'Si ets titular d\'una imatge o contingut publicat aquí i consideres que l\'atribució és incorrecta o insuficient, escriu-nos pel formulari de contacte i ho corregirem de seguida.',
    reportCta: 'Formulari de contacte',
    licenseLbl: 'Llicència', authorLbl: 'Autor', sourceLbl: 'Font', modificationsLbl: 'Modificacions',
  },
  gl: {
    breadcrumb: 'Créditos', title: 'Créditos e atribucións',
    subtitle: 'Lista completa das fontes, imaxes, dependencias e licenzas utilizadas neste sitio.',
    imgTitle: 'Imaxes',
    imgLead: 'Todas as imaxes proveñen de arquivos con licenza libre (Wikimedia Commons, Unsplash) ou son orixinais. Cumprimos os requisitos de atribución Creative Commons.',
    dataTitle: 'Fontes de datos',
    dataLead: 'A información publicada aquí contrástase coas seguintes fontes oficiais e enciclopédicas.',
    ossTitle: 'Dependencias open source', ossLead: 'Este sitio constrúese sobre software libre e gratuíto. Grazas aos autores.',
    reportTitle: 'Pensas que falta unha atribución?',
    reportBody: 'Se es titular dunha imaxe ou contido publicado aquí e pensas que a atribución é incorrecta ou insuficiente, escríbenos polo formulario de contacto para corrixilo inmediatamente.',
    reportCta: 'Formulario de contacto',
    licenseLbl: 'Licenza', authorLbl: 'Autor', sourceLbl: 'Fonte', modificationsLbl: 'Modificacións',
  },
  eu: {
    breadcrumb: 'Kredituak', title: 'Kredituak eta aitorpenak',
    subtitle: 'Webgune honetan erabilitako iturri, irudi, mendekotasun eta lizentzien zerrenda osoa.',
    imgTitle: 'Irudiak',
    imgLead: 'Irudi guztiak lizentzia libreko artxiboetatik datoz (Wikimedia Commons, Unsplash) edo originalak dira. Creative Commons aitorpen-betebeharrak betetzen ditugu.',
    dataTitle: 'Datu-iturriak',
    dataLead: 'Hemen argitaratutako informazioa ondoko iturri ofizial eta entziklopediko hauekin egiaztatzen da.',
    ossTitle: 'Kode irekiko mendekotasunak', ossLead: 'Webgune hau software libre eta doakoaren gainean eraikia dago. Eskerrak egileei.',
    reportTitle: 'Aitorpenen bat falta dela uste duzu?',
    reportBody: 'Hemen argitaratutako irudi edo eduki baten titularra bazara eta aitorpena okerra edo nahikoa ez dela uste baduzu, idatz iezaguzu kontaktu-formularioaren bidez berehala zuzentzeko.',
    reportCta: 'Kontaktu-formularioa',
    licenseLbl: 'Lizentzia', authorLbl: 'Egilea', sourceLbl: 'Iturria', modificationsLbl: 'Aldaketak',
  },
} as const satisfies Partial<Record<Locale, any>> as any

export default function CreditosPage({ locale }: Props) {
  const t = { ...L.es, ...((L as any)[locale] || {}) } as typeof L.es

  return (
    <>
      <section className="gradient-navy">
        <Container className="py-12">
          <Breadcrumbs items={[{ name: t.breadcrumb, href: localizePath('/creditos', locale) }]} />
          <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-10 text-papal-navy/85">

          {/* Imágenes */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.imgTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.imgLead}</p>
            <div className="mt-4 space-y-4">
              {IMAGE_CREDITS.map((img) => (
                <article
                  key={img.file}
                  className="rounded-xl border border-papal-gold/20 bg-white p-4 text-sm shadow-sm"
                >
                  <p className="font-heading font-bold text-papal-navy">{img.title}</p>
                  <p className="mt-1 text-xs text-papal-navy/50 font-mono">{img.file}</p>
                  <dl className="mt-2 grid gap-1 text-xs sm:grid-cols-2">
                    <div>
                      <dt className="inline font-semibold">{t.authorLbl}: </dt>
                      <dd className="inline">{img.author}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">{t.sourceLbl}: </dt>
                      <dd className="inline">
                        <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-papal-gold-dark hover:underline break-all">
                          {img.source}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">{t.licenseLbl}: </dt>
                      <dd className="inline">
                        <a href={img.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-papal-gold-dark hover:underline">
                          {img.license}
                        </a>
                      </dd>
                    </div>
                    {img.modifications && (
                      <div>
                        <dt className="inline font-semibold">{t.modificationsLbl}: </dt>
                        <dd className="inline">{img.modifications}</dd>
                      </div>
                    )}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          {/* Fuentes de datos */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.dataTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.dataLead}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {DATA_SOURCES.map((s) => (
                <li key={s.name} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-papal-navy hover:text-papal-gold-dark"
                  >
                    {s.name} →
                  </a>
                  <p className="mt-0.5 text-xs text-papal-navy/70">{s.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* OSS */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-papal-navy">{t.ossTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed">{t.ossLead}</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead className="bg-papal-cream text-left text-papal-navy">
                  <tr>
                    <th className="border border-papal-gold/20 p-2">Software</th>
                    <th className="border border-papal-gold/20 p-2">{t.licenseLbl}</th>
                    <th className="border border-papal-gold/20 p-2">URL</th>
                  </tr>
                </thead>
                <tbody>
                  {OSS_DEPENDENCIES.map((d) => (
                    <tr key={d.name}>
                      <td className="border border-papal-gold/20 p-2 font-semibold">{d.name}</td>
                      <td className="border border-papal-gold/20 p-2">{d.license}</td>
                      <td className="border border-papal-gold/20 p-2">
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-papal-gold-dark hover:underline break-all"
                        >
                          {d.url.replace(/^https?:\/\//, '')}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Reportar */}
          <section className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="font-heading text-xl font-bold text-papal-navy">{t.reportTitle}</h2>
            <p className="mt-2 text-sm">{t.reportBody}</p>
            <Link
              href={localizePath('/contacto', locale)}
              className="mt-3 inline-block rounded-lg bg-papal-gold px-4 py-2 text-sm font-bold text-papal-navy hover:bg-papal-gold-light"
            >
              ✉️ {t.reportCta}
            </Link>
          </section>
        </div>
      </Container>
    </>
  )
}
