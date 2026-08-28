import React from 'react'
import Logo from './Logo'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-minimal">
          <div className="footer-mark" aria-hidden="true">
            <Logo animated={false} />
          </div>
          <p className="footer-rights">
            &copy; {currentYear} Moataz Badawy. All Rights Reserved.
          </p>
          <p className="footer-designed">Designed by Moataz Badawy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
