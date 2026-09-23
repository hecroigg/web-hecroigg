import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe2,
  Instagram,
  Languages,
  Linkedin,
  Menu,
  Moon,
  PiggyBank,
  Sparkles,
  Sun,
  WalletCards,
  X,
} from 'lucide-react'

type Language = 'es' | 'en'
type Theme = 'light' | 'dark'
type ProjectKey = 'linkedlab' | 'lluna' | 'finance'

const social = {
  instagram: 'https://www.instagram.com/hecroigg/',
  linkedin: 'https://www.linkedin.com/in/hectorfabregaroig/',
  linkedlab: 'https://linkedlab.eu',
}

const copy = {
  es: {
    nav: [
      ['Sobre mí', '#about'],
      ['Proyectos', '#projects'],
      ['Finanzas', '#finance'],
      ['Contacto', '#contact'],
    ],
    talk: 'Hablemos',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    theme: 'Cambiar tema',
    eyebrow: 'Business & Technology · Creador digital',
    heroA: 'Construyo herramientas digitales.',
    heroB: 'Hago el dinero más claro.',
    heroText:
      'Soy Héctor. Combino negocio y tecnología para convertir ideas complejas en webs, sistemas y herramientas que la gente puede usar de verdad.',
    projectsCta: 'Ver proyectos',
    financeCta: 'Mi enfoque financiero',
    scroll: 'Descubre más',
    loop: ['Ahorrar', 'Construir', 'Invertir', 'Repetir'],
    based: 'España ↔ Mannheim',
    aboutKicker: 'Sobre mí',
    aboutTitle: 'Curiosidad con dirección.',
    aboutLead:
      'Estudio Business & Technology en la UAB y este año vivo un Erasmus en Mannheim. Me interesa entender cómo funcionan las cosas y, sobre todo, cómo hacerlas más simples y útiles.',
    aboutBody:
      'Esa curiosidad me lleva de una hoja de cálculo a una web, de una idea de negocio a un sistema digital y de una duda financiera a una herramienta clara. Creo aprendiendo, probando y mejorando con cada proyecto.',
    facts: [
      ['Base', 'España y Alemania'],
      ['Estudios', 'Business & Technology · UAB'],
      ['Proyecto', 'Fundador de LinkedLab'],
      ['Idiomas', 'ES · CAT · EN · DE básico'],
    ],
    projectsKicker: 'Proyectos',
    projectsTitle: 'Ideas que ya están en movimiento.',
    projectsIntro:
      'Tres formas de aplicar la misma idea: usar la tecnología para que algo complejo se sienta sencillo.',
    explore: 'Explorar proyecto',
    projectData: {
      linkedlab: {
        number: '01',
        title: 'LinkedLab',
        tag: 'Websites & Digital Systems',
        summary: 'Webs y sistemas digitales simples para pequeños negocios.',
        description:
          'Fundé LinkedLab para ayudar a negocios locales a digitalizarse sin perder el control. Diseño webs claras, sistemas de citas, organización de clientes y automatizaciones adaptadas a cada negocio.',
        points: ['Diseño y desarrollo web', 'Sistemas de negocio', 'Claridad, propiedad y cero dependencia'],
        link: 'Visitar LinkedLab',
      },
      lluna: {
        number: '02',
        title: 'Lluna Blanca',
        tag: 'Digitalización de negocio local',
        summary: 'Una presencia digital completa para un centro de bienestar familiar.',
        description:
          'Un proyecto real de transformación digital: nueva web multilingüe, estructura de servicios, SEO local, analítica, contenido y una experiencia de reserva más directa para un centro de masajes, terapias y estética en Blanes.',
        points: ['Identidad digital coherente', 'SEO local y analítica', 'Experiencia pensada para móvil'],
      },
      finance: {
        number: '03',
        title: 'Herramientas de finanzas personales',
        tag: 'Educación & producto',
        summary: 'Hacer que organizar el dinero deje de sentirse complicado.',
        description:
          'Estoy explorando herramientas sencillas para personas que quieren empezar a cuidar sus finanzas: entender dónde están, ordenar ingresos y gastos, construir hábitos y aprender los fundamentos de la inversión a largo plazo.',
        points: ['Organización personalizada', 'Conceptos explicados sin jerga', 'Educación, nunca recomendaciones de activos'],
      },
    },
    closeModal: 'Cerrar detalle',
    financeKicker: 'Finanzas, sin humo',
    financeTitle: 'Primero claridad. Después, decisiones.',
    financeText:
      'No se trata de perseguir la próxima inversión de moda. Se trata de entender tu situación, ordenar tu dinero y aprender con criterio antes de tomar decisiones propias.',
    financeSteps: [
      ['01', 'Entender', 'Poner contexto a ingresos, gastos, objetivos y prioridades.'],
      ['02', 'Organizar', 'Crear una estructura sencilla que puedas mantener cada mes.'],
      ['03', 'Crear hábitos', 'Automatizar lo importante y reducir decisiones innecesarias.'],
      ['04', 'Aprender a invertir', 'Entender riesgo, horizonte y diversificación sin recomendar activos.'],
    ],
    educational: 'Enfoque educativo y personalizado',
    disclaimer: 'Contenido educativo. No constituye asesoramiento de inversión, fiscal ni legal.',
    buildKicker: 'Lo que construyo',
    buildTitle: 'Tecnología útil, no tecnología por decorar.',
    buildItems: [
      ['Websites', 'Presencias digitales rápidas, claras y hechas alrededor del negocio.'],
      ['Sistemas digitales', 'Flujos para clientes, citas, datos y tareas repetitivas.'],
      ['Herramientas financieras', 'Interfaces que convierten números en decisiones más claras.'],
      ['Contenido y aprendizaje', 'Ideas explicadas de forma directa para aprender y actuar.'],
    ],
    contactKicker: 'Contacto',
    contactTitle: '¿Tienes una idea que merece salir del papel?',
    contactText:
      'Me interesa conocer proyectos, colaborar y hablar con personas que están construyendo algo útil.',
    instagram: 'Escríbeme en Instagram',
    linkedin: 'Conecta en LinkedIn',
    emailLabel: 'Email',
    emailPlaceholder: 'Próximamente',
    footerLine: 'Negocio, tecnología y finanzas explicados con claridad.',
    rights: 'Hecho con intención por Héctor.',
  },
  en: {
    nav: [
      ['About', '#about'],
      ['Projects', '#projects'],
      ['Finance', '#finance'],
      ['Contact', '#contact'],
    ],
    talk: "Let's talk",
    menu: 'Open menu',
    close: 'Close menu',
    theme: 'Change theme',
    eyebrow: 'Business & Technology · Digital builder',
    heroA: 'I build digital tools.',
    heroB: 'I make money feel clearer.',
    heroText:
      "I'm Héctor. I combine business and technology to turn complex ideas into websites, systems and tools people can actually use.",
    projectsCta: 'View projects',
    financeCta: 'My finance approach',
    scroll: 'Discover more',
    loop: ['Save', 'Build', 'Invest', 'Repeat'],
    based: 'Spain ↔ Mannheim',
    aboutKicker: 'About',
    aboutTitle: 'Curiosity with direction.',
    aboutLead:
      "I study Business & Technology at UAB and I'm currently spending an Erasmus year in Mannheim. I enjoy understanding how things work — and, above all, how to make them simpler and more useful.",
    aboutBody:
      'That curiosity takes me from a spreadsheet to a website, from a business idea to a digital system, and from a money question to a clear tool. I learn by building, testing and improving with every project.',
    facts: [
      ['Based', 'Spain and Germany'],
      ['Studies', 'Business & Technology · UAB'],
      ['Venture', 'Founder of LinkedLab'],
      ['Languages', 'ES · CAT · EN · beginner DE'],
    ],
    projectsKicker: 'Projects',
    projectsTitle: 'Ideas already in motion.',
    projectsIntro:
      'Three ways to apply the same idea: use technology to make something complex feel simple.',
    explore: 'Explore project',
    projectData: {
      linkedlab: {
        number: '01',
        title: 'LinkedLab',
        tag: 'Websites & Digital Systems',
        summary: 'Simple websites and digital systems for small businesses.',
        description:
          'I founded LinkedLab to help local businesses go digital without losing control. I design clear websites, booking and client systems, and automations shaped around each business.',
        points: ['Web design and development', 'Business systems', 'Clarity, ownership and no lock-in'],
        link: 'Visit LinkedLab',
      },
      lluna: {
        number: '02',
        title: 'Lluna Blanca',
        tag: 'Local business digitalisation',
        summary: 'A complete digital presence for a family wellness studio.',
        description:
          'A real digital transformation project: a new multilingual website, service structure, local SEO, analytics, content and a more direct booking experience for a massage, therapy and beauty studio in Blanes.',
        points: ['Consistent digital identity', 'Local SEO and analytics', 'Mobile-first experience'],
      },
      finance: {
        number: '03',
        title: 'Personal finance tools',
        tag: 'Education & product',
        summary: 'Making money organisation feel less overwhelming.',
        description:
          'I am exploring simple tools for people who want to start taking care of their finances: understand where they stand, organise income and spending, build habits and learn the foundations of long-term investing.',
        points: ['Personalised organisation', 'Concepts explained without jargon', 'Education, never asset recommendations'],
      },
    },
    closeModal: 'Close details',
    financeKicker: 'Finance, without the hype',
    financeTitle: 'Clarity first. Decisions second.',
    financeText:
      "This isn't about chasing the next fashionable investment. It's about understanding your position, organising your money and learning enough to make your own informed decisions.",
    financeSteps: [
      ['01', 'Understand', 'Put your income, expenses, goals and priorities into context.'],
      ['02', 'Organise', 'Create a simple structure you can maintain every month.'],
      ['03', 'Build habits', 'Automate what matters and remove unnecessary decisions.'],
      ['04', 'Learn to invest', 'Understand risk, time horizon and diversification without asset picks.'],
    ],
    educational: 'Educational and personalised approach',
    disclaimer: 'Educational content. This is not investment, tax or legal advice.',
    buildKicker: 'What I build',
    buildTitle: 'Useful technology, not technology for decoration.',
    buildItems: [
      ['Websites', 'Fast, clear digital presences built around the business.'],
      ['Digital systems', 'Workflows for clients, bookings, data and repetitive tasks.'],
      ['Finance tools', 'Interfaces that turn numbers into clearer decisions.'],
      ['Content & learning', 'Ideas explained directly so people can learn and act.'],
    ],
    contactKicker: 'Contact',
    contactTitle: 'Have an idea that deserves to leave the page?',
    contactText:
      "I'm always interested in projects, collaborations and conversations with people building something useful.",
    instagram: 'Message me on Instagram',
    linkedin: 'Connect on LinkedIn',
    emailLabel: 'Email',
    emailPlaceholder: 'Coming soon',
    footerLine: 'Business, technology and finance — made clearer.',
    rights: 'Built with intention by Héctor.',
  },
} as const

