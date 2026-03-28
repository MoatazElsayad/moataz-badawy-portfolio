import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Moataz Badawy</h3>
            <p>USAID Scholar | Computer Engineering Student | Builder</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <div className="footer-social">
              <a href="https://github.com/moataz-badawy" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/moataz-badawy" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:moataz.badawy@email.com" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Moataz Badawy. All rights reserved.</p>
          <p>Designed & Built with <span className="heart"><Heart style={{ display: 'inline', verticalAlign: 'center', margin: '0 4px' }} size={18} fill="currentColor" /></span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
