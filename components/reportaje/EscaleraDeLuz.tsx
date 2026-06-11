'use client'

import { useEffect, useRef } from 'react'
import './escalera.css'

type Locale = 'es' | 'ca'

/* ---- bilingual dictionary (ported from the design handoff) ---- */
const D: Record<string, { es: string; ca: string }> = {
  'hero.eyebrow': { es: 'Reportaje · Sagrada Família', ca: 'Reportatge · Sagrada Família' },
  'hero.title': { es: 'La <span class="it">escalera</span><br>de luz', ca: "L'<span class=\"it\">escala</span><br>de llum" },
  'hero.sub': { es: 'La Torre de Jesucristo corona el templo de Gaudí a 172,5&nbsp;metros. Su cruz brilla de día y da luz de noche.', ca: 'La Torre de Jesucrist corona el temple de Gaudí a 172,5&nbsp;metres. La seva creu brilla de dia i fa llum de nit.' },
  'hero.m1': { es: '172,5 m', ca: '172,5 m' },
  'hero.m2': { es: 'La iglesia más alta del mundo', ca: "L'església més alta del món" },
  'hero.m3': { es: '10 · VI · 2026', ca: '10 · VI · 2026' },
  cue: { es: 'Asciende', ca: 'Puja' },
  'anchor.kicker': { es: 'Una sola cifra lo resume todo', ca: 'Una sola xifra ho resumeix tot' },
  'anchor.label': { es: 'la iglesia más alta del mundo', ca: "l'església més alta del món" },
  'anchor.sub': { es: 'Barcelona · Basílica de la Sagrada Família', ca: 'Barcelona · Basílica de la Sagrada Família' },
  'h2.eyebrow': { es: '02 · El ascenso', ca: "02 · L'ascens" },
  'h2.title': { es: 'Ciento setenta y dos metros,<br>hito a hito', ca: 'Cent setanta-dos metres,<br>fita a fita' },
  'h2.lede': { es: 'Desplázate para subir la torre. Cada marca es un punto real de la obra; al llegar a la cruz, el día se hace noche y la luz se enciende.', ca: "Desplaça't per pujar la torre. Cada marca és un punt real de l'obra; en arribar a la creu, el dia es fa nit i la llum s'encén." },
  'alt.cap': { es: 'metros sobre la calle', ca: 'metres sobre el carrer' },
  'ceiling.tag': { es: 'Montjuïc · 177,7 m — el techo que Gaudí no quiso superar', ca: 'Montjuïc · 177,7 m — el sostre que Gaudí no va voler superar' },
  'ms.0.l': { es: 'A pie de calle', ca: 'Al peu del carrer' },
  'ms.1.l': { es: 'Sala del Crucero, en el interior', ca: "Sala del Creuer, a l'interior" },
  'ms.2.l': { es: 'Final del ascensor', ca: "Final de l'ascensor" },
  'ms.3.l': { es: 'Mirador a pie · arranca el terminal de 29 m', ca: 'Mirador a peu · arrenca el terminal de 29 m' },
  'ms.4.l': { es: 'Nace la cruz de cuatro brazos', ca: 'Neix la creu de quatre braços' },
  'ms.5.l': { es: 'La punta de la cruz · cota máxima', ca: 'La punta de la creu · cota màxima' },
  verse: { es: '«Yo soy la luz del mundo»', ca: '«Jo soc la llum del món»' },
  'scrolly.foot': { es: 'La cota de 172,5 m no es casual: Gaudí la fijó para que la obra del hombre no superara la montaña, obra de Dios.', ca: "La cota de 172,5 m no és casual: Gaudí la va fixar perquè l'obra de l'home no superés la muntanya, obra de Déu." },
  'h3.eyebrow': { es: '03 · A escala', ca: '03 · A escala' },
  'h3.title': { es: 'Alta, pero nunca más que la montaña', ca: 'Alta, però mai més que la muntanya' },
  'h3.lede': { es: 'Con 172,5 m supera a Ulm —récord anterior— y a cualquier iglesia del mundo, y se detiene justo por debajo de Montjuïc.', ca: "Amb 172,5 m supera Ulm —rècord anterior— i qualsevol església del món, i s'atura just per sota de Montjuïc." },
  'cmp.montjuic.n': { es: 'Montjuïc', ca: 'Montjuïc' },
  'cmp.montjuic.t': { es: 'la montaña · el techo', ca: 'la muntanya · el sostre' },
  'cmp.sf.n': { es: 'Sagrada Família', ca: 'Sagrada Família' },
  'cmp.sf.t': { es: 'la más alta del mundo', ca: 'la més alta del món' },
  'cmp.ulm.n': { es: 'Catedral de Ulm', ca: "Catedral d'Ulm" },
  'cmp.ulm.t': { es: 'récord anterior · Alemania', ca: 'rècord anterior · Alemanya' },
  'cmp.colonia.n': { es: 'Catedral de Colonia', ca: 'Catedral de Colònia' },
  'cmp.colonia.t': { es: 'Alemania', ca: 'Alemanya' },
  'cmp.pisa.n': { es: 'Torre de Pisa', ca: 'Torre de Pisa' },
  'cmp.pisa.t': { es: 'Italia', ca: 'Itàlia' },
  'cmp.src': { es: 'Alturas en metros · siluetas a escala', ca: 'Alçades en metres · siluetes a escala' },
  'cmp.ceil': { es: 'el techo que no se supera', ca: 'el sostre que no se supera' },
  'h4.eyebrow': { es: '04 · El remate', ca: '04 · El coronament' },
  'h4.title': { es: 'Anatomía de la cruz', ca: 'Anatomia de la creu' },
  'h4.lede': { es: 'No es una cruz plana. Es una estructura tridimensional de doble giro —la misma geometría de las columnas de Gaudí— revestida de cerámica blanca esmaltada y vidrio.', ca: 'No és una creu plana. És una estructura tridimensional de doble gir —la mateixa geometria de les columnes de Gaudí— revestida de ceràmica blanca esmaltada i vidre.' },
  'cruz.s1.v': { es: '17<span class="u"> m</span>', ca: '17<span class="u"> m</span>' },
  'cruz.s1.k': { es: 'de altura — como un edificio de cinco plantas', ca: "d'alçada — com un edifici de cinc plantes" },
  'cruz.s2.v': { es: '13,5<span class="u"> m</span>', ca: '13,5<span class="u"> m</span>' },
  'cruz.s2.k': { es: 'de anchura, de brazo a brazo', ca: "d'amplada, de braç a braç" },
  'cruz.s3.v': { es: '≈200<span class="u"> t</span>', ca: '≈200<span class="u"> t</span>' },
  'cruz.s3.k': { es: 'de peso · izada en siete piezas premontadas a 54 m', ca: 'de pes · hissada en set peces premuntades a 54 m' },
  'cruz.s4.v': { es: '4', ca: '4' },
  'cruz.s4.k': { es: 'brazos horizontales con ventanal-mirador en cada punta', ca: 'braços horitzontals amb finestral-mirador a cada punta' },
  'cruz.foot': { es: '«Que brille de día y dé luz de noche», escribió Gaudí. De noche, un haz de luz sale de cada brazo.', ca: '«Que brilli de dia i faci llum de nit», va escriure Gaudí. De nit, un feix de llum surt de cada braç.' },
  'h5.eyebrow': { es: '05 · La aguja que creció', ca: "05 · L'agulla que va créixer" },
  'h5.title': { es: '1882 → 2026', ca: '1882 → 2026' },
  'h5.lede': { es: 'Ciento cuarenta y cuatro años de obra, condensados en la última década de ascenso.', ca: "Cent quaranta-quatre anys d'obra, condensats en l'última dècada d'ascens." },
  'tl.1882.t': { es: 'Se coloca la primera piedra', ca: 'Es col·loca la primera pedra' },
  'tl.1882.b': { es: 'Arranca la construcción del Templo Expiatorio. Un año después, Gaudí toma las riendas del proyecto.', ca: "Arrenca la construcció del Temple Expiatori. Un any després, Gaudí pren les regnes del projecte." },
  'tl.1926.t': { es: 'Muere Antoni Gaudí', ca: 'Mor Antoni Gaudí' },
  'tl.1926.b': { es: 'El arquitecto deja maquetas, planos y geometrías regladas que guiarán el resto de la obra. Su centenario se conmemora en 2026.', ca: "L'arquitecte deixa maquetes, plànols i geometries reglades que guiaran la resta de l'obra. El seu centenari es commemora el 2026." },
  'tl.2010.t': { es: 'Benedicto XVI consagra el templo', ca: 'Benet XVI consagra el temple' },
  'tl.2010.b': { es: 'La Sagrada Família es declarada basílica.', ca: 'La Sagrada Família és declarada basílica.' },
  'tl.2021.t': { es: 'La estrella de la Virgen María', ca: "L'estel de la Mare de Déu" },
  'tl.2021.b': { es: 'Se enciende la estrella que corona la torre de la Virgen, antesala del tramo final.', ca: "S'encén l'estel que corona la torre de la Mare de Déu, avantsala del tram final." },
  'tl.2023.t': { es: 'Las cuatro torres de los evangelistas', ca: 'Les quatre torres dels evangelistes' },
  'tl.2023.b': { es: 'Quedan rematadas con sus símbolos: ángel, león, toro y águila.', ca: 'Queden coronades amb els seus símbols: àngel, lleó, brau i àguila.' },
  'tl.2024.t': { es: 'Diciembre · 142,5 m de paneles', ca: 'Desembre · 142,5 m de panells' },
  'tl.2024.b': { es: 'Se completa el último nivel de paneles de piedra tesada de la torre de Jesús.', ca: "Es completa l'últim nivell de panells de pedra tesada de la torre de Jesús." },
  'tl.2025.t': { es: 'Octubre · la iglesia más alta del mundo', ca: "Octubre · l'església més alta del món" },
  'tl.2025.b': { es: 'Con el brazo inferior de la cruz, la torre alcanza 162,9 m y supera a Ulm.', ca: 'Amb el braç inferior de la creu, la torre arriba a 162,9 m i supera Ulm.' },
  'tl.2026feb.t': { es: '20 de febrero · 172,5 m', ca: '20 de febrer · 172,5 m' },
  'tl.2026feb.b': { es: 'El brazo superior corona la cruz. El templo toca su cota máxima.', ca: 'El braç superior corona la creu. El temple toca la seva cota màxima.' },
  'tl.2026jun.t': { es: '10 de junio · bendición', ca: '10 de juny · benedicció' },
  'tl.2026jun.b': { es: 'Inauguración de la Torre de Jesucristo, en el centenario de la muerte de Gaudí.', ca: 'Inauguració de la Torre de Jesucrist, en el centenari de la mort de Gaudí.' },
  'h6.eyebrow': { es: '06 · El bosque de piedra', ca: '06 · El bosc de pedra' },
  'h6.title': { es: 'Dieciocho torres,<br>un solo orden', ca: 'Divuit torres,<br>un sol ordre' },
  'h6.lede': { es: 'La torre de Jesús preside un sistema jerárquico: cuanto más alto el cielo simbólico, más alta la piedra.', ca: 'La torre de Jesús presideix un sistema jeràrquic: com més alt el cel simbòlic, més alta la pedra.' },
  'tw.jesus': { es: 'Jesucristo — 1', ca: 'Jesucrist — 1' },
  'tw.maria': { es: 'La Virgen María — 1', ca: 'La Mare de Déu — 1' },
  'tw.evang': { es: 'Los evangelistas — 4', ca: 'Els evangelistes — 4' },
  'tw.apost': { es: 'Los apóstoles — 12', ca: 'Els apòstols — 12' },
  'cl.eyebrow': { es: 'Coda', ca: 'Coda' },
  'cl.title': { es: 'Una luz para el centenario', ca: 'Una llum per al centenari' },
  'cl.lede': { es: 'Cien años después de Gaudí, la cruz ya corona Barcelona. Lo que él dibujó en maquetas iluminadas es hoy un faro real sobre la ciudad.', ca: 'Cent anys després de Gaudí, la creu ja corona Barcelona. El que ell va dibuixar en maquetes il·luminades és avui un far real sobre la ciutat.' },
  'cl.date': { es: '10 de junio de 2026', ca: '10 de juny de 2026' },
  'cl.date.s': { es: 'Bendición · Centenario de Gaudí', ca: 'Benedicció · Centenari de Gaudí' },
  'soc.head': { es: 'Tarjetas para redes', ca: 'Targetes per a xarxes' },
  'soc.sub': { es: 'Listas para exportar — cuadrado 1080×1080 y story 1080×1920', ca: 'Llestes per exportar — quadrat 1080×1080 i story 1080×1920' },
  'soc.kicker': { es: 'La iglesia más alta del mundo', ca: "L'església més alta del món" },
  'soc.foot': { es: 'Sagrada Família · Barcelona', ca: 'Sagrada Família · Barcelona' },
  'soc.sq.label': { es: 'Post cuadrado · 1080×1080', ca: 'Post quadrat · 1080×1080' },
  'soc.story.label': { es: 'Story · 1080×1920', ca: 'Story · 1080×1920' },
  'colo.marque': { es: 'La escalera de luz', ca: "L'escala de llum" },
  'colo.body': { es: 'Reportaje visual sobre la Torre de Jesucristo de la Sagrada Família. Datos: Basílica de la Sagrada Família y prensa, 2026. Infografías originales.', ca: 'Reportatge visual sobre la Torre de Jesucrist de la Sagrada Família. Dades: Basílica de la Sagrada Família i premsa, 2026. Infografies originals.' },
  // ---- fusión: prosa + vídeos ----
  'intro.b': { es: 'Después de <strong>144 años de obras</strong>, la Sagrada Família ha alcanzado su altura definitiva. El 20 de febrero de 2026 se colocó la pieza final de la <strong>Torre de Jesucristo</strong> y el templo se convirtió en la <strong>iglesia más alta del mundo</strong>. El 10 de junio, en el centenario de la muerte de Gaudí, el Papa León XIV la bendice e inaugura.', ca: "Després de <strong>144 anys d'obres</strong>, la Sagrada Família ha arribat a la seva alçada definitiva. El 20 de febrer de 2026 es va col·locar la peça final de la <strong>Torre de Jesucrist</strong> i el temple es va convertir en l'<strong>església més alta del món</strong>. El 10 de juny, en el centenari de la mort de Gaudí, el Papa Lleó XIV la beneeix i la inaugura." },
  'vid.cruz.cap': { es: 'La cruz completa de la Torre de Jesús, al descubrirse los andamios (marzo de 2026).', ca: 'La creu completa de la Torre de Jesús, en descobrir-se les bastides (març de 2026).' },
  'vid.rtve.cap': { es: 'La instalación de la última pieza de la cruz, en febrero de 2026 (RTVE).', ca: "La instal·lació de l'última peça de la creu, el febrer de 2026 (RTVE)." },
  'vid.tl.cap': { es: 'Timelapse: la construcción de la Sagrada Família, de 1882 a 2026.', ca: 'Timelapse: la construcció de la Sagrada Família, de 1882 a 2026.' },
  'prose.mirador.h': { es: 'El mirador más alto de Barcelona', ca: 'El mirador més alt de Barcelona' },
  'prose.mirador.b': { es: 'El interior de la torre se concibe como un espacio visitable. A 65 m está la <strong>Sala del Crucero</strong>, con bóvedas de azulejo y vidrio veneciano rojo; un <strong>ascensor de vidrio</strong> sube hasta los 138 m y, a pie, se alcanzan los 144 m. La torre interior es de granito blanco perforado con orificios en forma de rombo por los que se filtra la luz.', ca: "L'interior de la torre es concep com un espai visitable. A 65 m hi ha la <strong>Sala del Creuer</strong>, amb voltes de rajola i vidre venecià vermell; un <strong>ascensor de vidre</strong> puja fins als 138 m i, a peu, s'arriba als 144 m. La torre interior és de granit blanc perforat amb orificis en forma de rombe pels quals es filtra la llum." },
  'prose.cruz.h': { es: 'Una cruz que ilumina Barcelona', ca: 'Una creu que il·lumina Barcelona' },
  'prose.cruz.b': { es: 'La cruz está revestida de <strong>cerámica vidriada blanca y vidrio</strong>, materiales que, como escribió Gaudí, debían lograr que «brille de día y dé luz de noche». El proyecto de iluminación —en el que colabora la Fundación Endesa— prevé focos en los extremos de los brazos y luz interior, convirtiendo el remate en un auténtico faro espiritual sobre la ciudad.', ca: 'La creu està revestida de <strong>ceràmica vidrada blanca i vidre</strong>, materials que, com va escriure Gaudí, havien d\'aconseguir que «brilli de dia i faci llum de nit». El projecte d\'il·luminació —en què col·labora la Fundació Endesa— preveu focus als extrems dels braços i llum interior, i converteix el remat en un autèntic far espiritual sobre la ciutat.' },
}

