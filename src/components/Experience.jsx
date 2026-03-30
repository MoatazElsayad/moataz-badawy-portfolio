import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
  const timeline = [
    {
      type: 'achievement',
      period: '2021',
      title: 'USAID Scholarship Award',
      organization: 'American University in Cairo',
      description: 'Awarded a competitive USAID scholarship to study Computer Engineering at AUC, a milestone that set the direction for my academic and technical growth.',
      achievements: [
        'Full tuition scholarship support',
        'Selected through a highly competitive process',
        'Built a foundation for long-term technical ambition'
      ]
    },
    {
      type: 'education',
      period: '2021 - 2025',
      title: 'B.Sc. in Computer Engineering',
      organization: 'American University in Cairo (AUC)',
      description: 'Focused on systems programming, embedded development, and full-stack problem solving while building independent projects alongside coursework.',
      achievements: [
        'Strong academic focus on technical fundamentals',
        'Coursework in systems design, networking, and IoT',
        'Built personal and project-based engineering experience',
        'Stayed active in technical communities and self-driven learning'
      ]
    },
    {
      type: 'experience',
      period: '2023 - Present',
      title: 'Freelance Developer and Technical Builder',
      organization: 'Self-Employed',
      description: 'Worked on practical solutions across web development, embedded systems, and C++ tooling while strengthening execution, ownership, and product thinking.',
      achievements: [
        'Built full-stack web applications',
        'Shipped ESP32-based IoT work',
        'Developed C++ systems-oriented projects',
        'Used algorithmic problem solving to sharpen engineering fundamentals'
      ]
    },
    {
      type: 'experience',
      period: '2024 - Present',
      title: 'Startup Vision in Progress',
      organization: 'Founder Track',
      description: 'Actively preparing for a future startup by combining product curiosity with hands-on engineering work and proof-of-concept building.',
      achievements: [
        'Defined a clearer startup direction',
        'Explored technical roadmap ideas',
        'Built projects that support founder-level credibility',
        'Focused on solving real problems before scaling ambition'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          The academic and self-driven milestones that shaped how I build.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-description">{item.description}</p>

                {item.achievements && (
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <p>Want the full academic and project background in one place?</p>
          <a href="/Moataz_Badawy_CV.pdf" className="btn btn-primary" download>
            Download My CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
