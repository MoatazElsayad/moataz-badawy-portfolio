import React, { useState, useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
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
    'Computer Engineering Student',
    'Systems Builder',
    'Founder-minded Engineer'
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
        baseX: canvas.width / 2 + Math.cos(angle) * distance,
        baseY: canvas.height / 2 + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
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

        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 + Math.sin(node.pulse) * 0.1})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(node.x, node.y)
        ctx.stroke()

        const nodeSize = 2.5 + Math.sin(node.pulse) * 1.5
        ctx.fillStyle = `rgba(0, 102, 255, ${0.5 + Math.cos(node.pulse) * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 + Math.sin(node.pulse) * 0.1})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2)
        ctx.stroke()
      })

      ctx.fillStyle = 'rgba(0, 102, 255, 0.05)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2)
      ctx.stroke()

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
            <span className="tagline-accent">Systems Engineering</span>{' '}
            <span className="tagline-separator">/</span>{' '}
            <span className="tagline-accent">Embedded + Full-Stack</span>{' '}
            <span className="tagline-separator">/</span>{' '}
            <span className="tagline-accent">Startup Ambition</span>
          </h2>
          <div className="typing-container">
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-bio">
            USAID Scholar at AUC building across C++, embedded systems, and full-stack applications. I like technically demanding work, practical products, and projects that prove capability through execution.
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
            <a href="https://github.com/moataz-badawy" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <img
                src={`${socialIconBase}/github/ffffff?viewbox=auto&size=24`}
                alt="GitHub"
                className="social-brand-icon"
                loading="lazy"
              />
            </a>
            <a href="https://linkedin.com/in/moataz-badawy" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <img
                src={`${socialIconBase}/linkedin/0A66C2?viewbox=auto&size=24`}
                alt="LinkedIn"
                className="social-brand-icon"
                loading="lazy"
              />
            </a>
            <a href="https://twitter.com/moataz_badawy" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
              <img
                src={`${socialIconBase}/x/ffffff?viewbox=auto&size=24`}
                alt="X"
                className="social-brand-icon"
                loading="lazy"
              />
            </a>
            <a href="mailto:moataz.badawy@email.com" title="Email" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <canvas ref={canvasRef} className="network-canvas"></canvas>

          <img
            src={profileImage}
            alt="Moataz Badawy Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
