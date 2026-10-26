import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  FiArrowRight, FiArrowUpRight, FiAward, FiBriefcase, FiCode, FiDatabase, FiDownload,
  FiGithub, FiLayers, FiLinkedin, FiMail, FiMapPin, FiMenu, FiMoon, FiSun, FiX,
} from 'react-icons/fi'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { TbBrain, TbSchool } from 'react-icons/tb'
import { achievements, education, experience, profile, projects, skills, stats } from './data.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_ICONS = { code: FiCode, brain: TbBrain, layers: FiLayers, database: FiDatabase }
const PLATFORM_ICONS = { leetcode: SiLeetcode, codechef: SiCodechef }

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const done = !deleting && text === word
    const cleared = deleting && text === ''
    const delay = done ? 1600 : deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (done) setDeleting(true)
      else if (cleared) {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="typewriter">
      {text}
      <span className="caret" />
    </span>
  )
}

function SocialLinks({ className = '' }) {
  const { github, linkedin, leetcode, codechef } = profile.links
  const items = [
    { href: github, icon: FiGithub, label: 'GitHub' },
    { href: linkedin, icon: FiLinkedin, label: 'LinkedIn' },
    { href: leetcode, icon: SiLeetcode, label: 'LeetCode' },
    { href: codechef, icon: SiCodechef, label: 'CodeChef' },
    { href: `mailto:${profile.email}`, icon: FiMail, label: 'Email' },
  ].filter((i) => i.href)
  return (
    <div className={`socials ${className}`}>
      {items.map(({ href, icon: Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
          <Icon />
        </a>
      ))}
    </div>
  )
}

function Navbar({ theme, toggleTheme }) {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">AK</span>
          <span className="logo__text">{profile.name}</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="grid-overlay" />
      </div>
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pill">
            <span className="pulse" /> Open to AI / ML roles
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__role">
            {profile.role} building <Typewriter words={profile.roles} />
          </p>
          <p className="hero__summary">
            I design LLM-powered systems that turn messy, unstructured data into decisions, from
            knowledge graphs for financial intelligence to fine-tuned tutors that teach instead of tell.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work <FiArrowRight />
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn--ghost" download>
                Resume <FiDownload />
              </a>
            ) : (
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            )}
          </div>
          <SocialLinks />
        </motion.div>

        <motion.div
          className="code-card"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="code-card__bar">
            <span /> <span /> <span />
            <em>adarsh.py</em>
          </div>
          <pre>
            <code>
              <span className="tok-k">class</span> <span className="tok-c">Engineer</span>:{'\n'}
              {'    '}name = <span className="tok-s">"Adarsh Kumar"</span>{'\n'}
              {'    '}focus = [<span className="tok-s">"LLMs"</span>, <span className="tok-s">"RAG"</span>,{' '}
              <span className="tok-s">"Agents"</span>]{'\n'}
              {'    '}stack = [<span className="tok-s">"Python"</span>, <span className="tok-s">"PyTorch"</span>,{'\n'}
              {'             '}<span className="tok-s">"LangGraph"</span>, <span className="tok-s">"Neo4j"</span>]{'\n'}
              {'\n'}
              {'    '}<span className="tok-k">def</span> <span className="tok-f">impact</span>(self):{'\n'}
              {'        '}<span className="tok-k">return</span> {'{'}{'\n'}
              {'            '}<span className="tok-s">"accuracy"</span>: <span className="tok-n">0.97</span>,{'\n'}
              {'            '}<span className="tok-s">"review_effort"</span>: <span className="tok-n">-0.80</span>,{'\n'}
              {'            '}<span className="tok-s">"hours_saved_wk"</span>: <span className="tok-n">40</span>,{'\n'}
              {'        '}{'}'}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="stat" {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
            <span className="stat__value gradient-text">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </motion.div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow="About me" title="Research-minded, production-focused" />
        <div className="about">
          <motion.div className="about__text card" {...reveal}>
            <p>{profile.summary}</p>
            <ul className="about__facts">
              <li>
                <FiMapPin /> {profile.location}
              </li>
              <li>
                <FiBriefcase /> 1+ year industry experience · 3 internships
              </li>
              <li>
                <FiMail /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </motion.div>
          <div className="about__edu">
            {education.map((e, i) => (
              <motion.div key={e.degree} className="card edu" {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <div className="edu__icon">
                  <TbSchool />
                </div>
                <div>
                  <h3>{e.degree}</h3>
                  <p className="muted">{e.institution}</p>
                  <div className="edu__meta">
                    <span>{e.period}</span>
                    <span className="chip chip--accent">{e.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've built things">
          From enterprise platforms at PwC to AI systems for national financial intelligence.
        </SectionHeading>
        <div className="timeline">
          {experience.map((job) => (
            <motion.article key={job.role + job.company} className="timeline__item" {...reveal}>
              <div className="timeline__dot" />
              <div className="card job">
                <header className="job__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job__company">{job.company}</p>
                  </div>
                  <div className="job__meta">
                    <span className="chip">{job.type}</span>
                    <span className="mono muted">{job.period}</span>
                  </div>
                </header>
                <ul className="job__list">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Selected work">
          Applied research and systems work in LLM fine-tuning, agents and knowledge graphs.
        </SectionHeading>
        <div className="projects">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={`card project ${p.featured ? 'project--featured' : ''}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="project__head">
                <div>
                  {p.featured && <span className="chip chip--accent">Featured</span>}
                  <h3>{p.title}</h3>
                  <p className="muted">{p.subtitle}</p>
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Open project">
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <span className="mono muted small">{p.period}</span>
                )}
              </div>
              <p className="project__desc">{p.description}</p>
              <div className="metrics">
                {p.metrics.map((m) => (
                  <div key={m.label} className="metric">
                    <span className="metric__value">{m.value}</span>
                    <span className="metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
              <ul className="project__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="My toolkit" />
        <div className="skills">
          {skills.map((s, i) => {
            const Icon = SKILL_ICONS[s.icon] || FiCode
            return (
              <motion.div key={s.group} className="card skill" {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                <div className="skill__head">
                  <span className="skill__icon">
                    <Icon />
                  </span>
                  <h3>{s.group}</h3>
                </div>
                <div className="tags">
                  {s.items.map((item) => (
                    <span key={item} className="tag tag--lg">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.h3 className="subheading" {...reveal}>
          <FiAward /> Competitive programming
        </motion.h3>
        <div className="achievements">
          {achievements.map((a) => {
            const Icon = PLATFORM_ICONS[a.platform] || FiAward
            return (
              <motion.a
                key={a.title}
                href={a.link}
                target="_blank"
                rel="noreferrer"
                className="card achievement"
                {...reveal}
                whileHover={{ y: -4 }}
              >
                <span className={`achievement__icon achievement__icon--${a.platform}`}>
                  <Icon />
                </span>
                <div>
                  <h4>{a.title}</h4>
                  <p className="muted">{a.detail}</p>
                </div>
                <FiArrowUpRight className="achievement__arrow" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div className="contact card" {...reveal}>
          <div className="contact__glow" aria-hidden="true" />
          <span className="eyebrow">Contact</span>
          <h2>Let's build something intelligent.</h2>
          <p>
            I'm looking for roles and collaborations in Data Science, ML engineering and GenAI. If you
            have a problem that needs LLMs, RAG or graph intelligence, I'd love to hear about it.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
            <FiMail /> {profile.email}
          </a>
          <SocialLinks className="socials--center" />
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="muted">Built with React & Framer Motion</span>
        </div>
      </footer>
    </>
  )
}
