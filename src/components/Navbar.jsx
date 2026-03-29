import React, { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const canvasRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e) => {
    const href = e.target.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }
  }

  // Particle animation for navbar
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <nav className="navbar">
      <canvas ref={canvasRef} className="nav-particles"></canvas>
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="8" cy="8" r="1.5" fill="#00d4ff" filter="url(#logoGlow)"/>
            <circle cx="32" cy="8" r="1.5" fill="#00d4ff" filter="url(#logoGlow)"/>
            <circle cx="8" cy="32" r="1.5" fill="#00d4ff" filter="url(#logoGlow)"/>
            <circle cx="32" cy="32" r="1.5" fill="#00d4ff" filter="url(#logoGlow)"/>
            <path d="M 8 8 L 8 32 M 8 8 L 16 20 L 24 8 M 24 8 L 24 32" stroke="#00d4ff" strokeWidth="1.2" fill="none" filter="url(#logoGlow)"/>
            <path d="M 32 8 L 32 32 M 32 8 L 28 8 Q 24 8 24 14 Q 28 14 32 14 M 32 14 L 28 14 Q 24 14 24 26 Q 28 26 32 26 L 32 32" stroke="#0066ff" strokeWidth="1.2" fill="none" filter="url(#logoGlow)"/>
          </svg>
          <span className="logo-text">MB</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>

        <div className="navbar-controls">
          <button className="theme-toggle" onClick={onToggleDarkMode} title="Toggle dark mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
