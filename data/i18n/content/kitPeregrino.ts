/**
 * Traducciones del kit del peregrino (16 productos + 7 categorías).
 *
 * Patrón: ES en data/kitPeregrino.ts es la fuente de verdad.
 * Este archivo sobreescribe los textos traducibles por locale.
 */

import type { Locale } from '@/data/i18n/types'
import {
  kitPeregrino,
  KIT_CATEGORIES,
  type KitItem,
  type KitCategory,
} from '@/data/kitPeregrino'

type KitItemTranslation = { title: string; description: string }

// Orden exacto de data/kitPeregrino.ts (16 items)
const KIT_EN: KitItemTranslation[] = [
  { title: 'Lightweight foldable backpack', description: 'Foldable 20-25L backpack to carry water, food and raincoat. Mandatory if you spend several hours in the venue.' },
  { title: 'Cap or brimmed hat', description: 'Essential. June in Madrid and the Canaries exceeds 30°C. Better a 360° brim than a simple frontal cap.' },
  { title: 'Folding chair / camping stool', description: 'Saturday vigil means 4-5 hours of waiting. A folding stool with strap makes the difference between enjoying and suffering.' },
  { title: '750 ml insulated water bottle', description: 'Fresh water for 12 hours. Can be refilled at water points inside the venue. Better than single-use plastic bottles.' },
  { title: 'SPF 50+ sunscreen', description: 'Stick or cream. Midday UVA in the Canaries is extreme radiation. Reapply every 2 hours. Essential for children.' },
  { title: 'UV400 sunglasses', description: 'Cheap shop ones don\'t cut it. Look for UV400 or CE category 3 label. Real long-term protection against cataracts.' },
  { title: 'Sturdy foldable fan', description: 'Practical when there\'s no air flow in the venue. Quality wooden ones last years; plastic ones break day one.' },
  { title: 'Power bank 10,000-20,000 mAh', description: 'With so many photos, videos and Maps usage, your phone won\'t last. 10,000 mAh charges a modern phone twice.' },
  { title: 'USB cable 2-in-1 (Lightning + USB-C)', description: 'To share battery with anyone. Braided cables last much longer than flat ones.' },
  { title: 'Olive wood rosary', description: 'Handcrafted rosaries from the Holy Land in olive wood are the most used. Light, quiet, resistant.' },
  { title: 'Missal with daily readings', description: 'Follow the liturgy in your language without Wi-Fi. The Roman Missal or basic Latin Church Missal.' },
  { title: 'Foldable emergency raincoat', description: 'June in Madrid can drop a dry storm in 15 minutes. Hooded raincoat, not a "disposable poncho".' },
  { title: 'Mini first-aid kit + plasters', description: 'Shoe blisters, allergies, headache. Most used: plasters, paracetamol, antihistamine.' },
  { title: 'Hidden anti-theft money belt', description: 'Crowds = pickpockets. Money belt under the t-shirt for passport, cards and cash. Not optional.' },
  { title: 'Energy bars / nuts', description: 'Queues for food at a mass event are 40 minutes. Bringing your own prevents fainting.' },
  { title: 'Gel insoles for walking', description: 'You\'ll walk 6-10 km each day. Gel insoles inside your sneakers change the experience.' },
]

