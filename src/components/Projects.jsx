import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BarChart3, Thermometer, Monitor, Bot, Puzzle, Zap, X, ChevronLeft, ChevronRight, PlayCircle, Globe } from 'lucide-react'
import projects from '../data/projects'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
  </svg>
)
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/Projects.css'

const brandIconBase = 'https://cdn.simpleicons.org'

const Projects = () => {
  useScrollReveal();

  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const [withTransition, setWithTransition] = useState(true)

  const sectionRef = useRef(null)

  useEffect(() => {
    const computePerView = () => {
      const width = window.innerWidth
      setPerView(width <= 640 ? 1 : width <= 1024 ? 2 : 3)
    }
    computePerView()
    window.addEventListener('resize', computePerView)
    return () => window.removeEventListener('resize', computePerView)
  }, [])

  useEffect(() => {
    const target = sectionRef.current
    if (!target) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setCarouselIndex(0)
          setWithTransition(true)
        }
      },
      { threshold: 0 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const totalProjects = projects.length

  const handleTrackTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
    if (carouselIndex >= totalProjects) {
      setWithTransition(false)
      setCarouselIndex(carouselIndex - totalProjects)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setWithTransition(true))
      )
    }
  }

  const goToPrevSlide = () => {
    if (!withTransition) return
    if (carouselIndex === 0) {
      setWithTransition(false)
      setCarouselIndex(totalProjects)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setWithTransition(true)
          setCarouselIndex(totalProjects - 1)
        })
      )
      return
    }
    setCarouselIndex(carouselIndex - 1)
  }

  const goToNextSlide = () => {
    if (!withTransition) return
    if (carouselIndex >= 2 * totalProjects - perView) {
      setWithTransition(false)
      setCarouselIndex(carouselIndex % totalProjects)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setWithTransition(true))
      )
      return
    }
    setCarouselIndex(carouselIndex + 1)
  }

  const sidebarRef = useRef(null)
  const closeBtnRef = useRef(null)
  const lastFocusedRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) {
        return
      }

      if (event.key === 'Escape') {
        closeProject()
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
        return
      }

      const galleryLength = selectedProject.gallery?.length ?? 0

      if (galleryLength > 1 && event.key === 'ArrowRight') {
        setSelectedImageIndex((current) => (current + 1) % galleryLength)
      }

      if (galleryLength > 1 && event.key === 'ArrowLeft') {
        setSelectedImageIndex((current) => (current - 1 + galleryLength) % galleryLength)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    lastFocusedRef.current = document.activeElement
    closeBtnRef.current?.focus()

    return () => {
      lastFocusedRef.current?.focus?.()
    }
  }, [selectedProject])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const getIcon = (iconName) => {
    const iconMap = {
      BarChart3: <BarChart3 size={32} />,
      Thermometer: <Thermometer size={32} />,
      Monitor: <Monitor size={32} />,
      Bot: <Bot size={32} />,
      Puzzle: <Puzzle size={32} />,
      Zap: <Zap size={32} />
    }
    return iconMap[iconName]
  }

  const technologyLogos = {
    React: { logo: 'react', color: '61DAFB' },
    'Node.js': { logo: 'nodedotjs', color: '5FA04E' },
    Python: { logo: 'python', color: '3776AB' },
    PostgreSQL: { logo: 'postgresql', color: '4169E1' },
    'C++': { logo: 'cplusplus', color: '00599C' },
    ESP32: { logo: 'espressif', color: 'E7352C' },
    Arduino: { logo: 'arduino', color: '00979D' },
    MQTT: { logo: 'mqtt', color: '660066' },
    Linux: { logo: 'linux', color: 'FCC624' },
    Boost: { logo: 'boost', color: 'F7901E' },
    JavaScript: { logo: 'javascript', color: 'F7DF1E' },
    HTML5: { logo: 'html5', color: 'E34F26' },
    CSS3: { logo: 'css', color: '1572B6' }
  }

  const currentGalleryImage = useMemo(() => {
    if (!selectedProject) {
      return null
    }

    if (!selectedProject.gallery?.length) {
      return selectedProject.image
    }

    return selectedProject.gallery[selectedImageIndex]
  }, [selectedImageIndex, selectedProject])

  const openProject = (project) => {
    setSelectedProject(project)
    setSelectedImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setSelectedImageIndex(0)
  }

  const showNextImage = () => {
    if (!selectedProject?.gallery?.length) {
      return
    }

    setSelectedImageIndex((current) => (current + 1) % selectedProject.gallery.length)
  }

  const showPreviousImage = () => {
    if (!selectedProject?.gallery?.length) {
      return
    }

    setSelectedImageIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
  }

  const renderTechnology = (tech, className) => {
    const brand = technologyLogos[tech]

    return (
      <span className={className}>
        {brand && (
          <img
            src={`${brandIconBase}/${brand.logo}/${brand.color}?viewbox=auto&size=20`}
            alt={`${tech} logo`}
            className="tech-logo"
            loading="lazy"
          />
        )}
        <span>{tech}</span>
      </span>
    )
  }

  const renderMedia = (src, alt, className) => {
    if (src && src.endsWith('.mp4')) {
      return (
        <video
          src={src}
          className={className}
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'cover' }}
        />
      )
    }
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(event) => {
          event.target.style.display = 'none'
          if (event.target.nextElementSibling && event.target.nextElementSibling.classList.contains('project-icon-fallback')) {
            event.target.nextElementSibling.style.display = 'flex'
          } else if (event.target.parentElement && event.target.parentElement.classList.contains('sidebar-main-image')) {
            event.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:linear-gradient(135deg, rgba(var(--primary-color-rgb), 0.1), rgba(var(--secondary-color-rgb), 0.1))">${alt}</div>`
          }
        }}
      />
    )
  }

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">Featured Work</p>
        <h2 className="section-title">Ideas are nice. Working systems are better.</h2>
        <p className="section-subtitle">
          A focused set of projects that are ready to be presented with real visuals and deeper context.
        </p>

        {(() => {
          const logicalStart = (carouselIndex % totalProjects) + 1
          const logicalEnd = ((carouselIndex % totalProjects) + perView - 1) % totalProjects + 1

          return (
            <>
              <div className="projects-counter" role="status">
                Showing projects {logicalStart}&ndash;{logicalEnd} of {totalProjects}
              </div>

              <div className="projects-carousel">
                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-left"
                  onClick={goToPrevSlide}
                  aria-label="Previous projects"
                >
                  <ChevronLeft size={22} />
                </button>

                <div className="projects-carousel-viewport">
                  <div
                    className="projects-carousel-track"
                    style={{ '--i': carouselIndex, transition: withTransition ? undefined : 'none' }}
                    onTransitionEnd={handleTrackTransitionEnd}
                  >
                    {[...projects, ...projects].map((project, slideIdx) => (
                      <div
                        key={`${project.id}-slide-${slideIdx}`}
                        className="project-card"
                        onClick={() => openProject(project)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            openProject(project)
                          }
                        }}
                        aria-label={`Open details for ${project.title}`}
                      >
              <div className="project-image">
                {renderMedia(project.image, project.title, "project-img")}
                {project.videoEmbed && (
                  <div className="project-video-badge">
                    <PlayCircle size={18} />
                    <span>Watch demo</span>
                  </div>
                )}
                <div className="project-icon-fallback" style={{ fontSize: '2rem', display: 'none', alignItems: 'center', justifyContent: 'center', height: '120px', width: '100%' }}>
                  {getIcon(project.iconName)}
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className={`project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>{project.status}</span>
                  <span className="project-role">{project.role}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <React.Fragment key={tech}>
                      {renderTechnology(tech, 'tech-tag')}
                    </React.Fragment>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <GithubIcon size={15} />
                    <span> GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              </div>
                    </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="carousel-arrow carousel-arrow-right"
                  onClick={goToNextSlide}
                  aria-label="Next projects"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </>
          )
        })()}
      </div>

      {selectedProject && (
        <>
          <div
            className="project-overlay"
            onClick={closeProject}
          />

          <div
            className="project-sidebar"
            ref={sidebarRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <button
              className="sidebar-close-btn"
              onClick={closeProject}
              ref={closeBtnRef}
              title="Close"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>

            <div className="sidebar-images">
              <div className="sidebar-main-image">
                {selectedProject.videoEmbed && !selectedProject.gallery.length ? (
                  <iframe
                    src={selectedProject.videoEmbed}
                    title={`${selectedProject.title} video demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    {renderMedia(currentGalleryImage, `${selectedProject.title} screenshot ${selectedImageIndex + 1}`, "")}

                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button className="sidebar-gallery-nav sidebar-gallery-nav-left" onClick={showPreviousImage} aria-label="Previous image">
                          <ChevronLeft size={20} />
                        </button>
                        <button className="sidebar-gallery-nav sidebar-gallery-nav-right" onClick={showNextImage} aria-label="Next image">
                          <ChevronRight size={20} />
                        </button>
                        <div className="sidebar-gallery-dots" aria-label="Project screenshots">
                          {selectedProject.gallery.map((image, index) => (
                            <button
                              key={image}
                              type="button"
                              className={`sidebar-gallery-dot ${selectedImageIndex === index ? 'active' : ''}`}
                              onClick={() => setSelectedImageIndex(index)}
                              aria-label={`Show screenshot ${index + 1} of ${selectedProject.gallery.length}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="sidebar-content">
              <div className="sidebar-meta">
                <span className={`project-status ${selectedProject.status.toLowerCase().replace(/\s+/g, '-')}`}>{selectedProject.status}</span>
                <span className="sidebar-role">{selectedProject.role}</span>
              </div>

              <h2 className="sidebar-title">{selectedProject.title}</h2>
              <p className="sidebar-description">{selectedProject.description}</p>

              <div className="sidebar-facts">
                <div className="sidebar-fact">
                  <span className="sidebar-fact-label">Timeline</span>
                  <strong>{selectedProject.startDate} - {selectedProject.endDate}</strong>
                </div>
                <div className="sidebar-fact">
                  <span className="sidebar-fact-label">Category</span>
                  <strong>{selectedProject.category}</strong>
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Technologies</h3>
                <div className="sidebar-technologies">
                  {selectedProject.technologies.map((tech) => (
                    <React.Fragment key={tech}>
                      {renderTechnology(tech, 'sidebar-tech-tag')}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Highlights</h3>
                <ul className="sidebar-highlights">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Links</h3>
                <div className="sidebar-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                    <GithubIcon size={15} />
                    GitHub
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link sidebar-link-secondary"
                    >
                      <Globe size={15} />
                      Visit Website
                    </a>
                  )}
                  {selectedProject.videoWatchUrl && (
                    <a href={selectedProject.videoWatchUrl} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Projects
