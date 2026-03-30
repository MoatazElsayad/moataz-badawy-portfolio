import React, { useEffect, useMemo, useState } from 'react'
import { BarChart3, Thermometer, Monitor, Bot, Puzzle, Zap, X, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react'
import projects from '../data/projects'
import '../styles/Projects.css'

const brandIconBase = 'https://cdn.simpleicons.org'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }

      if (!selectedProject) {
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

  const categories = ['all', 'fullstack']

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter)

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

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A focused set of projects that are ready to be presented with real visuals and deeper context.
        </p>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(event) => {
                    event.target.style.display = 'none'
                    event.target.nextElementSibling.style.display = 'flex'
                  }}
                />
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
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <>
          <div
            className="project-overlay"
            onClick={closeProject}
          />

          <div className="project-sidebar">
            <button
              className="sidebar-close-btn"
              onClick={closeProject}
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
                    <img
                      src={currentGalleryImage}
                      alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
                      onError={(event) => {
                        event.target.style.display = 'none'
                        event.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(56, 189, 248, 0.1))">${event.currentTarget.alt}</div>`
                      }}
                    />

                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button className="sidebar-gallery-nav sidebar-gallery-nav-left" onClick={showPreviousImage} aria-label="Previous image">
                          <ChevronLeft size={20} />
                        </button>
                        <button className="sidebar-gallery-nav sidebar-gallery-nav-right" onClick={showNextImage} aria-label="Next image">
                          <ChevronRight size={20} />
                        </button>
                        <div className="sidebar-gallery-counter">
                          {selectedImageIndex + 1} / {selectedProject.gallery.length}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {selectedProject.gallery.length > 1 && (
                <div className="sidebar-thumbnails">
                  {selectedProject.gallery.map((image, index) => (
                    <button
                      key={image}
                      className={`sidebar-thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`Show screenshot ${index + 1}`}
                    >
                      <img src={image} alt={`${selectedProject.title} thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
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
                    GitHub
                  </a>
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                      Live Demo
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
