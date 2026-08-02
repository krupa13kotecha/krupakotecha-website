import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ============================================================
   1. EDIT THIS SECTION — your info, links, and content
   ============================================================ */

const PROFILE = {
  greeting: "Hi, I'm Krupa Kotecha!",
  tagline: 'CSE Undergrad · AI/ML & Web Dev · Artist',
  interests: 'I build projects, question everything, and this is where it all lives.',
  photo: '/profile.jpeg', 
  about: `Hi, I’m Krupa — welcome to my side of the internet!

I’m a CSE student who’s usually deep in code, exploring ML & LLMs, or trying to understand how things work under the hood. I’m especially curious about systems, logic, and software.

Outside of tech, I’m probably deep into F1 race weekends, painting with watercolors, playing table tennis or spiraling down a random book. I believe creativity and critical thinking go hand in hand — after all, to define is to limit.

This space is where I share what I’m learning, experimenting with, and occasionally obsessing over — from projects and concepts to anything that sparks my interest..

If something here resonates with you , feel free to look around and reach out:)`,
}

// Only the socials you asked for — add more objects here if you want others later
const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/krupa13kotecha', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/krupa-kotecha', icon: 'linkedin' },
  { label: 'Substack', url: 'https://substack.com/@itskrupakotecha', icon: 'substack' },
  { label: 'Email', url: 'mailto:krupa13kotecha@gmail.com', icon: 'mail' },
]

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work Experience' },
  { id: 'articles', label: 'Articles' },
  { id: 'art', label: 'Art Portfolio' },
  { id: 'about', label: 'About Me' },
]

const PROJECTS = [
  {
    id: 'p1',
    tag: 'Machine Learning',
    title: 'Project title one',
    summary: 'One or two lines describing the project.',
    details: 'Write the full write-up here: the problem, your approach, the stack you used, and the outcome.',
    link: 'https://github.com/your-username/project-one',
  },
  {
    id: 'p2',
    tag: 'Hardware',
    title: 'Project title two',
    summary: 'One or two lines describing the project.',
    details: 'Write the full write-up here: the problem, your approach, the stack you used, and the outcome.',
    link: 'https://github.com/your-username/project-two',
  },
  {
    id: 'p3',
    tag: 'AI',
    title: 'Project title three',
    summary: 'One or two lines describing the project.',
    details: 'Write the full write-up here: the problem, your approach, the stack you used, and the outcome.',
    link: 'https://github.com/your-username/project-three',
  },
]

const WORK_EXPERIENCE = [
  {
    id: 'w1',
    tag: 'May 2026 – Jun 2026',
    title: 'UI/UX & Frontend Development Intern — Trinity Unicepts Pvt. Ltd.',
    summary: 'Built responsive UI components and full client websites using React.js and Figma.',
    details: `Worked on live client websites, building responsive UI components using HTML, CSS, JavaScript, and React.js.

- Designed the complete ShuhariLabs website in Figma, including wireframes, high-fidelity screens, and responsive layouts.
- Implemented frontend features and UI improvements for Rajkot Cancer Service and Envitrolabs using React.js.
- Collaborated with cross-functional teams to translate Figma designs into production-ready interfaces.
- Followed responsive design, UI consistency, and frontend best practices across real-world web development projects.`,
    link: '',
  },
]

const ARTICLES = [
  {
    id: 'a1',
    tag: 'Essay',
    title: 'Article title one',
    summary: 'A short teaser sentence for the article.',
    details: 'Paste your full article text here, or a longer excerpt, plus a link to the full post.',
    link: 'https://your-name.substack.com/p/article-one',
  },
  {
    id: 'a2',
    tag: 'Tutorial',
    title: 'Article title two',
    summary: 'A short teaser sentence for the article.',
    details: 'Paste your full article text here, or a longer excerpt, plus a link to the full post.',
    link: 'https://your-name.substack.com/p/article-two',
  },
]

const ARTWORKS = [
  {
    id: 'ar1',
    tag: 'Painting',
    title: 'Artwork title one',
    summary: 'Medium, size, or a short note about the piece.',
    details: 'Add a longer description of the piece — inspiration, technique, or the story behind it.',
    link: '',
  },
  {
    id: 'ar2',
    tag: 'Sketch',
    title: 'Artwork title two',
    summary: 'Medium, size, or a short note about the piece.',
    details: 'Add a longer description of the piece — inspiration, technique, or the story behind it.',
    link: '',
  },
]
const ABOUT_PHOTOS = ['/about-1.jpg', '/about-2.jpg', '/about-3.jpg']
/* ============================================================
   2. Icons — plain inline SVGs, no extra dependency needed
   ============================================================ */

function Icon({ name }) {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17v3.22c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      )
    case 'substack':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v3.2H3V3Zm0 5.4h18V11H3V8.4ZM3 13.8h18v7.7L12 17l-9 4.5v-7.7Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="M3 6.5 12 13l9-6.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

/* ============================================================
   3. Reusable pieces
   ============================================================ */

