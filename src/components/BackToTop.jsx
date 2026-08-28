import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import '../styles/BackToTop.css'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  )
}

export default BackToTop
