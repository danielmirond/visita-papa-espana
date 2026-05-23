import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import VaticanFlagBanner from '@/components/shared/VaticanFlagBanner'
import { localizePath } from '@/data/i18n/routes'
import type { Locale } from '@/data/i18n/types'
import Link from 'next/link'

interface Props { locale: Locale }

type Fact = { label: string; value: string }
type FaqItem = { q: string; a: string }
type Comparison = { title: string; old: string; new: string }

type Translation = {
  breadcrumbHome: string
  breadcrumbCurrent: string
  title: string
  subtitle: string
  badge: string
  intro: string
  quickFacts: Fact[]
  whyTitle: string
  whyBody: string[]
  parallelTitle: string
  parallelIntro: string
  comparisons: Comparison[]
  themesTitle: string
  themesIntro: string
  themes: { title: string; body: string }[]
  contextTitle: string
  contextBody: string
  watchTitle: string
  watchBody: string
  faqTitle: string
  faq: FaqItem[]
  updateTitle: string
  updateBody: string
  relatedTitle: string
  related: { href: string; text: string }[]
}

const L: Record<Locale, Translation> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · primera encíclica del Papa León XIV',
    subtitle: 'Publicación: 25 de mayo de 2026 · firmada el 15 de mayo, 135º aniversario de Rerum Novarum · tema: la custodia de la persona humana en el tiempo de la inteligencia artificial.',
    badge: 'Publicación inminente',
    intro: '«Magnifica humanitas» es la primera carta encíclica del Papa León XIV. Trata sobre cómo proteger a la persona en la era de la inteligencia artificial. El texto se publica el 25 de mayo de 2026 y lleva firma del Pontífice del 15 de mayo, justo en el 135 aniversario de Rerum Novarum (1891), la encíclica de León XIII que abrió la Doctrina Social de la Iglesia. La presentación oficial es ese 25 de mayo a las 11:30 en el Aula del Sínodo, con el Papa presente. Llega doce días antes del viaje del Papa a España (6-12 de junio de 2026), y muchas de sus tesis volverán a aparecer en el discurso ante el Congreso del lunes 8 de junio.',
    quickFacts: [
      { label: 'Título', value: 'Magnifica humanitas' },
      { label: 'Fecha de publicación', value: '25 de mayo de 2026' },
      { label: 'Fecha de la firma', value: '15 de mayo de 2026' },
      { label: 'Presentación oficial', value: 'Aula del Sínodo, 11:30' },
      { label: 'Tema central', value: 'Persona humana en la era de la IA' },
      { label: 'Continuidad', value: 'Rerum Novarum (1891) de León XIII' },
    ],
    whyTitle: 'Por qué es un documento histórico',
    whyBody: [
      'Es la primera encíclica del pontificado de Robert Francis Prevost, elegido Papa el 8 de mayo de 2025. El nombre que escogió, León XIV, ya apuntaba a este texto: en su primer discurso al Colegio Cardenalicio, recién elegido, contó que tomaba el nombre en homenaje a León XIII, el autor de Rerum Novarum (1891). Aquella fue la encíclica que abrió la Doctrina Social de la Iglesia, escrita como respuesta a la primera revolución industrial.',
      'León XIV pretende ahora dar una respuesta del mismo calado a la revolución de nuestro tiempo, la inteligencia artificial. La encíclica aborda el impacto de la IA sobre la dignidad de las personas, el trabajo, la libertad de conciencia y la justicia social. Ningún Papa había dedicado antes una encíclica entera a esta cuestión. Francisco había enviado un mensaje al G7 en 2024 y Benedicto XVI había hecho referencias en algunos discursos, pero nada con este rango doctrinal.',
      'La firma del 15 de mayo coincide con el 135 aniversario exacto de Rerum Novarum. La fecha está escogida a propósito: enlaza los dos documentos como respuestas paralelas a dos revoluciones industriales separadas por más de un siglo. La continuidad de la doctrina social queda así inscrita en el gesto.',
    ],
    parallelTitle: 'Rerum Novarum (1891) y Magnifica humanitas (2026)',
    parallelIntro: 'La idea de poner ambos textos frente a frente, separados por 135 años, no es retórica: las dos encíclicas se enfrentan a revoluciones industriales distintas con un mismo planteamiento. Lo que cambia es el contexto:',
    comparisons: [
      { title: 'La revolución de fondo', old: 'La primera revolución industrial: vapor, fábrica, urbanización en masa, capitalismo industrial.', new: 'La revolución actual: inteligencia artificial, automatización del trabajo intelectual y plataformas digitales globales.' },
      { title: 'Dónde está la herida en la dignidad', old: 'El obrero de fábrica: jornadas larguísimas, salarios injustos, sin derechos colectivos reconocidos.', new: 'La persona ante la máquina que decide: pérdida del empleo, vigilancia algorítmica, decisiones automatizadas que afectan a derechos básicos.' },
      { title: 'Contra qué se discute', old: 'Liberalismo económico extremo y socialismo materialista.', new: 'Determinismo tecnológico y tecnocracia sin control democrático.' },
      { title: 'Qué se propone', old: 'Salario justo, derecho de asociación, propiedad como derecho natural, función social del capital.', new: 'Gobernanza internacional de la IA, derecho a saber cómo decide un algoritmo, supervisión humana real y dignidad como límite último.' },
    ],
    themesTitle: 'Qué temas tratará la encíclica',
    themesIntro: 'A partir de lo que León XIV ha ido diciendo durante su primer año (mensaje al G7 sobre IA, discurso al Cuerpo Diplomático, intervención en Davos), la encíclica girará probablemente alrededor de cinco asuntos:',
    themes: [
      { title: 'La persona, no un dato', body: 'La IA tiende a reducir a la persona a un patrón estadístico. La encíclica recuerda que cada uno es imagen de Dios, no un perfil de usuario, y que esa diferencia es el límite frente a cualquier intento reduccionista.' },
      { title: 'El trabajo cuando la máquina piensa', body: 'Recoge la línea de Laborem Exercens (1981). ¿Cómo se protege el trabajo digno cuando la IA hace tareas que antes hacíamos las personas? Aparecen aquí la renta básica, la formación a lo largo de la vida y el derecho a un trabajo con sentido.' },
      { title: 'Verdad, desinformación y libertad de conciencia', body: 'IA generativa, deepfakes, manipulación a gran escala. La encíclica reclama una ética nueva de la verdad pública y defiende el derecho a no ser manipulado por un algoritmo.' },
      { title: 'Una gobernanza global de la IA', body: 'Recupera la idea que ya lanzó Juan XXIII en Pacem in terris (1963) sobre una autoridad supranacional. Aplicada ahora a la IA: una regulación coordinada entre Estados, no dejada al criterio de un puñado de empresas.' },
      { title: 'Los más vulnerables', body: 'Niños, mayores, migrantes, personas con discapacidad. La IA puede ampliar o cortar su acceso a derechos. La encíclica vuelve al principio de la opción preferencial por los débiles, en sintonía con la ecología integral de Laudato si’.' },
    ],
    contextTitle: 'Contexto del pontificado',
    contextBody: 'La IA ha sido una prioridad clara para León XIV desde el principio. En su primer discurso al Colegio Cardenalicio, en mayo de 2025, ya dijo que era una cuestión equivalente a la que planteó Rerum Novarum en su día. El mensaje que envió al G7 en Roma sobre IA fue todavía más directo: «ninguna máquina debería decidir quién vive y quién muere». Magnifica humanitas cierra ese primer año de pontificado y abre el marco doctrinal del viaje a España. Las tesis del texto probablemente reaparecerán en el discurso ante el Congreso (8 de junio) y en el encuentro con la sociedad civil en el Movistar Arena (7 de junio).',
    watchTitle: 'Cómo leer y seguir la encíclica',
    watchBody: 'El texto íntegro de Magnifica humanitas se publicará el 25 de mayo en vatican.va en los idiomas oficiales del Vaticano (latín, italiano, español, inglés, francés, alemán, portugués, polaco). La presentación oficial será a las 11:30 en el Aula del Sínodo y se retransmitirá en directo por Vatican News (vaticannews.va, YouTube Vatican Media). El PDF firmado estará disponible para descarga gratuita. La Conferencia Episcopal Española y las diócesis preparan materiales pastorales para distribuir junto a la encíclica durante el Viaje Apostólico de junio.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué es Magnifica humanitas?', a: 'Es la primera encíclica del Papa León XIV, dedicada a la dignidad humana en la era de la inteligencia artificial. Se publica el 25 de mayo de 2026.' },
      { q: '¿Cuándo se publica Magnifica humanitas?', a: 'El texto se hará público el 25 de mayo de 2026 a las 11:30 en el Aula del Sínodo del Vaticano. La firma del Papa está fechada el 15 de mayo, 135º aniversario de Rerum Novarum.' },
      { q: '¿Por qué se llama Magnifica humanitas?', a: 'El título latino significa «Magnífica humanidad» o «Magnífica condición humana». Subraya la dignidad y singularidad de la persona humana frente a las tecnologías de inteligencia artificial.' },
      { q: '¿Es la primera encíclica sobre inteligencia artificial?', a: 'Sí. Es la primera vez que un Pontífice dedica una encíclica completa a la IA. Anteriormente Francisco había enviado un mensaje al G7 (2024) y Benedicto XVI había hecho referencias en discursos, pero Magnifica humanitas es el primer documento doctrinal de rango encíclica sobre el tema.' },
      { q: '¿Dónde puedo descargar el PDF?', a: 'A partir del 25 de mayo de 2026, el PDF oficial estará disponible en vatican.va en los principales idiomas. También en los portales de las conferencias episcopales nacionales. En esta página enlazaremos al PDF en cuanto se publique.' },
      { q: '¿Qué relación tiene con la visita del Papa a España?', a: 'Magnifica humanitas se publica 12 días antes del Viaje Apostólico a España (6-12 jun 2026). Es previsible que las claves de la encíclica aparezcan en el discurso del Papa al Congreso de los Diputados (8 jun) y en el encuentro «Tejer redes» en el Movistar Arena (7 jun).' },
    ],
    updateTitle: 'Aviso de actualización',
    updateBody: 'Esta página se actualizará el 25 de mayo de 2026 con el enlace al PDF oficial, citas verificadas del texto y resumen estructural. Hasta entonces, recogemos la información avanzada por la Sala de Prensa de la Santa Sede el 19 de mayo de 2026.',
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/papa-leon-xiv', text: 'Biografía completa del Papa León XIV' },
      { href: '/papa-congreso-diputados', text: 'Discurso al Congreso (8 jun) · donde se desarrollarán las tesis de la encíclica' },
      { href: '/discursos', text: 'Discursos clave del Papa León XIV' },
      { href: '/programa', text: 'Programa del Viaje Apostólico a España' },
      { href: '/alzad-la-mirada', text: 'Lema del viaje · «Alzad la mirada» (Jn 4,35)' },
    ],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · first encyclical of Pope Leo XIV',
    subtitle: 'Publication: 25 May 2026 · signed on 15 May, 135th anniversary of Rerum Novarum · theme: the care of the human person in the age of artificial intelligence.',
    badge: 'Imminent publication',
    intro: '"Magnifica humanitas" is Pope Leo XIV’s first encyclical letter. It deals with how to protect the human person in the age of artificial intelligence. The text comes out on 25 May 2026 and carries the Pope’s signature dated 15 May, exactly 135 years after Leo XIII signed Rerum Novarum (1891), the encyclical that opened the Social Doctrine of the Church. The official presentation is that same 25 May at 11:30 in the Synod Hall, with the Pope present. It arrives twelve days before the Pope’s journey to Spain (6-12 June 2026), and many of its arguments will reappear in his speech to the Spanish Congress on Monday 8 June.',
    quickFacts: [
      { label: 'Title', value: 'Magnifica humanitas' },
      { label: 'Publication date', value: '25 May 2026' },
      { label: 'Signing date', value: '15 May 2026' },
      { label: 'Official presentation', value: 'Synod Hall, 11:30' },
      { label: 'Central theme', value: 'Human person in the AI age' },
      { label: 'Continuity with', value: 'Rerum Novarum (1891) of Leo XIII' },
    ],
    whyTitle: 'Why this document matters',
    whyBody: [
      'It is the first encyclical of Robert Francis Prevost, who was elected Pope on 8 May 2025. The name he chose, Leo XIV, was already pointing at this text. Right after his election, in his first speech to the College of Cardinals, he said that he was taking the name Leo to honour Leo XIII. Leo XIII signed Rerum Novarum (1891), the encyclical that opened the Social Doctrine of the Church as a response to the first industrial revolution.',
      'Leo XIV now wants to give a comparable response to the industrial revolution of our own time, the one driven by artificial intelligence. The encyclical deals with the impact of AI on human dignity, on work, on freedom of conscience and on social justice. No Pope had ever dedicated a full encyclical to this question before. Francis sent a message to the G7 in 2024, and Benedict XVI made some references in his speeches, but nothing at the doctrinal level of an encyclical.',
      'The 15 May signature falls on the exact 135th anniversary of Rerum Novarum. The date is chosen on purpose: it ties both documents together as parallel responses to two industrial revolutions a century and a third apart. The continuity of the social doctrine is written into the very gesture.',
    ],
    parallelTitle: 'Rerum Novarum (1891) and Magnifica humanitas (2026)',
    parallelIntro: 'Placing the two encyclicals side by side, 135 years apart, is not just rhetorical. Both face an industrial revolution and tackle it with the same method. What changes is the context:',
    comparisons: [
      { title: 'The revolution underneath', old: 'The first industrial revolution: steam, factory, mass urbanisation, industrial capitalism.', new: 'Today’s revolution: artificial intelligence, automation of intellectual work, global digital platforms.' },
      { title: 'Where dignity is wounded', old: 'The factory worker: very long hours, unjust wages, no recognised collective rights.', new: 'The person facing a machine that decides: job loss, algorithmic surveillance, automated decisions that hit basic rights.' },
      { title: 'What it argues against', old: 'Extreme economic liberalism and materialist socialism.', new: 'Technological determinism and technocracy without democratic control.' },
      { title: 'What it proposes', old: 'Just wage, right of association, property as a natural right, social function of capital.', new: 'International AI governance, the right to know how an algorithm decides, real human oversight, dignity as the ultimate limit.' },
    ],
    themesTitle: 'What the encyclical will deal with',
    themesIntro: 'Based on what Leo XIV has been saying during his first year (the G7 message on AI, the speech to the Diplomatic Corps, his intervention in Davos), the encyclical will probably move around five questions:',
    themes: [
      { title: 'The person is not a data point', body: 'AI tends to reduce the person to a statistical pattern. The encyclical reminds us that every person is an image of God, not a user profile, and that this is the line that cannot be crossed.' },
      { title: 'Work when machines think', body: 'It follows the line of Laborem Exercens (1981). How do we protect dignified work when AI takes over tasks that people used to do? Basic income, lifelong training and the right to meaningful work come up here.' },
      { title: 'Truth, disinformation and freedom of conscience', body: 'Generative AI, deepfakes, manipulation at scale. The encyclical calls for a new ethics of public truth and defends the right not to be manipulated by an algorithm.' },
      { title: 'A global governance of AI', body: 'It picks up the idea John XXIII launched in Pacem in terris (1963) about a supranational authority. Applied now to AI: coordinated regulation between states, rather than leaving it to a handful of companies.' },
      { title: 'The most vulnerable', body: 'Children, the elderly, migrants, people with disabilities. AI can widen or close their access to basic rights. The encyclical returns to the option for the weakest, in line with the integral ecology of Laudato si’.' },
    ],
    contextTitle: 'Where this fits in the pontificate',
    contextBody: 'AI has been a clear priority for Leo XIV from the start. In his first speech to the College of Cardinals, in May 2025, he already said that AI was a question on the same scale as the one Rerum Novarum had to face. His G7 message in Rome on AI was even more direct: "no machine should decide who lives and who dies". Magnifica humanitas closes that first year of pontificate and opens the doctrinal ground for the Spain trip. The arguments of the text will almost certainly come back in his speech to the Congress (8 June) and in his meeting with civil society at the Movistar Arena (7 June).',
    watchTitle: 'How to read and follow the encyclical',
    watchBody: 'The full text of Magnifica humanitas will be published on 25 May at vatican.va in the official Vatican languages (Latin, Italian, Spanish, English, French, German, Portuguese, Polish). The official presentation will be at 11:30 in the Synod Hall and will be broadcast live by Vatican News (vaticannews.va, YouTube Vatican Media). The signed PDF will be available for free download. The Spanish Episcopal Conference and dioceses are preparing pastoral materials to distribute together with the encyclical during the Apostolic Journey of June.',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What is Magnifica humanitas?', a: 'It is Pope Leo XIV’s first encyclical, dedicated to human dignity in the age of artificial intelligence. It will be published on 25 May 2026.' },
      { q: 'When is Magnifica humanitas published?', a: 'The text will be made public on 25 May 2026 at 11:30 in the Vatican Synod Hall. The Pope’s signature is dated 15 May, 135th anniversary of Rerum Novarum.' },
      { q: 'Why is it called Magnifica humanitas?', a: 'The Latin title means "Magnificent humanity" or "Magnificent human condition". It emphasises the dignity and uniqueness of the human person in the face of AI technologies.' },
      { q: 'Is it the first encyclical on artificial intelligence?', a: 'Yes. It is the first time a Pontiff dedicates a full encyclical to AI. Previously Francis had sent a message to the G7 (2024) and Benedict XVI had made references in speeches, but Magnifica humanitas is the first doctrinal document of encyclical rank on the topic.' },
      { q: 'Where can I download the PDF?', a: 'From 25 May 2026, the official PDF will be available on vatican.va in the main languages. Also on the portals of the national episcopal conferences. On this page we will link to the PDF as soon as it is published.' },
      { q: 'What relationship does it have with the Pope’s visit to Spain?', a: 'Magnifica humanitas is published 12 days before the Apostolic Journey to Spain (6-12 Jun 2026). The keys of the encyclical are expected to appear in the Pope’s speech to the Congress of Deputies (8 Jun) and in the "Weaving networks" meeting at the Movistar Arena (7 Jun).' },
    ],
    updateTitle: 'Update notice',
    updateBody: 'This page will be updated on 25 May 2026 with the link to the official PDF, verified quotations from the text and structural summary. Until then, we collect the information advanced by the Holy See Press Office on 19 May 2026.',
    relatedTitle: 'Related pages',
    related: [
      { href: '/papa-leon-xiv', text: 'Full biography of Pope Leo XIV' },
      { href: '/papa-congreso-diputados', text: 'Speech to Congress (8 Jun) · where the encyclical’s arguments will be developed' },
      { href: '/discursos', text: 'Key speeches of Pope Leo XIV' },
      { href: '/programa', text: 'Programme of the Apostolic Journey to Spain' },
      { href: '/alzad-la-mirada', text: 'Journey motto · "Lift up your eyes" (Jn 4:35)' },
    ],
  },
  it: {
    breadcrumbHome: 'Home', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · prima enciclica di Papa Leone XIV',
    subtitle: 'Pubblicazione: 25 maggio 2026 · firmata il 15 maggio, 135° anniversario della Rerum Novarum · tema: la custodia della persona umana nell’era dell’intelligenza artificiale.',
    badge: 'Pubblicazione imminente',
    intro: '«Magnifica humanitas» è il titolo della prima lettera enciclica di Papa Leone XIV, dedicata a «la custodia della persona umana nel tempo dell’intelligenza artificiale». Il documento sarà pubblicato il 25 maggio 2026 e porta la firma del Pontefice in data 15 maggio, coincidente deliberatamente con il 135° anniversario della promulgazione della Rerum Novarum (1891), l’enciclica di Leone XIII che inaugurò la Dottrina Sociale della Chiesa. La presentazione ufficiale si terrà nell’Aula del Sinodo, alla presenza del Papa, alle ore 11:30 del 25 maggio. Questa enciclica precede di 12 giorni il Viaggio Apostolico in Spagna (6-12 giugno 2026) e prevedibilmente segnerà il tono del discorso del Papa al Congresso dei Deputati l’8 giugno.',
    quickFacts: [
      { label: 'Titolo', value: 'Magnifica humanitas' }, { label: 'Data di pubblicazione', value: '25 maggio 2026' }, { label: 'Data della firma', value: '15 maggio 2026' },
      { label: 'Presentazione ufficiale', value: 'Aula del Sinodo, 11:30' }, { label: 'Tema centrale', value: 'Persona umana nell’era dell’IA' }, { label: 'Continuità', value: 'Rerum Novarum (1891) di Leone XIII' },
    ],
    whyTitle: 'Perché è un documento storico',
    whyBody: [
      'Magnifica humanitas è la prima enciclica del pontificato di Robert Francis Prevost, eletto Papa l’8 maggio 2025 con il nome di Leone XIV. La scelta del nome puntava già a questo momento: nel suo primo discorso al Collegio Cardinalizio, il nuovo Pontefice spiegò di assumere il nome di Leone in omaggio a Leone XIII, autore della Rerum Novarum (1891), enciclica pioniera della Dottrina Sociale della Chiesa di fronte alla prima rivoluzione industriale.',
      'Leone XIV propone ora una risposta analoga alla nuova rivoluzione industriale del nostro tempo: l’intelligenza artificiale. L’enciclica «Magnifica humanitas» si propone di illuminare eticamente l’impatto delle tecnologie di IA sulla dignità umana, il lavoro, la libertà di coscienza e la giustizia sociale. È la prima volta che un Pontefice dedica un’intera enciclica alla questione dell’IA, dopo messaggi parziali di Francesco al G7 (2024) e riferimenti in discorsi di Benedetto XVI.',
      'La firma del 15 maggio, coincidente con l’esatto 135° anniversario della Rerum Novarum, non è casuale: lega simbolicamente i due documenti come risposte parallele a due rivoluzioni industriali distanti 135 anni. La continuità della dottrina sociale è resa esplicita nel gesto liturgico-documentale.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'Il parallelismo tra le due encicliche, separate da 135 anni, è deliberato. Struttura comparata dei loro contesti e risposte:',
    comparisons: [
      { title: 'Rivoluzione tecnica di fondo', old: 'Prima rivoluzione industriale: macchina a vapore, fabbrica, urbanizzazione di massa, capitalismo di fabbrica.', new: 'Quarta rivoluzione industriale: intelligenza artificiale, automazione cognitiva, piattaforme digitali globali.' },
      { title: 'Questione centrale di dignità', old: 'La condizione dell’operaio industriale: giornate lunghe, salari ingiusti, assenza di diritti collettivi.', new: 'La condizione della persona davanti alla macchina intelligente: sostituzione lavorativa, sorveglianza algoritmica, decisioni automatizzate che incidono sui diritti.' },
      { title: 'Avversari dottrinali', old: 'Liberalismo economico estremo e socialismo materialista.', new: 'Determinismo tecnologico e tecnocrazia senza controllo democratico.' },
      { title: 'Proposta positiva', old: 'Salario giusto, diritto di associazione, proprietà come diritto naturale, funzione sociale del capitale.', new: 'Governance internazionale dell’IA, diritto alla tracciabilità algoritmica, supervisione umana sostanziale, dignità come criterio ultimo.' },
    ],
    themesTitle: 'Possibili assi tematici dell’enciclica',
    themesIntro: 'Sulla base dei discorsi precedenti di Leone XIV (messaggio al G7 sull’IA nel suo primo anno, discorso al Corpo Diplomatico, intervento a Davos), l’enciclica potrebbe sviluppare cinque grandi linee:',
    themes: [
      { title: 'Dignità e singolarità della persona umana', body: 'L’IA non può ridurre la persona a un pattern statistico. L’enciclica riaffermerebbe l’immagine di Dio come fondamento ontologico della dignità, contro ogni tentativo riduzionista.' },
      { title: 'Lavoro nell’era dell’automazione', body: 'Continuità di Laborem Exercens (1981). Come proteggere il lavoro dignitoso quando l’IA sostituisce compiti cognitivi. Reddito di base, formazione continua, diritto a un lavoro significativo.' },
      { title: 'Verità, disinformazione e libertà di coscienza', body: 'IA generativa, deepfake, manipolazione di massa. L’enciclica invocherebbe una nuova etica della verità pubblica e la tutela del diritto a non essere manipolati algoritmicamente.' },
      { title: 'Governance internazionale dell’IA', body: 'Appello a un’autorità sovranazionale sulla scia di quanto proposto da Giovanni XXIII in Pacem in terris (1963) per l’ordine mondiale. Regolazione coordinata che non rimanga al criterio di poche aziende.' },
      { title: 'Vulnerabilità e bene comune', body: 'Bambini, anziani, migranti, persone con disabilità: come l’IA può ampliare o ridurre il loro accesso ai diritti. Principio della preferenza per i più deboli, in connessione con l’ecologia integrale di Laudato si’.' },
    ],
    contextTitle: 'Contesto del pontificato',
    contextBody: 'Fin dalla sua elezione, Leone XIV ha posto l’IA come priorità programmatica. Nel suo primo discorso al Collegio Cardinalizio (maggio 2025) esplicitò che l’IA era una questione analoga a quella sollevata dalla Rerum Novarum. Il suo messaggio al G7 a Roma sull’IA proseguì quella linea, denunciando che «nessuna macchina dovrebbe decidere chi vive e chi muore». Magnifica humanitas culmina quel primo anno di pontificato e apre lo scenario dottrinale del viaggio in Spagna, dove Leone XIV si rivolgerà al Congresso dei Deputati (8 giu) e alla società civile al Movistar Arena (7 giu). Ci si attende che le chiavi dell’enciclica risuonino in entrambi i discorsi.',
    watchTitle: 'Come leggere e seguire l’enciclica',
    watchBody: 'Il testo integrale di Magnifica humanitas sarà pubblicato il 25 maggio su vatican.va nelle lingue ufficiali del Vaticano (latino, italiano, spagnolo, inglese, francese, tedesco, portoghese, polacco). La presentazione ufficiale sarà alle 11:30 nell’Aula del Sinodo e sarà trasmessa in diretta da Vatican News (vaticannews.va, YouTube Vatican Media). Il PDF firmato sarà scaricabile gratuitamente. La Conferenza Episcopale Spagnola e le diocesi stanno preparando materiali pastorali da distribuire insieme all’enciclica durante il Viaggio Apostolico di giugno.',
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'Cos’è Magnifica humanitas?', a: 'È la prima enciclica di Papa Leone XIV, dedicata alla dignità umana nell’era dell’intelligenza artificiale. Si pubblica il 25 maggio 2026.' },
      { q: 'Quando si pubblica Magnifica humanitas?', a: 'Il testo sarà reso pubblico il 25 maggio 2026 alle 11:30 nell’Aula del Sinodo del Vaticano. La firma del Papa è datata 15 maggio, 135° anniversario della Rerum Novarum.' },
      { q: 'Perché si chiama Magnifica humanitas?', a: 'Il titolo latino significa «Magnifica umanità» o «Magnifica condizione umana». Sottolinea la dignità e singolarità della persona umana di fronte alle tecnologie di IA.' },
      { q: 'È la prima enciclica sull’intelligenza artificiale?', a: 'Sì. È la prima volta che un Pontefice dedica un’intera enciclica all’IA. In precedenza Francesco aveva inviato un messaggio al G7 (2024) e Benedetto XVI aveva fatto riferimenti in discorsi, ma Magnifica humanitas è il primo documento dottrinale di rango enciclica sul tema.' },
      { q: 'Dove posso scaricare il PDF?', a: 'A partire dal 25 maggio 2026, il PDF ufficiale sarà disponibile su vatican.va nelle lingue principali. Anche nei portali delle conferenze episcopali nazionali. In questa pagina collegheremo al PDF non appena sarà pubblicato.' },
      { q: 'Che rapporto ha con la visita del Papa in Spagna?', a: 'Magnifica humanitas si pubblica 12 giorni prima del Viaggio Apostolico in Spagna (6-12 giu 2026). È prevedibile che le chiavi dell’enciclica appaiano nel discorso del Papa al Congresso dei Deputati (8 giu) e all’incontro «Tessere reti» al Movistar Arena (7 giu).' },
    ],
    updateTitle: 'Avviso di aggiornamento',
    updateBody: 'Questa pagina sarà aggiornata il 25 maggio 2026 con il link al PDF ufficiale, citazioni verificate dal testo e riassunto strutturale. Fino ad allora, raccogliamo le informazioni anticipate dalla Sala Stampa della Santa Sede il 19 maggio 2026.',
    relatedTitle: 'Pagine correlate',
    related: [
      { href: '/papa-leon-xiv', text: 'Biografia completa di Papa Leone XIV' },
      { href: '/papa-congreso-diputados', text: 'Discorso al Congresso (8 giu) — dove si svilupperanno le tesi dell’enciclica' },
      { href: '/discursos', text: 'Discorsi chiave di Papa Leone XIV' },
      { href: '/programa', text: 'Programma del Viaggio Apostolico in Spagna' },
      { href: '/alzad-la-mirada', text: 'Motto del viaggio · «Alzate gli occhi» (Gv 4,35)' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · première encyclique du Pape Léon XIV',
    subtitle: 'Publication : 25 mai 2026 · signée le 15 mai, 135e anniversaire de Rerum Novarum · thème : la garde de la personne humaine à l’ère de l’intelligence artificielle.',
    badge: 'Publication imminente',
    intro: '« Magnifica humanitas » est le titre de la première lettre encyclique du Pape Léon XIV, consacrée à « la garde de la personne humaine au temps de l’intelligence artificielle ». Le document sera publié le 25 mai 2026 et porte la signature du Pontife datée du 15 mai, coïncidant délibérément avec le 135e anniversaire de la promulgation de Rerum Novarum (1891), l’encyclique de Léon XIII qui inaugura la Doctrine Sociale de l’Église. La présentation officielle aura lieu à la Salle du Synode, en présence du Pape, à 11h30 le 25 mai. Cette encyclique précède de 12 jours le Voyage apostolique en Espagne (6-12 juin 2026) et donnera prévisiblement le ton au discours du Pape au Congrès des députés le 8 juin.',
    quickFacts: [
      { label: 'Titre', value: 'Magnifica humanitas' }, { label: 'Date de publication', value: '25 mai 2026' }, { label: 'Date de signature', value: '15 mai 2026' },
      { label: 'Présentation officielle', value: 'Salle du Synode, 11h30' }, { label: 'Thème central', value: 'Personne humaine à l’ère de l’IA' }, { label: 'Continuité', value: 'Rerum Novarum (1891) de Léon XIII' },
    ],
    whyTitle: 'Pourquoi c’est un document historique',
    whyBody: [
      'Magnifica humanitas est la première encyclique du pontificat de Robert Francis Prevost, élu Pape le 8 mai 2025 sous le nom de Léon XIV. Le choix du nom pointait déjà vers ce moment : dans son premier discours au Collège cardinalice, le nouveau Pontife expliqua qu’il prenait le nom de Léon en hommage à Léon XIII, auteur de Rerum Novarum (1891), encyclique pionnière de la Doctrine Sociale de l’Église face à la première révolution industrielle.',
      'Léon XIV propose maintenant une réponse analogue à la nouvelle révolution industrielle de notre temps : l’intelligence artificielle. L’encyclique « Magnifica humanitas » se propose d’éclairer éthiquement l’impact des technologies d’IA sur la dignité humaine, le travail, la liberté de conscience et la justice sociale. C’est la première fois qu’un Pontife consacre une encyclique entière à la question de l’IA, après des messages partiels de François au G7 (2024) et des références dans des discours de Benoît XVI.',
      'La signature du 15 mai, coïncidant avec le 135e anniversaire exact de Rerum Novarum, n’est pas fortuite : elle relie symboliquement les deux documents comme des réponses parallèles à deux révolutions industrielles séparées de 135 ans. La continuité de la doctrine sociale est rendue explicite par le geste liturgique-documentaire.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'Le parallélisme entre les deux encycliques, séparées de 135 ans, est délibéré. Structure comparée de leurs contextes et réponses :',
    comparisons: [
      { title: 'Révolution technique de fond', old: 'Première révolution industrielle : machine à vapeur, usine, urbanisation massive, capitalisme d’usine.', new: 'Quatrième révolution industrielle : intelligence artificielle, automatisation cognitive, plateformes numériques globales.' },
      { title: 'Question centrale de dignité', old: 'La condition de l’ouvrier industriel : journées longues, salaires injustes, absence de droits collectifs.', new: 'La condition de la personne face à la machine intelligente : substitution du travail, surveillance algorithmique, décisions automatisées affectant les droits.' },
      { title: 'Adversaires doctrinaux', old: 'Libéralisme économique extrême et socialisme matérialiste.', new: 'Déterminisme technologique et technocratie sans contrôle démocratique.' },
      { title: 'Proposition positive', old: 'Salaire juste, droit d’association, propriété comme droit naturel, fonction sociale du capital.', new: 'Gouvernance internationale de l’IA, droit à la traçabilité algorithmique, supervision humaine substantielle, dignité comme critère ultime.' },
    ],
    themesTitle: 'Axes thématiques possibles de l’encyclique',
    themesIntro: 'Sur la base des discours antérieurs de Léon XIV (message au G7 sur l’IA dans sa première année, discours au Corps diplomatique, intervention à Davos), l’encyclique pourrait développer cinq grandes lignes :',
    themes: [
      { title: 'Dignité et singularité de la personne humaine', body: 'L’IA ne peut réduire la personne à un schéma statistique. L’encyclique réaffirmerait l’image de Dieu comme fondement ontologique de la dignité, contre toute tentative réductionniste.' },
      { title: 'Travail à l’ère de l’automatisation', body: 'Continuité de Laborem Exercens (1981). Comment protéger le travail digne quand l’IA remplace des tâches cognitives. Revenu de base, formation continue, droit à un travail significatif.' },
      { title: 'Vérité, désinformation et liberté de conscience', body: 'IA générative, deepfakes, manipulation massive. L’encyclique appellerait à une nouvelle éthique de la vérité publique et à la protection du droit à ne pas être manipulé algorithmiquement.' },
      { title: 'Gouvernance internationale de l’IA', body: 'Appel à une autorité supranationale dans la lignée de la proposition de Pacem in terris (1963) de Jean XXIII pour l’ordre mondial. Régulation coordonnée non laissée au gré de quelques entreprises.' },
      { title: 'Vulnérabilité et bien commun', body: 'Enfants, personnes âgées, migrants, personnes handicapées : comment l’IA peut élargir ou réduire leur accès aux droits. Principe de préférence pour les plus faibles, en connexion avec l’écologie intégrale de Laudato si’.' },
    ],
    contextTitle: 'Contexte du pontificat',
    contextBody: 'Depuis son élection, Léon XIV a placé l’IA comme priorité programmatique. Dans son premier discours au Collège cardinalice (mai 2025), il a explicité que l’IA était une question analogue à celle posée par Rerum Novarum. Son message au G7 à Rome sur l’IA a poursuivi cette ligne, dénonçant qu’« aucune machine ne devrait décider qui vit et qui meurt ». Magnifica humanitas culmine cette première année de pontificat et ouvre la scène doctrinale du voyage en Espagne, où Léon XIV s’adressera au Congrès des députés (8 juin) et à la société civile au Movistar Arena (7 juin). Les clés de l’encyclique devraient résonner dans les deux discours.',
    watchTitle: 'Comment lire et suivre l’encyclique',
    watchBody: 'Le texte intégral de Magnifica humanitas sera publié le 25 mai sur vatican.va dans les langues officielles du Vatican (latin, italien, espagnol, anglais, français, allemand, portugais, polonais). La présentation officielle sera à 11h30 à la Salle du Synode et sera retransmise en direct par Vatican News (vaticannews.va, YouTube Vatican Media). Le PDF signé sera téléchargeable gratuitement. La Conférence Épiscopale Espagnole et les diocèses préparent des matériels pastoraux à distribuer avec l’encyclique durant le Voyage apostolique de juin.',
    faqTitle: 'Questions fréquentes',
    faq: [
      { q: 'Qu’est-ce que Magnifica humanitas ?', a: 'C’est la première encyclique du Pape Léon XIV, consacrée à la dignité humaine à l’ère de l’intelligence artificielle. Elle se publie le 25 mai 2026.' },
      { q: 'Quand se publie Magnifica humanitas ?', a: 'Le texte sera rendu public le 25 mai 2026 à 11h30 dans la Salle du Synode du Vatican. La signature du Pape est datée du 15 mai, 135e anniversaire de Rerum Novarum.' },
      { q: 'Pourquoi s’appelle-t-elle Magnifica humanitas ?', a: 'Le titre latin signifie « Magnifique humanité » ou « Magnifique condition humaine ». Il souligne la dignité et la singularité de la personne humaine face aux technologies d’IA.' },
      { q: 'Est-ce la première encyclique sur l’intelligence artificielle ?', a: 'Oui. C’est la première fois qu’un Pontife consacre une encyclique entière à l’IA. Auparavant, François avait envoyé un message au G7 (2024) et Benoît XVI avait fait des références dans des discours, mais Magnifica humanitas est le premier document doctrinal de rang encyclique sur le sujet.' },
      { q: 'Où puis-je télécharger le PDF ?', a: 'À partir du 25 mai 2026, le PDF officiel sera disponible sur vatican.va dans les principales langues. Aussi sur les portails des conférences épiscopales nationales. Sur cette page, nous renverrons au PDF dès qu’il sera publié.' },
      { q: 'Quel rapport avec la visite du Pape en Espagne ?', a: 'Magnifica humanitas se publie 12 jours avant le Voyage apostolique en Espagne (6-12 juin 2026). Les clés de l’encyclique devraient apparaître dans le discours du Pape au Congrès des députés (8 juin) et à la rencontre « Tisser des réseaux » au Movistar Arena (7 juin).' },
    ],
    updateTitle: 'Avis de mise à jour',
    updateBody: 'Cette page sera mise à jour le 25 mai 2026 avec le lien vers le PDF officiel, des citations vérifiées du texte et un résumé structurel. Jusque-là, nous rassemblons les informations annoncées par la Salle de Presse du Saint-Siège le 19 mai 2026.',
    relatedTitle: 'Pages liées',
    related: [
      { href: '/papa-leon-xiv', text: 'Biographie complète du Pape Léon XIV' },
      { href: '/papa-congreso-diputados', text: 'Discours au Congrès (8 juin) — où les thèses de l’encyclique seront développées' },
      { href: '/discursos', text: 'Discours clés du Pape Léon XIV' },
      { href: '/programa', text: 'Programme du Voyage apostolique en Espagne' },
      { href: '/alzad-la-mirada', text: 'Devise du voyage · « Levez les yeux » (Jn 4, 35)' },
    ],
  },
  de: {
    breadcrumbHome: 'Startseite', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · erste Enzyklika von Papst Leo XIV.',
    subtitle: 'Veröffentlichung: 25. Mai 2026 · unterzeichnet am 15. Mai, 135. Jahrestag von Rerum Novarum · Thema: die Sorge um die menschliche Person im Zeitalter der künstlichen Intelligenz.',
    badge: 'Bevorstehende Veröffentlichung',
    intro: '„Magnifica humanitas" ist der Titel der ersten Enzyklika von Papst Leo XIV., gewidmet der „Sorge um die menschliche Person in der Zeit der künstlichen Intelligenz". Das Dokument wird am 25. Mai 2026 veröffentlicht und trägt die Unterschrift des Pontifex vom 15. Mai, die bewusst mit dem 135. Jahrestag der Verkündung der Rerum Novarum (1891) zusammenfällt, der Enzyklika Leos XIII., die die Soziallehre der Kirche begründete. Die offizielle Vorstellung findet am 25. Mai um 11:30 Uhr in der Synodenaula in Anwesenheit des Papstes statt. Diese Enzyklika geht der Apostolischen Reise nach Spanien (6.-12. Juni 2026) um 12 Tage voraus und wird voraussichtlich den Ton der Rede des Papstes vor dem spanischen Abgeordnetenkongress am 8. Juni prägen.',
    quickFacts: [
      { label: 'Titel', value: 'Magnifica humanitas' }, { label: 'Veröffentlichungsdatum', value: '25. Mai 2026' }, { label: 'Unterzeichnungsdatum', value: '15. Mai 2026' },
      { label: 'Offizielle Vorstellung', value: 'Synodenaula, 11:30' }, { label: 'Zentrales Thema', value: 'Menschliche Person im KI-Zeitalter' }, { label: 'Kontinuität', value: 'Rerum Novarum (1891) von Leo XIII.' },
    ],
    whyTitle: 'Warum es ein historisches Dokument ist',
    whyBody: [
      'Magnifica humanitas ist die erste Enzyklika des Pontifikats von Robert Francis Prevost, am 8. Mai 2025 zum Papst gewählt mit dem Namen Leo XIV. Die Wahl des Namens wies bereits auf diesen Moment hin: In seiner ersten Ansprache an das Kardinalskollegium erklärte der neue Pontifex, er nehme den Namen Leo in Hommage an Leo XIII., Autor der Rerum Novarum (1891), die Pioniertat der Soziallehre der Kirche angesichts der ersten industriellen Revolution.',
      'Leo XIV. schlägt nun eine analoge Antwort auf die neue industrielle Revolution unserer Zeit vor: die künstliche Intelligenz. Die Enzyklika „Magnifica humanitas" will den Einfluss von KI-Technologien auf Menschenwürde, Arbeit, Gewissensfreiheit und soziale Gerechtigkeit ethisch erhellen. Es ist das erste Mal, dass ein Pontifex eine vollständige Enzyklika der Frage der KI widmet, nach Teilbotschaften von Franziskus an die G7 (2024) und Hinweisen in Reden von Benedikt XVI.',
      'Die Unterzeichnung am 15. Mai, die mit dem genauen 135. Jahrestag der Rerum Novarum zusammenfällt, ist kein Zufall: sie verbindet beide Dokumente symbolisch als parallele Antworten auf zwei industrielle Revolutionen, die 135 Jahre voneinander getrennt sind. Die Kontinuität der Soziallehre wird in der liturgisch-dokumentarischen Geste explizit.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'Der Parallelismus zwischen den beiden Enzykliken, getrennt durch 135 Jahre, ist gewollt. Vergleichende Struktur ihrer Kontexte und Antworten:',
    comparisons: [
      { title: 'Technische Grundrevolution', old: 'Erste industrielle Revolution: Dampfmaschine, Fabrik, Massenurbanisierung, Fabrikkapitalismus.', new: 'Vierte industrielle Revolution: künstliche Intelligenz, kognitive Automatisierung, globale digitale Plattformen.' },
      { title: 'Zentrale Würdefrage', old: 'Die Bedingung des Industriearbeiters: lange Arbeitszeiten, ungerechte Löhne, fehlende Kollektivrechte.', new: 'Die Bedingung der Person vor der intelligenten Maschine: Arbeitsersatz, algorithmische Überwachung, automatisierte Entscheidungen, die Rechte betreffen.' },
      { title: 'Doktrinäre Gegner', old: 'Extremer Wirtschaftsliberalismus und materialistischer Sozialismus.', new: 'Technologischer Determinismus und Technokratie ohne demokratische Kontrolle.' },
      { title: 'Positiver Vorschlag', old: 'Gerechter Lohn, Vereinigungsrecht, Eigentum als Naturrecht, soziale Funktion des Kapitals.', new: 'Internationale KI-Governance, Recht auf algorithmische Nachvollziehbarkeit, substantielle menschliche Aufsicht, Würde als letztes Kriterium.' },
    ],
    themesTitle: 'Mögliche thematische Achsen der Enzyklika',
    themesIntro: 'Auf der Grundlage der bisherigen Reden Leos XIV. (G7-Botschaft zur KI in seinem ersten Jahr, Rede vor dem Diplomatischen Korps, Auftritt in Davos) könnte die Enzyklika fünf große Linien entfalten:',
    themes: [
      { title: 'Würde und Einzigartigkeit der menschlichen Person', body: 'KI kann die Person nicht auf ein statistisches Muster reduzieren. Die Enzyklika würde das Bild Gottes als ontologische Grundlage der Würde bekräftigen, gegen jeden reduktionistischen Versuch.' },
      { title: 'Arbeit im Zeitalter der Automatisierung', body: 'Kontinuität von Laborem Exercens (1981). Wie die Würde der Arbeit zu schützen ist, wenn KI kognitive Aufgaben ersetzt. Grundeinkommen, lebenslange Bildung, Recht auf sinnvolle Arbeit.' },
      { title: 'Wahrheit, Desinformation und Gewissensfreiheit', body: 'Generative KI, Deepfakes, Massenmanipulation. Die Enzyklika würde eine neue Ethik der öffentlichen Wahrheit und den Schutz des Rechts, nicht algorithmisch manipuliert zu werden, einfordern.' },
      { title: 'Internationale KI-Governance', body: 'Aufruf zu einer supranationalen Autorität in der Linie des Vorschlags von Johannes XXIII. in Pacem in terris (1963) für die Weltordnung. Koordinierte Regulierung, die nicht dem Ermessen weniger Unternehmen überlassen ist.' },
      { title: 'Verwundbarkeit und Gemeinwohl', body: 'Kinder, Alte, Migranten, Menschen mit Behinderung: wie KI ihren Zugang zu Rechten erweitern oder einschränken kann. Vorzugsprinzip für die Schwächsten, im Zusammenhang mit der ganzheitlichen Ökologie von Laudato si’.' },
    ],
    contextTitle: 'Pontifikatskontext',
    contextBody: 'Seit seiner Wahl hat Leo XIV. die KI als programmatische Priorität gesetzt. In seiner ersten Ansprache an das Kardinalskollegium (Mai 2025) machte er deutlich, dass die KI eine Frage analog zur in Rerum Novarum aufgeworfenen sei. Seine G7-Botschaft in Rom zur KI setzte diese Linie fort und prangerte an, dass „keine Maschine entscheiden sollte, wer lebt und wer stirbt". Magnifica humanitas krönt dieses erste Jahr des Pontifikats und öffnet die doktrinäre Bühne für die Spanienreise, wo sich Leo XIV. an den Abgeordnetenkongress (8. Juni) und an die Zivilgesellschaft in der Movistar Arena (7. Juni) wenden wird. Die Schlüssel der Enzyklika werden in beiden Reden erwartet.',
    watchTitle: 'Wie man die Enzyklika lesen und verfolgen kann',
    watchBody: 'Der vollständige Text von Magnifica humanitas wird am 25. Mai auf vatican.va in den offiziellen Vatikansprachen (Latein, Italienisch, Spanisch, Englisch, Französisch, Deutsch, Portugiesisch, Polnisch) veröffentlicht. Die offizielle Vorstellung wird um 11:30 Uhr in der Synodenaula stattfinden und live von Vatican News (vaticannews.va, YouTube Vatican Media) übertragen. Das unterzeichnete PDF wird kostenlos zum Download verfügbar sein. Die Spanische Bischofskonferenz und die Diözesen bereiten pastorale Materialien vor, die zusammen mit der Enzyklika während der Apostolischen Reise im Juni verteilt werden.',
    faqTitle: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Was ist Magnifica humanitas?', a: 'Es ist die erste Enzyklika von Papst Leo XIV., gewidmet der Menschenwürde im Zeitalter der künstlichen Intelligenz. Sie wird am 25. Mai 2026 veröffentlicht.' },
      { q: 'Wann wird Magnifica humanitas veröffentlicht?', a: 'Der Text wird am 25. Mai 2026 um 11:30 Uhr in der Synodenaula des Vatikans veröffentlicht. Die Unterschrift des Papstes ist auf den 15. Mai datiert, dem 135. Jahrestag von Rerum Novarum.' },
      { q: 'Warum heißt sie Magnifica humanitas?', a: 'Der lateinische Titel bedeutet „Großartige Menschlichkeit" oder „Großartige menschliche Verfassung". Er unterstreicht die Würde und Einzigartigkeit der menschlichen Person gegenüber KI-Technologien.' },
      { q: 'Ist es die erste Enzyklika über künstliche Intelligenz?', a: 'Ja. Es ist das erste Mal, dass ein Pontifex eine vollständige Enzyklika der KI widmet. Zuvor hatte Franziskus eine Botschaft an die G7 (2024) gesandt und Benedikt XVI. hatte Hinweise in Reden gemacht, aber Magnifica humanitas ist das erste lehramtliche Dokument im Rang einer Enzyklika zu diesem Thema.' },
      { q: 'Wo kann ich das PDF herunterladen?', a: 'Ab dem 25. Mai 2026 wird das offizielle PDF auf vatican.va in den wichtigsten Sprachen verfügbar sein. Auch auf den Portalen der nationalen Bischofskonferenzen. Auf dieser Seite werden wir das PDF verlinken, sobald es veröffentlicht ist.' },
      { q: 'Welcher Bezug zum Papstbesuch in Spanien?', a: 'Magnifica humanitas wird 12 Tage vor der Apostolischen Reise nach Spanien (6.-12. Juni 2026) veröffentlicht. Es wird erwartet, dass die Schlüssel der Enzyklika in der Rede des Papstes vor dem Abgeordnetenkongress (8. Juni) und beim Treffen „Netze knüpfen" in der Movistar Arena (7. Juni) erscheinen.' },
    ],
    updateTitle: 'Aktualisierungshinweis',
    updateBody: 'Diese Seite wird am 25. Mai 2026 mit dem Link zum offiziellen PDF, geprüften Zitaten aus dem Text und einer strukturellen Zusammenfassung aktualisiert. Bis dahin sammeln wir die vom Presseamt des Heiligen Stuhls am 19. Mai 2026 vorab gemeldeten Informationen.',
    relatedTitle: 'Verwandte Seiten',
    related: [
      { href: '/papa-leon-xiv', text: 'Vollständige Biografie von Papst Leo XIV.' },
      { href: '/papa-congreso-diputados', text: 'Rede vor dem Kongress (8. Juni) — wo die Thesen der Enzyklika entwickelt werden' },
      { href: '/discursos', text: 'Wichtige Reden von Papst Leo XIV.' },
      { href: '/programa', text: 'Programm der Apostolischen Reise nach Spanien' },
      { href: '/alzad-la-mirada', text: 'Leitspruch der Reise · „Erhebt eure Augen" (Joh 4,35)' },
    ],
  },
  pt: {
    breadcrumbHome: 'Início', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · primeira encíclica do Papa Leão XIV',
    subtitle: 'Publicação: 25 de maio de 2026 · assinada a 15 de maio, 135º aniversário da Rerum Novarum · tema: o cuidado da pessoa humana no tempo da inteligência artificial.',
    badge: 'Publicação iminente',
    intro: '«Magnifica humanitas» é o título da primeira carta encíclica do Papa Leão XIV, dedicada a «o cuidado da pessoa humana no tempo da inteligência artificial». O documento será publicado a 25 de maio de 2026 e leva a assinatura do Pontífice com data de 15 de maio, coincidindo deliberadamente com o 135º aniversário da promulgação da Rerum Novarum (1891), a encíclica de Leão XIII que inaugurou a Doutrina Social da Igreja. A apresentação oficial realizar-se-á na Sala do Sínodo, na presença do Papa, às 11:30 do dia 25 de maio. Esta encíclica antecede em 12 dias a Viagem Apostólica a Espanha (6-12 de junho de 2026) e previsivelmente marcará o tom do discurso do Papa no Congresso dos Deputados a 8 de junho.',
    quickFacts: [
      { label: 'Título', value: 'Magnifica humanitas' }, { label: 'Data de publicação', value: '25 de maio de 2026' }, { label: 'Data da assinatura', value: '15 de maio de 2026' },
      { label: 'Apresentação oficial', value: 'Sala do Sínodo, 11:30' }, { label: 'Tema central', value: 'Pessoa humana na era da IA' }, { label: 'Continuidade', value: 'Rerum Novarum (1891) de Leão XIII' },
    ],
    whyTitle: 'Por que é um documento histórico',
    whyBody: [
      'Magnifica humanitas é a primeira encíclica do pontificado de Robert Francis Prevost, eleito Papa a 8 de maio de 2025 com o nome de Leão XIV. A escolha do nome apontava já para este momento: no seu primeiro discurso ao Colégio Cardinalício, o novo Pontífice explicou que tomava o nome de Leão em homenagem a Leão XIII, autor da Rerum Novarum (1891), encíclica pioneira da Doutrina Social da Igreja perante a primeira revolução industrial.',
      'Leão XIV propõe agora uma resposta análoga à nova revolução industrial do nosso tempo: a inteligência artificial. A encíclica «Magnifica humanitas» propõe-se iluminar eticamente o impacto das tecnologias de IA sobre a dignidade humana, o trabalho, a liberdade de consciência e a justiça social. É a primeira vez que um Pontífice dedica uma encíclica completa à questão da IA, após mensagens parciais de Francisco ao G7 (2024) e referências em discursos de Bento XVI.',
      'A assinatura a 15 de maio, coincidindo com o 135º aniversário exato da Rerum Novarum, não é casual: liga simbolicamente ambos os documentos como respostas paralelas a duas revoluções industriais separadas por 135 anos. A continuidade da doutrina social torna-se explícita no gesto litúrgico-documental.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'O paralelismo entre as duas encíclicas, separadas por 135 anos, é deliberado. Estrutura comparada dos seus contextos e respostas:',
    comparisons: [
      { title: 'Revolução técnica de fundo', old: 'Primeira revolução industrial: máquina a vapor, fábrica, urbanização maciça, capitalismo de fábrica.', new: 'Quarta revolução industrial: inteligência artificial, automação cognitiva, plataformas digitais globais.' },
      { title: 'Questão central de dignidade', old: 'A condição do operário industrial: longas jornadas, salários injustos, ausência de direitos coletivos.', new: 'A condição da pessoa perante a máquina inteligente: substituição laboral, vigilância algorítmica, decisões automatizadas que afetam direitos.' },
      { title: 'Adversários doutrinais', old: 'Liberalismo económico extremo e socialismo materialista.', new: 'Determinismo tecnológico e tecnocracia sem controlo democrático.' },
      { title: 'Proposta positiva', old: 'Salário justo, direito de associação, propriedade como direito natural, função social do capital.', new: 'Governança internacional da IA, direito à rastreabilidade algorítmica, supervisão humana substantiva, dignidade como critério último.' },
    ],
    themesTitle: 'Possíveis eixos temáticos da encíclica',
    themesIntro: 'Com base nos discursos prévios de Leão XIV (mensagem ao G7 sobre IA no seu primeiro ano, discurso ao Corpo Diplomático, intervenção em Davos), a encíclica poderia desenvolver cinco grandes linhas:',
    themes: [
      { title: 'Dignidade e singularidade da pessoa humana', body: 'A IA não pode reduzir a pessoa a um padrão estatístico. A encíclica reafirmaria a imagem de Deus como fundamento ontológico da dignidade, contra qualquer tentativa reducionista.' },
      { title: 'Trabalho na era da automação', body: 'Continuidade de Laborem Exercens (1981). Como proteger o trabalho digno quando a IA substitui tarefas cognitivas. Renda básica, formação contínua, direito ao trabalho significativo.' },
      { title: 'Verdade, desinformação e liberdade de consciência', body: 'IA generativa, deepfakes, manipulação massiva. A encíclica clamaria por uma nova ética da verdade pública e pela proteção do direito a não ser manipulado algoritmicamente.' },
      { title: 'Governança internacional da IA', body: 'Apelo a uma autoridade supranacional na linha da proposta de Pacem in terris (1963) de João XXIII para a ordem mundial. Regulação coordenada não deixada ao critério de poucas empresas.' },
      { title: 'Vulnerabilidade e bem comum', body: 'Crianças, idosos, migrantes, pessoas com deficiência: como a IA pode ampliar ou reduzir o seu acesso a direitos. Princípio da preferência pelos mais fracos, conectando com a ecologia integral da Laudato si’.' },
    ],
    contextTitle: 'Contexto do pontificado',
    contextBody: 'Desde a sua eleição, Leão XIV colocou a IA como prioridade programática. No seu primeiro discurso ao Colégio Cardinalício (maio 2025) explicitou que a IA era uma questão análoga à colocada pela Rerum Novarum. A sua mensagem ao G7 em Roma sobre IA continuou essa linha, denunciando que «nenhuma máquina deveria decidir quem vive e quem morre». Magnifica humanitas culmina esse primeiro ano de pontificado e abre o cenário doutrinal da viagem a Espanha, onde Leão XIV se dirigirá ao Congresso dos Deputados (8 jun) e à sociedade civil no Movistar Arena (7 jun). Espera-se que as chaves da encíclica ressoem em ambos os discursos.',
    watchTitle: 'Como ler e acompanhar a encíclica',
    watchBody: 'O texto integral de Magnifica humanitas será publicado a 25 de maio em vatican.va nas línguas oficiais do Vaticano (latim, italiano, espanhol, inglês, francês, alemão, português, polaco). A apresentação oficial será às 11:30 na Sala do Sínodo e será transmitida em direto pela Vatican News (vaticannews.va, YouTube Vatican Media). O PDF assinado estará disponível para descarga gratuita. A Conferência Episcopal Espanhola e as dioceses preparam materiais pastorais para distribuir juntamente com a encíclica durante a Viagem Apostólica de junho.',
    faqTitle: 'Perguntas frequentes',
    faq: [
      { q: 'O que é Magnifica humanitas?', a: 'É a primeira encíclica do Papa Leão XIV, dedicada à dignidade humana na era da inteligência artificial. Publica-se a 25 de maio de 2026.' },
      { q: 'Quando se publica Magnifica humanitas?', a: 'O texto será tornado público a 25 de maio de 2026 às 11:30 na Sala do Sínodo do Vaticano. A assinatura do Papa está datada de 15 de maio, 135º aniversário da Rerum Novarum.' },
      { q: 'Por que se chama Magnifica humanitas?', a: 'O título latino significa «Magnífica humanidade» ou «Magnífica condição humana». Sublinha a dignidade e singularidade da pessoa humana perante as tecnologias de IA.' },
      { q: 'É a primeira encíclica sobre inteligência artificial?', a: 'Sim. É a primeira vez que um Pontífice dedica uma encíclica completa à IA. Anteriormente Francisco enviou uma mensagem ao G7 (2024) e Bento XVI fez referências em discursos, mas Magnifica humanitas é o primeiro documento doutrinal de categoria encíclica sobre o tema.' },
      { q: 'Onde posso descarregar o PDF?', a: 'A partir de 25 de maio de 2026, o PDF oficial estará disponível em vatican.va nas principais línguas. Também nos portais das conferências episcopais nacionais. Nesta página ligaremos ao PDF assim que for publicado.' },
      { q: 'Que relação tem com a visita do Papa a Espanha?', a: 'Magnifica humanitas publica-se 12 dias antes da Viagem Apostólica a Espanha (6-12 jun 2026). É previsível que as chaves da encíclica apareçam no discurso do Papa no Congresso dos Deputados (8 jun) e no encontro «Tecer redes» no Movistar Arena (7 jun).' },
    ],
    updateTitle: 'Aviso de atualização',
    updateBody: 'Esta página será atualizada a 25 de maio de 2026 com a ligação ao PDF oficial, citações verificadas do texto e resumo estrutural. Até lá, recolhemos a informação avançada pela Sala de Imprensa da Santa Sé a 19 de maio de 2026.',
    relatedTitle: 'Páginas relacionadas',
    related: [
      { href: '/papa-leon-xiv', text: 'Biografia completa do Papa Leão XIV' },
      { href: '/papa-congreso-diputados', text: 'Discurso ao Congresso (8 jun) — onde as teses da encíclica serão desenvolvidas' },
      { href: '/discursos', text: 'Discursos-chave do Papa Leão XIV' },
      { href: '/programa', text: 'Programa da Viagem Apostólica a Espanha' },
      { href: '/alzad-la-mirada', text: 'Lema da viagem · «Levantai os olhos» (Jo 4,35)' },
    ],
  },
  ca: {
    breadcrumbHome: 'Inici', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · primera encíclica del Papa Lleó XIV',
    subtitle: 'Publicació: 25 de maig de 2026 · signada el 15 de maig, 135è aniversari de Rerum Novarum · tema: la cura de la persona humana en el temps de la intel·ligència artificial.',
    badge: 'Publicació imminent',
    intro: '«Magnifica humanitas» és el títol de la primera carta encíclica del Papa Lleó XIV, dedicada a «la cura de la persona humana en el temps de la intel·ligència artificial». El document es publicarà el 25 de maig de 2026 i porta la signatura del Pontífex amb data del 15 de maig, coincidint deliberadament amb el 135è aniversari de la promulgació de la Rerum Novarum (1891), l’encíclica de Lleó XIII que va inaugurar la Doctrina Social de l’Església. La presentació oficial se celebrarà a l’Aula del Sínode, en presència del Papa, a les 11:30 del 25 de maig. Aquesta encíclica precedeix en 12 dies el Viatge Apostòlic a Espanya (6-12 de juny de 2026) i previsiblement marcarà el to del discurs del Papa al Congrés dels Diputats el 8 de juny.',
    quickFacts: [
      { label: 'Títol', value: 'Magnifica humanitas' }, { label: 'Data de publicació', value: '25 de maig de 2026' }, { label: 'Data de la signatura', value: '15 de maig de 2026' },
      { label: 'Presentació oficial', value: 'Aula del Sínode, 11:30' }, { label: 'Tema central', value: 'Persona humana en l’era de la IA' }, { label: 'Continuïtat', value: 'Rerum Novarum (1891) de Lleó XIII' },
    ],
    whyTitle: 'Per què és un document històric',
    whyBody: [
      'Magnifica humanitas és la primera encíclica del pontificat de Robert Francis Prevost, elegit Papa el 8 de maig de 2025 amb el nom de Lleó XIV. L’elecció del nom ja apuntava a aquest moment: en el seu primer discurs al Col·legi Cardenalici, el nou Pontífex va explicar que prenia el nom de Lleó en homenatge a Lleó XIII, autor de la Rerum Novarum (1891), encíclica pionera de la Doctrina Social de l’Església davant la primera revolució industrial.',
      'Lleó XIV proposa ara una resposta anàloga a la nova revolució industrial del nostre temps: la intel·ligència artificial. L’encíclica «Magnifica humanitas» es proposa il·luminar èticament l’impacte de les tecnologies d’IA sobre la dignitat humana, el treball, la llibertat de consciència i la justícia social. És la primera vegada que un Pontífex dedica una encíclica completa a la qüestió de la IA, després de missatges parcials de Francesc al G7 (2024) i referències en discursos de Benet XVI.',
      'La signatura el 15 de maig, coincidint amb el 135è aniversari exacte de Rerum Novarum, no és casual: vincula simbòlicament ambdós documents com a respostes paral·leles a dues revolucions industrials separades per 135 anys. La continuïtat de la doctrina social es fa explícita en el gest litúrgic-documental.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'El paral·lelisme entre les dues encícliques, separades per 135 anys, és deliberat. Estructura comparada dels seus contextos i respostes:',
    comparisons: [
      { title: 'Revolució tècnica de fons', old: 'Primera revolució industrial: màquina de vapor, fàbrica, urbanització massiva, capitalisme de fàbrica.', new: 'Quarta revolució industrial: intel·ligència artificial, automatització cognitiva, plataformes digitals globals.' },
      { title: 'Qüestió central de dignitat', old: 'La condició de l’obrer industrial: jornades llargues, salaris injustos, absència de drets col·lectius.', new: 'La condició de la persona davant la màquina intel·ligent: substitució laboral, vigilància algorítmica, decisions automatitzades que afecten drets.' },
      { title: 'Adversaris doctrinals', old: 'Liberalisme econòmic extrem i socialisme materialista.', new: 'Determinisme tecnològic i tecnocràcia sense control democràtic.' },
      { title: 'Proposta positiva', old: 'Salari just, dret d’associació, propietat com a dret natural, funció social del capital.', new: 'Governança internacional de la IA, dret a la traçabilitat algorítmica, supervisió humana substancial, dignitat com a criteri últim.' },
    ],
    themesTitle: 'Possibles eixos temàtics de l’encíclica',
    themesIntro: 'Sobre la base dels discursos previs de Lleó XIV (missatge al G7 sobre IA en el seu primer any, discurs al Cos Diplomàtic, intervenció a Davos), l’encíclica podria desenvolupar cinc grans línies:',
    themes: [
      { title: 'Dignitat i singularitat de la persona humana', body: 'La IA no pot reduir la persona a un patró estadístic. L’encíclica reafirmaria la imatge de Déu com a fonament ontològic de la dignitat, contra qualsevol intent reduccionista.' },
      { title: 'Treball en l’era de l’automatització', body: 'Continuïtat de Laborem Exercens (1981). Com protegir el treball digne quan la IA substitueix tasques cognitives. Renda bàsica, formació contínua, dret al treball significatiu.' },
      { title: 'Veritat, desinformació i llibertat de consciència', body: 'IA generativa, deepfakes, manipulació massiva. L’encíclica clamaria per una nova ètica de la veritat pública i per la protecció del dret a no ser manipulat algorítmicament.' },
      { title: 'Governança internacional de la IA', body: 'Crida a una autoritat supranacional en la línia de la proposta de Pacem in terris (1963) de Joan XXIII per a l’ordre mundial. Regulació coordinada que no quedi al criteri d’unes poques empreses.' },
      { title: 'Vulnerabilitat i bé comú', body: 'Infants, ancians, migrants, persones amb discapacitat: com la IA pot ampliar o reduir el seu accés a drets. Principi de preferència pels més febles, connectant amb l’ecologia integral de Laudato si’.' },
    ],
    contextTitle: 'Context del pontificat',
    contextBody: 'Des de la seva elecció, Lleó XIV ha situat la IA com a prioritat programàtica. En el seu primer discurs al Col·legi Cardenalici (maig 2025) va explicitar que la IA era una qüestió anàloga a la plantejada per la Rerum Novarum. El seu missatge al G7 a Roma sobre IA va continuar aquella línia, denunciant que «cap màquina hauria de decidir qui viu i qui mor». Magnifica humanitas culmina aquest primer any de pontificat i obre l’escenari doctrinal del viatge a Espanya, on Lleó XIV s’adreçarà al Congrés dels Diputats (8 juny) i a la societat civil al Movistar Arena (7 juny). S’espera que les claus de l’encíclica ressonin en ambdós discursos.',
    watchTitle: 'Com llegir i seguir l’encíclica',
    watchBody: 'El text íntegre de Magnifica humanitas es publicarà el 25 de maig a vatican.va en les llengües oficials del Vaticà (llatí, italià, castellà, anglès, francès, alemany, portuguès, polonès). La presentació oficial serà a les 11:30 a l’Aula del Sínode i es retransmetrà en directe per Vatican News (vaticannews.va, YouTube Vatican Media). El PDF signat estarà disponible per a descàrrega gratuïta. La Conferència Episcopal Espanyola i les diòcesis preparen materials pastorals per distribuir juntament amb l’encíclica durant el Viatge Apostòlic de juny.',
    faqTitle: 'Preguntes freqüents',
    faq: [
      { q: 'Què és Magnifica humanitas?', a: 'És la primera encíclica del Papa Lleó XIV, dedicada a la dignitat humana en l’era de la intel·ligència artificial. Es publica el 25 de maig de 2026.' },
      { q: 'Quan es publica Magnifica humanitas?', a: 'El text es farà públic el 25 de maig de 2026 a les 11:30 a l’Aula del Sínode del Vaticà. La signatura del Papa està datada el 15 de maig, 135è aniversari de Rerum Novarum.' },
      { q: 'Per què es diu Magnifica humanitas?', a: 'El títol llatí significa «Magnífica humanitat» o «Magnífica condició humana». Subratlla la dignitat i singularitat de la persona humana davant les tecnologies d’IA.' },
      { q: 'És la primera encíclica sobre intel·ligència artificial?', a: 'Sí. És la primera vegada que un Pontífex dedica una encíclica completa a la IA. Anteriorment Francesc havia enviat un missatge al G7 (2024) i Benet XVI havia fet referències en discursos, però Magnifica humanitas és el primer document doctrinal de rang encíclica sobre el tema.' },
      { q: 'On puc descarregar el PDF?', a: 'A partir del 25 de maig de 2026, el PDF oficial estarà disponible a vatican.va en les principals llengües. També als portals de les conferències episcopals nacionals. En aquesta pàgina enllaçarem al PDF tan aviat com es publiqui.' },
      { q: 'Quina relació té amb la visita del Papa a Espanya?', a: 'Magnifica humanitas es publica 12 dies abans del Viatge Apostòlic a Espanya (6-12 juny 2026). És previsible que les claus de l’encíclica apareguin en el discurs del Papa al Congrés dels Diputats (8 juny) i en la trobada «Teixir xarxes» al Movistar Arena (7 juny).' },
    ],
    updateTitle: 'Avís d’actualització',
    updateBody: 'Aquesta pàgina s’actualitzarà el 25 de maig de 2026 amb l’enllaç al PDF oficial, citacions verificades del text i resum estructural. Fins llavors, recollim la informació avançada per la Sala de Premsa de la Santa Seu el 19 de maig de 2026.',
    relatedTitle: 'Pàgines relacionades',
    related: [
      { href: '/papa-leon-xiv', text: 'Biografia completa del Papa Lleó XIV' },
      { href: '/papa-congreso-diputados', text: 'Discurs al Congrés (8 juny) — on es desenvoluparan les tesis de l’encíclica' },
      { href: '/discursos', text: 'Discursos clau del Papa Lleó XIV' },
      { href: '/programa', text: 'Programa del Viatge Apostòlic a Espanya' },
      { href: '/alzad-la-mirada', text: 'Lema del viatge · «Alceu els ulls» (Jn 4,35)' },
    ],
  },
  gl: {
    breadcrumbHome: 'Inicio', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · primeira encíclica do Papa León XIV',
    subtitle: 'Publicación: 25 de maio de 2026 · asinada o 15 de maio, 135º aniversario de Rerum Novarum · tema: o coidado da persoa humana no tempo da intelixencia artificial.',
    badge: 'Publicación inminente',
    intro: '«Magnifica humanitas» é o título da primeira carta encíclica do Papa León XIV, dedicada a «o coidado da persoa humana no tempo da intelixencia artificial». O documento publicarase o 25 de maio de 2026 e leva a firma do Pontífice con data do 15 de maio, coincidindo deliberadamente co 135º aniversario da promulgación da Rerum Novarum (1891), a encíclica de León XIII que inaugurou a Doutrina Social da Igrexa. A presentación oficial celebrarase na Aula do Sínodo, en presenza do Papa, ás 11:30 do 25 de maio. Esta encíclica precede en 12 días a Viaxe Apostólica a España (6-12 de xuño de 2026) e previsiblemente marcará o ton do discurso do Papa no Congreso dos Deputados o 8 de xuño.',
    quickFacts: [
      { label: 'Título', value: 'Magnifica humanitas' }, { label: 'Data de publicación', value: '25 de maio de 2026' }, { label: 'Data da firma', value: '15 de maio de 2026' },
      { label: 'Presentación oficial', value: 'Aula do Sínodo, 11:30' }, { label: 'Tema central', value: 'Persoa humana na era da IA' }, { label: 'Continuidade', value: 'Rerum Novarum (1891) de León XIII' },
    ],
    whyTitle: 'Por que é un documento histórico',
    whyBody: [
      'Magnifica humanitas é a primeira encíclica do pontificado de Robert Francis Prevost, elixido Papa o 8 de maio de 2025 co nome de León XIV. A elección do nome xa apuntaba a este momento: no seu primeiro discurso ao Colexio Cardinalicio, o novo Pontífice explicou que tomaba o nome de León en homenaxe a León XIII, autor da Rerum Novarum (1891), encíclica pioneira da Doutrina Social da Igrexa ante a primeira revolución industrial.',
      'León XIV propón agora unha resposta análoga á nova revolución industrial do noso tempo: a intelixencia artificial. A encíclica «Magnifica humanitas» proponse iluminar eticamente o impacto das tecnoloxías de IA sobre a dignidade humana, o traballo, a liberdade de conciencia e a xustiza social. É a primeira vez que un Pontífice dedica unha encíclica completa á cuestión da IA, despois de mensaxes parciais de Francisco ao G7 (2024) e referencias en discursos de Bieito XVI.',
      'A firma o 15 de maio, coincidindo co 135º aniversario exacto da Rerum Novarum, non é casual: vincula simbolicamente ambos os dous documentos como respostas paralelas a dúas revolucións industriais separadas por 135 anos. A continuidade da doutrina social faise explícita no xesto litúrxico-documental.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'O paralelismo entre as dúas encíclicas, separadas por 135 anos, é deliberado. Estrutura comparada dos seus contextos e respostas:',
    comparisons: [
      { title: 'Revolución técnica de fondo', old: 'Primeira revolución industrial: máquina de vapor, fábrica, urbanización masiva, capitalismo de fábrica.', new: 'Cuarta revolución industrial: intelixencia artificial, automatización cognitiva, plataformas dixitais globais.' },
      { title: 'Cuestión central de dignidade', old: 'A condición do obreiro industrial: xornadas longas, salarios inxustos, ausencia de dereitos colectivos.', new: 'A condición da persoa ante a máquina intelixente: substitución laboral, vixilancia algorítmica, decisións automatizadas que afectan dereitos.' },
      { title: 'Adversarios doutrinais', old: 'Liberalismo económico extremo e socialismo materialista.', new: 'Determinismo tecnolóxico e tecnocracia sen control democrático.' },
      { title: 'Proposta positiva', old: 'Salario xusto, dereito de asociación, propiedade como dereito natural, función social do capital.', new: 'Gobernanza internacional da IA, dereito á rastrexabilidade algorítmica, supervisión humana substantiva, dignidade como criterio último.' },
    ],
    themesTitle: 'Posibles eixos temáticos da encíclica',
    themesIntro: 'Con base nos discursos previos de León XIV (mensaxe ao G7 sobre IA no seu primeiro ano, discurso ao Corpo Diplomático, intervención en Davos), a encíclica podería desenvolver cinco grandes liñas:',
    themes: [
      { title: 'Dignidade e singularidade da persoa humana', body: 'A IA non pode reducir a persoa a un patrón estatístico. A encíclica reafirmaría a imaxe de Deus como fundamento ontolóxico da dignidade, contra calquera intento reducionista.' },
      { title: 'Traballo na era da automatización', body: 'Continuidade de Laborem Exercens (1981). Como protexer o traballo digno cando a IA substitúe tarefas cognitivas. Renda básica, formación continua, dereito ao traballo significativo.' },
      { title: 'Verdade, desinformación e liberdade de conciencia', body: 'IA xenerativa, deepfakes, manipulación masiva. A encíclica reclamaría unha nova ética da verdade pública e a protección do dereito a non ser manipulado algoritmicamente.' },
      { title: 'Gobernanza internacional da IA', body: 'Chamamento a unha autoridade supranacional na liña da proposta de Pacem in terris (1963) de Xoán XXIII para a orde mundial. Regulación coordinada que non quede ao criterio dunhas poucas empresas.' },
      { title: 'Vulnerabilidade e ben común', body: 'Nenos, anciáns, migrantes, persoas con discapacidade: como a IA pode ampliar ou reducir o seu acceso a dereitos. Principio de preferencia polos máis débiles, conectando coa ecoloxía integral de Laudato si’.' },
    ],
    contextTitle: 'Contexto do pontificado',
    contextBody: 'Desde a súa elección, León XIV situou a IA como prioridade programática. No seu primeiro discurso ao Colexio Cardinalicio (maio 2025) explicitou que a IA era unha cuestión análoga á formulada pola Rerum Novarum. A súa mensaxe ao G7 en Roma sobre IA continuou esa liña, denunciando que «ningunha máquina debería decidir quen vive e quen morre». Magnifica humanitas culmina ese primeiro ano de pontificado e abre o escenario doutrinal da viaxe a España, onde León XIV se dirixirá ao Congreso dos Deputados (8 xuño) e á sociedade civil no Movistar Arena (7 xuño). Espérase que as claves da encíclica resoen en ambos os dous discursos.',
    watchTitle: 'Como ler e seguir a encíclica',
    watchBody: 'O texto íntegro de Magnifica humanitas publicarase o 25 de maio en vatican.va nas linguas oficiais do Vaticano (latín, italiano, español, inglés, francés, alemán, portugués, polaco). A presentación oficial será ás 11:30 na Aula do Sínodo e retransmitirase en directo por Vatican News (vaticannews.va, YouTube Vatican Media). O PDF asinado estará dispoñible para descarga gratuíta. A Conferencia Episcopal Española e as dioceses preparan materiais pastorais para distribuír xunto coa encíclica durante a Viaxe Apostólica de xuño.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: 'Que é Magnifica humanitas?', a: 'É a primeira encíclica do Papa León XIV, dedicada á dignidade humana na era da intelixencia artificial. Publícase o 25 de maio de 2026.' },
      { q: 'Cando se publica Magnifica humanitas?', a: 'O texto farase público o 25 de maio de 2026 ás 11:30 na Aula do Sínodo do Vaticano. A firma do Papa está datada o 15 de maio, 135º aniversario de Rerum Novarum.' },
      { q: 'Por que se chama Magnifica humanitas?', a: 'O título latino significa «Magnífica humanidade» ou «Magnífica condición humana». Subliña a dignidade e singularidade da persoa humana ante as tecnoloxías de IA.' },
      { q: 'É a primeira encíclica sobre intelixencia artificial?', a: 'Si. É a primeira vez que un Pontífice dedica unha encíclica completa á IA. Anteriormente Francisco enviara unha mensaxe ao G7 (2024) e Bieito XVI fixera referencias en discursos, pero Magnifica humanitas é o primeiro documento doutrinal de rango encíclica sobre o tema.' },
      { q: 'Onde podo descargar o PDF?', a: 'A partir do 25 de maio de 2026, o PDF oficial estará dispoñible en vatican.va nas principais linguas. Tamén nos portais das conferencias episcopais nacionais. Nesta páxina ligaremos ao PDF en canto se publique.' },
      { q: 'Que relación ten coa visita do Papa a España?', a: 'Magnifica humanitas publícase 12 días antes da Viaxe Apostólica a España (6-12 xuño 2026). É previsible que as claves da encíclica aparezan no discurso do Papa no Congreso dos Deputados (8 xuño) e no encontro «Tecer redes» no Movistar Arena (7 xuño).' },
    ],
    updateTitle: 'Aviso de actualización',
    updateBody: 'Esta páxina actualizarase o 25 de maio de 2026 coa ligazón ao PDF oficial, citas verificadas do texto e resumo estrutural. Ata entón, recollemos a información avanzada pola Sala de Prensa da Santa Sé o 19 de maio de 2026.',
    relatedTitle: 'Páxinas relacionadas',
    related: [
      { href: '/papa-leon-xiv', text: 'Biografía completa do Papa León XIV' },
      { href: '/papa-congreso-diputados', text: 'Discurso ao Congreso (8 xuño) — onde se desenvolverán as teses da encíclica' },
      { href: '/discursos', text: 'Discursos clave do Papa León XIV' },
      { href: '/programa', text: 'Programa da Viaxe Apostólica a España' },
      { href: '/alzad-la-mirada', text: 'Lema da viaxe · «Erguei os ollos» (Xn 4,35)' },
    ],
  },
  eu: {
    breadcrumbHome: 'Hasiera', breadcrumbCurrent: 'Magnifica humanitas',
    title: 'Magnifica humanitas · Leon XIV.aren lehen entzikliko',
    subtitle: 'Argitalpena: 2026ko maiatzaren 25a · maiatzaren 15ean sinatua, Rerum Novarum-en 135. urteurrena · gaia: giza pertsonaren zaintza adimen artifizialaren garaian.',
    badge: 'Argitalpena bertan',
    intro: '«Magnifica humanitas» da Leon XIV.a Aita Santuaren lehen gutun entzikliaren titulua, «giza pertsonaren zaintza adimen artifizialaren garaian» gaiari eskainia. Dokumentua 2026ko maiatzaren 25ean argitaratuko da eta Pontifizearen sinadura maiatzaren 15ean dator, Rerum Novarum (1891) iragartzearen 135. urteurrenarekin bat eginez, Leon XIII.ren entziklikoa, Elizaren Dotrina Soziala inauguratu zuena. Aurkezpen ofiziala Sinodoaren aretoan ospatuko da, Aita Santuaren aurrean, maiatzaren 25eko 11:30ean. Entziklika honek 12 egunez aurreratzen du Espainiarako Bidaia Apostolikoa (2026ko ekainaren 6-12) eta aurreikuspenez Aita Santuak ekainaren 8an Diputatuen Kongresuan emango duen hitzaldiaren tonua markatuko du.',
    quickFacts: [
      { label: 'Titulua', value: 'Magnifica humanitas' }, { label: 'Argitalpen-data', value: '2026ko maiatzaren 25a' }, { label: 'Sinatze-data', value: '2026ko maiatzaren 15a' },
      { label: 'Aurkezpen ofiziala', value: 'Sinodoaren Aretoa, 11:30' }, { label: 'Gai nagusia', value: 'Giza pertsona IAren aroan' }, { label: 'Jarraitutasuna', value: 'Leon XIII.ren Rerum Novarum (1891)' },
    ],
    whyTitle: 'Zergatik den dokumentu historikoa',
    whyBody: [
      'Magnifica humanitas Robert Francis Prevost-en pontifikatuaren lehen entziklika da, 2025eko maiatzaren 8an Leon XIV. izenarekin Aita Santua hautatua. Izenaren aukerak une honetara seinalatzen zuen jada: Kardinal Kolegioari egindako lehen hitzaldian, Pontifize berriak azaldu zuen Leon izena hartzen zuela Leon XIII.aren omenez, Rerum Novarum (1891) entziklikoaren egilea, Elizaren Dotrina Sozialaren aitzindaria lehen iraultza industrialaren aurrean.',
      'Leon XIV.ak orain antzeko erantzun bat proposatzen du gure garaiko iraultza industrial berriari: adimen artifiziala. «Magnifica humanitas» entziklikoak adimen artifizialaren teknologiek giza duintasunaren, lanaren, kontzientzia-askatasunaren eta gizarte-justiziaren gainean duten eragina etikoki argitzea proposatzen du. Pontifize batek IAren gaiari entziklika oso bat eskaintzen dion lehen aldia da, Frantziskok G7ari (2024) bidalitako mezu partzialak eta Benedikto XVI.aren hitzaldietan egindako aipamenak ondoren.',
      'Maiatzaren 15eko sinadura, Rerum Novarum-en 135. urteurren zehatzarekin bat eginez, ez da kasualitatea: bi dokumentuak modu sinbolikoan lotzen ditu 135 urtez bereizitako bi iraultza industrialerako erantzun paraleloak balira bezala. Dotrina sozialaren jarraitutasuna esplizitu egiten da liturgia-dokumentu keinuan.',
    ],
    parallelTitle: 'Rerum Novarum (1891) ⟷ Magnifica humanitas (2026)',
    parallelIntro: 'Bi entzikliken arteko paralelismoa, 135 urtez bereiztua, nahita egindakoa da. Beren testuinguruen eta erantzunen egitura konparatua:',
    comparisons: [
      { title: 'Oinarrizko iraultza teknikoa', old: 'Lehen iraultza industriala: lurrun-makina, fabrika, masa-hirigintza, fabrika-kapitalismoa.', new: 'Laugarren iraultza industriala: adimen artifiziala, automatizazio kognitiboa, plataforma digital globalak.' },
      { title: 'Duintasunaren gako galdera', old: 'Industria-langilearen baldintza: lan-jardun luzeak, soldata bidegabeak, eskubide kolektiboen falta.', new: 'Pertsonaren baldintza makina adimentsuaren aurrean: lan-ordezkapena, jagonketa algoritmikoa, eskubideei eragiten dieten erabaki automatizatuak.' },
      { title: 'Aurkari doktrinalak', old: 'Liberalismo ekonomiko muturreko eta sozialismo materialista.', new: 'Determinismo teknologikoa eta tekno-okrazia kontrol demokratikorik gabe.' },
      { title: 'Proposamen positiboa', old: 'Soldata bidezkoa, elkartzeko eskubidea, jabetza eskubide natural gisa, kapitalaren funtzio soziala.', new: 'IAren nazioarteko gobernantza, trazabilitate algoritmikorako eskubidea, giza gainbegirapen sustantiboa, duintasuna azken irizpide gisa.' },
    ],
    themesTitle: 'Entzikliaren gai posibleen ardatzak',
    themesIntro: 'Leon XIV.aren aurreko hitzaldietan oinarrituta (G7ari IAri buruzko mezua bere lehen urtean, Kidegoko Diplomatikoari egindako hitzaldia, Davosen egindako esku-hartzea), entziklikoak bost lerro nagusi gara ditzake:',
    themes: [
      { title: 'Giza pertsonaren duintasuna eta berezitasuna', body: 'IAk ezin du pertsona eredu estatistiko batera murriztu. Entziklikak duintasunaren oinarri ontologiko gisa Jainkoaren irudia berretsiko luke, edozein saiakera reduktzionistaren aurka.' },
      { title: 'Lana automatizazioaren garaian', body: 'Laborem Exercens-en (1981) jarraitutasuna. Nola babestu lan duina IAk zeregin kognitiboak ordezkatzen dituenean. Oinarrizko errenta, etengabeko prestakuntza, esanahidun lanerako eskubidea.' },
      { title: 'Egia, desinformazioa eta kontzientzia-askatasuna', body: 'IA sortzailea, deepfake-ak, masa-manipulazioa. Entziklikoak egia publikoaren etika berri bat eta algoritmikoki manipulatua ez izateko eskubidearen babesa eskatuko lituzke.' },
      { title: 'IAren nazioarteko gobernantza', body: 'Nazioz gaindiko agintaritza baterako deia, Joan XXIII.ak Pacem in terris-en (1963) mundu-ordenarako egindako proposamenaren ildoan. Erregulazio koordinatua, enpresa gutxi batzuen irizpidearen mende geratuko ez dena.' },
      { title: 'Zaurgarritasuna eta on komuna', body: 'Haurrak, adinekoak, migratzaileak, desgaitasuna duten pertsonak: nola hedatu edo murriztu dezakeen IAk beren eskubideetarako sarbidea. Ahulenenganako lehentasunaren printzipioa, Laudato si’-ren ekologia integralarekin lotuz.' },
    ],
    contextTitle: 'Pontifikatu-testuingurua',
    contextBody: 'Bere hauteskundetik, Leon XIV.ak IA lehentasun programatikotzat jo du. Kardinal Kolegioari egindako lehen hitzaldian (2025eko maiatza) esplizitu egin zuen IA Rerum Novarum-ek planteatutakoaren antzeko galdera bat zela. Erroman G7ari IAri buruz egindako mezuak ildo hori jarraitu zuen, salatuz «inolako makinak ez lukeela erabaki behar nor bizi den eta nor hil». Magnifica humanitas-ek pontifikatuaren lehen urte hori gorenera eramaten du eta Espainiarako bidaiaren agertoki doktrinala irekitzen du, non Leon XIV.ak Diputatuen Kongresura (ekainak 8) eta gizarte zibilera Movistar Arenan (ekainak 7) zuzenduko baitira. Espero da entzikliaren gakoak bi hitzaldietan oihartzun izatea.',
    watchTitle: 'Nola irakurri eta jarraitu entziklika',
    watchBody: 'Magnifica humanitas-en testu osoa maiatzaren 25ean argitaratuko da vatican.va-n Vatikanoaren hizkuntza ofizialetan (latina, italiera, gaztelania, ingelesa, frantsesa, alemana, portugesa, poloniera). Aurkezpen ofiziala 11:30ean izango da Sinodoaren Aretoan eta zuzenean emango da Vatican News-en (vaticannews.va, YouTube Vatican Media). PDF sinatua doan deskargatzeko eskuragarri egongo da. Espainiako Apezpiku Konferentziak eta elizbarrutiek material pastoralak prestatzen dituzte entziklikoarekin batera ekaineko Bidaia Apostolikoan banatzeko.',
    faqTitle: 'Maiz egiten diren galderak',
    faq: [
      { q: 'Zer da Magnifica humanitas?', a: 'Leon XIV.a Aita Santuaren lehen entzikliko da, adimen artifizialaren aroan giza duintasunari eskainia. 2026ko maiatzaren 25ean argitaratzen da.' },
      { q: 'Noiz argitaratzen da Magnifica humanitas?', a: 'Testua 2026ko maiatzaren 25ean publiko egingo da, Vatikanoaren Sinodoaren Aretoan 11:30ean. Aita Santuaren sinadura maiatzaren 15ekoa da, Rerum Novarum-en 135. urteurrena.' },
      { q: 'Zergatik deitzen da Magnifica humanitas?', a: 'Latinezko tituluak «Gizatasun bikaina» edo «Giza baldintza bikaina» esan nahi du. Giza pertsonaren duintasuna eta berezitasuna nabarmentzen du IA teknologien aurrean.' },
      { q: 'Adimen artifizialari buruzko lehen entzikliko da?', a: 'Bai. Pontifize batek IAri entziklika osoa eskaintzen dion lehen aldia da. Aurretik Frantziskok G7ari mezu bat bidali zion (2024) eta Benedikto XVI.ak hitzaldietan aipamenak egin zituen, baina Magnifica humanitas gaiari buruzko entzikliko mailako lehen dokumentu doktrinala da.' },
      { q: 'Non deskarga dezaket PDFa?', a: '2026ko maiatzaren 25etik aurrera, PDF ofiziala vatican.va-n eskuragarri egongo da hizkuntza nagusietan. Nazio-apezpiku-konferentzien atarietan ere bai. Orrialde honetan PDFra lotuko gara argitaratu bezain laster.' },
      { q: 'Zer harreman du Aita Santuaren Espainiarako bisitarekin?', a: 'Magnifica humanitas Espainiarako Bidaia Apostolikoa baino 12 egun lehenago argitaratzen da (2026ko ekainaren 6-12). Aurreikus daiteke entzikliaren gakoak Aita Santuaren Diputatuen Kongresuko hitzaldian (ekainak 8) eta Movistar Arenako «Sareak ehundu» topaketan (ekainak 7) agertzea.' },
    ],
    updateTitle: 'Eguneratze-oharra',
    updateBody: 'Orrialde hau 2026ko maiatzaren 25ean eguneratuko da PDF ofizialerako esteka, testuko aipu egiaztatuekin eta laburpen egiturala. Ordura arte, Aulki Santuaren Prentsa Aretoak 2026ko maiatzaren 19an aurreratutako informazioa biltzen dugu.',
    relatedTitle: 'Erlazionatutako orriak',
    related: [
      { href: '/papa-leon-xiv', text: 'Leon XIV.a Aita Santuaren biografia osoa' },
      { href: '/papa-congreso-diputados', text: 'Kongresuko hitzaldia (ekainak 8) — non entzikliaren tesiak garatuko diren' },
      { href: '/discursos', text: 'Leon XIV.aren hitzaldi gakoak' },
      { href: '/programa', text: 'Espainiarako Bidaia Apostolikoaren programa' },
      { href: '/alzad-la-mirada', text: 'Bidaiaren leloa · «Jaso begiak» (Jn 4,35)' },
    ],
  },
}

export default function MagnificaHumanitasPage({ locale }: Props) {
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
          <span className="inline-block rounded-full bg-papal-gold/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-papal-gold">
            {t.badge}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {t.quickFacts.map((f, i) => (
              <div key={i} className="rounded-lg bg-white/10 px-4 py-2">
                <p className="text-xs uppercase tracking-wide text-papal-gold">{f.label}</p>
                <p className="text-sm font-medium text-white">{f.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <VaticanFlagBanner locale={locale} className="mb-8" />

        <div className="rounded-lg border-l-4 border-papal-gold bg-papal-cream p-4 mb-8 text-sm text-papal-navy">
          <p><strong>{t.updateTitle}:</strong> {t.updateBody}</p>
        </div>

        <article className="prose prose-papal max-w-none">
          <p className="text-lg text-papal-navy/80">{t.intro}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.whyTitle}</h2>
          {t.whyBody.map((p, i) => <p key={i}>{p}</p>)}

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.parallelTitle}</h2>
          <p>{t.parallelIntro}</p>
          <div className="not-prose mt-4 space-y-3">
            {t.comparisons.map((c, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <p className="font-heading text-sm font-bold text-papal-navy">{c.title}</p>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="rounded bg-papal-cream/50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-papal-navy/60">1891 · Rerum Novarum</p>
                    <p className="mt-1 text-sm text-papal-navy/80">{c.old}</p>
                  </div>
                  <div className="rounded bg-papal-gold/10 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-papal-gold-dark">2026 · Magnifica humanitas</p>
                    <p className="mt-1 text-sm text-papal-navy/80">{c.new}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.themesTitle}</h2>
          <p>{t.themesIntro}</p>
          <ul className="not-prose mt-4 space-y-2">
            {t.themes.map((th, i) => (
              <li key={i} className="rounded-lg border-l-4 border-papal-gold bg-papal-cream/50 p-3">
                <p className="font-heading text-sm font-bold text-papal-navy">{th.title}</p>
                <p className="mt-1 text-sm text-papal-navy/80">{th.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.contextTitle}</h2>
          <p>{t.contextBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.watchTitle}</h2>
          <p>{t.watchBody}</p>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.faqTitle}</h2>
          <dl className="not-prose mt-4 space-y-3">
            {t.faq.map((f, i) => (
              <div key={i} className="rounded-lg border border-papal-navy/10 bg-white p-4">
                <dt className="font-heading text-sm font-bold text-papal-navy">{f.q}</dt>
                <dd className="mt-2 text-sm text-papal-navy/80">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-heading text-2xl font-bold text-papal-navy">{t.relatedTitle}</h2>
          <ul className="not-prose mt-4 space-y-2">
            {t.related.map((link) => (
              <li key={link.href}>
                <Link href={localizePath(link.href, locale)} className="text-papal-navy underline decoration-papal-gold underline-offset-4 hover:text-papal-gold">
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
