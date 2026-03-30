import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <nav className="navbar">
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
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
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
