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
          <a href="#home">MB</a>
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
