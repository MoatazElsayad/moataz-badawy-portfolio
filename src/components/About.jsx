import React from 'react'
import { GraduationCap, Rocket, Zap, TrendingUp } from 'lucide-react'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I earned a <strong>USAID Scholarship</strong> to study Computer Engineering at AUC—a journey that required discipline, resilience, and an unwavering commitment to growth. Every challenge I faced became an opportunity to improve myself. This experience shaped my core belief: <strong>tiny changes compound into remarkable results.</strong>
            </p>
            
            <p>
              I'm obsessed with building real-world systems—from Arduino projects that solve practical problems to full-stack web applications that scale. My philosophy is simple: understand the problem deeply, engineer elegant solutions, and iterate relentlessly. I code in C++ and JavaScript, work with electronics (Arduino, ESP32), and design systems that matter.
            </p>

            <p>
              My goal is clear: become highly skilled in computer engineering and eventually launch my own tech startup. I'm actively building through freelance projects, contributing to challenging technical problems, and continuously expanding my expertise. I believe the most rewarding work comes from combining technical excellence with a mission-driven vision.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon"><GraduationCap size={28} /></span>
                <h3>USAID Scholar</h3>
                <p>AUC Computer Engineering</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon"><Rocket size={28} /></span>
                <h3>Tech Founder</h3>
                <p>Building toward startup dreams</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon"><Zap size={28} /></span>
                <h3>Builder Mindset</h3>
                <p>Systems, Electronics, Code</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon"><TrendingUp size={28} /></span>
                <h3>Growth Philosophy</h3>
                <p>Tiny changes, remarkable results</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="avatar-circle"></div>
              <div className="accent-shape"></div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote Section */}
        <div className="philosophy-section">
          <blockquote className="philosophy-quote">
            <p>"Tiny changes, remarkable results."</p>
            <span className="quote-source">— Inspired by Atomic Habits</span>
          </blockquote>
          <p className="philosophy-description">
            This philosophy drives everything I do. I believe in consistency, incremental growth, and the power of small disciplined actions accumulating over time. Whether it's learning a new technology, building a project, or working toward my startup vision, I focus on progress, not perfection.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
