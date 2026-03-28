import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
  const timeline = [
    {
      type: "achievement",
      period: "2021",
      title: "USAID Scholarship Award",
      organization: "American University in Cairo",
      description: "Earned competitive USAID scholarship to study Computer Engineering at AUC. This recognition validated my discipline and commitment to excellence.",
      achievements: [
        "Full tuition scholarship coverage",
        "Highly competitive selection process",
        "Catalyst for future growth and ambition"
      ]
    },
    {
      type: "education",
      period: "2021 - 2025",
      title: "Computer Engineering B.Sc.",
      organization: "American University in Cairo (AUC)",
      description: "USAID Scholar focused on systems programming, embedded systems, and full-stack development. Building expertise through challenging projects and continuous learning.",
      achievements: [
        "Strong GPA with focus on technical excellence",
        "Advanced courses: Systems Design, Networking, IoT",
        "Led multiple capstone and personal projects",
        "Active contributor to tech communities"
      ]
    },
    {
      type: "experience",
      period: "2023 - Present",
      title: "Freelance Developer & Tech Builder",
      organization: "Self-Employed",
      description: "Building real-world solutions combining web development, embedded systems, and problem-solving. Funded by independent projects and freelance work.",
      achievements: [
        "Delivered full-stack web applications",
        "Built ESP32-based IoT systems",
        "Created advanced C++ system tools",
        "Solved complex algorithmic problems at scale"
      ]
    },
    {
      type: "experience",
      period: "2024 - Present",
      title: "Startup Vision in Progress",
      organization: "Founder (Pre-Launch)",
      description: "Actively building toward tech startup launch. Combining expertise in electronics, software, and problem-solving to create a product that solves real problems.",
      achievements: [
        "Defined startup vision and technical roadmap",
        "Prototyping core product features",
        "Building proof-of-concept solutions",
        "Preparing go-to-market strategy"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
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
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <p>Want to learn more about my background and qualifications?</p>
          <a href="#" className="btn btn-primary" download>
            📄 Download My CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
