import React, { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Logo from './Logo'
import '../styles/Navbar.css'

const Navbar = ({ onToggleDarkMode, darkMode, colorScheme, onColorSchemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = 'home'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || current
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={handleNavClick} aria-label="Moataz Badawy — back to top">
          <Logo />
        </a>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          {['home', 'projects', 'about', 'skills', 'experience', 'certificates', 'contact'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={handleNavClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className="navbar-controls">
          <div className="theme-scheme-picker" aria-label="Theme color scheme">
            {['blue', 'burgundy'].map((scheme) => (
              <button
                key={scheme}
                type="button"
                className={`scheme-swatch scheme-swatch-${scheme} ${colorScheme === scheme ? 'active' : ''}`}
                onClick={() => onColorSchemeChange(scheme)}
                title={`${scheme.charAt(0).toUpperCase() + scheme.slice(1)} theme`}
                aria-label={`${scheme.charAt(0).toUpperCase() + scheme.slice(1)} theme`}
                aria-pressed={colorScheme === scheme}
              />
            ))}
          </div>
          <button 
            className="theme-toggle" 
            onClick={onToggleDarkMode} 
            title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
