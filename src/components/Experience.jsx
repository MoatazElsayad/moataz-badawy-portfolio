import React, { useEffect, useRef, useState } from 'react'
import { Award, BriefcaseBusiness, ChevronRight, GraduationCap, ImagePlus, X } from 'lucide-react'
import aucLogo from '../assets/images/auc-logo.png'
import aucCampus from '../assets/images/sse.jpeg'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/Experience.css'

const Experience = () => {
  useScrollReveal()

  const iconMap = {
    education: GraduationCap,
    achievement: Award,
    experience: BriefcaseBusiness
  }

  const timeline = [
    {
      type: 'achievement',
      period: 'Sep 2024 - Jan 2025',
      title: 'ALA Bridge Program',
      organization: 'AUC / USAID',
      description: 'Joined a before-college bridge year program at AUC that helped prepare me academically and personally for university life.',
      achievements: [
        'Completed the bridge program successfully'
      ]
    },
    {
      type: 'experience',
      period: 'Jun 2025 - Dec 2025',
      title: 'Digital Egyptian Pioneers Initiative',
      organization: 'MCIT',
      description: 'Completed structured training in data analysis with a practical focus on data tools and reporting workflows.',
      achievements: [
        'Worked with Excel, SQL, Python, Tableau, and Power BI',
        'Used Pandas, NumPy, and Matplotlib in Python-based analysis',
        'Built stronger data handling and reporting foundations'
      ]
    },
    {
      type: 'education',
      period: '2025 - Present',
      title: 'Computer Engineering',
      organization: 'The American University in Cairo (AUC)',
      logo: aucLogo,
      description:
        'Pursuing a B.Sc. in Computer Engineering at AUC, focusing on software development, computer science, engineering, and hands-on technical projects.',
      details: {
        image: aucCampus,
        about:
          'Currently pursuing a Bachelor of Science in Computer Engineering at The American University in Cairo, building a strong foundation in computer science, software development, engineering, mathematics, and hands-on technical problem solving.',
        sections: [
          {
            title: 'Focus & Development',
            items: [
              'Software development, algorithms, and data structures',
              'Computer engineering and engineering fundamentals',
              'C++ and Python development',
              'Web development and AI',
              'Embedded systems and hands-on technical projects',
              'Competitive programming'
            ]
          }
        ]
      }
    }
  ]

  const [selectedItem, setSelectedItem] = useState(null)
  const closeBtnRef = useRef(null)
  const sidebarRef = useRef(null)
  const lastFocusedRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Detail drawer: focus management + focus trap + Escape to close.
  useEffect(() => {
    if (!selectedItem) {
      return
    }

    lastFocusedRef.current = document.activeElement
    closeBtnRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
        return
      }

      if (event.key === 'Tab') {
        const sidebar = sidebarRef.current
        if (!sidebar) {
          return
        }

        const focusable = sidebar.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) {
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [selectedItem])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Every project is another chance to get better.</h2>
        <p className="section-subtitle">
          The learning milestones, programs, and courses that shaped my current path.
        </p>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="timeline">
            {timeline.map((item, index) => {
              const Icon = iconMap[item.type] || Award
              const alignment = index % 2 === 0 ? 'left' : 'right'

              return (
                <article
                  key={`${item.period}-${item.title}`}
                  className={`timeline-item ${alignment} scroll-reveal delay-${(index % 3) + 1} type-${item.type} ${item.details ? 'has-details' : ''}`}
                  {...(item.details
                    ? {
                        role: 'button',
                        tabIndex: 0,
                        'aria-haspopup': 'dialog',
                        onClick: () => setSelectedItem(item),
                        onKeyDown: (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            setSelectedItem(item)
                          }
                        }
                      }
                    : {})}
                >
                  <div className="timeline-dot-center"></div>
                  <div className="timeline-item-inner">
                    <div className="timeline-card-icon" aria-hidden="true">
                      {item.logo ? (
                        <img src={item.logo} alt="" className="timeline-org-logo" />
                      ) : (
                        <Icon size={22} />
                      )}
                    </div>

                    <div className="timeline-content">
                      <div className="timeline-topline">
                        <span className="timeline-period">{item.period}</span>
                        <span className="timeline-type">{item.type}</span>
                      </div>
                    <div className="timeline-heading">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-organization">{item.organization}</p>
                    </div>
                    <p className="timeline-description">{item.description}</p>

                    {item.achievements && (
                      <ul className="timeline-achievements">
                        {item.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    )}

                    {item.details && (
                      <span className="timeline-view-hint" aria-hidden="true">
                        View Details
                        <ChevronRight size={15} />
                      </span>
                    )}
                  </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {selectedItem && (
          <>
            <div className="exp-detail-overlay" onClick={() => setSelectedItem(null)} />

            <div
              className="exp-detail-sidebar"
              ref={sidebarRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedItem.title} - ${selectedItem.organization}`}
            >
              <button
                type="button"
                ref={closeBtnRef}
                className="exp-detail-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close details panel"
              >
                <X size={20} />
              </button>

              <header className="exp-detail-header">
                <span className="timeline-type">{selectedItem.type}</span>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.organization}</p>
                <span className="exp-detail-period">{selectedItem.period}</span>
              </header>

              <div className="exp-detail-image">
                {selectedItem.details.image ? (
                  <img src={selectedItem.details.image} alt={`${selectedItem.organization} campus`} />
                ) : (
                  <div className="exp-detail-image-placeholder">
                    <ImagePlus size={26} />
                    <span>University photo coming soon</span>
                  </div>
                )}
              </div>

              <div className="exp-detail-body">
                <h3>About</h3>
                <p>{selectedItem.details.about}</p>

                {selectedItem.details.sections.map((section) => (
                  <div key={section.title} className="exp-detail-section">
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  )
}

export default Experience
