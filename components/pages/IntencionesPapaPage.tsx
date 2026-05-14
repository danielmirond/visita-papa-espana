import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props {
  locale: Locale
}

type MonthIntention = {
  month: string
  topic: string
  prayer: string
}
type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  intro: string
  whatTitle: string
  whatBody: string
  intentionsTitle: string
  intentions: MonthIntention[]
  howToPrayTitle: string
  howToPrayBody: string
  sourceTitle: string
  sourceBody: string
  relatedTitle: string
  relatedLinks: { href: string; text: string }[]
}

// Datos: Red Mundial de Oración del Papa (Apostolado de la Oración).
// Fuente oficial: popesprayer.va · publicación oficial Vaticano dic 2025.
const ES_INTENTIONS: MonthIntention[] = [
  { month: 'Enero', topic: 'Por la oración con la Palabra de Dios', prayer: 'Oremos para que la oración con la Palabra de Dios sea alimento en nuestras vidas y fuente de esperanza en nuestras comunidades, ayudándonos a construir una Iglesia más fraterna y misionera.' },
  { month: 'Febrero', topic: 'Por los niños con enfermedades incurables', prayer: 'Oremos para que los niños que padecen enfermedades incurables y sus familias reciban la atención médica y el apoyo necesario, sin perder nunca la fuerza y la esperanza.' },
  { month: 'Marzo', topic: 'Por el desarme y la paz', prayer: 'Oremos para que las Naciones procedan a un desarme efectivo, particularmente el desarme nuclear, y los líderes mundiales elijan el camino del diálogo y de la diplomacia en vez de la violencia.' },
  { month: 'Abril', topic: 'Por los sacerdotes en crisis vocacional', prayer: 'Oremos por los sacerdotes que atraviesan momentos de crisis vocacional, para que encuentren acompañamiento fraterno y discernimiento espiritual.' },
  { month: 'Mayo', topic: 'Por una alimentación para todos', prayer: 'Oremos para que nadie quede excluido de la mesa común y para que, en un mundo donde sobra comida, no falte el pan a quien lo necesita.' },
  { month: 'Junio', topic: 'Por el deporte como camino de paz', prayer: 'Oremos para que el deporte sea instrumento de paz, encuentro y diálogo entre culturas, y promueva valores de respeto, solidaridad y crecimiento personal.' },
  { month: 'Julio', topic: 'Por el respeto de la vida humana', prayer: 'Oremos por el respeto y la protección de la vida humana en todas sus etapas, reconociéndola como don de Dios.' },
  { month: 'Agosto', topic: 'Por la evangelización en la ciudad', prayer: 'Oremos para que, en las grandes ciudades, a menudo marcadas por el anonimato y la soledad, encontremos nuevas formas de anunciar el Evangelio, descubriendo caminos creativos para construir comunidad.' },
  { month: 'Septiembre', topic: 'Por el cuidado del agua', prayer: 'Oremos por una gestión justa y sostenible del agua, recurso vital, para que todos tengan acceso equitativo a ella.' },
  { month: 'Octubre', topic: 'Por la pastoral de la salud mental', prayer: 'Oremos para que la pastoral de la salud mental se integre en toda la Iglesia, ayudando a superar el estigma y la discriminación hacia las personas con enfermedades mentales.' },
  { month: 'Noviembre', topic: 'Por el buen uso de la riqueza', prayer: 'Oremos por un buen uso de la riqueza para que, no cediendo a la tentación del egoísmo, esté siempre al servicio del bien común y la solidaridad con los que tienen menos.' },
  { month: 'Diciembre', topic: 'Por las familias monoparentales', prayer: 'Oremos por las familias que experimentan la ausencia de una madre o de un padre, para que encuentren en la Iglesia apoyo y acompañamiento, y en la fe fuerza en los momentos difíciles.' },
]

const EN_INTENTIONS: MonthIntention[] = [
  { month: 'January', topic: 'For prayer with the Word of God', prayer: 'Let us pray that prayer with the Word of God may be food in our lives and a source of hope in our communities, helping us to build a more fraternal and missionary Church.' },
  { month: 'February', topic: 'For children with incurable diseases', prayer: 'Let us pray that children suffering from incurable diseases and their families may receive the medical care and support needed, never losing strength and hope.' },
  { month: 'March', topic: 'For disarmament and peace', prayer: 'Let us pray that nations may proceed with effective disarmament, particularly nuclear disarmament, and that world leaders may choose the path of dialogue and diplomacy instead of violence.' },
  { month: 'April', topic: 'For priests in vocational crisis', prayer: 'Let us pray for priests going through times of vocational crisis, that they may find fraternal accompaniment and spiritual discernment.' },
  { month: 'May', topic: 'For food for all', prayer: 'Let us pray that no one may be excluded from the common table, and that in a world where food is wasted, no one may lack bread who needs it.' },
  { month: 'June', topic: 'For sport as a path of peace', prayer: 'Let us pray that sport may be an instrument of peace, encounter and dialogue between cultures, and may promote values of respect, solidarity and personal growth.' },
  { month: 'July', topic: 'For respect for human life', prayer: 'Let us pray for the respect and protection of human life at every stage, recognising it as a gift of God.' },
  { month: 'August', topic: 'For evangelisation in the city', prayer: 'Let us pray that in large cities, often marked by anonymity and loneliness, we may find new ways of proclaiming the Gospel, discovering creative paths for building community.' },
  { month: 'September', topic: 'For the care of water', prayer: 'Let us pray for a just and sustainable management of water, a vital resource, so that everyone has equitable access to it.' },
  { month: 'October', topic: 'For mental-health pastoral care', prayer: 'Let us pray that mental-health pastoral care may be integrated throughout the Church, helping to overcome stigma and discrimination toward people with mental illness.' },
  { month: 'November', topic: 'For the right use of wealth', prayer: 'Let us pray for a right use of wealth, that it may not yield to the temptation of selfishness but be always at the service of the common good and solidarity with those who have less.' },
  { month: 'December', topic: 'For single-parent families', prayer: 'Let us pray for families that experience the absence of a mother or a father, that they may find in the Church support and accompaniment, and in faith strength in difficult times.' },
]