const buildIcons = [Code2, BriefcaseBusiness, WalletCards, Sparkles]

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('hector-language')
    return saved === 'en' ? 'en' : 'es'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('hector-theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('hector-language', language)
    document.title = language === 'es'
      ? 'Héctor Fàbrega — Tecnología y educación financiera'
      : 'Héctor Fàbrega — Technology and financial education'
  }, [language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('hector-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#080b12' : '#f7f8fb')
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, activeProject])

  return (
    <div className="site-shell">
      <CustomCursor />
      <Header
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} onOpen={setActiveProject} />
        <Finance t={t} />
        <Builds t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            t={t}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

type Copy = typeof copy.es | typeof copy.en

function Header({ language, setLanguage, theme, setTheme, menuOpen, setMenuOpen, t }: {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  t: Copy
}) {
  const switchLanguage = (value: Language) => {
    setLanguage(value)
    setMenuOpen(false)
  }

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Héctor Fàbrega — Inicio">
        <span className="brand-mark">HF</span>
        <span>Héctor Fàbrega</span>
      </a>

      <nav className="desktop-nav" aria-label="Principal">
        {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <div className="nav-actions">
        <div className="language-switch" aria-label="Language selector">
          {(['es', 'en'] as const).map((item) => (
            <button
              key={item}
              className={language === item ? 'active' : ''}
              onClick={() => switchLanguage(item)}
              aria-pressed={language === item}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <a className="social-icon desktop-only" href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Héctor">
          <Instagram size={18} />
        </a>
        <a className="social-icon desktop-only" href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Héctor">
          <Linkedin size={18} />
        </a>
        <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={t.theme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <a className="button button-small desktop-cta" href="#contact">{t.talk}<ArrowRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.menu} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
            <nav aria-label="Mobile">
              {t.nav.map(([label, href], index) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>{label}<ArrowRight />
                </a>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <div className="mobile-language"><Languages size={18} /><button onClick={() => switchLanguage('es')} className={language === 'es' ? 'active' : ''}>ES</button><span>/</span><button onClick={() => switchLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button></div>
              <div className="mobile-socials">
                <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              </div>
            </div>
            <a className="button mobile-talk" href="#contact" onClick={() => setMenuOpen(false)}>{t.talk}<ArrowRight /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero({ t }: { t: Copy }) {
  const reduceMotion = useReducedMotion()
  return (
    <section className="hero section" id="top">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.2, 0.8, 0.2, 1] }}>
          <div className="eyebrow"><span className="pulse-dot" />{t.eyebrow}</div>
          <h1>{t.heroA}<br /><span>{t.heroB}</span></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a className="button" href="#projects">{t.projectsCta}<ArrowRight /></a>
            <a className="button button-secondary" href="#finance">{t.financeCta}<ChevronRight /></a>
          </div>
          <div className="location-pill"><Globe2 size={17} /><span>{t.based}</span></div>
        </motion.div>

        <HeroVisual t={t} />
      </div>
      <a href="#about" className="scroll-cue"><span>{t.scroll}</span><ArrowDown /></a>
    </section>
  )
}

function HeroVisual({ t }: { t: Copy }) {
  return (
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .18 }} aria-hidden="true">
      <div className="visual-glow" />
      <div className="orbit orbit-one"><i /><i /><i /></div>
      <div className="orbit orbit-two"><i /><i /></div>
      <motion.div className="euro-coin" animate={{ y: [-9, 9, -9], rotateY: [-10, 12, -10], rotateX: [4, -5, 4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="coin-face"><span>€</span><small>MAKE IT CLEAR</small></div>
      </motion.div>
      <motion.div className="loop-card" animate={{ y: [5, -7, 5], rotate: [-2, 1, -2] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="loop-card-top"><span>THE LONG GAME</span><BarChart3 size={18} /></div>
        {t.loop.map((item, i) => <div className="loop-row" key={item}><span>0{i + 1}</span><strong>{item}</strong>{i < 3 ? <ArrowRight size={15} /> : <Check size={15} />}</div>)}
      </motion.div>
      <div className="data-pill data-one"><span />+1%</div>
      <div className="data-pill data-two"><span />365d</div>
    </motion.div>
  )
}

function About({ t }: { t: Copy }) {
  return (
    <section className="section section-muted" id="about">
      <Reveal className="section-heading about-heading">
        <div><span className="kicker">{t.aboutKicker}</span><h2>{t.aboutTitle}</h2></div>
        <p className="lead">{t.aboutLead}</p>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-story">
          <span className="big-quote">“</span>
          <p>{t.aboutBody}</p>
          <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={15} /></a>
        </Reveal>
        <div className="fact-grid">
          {t.facts.map(([label, value], index) => (
            <Reveal key={label} className="fact-card" delay={index * .06}>
              <span>0{index + 1}</span><small>{label}</small><strong>{value}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ t, onOpen }: { t: Copy; onOpen: (project: ProjectKey) => void }) {
  const keys: ProjectKey[] = ['linkedlab', 'lluna', 'finance']
  return (
    <section className="section" id="projects">
      <Reveal className="section-heading split-heading">
        <div><span className="kicker">{t.projectsKicker}</span><h2>{t.projectsTitle}</h2></div>
        <p>{t.projectsIntro}</p>
      </Reveal>
      <div className="project-grid">
        {keys.map((key, index) => {
          const item = t.projectData[key]
          return (
            <Reveal key={key} delay={index * .08}>
              <button className={`project-card project-${key}`} onClick={() => onOpen(key)} aria-label={`${t.explore}: ${item.title}`}>
                <div className="project-card-top"><span>{item.number}</span><span>{item.tag}</span></div>
                <div className="project-art" aria-hidden="true">
                  {key === 'linkedlab' && <><div className="browser-mini"><i /><i /><i /><b>LL</b></div><div className="system-line" /></>}
                  {key === 'lluna' && <><div className="moon-shape" /><div className="leaf-line">✦</div></>}
                  {key === 'finance' && <><div className="chart-bars"><i /><i /><i /><i /></div><span className="mini-euro">€</span></>}
                </div>
                <div className="project-card-copy"><h3>{item.title}</h3><p>{item.summary}</p><span>{t.explore}<ArrowRight /></span></div>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function ProjectModal({ project, t, onClose }: { project: ProjectKey; t: Copy; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null)
  const item = t.projectData[project]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    modalRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" tabIndex={-1} ref={modalRef} initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={{ type: 'spring', stiffness: 260, damping: 25 }}>
        <button className="modal-close" onClick={onClose} aria-label={t.closeModal}><X /></button>
        <span className="modal-number">{item.number} / 03</span>
        <span className="kicker">{item.tag}</span>
        <h2 id="project-title">{item.title}</h2>
        <p>{item.description}</p>
        <ul>{item.points.map(point => <li key={point}><Check />{point}</li>)}</ul>
        {'link' in item && item.link && <a className="button" href={social.linkedlab} target="_blank" rel="noreferrer">{item.link}<ExternalLink /></a>}
      </motion.div>
    </motion.div>
  )
}

function Finance({ t }: { t: Copy }) {
  return (
    <section className="section finance-section" id="finance">
      <div className="finance-bg" />
      <Reveal className="finance-intro">
        <span className="kicker kicker-light">{t.financeKicker}</span>
        <h2>{t.financeTitle}</h2>
        <p>{t.financeText}</p>
        <div className="education-pill"><PiggyBank size={19} />{t.educational}</div>
      </Reveal>
      <div className="finance-steps">
        {t.financeSteps.map(([number, title, description], index) => (
          <Reveal key={number} className="finance-step" delay={index * .06}>
            <div className="step-number">{number}</div><div><h3>{title}</h3><p>{description}</p></div>
          </Reveal>
        ))}
      </div>
      <div className="finance-disclaimer"><span>i</span>{t.disclaimer}</div>
    </section>
  )
}

function Builds({ t }: { t: Copy }) {
  return (
    <section className="section" id="builds">
      <Reveal className="section-heading"><div><span className="kicker">{t.buildKicker}</span><h2>{t.buildTitle}</h2></div></Reveal>
      <div className="build-grid">
        {t.buildItems.map(([title, description], index) => {
          const Icon = buildIcons[index]
          return <Reveal className="build-card" key={title} delay={index * .05}><div className="build-icon"><Icon /></div><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><div className="corner-arrow"><ArrowRight /></div></Reveal>
        })}
      </div>
    </section>
  )
}

function Contact({ t }: { t: Copy }) {
  return (
    <section className="section contact-section" id="contact">
      <Reveal className="contact-card">
        <div className="contact-orbit" aria-hidden="true" />
        <span className="kicker kicker-light">{t.contactKicker}</span>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <div className="contact-actions">
          <a className="button button-white" href={social.instagram} target="_blank" rel="noreferrer"><Instagram />{t.instagram}<ExternalLink /></a>
          <a className="button button-outline-light" href={social.linkedin} target="_blank" rel="noreferrer"><Linkedin />{t.linkedin}<ExternalLink /></a>
        </div>
        <div className="email-placeholder"><span>{t.emailLabel}</span><strong>{t.emailPlaceholder}</strong></div>
      </Reveal>
    </section>
  )
}

function Footer({ t }: { t: Copy }) {
  return (
    <footer>
      <div className="footer-main"><a className="brand" href="#top"><span className="brand-mark">HF</span><span>Héctor Fàbrega</span></a><p>{t.footerLine}</p><div className="footer-socials"><a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={social.linkedlab} target="_blank" rel="noreferrer" aria-label="LinkedLab"><Globe2 /></a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Héctor Fàbrega Roig. {t.rights}</span><span>{t.disclaimer}</span></div>
    </footer>
  )
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .65, delay, ease: [0.2, 0.8, 0.2, 1] }}>{children}</motion.div>
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return
    let frame = 0
    let x = -100
    let y = -100
    let cx = x
    let cy = y
    const render = () => {
      cx += (x - cx) * .16
      cy += (y - cy) * .16
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(render)
    }
    const onMove = (event: MouseEvent) => { x = event.clientX; y = event.clientY }
    const onOver = (event: MouseEvent) => {
      if ((event.target as Element).closest('a, button')) cursor.classList.add('is-active')
    }
    const onOut = (event: MouseEvent) => {
      if ((event.target as Element).closest('a, button')) cursor.classList.remove('is-active')
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    frame = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return <><div className="custom-cursor" ref={cursorRef} /><div className="cursor-dot" ref={dotRef} /></>
}

export default App
