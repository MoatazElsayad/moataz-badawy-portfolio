import React, { useMemo, useState } from 'react'
import {
  Code2,
  Languages as LanguagesIcon,
  Package,
  Cpu,
  Wrench,
  Database,
  Trophy,
  Sparkles,
  Layers3,
  CircuitBoard,
  BarChart3
} from 'lucide-react'
import saFlag from '../assets/flags/sa.svg'
import powerBiLogo from '../assets/logos/powerbi.svg'
import typingVideo from '../assets/strength/typing.mp4'
import tableauLogo from '../assets/logos/tableau.svg'
import usFlag from '../assets/flags/us.svg'
import esFlag from '../assets/flags/es.svg'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/Skills.css'

const brandIconBase = 'https://cdn.simpleicons.org'

const focusAreas = [
  {
    title: 'Systems thinking',
    detail: 'C++, algorithms, and performance-minded problem solving',
    icon: Layers3
  },
  {
    title: 'Full-stack building',
    detail: 'React, Flask, FastAPI, and practical product workflows',
    icon: Sparkles
  },
  {
    title: 'Embedded & IoT',
    detail: 'Arduino, ESP32, circuits, and hardware-software loops',
    icon: CircuitBoard
  },
  {
    title: 'Data fluency',
    detail: 'SQL, Python analysis, Excel, Tableau, and Power BI',
    icon: BarChart3
  }
]

