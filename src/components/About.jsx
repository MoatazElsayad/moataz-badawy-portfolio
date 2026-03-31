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
          A current snapshot of my academic path, technical interests, and long-term direction.
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
                I am a Computer Engineering student at the American University in Cairo (AUC), with a strong passion for technology and continuous self-development. I focus on strengthening my foundation in programming, problem-solving, and systems thinking, while also working on improving my communication skills and academic performance.
              </p>

              <p>
                I enjoy building projects that combine both software and hardware, especially in areas like embedded systems and low-level programming. I have experience working with Arduino, OLED displays, and C++, and I am particularly interested in competitive programming concepts such as bitmasking, optimization, and efficient algorithms. I like turning abstract ideas into real, working systems that solve practical problems.
              </p>

              <p>
                Looking ahead, I aim to build my own startup in the tech industry, creating solutions that have real impact. I am interested in developing scalable products and working on ideas that blend innovation with practicality. Ultimately, I want to grow into an engineer who not only builds systems but also leads meaningful projects that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="philosophy-section">
          <blockquote className="philosophy-quote">
            <p className="philosophy-quote-ar" dir="rtl" lang="ar">
              <span>إِذَا غَامَرْتَ فِي شَرَفٍ مَرُومٍ</span>
              <span className="quote-divider">❀</span>
              <span>فَلَا تَقْنَعْ بِمَا دُونَ النُّجُومِ</span>
            </p>
            <span className="quote-source" dir="rtl" lang="ar">المتنبي</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