const KIT_IT: KitItemTranslation[] = [
  { title: 'Zaino pieghevole leggero', description: 'Zaino pieghevole da 20-25 L per portare acqua, cibo e impermeabile. Indispensabile se si trascorrono diverse ore nel luogo della celebrazione.' },
  { title: 'Berretto o cappello a tesa larga', description: 'Imprescindibile. A giugno Madrid e le Canarie superano i 30 °C. Meglio una tesa a 360° che un semplice cappellino con visiera.' },
  { title: 'Sedia pieghevole / sgabello da campeggio', description: 'La veglia del sabato comporta 4-5 ore di attesa. Uno sgabello pieghevole con tracolla fa la differenza tra godere e soffrire.' },
  { title: 'Borraccia termica da 750 ml', description: 'Acqua fresca per 12 ore. Riempibile ai punti d\'acqua all\'interno del recinto. Migliore della plastica monouso.' },
  { title: 'Crema solare SPF 50+', description: 'In stick o crema. Il sole di mezzogiorno alle Canarie è radiazione UVA estrema. Riapplicare ogni 2 ore. Essenziale per i bambini.' },
  { title: 'Occhiali da sole UV400', description: 'I modelli da bazar non bastano. Cercare l\'etichetta UV400 o CE categoria 3. Vera protezione a lungo termine contro la cataratta.' },
  { title: 'Ventaglio pieghevole resistente', description: 'Pratico quando non c\'è ricambio d\'aria nel recinto. Quelli di legno di qualità durano anni; quelli di plastica si rompono il primo giorno.' },
  { title: 'Power bank 10.000-20.000 mAh', description: 'Tra foto, video e uso di Maps, il telefono non regge. 10.000 mAh ricaricano due volte uno smartphone moderno.' },
  { title: 'Cavo USB 2 in 1 (Lightning + USB-C)', description: 'Per condividere la batteria con chiunque. I cavi intrecciati durano molto di più di quelli piatti.' },
  { title: 'Rosario in legno d\'olivo', description: 'I rosari artigianali della Terra Santa in legno d\'olivo sono i più usati. Leggeri, silenziosi, resistenti.' },
  { title: 'Messale con letture quotidiane', description: 'Seguire la liturgia nella propria lingua senza Wi-Fi. Il Messale Romano o un Messale basico della Chiesa latina.' },
  { title: 'Impermeabile pieghevole d\'emergenza', description: 'A giugno Madrid può scaricare un temporale secco in 15 minuti. Impermeabile con cappuccio, non un "poncho usa e getta".' },
  { title: 'Mini kit di pronto soccorso + cerotti', description: 'Vesciche da scarpe, allergie, mal di testa. I più usati: cerotti, paracetamolo, antistaminico.' },
  { title: 'Marsupio antifurto da cintura', description: 'Folla = borseggiatori. Marsupio sotto la maglietta per passaporto, carte e contanti. Non opzionale.' },
  { title: 'Barrette energetiche / frutta secca', description: 'Le code per il cibo a un evento di massa sono di 40 minuti. Portarsi il proprio evita lo svenimento.' },
  { title: 'Solette in gel per camminare', description: 'Si camminano 6-10 km al giorno. Solette in gel dentro le scarpe cambiano l\'esperienza.' },
]

const KIT_FR: KitItemTranslation[] = [
  { title: 'Sac à dos pliable léger', description: 'Sac à dos pliable de 20-25 L pour transporter eau, nourriture et imperméable. Indispensable si vous passez plusieurs heures sur le site.' },
  { title: 'Casquette ou chapeau à bord large', description: 'Indispensable. En juin, Madrid et les Canaries dépassent les 30 °C. Mieux vaut un bord à 360° qu\'une simple casquette frontale.' },
  { title: 'Chaise pliante / tabouret de camping', description: 'La veillée du samedi représente 4-5 heures d\'attente. Un tabouret pliant avec sangle fait la différence entre profiter et souffrir.' },
  { title: 'Gourde isotherme 750 ml', description: 'Eau fraîche pendant 12 heures. Remplissable aux points d\'eau à l\'intérieur du site. Bien meilleure que le plastique à usage unique.' },
  { title: 'Crème solaire SPF 50+', description: 'En stick ou en crème. Le soleil de midi aux Canaries est un rayonnement UVA extrême. À renouveler toutes les 2 heures. Essentielle pour les enfants.' },
  { title: 'Lunettes de soleil UV400', description: 'Les modèles de bazar ne suffisent pas. Cherchez l\'étiquette UV400 ou CE catégorie 3. Une vraie protection à long terme contre la cataracte.' },
  { title: 'Éventail pliable résistant', description: 'Pratique quand il n\'y a pas de circulation d\'air. Ceux en bois de qualité durent des années ; ceux en plastique cassent dès le premier jour.' },
  { title: 'Batterie externe 10 000-20 000 mAh', description: 'Entre photos, vidéos et usage de Maps, le téléphone ne tiendra pas. 10 000 mAh rechargent deux fois un smartphone moderne.' },
  { title: 'Câble USB 2 en 1 (Lightning + USB-C)', description: 'Pour partager la batterie avec n\'importe qui. Les câbles tressés durent beaucoup plus que les plats.' },
  { title: 'Rosaire en bois d\'olivier', description: 'Les rosaires artisanaux de Terre Sainte en bois d\'olivier sont les plus utilisés. Légers, silencieux, résistants.' },
  { title: 'Missel avec lectures quotidiennes', description: 'Suivre la liturgie dans votre langue sans Wi-Fi. Le Missel Romain ou un Missel basique de l\'Église latine.' },
  { title: 'Imperméable pliable d\'urgence', description: 'En juin, Madrid peut déverser un orage sec en 15 minutes. Imperméable à capuche, pas un "poncho jetable".' },
  { title: 'Mini trousse de secours + pansements', description: 'Ampoules de chaussures, allergies, mal de tête. Les plus utilisés : pansements, paracétamol, antihistaminique.' },
  { title: 'Pochette antivol cachée', description: 'Foule = pickpockets. Pochette sous le t-shirt pour passeport, cartes et liquide. Pas optionnelle.' },
  { title: 'Barres énergétiques / fruits secs', description: 'Les files d\'attente pour la nourriture lors d\'un événement de masse sont de 40 minutes. Apporter le sien évite le malaise.' },
  { title: 'Semelles en gel pour marcher', description: 'Vous marcherez 6-10 km par jour. Des semelles en gel dans vos chaussures changent l\'expérience.' },
]

