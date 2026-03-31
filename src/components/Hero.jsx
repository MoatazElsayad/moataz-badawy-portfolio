import React, { useState, useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import linkedinIcon from '../assets/icons/linkedin.svg'
import profileImage from '../assets/images/profile.png'
import '../styles/Hero.css'

const socialIconBase = 'https://cdn.simpleicons.org'

const Hero = () => {
  const canvasRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    'Computer Engineering Freshman',
    'Young Entrepreneur',
    'Full-Stack Developer'
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const nodes = []
    const nodeCount = 12

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const distance = 150
      nodes.push({
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height / 2 + Math.sin(angle) * distance,
        angle,
        distance,
        pulse: Math.random() * Math.PI * 2
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      nodes.forEach((node) => {
        node.angle += 0.002
        node.pulse += 0.02

        node.x = centerX + Math.cos(node.angle) * (node.distance + Math.sin(node.pulse) * 20)
        node.y = centerY + Math.sin(node.angle) * (node.distance + Math.sin(node.pulse) * 20)

        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + Math.sin(node.pulse) * 0.08})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(node.x, node.y)
        ctx.stroke()

        const nodeSize = 2.4 + Math.sin(node.pulse) * 1.2
        ctx.fillStyle = `rgba(245, 199, 94, ${0.3 + Math.cos(node.pulse) * 0.15})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
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

  useEffect(() => {
    let timer

    const handleType = () => {
      const fullText = phrases[loopNum % phrases.length]

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        setTypingSpeed(45)
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        setTypingSpeed(95)
      }

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1900)
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
      <div className="space-bg">
        <canvas id="codeRain" className="code-rain"></canvas>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">Moataz Badawy</h1>
          <h2 className="hero-tagline">
            <span className="tagline-accent">Computer Engineering Freshman</span>{' '}
            <span className="tagline-separator">/</span>{' '}
            <span className="tagline-accent">AUCian</span>{' '}
            <span className="tagline-separator">/</span>{' '}
            <span className="tagline-accent">Young Entrepreneur</span>{' '}
            <span className="tagline-separator">/</span>{' '}
            <span className="tagline-accent">Full-Stack Developer</span>
          </h2>

          <div className="typing-container">
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </div>

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
              <img src={`${socialIconBase}/github/ffffff?viewbox=auto&size=24`} alt="GitHub" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/moatazelsayad" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="https://x.com/moa_0_0_0_" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
              <img src={`${socialIconBase}/x/ffffff?viewbox=auto&size=24`} alt="X" className="social-brand-icon" loading="lazy" />
            </a>
            <a href="mailto:moatazbadawy@aucegypt.edu" title="Email" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <canvas ref={canvasRef} className="network-canvas"></canvas>
          <div className="profile-frame">
            <img src={profileImage} alt="Moataz Badawy Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
