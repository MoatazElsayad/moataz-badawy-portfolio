import React, { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import linkedinIcon from '../assets/icons/linkedin.svg'
import blueHeroImage from '../assets/images/blue_hero.png'
import burgundyHeroImage from '../assets/images/Burgundy_hero.jpeg'
import '../styles/Hero.css'

const socialIconBase = 'https://cdn.simpleicons.org'

const phrases = [
  'Computer Engineering Freshman',
  'Young Entrepreneur',
  'Full-Stack Developer'
]

const Hero = ({ colorScheme, darkMode }) => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    const fullText = phrases[loopNum % phrases.length]

    if (!isDeleting && displayText === fullText) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 1900)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setLoopNum((current) => current + 1)
      return
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(fullText.substring(0, displayText.length + (isDeleting ? -1 : 1)))
    }, isDeleting ? 45 : 95)

    return () => clearTimeout(typeTimer)
  }, [displayText, isDeleting, loopNum])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" data-color-scheme={colorScheme}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-edu-tag">
            Computer Engineering Student · The American University in Cairo
          </p>

          <h1 className="hero-name">Moataz Badawy</h1>
          
          <div className="typing-container">
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </div>

          <h2 className="hero-tagline">
            I build things at the intersection of software, hardware, and AI.
          </h2>

          <p className="hero-bio">
            Computer Engineering student focused on building efficient, scalable systems. I work with C++ and embedded systems, applying algorithmic thinking to turn complex problems into clean, high-performance solutions.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary glow-btn"
              onClick={(e) => handleScroll(e, '#projects')}
            >
              <span className="btn-text">View Projects</span>
              <span className="btn-glow"></span>
            </button>
            <a className="btn btn-secondary glass-btn" href="/Moataz_Badawy_CV.pdf" download>
              <span className="btn-text">Download CV</span>
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/MoatazElsayad" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <img src={`${socialIconBase}/github/${darkMode ? 'ffffff' : '1a1a1a'}?viewbox=auto&size=24`} alt="GitHub" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/moatazelsayad" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="https://x.com/moa_0_0_0_" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
              <img src={`${socialIconBase}/x/${darkMode ? 'ffffff' : '1a1a1a'}?viewbox=auto&size=24`} alt="X" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="mailto:moatazbadawy@aucegypt.edu" title="Email" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="profile-card-wrap">
            <div className="profile-card-offset" aria-hidden="true"></div>
            <div className="profile-frame">
              <div className="profile-image-stack">
                <img
                  src={blueHeroImage}
                  alt="Moataz Badawy"
                  className={`profile-image ${colorScheme === 'burgundy' ? 'is-hidden' : 'is-visible'}`}
                />
                <img
                  src={burgundyHeroImage}
                  alt=""
                  aria-hidden="true"
                  className={`profile-image ${colorScheme === 'burgundy' ? 'is-visible' : 'is-hidden'}`}
                />
              </div>
              <div className="profile-badge">
                <strong>Moataz Badawy</strong>
                <span>Computer Engineering · AUC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