function ListPage({ title, items, onSelect }) {
  return (
    <section>
      <h2 className="page-title">{title}</h2>
      <div className="grid">
        {items.map((item) => (
          <button key={item.id} className="card" onClick={() => onSelect(item)}>
            <span className="tag">{item.tag}</span>
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
            <span className="link-out">View details →</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function DetailPage({ item, onBack }) {
  return (
    <section className="detail">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <span className="tag">{item.tag}</span>
      <h2>{item.title}</h2>
      <p>{item.details}</p>
      {item.link && (
        <a className="external" href={item.link} target="_blank" rel="noreferrer">
          Open link →
        </a>
      )}
    </section>
  )
}

// Rotates one slot's photo through a shuffled list, independently of other slots,
// and gives each slot its own gentle floating drift animation.
function AboutCollageSlot({ photos, style, intervalMs, startDelay, floatDelay, floatDuration }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let interval
    const delay = setTimeout(() => {
      interval = setInterval(() => {
        setIndex((i) => (i + 1) % photos.length)
      }, intervalMs)
    }, startDelay)
    return () => {
      clearTimeout(delay)
      clearInterval(interval)
    }
  }, [photos, intervalMs, startDelay])

  const floatStyle = {
    ...style,
    animationDelay: `${floatDelay}s`,
    animationDuration: `${floatDuration}s`,
  }

  return (
    <div className="collage-slot" style={floatStyle}>
      {photos.map((src, i) => (
        <img key={src} src={src} alt="" className={'collage-img' + (i === index ? ' active' : '')} />
      ))}
    </div>
  )
}

// Offsets the photo order per slot so overlapping tiles don't show the same photo at once
function offsetPhotos(photos, offset) {
  const n = photos.length
  return Array.from({ length: n }, (_, i) => photos[(i + offset) % n])
}

function AboutCollage({ photos }) {
  // Base positions spaced further apart so the floating drift doesn't cause overlap,
  // each with its own float timing so the drift feels organic rather than synced.
  const slots = [
    { style: { top: '0px', left: '0px', width: '160px', height: '200px', '--rot': '-6deg', zIndex: 2 }, intervalMs: 4200, startDelay: 0, floatDelay: 0, floatDuration: 6 },
    { style: { top: '10px', left: '200px', width: '150px', height: '190px', '--rot': '5deg', zIndex: 3 }, intervalMs: 3800, startDelay: 900, floatDelay: 1.2, floatDuration: 7 },
    { style: { top: '230px', left: '0px', width: '145px', height: '185px', '--rot': '4deg', zIndex: 1 }, intervalMs: 4600, startDelay: 1600, floatDelay: 2.1, floatDuration: 6.5 },
    { style: { top: '210px', left: '220px', width: '160px', height: '200px', '--rot': '-3deg', zIndex: 4 }, intervalMs: 4000, startDelay: 2300, floatDelay: 0.7, floatDuration: 7.5 },
  ]

  return (
    <div className="about-collage">
      {slots.map((slot, i) => (
        <AboutCollageSlot
          key={i}
          photos={offsetPhotos(photos, i)}
          style={slot.style}
          intervalMs={slot.intervalMs}
          startDelay={slot.startDelay}
          floatDelay={slot.floatDelay}
          floatDuration={slot.floatDuration}
        />
      ))}
    </div>
  )
}
/*rotator for about section images*/


/* ============================================================
   4. Main App
   ============================================================ */

export default function App() {
  const [page, setPage] = useState('home') // 'home' | 'projects' | 'articles' | 'art'
  const [selected, setSelected] = useState(null)
  const [aboutVisible, setAboutVisible] = useState(true)
  const ABOUT_PHOTOS = ['/about-1.jpg', '/about-2.jpg', '/about-3.jpg', '/about-4.jpg', '/about-5.jpg']
  const contentRef = useRef(null)
  const aboutRef = useRef(null)

  // Reveal the About section with a fade/slide when it scrolls into view
  useEffect(() => {
    const el = aboutRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAboutVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [page])

  function goHome() {
    setPage('home')
    setSelected(null)
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goNav(id) {
    setSelected(null)
    if (id === 'about') {
      setPage('home')
      // wait a tick for the home page to render before scrolling to it
      requestAnimationFrame(() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      setPage(id)
      contentRef.current?.scrollTo({ top: 0 })
    }
  }

  return (
    <div className="layout">
      {/* ---------- HEADER: photo left, links + nav to its right ---------- */}
      <header className="header">
        <button className="brand" onClick={goHome} aria-label="Go to home">
          <img className="avatar" src={PROFILE.photo} alt="Profile" />
        </button>

        <div className="header-text">
          <h1 className="greeting">{PROFILE.greeting}</h1>
          <p className="tagline">{PROFILE.tagline}</p>
          <p className="interests">{PROFILE.interests}</p>

          <div className="socials">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} className="social-btn" href={s.url} target="_blank" rel="noreferrer">
                <Icon name={s.icon} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={'nav-btn' + (page === item.id && item.id !== 'about' ? ' active' : '')}
                onClick={() => goNav(item.id)}
              >
                <span className="prompt">&gt;</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ---------- CONTENT BELOW HEADER ---------- */}
      <main className="content" ref={contentRef}>
        {page === 'home' && !selected && (
          <>
            <section id="about" ref={aboutRef} className={'about-wrap' + (aboutVisible ? ' visible' : '')}>
              <div className="about-text">
                <h3>About Me</h3>
                <p>{PROFILE.about}</p>
              </div>
              <AboutCollage photos={ABOUT_PHOTOS} />
            </section>
          </>
        )}

        {page === 'projects' && !selected && (
          <ListPage title="Projects" items={PROJECTS} onSelect={setSelected} />
        )}
        {page === 'work' && !selected && (
  <ListPage title="Work Experience" items={WORK_EXPERIENCE} onSelect={setSelected} />
)}
        {page === 'articles' && !selected && (
          <ListPage title="Articles" items={ARTICLES} onSelect={setSelected} />
        )}
        {page === 'art' && !selected && (
          <ListPage title="Art Portfolio" items={ARTWORKS} onSelect={setSelected} />
        )}

        {selected && <DetailPage item={selected} onBack={() => setSelected(null)} />}
      </main>
    </div>
  )
}