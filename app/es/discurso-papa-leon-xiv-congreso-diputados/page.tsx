import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/siteConfig'

const SLUG = 'discurso-papa-leon-xiv-congreso-diputados'

export const metadata: Metadata = {
  title: 'Discurso completo del Papa León XIV en el Congreso de los Diputados',
  description:
    'Texto íntegro del histórico discurso del Papa León XIV ante las Cortes Generales en el Congreso de los Diputados (8 de junio de 2026): dignidad humana, bien común, familia, migración, paz, libertad religiosa y la Escuela de Salamanca.',
  alternates: { canonical: `${siteConfig.url}/es/${SLUG}` },
  openGraph: {
    type: 'article',
    url: `${siteConfig.url}/es/${SLUG}`,
    title: 'Discurso completo del Papa León XIV en el Congreso de los Diputados',
    description: 'El texto íntegro del primer discurso de un Pontífice ante el Congreso de los Diputados.',
    images: [{ url: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`, width: 1200, height: 630, alt: 'El Papa León XIV en el Congreso de los Diputados' }],
  },
  twitter: { card: 'summary_large_image', images: [`${siteConfig.url}/images/hero/papa-leon-xiv.webp`] },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Discurso completo del Papa León XIV en el Congreso de los Diputados',
  datePublished: '2026-06-08T11:20:00+02:00',
  dateModified: '2026-06-08T12:00:00+02:00',
  author: { '@id': `${siteConfig.url}#organization` },
  publisher: { '@id': `${siteConfig.url}#organization` },
  image: `${siteConfig.url}/images/hero/papa-leon-xiv.webp`,
  about: { '@id': `${siteConfig.url}#visit-event` },
  isAccessibleForFree: true,
}

// Texto íntegro del discurso pronunciado por León XIV ante las Cortes Generales
// en el Congreso de los Diputados (8/6/2026). Fuente: Santa Sede.
const SALUTACION = [
  'Presidente del Gobierno,',
  'Presidenta del Congreso de los Diputados,',
  'Presidente del Senado,',
  'Presidente del Tribunal Constitucional,',
  'Presidenta del Tribunal Supremo y del Consejo General del Poder Judicial,',
  'Miembros del Congreso de los Diputados y del Senado,',
  'Señoras y señores:',
]

type Bloque = { h2: string } | { p: string }

const DISCURSO: Bloque[] = [
  { p: `Agradezco a la Señora Presidenta sus amables palabras, así como la invitación que la Sede Apostólica ha recibido con ocasión de mi viaje a este país, así como la deferencia de acogerme en este histórico Palacio del Congreso de los Diputados, ámbito eminente de la vida institucional, jurídica y democrática del Reino de España. Vengo ante todos ustedes como Obispo de Roma y Pastor de la Iglesia católica, consciente de que la misión confiada al Sucesor del apóstol Pedro como principio y fundamento de unidad de los Obispos y de los fieles coloca a la Santa Sede, de modo peculiar, en diálogo con los pueblos y con los Estados.` },
  { p: `Mi presencia entre ustedes quiere ser un gesto de cercanía hacia España, en el marco de la mutua cooperación, y una palabra ofrecida desde el servicio a la persona humana. La Iglesia «camina con la humanidad», comparte sus esperanzas y sus heridas, escucha los interrogantes de cada época y se deja interpelar «por todo lo que concierne a la existencia de los hombres y las mujeres de hoy». Por eso, cuando se dirige a la vida pública, lo hace respetando la misión propia de las instituciones y la legítima responsabilidad de quienes han recibido el mandato de legislar. Reconoce «la autonomía de las realidades terrenas» y «la distinción entre comunidad eclesial y comunidad política»; y, precisamente desde esa conciencia, aporta una reflexión nacida del deseo de servir al bien común y de recordar aquello que hace verdaderamente humana la convivencia.` },
  { p: `En este hemiciclo se da forma jurídica a la convivencia social. Aquí las diferencias se escuchan, se ordenan y, cuando es posible, se convierten en decisión compartida. Por eso, más allá de la legítima diversidad de posiciones, toda tarea legislativa acaba encontrándose con una pregunta decisiva: qué concepción de la persona humana inspira las leyes y qué tipo de sociedad construye esas leyes.` },
  { p: `Ante esta cuestión, España posee una memoria particularmente rica. Su identidad geográfica y política se ha ido entretejiendo con una historia en la que la fe y la razón, el arte y el derecho, la tradición y el pensamiento han sabido encontrarse fecundamente. En sus catedrales y universidades, en su literatura inmortal, en sus instituciones jurídicas y en el ánimo mismo de su pueblo, permanece viva una herencia que ha dado forma a un modo de vivir la libertad, practicar la justicia y ordenar la vida común.` },
  { p: `Desde las páginas universales del Quijote, donde Cervantes proclamó que «la libertad […] es uno de los más preciosos dones que a los hombres dieron los cielos», la hondura espiritual de santa Teresa de Ávila, y desde la gran tradición jurídica española hasta la inquietud metafísica de Unamuno, que recordaba que el hombre «no se resigna a morir del todo», España ha sabido mirar al ser humano como algo más que una pieza del orden social, económico o político: lo ha reconocido como criatura abierta a la verdad, dotada de libertad y movida por una sed de eternidad que ninguna realidad temporal logra extinguir; en una palabra, como alguien cuya dignidad precede a toda utilidad y a cuyo servicio está sujeta la acción legislativa.` },
  { p: `Por eso, al hablar hoy de la persona humana, esta memoria conduce naturalmente a Salamanca y al pensamiento que allí maduró. La presencia simbólica en esta sala de los Reyes Isabel y Fernando remite a aquel momento en que España quedó situada ante responsabilidades históricas de alcance universal; pocos años después, Salamanca habría de asumir, con singular lucidez, la reflexión moral y jurídica que ese escenario reclamaba. En aquella sede universitaria, hace quinientos años, cuando se abrían mundos nuevos y posibilidades inmensas en las relaciones entre los pueblos, algunos maestros comprendieron que la razón no podía ser invocada para revestir de legitimidad cuanto la fuerza o el interés presentaban como conveniente. Introdujeron así en el discernimiento histórico la pregunta por el valor irreductible de todo ser humano y los límites morales del poder. Hay que reconocer que la sociedad y la misma Iglesia no siempre estuvieron a la altura de las intuiciones que encontraban eco en su propia tradición cristiana.` },
  { p: `Sin embargo, aquel interrogante abrió un horizonte intelectual y moral que desbordó su propio momento histórico. La intuición del totus orbis, de una comunidad humana más amplia que cualquier poder particular, permitía afirmar la existencia de vínculos jurídicos y morales entre los pueblos. Desde España, la reflexión de la Escuela de Salamanca —y de manera particular fray Francisco de Vitoria, junto con otros dominicos y jesuitas— contribuyó a formar una conciencia jurídica y moral capaz de recordar que la autoridad lleva siempre consigo una responsabilidad y que todo ser humano debe ser reconocido como sujeto de derechos y deberes. Ese anhelo sigue hablando también hoy: que la dignidad, la justicia y el bien común sean la medida de las relaciones sociales, tanto a nivel nacional como a nivel internacional.` },
  { p: `Ésta es una de las grandes herencias de España: haber unido la acción histórica con la lucidez de la razón moral. Aquella contribución, nacida a orillas del Tormes, trascendió las aulas y las bibliotecas, y llegó a formar parte de una conciencia más amplia, compartida por la comunidad internacional que sigue preguntándose cómo construir la paz sobre el reconocimiento de la persona y no sobre la imposición de la fuerza. Ese legado vive también en estas Cortes, cada vez que el legislador se pregunta cómo hacer que lo posible sea justo, que lo legal sea verdaderamente humano y que la voluntad de la mayoría custodie aquellos bienes que pertenecen a todos y respete aquello que ninguna mayoría puede legítimamente vulnerar.` },
  { p: `La pregunta salmantina sigue acompañando la tarea de quienes sirven a la vida pública. Hoy, los nuevos mundos que se abren ante nosotros ya no se dibujan en los mapas: se despliegan en la técnica, en la economía, en la biomedicina y en el universo digital, donde el poder humano alcanza ámbitos cada vez más delicados de la vida personal y social.` },
  { p: `El progreso ofrece posibilidades admirables, y hoy lo vemos de modo singular en el desarrollo de la inteligencia artificial y las nuevas tecnologías. Como he recordado en mi reciente Encíclica, la tecnología en sí misma no es neutral porque toma el rostro de quien la concibe, la financia, la regula y la utiliza; por eso, ante las transformaciones de nuestro tiempo, nuestro discernimiento debe centrarse en qué lugar ocupa la persona humana en nuestras decisiones, y cómo se plantean hoy, de manera nueva, la dignidad del trabajo, la solidaridad, la política social y el bien común.` },
  { p: `Este discernimiento comienza por una afirmación primera: toda sociedad auténticamente justa se edifica sobre el reconocimiento de la dignidad inviolable de la persona humana. Tal dignidad precede a toda concesión del Estado y no puede quedar subordinada a consensos sociales mudables o al vaivén de las mayorías de cada momento. Pertenece a todo ser humano por el hecho mismo de existir, y por eso debe orientar todo ordenamiento jurídico positivo. La fe cristiana la proclama a partir de la Revelación; la razón humana puede reconocerla como exigencia inscrita en la verdad del hombre. Cuando esta convicción permanece viva, el derecho se convierte en amparo de todos y en garantía frente a la imposición de intereses y agendas particulares.` },
  { p: `Sobre este fundamento, me corresponde pronunciar hoy una palabra serena y firme ante quienes tienen la grave responsabilidad de ordenar jurídicamente la convivencia social. Esta convivencia puede verse amenazada por la cultura del descarte, como tantas veces advirtió el Papa Francisco. En este sentido, si la vida deja de ser reconocida como un valor fundamental, ¿qué futuro pueden tener nuestras sociedades? ¿Puede llamarse plenamente justa una comunidad que deja en la sombra al niño aún no nacido, al anciano, al enfermo, a quien sufre en silencio o a quien depende enteramente del cuidado de los demás? La defensa de la vida humana no es una cuestión parcial ni un interés confesional: es una meta de civilización. Toda vida humana debe ser reconocida y custodiada desde su concepción hasta su ocaso natural, en cada circunstancia de su existencia. Cuando esta certeza se oscurece, los más vulnerables son las primeras víctimas y la ley pierde su significado más profundo: servir y proteger a cada persona. Por eso, la grandeza moral de una nación se manifiesta, sobre todo, en su capacidad de acompañar, proteger y amar aquellas vidas que atraviesan mayor fragilidad.` },
  { p: `El bien común es, en cierto modo, «la forma social de la dignidad humana». No consiste en la mera suma de intereses particulares, sino en «el conjunto de condiciones de la vida social que hacen posible a las asociaciones y a cada uno de sus miembros el logro más pleno y más fácil de la propia perfección». Cuando el bien común deja de ser horizonte compartido, la acción pública corre el riesgo de fragmentarse en intereses parciales, incapaces de custodiar aquello que pertenece a todos.` },
  { p: `En este contexto, reviste particular importancia la familia, realidad humana primera y fundamento natural de la comunidad. En el hogar se entrelazan las generaciones y se transmite una memoria viva que da continuidad interior a la sociedad. Allí donde la familia es sostenida, se fortalece también la estabilidad espiritual y social de las naciones. La familia será siempre la primera escuela de humanidad en la que se aprende, antes que en cualquier otro lugar, la gramática elemental de la convivencia: recibir la vida, cuidar al otro, perdonar, servir y pertenecer.` },
  { p: `También las instituciones educativas ocupan un lugar decisivo en esta tarea. En ellas, las nuevas generaciones pueden aprender a buscar y amar la verdad, a cuestionarse sobre el sentido de la vida y la dignidad de cada persona. Por eso, muchos padres deseosos de que sus hijos aprendan a relacionarse, a pensar con espíritu crítico y a adquirir valores sólidos, depositan en ellas grandes esperanzas, como valiosas aliadas en su educación. Esta colaboración ha de respetar siempre el «derecho primario e inalienable» de los padres a «elegir el tipo de educación y de formación que reciben sus hijos, en coherencia con sus propias convicciones morales, culturales y religiosas».` },
  { p: `La afirmación de la dignidad humana no puede permanecer abstracta cuando tantas personas se ven obligadas a dejarlo todo para buscar paz, seguridad y futuro. También el trágico drama migratorio interpela hoy la conciencia de las naciones y el fundamento ético del orden internacional. Numerosos hombres, mujeres y niños se ven obligados, por circunstancias muchas veces dramáticas, a partir de sus comunidades y dejar atrás seres queridos, historias y vínculos. Esta realidad rebasa cualquier lectura puramente demográfica o económica: constituye una cuestión eminentemente moral y jurídica. Allí donde una persona es discriminada por su origen nacional, étnico, religioso o lingüístico, o por su condición económica o social, se vulnera gravemente el principio universal de la igual dignidad de todos los seres humanos.` },
  { p: `La situación de los migrantes y refugiados exige una respuesta que mire a las personas, afronte las causas que las obligan a partir y vaya más allá de la mera gestión de flujos. De ahí nace una doble exigencia de justicia social: ofrecer vías seguras y legales, una acogida respetuosa y posibilidades reales de integración; y promover, al mismo tiempo, el derecho a permanecer en la propia tierra, trabajando para que nadie tenga que abandonar su hogar por falta de paz, seguridad o condiciones dignas de vida, entre ellas las desigualdades económicas y los efectos de la crisis climática.` },
  { p: `En los últimos años, las rutas cada vez más peligrosas han evidenciado el altísimo coste de esta realidad, tantas veces escondida o ignorada. Muchas personas siguen siendo presas de traficantes y contrabandistas que se aprovechan de su desesperación. Es necesario fortalecer la prevención, el rescate y la asistencia a las víctimas, especialmente en el marco de una cooperación regional y multilateral.` },
  { p: `Ninguna nación puede afrontar por sí sola un desafío de esta magnitud. Por ello, es indispensable una respuesta coordinada, solidaria y eficaz, capaz de garantizar protección, acogida y oportunidades reales de integración a quienes emigran. Cuando la respuesta institucional se hace cercana, justa y coordinada, las fronteras dejan de ser lugares de abandono y pueden convertirse en espacios de protección responsable de la dignidad humana.` },
  { h2: 'Señorías:' },
  { p: `El mundo atraviesa una profunda crisis espiritual y cultural, que se manifiesta en múltiples formas de violencia, polarización y desconfianza recíproca. En este contexto, la paz se presenta como una aspiración política y, más aún, como una verdadera exigencia moral. Reclama una palabra pública que respete a quien piensa distinto, instituciones puestas al servicio del encuentro, una memoria histórica que busque la verdad y la reconciliación y una vida social capaz de sostener la amistad cívica y el respeto mutuo en medio de la discrepancia.` },
  { p: `En el plano internacional, la paz exige valentía diplomática, responsabilidad ética y una visión de futuro fundada en el respeto a la identidad de cada pueblo y en la obligación de los Estados de resolver sus controversias por los caminos pacíficos que ofrece el derecho internacional. Toda guerra constituye, en última instancia, una dolorosa derrota de la capacidad de negociar y también de aquella conciencia común de la humanidad que reconoce vínculos de justicia entre las naciones. Las armas pueden imponer un silencio temporal; pero nunca podrán edificar una paz auténtica y duradera.` },
  { p: `Por eso, preocupa que, en diversos lugares del mundo, y también en Europa, vuelva a presentarse el rearme como respuesta casi inevitable ante la fragilidad del escenario internacional. La verdadera seguridad, en cambio, nace de la justicia, del diálogo paciente, del respeto al derecho internacional y de una política capaz de poner la vida de los pueblos por encima de los intereses que se benefician de la guerra.` },
  { p: `También el desarrollo de las nuevas tecnologías y de la inteligencia artificial en el ámbito militar exige una vigilancia ética rigurosa, para que las decisiones sobre la vida y la muerte nunca sean descargadas sobre automatismos ni sustraídas a la responsabilidad moral de la persona humana.` },
  { p: `La comunidad internacional está llamada a redescubrir el valor indispensable del diálogo como camino paciente hacia acuerdos justos y duraderos, fundados en el respeto a los tratados, en la transparencia de la acción diplomática y en la voluntad sincera de anteponer la paz al recurso a la fuerza. De ahí nacen la confianza y la esperanza.` },
  { p: `Como recuerda el lema de la Unión Europea, In varietate concordia, la unidad verdadera no uniforma, sino que cohesiona en la diversidad, haciendo de las culturas, sensibilidades y tradiciones una ocasión de enriquecimiento mutuo.` },
  { p: `Asimismo, dentro de las propias sociedades es urgente construir una cultura de la reciprocidad. La pluralidad política no debería degenerar en descalificación permanente del adversario. En una convivencia madura, incluso el conflicto puede convertirse en camino hacia la paz, cuando las diferencias se dejan mitigar por la escucha y se ordenan al reconocimiento de las necesidades, los anhelos y las capacidades de todos.` },
  { p: `Pero la paz no es solamente una realidad política o institucional. Nace también en la conciencia, allí donde el rencor, la indiferencia y el odio ceden espacio a la reconciliación. Por eso, se instaura y se protege también a través del lenguaje. Las palabras pueden abrir caminos o cerrarlos; pueden iluminar la realidad o deformarla hasta hacer imposible el encuentro. Quienes ejercen una responsabilidad pública tienen, por eso, una especial obligación de custodiar la palabra para «desarmar el lenguaje». La firmeza no exige desprecio; la discrepancia no conlleva humillación.` },
  { p: `De este respeto al otro nace también el deber de custodiar el espacio donde maduran sus convicciones, su conciencia y su relación con Dios. La atención a ese ámbito interior permite comprender mejor una cuestión decisiva para toda sociedad verdaderamente democrática: la libertad de pensamiento, de conciencia y de religión, derecho fundamental que tutela el ámbito más íntimo de las personas. La libertad sobre la que se edifica el Estado contemporáneo, si es auténtica, reconoce la dimensión religiosa del ser humano, la respeta y la tutela jurídicamente; y evita que alguien tenga que renunciar a contribuir a la sociedad en la que vive por causa de su fe.` },
  { p: `Sin confundir el plano jurídico con el moral, conviene recordar también que la libertad necesita una comprensión plena de sí misma. Ser libre no significa únicamente estar libre de coacciones o disponer de muchas posibilidades de elección; significa poder reconocer el bien y adherirse a él responsablemente. Por eso, toda sociedad efectivamente libre requiere también una justa delimitación del poder público, de modo que la libertad de las personas, de las comunidades y de las asociaciones no sea indebidamente restringida. Desde esta perspectiva, la legítima autonomía del orden temporal jamás debe interpretarse como hostilidad hacia el fenómeno religioso. La fe no pretende imponerse mediante privilegios ni coerciones; sin embargo, tampoco puede ser relegada al silencio como si fuese irrelevante para la vida pública.` },
  { p: `En este contexto, el sigilo sacramental de la confesión reviste una importancia especial para la Iglesia católica. Se inserta en el ámbito más amplio de la libertad religiosa, que garantiza a las comunidades creyentes un espacio propio de vida, organización y disciplina interna. Tutelarlo jurídicamente, como sucede de modo análogo en algunas profesiones, significa preservar un espacio sagrado de libertad interior, donde el creyente puede abrir su alma ante Dios sin temor a presiones externas, como reconocen también las normas internacionales.` },
  { h2: 'Señoras y Señores:' },
  { p: `Permitan que me detenga un instante en algunas imágenes que adornan esta Cámara. En este Salón de Sesiones, la luz natural entra por el lucernario que corona la sala. Esa luz que viene de lo alto puede recordar que también la política necesita reconocer una medida que la precede y la supera.` },
  { p: `También las pinturas que evocan, en la parte superior del muro principal, la recepción del Evangelio y del Decálogo recuerdan algo esencial. Sin confundir el orden político con el religioso, esos signos invitan a reconocer que la libertad moderna ha sido preparada también por una larga educación de la conciencia, profundamente marcada por la tradición cristiana. En esa escuela interior, los pueblos aprendieron que el derecho debe servir al bien, que la justicia pone límites a la fuerza, que el poder necesita legitimidad, que los pobres pertenecen plenamente a la comunidad, que el extranjero debe ser acogido conforme a su dignidad y que la vida humana jamás puede ser tratada como mercancía.` },
  { p: `Una ley no alcanza su verdadera grandeza por el mero hecho de haber sido formalmente aprobada; la alcanza cuando, además de ser válida en su forma, puede comparecer ante la dignidad de la persona y salir de ese examen sin avergonzarse.` },
  { p: `Les invito a alzar, pues, la mirada: no para alejarse de la realidad, sino para recordar que toda decisión de las autoridades públicas toca personas de carne y hueso, especialmente a quienes tienen menos fuerza para hacerse oír. Porque la altura de miras consiste precisamente en mirar con más hondura aquello que está en juego en cada decisión pública. Por eso, junto a las respuestas técnicas y las reformas legales, hace falta también una renovación moral. España puede ofrecer mucho en este camino. Cuenta con una lengua que une continentes; una tradición cultural, jurídica y espiritual que ha sabido poner en diálogo fe y razón, derecho y conciencia, unidad y pluralidad. Esta experiencia histórica recuerda también el valor de la concordia y del esfuerzo paciente por construir una convivencia pacífica y justa.` },
  { p: `Que esta noble nación jamás pierda la memoria de sus raíces ni la audacia de mirar al futuro. Que España continúe siendo tierra de encuentro, de cultura, de solidaridad y de esperanza. Y que su vida pública sepa unir siempre la firmeza de las convicciones con la nobleza del diálogo y la grandeza del servicio. Que Dios conceda paz a todas las naciones de la tierra, concordia a las familias y serenidad a las conciencias. Y que, sobre el Reino de España, marcado por la huella apostólica de Santiago y por la presencia maternal de la Virgen del Pilar, desciendan días de prosperidad, justicia y paz duradera.` },
  { p: `Muchas gracias.` },
]

const CLAVES = [
  'Dignidad humana inviolable como fundamento de toda ley, «que precede a toda concesión del Estado».',
  'Rechazo de la «cultura del descarte» y defensa de la vida «desde su concepción hasta su ocaso natural».',
  'La familia como «primera escuela de humanidad» y el derecho de los padres a elegir la educación de sus hijos.',
  'Migración como «cuestión moral y jurídica»: vías seguras y derecho a permanecer en la propia tierra.',
  'Paz frente al rearme; advertencia sobre la IA militar y llamamiento a «desarmar el lenguaje».',
  'Libertad religiosa y de conciencia, con mención al sigilo sacramental de la confesión.',
  'La Escuela de Salamanca y Francisco de Vitoria como raíz del derecho internacional.',
]

export default function DiscursoCongresoPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="gradient-navy">
        <Container className="py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-papal-gold">Discurso íntegro · 8 de junio</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Discurso completo del Papa León XIV en el Congreso de los Diputados
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Texto íntegro de la primera intervención de un Pontífice ante las Cortes Generales, pronunciada en el
            Palacio del Congreso de los Diputados el 8 de junio de 2026.
          </p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-papal-navy/80 leading-relaxed">
            El Papa <strong>León XIV</strong> pronunció este lunes un histórico discurso ante diputados, senadores y
            representantes de las principales instituciones del Estado, en una sesión conjunta de ambas Cámaras. Fue
            recibido por los presidentes del Congreso y del Senado, <strong>Francina Armengol</strong> y{' '}
            <strong>Pedro Rollán</strong>, y por el presidente del Gobierno, <strong>Pedro Sánchez</strong>. Reproducimos
            a continuación el texto completo.
          </p>

          {/* Claves del discurso */}
          <div className="rounded-xl border border-papal-gold/30 bg-papal-cream p-5">
            <h2 className="mb-3 font-heading text-lg font-bold text-papal-navy">Las claves del discurso</h2>
            <ul className="space-y-2">
              {CLAVES.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-papal-navy/80">
                  <span className="text-papal-gold-dark">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Texto íntegro */}
          <article className="space-y-5 border-l-4 border-papal-gold/30 pl-5 text-papal-navy/85 leading-relaxed">
            <div className="font-heading italic text-papal-navy">
              {SALUTACION.map((linea) => (
                <p key={linea}>{linea}</p>
              ))}
            </div>
            {DISCURSO.map((b, i) =>
              'h2' in b ? (
                <h2 key={i} className="font-heading text-xl font-bold text-papal-navy">
                  {b.h2}
                </h2>
              ) : (
                <p key={i}>{b.p}</p>
              )
            )}
          </article>

          <div className="rounded-lg bg-gray-50 p-4 text-sm text-papal-navy/60">
            Texto íntegro del discurso pronunciado por el Papa León XIV en el Congreso de los Diputados (8 de junio de
            2026). Fuente: Santa Sede.
          </div>

          {/* Enlaces útiles */}
          <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-6">
            <Link href="/es/visita-papa-leon-madrid-8-junio-congreso-bernabeu" className="rounded-lg bg-papal-gold px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-gold-light">
              La jornada, en directo
            </Link>
            <Link href="/es/frases-papa-madrid" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              Las mejores frases del Papa
            </Link>
            <Link href="/es/alzad-la-mirada" className="rounded-lg border border-papal-gold/40 px-5 py-2.5 text-sm font-bold text-papal-navy hover:bg-papal-cream">
              «Alzad la mirada», el lema
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