const IT_INTENTIONS: MonthIntention[] = [
  { month: 'Gennaio', topic: 'Per la preghiera con la Parola di Dio', prayer: 'Preghiamo perché la preghiera con la Parola di Dio sia nutrimento nella nostra vita e sorgente di speranza nelle nostre comunità, aiutandoci a costruire una Chiesa più fraterna e missionaria.' },
  { month: 'Febbraio', topic: 'Per i bambini con malattie incurabili', prayer: 'Preghiamo perché i bambini che soffrono di malattie incurabili e le loro famiglie ricevano l’assistenza medica e il sostegno necessari, senza mai perdere forza e speranza.' },
  { month: 'Marzo', topic: 'Per il disarmo e la pace', prayer: 'Preghiamo perché le Nazioni procedano a un disarmo effettivo, in particolare al disarmo nucleare, e i leader mondiali scelgano la via del dialogo e della diplomazia invece della violenza.' },
  { month: 'Aprile', topic: 'Per i sacerdoti in crisi vocazionale', prayer: 'Preghiamo per i sacerdoti che attraversano momenti di crisi vocazionale, perché trovino accompagnamento fraterno e discernimento spirituale.' },
  { month: 'Maggio', topic: 'Per un’alimentazione per tutti', prayer: 'Preghiamo perché nessuno sia escluso dalla mensa comune e perché, in un mondo dove il cibo abbonda, non manchi il pane a chi ne ha bisogno.' },
  { month: 'Giugno', topic: 'Per lo sport come via di pace', prayer: 'Preghiamo perché lo sport sia strumento di pace, incontro e dialogo tra le culture, e promuova valori di rispetto, solidarietà e crescita personale.' },
  { month: 'Luglio', topic: 'Per il rispetto della vita umana', prayer: 'Preghiamo per il rispetto e la protezione della vita umana in ogni sua fase, riconoscendola come dono di Dio.' },
  { month: 'Agosto', topic: 'Per l’evangelizzazione nella città', prayer: 'Preghiamo perché nelle grandi città, spesso segnate dall’anonimato e dalla solitudine, troviamo nuovi modi di annunciare il Vangelo, scoprendo vie creative per costruire comunità.' },
  { month: 'Settembre', topic: 'Per la cura dell’acqua', prayer: 'Preghiamo per una gestione giusta e sostenibile dell’acqua, risorsa vitale, perché tutti abbiano accesso equo ad essa.' },
  { month: 'Ottobre', topic: 'Per la pastorale della salute mentale', prayer: 'Preghiamo perché la pastorale della salute mentale si integri in tutta la Chiesa, aiutando a superare lo stigma e la discriminazione verso le persone con malattie mentali.' },
  { month: 'Novembre', topic: 'Per il buon uso della ricchezza', prayer: 'Preghiamo per un buon uso della ricchezza, perché non cedendo alla tentazione dell’egoismo, sia sempre al servizio del bene comune e della solidarietà con chi ha meno.' },
  { month: 'Dicembre', topic: 'Per le famiglie monoparentali', prayer: 'Preghiamo per le famiglie che vivono l’assenza di una madre o di un padre, perché trovino nella Chiesa sostegno e accompagnamento e nella fede forza nei momenti difficili.' },
]

const FR_INTENTIONS: MonthIntention[] = [
  { month: 'Janvier', topic: 'Pour la prière avec la Parole de Dieu', prayer: 'Prions pour que la prière avec la Parole de Dieu soit nourriture dans nos vies et source d’espérance dans nos communautés, nous aidant à bâtir une Église plus fraternelle et missionnaire.' },
  { month: 'Février', topic: 'Pour les enfants atteints de maladies incurables', prayer: 'Prions pour que les enfants atteints de maladies incurables et leurs familles reçoivent les soins médicaux et le soutien nécessaires, sans jamais perdre force et espérance.' },
  { month: 'Mars', topic: 'Pour le désarmement et la paix', prayer: 'Prions pour que les nations procèdent à un désarmement effectif, en particulier au désarmement nucléaire, et que les dirigeants mondiaux choisissent la voie du dialogue et de la diplomatie au lieu de la violence.' },
  { month: 'Avril', topic: 'Pour les prêtres en crise vocationnelle', prayer: 'Prions pour les prêtres qui traversent des moments de crise vocationnelle, afin qu’ils trouvent un accompagnement fraternel et un discernement spirituel.' },
  { month: 'Mai', topic: 'Pour une alimentation pour tous', prayer: 'Prions pour que personne ne soit exclu de la table commune, et que, dans un monde où la nourriture abonde, ne manque pas le pain à ceux qui en ont besoin.' },
  { month: 'Juin', topic: 'Pour le sport comme chemin de paix', prayer: 'Prions pour que le sport soit instrument de paix, rencontre et dialogue entre les cultures, et qu’il promeuve les valeurs de respect, de solidarité et de croissance personnelle.' },
  { month: 'Juillet', topic: 'Pour le respect de la vie humaine', prayer: 'Prions pour le respect et la protection de la vie humaine à toutes ses étapes, la reconnaissant comme un don de Dieu.' },
  { month: 'Août', topic: 'Pour l’évangélisation dans la ville', prayer: 'Prions pour que, dans les grandes villes souvent marquées par l’anonymat et la solitude, nous trouvions de nouvelles façons d’annoncer l’Évangile, découvrant des chemins créatifs pour construire la communauté.' },
  { month: 'Septembre', topic: 'Pour le soin de l’eau', prayer: 'Prions pour une gestion juste et durable de l’eau, ressource vitale, afin que tous y aient accès équitablement.' },
  { month: 'Octobre', topic: 'Pour la pastorale de la santé mentale', prayer: 'Prions pour que la pastorale de la santé mentale s’intègre dans toute l’Église, aidant à surmonter la stigmatisation et la discrimination envers les personnes atteintes de maladies mentales.' },
  { month: 'Novembre', topic: 'Pour le bon usage de la richesse', prayer: 'Prions pour un bon usage de la richesse, qu’elle ne cède pas à la tentation de l’égoïsme mais soit toujours au service du bien commun et de la solidarité avec ceux qui ont moins.' },
  { month: 'Décembre', topic: 'Pour les familles monoparentales', prayer: 'Prions pour les familles qui vivent l’absence d’une mère ou d’un père, afin qu’elles trouvent dans l’Église soutien et accompagnement, et dans la foi force dans les moments difficiles.' },
]

