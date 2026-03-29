import React, { useState, useEffect, useRef } from 'react'
import { Code, Briefcase, Share2, Mail } from 'lucide-react'
import profileImage from '../assets/images/profile.png'
import '../styles/Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    'Computer Engineering Student',
    'Problem Solver',
    'Future Tech Founder'
  ]

  // Network nodes animation
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

    // Initialize nodes
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
        angle: angle,
        distance: distance,
        pulse: Math.random() * Math.PI * 2
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.angle += 0.002
        node.pulse += 0.02
        
        node.x = centerX + Math.cos(node.angle) * (node.distance + Math.sin(node.pulse) * 20)
        node.y = centerY + Math.sin(node.angle) * (node.distance + Math.sin(node.pulse) * 20)

        // Draw connecting lines
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 + Math.sin(node.pulse) * 0.1})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(node.x, node.y)
        ctx.stroke()

        // Draw node
        const nodeSize = 2.5 + Math.sin(node.pulse) * 1.5
        ctx.fillStyle = `rgba(0, 102, 255, ${0.5 + Math.cos(node.pulse) * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 + Math.sin(node.pulse) * 0.1})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw subtle center circle
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
      {/* Space background with floating code */}
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
            <span className="tagline-accent">Architecting Intelligent Systems</span> • 
            <span className="tagline-accent">Solving Impossible Problems</span> • 
            <span className="tagline-accent">Manifesting Future Technologies</span>
          </h2>
          <div className="typing-container">
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-bio">
            USAID Scholar @ AUC. Systems thinker. I engineer elegant solutions at the intersection of technology and impact. Obsessed with turning bold ideas into scalable realities and building the next generation of transformative tech companies.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary glow-btn"
              onClick={(e) => handleScroll(e, '#projects')}
            >
              <span className="btn-text">View Projects</span>
              <span className="btn-glow"></span>
            </button>
            <button 
              className="btn btn-secondary glass-btn"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              <span className="btn-text">Contact Me</span>
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/moataz-badawy" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Code size={24} />
            </a>
            <a href="https://linkedin.com/in/moataz-badawy" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Briefcase size={24} />
            </a>
            <a href="https://twitter.com/moataz_badawy" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Share2 size={24} />
            </a>
            <a href="mailto:moataz.badawy@email.com" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <canvas ref={canvasRef} className="network-canvas"></canvas>
          
          {/* Profile image - seamlessly integrated */}
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
