import React, { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ImagePlus,
  X
} from 'lucide-react'
import certificates, { CATEGORY_LABELS, FEATURED_CERTIFICATES } from '../data/certificates'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/Certificates.css'

// Continuous showcase speed in pixels per second.
const MARQUEE_SPEED = 55
const NUDGE_DURATION = 450

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ease-in-out cubic for arrow transitions.
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const Certificates = () => {
  useScrollReveal()

  const [selectedCert, setSelectedCert] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [mode, setMode] = useState('featured')

  const activeList = mode === 'all' ? certificates : FEATURED_CERTIFICATES

  const handleModeChange = (nextMode) => {
    if (nextMode === mode) {
      return
    }

    if (tweenRafRef.current) {
      cancelAnimationFrame(tweenRafRef.current)
      tweenRafRef.current = null
    }

    offsetRef.current = 0
    applyTransform()
    setMode(nextMode)
  }

  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const sidebarRef = useRef(null)
  const closeBtnRef = useRef(null)
  const lastFocusedRef = useRef(null)

  // Float accumulator — never store motion in scrollLeft/transform directly,
  // always apply from here so sub-pixel speeds actually accumulate.
  const offsetRef = useRef(0)
  const strideRef = useRef(0)
  const tweenRafRef = useRef(null)
  const resumeTimerRef = useRef(null)

  const applyTransform = () => {
    const track = trackRef.current
    if (track) {
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }
  }

  // Wrap the offset into [0, stride). Because the card set is duplicated, the
  // jump across the seam is pixel-identical and therefore invisible.
  const normalizeOffset = () => {
    const stride = strideRef.current
    if (stride <= 0) {
      return
    }
    while (offsetRef.current >= stride) {
      offsetRef.current -= stride
    }
    while (offsetRef.current < 0) {
      offsetRef.current += stride
    }
  }

  // Measure one set's width via layout offsets (unaffected by transforms).
  useEffect(() => {
    const track = trackRef.current
    if (!track || track.children.length < 2) {
      return
    }

    const measureStride = () => {
      const first = track.children[0]
      const firstClone = track.children[activeList.length]
      if (first && firstClone) {
        strideRef.current = firstClone.offsetLeft - first.offsetLeft
      }
      normalizeOffset()
      applyTransform()
    }

    measureStride()

    const resizeObserver = new ResizeObserver(measureStride)
    resizeObserver.observe(track)

    return () => resizeObserver.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeList])

  // Continuous right-to-left drift. Pauses while hovered, while the detail
  // sidebar is open, and entirely for reduced-motion users.
  useEffect(() => {
    if (isPaused || selectedCert || activeList.length < 2 || prefersReducedMotion()) {
      return
    }

    let rafId
    let lastTime = performance.now()

    const step = (now) => {
      const delta = Math.min(now - lastTime, 64)
      lastTime = now

      offsetRef.current += MARQUEE_SPEED * (delta / 1000)
      normalizeOffset()
      applyTransform()

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(rafId)
  }, [isPaused, selectedCert, activeList])

  useEffect(
    () => () => {
      cancelAnimationFrame(tweenRafRef.current ?? 0)
      clearTimeout(resumeTimerRef.current)
    },
    []
  )

  // Detail sidebar: scroll lock.
  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  // Detail sidebar: focus management + focus trap + Escape to close.
  useEffect(() => {
    if (!selectedCert) {
      return
    }

    lastFocusedRef.current = document.activeElement
    closeBtnRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null)
        return
      }

      if (event.key === 'Tab') {
        const sidebar = sidebarRef.current
        if (!sidebar) {
          return
        }

        const focusable = sidebar.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) {
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [selectedCert])

  const pauseBriefly = () => {
    clearTimeout(resumeTimerRef.current)
    setIsPaused(true)
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), NUDGE_DURATION + 500)
  }

  // Slide exactly one card left/right with an eased transition.
  const nudge = (direction) => {
    const track = trackRef.current
    if (!track || track.children.length < 2) {
      return
    }

    const child0 = track.children[0]
    const child1 = track.children[1]
    const stepWidth =
      child1 && child0
        ? child1.offsetLeft - child0.offsetLeft
        : viewportRef.current?.clientWidth / 3 || 300

    if (tweenRafRef.current) {
      cancelAnimationFrame(tweenRafRef.current)
      tweenRafRef.current = null
    }

    if (prefersReducedMotion()) {
      offsetRef.current += direction * stepWidth
      normalizeOffset()
      applyTransform()
      return
    }

    normalizeOffset()
    applyTransform()

    const from = offsetRef.current
    const target = from + direction * stepWidth
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / NUDGE_DURATION, 1)
      offsetRef.current = from + (target - from) * easeInOutCubic(progress)
      normalizeOffset()
      applyTransform()

      tweenRafRef.current =
        progress < 1 ? requestAnimationFrame(tick) : null
    }

    tweenRafRef.current = requestAnimationFrame(tick)
  }

  const handleTrackKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      pauseBriefly()
      nudge(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      pauseBriefly()
      nudge(1)
    }
  }

  const renderCard = (certificate, index, isClone) => (
    <article
      key={`${isClone ? 'clone' : 'cert'}-${certificate.id}`}
      className="cert-card"
      {...(isClone
        ? { 'aria-hidden': true, tabIndex: -1 }
        : {
            role: 'button',
            tabIndex: 0,
            onClick: () => setSelectedCert(certificate),
            onKeyDown: (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setSelectedCert(certificate)
              }
            },
            'aria-label': `View details of ${certificate.title}`
          })}
    >
      {certificate.image ? (
        <div className="cert-thumb cert-thumb-photo">
          <img
            src={certificate.image}
            alt={isClone ? '' : `${certificate.title} certificate`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="cert-thumb cert-thumb-placeholder" aria-hidden="true">
          <ImagePlus size={20} />
          <span>Photo coming soon</span>
        </div>
      )}

      <div className="cert-body">
        <span className="cert-category-chip">
          {CATEGORY_LABELS[certificate.category]}
        </span>

        <h3 className="cert-title">{certificate.title}</h3>
        <p className="cert-issuer">{certificate.issuer}</p>
        <p className="cert-date">
          <span className="cert-date-label">Issued:</span> {certificate.date}
        </p>
        <p className="cert-skills" title={certificate.skills.join(' · ')}>
          {certificate.skills.join(' · ')}
        </p>

        <div className="cert-footer">
          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-credential-link"
              onClick={(event) => event.stopPropagation()}
              {...(isClone ? { tabIndex: -1, 'aria-hidden': true } : {})}
            >
              View Credential
              <ExternalLink size={13} />
            </a>
          ) : (
            !isClone && <span className="cert-more-hint">View details</span>
          )}
        </div>
      </div>
    </article>
  )

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <p className="section-eyebrow">Learning & Credentials</p>
        <h2 className="section-title">The learning never really stops.</h2>
        <p className="section-subtitle">
          Credentials and recognitions that back up the skills and experience above.
        </p>

        <div className="cert-toolbar">
          <div className="cert-mode-toggle" role="group" aria-label="Certificate view">
            <button
              type="button"
              className={`cert-mode-btn${mode === 'featured' ? ' is-active' : ''}`}
              aria-pressed={mode === 'featured'}
              onClick={() => handleModeChange('featured')}
            >
              Featured
            </button>
            <button
              type="button"
              className={`cert-mode-btn${mode === 'all' ? ' is-active' : ''}`}
              aria-pressed={mode === 'all'}
              onClick={() => handleModeChange('all')}
            >
              All Certificates
            </button>
          </div>
        </div>

        <div
          className={`cert-carousel ${isPaused ? 'is-paused' : ''}`}
          ref={viewportRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Certificates and awards"
          tabIndex={0}
          onKeyDown={handleTrackKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="cert-track" ref={trackRef}>
            {activeList.map((certificate, index) => renderCard(certificate, index, false))}
            {/* Duplicated set makes the drift loop seamlessly; hidden from
                assistive tech and keyboard order. */}
            {activeList.map((certificate, index) => renderCard(certificate, index, true))}
          </div>
        </div>

        <div className="cert-controls">
          <button
            type="button"
            className="cert-nav-btn"
            onClick={() => {
              pauseBriefly()
              nudge(-1)
            }}
            aria-label="Scroll certificates backward"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="cert-controls-hint" aria-hidden="true">
            Auto-scrolling — hover to pause
          </span>

          <button
            type="button"
            className="cert-nav-btn"
            onClick={() => {
              pauseBriefly()
              nudge(1)
            }}
            aria-label="Scroll certificates forward"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {selectedCert && (
        <>
          <div className="cert-detail-overlay" onClick={() => setSelectedCert(null)} />

          <div
            className="cert-detail-sidebar"
            ref={sidebarRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
          >
            <button
              type="button"
              className="cert-detail-close"
              ref={closeBtnRef}
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate details"
            >
              <X size={24} />
            </button>

            <div className="cert-detail-images">
              <div className="cert-detail-main-image">
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={`${selectedCert.title} certificate`} />
                ) : (
                  <div className="cert-detail-image-fallback">
                    <ImagePlus size={40} />
                    <span>Certificate photo coming soon</span>
                  </div>
                )}
              </div>
            </div>

            <div className="cert-detail-content">
              <div className="cert-detail-meta">
                <span className={`cert-type cert-type-${selectedCert.type}`}>
                  {selectedCert.type}
                </span>
              </div>

              <h2 className="cert-detail-title">{selectedCert.title}</h2>
              <p className="cert-detail-issuer">{selectedCert.issuer}</p>

              <div className="cert-detail-facts">
                <div className="cert-detail-fact">
                  <span className="cert-detail-fact-label">Date</span>
                  <strong>{selectedCert.date}</strong>
                </div>
                <div className="cert-detail-fact">
                  <span className="cert-detail-fact-label">Recognition</span>
                  <strong>{selectedCert.type}</strong>
                </div>
              </div>

              <div className="cert-detail-section">
                <h3 className="cert-detail-section-title">About this credential</h3>
                <p className="cert-detail-description">{selectedCert.description}</p>
              </div>

              {selectedCert.skills?.length > 0 && (
                <div className="cert-detail-section">
                  <h3 className="cert-detail-section-title">Skills</h3>
                  <div className="cert-detail-skills">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="cert-detail-skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedCert.credentialUrl && (
                <div className="cert-detail-section">
                  <h3 className="cert-detail-section-title">Links</h3>
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-link"
                  >
                    Verify credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Certificates
