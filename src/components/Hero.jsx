import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import '../styles/Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    'Computer Engineering Student',
    'Problem Solver',
    'Future Tech Founder'
  ]

  useEffect(() => {
    let timer
    const handleType = () => {
      const fullText = phrases[loopNum % phrases.length]
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        setTypingSpeed(50)
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Moataz Badawy</h1>
          <h2 className="hero-title">Building Systems, Solving Problems, Turning Ideas Into Reality</h2>
          <div className="typing-container">
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-subtitle">
            A USAID Scholar at AUC driven by discipline, growth, and a belief that tiny changes lead to remarkable results. I build systems, solve problems, and work toward founding my own tech startup.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, '#projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Contact Me
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/moataz-badawy" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/moataz-badawy" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:moataz.badawy@email.com" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