const DE_INTENTIONS: MonthIntention[] = [
  { month: 'Januar', topic: 'Für das Gebet mit dem Wort Gottes', prayer: 'Beten wir, dass das Gebet mit dem Wort Gottes Nahrung für unser Leben und Quelle der Hoffnung in unseren Gemeinschaften sei und uns helfe, eine geschwisterlichere und missionarischere Kirche zu bauen.' },
  { month: 'Februar', topic: 'Für Kinder mit unheilbaren Krankheiten', prayer: 'Beten wir, dass Kinder, die an unheilbaren Krankheiten leiden, und ihre Familien die nötige medizinische Versorgung und Unterstützung erhalten, ohne je Kraft und Hoffnung zu verlieren.' },
  { month: 'März', topic: 'Für Abrüstung und Frieden', prayer: 'Beten wir, dass die Nationen eine wirksame Abrüstung, insbesondere die nukleare Abrüstung, betreiben und die Weltführer den Weg des Dialogs und der Diplomatie statt der Gewalt wählen.' },
  { month: 'April', topic: 'Für Priester in Berufungskrise', prayer: 'Beten wir für Priester, die Zeiten der Berufungskrise durchleben, dass sie geschwisterliche Begleitung und geistliche Unterscheidung finden.' },
  { month: 'Mai', topic: 'Für Nahrung für alle', prayer: 'Beten wir, dass niemand von der gemeinsamen Tafel ausgeschlossen werde und dass in einer Welt, in der Lebensmittel im Überfluss vorhanden sind, niemandem das Brot fehle, der es braucht.' },
  { month: 'Juni', topic: 'Für den Sport als Weg des Friedens', prayer: 'Beten wir, dass der Sport ein Werkzeug des Friedens, der Begegnung und des Dialogs zwischen Kulturen sei und Werte wie Respekt, Solidarität und persönliches Wachstum fördere.' },
  { month: 'Juli', topic: 'Für die Achtung des menschlichen Lebens', prayer: 'Beten wir für die Achtung und den Schutz des menschlichen Lebens in allen seinen Phasen, in der Erkenntnis, dass es Geschenk Gottes ist.' },
  { month: 'August', topic: 'Für die Evangelisierung in der Stadt', prayer: 'Beten wir, dass wir in den großen Städten, die oft von Anonymität und Einsamkeit geprägt sind, neue Wege der Verkündigung des Evangeliums finden und kreative Wege zum Aufbau von Gemeinschaft entdecken.' },
  { month: 'September', topic: 'Für die Sorge um das Wasser', prayer: 'Beten wir für eine gerechte und nachhaltige Bewirtschaftung des Wassers, einer lebenswichtigen Ressource, damit alle gleichberechtigt Zugang dazu haben.' },
  { month: 'Oktober', topic: 'Für die Seelsorge der psychischen Gesundheit', prayer: 'Beten wir, dass die Seelsorge der psychischen Gesundheit in der gesamten Kirche integriert werde und helfe, Stigma und Diskriminierung gegenüber psychisch Kranken zu überwinden.' },
  { month: 'November', topic: 'Für den guten Gebrauch des Reichtums', prayer: 'Beten wir um einen guten Gebrauch des Reichtums, dass er nicht der Versuchung des Egoismus erliege, sondern stets dem Gemeinwohl und der Solidarität mit den Geringeren diene.' },
  { month: 'Dezember', topic: 'Für Alleinerziehende-Familien', prayer: 'Beten wir für die Familien, die die Abwesenheit einer Mutter oder eines Vaters erleben, dass sie in der Kirche Unterstützung und Begleitung und im Glauben Kraft in schweren Zeiten finden.' },
]

const PT_INTENTIONS: MonthIntention[] = [
  { month: 'Janeiro', topic: 'Pela oração com a Palavra de Deus', prayer: 'Rezemos para que a oração com a Palavra de Deus seja alimento nas nossas vidas e fonte de esperança nas nossas comunidades, ajudando-nos a construir uma Igreja mais fraterna e missionária.' },
  { month: 'Fevereiro', topic: 'Pelas crianças com doenças incuráveis', prayer: 'Rezemos para que as crianças que sofrem doenças incuráveis e as suas famílias recebam o atendimento médico e o apoio necessários, sem nunca perder a força e a esperança.' },
  { month: 'Março', topic: 'Pelo desarmamento e a paz', prayer: 'Rezemos para que as nações procedam a um desarmamento efetivo, em particular o desarmamento nuclear, e os líderes mundiais escolham o caminho do diálogo e da diplomacia em vez da violência.' },
  { month: 'Abril', topic: 'Pelos sacerdotes em crise vocacional', prayer: 'Rezemos pelos sacerdotes que atravessam momentos de crise vocacional, para que encontrem acompanhamento fraterno e discernimento espiritual.' },
  { month: 'Maio', topic: 'Por uma alimentação para todos', prayer: 'Rezemos para que ninguém fique excluído da mesa comum e para que, num mundo onde a comida abunda, não falte o pão a quem precisa.' },
  { month: 'Junho', topic: 'Pelo desporto como caminho de paz', prayer: 'Rezemos para que o desporto seja instrumento de paz, encontro e diálogo entre culturas, e promova valores de respeito, solidariedade e crescimento pessoal.' },
  { month: 'Julho', topic: 'Pelo respeito da vida humana', prayer: 'Rezemos pelo respeito e a proteção da vida humana em todas as suas etapas, reconhecendo-a como dom de Deus.' },
  { month: 'Agosto', topic: 'Pela evangelização na cidade', prayer: 'Rezemos para que, nas grandes cidades, frequentemente marcadas pelo anonimato e pela solidão, encontremos novas formas de anunciar o Evangelho, descobrindo caminhos criativos para construir comunidade.' },
  { month: 'Setembro', topic: 'Pelo cuidado da água', prayer: 'Rezemos por uma gestão justa e sustentável da água, recurso vital, para que todos tenham acesso equitativo a ela.' },
  { month: 'Outubro', topic: 'Pela pastoral da saúde mental', prayer: 'Rezemos para que a pastoral da saúde mental se integre em toda a Igreja, ajudando a superar o estigma e a discriminação para com as pessoas com doenças mentais.' },
  { month: 'Novembro', topic: 'Pelo bom uso da riqueza', prayer: 'Rezemos por um bom uso da riqueza para que, não cedendo à tentação do egoísmo, esteja sempre ao serviço do bem comum e da solidariedade com quem tem menos.' },
  { month: 'Dezembro', topic: 'Pelas famílias monoparentais', prayer: 'Rezemos pelas famílias que experimentam a ausência de uma mãe ou de um pai, para que encontrem na Igreja apoio e acompanhamento, e na fé força nos momentos difíceis.' },
]

