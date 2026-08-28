import React, { useEffect, useRef } from 'react'
import '../styles/Hero.css'

const AnimatedBackground = ({ colorScheme }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    let resizeTimer = null
    const handleResize = () => {
      setCanvasSize()
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(init, 200)
    }

    setCanvasSize()
    window.addEventListener('resize', handleResize)

    // Configuration based on colorScheme
    const getColors = () => {
      if (colorScheme === 'burgundy') {
        return {
          particle: 'rgba(224, 90, 127, 0.4)',
          line: 'rgba(224, 90, 127, 0.15)'
        }
      }
      return {
        particle: 'rgba(56, 189, 248, 0.4)',
        line: 'rgba(56, 189, 248, 0.15)'
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw(colors) {
        ctx.fillStyle = colors.particle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100)
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    init()

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Draw one static frame and skip the animation loop entirely.
      const colors = getColors()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => particle.draw(colors))

      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(resizeTimer)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const colors = getColors()

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(colors)

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = colors.line
            ctx.lineWidth = 1 - distance / 120
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colorScheme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.8s ease'
      }}
    />
  )
}

export default AnimatedBackground
