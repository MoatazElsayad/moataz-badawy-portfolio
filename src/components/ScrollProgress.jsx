import React, { useEffect, useRef } from 'react'
import '../styles/ScrollProgress.css'

const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    let rafId = null

    const update = () => {
      rafId = null
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  )
}

export default ScrollProgress
