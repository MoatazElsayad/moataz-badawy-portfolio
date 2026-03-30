import React from 'react'
import {
  Code2,
  Package,
  Cpu,
  Wrench,
  CircuitBoard,
  Wifi,
  Boxes,
  MonitorSmartphone
} from 'lucide-react'
import '../styles/Skills.css'

const brandIconBase = 'https://cdn.simpleicons.org'

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'C++', logo: 'cplusplus', color: '00599C' },
      { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E', darkIcon: true },
      { name: 'Python', logo: 'python', color: '3776AB' }
    ]
  },
  {
    name: 'Web Development',
    icon: Package,
    skills: [
      { name: 'React', logo: 'react', color: '61DAFB' },
      { name: 'HTML5', logo: 'html5', color: 'E34F26' },
      { name: 'CSS3', logo: 'css', color: '1572B6' },
      { name: 'Node.js', logo: 'nodedotjs', color: '5FA04E' }
    ]
  },
  {
    name: 'Electronics & Embedded',
    icon: Cpu,
    skills: [
      { name: 'Arduino', logo: 'arduino', color: '00979D' },
      { name: 'ESP32', logo: 'espressif', color: 'E7352C' },
      { name: 'Circuit Design', icon: CircuitBoard },
      { name: 'IoT', icon: Wifi }
    ]
  },
  {
    name: 'Development Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', logo: 'git', color: 'F05032' },
      { name: 'Linux', logo: 'linux', color: 'FCC624', darkIcon: true },
      { name: 'CMake', logo: 'cmake', color: '064F8C' },
      { name: 'VS Code', icon: MonitorSmartphone }
    ]
  }
]

const proficiencies = [
  { name: 'C++', level: 88, logo: 'cplusplus', color: '00599C' },
  { name: 'JavaScript / React', level: 82, logo: 'react', color: '61DAFB' },
  { name: 'Web Development', level: 80, icon: Boxes },
  { name: 'Arduino & IoT', level: 85, logo: 'arduino', color: '00979D' },
  { name: 'Problem-Solving', level: 90, icon: Code2 },
  { name: 'System Design', level: 78, icon: MonitorSmartphone }
]

const BrandLogo = ({ skill }) => (
  <img
    src={`${brandIconBase}/${skill.logo}/${skill.color}?viewbox=auto&size=24`}
    alt={`${skill.name} logo`}
    className={`brand-logo ${skill.darkIcon ? 'brand-logo-dark' : ''}`}
    loading="lazy"
  />
)

const SkillVisual = ({ skill }) => {
  if (skill.logo) {
    return <BrandLogo skill={skill} />
  }

  const Icon = skill.icon
  return <Icon size={18} strokeWidth={2.1} />
}

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <div key={category.name} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">
                    <CategoryIcon size={24} strokeWidth={2} />
                  </span>
                  <h3>{category.name}</h3>
                </div>

                <div className="skill-items">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-badge">
                        <span className="skill-badge-icon">
                          <SkillVisual skill={skill} />
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="skills-visualization">
          <h3>Technical Proficiency</h3>
          <div className="proficiency-list">
            {proficiencies.map((skill) => (
              <div key={skill.name} className="proficiency-item">
                <div className="proficiency-header">
                  <span className="proficiency-name">
                    <span className="proficiency-icon">
                      <SkillVisual skill={skill} />
                    </span>
                    <span>{skill.name}</span>
                  </span>
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