const KIT_DE: KitItemTranslation[] = [
  { title: 'Leichter, faltbarer Rucksack', description: 'Faltbarer Rucksack mit 20-25 L für Wasser, Proviant und Regenjacke. Unverzichtbar, wenn man mehrere Stunden am Ort der Feier verbringt.' },
  { title: 'Mütze oder Hut mit Krempe', description: 'Unverzichtbar. Im Juni übersteigen Madrid und die Kanaren 30 °C. Besser eine 360°-Krempe als eine einfache Schirmmütze.' },
  { title: 'Klappstuhl / Campinghocker', description: 'Die Vigil am Samstag bedeutet 4-5 Stunden Warten. Ein Klapphocker mit Tragegurt macht den Unterschied zwischen genießen und leiden.' },
  { title: 'Thermoflasche 750 ml', description: 'Frisches Wasser für 12 Stunden. An den Wasserstellen im Veranstaltungsbereich nachfüllbar. Besser als Einwegplastik.' },
  { title: 'Sonnencreme LSF 50+', description: 'Als Stick oder Creme. Die Mittagssonne auf den Kanaren ist extreme UVA-Strahlung. Alle 2 Stunden nachcremen. Für Kinder unverzichtbar.' },
  { title: 'Sonnenbrille UV400', description: 'Billige Modelle vom Markt reichen nicht. Auf das Etikett UV400 oder CE Kategorie 3 achten. Echter Langzeitschutz gegen grauen Star.' },
  { title: 'Robuster Klappfächer', description: 'Praktisch, wenn im Veranstaltungsbereich keine Luft zieht. Hochwertige Holzfächer halten Jahre; Plastikfächer brechen am ersten Tag.' },
  { title: 'Powerbank 10.000-20.000 mAh', description: 'Zwischen Fotos, Videos und Karten-Apps hält das Handy nicht durch. 10.000 mAh laden ein modernes Smartphone zweimal.' },
  { title: 'USB-Kabel 2-in-1 (Lightning + USB-C)', description: 'Um den Akku mit jedem teilen zu können. Geflochtene Kabel halten viel länger als flache.' },
  { title: 'Rosenkranz aus Olivenholz', description: 'Die handgefertigten Rosenkränze aus dem Heiligen Land aus Olivenholz sind die beliebtesten. Leicht, leise, widerstandsfähig.' },
  { title: 'Messbuch mit Tageslesungen', description: 'Der Liturgie in der eigenen Sprache ohne WLAN folgen. Das Römische Messbuch oder ein einfaches Messbuch der lateinischen Kirche.' },
  { title: 'Faltbarer Notfall-Regenmantel', description: 'Im Juni kann Madrid in 15 Minuten ein Trockengewitter abladen. Regenmantel mit Kapuze, kein "Einweg-Poncho".' },
  { title: 'Mini-Erste-Hilfe-Set + Pflaster', description: 'Blasen vom Schuh, Allergien, Kopfschmerzen. Am meisten gebraucht: Pflaster, Paracetamol, Antihistaminikum.' },
  { title: 'Versteckte Diebstahlsicherungstasche', description: 'Menschenmenge = Taschendiebe. Bauchtasche unter dem T-Shirt für Pass, Karten und Bargeld. Nicht optional.' },
  { title: 'Energieriegel / Trockenfrüchte', description: 'Schlangen am Imbiss bei einem Massenevent dauern 40 Minuten. Eigenes Essen mitbringen verhindert den Kollaps.' },
  { title: 'Gel-Einlegesohlen zum Gehen', description: 'Sie werden täglich 6-10 km laufen. Gel-Einlegesohlen in den Schuhen verändern das Erlebnis.' },
]