function Yt({ id, title }: { id: string; title: string }) {
  return (
    <div className="esc-video">
      <div className="ratio">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function EscaleraDeLuz({ locale }: { locale: Locale }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const t = (k: string) => D[k]?.[locale] ?? D[k]?.es ?? ''
  // i18n slot: element whose innerHTML is the dictionary value
  const i = (k: string) => ({ dangerouslySetInnerHTML: { __html: t(k) } })

  /* ---- mode toggle ---- */
  const toggleMode = () => {
    const root = rootRef.current
    if (!root) return
    const next = root.getAttribute('data-mode') === 'night' ? 'day' : 'night'
    root.setAttribute('data-mode', next)
    try { localStorage.setItem('tdj-mode', next) } catch {}
  }

  /* ---- engine: reveals, timeline grow, scrollytelling, hero parallax ---- */
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    try {
      const m = localStorage.getItem('tdj-mode')
      if (m === 'day' || m === 'night') root.setAttribute('data-mode', m)
    } catch {}

    const q = <T extends Element>(s: string) => root.querySelector(s) as T | null
    const qa = (s: string) => Array.from(root.querySelectorAll(s))

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    qa('.reveal').forEach((el) => io.observe(el))

    const tEvents = qa('.tevent')
    const tGrow = q<HTMLElement>('.timeline__grow')
    const tSpine = q<HTMLElement>('.timeline__spine')
    const tio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.35 })
    tEvents.forEach((el) => tio.observe(el))

    const scrolly = q<HTMLElement>('.scrolly')
    const stage = q<HTMLElement>('.scrolly__stage')
    const skyNight = q<HTMLElement>('.scrolly__sky.night')
    const stars = q<HTMLElement>('.scrolly__stars')
    const altNum = q<HTMLElement>('.alt-readout .num .val')
    const milestones = qa('.milestone') as HTMLElement[]
    const ceiling = q<HTMLElement>('.ceiling')
    const verse = q<HTMLElement>('.scrolly__verse')
    const towerLight = q<SVGRectElement>('#towerLightClipRect')
    const crossGlow = q<HTMLElement>('.alt-cross-glow')
    const TOWER_SVG_H = 1000, SCALE_TOP_M = 180, MAX_M = 172.5
    const mToBottomPct = (m: number) => (m / SCALE_TOP_M) * 86
    const placeFlags = () => {
      milestones.forEach((el) => { el.style.bottom = mToBottomPct(parseFloat(el.dataset.m || '0')).toFixed(2) + '%' })
      if (ceiling) ceiling.style.bottom = mToBottomPct(177.7).toFixed(2) + '%'
    }
    placeFlags()
    const easeOut = (x: number) => 1 - Math.pow(1 - x, 2.2)

    const updateTimelineGrow = () => {
      if (!tGrow || !tSpine) return
      const r = tSpine.getBoundingClientRect()
      let p = (window.innerHeight * 0.62 - r.top) / r.height
      p = Math.max(0, Math.min(1, p))
      tGrow.style.height = (p * 100).toFixed(2) + '%'
    }
    const updateScrolly = () => {
      if (!scrolly || !stage) return
      const rect = scrolly.getBoundingClientRect()
      const range = scrolly.offsetHeight - window.innerHeight
      let p = range > 0 ? -rect.top / range : 0
      p = Math.max(0, Math.min(1, p))
      const climb = Math.min(1, p / 0.82)
      const alt = easeOut(climb) * MAX_M
      if (altNum) altNum.textContent = alt.toFixed(1).replace('.', ',')
      if (towerLight) {
        const hh = TOWER_SVG_H * (alt / SCALE_TOP_M)
        towerLight.setAttribute('y', (TOWER_SVG_H - hh).toFixed(1))
        towerLight.setAttribute('height', hh.toFixed(1))
      }
      milestones.forEach((el) => el.classList.toggle('lit', alt >= parseFloat(el.dataset.m || '0') - 1.2))
      const night = Math.max(0, Math.min(1, (alt - 118) / (MAX_M - 118)))
      if (skyNight) skyNight.style.opacity = night.toFixed(3)
      if (stars) stars.style.opacity = (night * 0.9).toFixed(3)
      stage.classList.toggle('night-on', night > 0.55)
      const ignite = Math.max(0, Math.min(1, (alt - 168) / (MAX_M - 168)))
      if (crossGlow) crossGlow.style.opacity = ignite.toFixed(3)
      if (verse) verse.classList.toggle('show', p > 0.9)
    }
    const heroTower = q<HTMLElement>('.hero__tower')
    const heroCopy = q<HTMLElement>('.hero__copy')
    const updateHero = () => {
      if (!heroTower) return
      const y = window.scrollY || window.pageYOffset
      if (y > window.innerHeight * 1.3) return
      heroTower.style.transform = `translateX(-50%) translateY(${(y * 0.18).toFixed(1)}px)`
      if (heroCopy) {
        heroCopy.style.transform = `translateY(${(y * -0.06).toFixed(1)}px)`
        heroCopy.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.72)))
      }
    }
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { updateScrolly(); updateTimelineGrow(); updateHero(); ticking = false })
    }
    const onResize = () => { placeFlags(); onScroll() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    onScroll()
    return () => {
      io.disconnect(); tio.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="escalera" ref={rootRef} data-mode="night">
      {/* global pencil + light defs */}
      <svg className="defs" aria-hidden="true" focusable="false" width="0" height="0">
        <defs>
          <filter id="pencil" x="-7%" y="-7%" width="114%" height="114%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={3} seed={4} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale={2.4} xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <radialGradient id="lightCore" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="24%" stopColor="#ffffff" stopOpacity="0.52" />
            <stop offset="58%" stopColor="#ffffff" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lightRise" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#1b1b14" stopOpacity="0.45" />
            <stop offset="0.55" stopColor="#8b887d" stopOpacity="0.5" />
            <stop offset="0.85" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.98" />
          </linearGradient>
        </defs>
      </svg>

      <button className="mode-toggle" aria-label="Día / Noche" title="Día / Noche" onClick={toggleMode} type="button">
        <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.6v2.4M12 19v2.4M2.6 12H5M19 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" /></svg>
        <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" /></svg>
      </button>

      {/* ===== HERO ===== */}
      <header className="hero">
        <svg className="hero__stars" preserveAspectRatio="none" viewBox="0 0 1000 1000" aria-hidden="true">
          <g fill="#fff">
            <circle cx="120" cy="120" r="1.1" opacity="0.7" /><circle cx="300" cy="80" r="0.8" opacity="0.5" />
            <circle cx="520" cy="150" r="1.3" opacity="0.8" /><circle cx="720" cy="90" r="0.9" opacity="0.6" />
            <circle cx="860" cy="180" r="1.1" opacity="0.7" /><circle cx="200" cy="260" r="0.7" opacity="0.45" />
            <circle cx="650" cy="240" r="1" opacity="0.6" /><circle cx="900" cy="320" r="0.8" opacity="0.5" />
            <circle cx="80" cy="360" r="1.2" opacity="0.7" /><circle cx="420" cy="300" r="0.7" opacity="0.4" />
            <circle cx="770" cy="380" r="1.1" opacity="0.6" /><circle cx="560" cy="60" r="0.8" opacity="0.55" />
            <circle cx="340" cy="200" r="1" opacity="0.5" /><circle cx="960" cy="120" r="0.9" opacity="0.6" />
          </g>
        </svg>
        <div className="hero__moon" aria-hidden="true" />
        <div className="hero__tower" aria-hidden="true">
          <svg viewBox="0 0 200 1000" preserveAspectRatio="xMidYMax meet">
            <circle className="cross-glow-core" cx="100" cy="70" r="96" fill="url(#lightCore)" />
            <g className="sketch" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M70,1000 C82,740 90,520 95,330 C97,260 97,205 96.5,150 L103.5,150 C103,205 103,260 105,330 C110,520 118,740 130,1000 Z" strokeWidth={1.6} strokeOpacity={0.85} />
              <g strokeWidth={0.7} strokeOpacity={0.4}>
                <path d="M88,980 C95,720 99,470 100,170" /><path d="M112,980 C105,720 101,470 100,170" />
                <path d="M79,990 C88,720 94,470 97,210" /><path d="M121,990 C112,720 106,470 103,210" />
              </g>
              <g strokeWidth={0.6} strokeOpacity={0.32}>
                <path d="M86,760 H114" /><path d="M89,560 H111" /><path d="M92,380 H108" /><path d="M94,250 H106" />
              </g>
              <path d="M96.5,150 L97.5,118 L102.5,118 L103.5,150 Z" strokeWidth={1.2} strokeOpacity={0.8} />
            </g>
            <g className="sketch cross-3d" stroke="#fff" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" fill="none">
              <path d="M97,44 L103,44 L103,118 L97,118 Z" />
              <path d="M74,64 L126,64 L126,78 L74,78 Z" />
              <path d="M103,44 L106,41 L106,115 L103,118" strokeOpacity={0.5} />
              <path d="M126,64 L129,61 L129,75 L126,78" strokeOpacity={0.5} />
              <g strokeWidth={1}>
                <rect x="96.5" y="46" width="7" height="7" transform="rotate(45 100 49.5)" />
                <rect x="76" y="67.5" width="7" height="7" transform="rotate(45 79.5 71)" />
                <rect x="117" y="67.5" width="7" height="7" transform="rotate(45 120.5 71)" />
              </g>
            </g>
          </svg>
        </div>
        <div className="hero__ground" aria-hidden="true" />
        <div className="hero__copy">
          <p className="eyebrow" {...i('hero.eyebrow')} />
          <h1 {...i('hero.title')} />
          <p className="hero__sub" {...i('hero.sub')} />
          <div className="hero__meta">
            <span {...i('hero.m1')} /><span className="dot" />
            <span {...i('hero.m2')} /><span className="dot" />
            <span {...i('hero.m3')} />
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span {...i('cue')} />
          <span className="line" />
        </div>
      </header>

      {/* ===== ANCHOR ===== */}
      <section className="section anchor">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ justifyContent: 'center', color: 'var(--chalk-soft)' }} {...i('anchor.kicker')} />
          <div className="anchor__num reveal d1">172,5<span className="anchor__unit">m</span></div>
          <p className="anchor__label reveal d2" {...i('anchor.label')} />
          <p className="anchor__sub reveal d3" {...i('anchor.sub')} />
        </div>
      </section>

      {/* ===== INTRO prosa + vídeo ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="narrow esc-prose">
          <p className="reveal" {...i('intro.b')} />
          <div className="reveal d1" style={{ marginTop: 'clamp(28px,4vw,44px)' }}>
            <Yt id="r2y27rprekM" title="La cruz completa de la Torre de Jesús" />
            <p className="esc-cap" {...i('vid.cruz.cap')} />
          </div>
        </div>
      </section>

      {/* ===== SCROLLY intro ===== */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="narrow">
          <p className="eyebrow reveal" {...i('h2.eyebrow')} />
          <h2 className="h-section reveal d1" {...i('h2.title')} />
          <p className="lede reveal d2" style={{ marginTop: '1.1em' }} {...i('h2.lede')} />
        </div>
      </section>

      {/* ===== SCROLLYTELLING ===== */}
      <section className="scrolly">
        <div className="scrolly__stage">
          <div className="scrolly__sky day" aria-hidden="true" />
          <div className="scrolly__sky night" aria-hidden="true" />
          <svg className="scrolly__stars" preserveAspectRatio="none" viewBox="0 0 1000 1000" aria-hidden="true">
            <g fill="#fff">
              <circle cx="140" cy="120" r="1.1" opacity="0.7" /><circle cx="360" cy="90" r="0.8" opacity="0.5" />
              <circle cx="600" cy="150" r="1.2" opacity="0.8" /><circle cx="820" cy="80" r="0.9" opacity="0.6" />
              <circle cx="240" cy="240" r="0.8" opacity="0.5" /><circle cx="720" cy="260" r="1" opacity="0.6" />
              <circle cx="900" cy="200" r="1.1" opacity="0.7" /><circle cx="480" cy="200" r="0.7" opacity="0.4" />
              <circle cx="100" cy="320" r="1" opacity="0.6" /><circle cx="560" cy="60" r="0.8" opacity="0.5" />
            </g>
          </svg>
          <div className="scrolly__inner">
            <div className="alt-readout" aria-hidden="true">
              <div className="num"><span className="val">0,0</span><span className="u">m</span></div>
              <div className="cap" {...i('alt.cap')} />
            </div>
            <div className="ceiling">
              <span className="rule" />
              <span className="tag" {...i('ceiling.tag')} />
            </div>
            {[
              { m: '0', k: 'ms.0.l', n: '0 m' },
              { m: '65', k: 'ms.1.l', n: '65 m' },
              { m: '138', k: 'ms.2.l', n: '138 m' },
              { m: '144', k: 'ms.3.l', n: '144 m' },
              { m: '155.5', k: 'ms.4.l', n: '155,5 m' },
              { m: '172.5', k: 'ms.5.l', n: '172,5 m' },
            ].map((ms) => (
              <div className="milestone" data-m={ms.m} key={ms.m}>
                <span className="tick" />
                <div>
                  <div className="m-num">{ms.n}</div>
                  <div className="m-lab" {...i(ms.k)} />
                </div>
              </div>
            ))}
            <div className="alt-tower-wrap" aria-hidden="true">
              <svg viewBox="0 0 200 1000" preserveAspectRatio="xMidYMax meet">
                <defs>
                  <clipPath id="towerClip">
                    {/* solo el fuste: la luz sube por la torre, la cruz no crece */}
                    <path d="M70,1000 C82,740 90,520 95,330 C97,260 97,205 96.5,150 L103.5,150 C103,205 103,260 105,330 C110,520 118,740 130,1000 Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#towerClip)">
                  <rect id="towerLightClipRect" x="0" y="1000" width="200" height="0" fill="url(#lightRise)" />
                </g>
                <path className="tower-outline sketch" d="M70,1000 C82,740 90,520 95,330 C97,260 97,205 96.5,150 L103.5,150 C103,205 103,260 105,330 C110,520 118,740 130,1000 Z" fill="none" strokeWidth={1.6} strokeLinejoin="round" />
                <g className="tower-outline sketch" fill="none" strokeWidth={0.7} strokeOpacity={0.5}>
                  <path d="M88,980 C95,720 99,470 100,170" /><path d="M112,980 C105,720 101,470 100,170" />
                </g>
                <g className="tower-outline sketch" strokeWidth={0.6} strokeOpacity={0.4}>
                  <path d="M86,760 H114" /><path d="M89,560 H111" /><path d="M92,380 H108" /><path d="M94,250 H106" />
                </g>
                <g className="tower-outline sketch" fill="none" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round">
                  <path d="M96.5,42 H103.5 V138 H96.5 Z" />
                  <path d="M72,64 H128 V78 H72 Z" />
                </g>
                <circle className="alt-cross-glow" cx="100" cy="70" r="92" fill="url(#lightCore)" opacity="0" />
              </svg>
            </div>
            <div className="scrolly__verse" {...i('verse')} />
          </div>
        </div>
      </section>

      <section className="section is-night" style={{ paddingTop: 'clamp(60px,9vh,110px)' }}>
        <div className="narrow">
          <hr className="hair-line" style={{ marginBottom: 40 }} />
          <p className="lede" style={{ maxWidth: '46ch' }} {...i('scrolly.foot')} />
          <div className="esc-prose reveal" style={{ marginTop: 'clamp(32px,5vw,56px)' }}>
            <h3 className="h-section" style={{ fontSize: 'clamp(1.5rem,3.4vw,2.4rem)', color: '#f6f1e4', marginBottom: '.5em' }} {...i('prose.mirador.h')} />
            <p {...i('prose.mirador.b')} />
          </div>
        </div>
      </section>

      {/* ===== COMPARATIVA ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <div className="section-head narrow" style={{ marginInline: 0 }}>
            <p className="eyebrow reveal" {...i('h3.eyebrow')} />
            <h2 className="h-section reveal d1" {...i('h3.title')} />
            <p className="lede reveal d2" style={{ marginTop: '1.1em' }} {...i('h3.lede')} />
          </div>
          <div className="compare-chart reveal d2">
            <p className="cmp-ceiling-label"><b>Montjuïc</b> · 177,7 m — <em {...i('cmp.ceil')} /></p>
            <svg className="cmp-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Comparativa de alturas a escala">
              <g stroke="#8b887d" strokeWidth={0.8} strokeOpacity={0.32}>
                <line x1="40" y1="353.4" x2="980" y2="353.4" /><line x1="40" y1="226.8" x2="980" y2="226.8" /><line x1="40" y1="100.2" x2="980" y2="100.2" />
              </g>
              <g style={{ fontFamily: 'var(--mono)' }} fontSize="12" fill="#8b887d">
                <text x="40" y="349">50 m</text><text x="40" y="222.4">100 m</text><text x="40" y="95.8">150 m</text>
              </g>
              <path className="sketch" d="M40,96 C260,46 400,33 500,31 C600,33 740,46 960,96" fill="none" stroke="#8b887d" strokeWidth={1.2} strokeOpacity={0.5} strokeLinecap="round" />
              <line x1="40" y1="31" x2="980" y2="31" stroke="#54524a" strokeWidth={1.2} strokeDasharray="6 5" />
              <g className="sketch" fill="none" stroke="#1b1b14" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round">
                <path d="M116,92 L113,480 L137,480 L134,92 Z" />
                <path d="M104,150 L97,480 L111,480 Z" /><path d="M146,150 L139,480 L153,480 Z" />
                <path d="M88,200 L81,480 L95,480 Z" /><path d="M162,200 L155,480 L169,480 Z" />
                <g strokeWidth={1} strokeOpacity={0.6}><path d="M116,180 H134" /><path d="M116,270 H134" /><path d="M116,360 H134" /></g>
                <path d="M122,43 L128,43 L128,92 L122,92 Z" />
                <path d="M114,58 L136,58 L136,66 L114,66 Z" />
              </g>
              <g className="sketch" fill="none" stroke="#54524a" strokeWidth={1.7} strokeLinejoin="round" strokeLinecap="round">
                <path d="M375,71 L387,130 L381,130 L381,480 L369,480 L369,130 L363,130 Z" />
                <g strokeWidth={1} strokeOpacity={0.6}><path d="M369,210 H381" /><path d="M369,310 H381" /><path d="M369,410 H381" /></g>
              </g>
              <g className="sketch" fill="none" stroke="#54524a" strokeWidth={1.7} strokeLinejoin="round" strokeLinecap="round">
                <path d="M611,81 L620,135 L615,135 L615,480 L607,480 L607,135 L602,135 Z" />
                <path d="M639,81 L648,135 L643,135 L643,480 L635,480 L635,135 L630,135 Z" />
                <path d="M615,300 L635,300 L635,480 L615,480 Z" strokeOpacity={0.6} />
              </g>
              <g className="sketch" fill="none" stroke="#54524a" strokeWidth={1.7} strokeLinejoin="round" strokeLinecap="round" transform="rotate(6 875 480)">
                <path d="M858,336 H892 M860,336 V480 H890 V336" />
                <g strokeWidth={1} strokeOpacity={0.6}><path d="M860,360 H890" /><path d="M860,384 H890" /><path d="M860,408 H890" /><path d="M860,432 H890" /><path d="M860,456 H890" /></g>
              </g>
              <line x1="40" y1="480" x2="980" y2="480" stroke="#1b1b14" strokeWidth={1.5} />
            </svg>
            <div className="cmp-labels">
              <div className="cmp-cell is-star"><div className="cmp-h">172,5 m</div><div className="cmp-n" {...i('cmp.sf.n')} /><div className="cmp-t" {...i('cmp.sf.t')} /></div>
              <div className="cmp-cell"><div className="cmp-h">161,5 m</div><div className="cmp-n" {...i('cmp.ulm.n')} /><div className="cmp-t" {...i('cmp.ulm.t')} /></div>
              <div className="cmp-cell"><div className="cmp-h">157,4 m</div><div className="cmp-n" {...i('cmp.colonia.n')} /><div className="cmp-t" {...i('cmp.colonia.t')} /></div>
              <div className="cmp-cell"><div className="cmp-h">57 m</div><div className="cmp-n" {...i('cmp.pisa.n')} /><div className="cmp-t" {...i('cmp.pisa.t')} /></div>
            </div>
          </div>
          <p className="src reveal" style={{ textAlign: 'center', marginTop: 34 }} {...i('cmp.src')} />
        </div>
      </section>

      {/* ===== CRUZ ===== */}
      <section className="section is-night">
        <div className="wrap">
          <div className="section-head narrow" style={{ marginInline: 0 }}>
            <p className="eyebrow reveal" {...i('h4.eyebrow')} />
            <h2 className="h-section reveal d1" style={{ color: '#f6f1e4' }} {...i('h4.title')} />
            <p className="lede reveal d2" style={{ marginTop: '1.1em', color: 'rgba(233,228,214,0.78)' }} {...i('h4.lede')} />
          </div>
          <div className="cruz-grid">
            <div className="cruz-fig reveal d1">
              <svg viewBox="0 0 380 520" preserveAspectRatio="xMidYMid meet">
                <circle cx="150" cy="200" r="186" fill="url(#lightCore)" opacity="0.9" />
                <g className="sketch" stroke="#fff" strokeWidth={1} strokeDasharray="2 7" opacity="0.5" strokeLinecap="round">
                  <path d="M150,120 V36" /><path d="M150,280 V362" /><path d="M70,200 H4" /><path d="M230,200 H300" />
                </g>
                <g className="sketch" stroke="#efece1" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" fill="none">
                  <path d="M134,120 H166 V60 L150,44 L134,60 Z" />
                  <path d="M134,280 H166 V356 H134 Z" />
                  <path d="M70,184 V216 H150 V184 Z" />
                  <path d="M150,184 H230 V216 H150 Z" />
                  <path d="M166,184 L196,158 H262 L230,184" strokeOpacity={0.55} />
                  <path d="M166,216 L196,242" strokeOpacity={0.55} />
                  <path d="M134,184 H166 V216 H134 Z" />
                </g>
                <g className="sketch" fill="none" stroke="#fff" strokeWidth={1.2}>
                  <rect x="142" y="50" width="16" height="16" transform="rotate(45 150 58)" />
                  <rect x="62" y="192" width="16" height="16" transform="rotate(45 70 200)" />
                  <rect x="222" y="192" width="16" height="16" transform="rotate(45 230 200)" />
                </g>
                <circle cx="150" cy="86" r="9" fill="none" stroke="#efece1" strokeWidth={1.2} strokeOpacity={0.7} />
                <g stroke="rgba(239,236,225,0.55)" strokeWidth={1.4} fill="none" strokeLinecap="round" transform="translate(330,470)">
                  <circle cx="0" cy="-30" r="5" /><path d="M0,-25 V-6 M-7,-18 H7 M0,-6 L-6,8 M0,-6 L6,8" />
                </g>
                <g stroke="rgba(239,236,225,0.4)" strokeWidth={1} strokeLinecap="round">
                  <path d="M346,44 V478 M341,44 H351 M341,478 H351" />
                </g>
                <text x="356" y="260" fill="rgba(239,236,225,0.85)" style={{ fontFamily: 'var(--serif)' }} fontSize="22" fontWeight="600" transform="rotate(90 356 260)" textAnchor="middle">17 m</text>
              </svg>
            </div>
            <div className="cruz-specs reveal d2">
              <div className="spec-row"><div className="v" {...i('cruz.s1.v')} /><div className="k" {...i('cruz.s1.k')} /></div>
              <div className="spec-row"><div className="v" {...i('cruz.s2.v')} /><div className="k" {...i('cruz.s2.k')} /></div>
              <div className="spec-row"><div className="v" {...i('cruz.s3.v')} /><div className="k" {...i('cruz.s3.k')} /></div>
              <div className="spec-row"><div className="v" {...i('cruz.s4.v')} /><div className="k" {...i('cruz.s4.k')} /></div>
              <p className="note" style={{ marginTop: 26, color: 'rgba(239,236,225,0.66)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.5 }} {...i('cruz.foot')} />
            </div>
          </div>
          <div className="esc-prose reveal" style={{ marginTop: 'clamp(44px,6vw,76px)', maxWidth: 760, marginInline: 'auto' }}>
            <h3 className="h-section" style={{ fontSize: 'clamp(1.5rem,3.4vw,2.4rem)', color: '#f6f1e4', marginBottom: '.5em' }} {...i('prose.cruz.h')} />
            <p {...i('prose.cruz.b')} />
            <div style={{ marginTop: 'clamp(24px,4vw,40px)' }}>
              <Yt id="jh3LmIJbAZI" title="Instalación de la última pieza de la cruz (RTVE)" />
              <p className="esc-cap" {...i('vid.rtve.cap')} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <div className="section-head narrow" style={{ marginInline: 0 }}>
            <p className="eyebrow reveal" {...i('h5.eyebrow')} />
            <h2 className="h-section reveal d1" {...i('h5.title')} />
            <p className="lede reveal d2" style={{ marginTop: '1.1em' }} {...i('h5.lede')} />
          </div>
          <div className="timeline">
            <div className="timeline__spine"><div className="timeline__grow" /></div>
            {[
              { y: '1882', t: 'tl.1882.t', b: 'tl.1882.b' },
              { y: '1926', t: 'tl.1926.t', b: 'tl.1926.b' },
              { y: '2010', t: 'tl.2010.t', b: 'tl.2010.b' },
              { y: '2021', t: 'tl.2021.t', b: 'tl.2021.b' },
              { y: '2023', t: 'tl.2023.t', b: 'tl.2023.b' },
              { y: '2024', t: 'tl.2024.t', b: 'tl.2024.b' },
              { y: '2025', t: 'tl.2025.t', b: 'tl.2025.b' },
              { y: '2026', t: 'tl.2026feb.t', b: 'tl.2026feb.b', f: true },
              { y: '2026', t: 'tl.2026jun.t', b: 'tl.2026jun.b', f: true },
            ].map((e, idx) => (
              <div className={'tevent' + (e.f ? ' is-future' : '')} key={idx}>
                <span className="tevent__dot" />
                <div className="tevent__year">{e.y}</div>
                <div className="tevent__title" {...i(e.t)} />
                <p className="tevent__body" {...i(e.b)} />
              </div>
            ))}
          </div>
          <div className="reveal" style={{ maxWidth: 760, margin: 'clamp(40px,6vw,72px) auto 0' }}>
            <Yt id="EzrEp9BL50E" title="Timelapse de la construcción 1882-2026" />
            <p className="esc-cap" {...i('vid.tl.cap')} />
          </div>
        </div>
      </section>

      {/* ===== 18 TORRES ===== */}
      <section className="section is-night">
        <div className="wrap">
          <div className="section-head narrow" style={{ marginInline: 0 }}>
            <p className="eyebrow reveal" {...i('h6.eyebrow')} />
            <h2 className="h-section reveal d1" style={{ color: '#f6f1e4' }} {...i('h6.title')} />
            <p className="lede reveal d2" style={{ marginTop: '1.1em', color: 'rgba(233,228,214,0.78)' }} {...i('h6.lede')} />
          </div>
          <div className="towers-fig reveal d1">
            <svg viewBox="0 0 900 340" preserveAspectRatio="xMidYMax meet">
              <g className="sketch" fill="none" strokeLinejoin="round" strokeLinecap="round">
                <g stroke="rgba(239,236,225,0.42)" strokeWidth={1.4}>
                  <path d="M40,330 L46,210 L52,330 Z" /><path d="M70,330 L76,205 L82,330 Z" />
                  <path d="M100,330 L106,212 L112,330 Z" /><path d="M130,330 L136,206 L142,330 Z" />
                  <path d="M160,330 L166,214 L172,330 Z" /><path d="M190,330 L196,208 L202,330 Z" />
                  <path d="M698,330 L704,208 L710,330 Z" /><path d="M728,330 L734,214 L740,330 Z" />
                  <path d="M758,330 L764,206 L770,330 Z" /><path d="M788,330 L794,212 L800,330 Z" />
                  <path d="M818,330 L824,205 L830,330 Z" /><path d="M848,330 L854,210 L860,330 Z" />
                </g>
                <g stroke="rgba(239,236,225,0.7)" strokeWidth={1.6}>
                  <path d="M240,330 L250,150 L260,330 Z" /><rect x="245" y="150" width="10" height="10" transform="rotate(45 250 155)" />
                  <path d="M300,330 L310,140 L320,330 Z" /><rect x="305" y="140" width="10" height="10" transform="rotate(45 310 145)" />
                  <path d="M580,330 L590,140 L600,330 Z" /><rect x="585" y="140" width="10" height="10" transform="rotate(45 590 145)" />
                  <path d="M640,330 L650,150 L660,330 Z" /><rect x="645" y="150" width="10" height="10" transform="rotate(45 650 155)" />
                </g>
                <g stroke="rgba(239,236,225,0.92)" strokeWidth={1.8}>
                  <path d="M372,330 L386,96 L400,330 Z" />
                  <path d="M386,70 l4,11 11,1 -8,8 2,11 -9,-6 -9,6 2,-11 -8,-8 11,-1 z" />
                </g>
                <circle cx="475" cy="34" r="42" fill="url(#lightCore)" />
                <g stroke="#ffffff" strokeWidth={2}>
                  <path d="M452,330 L470,70 L472,40 L478,40 L480,70 L498,330 Z" />
                  <path d="M471,16 H479 V60 H471 Z M462,30 H488 V40 H462 Z" />
                </g>
                <path d="M20,330 H880" stroke="rgba(239,236,225,0.3)" strokeWidth={1.2} />
              </g>
            </svg>
          </div>
          <div className="towers-legend reveal d2">
            <span className="tl-item"><span className="tl-swatch" style={{ background: '#ffffff' }} /><span {...i('tw.jesus')} /></span>
            <span className="tl-item"><span className="tl-swatch" style={{ background: 'rgba(239,236,225,0.92)' }} /><span {...i('tw.maria')} /></span>
            <span className="tl-item"><span className="tl-swatch" style={{ background: 'rgba(239,236,225,0.7)' }} /><span {...i('tw.evang')} /></span>
            <span className="tl-item"><span className="tl-swatch" style={{ background: 'rgba(239,236,225,0.42)' }} /><span {...i('tw.apost')} /></span>
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="section closing">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="closing__photo reveal" src="/images/reportaje/sagrada-familia-aerea.jpg" alt={locale === 'ca' ? 'La Sagrada Família a Barcelona' : 'La Sagrada Familia en Barcelona'} width={1400} height={932} loading="lazy" />
          <p className="eyebrow reveal" style={{ justifyContent: 'center', color: 'var(--chalk-soft)' }} {...i('cl.eyebrow')} />
          <h2 className="h-section reveal d1" {...i('cl.title')} />
          <p className="lede reveal d2" {...i('cl.lede')} />
          <div className="closing__date reveal d3">
            <span {...i('cl.date')} />
            <small {...i('cl.date.s')} />
          </div>
        </div>
      </section>

      {/* ===== SOCIAL CARDS ===== */}
      <section className="social-band">
        <div className="wrap">
          <div className="social-band__head">
            <p className="eyebrow" style={{ justifyContent: 'center', color: '#9a7d3a' }} {...i('soc.head')} />
            <p className="src" {...i('soc.sub')} />
          </div>
          <div className="card-frame">
            <div className="card-shell">
              <div className="card sq">
                <svg className="hero__stars" preserveAspectRatio="none" viewBox="0 0 360 360" aria-hidden="true"><g fill="#fff"><circle cx="50" cy="60" r="1" opacity="0.5" /><circle cx="300" cy="40" r="1.2" opacity="0.6" /><circle cx="200" cy="90" r="0.8" opacity="0.4" /><circle cx="120" cy="40" r="0.9" opacity="0.5" /></g></svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 30, zIndex: 2 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(239,236,225,0.7)' }} {...i('soc.kicker')} />
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 96, lineHeight: 0.82, background: 'linear-gradient(180deg,#ffffff,#cbc8bb)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>172,5<span style={{ fontSize: '0.3em', verticalAlign: 'super' }}>m</span></div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'rgba(239,236,225,0.82)', fontSize: 18, marginTop: 8 }}>Torre de Jesucristo · Sagrada Família</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,236,225,0.5)' }} {...i('soc.foot')} />
                </div>
                <svg viewBox="0 0 100 360" preserveAspectRatio="xMaxYMax meet" style={{ position: 'absolute', right: 0, bottom: 0, height: '78%', width: 'auto', opacity: 0.95 }}><circle cx="51" cy="34" r="26" fill="url(#lightCore)" /><path d="M40,360 C46,260 49,170 50,70 L50,40 L52,40 L52,70 C53,170 56,260 62,360 Z" fill="none" stroke="#efece1" strokeWidth={1.2} strokeLinejoin="round" /><path d="M48,18 H54 V54 H48 Z M40,30 H62 V38 H40 Z" fill="none" stroke="#fff" strokeWidth={1.1} /></svg>
              </div>
            </div>
            <span className="label" {...i('soc.sq.label')} />
          </div>
          <div className="card-frame">
            <div className="card-shell">
              <div className="card story">
                <svg className="hero__stars" preserveAspectRatio="none" viewBox="0 0 247 439" aria-hidden="true"><g fill="#fff"><circle cx="40" cy="60" r="1" opacity="0.5" /><circle cx="200" cy="50" r="1.1" opacity="0.6" /><circle cx="150" cy="110" r="0.8" opacity="0.4" /><circle cx="80" cy="140" r="0.9" opacity="0.45" /></g></svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px 24px', zIndex: 2, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,236,225,0.7)' }} {...i('soc.kicker')} />
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: 66, lineHeight: 0.82, background: 'linear-gradient(180deg,#ffffff,#cbc8bb)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>172,5<span style={{ fontSize: '0.3em', verticalAlign: 'super' }}>m</span></div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'rgba(239,236,225,0.82)', fontSize: 15, marginTop: 8 }}>Torre de Jesucristo</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(239,236,225,0.5)' }} {...i('soc.foot')} />
                </div>
                <svg viewBox="0 0 80 200" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 54, height: '42%', width: 'auto', opacity: 0.9 }}><circle cx="40.5" cy="16" r="19" fill="url(#lightCore)" /><path d="M32,200 C37,140 39,90 40,40 L40,20 L41,20 L41,40 C42,90 44,140 49,200 Z" fill="none" stroke="#efece1" strokeWidth={1} strokeLinejoin="round" /><path d="M38,6 H43 V30 H38 Z M31,15 H50 V21 H31 Z" fill="none" stroke="#fff" strokeWidth={0.9} /></svg>
              </div>
            </div>
            <span className="label" {...i('soc.story.label')} />
          </div>
        </div>
      </section>

      {/* ===== COLOPHON ===== */}
      <footer className="colophon">
        <div className="narrow">
          <div className="marque" {...i('colo.marque')} />
          <p className="note" style={{ color: 'rgba(244,239,226,0.55)', maxWidth: '60ch', marginInline: 'auto' }} {...i('colo.body')} />
        </div>
      </footer>
    </div>
  )
}
