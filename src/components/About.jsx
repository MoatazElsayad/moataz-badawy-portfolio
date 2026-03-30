import React from 'react'
import profilePhoto from '../assets/images/profile.jpg'
import '../styles/About.css'

const aucLogoUrl = 'https://play-lh.googleusercontent.com/zZ2SExEDKKmKQwHQwF9mnuMrqwdidwWmOjCyPeX2XH1Lu4uz9V_5vcnQ6eWlJNLP6OE'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A clearer snapshot of who I am, what I study, and how I want to build.
        </p>

        <div className="about-card">
          <div className="about-photo-column">
            <div className="about-photo-ring">
              <img src={profilePhoto} alt="Moataz Badawy portrait" className="about-photo" />
            </div>
          </div>

          <div className="about-copy-column">
            <img src={aucLogoUrl} alt="AUC logo" className="about-auc-logo" />
            <p className="about-affiliation">The American University in Cairo</p>
            <p className="about-role">Computer Engineering Freshman, School of Sciences and Engineering</p>

            <div className="about-body">
              <p>
                The American University in Cairo is where I am currently building my foundation as a Computer Engineering freshman, learning in an environment that pushes both technical discipline and long-term ambition.
              </p>

              <p>
                I am especially drawn to the intersection of software, embedded systems, and problem solving. Whether I am working on a full-stack application, an electronics-based prototype, or a lower-level C++ project, I care about understanding the problem deeply and building with intention.
              </p>

              <p>
                My goal is to keep growing into a highly capable engineer while building toward bigger product and startup ambitions. This portfolio is a snapshot of that journey through the projects, skills, and ideas I am actively developing.
              </p>
            </div>
          </div>
        </div>

        <div className="philosophy-section">
          <blockquote className="philosophy-quote">
            <p>"Tiny changes, remarkable results."</p>
            <span className="quote-source">Inspired by Atomic Habits</span>
          </blockquote>
          <p className="philosophy-description">
            This idea shapes how I learn and build. Progress compounds when the work is consistent, intentional, and repeated long enough for quality to emerge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