const KIT_PT: KitItemTranslation[] = [
  { title: 'Mochila dobrável leve', description: 'Mochila dobrável de 20-25 L para levar água, comida e impermeável. Indispensável se passar várias horas no recinto.' },
  { title: 'Boné ou chapéu de aba', description: 'Imprescindível. Em junho, Madrid e as Canárias ultrapassam os 30 °C. Melhor uma aba de 360° do que um simples boné frontal.' },
  { title: 'Cadeira dobrável / banco de campismo', description: 'A vigília de sábado significa 4-5 horas de espera. Um banco dobrável com alça faz a diferença entre desfrutar e sofrer.' },
  { title: 'Cantil térmico de 750 ml', description: 'Água fresca durante 12 horas. Pode encher-se nos pontos de água do recinto. Melhor do que plástico descartável.' },
  { title: 'Protetor solar FPS 50+', description: 'Em stick ou creme. O sol do meio-dia nas Canárias é radiação UVA extrema. Reaplicar a cada 2 horas. Essencial para crianças.' },
  { title: 'Óculos de sol UV400', description: 'Os de bazar não chegam. Procure a etiqueta UV400 ou CE categoria 3. Verdadeira proteção a longo prazo contra cataratas.' },
  { title: 'Leque dobrável resistente', description: 'Prático quando não há circulação de ar no recinto. Os de madeira de qualidade duram anos; os de plástico partem-se no primeiro dia.' },
  { title: 'Power bank 10.000-20.000 mAh', description: 'Entre fotografias, vídeos e uso de Maps, o telemóvel não aguenta. 10.000 mAh carregam duas vezes um smartphone moderno.' },
  { title: 'Cabo USB 2 em 1 (Lightning + USB-C)', description: 'Para partilhar bateria com qualquer pessoa. Os cabos entrançados duram muito mais que os planos.' },
  { title: 'Rosário em madeira de oliveira', description: 'Os rosários artesanais da Terra Santa em madeira de oliveira são os mais usados. Leves, silenciosos, resistentes.' },
  { title: 'Missal com leituras diárias', description: 'Acompanhar a liturgia na sua língua sem Wi-Fi. O Missal Romano ou um Missal básico da Igreja latina.' },
  { title: 'Impermeável dobrável de emergência', description: 'Em junho, Madrid pode despejar uma trovoada seca em 15 minutos. Impermeável com capuz, não um "poncho descartável".' },
  { title: 'Mini estojo de primeiros socorros + pensos', description: 'Bolhas dos sapatos, alergias, dor de cabeça. Os mais usados: pensos, paracetamol, anti-histamínico.' },
  { title: 'Bolsa antifurto oculta', description: 'Multidão = carteiristas. Bolsa por baixo da t-shirt para passaporte, cartões e dinheiro. Não é opcional.' },
  { title: 'Barras energéticas / frutos secos', description: 'As filas para comer num evento de massa são de 40 minutos. Levar o próprio evita desmaios.' },
  { title: 'Palmilhas de gel para caminhar', description: 'Vai caminhar 6-10 km por dia. Palmilhas de gel dentro das sapatilhas mudam a experiência.' },
]

