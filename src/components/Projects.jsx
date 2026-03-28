import React, { useState } from 'react'
import { BarChart3, Thermometer, Monitor, Bot, Puzzle, Zap } from 'lucide-react'
import '../styles/Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

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
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px' }}>{getIcon(project.iconName)}</div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
