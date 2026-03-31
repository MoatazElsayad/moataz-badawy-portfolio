import React from 'react'
import { Mail } from 'lucide-react'
import '../styles/Footer.css'

const socialIconBase = 'https://cdn.simpleicons.org'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Moataz Badawy</h3>
            <p>Computer Engineering Freshman | AUCian | Young Entrepreneur | Full-Stack Developer</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <div className="footer-social">
              <a href="https://github.com/MoatazElsayad" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                <img src={`${socialIconBase}/github/ffffff?viewbox=auto&size=20`} alt="GitHub" className="social-brand-icon" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/in/moatazelsayad" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <img src={`${socialIconBase}/linkedin/0A66C2?viewbox=auto&size=20`} alt="LinkedIn" className="social-brand-icon" loading="lazy" />
              </a>
              <a href="https://x.com/moa_0_0_0_" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
                <img src={`${socialIconBase}/x/ffffff?viewbox=auto&size=20`} alt="X" className="social-brand-icon" loading="lazy" />
              </a>
              <a href="mailto:moatazbadawy@aucegypt.edu" title="Email" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Moataz Badawy. All rights reserved.</p>
          <p>Designed and built by Moataz Badawy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