const CA_INTENTIONS: MonthIntention[] = [
  { month: 'Gener', topic: 'Per la pregària amb la Paraula de Déu', prayer: 'Preguem perquè la pregària amb la Paraula de Déu sigui aliment en les nostres vides i font d’esperança en les nostres comunitats, ajudant-nos a construir una Església més fraterna i missionera.' },
  { month: 'Febrer', topic: 'Pels infants amb malalties incurables', prayer: 'Preguem perquè els infants que pateixen malalties incurables i les seves famílies rebin l’atenció mèdica i el suport necessaris, sense perdre mai la força i l’esperança.' },
  { month: 'Març', topic: 'Pel desarmament i la pau', prayer: 'Preguem perquè les nacions procedeixin a un desarmament efectiu, particularment el desarmament nuclear, i els líders mundials triïn el camí del diàleg i la diplomàcia en lloc de la violència.' },
  { month: 'Abril', topic: 'Pels sacerdots en crisi vocacional', prayer: 'Preguem pels sacerdots que travessen moments de crisi vocacional, perquè trobin acompanyament fratern i discerniment espiritual.' },
  { month: 'Maig', topic: 'Per una alimentació per a tothom', prayer: 'Preguem perquè ningú no quedi exclòs de la taula comuna i perquè, en un món on el menjar abunda, no falti el pa a qui en necessita.' },
  { month: 'Juny', topic: 'Per l’esport com a camí de pau', prayer: 'Preguem perquè l’esport sigui instrument de pau, trobada i diàleg entre cultures, i promogui valors de respecte, solidaritat i creixement personal.' },
  { month: 'Juliol', topic: 'Pel respecte de la vida humana', prayer: 'Preguem pel respecte i la protecció de la vida humana en totes les seves etapes, reconeixent-la com a do de Déu.' },
  { month: 'Agost', topic: 'Per l’evangelització a la ciutat', prayer: 'Preguem perquè, a les grans ciutats sovint marcades per l’anonimat i la solitud, trobem noves formes d’anunciar l’Evangeli, descobrint camins creatius per construir comunitat.' },
  { month: 'Setembre', topic: 'Per la cura de l’aigua', prayer: 'Preguem per una gestió justa i sostenible de l’aigua, recurs vital, perquè tothom hi tingui accés equitatiu.' },
  { month: 'Octubre', topic: 'Per la pastoral de la salut mental', prayer: 'Preguem perquè la pastoral de la salut mental s’integri a tota l’Església, ajudant a superar l’estigma i la discriminació envers les persones amb malalties mentals.' },
  { month: 'Novembre', topic: 'Pel bon ús de la riquesa', prayer: 'Preguem per un bon ús de la riquesa perquè, no cedint a la temptació de l’egoisme, sigui sempre al servei del bé comú i de la solidaritat amb els qui tenen menys.' },
  { month: 'Desembre', topic: 'Per les famílies monoparentals', prayer: 'Preguem per les famílies que viuen l’absència d’una mare o d’un pare, perquè trobin en l’Església suport i acompanyament, i en la fe força en els moments difícils.' },
]

const GL_INTENTIONS: MonthIntention[] = [
  { month: 'Xaneiro', topic: 'Pola oración coa Palabra de Deus', prayer: 'Recemos para que a oración coa Palabra de Deus sexa alimento nas nosas vidas e fonte de esperanza nas nosas comunidades, axudándonos a construír unha Igrexa máis fraterna e misioneira.' },
  { month: 'Febreiro', topic: 'Polos nenos con enfermidades incurables', prayer: 'Recemos para que os nenos que padecen enfermidades incurables e as súas familias reciban a atención médica e o apoio necesarios, sen perder nunca a forza e a esperanza.' },
  { month: 'Marzo', topic: 'Polo desarmamento e a paz', prayer: 'Recemos para que as nacións procedan a un desarmamento efectivo, particularmente o desarmamento nuclear, e os líderes mundiais escollan o camiño do diálogo e da diplomacia en vez da violencia.' },
  { month: 'Abril', topic: 'Polos sacerdotes en crise vocacional', prayer: 'Recemos polos sacerdotes que atravesan momentos de crise vocacional, para que atopen acompañamento fraterno e discernimento espiritual.' },
  { month: 'Maio', topic: 'Por unha alimentación para todos', prayer: 'Recemos para que ninguén quede excluído da mesa común e para que, nun mundo onde a comida abunda, non falte o pan a quen o necesita.' },
  { month: 'Xuño', topic: 'Polo deporte como camiño de paz', prayer: 'Recemos para que o deporte sexa instrumento de paz, encontro e diálogo entre culturas, e promova valores de respecto, solidariedade e crecemento persoal.' },
  { month: 'Xullo', topic: 'Polo respecto da vida humana', prayer: 'Recemos polo respecto e a protección da vida humana en todas as súas etapas, recoñecéndoa como don de Deus.' },
  { month: 'Agosto', topic: 'Pola evanxelización na cidade', prayer: 'Recemos para que, nas grandes cidades, a miúdo marcadas polo anonimato e a soidade, atopemos novas formas de anunciar o Evanxeo, descubrindo camiños creativos para construír comunidade.' },
  { month: 'Setembro', topic: 'Polo coidado da auga', prayer: 'Recemos por unha xestión xusta e sostible da auga, recurso vital, para que todos teñan acceso equitativo a ela.' },
  { month: 'Outubro', topic: 'Pola pastoral da saúde mental', prayer: 'Recemos para que a pastoral da saúde mental se integre en toda a Igrexa, axudando a superar o estigma e a discriminación cara ás persoas con enfermidades mentais.' },
  { month: 'Novembro', topic: 'Polo bo uso da riqueza', prayer: 'Recemos por un bo uso da riqueza para que, non cedendo á tentación do egoísmo, estea sempre ao servizo do ben común e da solidariedade cos que teñen menos.' },
  { month: 'Decembro', topic: 'Polas familias monoparentais', prayer: 'Recemos polas familias que experimentan a ausencia dunha nai ou dun pai, para que atopen na Igrexa apoio e acompañamento, e na fe forza nos momentos difíciles.' },
]