const KIT_CA: KitItemTranslation[] = [
  { title: 'Motxilla plegable lleugera', description: 'Motxilla plegable de 20-25 L per portar aigua, menjar i impermeable. Imprescindible si es passen diverses hores al recinte.' },
  { title: 'Gorra o barret amb ala', description: 'Imprescindible. Al juny, Madrid i les Canàries superen els 30 °C. Millor una ala de 360° que una simple gorra frontal.' },
  { title: 'Cadira plegable / tamboret de càmping', description: 'La vigília del dissabte són 4-5 hores d\'espera. Un tamboret plegable amb corretja fa la diferència entre gaudir i patir.' },
  { title: 'Cantimplora tèrmica de 750 ml', description: 'Aigua fresca durant 12 hores. Es pot omplir als punts d\'aigua del recinte. Millor que el plàstic d\'un sol ús.' },
  { title: 'Protector solar SPF 50+', description: 'En stick o crema. El sol de migdia a les Canàries és radiació UVA extrema. Reaplicar cada 2 hores. Essencial per als nens.' },
  { title: 'Ulleres de sol UV400', description: 'Les de basar no fan el fet. Busqueu l\'etiqueta UV400 o CE categoria 3. Vera protecció a llarg termini contra les cataractes.' },
  { title: 'Ventall plegable resistent', description: 'Pràctic quan no hi ha circulació d\'aire al recinte. Els de fusta de qualitat duren anys; els de plàstic es trenquen el primer dia.' },
  { title: 'Bateria externa 10.000-20.000 mAh', description: 'Entre fotos, vídeos i ús de Maps, el mòbil no aguanta. 10.000 mAh carreguen dues vegades un smartphone modern.' },
  { title: 'Cable USB 2 en 1 (Lightning + USB-C)', description: 'Per compartir bateria amb qualsevol. Els cables trenats duren molt més que els plans.' },
  { title: 'Rosari de fusta d\'olivera', description: 'Els rosaris artesanals de Terra Santa de fusta d\'olivera són els més utilitzats. Lleugers, silenciosos, resistents.' },
  { title: 'Missal amb lectures diàries', description: 'Seguir la litúrgia en la vostra llengua sense Wi-Fi. El Missal Romà o un Missal bàsic de l\'Església llatina.' },
  { title: 'Impermeable plegable d\'emergència', description: 'Al juny, Madrid pot descarregar una tempesta seca en 15 minuts. Impermeable amb caputxa, no un "ponxo d\'un sol ús".' },
  { title: 'Mini farmaciola + tiretes', description: 'Butllofes de sabata, al·lèrgies, mal de cap. Els més utilitzats: tiretes, paracetamol, antihistamínic.' },
  { title: 'Ronyonera antirobatori oculta', description: 'Multitud = carteristes. Ronyonera sota la samarreta per a passaport, targetes i diners. No és opcional.' },
  { title: 'Barretes energètiques / fruita seca', description: 'Les cues per menjar en un esdeveniment de masses són de 40 minuts. Portar el propi evita marejos.' },
  { title: 'Plantilles de gel per caminar', description: 'Caminareu 6-10 km cada dia. Plantilles de gel dins les sabatilles canvien l\'experiència.' },
]