const skillCategories = [
  {
    id: 'languages',
    name: 'Programming',
    blurb: 'Languages I use to reason about systems, ship features, and train algorithmic thinking.',
    icon: Code2,
    skills: [
      {
        name: 'C++',
        logo: 'cplusplus',
        color: '00599C',
        level: 'Strong',
        levelValue: 92,
        usage: 'My most comfortable language — systems work, game logic, and performance-sensitive projects.'
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
        color: 'F7DF1E',
        darkIcon: true,
        level: 'Strong',
        levelValue: 82,
        usage: 'Frontend interactivity, React apps, and full-stack project glue.'
      },
      {
        name: 'Python',
        logo: 'python',
        color: '3776AB',
        level: 'Comfortable',
        levelValue: 76,
        usage: 'APIs, automation, CS coursework, and data analysis pipelines.'
      },
      {
        name: 'C',
        icon: Code2,
        level: 'Comfortable',
        levelValue: 74,
        usage: 'Comfortably productive in C — memory, pointers, and systems basics from CS50x.'
      }
    ]
  },
  {
    id: 'web',
    name: 'Web',
    blurb: 'The stack I use to turn ideas into interfaces, backends, and usable products.',
    icon: Package,
    skills: [
      {
        name: 'React',
        logo: 'react',
        color: '61DAFB',
        level: 'Strong',
        levelValue: 84,
        usage: 'Component-driven UIs for portfolio work and finance-tracker style apps.'
      },
      {
        name: 'HTML / CSS',
        logo: 'html5',
        color: 'E34F26',
        level: 'Strong',
        levelValue: 86,
        usage: 'Layout systems, responsive design, and polished presentation layers.'
      },
      {
        name: 'Flask',
        logo: 'flask',
        color: '000000',
        darkIcon: true,
        level: 'Comfortable',
        levelValue: 74,
        usage: 'Auth, routing, and server-side logic in the currency converter project.'
      },
      {
        name: 'FastAPI',
        logo: 'fastapi',
        color: '009688',
        level: 'Building',
        levelValue: 68,
        usage: 'Typed API backends for AI-assisted finance and data workflows.'
      }
    ]
  },
  {
    id: 'embedded',
    name: 'Embedded',
    blurb: 'Where software meets hardware — sensors, microcontrollers, and practical IoT builds.',
    icon: Cpu,
    skills: [
      {
        name: 'Arduino',
        logo: 'arduino',
        color: '00979D',
        level: 'Comfortable',
        levelValue: 72,
        usage: 'Prototyping with sensors, OLED displays, and embedded control loops.'
      },
      {
        name: 'ESP32',
        logo: 'espressif',
        color: 'E7352C',
        level: 'Building',
        levelValue: 64,
        usage: 'Wi-Fi enabled microcontroller experiments and IoT-oriented builds.'
      },
      {
        name: 'Circuit Design',
        icon: Cpu,
        level: 'Building',
        levelValue: 58,
        usage: 'Reading schematics and wiring components into working prototypes.'
      },
      {
        name: 'IoT Concepts',
        icon: Cpu,
        level: 'Exploring',
        levelValue: 54,
        usage: 'Connecting devices, sensing environments, and thinking in systems.'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    blurb: 'Day-to-day platforms that keep projects versioned, deployable, and maintainable.',
    icon: Wrench,
    skills: [
      {
        name: 'Git & GitHub',
        logo: 'git',
        color: 'F05032',
        level: 'Strong',
        levelValue: 85,
        usage: 'Branching, collaboration, and shipping project history cleanly.'
      },
      {
        name: 'Linux',
        logo: 'linux',
        color: 'FCC624',
        darkIcon: true,
        level: 'Comfortable',
        levelValue: 70,
        usage: 'Terminal workflows, environments, and developer tooling.'
      },
      {
        name: 'Docker',
        logo: 'docker',
        color: '2496ED',
        level: 'Building',
        levelValue: 60,
        usage: 'Containerizing services so projects run consistently across machines.'
      },
      {
        name: 'REST APIs',
        logo: 'fastapi',
        color: '009688',
        level: 'Comfortable',
        levelValue: 73,
        usage: 'Designing and consuming APIs between frontend and backend layers.'
      }
    ]
  },
  {
    id: 'data',
    name: 'Data',
    blurb: 'How I clean, query, visualize, and communicate insights from real datasets.',
    icon: Database,
    skills: [
      {
        name: 'SQL / MySQL / SQLite',
        logo: 'mysql',
        color: '4479A1',
        level: 'Strong',
        levelValue: 90,
        usage: 'Very comfortable querying structured data and backing app features with real storage.'
      },
      {
        name: 'Pandas & NumPy',
        logo: 'pandas',
        color: '150458',
        level: 'Comfortable',
        levelValue: 71,
        usage: 'Transforming datasets and running analysis in Python notebooks/scripts.'
      },
      {
        name: 'Excel & Power BI',
        img: powerBiLogo,
        imgDark: true,
        level: 'Comfortable',
        levelValue: 78,
        usage: 'Reporting, interactive dashboards, and practical data storytelling.'
      },
      {
        name: 'Tableau',
        img: tableauLogo,
        level: 'Building',
        levelValue: 66,
        usage: 'Visual exploration and presentation of trends from training projects.'
      }
    ]
  },
  {
    id: 'strengths',
    name: 'Strengths',
    blurb: 'Capabilities that shape how I learn fast and turn abstract ideas into working systems.',
    icon: Trophy,
    skills: [
      {
        name: 'Competitive Programming',
        icon: Trophy,
        level: 'Building',
        levelValue: 67,
        usage: 'Bitmasking, optimization patterns, and algorithmic problem discipline.',
        links: [
          { label: 'Codeforces · MOA_taz', url: 'https://codeforces.com/profile/MOA_taz' },
          { label: 'LeetCode', url: 'https://leetcode.com/u/gFcZWMHmrx/' }
        ]
      },
      {
        name: 'Fast Typing (80 WPM)',
        icon: Trophy,
        level: 'Strong',
        levelValue: 90,
        usage: 'Keeps implementation speed high when iterating on projects and coursework.',
        typingDemo: true
      }
    ]
  },
  {
    id: 'spoken-languages',
    name: 'Languages',
    blurb: 'The tongues I think, build, and connect in.',
    icon: LanguagesIcon,
    skills: [
      {
        name: 'Arabic',
        accent: ['#006C35', '#31A56F'],
        flag: saFlag,
        level: 'Native',
        tone: 'strong',
        levelValue: 100,
        usage: 'Native speaker — fluent in Fusha: speaking, reading, and writing.'
      },
      {
        name: 'English',
        accent: ['#B22234', '#FFFFFF'],
        flag: usFlag,
        level: 'C1',
        tone: 'comfortable',
        levelValue: 85,
        usage: 'Proficient — comfortable speaking, reading, and writing in technical and academic settings.'
      },
      {
        name: 'Spanish',
        accent: ['#C60B1E', '#FFC400'],
        flag: esFlag,
        level: 'A2',
        tone: 'exploring',
        levelValue: 30,
        usage: 'Beginner — currently learning on Duolingo.'
      }
    ]
  }
]

const BrandLogo = ({ skill }) => (
  <img
    src={`${brandIconBase}/${skill.logo}/${skill.color}?viewbox=auto&size=28`}
    alt=""
    aria-hidden="true"
    className={`brand-logo ${skill.darkIcon ? 'brand-logo-dark' : ''}`}
    loading="lazy"
  />
)

const SkillVisual = ({ skill }) => {
  if (skill.logo) {
    return <BrandLogo skill={skill} />
  }

  if (skill.img) {
    return (
      <img
        src={skill.img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`skill-img${skill.imgDark ? ' invert-on-dark' : ''}`}
      />
    )
  }

  const Icon = skill.icon || Code2
  return <Icon size={18} strokeWidth={2.1} />
}



const Skills = () => {
  useScrollReveal()
  const [activeCategoryId, setActiveCategoryId] = useState(skillCategories[0].id)

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.id === activeCategoryId) || skillCategories[0],
    [activeCategoryId]
  )

  const ActiveIcon = activeCategory.icon

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-eyebrow">What I Work With</p>
        <h2 className="section-title">One problem. Many ways to solve it.</h2>
        <p className="section-subtitle">
          Not just a tool list — a map of what I can build with, where I am strongest, and how each skill shows up in real work.
        </p>

        <div className="skills-focus scroll-reveal">
          {focusAreas.map((area) => {
            const FocusIcon = area.icon
            return (
              <article key={area.title} className="skills-focus-card">
                <span className="skills-focus-icon" aria-hidden="true">
                  <FocusIcon size={20} strokeWidth={2.1} />
                </span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="skills-workspace scroll-reveal delay-1">
          <div className="skills-tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((category) => {
              const TabIcon = category.icon
              const isActive = category.id === activeCategoryId

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`skills-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <TabIcon size={18} strokeWidth={2.1} />
                  <span>{category.name}</span>
                  <em>{category.skills.length}</em>
                </button>
              )
            })}
          </div>

          <div className="skills-panel" role="tabpanel" aria-label={activeCategory.name}>
            <div className="skills-panel-header">
              <div className="skills-panel-title">
                <span className="skills-panel-icon" aria-hidden="true">
                  <ActiveIcon size={22} strokeWidth={2} />
                </span>
                <div>
                  <h3>{activeCategory.name}</h3>
                  <p>{activeCategory.blurb}</p>
                </div>
              </div>
              <div className="skills-legend" aria-hidden="true">
                <span><i className="level-dot strong" /> Strong</span>
                <span><i className="level-dot comfortable" /> Comfortable</span>
                <span><i className="level-dot building" /> Building</span>
                <span><i className="level-dot exploring" /> Exploring</span>
              </div>
            </div>

            <div key={activeCategory.id} className="skills-list">
              {activeCategory.skills.map((skill, index) => (
                <article
                  key={skill.name}
                  className={`skill-row${skill.flag ? ' has-flag' : ''}`}
                  style={{
                    '--skill-delay': `${index * 45}ms`,
                    ...(skill.flag
                      ? { '--flag-a': skill.accent[0], '--flag-b': skill.accent[1] }
                      : {})
                  }}
                >
                  {skill.flag && (
                    <div className="skill-flag" aria-hidden="true">
                      <img src={skill.flag} alt="" loading="lazy" />
                    </div>
                  )}

                  <div className="skill-row-main">
                    {!skill.flag && (
                      <span className="skill-row-icon">
                        <SkillVisual skill={skill} />
                      </span>
                    )}
                    <div className="skill-row-copy">
                      <div className="skill-row-topline">
                        <h4>{skill.name}</h4>
                        <span className={`skill-level skill-level-${skill.tone || skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p>{skill.usage}</p>
                      {skill.links && (
                        <div className="skill-row-links">
                          {skill.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="skill-row-link"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {skill.typingDemo && (
                    <video
                      src={typingVideo}
                      className="typing-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label="Screen recording of typing at 80 words per minute"
                    />
                  )}

                  {activeCategory.id !== 'strengths' && (
                  <div className="skill-meter" aria-hidden="true">
                    <div
                      className={`skill-meter-fill skill-meter-${skill.tone || skill.level.toLowerCase()}`}
                      style={{ width: `${skill.levelValue}%` }}
                    />
                  </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
