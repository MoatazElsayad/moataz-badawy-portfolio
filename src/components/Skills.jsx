import React from 'react'
import { Code2, Package, Cpu, Wrench } from 'lucide-react'
import '../styles/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      iconName: "Code2",
      skills: ["C++", "JavaScript", "Python"]
    },
    {
      name: "Web Development",
      iconName: "Package",
      skills: ["React", "HTML5", "CSS3", "Node.js"]
    },
    {
      name: "Electronics & Embedded",
      iconName: "Cpu",
      skills: ["Arduino", "ESP32", "Circuit Design", "IoT"]
    },
    {
      name: "Development Tools",
      iconName: "Wrench",
      skills: ["Git", "Linux", "CMake", "VS Code"]
    }
  ]

  const getIcon = (iconName) => {
    const iconMap = {
      "Code2": <Code2 size={24} />,
      "Package": <Package size={24} />,
      "Cpu": <Cpu size={24} />,
      "Wrench": <Wrench size={24} />
    }
    return iconMap[iconName]
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon" style={{ fontSize: '1.5rem' }}>{getIcon(category.iconName)}</span>
                <h3>{category.name}</h3>
              </div>
              
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-badge">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-visualization">
          <h3>Technical Proficiency</h3>
          <div className="proficiency-list">
            {[
              { name: "C++", level: 88 },
              { name: "JavaScript / React", level: 82 },
              { name: "Web Development", level: 80 },
              { name: "Arduino & IoT", level: 85 },
              { name: "Problem-Solving", level: 90 },
              { name: "System Design", level: 78 }
            ].map((skill, index) => (
              <div key={index} className="proficiency-item">
                <div className="proficiency-header">
                  <span className="proficiency-name">{skill.name}</span>
                  <span className="proficiency-percent">{skill.level}%</span>
                </div>
                <div className="proficiency-bar">
                  <div className="proficiency-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