const KIT_GL: KitItemTranslation[] = [
  { title: 'Mochila pregable lixeira', description: 'Mochila pregable de 20-25 L para levar auga, comida e impermeable. Imprescindible se se pasan varias horas no recinto.' },
  { title: 'Gorra ou sombreiro con á', description: 'Imprescindible. En xuño, Madrid e as Canarias superan os 30 °C. Mellor unha á de 360° que unha simple gorra frontal.' },
  { title: 'Cadeira pregable / tallo de camping', description: 'A vixilia do sábado son 4-5 horas de espera. Un tallo pregable con correa marca a diferenza entre gozar e sufrir.' },
  { title: 'Cantimplora térmica de 750 ml', description: 'Auga fresca durante 12 horas. Pódese encher nos puntos de auga do recinto. Mellor que o plástico dun só uso.' },
  { title: 'Protector solar FPS 50+', description: 'En stick ou crema. O sol do mediodía nas Canarias é radiación UVA extrema. Reaplicar cada 2 horas. Esencial para os nenos.' },
  { title: 'Lentes de sol UV400', description: 'As de bazar non chegan. Busca a etiqueta UV400 ou CE categoría 3. Verdadeira protección a longo prazo contra cataratas.' },
  { title: 'Abano pregable resistente', description: 'Práctico cando non hai circulación de aire no recinto. Os de madeira de calidade duran anos; os de plástico rompen o primeiro día.' },
  { title: 'Batería externa 10.000-20.000 mAh', description: 'Entre fotos, vídeos e uso de Maps, o móbil non aguanta. 10.000 mAh cargan dúas veces un smartphone moderno.' },
  { title: 'Cable USB 2 en 1 (Lightning + USB-C)', description: 'Para compartir batería con calquera. Os cables trenzados duran moito máis que os planos.' },
  { title: 'Rosario de madeira de oliveira', description: 'Os rosarios artesanais de Terra Santa en madeira de oliveira son os máis usados. Lixeiros, silenciosos, resistentes.' },
  { title: 'Misal con lecturas diarias', description: 'Seguir a liturxia na túa lingua sen Wi-Fi. O Misal Romano ou un Misal básico da Igrexa latina.' },
  { title: 'Impermeable pregable de emerxencia', description: 'En xuño, Madrid pode descargar unha tormenta seca en 15 minutos. Impermeable con capucha, non un "poncho dun só uso".' },
  { title: 'Mini botica + tiritas', description: 'Ampollas de zapato, alerxias, dor de cabeza. Os máis usados: tiritas, paracetamol, antihistamínico.' },
  { title: 'Riñoneira antirroubo oculta', description: 'Multitude = carteiristas. Riñoneira baixo a camiseta para pasaporte, tarxetas e diñeiro. Non é opcional.' },
  { title: 'Barriñas enerxéticas / froitos secos', description: 'As colas para comer nun evento de masas son de 40 minutos. Levar o propio evita mareos.' },
  { title: 'Plantillas de xel para camiñar', description: 'Camiñarás 6-10 km cada día. Plantillas de xel dentro das zapatillas cambian a experiencia.' },
]

