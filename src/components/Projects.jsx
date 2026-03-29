import React, { useEffect, useState } from 'react'
import { BarChart3, Thermometer, Monitor, Bot, Puzzle, Zap, X } from 'lucide-react'
import '../styles/Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const getIcon = (iconName) => {
    const iconMap = {
      "BarChart3": <BarChart3 size={32} />,
      "Thermometer": <Thermometer size={32} />,
      "Monitor": <Monitor size={32} />,
      "Bot": <Bot size={32} />,
      "Puzzle": <Puzzle size={32} />,
      "Zap": <Zap size={32} />
    }
    return iconMap[iconName]
  }

  const projects = [
    {
      id: 1,
      title: "AI Finance Tracker",
      description: "Full-stack web app with receipt OCR scanning, expense categorization, and financial insights powered by AI. Built to solve real personal finance management.",
      image: "ai-finance-tracker.jpg",
      iconName: "BarChart3",
      technologies: ["React", "Node.js", "Python", "OCR", "PostgreSQL"],
      github: "https://github.com/moataz",
      live: "https://ai-finance-tracker.vercel.app",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Smart IoT Monitor (ESP32)",
      description: "Real-time environmental monitoring system using ESP32. Tracks temperature, humidity, and air quality with cloud data visualization. Built for practical home automation.",
      image: "embedded-weather-station.jpg",
      iconName: "Thermometer",
      technologies: ["C++", "ESP32", "Arduino", "MQTT", "React"],
      github: "https://github.com/moataz",
      live: null,
      category: "embedded"
    },
    {
      id: 3,
      title: "Network Shell (NSH)",
      description: "Custom shell implementation with TCP/IP networking, command parsing, process management, and advanced scripting. Deep systems programming in C++.",
      image: "nsh-shell.jpg",
      iconName: "Monitor",
      technologies: ["C++", "CMake", "Linux", "Networking", "Sockets"],
      github: "https://github.com/moataz",
      live: null,
      category: "systems"
    },
    {
      id: 4,
      title: "Arduino Robotics Project",
      description: "Autonomous robotics system with obstacle detection, pathfinding algorithms, and real-time sensor integration. Showcases hardware + software integration.",
      image: "robotics-project.jpg",
      iconName: "Bot",
      technologies: ["Arduino", "C++", "Sensors", "Control Systems"],
      github: "https://github.com/moataz",
      live: null,
      category: "embedded"
    },
    {
      id: 5,
      title: "Problem-Solving Repository",
      description: "Advanced algorithms and data structures implementations. LeetCode-style problems solved in C++ with optimized solutions and explanations.",
      image: "algorithms-dsa.jpg",
      iconName: "Puzzle",
      technologies: ["C++", "Algorithms", "Data Structures", "Problem-Solving"],
      github: "https://github.com/moataz",
      live: null,
      category: "systems"
    },
    {
      id: 6,
      title: "Asynchronous C++ Framework",
      description: "High-performance async I/O framework using Boost.Asio. Demonstrates modern C++ patterns, threading, and networking fundamentals.",
      image: "boost-async-demo.jpg",
      iconName: "Zap",
      technologies: ["C++", "Boost", "Threading", "Async I/O"],
      github: "https://github.com/moataz",
      live: null,
      category: "systems"
    }
  ]

  const categories = ['all', 'fullstack', 'embedded', 'systems']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map(cat => (
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
                  src={`/src/assets/projects/${project.image}`} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex' }}
                />
                <div className="project-icon-fallback" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', width: '100%' }}>{getIcon(project.iconName)}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
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

      {/* Project Detail Sidebar */}
      {selectedProject && (
        <>
          {/* Overlay */}
          <div 
            className="project-overlay"
            onClick={closeProject}
          />
          
          {/* Sidebar */}
          <div className="project-sidebar">
            {/* Close Button */}
            <button 
              className="sidebar-close-btn"
              onClick={closeProject}
              title="Close"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>

            {/* Project Images Section */}
            <div className="sidebar-images">
              <div className="sidebar-main-image">
                <img 
                  src={`/src/assets/projects/${selectedProject.image}`}
                  alt={selectedProject.title}
                  onError={(e) => { 
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 212, 255, 0.1))">${e.currentTarget.alt}</div>`
                  }}
                />
              </div>
            </div>

            {/* Project Details Section */}
            <div className="sidebar-content">
              <h2 className="sidebar-title">{selectedProject.title}</h2>
              
              <p className="sidebar-description">{selectedProject.description}</p>

              {/* Technologies */}
              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Technologies</h3>
                <div className="sidebar-technologies">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="sidebar-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links Section */}
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
                </div>
              </div>

              {/* Additional Details Placeholder */}
              <div className="sidebar-section">
                <h3 className="sidebar-section-title">Project Details</h3>
                <p className="sidebar-placeholder">
                  This panel is ready for deeper case-study content like the problem, your approach,
                  architecture decisions, challenges, screenshots, and final results.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Projects
