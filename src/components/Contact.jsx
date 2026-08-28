import React from 'react'
import { FileDown, Mail } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/Contact.css'

const contactEmail = 'moatazbadawy@aucegypt.edu'

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
  </svg>
)

const Contact = () => {
  useScrollReveal()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card scroll-reveal">
          <div className="contact-arch-ring" aria-hidden="true"></div>

          <span className="contact-kicker">Get in Touch</span>

          <h2 className="contact-heading">Let&apos;s turn an idea into something real.</h2>

          <p className="contact-bio">
            I&apos;m a Computer Engineering student at AUC working across embedded systems,
            full-stack products, and data-driven tools. I&apos;m targeting software engineering
            internships from Summer 2027 and I&apos;m open to collaborations and interesting
            builds right now — if you have an ambitious idea, let&apos;s talk.
          </p>

          <div className="contact-actions">
            <a className="contact-pill contact-pill-primary" href={`mailto:${contactEmail}`}>
              <Mail size={18} aria-hidden="true" />
              <span>Email Me</span>
            </a>

            <a
              className="contact-pill"
              href="https://www.linkedin.com/in/moatazelsayad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              className="contact-pill"
              href="https://github.com/MoatazElsayad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <a className="contact-pill" href="/Moataz_Badawy_CV.pdf" download>
              <FileDown size={18} aria-hidden="true" />
              <span>Résumé</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
