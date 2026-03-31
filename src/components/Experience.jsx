import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      period: '2024',
      title: 'High School',
      organization: 'Public Education',
      description: 'Completed Thanawya Amma with a strong academic record before starting the next stage of my technical journey.',
      achievements: [
        'GPA: 94.25%'
      ]
    },
    {
      type: 'achievement',
      period: 'Sep 2024 - Jan 2025',
      title: 'ALA Bridge Program',
      organization: 'AUC / USAID',
      description: 'Joined a before-college bridge year program at AUC that helped prepare me academically and personally for university life.',
      achievements: [
        'Completed the bridge program successfully'
      ]
    },
    {
      type: 'experience',
      period: 'Jun 2025 - Dec 2025',
      title: 'Digital Egyptian Pioneers Initiative',
      organization: 'MCIT',
      description: 'Completed online training in data analysis with a practical focus on data tools and reporting workflows.',
      achievements: [
        'Worked with Excel, SQL, Python, Tableau, and Power BI',
        'Used Pandas, NumPy, and Matplotlib in Python-based analysis',
        'Built stronger data handling and reporting foundations'
      ]
    },
    {
      type: 'achievement',
      period: 'Jul 2025',
      title: 'CS50x: Introduction to Computer Science',
      organization: 'Harvard',
      description: 'Completed CS50x and strengthened my understanding of core computer science topics through hands-on programming work.',
      achievements: [
        'Completed the course certificate',
        'Learned C, algorithms, memory, Python, SQLite, frontend basics, and Flask',
        'Applied the course knowledge directly in real projects'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          The learning milestones, programs, and courses that shaped my current path.
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