const EU_INTENTIONS: MonthIntention[] = [
  { month: 'Urtarrila', topic: 'Jainkoaren Hitzarekin egindako otoitzaren alde', prayer: 'Otoitz egin dezagun Jainkoaren Hitzarekin egindako otoitza gure bizitzan janari eta gure komunitateetan itxaropen-iturri izan dadin, Eliza anaiagoa eta misiolariagoa eraikitzen lagunduz.' },
  { month: 'Otsaila', topic: 'Sendaezinezko gaixotasunak dituzten haurren alde', prayer: 'Otoitz egin dezagun sendaezinezko gaixotasunak pairatzen dituzten haurrek eta haien familiek behar duten arreta medikoa eta laguntza jaso ditzaten, indarra eta itxaropena inoiz galdu gabe.' },
  { month: 'Martxoa', topic: 'Armagabetzearen eta bakearen alde', prayer: 'Otoitz egin dezagun nazioek armagabetze eraginkorra egin dezaten, bereziki armagabetze nuklearra, eta munduko liderrek elkarrizketaren eta diplomaziaren bidea aukera dezaten indarkeriaren ordez.' },
  { month: 'Apirila', topic: 'Bokazio-krisian dauden apaizen alde', prayer: 'Otoitz egin dezagun bokazio-krisi uneak bizi dituzten apaizen alde, lagungarri anaikorra eta espirituzko bereizketa aurki ditzaten.' },
  { month: 'Maiatza', topic: 'Guztientzako elikadura baten alde', prayer: 'Otoitz egin dezagun inor ez dadin geratu mahai komunetik baztertua, eta janaria gehiegi dagoen mundu batean, behar duenari ez dakion ogia falta.' },
  { month: 'Ekaina', topic: 'Kirola bake-bide gisa', prayer: 'Otoitz egin dezagun kirola kulturen arteko bakerako, topaketarako eta elkarrizketarako tresna izan dadin, eta errespetua, elkartasuna eta hazkunde pertsonala sustatu ditzan.' },
  { month: 'Uztaila', topic: 'Giza bizitzaren errespetuaren alde', prayer: 'Otoitz egin dezagun giza bizitzaren errespetuaren eta babesaren alde bere etapa guztietan, Jainkoaren dohain gisa aitortuz.' },
  { month: 'Abuztua', topic: 'Hirian eginiko ebanjelizazioaren alde', prayer: 'Otoitz egin dezagun hiri handietan, askotan anonimotasunak eta bakardadeak markatutakoetan, Ebanjelioa iragartzeko modu berriak aurki ditzagun, komunitatea eraikitzeko bide sortzaileak ezagutuz.' },
  { month: 'Iraila', topic: 'Uraren zaintzaren alde', prayer: 'Otoitz egin dezagun uraren kudeaketa zuzen eta jasangarriaren alde, baliabide bizitzazkoa, guztiek hartara sarbide bidezkoa izan dezaten.' },
  { month: 'Urria', topic: 'Buru-osasunaren pastoralaren alde', prayer: 'Otoitz egin dezagun buru-osasunaren pastorala Eliza osoan integratu dadin, buru-gaixotasunak dituzten pertsonen aurkako estigma eta diskriminazioa gainditzen lagunduz.' },
  { month: 'Azaroa', topic: 'Aberastasunaren erabilera onaren alde', prayer: 'Otoitz egin dezagun aberastasunaren erabilera onaren alde, berekoikeriaren tentazioan erori gabe, beti egon dadin ongi komunaren zerbitzura eta gutxiago dutenekiko elkartasunaren zerbitzura.' },
  { month: 'Abendua', topic: 'Familia gurasobakarren alde', prayer: 'Otoitz egin dezagun ama edo aitaren falta bizitzen duten familien alde, Elizan laguntza eta lagungarria aurki ditzaten, eta fedean indarra une zailetan.' },
]

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Intenciones del Papa 2026',
    title: 'Intenciones de oración del Papa León XIV para 2026',
    subtitle: 'Calendario mensual oficial · Red Mundial de Oración del Papa',
    intro: 'Cada mes el Papa León XIV propone una intención de oración a toda la Iglesia, difundida por la Red Mundial de Oración del Papa (Apostolado de la Oración). El calendario completo de 2026 fue publicado por la Santa Sede en diciembre de 2025 y abarca temas como la oración con la Palabra, el desarme nuclear, los niños enfermos, la alimentación, el deporte como camino de paz, el cuidado del agua y la salud mental.',
    whatTitle: '¿Qué son las intenciones del Papa?',
    whatBody: 'Las intenciones de oración del Papa son temas concretos que el Santo Padre encomienda mensualmente a la oración universal de los fieles. Su origen se remonta a 1844, cuando el jesuita François-Xavier Gautrelet fundó el Apostolado de la Oración. Desde 2018, la Red Mundial de Oración del Papa difunde un vídeo mensual con la intención del Pontífice. Cada intención suele combinar un tema social o eclesial concreto con una llamada espiritual.',
    intentionsTitle: 'Calendario mensual 2026',
    intentions: ES_INTENTIONS,
    howToPrayTitle: 'Cómo unirse a la oración',
    howToPrayBody: 'Puedes incorporar la intención mensual del Papa a tu oración personal o comunitaria de varias formas: rezándola al comenzar la jornada, ofreciendo una Misa con esa intención, incluyéndola en la oración de los fieles parroquial, o uniéndote al "Click to Pray" oficial del Vaticano. La Red Mundial de Oración del Papa publica recursos cada mes en popesprayer.va.',
    sourceTitle: 'Fuente oficial',
    sourceBody: 'Las intenciones aquí publicadas son las difundidas por la Sala de Prensa de la Santa Sede y la Red Mundial de Oración del Papa. La fuente primaria es popesprayer.va. Cualquier matiz o redacción definitiva puede consultarse en los textos oficiales de cada mes.',
    relatedTitle: 'Páginas relacionadas',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografía del Papa León XIV' },
      { href: '/discursos', text: 'Discursos clave del Papa' },
      { href: '/oracion', text: 'Oración oficial de la visita' },
      { href: '/dilexi-te', text: 'Exhortación apostólica Dilexi Te' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pope’s 2026 Prayer Intentions',
    title: 'Pope Leo XIV’s prayer intentions for 2026',
    subtitle: 'Official monthly calendar · Pope’s Worldwide Prayer Network',
    intro: 'Every month Pope Leo XIV proposes a prayer intention for the whole Church, spread by the Pope’s Worldwide Prayer Network (Apostleship of Prayer). The complete 2026 calendar was published by the Holy See in December 2025 and covers topics such as prayer with the Word, nuclear disarmament, sick children, food for all, sport as a path of peace, the care of water and mental health.',
    whatTitle: 'What are the Pope’s intentions?',
    whatBody: 'The Pope’s prayer intentions are specific topics the Holy Father entrusts each month to the universal prayer of the faithful. Their origin dates back to 1844, when the Jesuit François-Xavier Gautrelet founded the Apostleship of Prayer. Since 2018, the Pope’s Worldwide Prayer Network has released a monthly video featuring the Pontiff’s intention. Each intention usually combines a concrete social or ecclesial theme with a spiritual call.',
    intentionsTitle: '2026 monthly calendar',
    intentions: EN_INTENTIONS,
    howToPrayTitle: 'How to join the prayer',
    howToPrayBody: 'You can incorporate the Pope’s monthly intention into your personal or community prayer in several ways: praying it at the start of the day, offering a Mass with that intention, including it in the parish prayers of the faithful, or joining the Vatican’s official "Click to Pray". The Pope’s Worldwide Prayer Network publishes monthly resources at popesprayer.va.',
    sourceTitle: 'Official source',
    sourceBody: 'The intentions published here are those issued by the Press Office of the Holy See and the Pope’s Worldwide Prayer Network. The primary source is popesprayer.va. Any definitive nuance or wording can be checked against the official monthly texts.',
    relatedTitle: 'Related pages',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biography of Pope Leo XIV' },
      { href: '/discursos', text: 'Key speeches of the Pope' },
      { href: '/oracion', text: 'Official prayer of the visit' },
      { href: '/dilexi-te', text: 'Apostolic exhortation Dilexi Te' },
    ],
  },
  it: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Intenzioni del Papa 2026',
    title: 'Intenzioni di preghiera di Papa Leone XIV per il 2026',
    subtitle: 'Calendario mensile ufficiale · Rete Mondiale di Preghiera del Papa',
    intro: 'Ogni mese Papa Leone XIV propone un’intenzione di preghiera a tutta la Chiesa, diffusa dalla Rete Mondiale di Preghiera del Papa (Apostolato della Preghiera). Il calendario completo del 2026 è stato pubblicato dalla Santa Sede nel dicembre 2025 e abbraccia temi come la preghiera con la Parola, il disarmo nucleare, i bambini malati, l’alimentazione per tutti, lo sport come via di pace, la cura dell’acqua e la salute mentale.',
    whatTitle: 'Cosa sono le intenzioni del Papa?',
    whatBody: 'Le intenzioni di preghiera del Papa sono temi concreti che il Santo Padre affida ogni mese alla preghiera universale dei fedeli. La loro origine risale al 1844, quando il gesuita François-Xavier Gautrelet fondò l’Apostolato della Preghiera. Dal 2018 la Rete Mondiale di Preghiera del Papa diffonde un video mensile con l’intenzione del Pontefice. Ogni intenzione di solito combina un tema sociale o ecclesiale concreto con una chiamata spirituale.',
    intentionsTitle: 'Calendario mensile 2026',
    intentions: IT_INTENTIONS,
    howToPrayTitle: 'Come unirsi alla preghiera',
    howToPrayBody: 'Puoi incorporare l’intenzione mensile del Papa nella tua preghiera personale o comunitaria in vari modi: pregandola all’inizio della giornata, offrendo una Messa con quell’intenzione, includendola nella preghiera dei fedeli parrocchiale, o unendoti al "Click to Pray" ufficiale del Vaticano. La Rete Mondiale di Preghiera del Papa pubblica risorse mensili su popesprayer.va.',
    sourceTitle: 'Fonte ufficiale',
    sourceBody: 'Le intenzioni qui pubblicate sono quelle diffuse dalla Sala Stampa della Santa Sede e dalla Rete Mondiale di Preghiera del Papa. La fonte primaria è popesprayer.va. Qualsiasi sfumatura o redazione definitiva può essere consultata nei testi ufficiali di ogni mese.',
    relatedTitle: 'Pagine correlate',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografia di Papa Leone XIV' },
      { href: '/discursos', text: 'Discorsi chiave del Papa' },
      { href: '/oracion', text: 'Preghiera ufficiale del viaggio' },
      { href: '/dilexi-te', text: 'Esortazione apostolica Dilexi Te' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Intentions du Pape 2026',
    title: 'Intentions de prière du Pape Léon XIV pour 2026',
    subtitle: 'Calendrier mensuel officiel · Réseau Mondial de Prière du Pape',
    intro: 'Chaque mois, le Pape Léon XIV propose une intention de prière à toute l’Église, diffusée par le Réseau Mondial de Prière du Pape (Apostolat de la Prière). Le calendrier complet de 2026 a été publié par le Saint-Siège en décembre 2025 et couvre des thèmes tels que la prière avec la Parole, le désarmement nucléaire, les enfants malades, l’alimentation pour tous, le sport comme chemin de paix, le soin de l’eau et la santé mentale.',
    whatTitle: 'Que sont les intentions du Pape ?',
    whatBody: 'Les intentions de prière du Pape sont des thèmes concrets que le Saint-Père confie chaque mois à la prière universelle des fidèles. Leur origine remonte à 1844, quand le jésuite François-Xavier Gautrelet fonda l’Apostolat de la Prière. Depuis 2018, le Réseau Mondial de Prière du Pape diffuse une vidéo mensuelle avec l’intention du Pontife. Chaque intention combine généralement un thème social ou ecclésial concret avec un appel spirituel.',
    intentionsTitle: 'Calendrier mensuel 2026',
    intentions: FR_INTENTIONS,
    howToPrayTitle: 'Comment s’unir à la prière',
    howToPrayBody: 'Vous pouvez intégrer l’intention mensuelle du Pape à votre prière personnelle ou communautaire de plusieurs façons : en la priant au début de la journée, en offrant une messe avec cette intention, en l’incluant dans la prière universelle paroissiale, ou en rejoignant le "Click to Pray" officiel du Vatican. Le Réseau Mondial de Prière du Pape publie chaque mois des ressources sur popesprayer.va.',
    sourceTitle: 'Source officielle',
    sourceBody: 'Les intentions publiées ici sont celles diffusées par la Salle de presse du Saint-Siège et le Réseau Mondial de Prière du Pape. La source primaire est popesprayer.va. Toute nuance ou rédaction définitive peut être consultée dans les textes officiels de chaque mois.',
    relatedTitle: 'Pages liées',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biographie du Pape Léon XIV' },
      { href: '/discursos', text: 'Discours clés du Pape' },
      { href: '/oracion', text: 'Prière officielle du voyage' },
      { href: '/dilexi-te', text: 'Exhortation apostolique Dilexi Te' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Gebetsanliegen des Papstes 2026',
    title: 'Gebetsanliegen von Papst Leo XIV. für 2026',
    subtitle: 'Offizieller Monatskalender · Weltweites Gebetsnetzwerk des Papstes',
    intro: 'Jeden Monat schlägt Papst Leo XIV. der ganzen Kirche ein Gebetsanliegen vor, verbreitet durch das Weltweite Gebetsnetzwerk des Papstes (Apostolat des Gebets). Der vollständige Kalender für 2026 wurde vom Heiligen Stuhl im Dezember 2025 veröffentlicht und behandelt Themen wie das Gebet mit dem Wort, nukleare Abrüstung, kranke Kinder, Nahrung für alle, Sport als Weg des Friedens, Sorge um das Wasser und psychische Gesundheit.',
    whatTitle: 'Was sind die Anliegen des Papstes?',
    whatBody: 'Die Gebetsanliegen des Papstes sind konkrete Themen, die der Heilige Vater monatlich dem universellen Gebet der Gläubigen anvertraut. Ihre Ursprünge gehen auf das Jahr 1844 zurück, als der Jesuit François-Xavier Gautrelet das Apostolat des Gebets gründete. Seit 2018 veröffentlicht das Weltweite Gebetsnetzwerk des Papstes ein monatliches Video mit dem Anliegen des Pontifex. Jedes Anliegen verbindet meist ein konkretes soziales oder kirchliches Thema mit einem geistlichen Ruf.',
    intentionsTitle: 'Monatskalender 2026',
    intentions: DE_INTENTIONS,
    howToPrayTitle: 'Wie man sich dem Gebet anschließt',
    howToPrayBody: 'Sie können das monatliche Anliegen des Papstes auf verschiedene Weise in Ihr persönliches oder gemeinschaftliches Gebet einbeziehen: indem Sie es zu Beginn des Tages beten, eine Messe mit diesem Anliegen feiern lassen, es in die Fürbitten der Pfarrei aufnehmen oder sich dem offiziellen "Click to Pray" des Vatikans anschließen. Das Weltweite Gebetsnetzwerk des Papstes veröffentlicht monatlich Materialien auf popesprayer.va.',
    sourceTitle: 'Offizielle Quelle',
    sourceBody: 'Die hier veröffentlichten Anliegen sind jene, die vom Pressebüro des Heiligen Stuhls und vom Weltweiten Gebetsnetzwerk des Papstes verbreitet werden. Die Primärquelle ist popesprayer.va. Jede Nuance oder endgültige Formulierung kann in den offiziellen Monatstexten nachgeschlagen werden.',
    relatedTitle: 'Verwandte Seiten',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografie von Papst Leo XIV.' },
      { href: '/discursos', text: 'Schlüsselansprachen des Papstes' },
      { href: '/oracion', text: 'Offizielles Gebet der Reise' },
      { href: '/dilexi-te', text: 'Apostolisches Schreiben Dilexi Te' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Intenções do Papa 2026',
    title: 'Intenções de oração do Papa Leão XIV para 2026',
    subtitle: 'Calendário mensal oficial · Rede Mundial de Oração do Papa',
    intro: 'Cada mês o Papa Leão XIV propõe uma intenção de oração a toda a Igreja, difundida pela Rede Mundial de Oração do Papa (Apostolado da Oração). O calendário completo de 2026 foi publicado pela Santa Sé em dezembro de 2025 e abrange temas como a oração com a Palavra, o desarmamento nuclear, as crianças doentes, a alimentação para todos, o desporto como caminho de paz, o cuidado da água e a saúde mental.',
    whatTitle: 'O que são as intenções do Papa?',
    whatBody: 'As intenções de oração do Papa são temas concretos que o Santo Padre confia mensalmente à oração universal dos fiéis. A sua origem remonta a 1844, quando o jesuíta François-Xavier Gautrelet fundou o Apostolado da Oração. Desde 2018, a Rede Mundial de Oração do Papa difunde um vídeo mensal com a intenção do Pontífice. Cada intenção costuma combinar um tema social ou eclesial concreto com um apelo espiritual.',
    intentionsTitle: 'Calendário mensal 2026',
    intentions: PT_INTENTIONS,
    howToPrayTitle: 'Como unir-se à oração',
    howToPrayBody: 'Pode incorporar a intenção mensal do Papa na sua oração pessoal ou comunitária de várias formas: rezando-a ao começar o dia, oferecendo uma Missa com essa intenção, incluindo-a na oração dos fiéis paroquial ou unindo-se ao "Click to Pray" oficial do Vaticano. A Rede Mundial de Oração do Papa publica recursos mensais em popesprayer.va.',
    sourceTitle: 'Fonte oficial',
    sourceBody: 'As intenções aqui publicadas são as difundidas pela Sala de Imprensa da Santa Sé e pela Rede Mundial de Oração do Papa. A fonte primária é popesprayer.va. Qualquer nuance ou redação definitiva pode ser consultada nos textos oficiais de cada mês.',
    relatedTitle: 'Páginas relacionadas',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografia do Papa Leão XIV' },
      { href: '/discursos', text: 'Discursos-chave do Papa' },
      { href: '/oracion', text: 'Oração oficial da viagem' },
      { href: '/dilexi-te', text: 'Exortação apostólica Dilexi Te' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici',
    breadcrumbCurrent: 'Intencions del Papa 2026',
    title: 'Intencions de pregària del Papa Lleó XIV per a 2026',
    subtitle: 'Calendari mensual oficial · Xarxa Mundial de Pregària del Papa',
    intro: 'Cada mes el Papa Lleó XIV proposa una intenció de pregària a tota l’Església, difosa per la Xarxa Mundial de Pregària del Papa (Apostolat de la Pregària). El calendari complet de 2026 va ser publicat per la Santa Seu el desembre de 2025 i abasta temes com la pregària amb la Paraula, el desarmament nuclear, els infants malalts, l’alimentació per a tothom, l’esport com a camí de pau, la cura de l’aigua i la salut mental.',
    whatTitle: 'Què són les intencions del Papa?',
    whatBody: 'Les intencions de pregària del Papa són temes concrets que el Sant Pare encomana mensualment a la pregària universal dels fidels. El seu origen es remunta al 1844, quan el jesuïta François-Xavier Gautrelet va fundar l’Apostolat de la Pregària. Des de 2018, la Xarxa Mundial de Pregària del Papa difon un vídeo mensual amb la intenció del Pontífex. Cada intenció sol combinar un tema social o eclesial concret amb una crida espiritual.',
    intentionsTitle: 'Calendari mensual 2026',
    intentions: CA_INTENTIONS,
    howToPrayTitle: 'Com unir-se a la pregària',
    howToPrayBody: 'Pots incorporar la intenció mensual del Papa a la teva pregària personal o comunitària de diverses maneres: pregant-la en començar la jornada, oferint una Missa amb aquesta intenció, incloent-la a la pregària dels fidels parroquial, o unint-te al "Click to Pray" oficial del Vaticà. La Xarxa Mundial de Pregària del Papa publica recursos mensuals a popesprayer.va.',
    sourceTitle: 'Font oficial',
    sourceBody: 'Les intencions publicades aquí són les difoses per la Sala de Premsa de la Santa Seu i per la Xarxa Mundial de Pregària del Papa. La font primària és popesprayer.va. Qualsevol matís o redacció definitiva es pot consultar en els textos oficials de cada mes.',
    relatedTitle: 'Pàgines relacionades',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografia del Papa Lleó XIV' },
      { href: '/discursos', text: 'Discursos clau del Papa' },
      { href: '/oracion', text: 'Pregària oficial del viatge' },
      { href: '/dilexi-te', text: 'Exhortació apostòlica Dilexi Te' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Intencións do Papa 2026',
    title: 'Intencións de oración do Papa León XIV para 2026',
    subtitle: 'Calendario mensual oficial · Rede Mundial de Oración do Papa',
    intro: 'Cada mes o Papa León XIV propón unha intención de oración a toda a Igrexa, difundida pola Rede Mundial de Oración do Papa (Apostolado da Oración). O calendario completo de 2026 foi publicado pola Santa Sede en decembro de 2025 e abrangue temas como a oración coa Palabra, o desarmamento nuclear, os nenos enfermos, a alimentación para todos, o deporte como camiño de paz, o coidado da auga e a saúde mental.',
    whatTitle: 'Que son as intencións do Papa?',
    whatBody: 'As intencións de oración do Papa son temas concretos que o Santo Padre encomenda mensualmente á oración universal dos fieis. A súa orixe remóntase a 1844, cando o xesuíta François-Xavier Gautrelet fundou o Apostolado da Oración. Desde 2018, a Rede Mundial de Oración do Papa difunde un vídeo mensual coa intención do Pontífice. Cada intención adoita combinar un tema social ou eclesial concreto cunha chamada espiritual.',
    intentionsTitle: 'Calendario mensual 2026',
    intentions: GL_INTENTIONS,
    howToPrayTitle: 'Como unirse á oración',
    howToPrayBody: 'Podes incorporar a intención mensual do Papa á túa oración persoal ou comunitaria de varias formas: rezándoa ao comezar a xornada, ofrecendo unha Misa con esa intención, incluíndoa na oración dos fieis parroquial, ou uníndote ao "Click to Pray" oficial do Vaticano. A Rede Mundial de Oración do Papa publica recursos mensuais en popesprayer.va.',
    sourceTitle: 'Fonte oficial',
    sourceBody: 'As intencións aquí publicadas son as difundidas pola Sala de Prensa da Santa Sede e pola Rede Mundial de Oración do Papa. A fonte primaria é popesprayer.va. Calquera matiz ou redacción definitiva pódese consultar nos textos oficiais de cada mes.',
    relatedTitle: 'Páxinas relacionadas',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Biografía do Papa León XIV' },
      { href: '/discursos', text: 'Discursos clave do Papa' },
      { href: '/oracion', text: 'Oración oficial da viaxe' },
      { href: '/dilexi-te', text: 'Exhortación apostólica Dilexi Te' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera',
    breadcrumbCurrent: 'Aita Santuaren 2026ko asmoak',
    title: 'Leon XIV.a Aita Santuaren 2026rako otoitz-asmoak',
    subtitle: 'Hilabeteko egutegi ofiziala · Aita Santuaren Munduko Otoitz Sarea',
    intro: 'Hilero, Leon XIV.a Aita Santuak otoitz-asmo bat proposatzen dio Eliza osoari, Aita Santuaren Munduko Otoitz Sareak (Otoitzaren Apostolutza) zabaltzen duena. 2026ko egutegi osoa Aulki Santuak argitaratu zuen 2025eko abenduan, eta gaiak hauek dira: Hitzarekin egindako otoitza, armagabetze nuklearra, haur gaixoak, guztientzako elikadura, kirola bake-bide gisa, uraren zaintza eta buru-osasuna.',
    whatTitle: 'Zer dira Aita Santuaren asmoak?',
    whatBody: 'Aita Santuaren otoitz-asmoak Aita Santuak hilero fededunen otoitz unibertsalari ematen dizkion gai zehatzak dira. Beren jatorria 1844koa da, François-Xavier Gautrelet jesuitak Otoitzaren Apostolutza sortu zuenean. 2018tik, Aita Santuaren Munduko Otoitz Sareak hileko bideo bat zabaltzen du Aita Santuaren asmoarekin. Asmo bakoitzak gizarte- edo eliza-gai zehatz bat eta deialdi espiritual bat konbinatzen ditu, normalean.',
    intentionsTitle: '2026ko hilabeteko egutegia',
    intentions: EU_INTENTIONS,
    howToPrayTitle: 'Nola elkartu otoitzari',
    howToPrayBody: 'Aita Santuaren hileko asmoa zure otoitz pertsonalean edo komunitarioan hainbat eratan sar dezakezu: eguna hasterakoan otoitz eginez, asmo horrekin Meza eskainiz, parrokiako fededunen otoitzean sartuz, edo Vatikanoaren "Click to Pray" ofizialarekin elkartuz. Aita Santuaren Munduko Otoitz Sareak hileko baliabideak argitaratzen ditu popesprayer.va helbidean.',
    sourceTitle: 'Iturri ofiziala',
    sourceBody: 'Hemen argitaratutako asmoak Aulki Santuaren Prentsa Bulegoak eta Aita Santuaren Munduko Otoitz Sareak zabaldutakoak dira. Lehen iturria popesprayer.va da. Edozein xehetasun edo behin betiko idazketa hilero argitaratutako testu ofizialetan kontsulta daiteke.',
    relatedTitle: 'Erlazionatutako orriak',
    relatedLinks: [
      { href: '/papa-leon-xiv', text: 'Leon XIV.a Aita Santuaren biografia' },
      { href: '/discursos', text: 'Aita Santuaren hitzaldi nagusiak' },
      { href: '/oracion', text: 'Bidaiaren otoitz ofiziala' },
      { href: '/dilexi-te', text: 'Dilexi Te exhortazio apostolikoa' },
    ],
  },
}

export default function IntencionesPapaPage({ locale }: Props) {
  const t = L[locale]
  const breadcrumbs = [
    { name: t.breadcrumbHome, href: localizePath('/', locale) },
    { name: t.breadcrumbCurrent, href: '#' },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="gradient-navy">
        <Container className="py-12">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
        </Container>
      </section>

      <Container className="py-10">
        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.whatTitle}</h2>
          <p>{t.whatBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.intentionsTitle}</h2>
          <ol className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
            {t.intentions.map((m) => (
              <li
                key={m.month}
                className="rounded-lg border border-papal-navy/10 bg-white p-4 shadow-sm"
              >
                <h3 className="font-heading text-base font-bold uppercase tracking-wide text-papal-gold">
                  {m.month}
                </h3>
                <p className="mt-1 font-semibold text-papal-navy">{m.topic}</p>
                <p className="mt-2 text-sm text-papal-navy/80">{m.prayer}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.howToPrayTitle}</h2>
          <p>{t.howToPrayBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.sourceTitle}</h2>
          <p className="text-sm text-papal-navy/70">{t.sourceBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(link.href, locale)}
                  className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  )
}