const KIT_EU: KitItemTranslation[] = [
  { title: 'Tolesgarrizko motxila arina', description: '20-25 L-ko motxila tolesgarria ura, janaria eta euri-jantzia eramateko. Ezinbestekoa ordu batzuk ospakizun-eremuan ematen badira.' },
  { title: 'Bisera edo hegaldun txapela', description: 'Ezinbestekoa. Ekainean Madrilek eta Kanariek 30 °C gainditzen dituzte. Hobe 360°-ko hegala bisera soil bat baino.' },
  { title: 'Aulki tolesgarria / kanpoko aulkitxoa', description: 'Larunbateko bijilia 4-5 orduko itxaronaldia da. Aulkitxo tolesgarriak, uhalarekin, alde handia egiten du gozatzearen eta sufritzearen artean.' },
  { title: '750 ml-ko botila termikoa', description: 'Ur freskoa 12 orduz. Eremuko ur-puntuetan bete daiteke. Behin bakarrik erabiltzeko plastikoa baino hobe.' },
  { title: 'Eguzki-krema FPS 50+', description: 'Stick edo krema gisa. Eguerdiko eguzkia Kanarietan UVA erradiazio muturrekoa da. 2 orduro berriz aplikatu. Haurrentzat ezinbestekoa.' },
  { title: 'UV400 eguzkitako betaurrekoak', description: 'Bazarrekoak ez dira nahikoa. Bilatu UV400 edo CE 3. kategoria etiketa. Babes erreala epe luzera kataraten kontra.' },
  { title: 'Haize-emaile tolesgarri sendoa', description: 'Praktikoa eremuan aire-zirkulaziorik ez dagoenean. Egur onekoek urteak irauten dute; plastikozkoak lehen egunean apurtzen dira.' },
  { title: '10.000-20.000 mAh-ko bateria eramangarria', description: 'Argazki, bideo eta Maps erabiltzen, telefonoak ez du iraungo. 10.000 mAh-ek bi aldiz kargatzen dute smartphone moderno bat.' },
  { title: 'USB kable 2 1ean (Lightning + USB-C)', description: 'Bateria edonorekin partekatzeko. Kable iruntsiek askoz gehiago irauten dute lauek baino.' },
  { title: 'Olibondo-zurezko arrosarioa', description: 'Lurralde Santuko olibondo-zurezko arrosario eskulanek dira erabilienak. Arinak, isilak, sendoak.' },
  { title: 'Eguneroko irakurketak dituen mezaliburua', description: 'Liturgia zure hizkuntzan jarraitu Wi-Fi gabe. Mezaliburu Erromatarra edo Eliza latindar oinarrizkoaren mezaliburua.' },
  { title: 'Larrialdiko euri-jantzi tolesgarria', description: 'Ekainean Madrilek lehor-ekaitza bota dezake 15 minututan. Kapuxadun euri-jantzia, ez "behin erabiltzeko poncho" bat.' },
  { title: 'Mini lehen sorospenak + tiritak', description: 'Zapatek eragindako babak, alergiak, buruko mina. Erabilienak: tiritak, parazetamola, antihistaminikoa.' },
  { title: 'Lapurretaren aurkako gerriko ezkutua', description: 'Jendetza = poltsikolariak. Kamisetapeko gerrikoa pasaporte, txartel eta dirurako. Ez da aukerakoa.' },
  { title: 'Energia-barrak / fruitu lehorrak', description: 'Masa-ekitaldietan janari-ilarak 40 minutukoak dira. Norberarena eramatea ahultzeari aurrea hartzen dio.' },
  { title: 'Gel-zola oinetakoetarako', description: '6-10 km egingo dituzu egunean. Gel-zolek oinetakoen barruan esperientzia aldatzen dute.' },
]

const KIT_CATEGORIES_EN: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essentials', icon: '🎒' },
  { id: 'hidratacion', label: 'Hydration', icon: '💧' },
  { id: 'proteccion-sol', label: 'Sun protection', icon: '☀️' },
  { id: 'energia', label: 'Energy and battery', icon: '🔋' },
  { id: 'comodidad', label: 'Comfort', icon: '🪑' },
  { id: 'religioso', label: 'Religious items', icon: '✝️' },
  { id: 'seguridad', label: 'Safety', icon: '🛡️' },
]

const KIT_CATEGORIES_IT: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essenziali', icon: '🎒' },
  { id: 'hidratacion', label: 'Idratazione', icon: '💧' },
  { id: 'proteccion-sol', label: 'Protezione solare', icon: '☀️' },
  { id: 'energia', label: 'Energia e batteria', icon: '🔋' },
  { id: 'comodidad', label: 'Comfort', icon: '🪑' },
  { id: 'religioso', label: 'Oggetti religiosi', icon: '✝️' },
  { id: 'seguridad', label: 'Sicurezza', icon: '🛡️' },
]

const KIT_CATEGORIES_FR: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essentiels', icon: '🎒' },
  { id: 'hidratacion', label: 'Hydratation', icon: '💧' },
  { id: 'proteccion-sol', label: 'Protection solaire', icon: '☀️' },
  { id: 'energia', label: 'Énergie et batterie', icon: '🔋' },
  { id: 'comodidad', label: 'Confort', icon: '🪑' },
  { id: 'religioso', label: 'Objets religieux', icon: '✝️' },
  { id: 'seguridad', label: 'Sécurité', icon: '🛡️' },
]

const KIT_CATEGORIES_DE: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Grundausstattung', icon: '🎒' },
  { id: 'hidratacion', label: 'Flüssigkeitszufuhr', icon: '💧' },
  { id: 'proteccion-sol', label: 'Sonnenschutz', icon: '☀️' },
  { id: 'energia', label: 'Energie und Akku', icon: '🔋' },
  { id: 'comodidad', label: 'Komfort', icon: '🪑' },
  { id: 'religioso', label: 'Religiöse Gegenstände', icon: '✝️' },
  { id: 'seguridad', label: 'Sicherheit', icon: '🛡️' },
]

const KIT_CATEGORIES_PT: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essenciais', icon: '🎒' },
  { id: 'hidratacion', label: 'Hidratação', icon: '💧' },
  { id: 'proteccion-sol', label: 'Proteção solar', icon: '☀️' },
  { id: 'energia', label: 'Energia e bateria', icon: '🔋' },
  { id: 'comodidad', label: 'Conforto', icon: '🪑' },
  { id: 'religioso', label: 'Objetos religiosos', icon: '✝️' },
  { id: 'seguridad', label: 'Segurança', icon: '🛡️' },
]

const KIT_CATEGORIES_CA: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Essencials', icon: '🎒' },
  { id: 'hidratacion', label: 'Hidratació', icon: '💧' },
  { id: 'proteccion-sol', label: 'Protecció solar', icon: '☀️' },
  { id: 'energia', label: 'Energia i bateria', icon: '🔋' },
  { id: 'comodidad', label: 'Comoditat', icon: '🪑' },
  { id: 'religioso', label: 'Objectes religiosos', icon: '✝️' },
  { id: 'seguridad', label: 'Seguretat', icon: '🛡️' },
]

const KIT_CATEGORIES_GL: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Esenciais', icon: '🎒' },
  { id: 'hidratacion', label: 'Hidratación', icon: '💧' },
  { id: 'proteccion-sol', label: 'Protección solar', icon: '☀️' },
  { id: 'energia', label: 'Enerxía e batería', icon: '🔋' },
  { id: 'comodidad', label: 'Comodidade', icon: '🪑' },
  { id: 'religioso', label: 'Obxectos relixiosos', icon: '✝️' },
  { id: 'seguridad', label: 'Seguridade', icon: '🛡️' },
]

const KIT_CATEGORIES_EU: { id: KitCategory; label: string; icon: string }[] = [
  { id: 'esenciales', label: 'Funtsezkoak', icon: '🎒' },
  { id: 'hidratacion', label: 'Hidratazioa', icon: '💧' },
  { id: 'proteccion-sol', label: 'Eguzkitik babesa', icon: '☀️' },
  { id: 'energia', label: 'Energia eta bateria', icon: '🔋' },
  { id: 'comodidad', label: 'Erosotasuna', icon: '🪑' },
  { id: 'religioso', label: 'Objektu erlijiosoak', icon: '✝️' },
  { id: 'seguridad', label: 'Segurtasuna', icon: '🛡️' },
]

function getKitDict(locale: Locale): KitItemTranslation[] | null {
  switch (locale) {
    case 'en': return KIT_EN
    case 'it': return KIT_IT
    case 'fr': return KIT_FR
    case 'de': return KIT_DE
    case 'pt': return KIT_PT
    case 'ca': return KIT_CA
    case 'gl': return KIT_GL
    case 'eu': return KIT_EU
    default: return null
  }
}

export function getKitPeregrino(locale: Locale): KitItem[] {
  const dict = getKitDict(locale)
  if (!dict) return kitPeregrino
  return kitPeregrino.map((it, i) => {
    const tr = dict[i]
    if (!tr) return it
    return { ...it, title: tr.title, description: tr.description }
  })
}

export function getKitCategories(locale: Locale) {
  switch (locale) {
    case 'en': return KIT_CATEGORIES_EN
    case 'it': return KIT_CATEGORIES_IT
    case 'fr': return KIT_CATEGORIES_FR
    case 'de': return KIT_CATEGORIES_DE
    case 'pt': return KIT_CATEGORIES_PT
    case 'ca': return KIT_CATEGORIES_CA
    case 'gl': return KIT_CATEGORIES_GL
    case 'eu': return KIT_CATEGORIES_EU
    default: return KIT_CATEGORIES
  }
}

export { kitPeregrino, KIT_CATEGORIES }
export type { KitItem, KitCategory }
