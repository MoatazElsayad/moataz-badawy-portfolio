import React from 'react'
import {
  Code2,
  Package,
  Cpu,
  Wrench,
  Database,
  Trophy
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
      { name: 'Python', logo: 'python', color: '3776AB' },
      { name: 'C', icon: Code2 }
    ]
  },
  {
    name: 'Web Technologies',
    icon: Package,
    skills: [
      { name: 'HTML', logo: 'html5', color: 'E34F26' },
      { name: 'CSS', logo: 'css', color: '1572B6' },
      { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E', darkIcon: true },
      { name: 'React', logo: 'react', color: '61DAFB' },
      { name: 'Flask', logo: 'flask', color: '000000', darkIcon: true },
      { name: 'FastAPI', logo: 'fastapi', color: '009688' }
    ]
  },
  {
    name: 'Embedded & Electronics',
    icon: Cpu,
    skills: [
      { name: 'Arduino', logo: 'arduino', color: '00979D' },
      { name: 'ESP32', logo: 'espressif', color: 'E7352C' },
      { name: 'Circuit Design', icon: Cpu },
      { name: 'IoT', icon: Cpu }
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git', logo: 'git', color: 'F05032' },
      { name: 'GitHub', logo: 'github', color: '111111', darkIcon: true },
      { name: 'Linux', logo: 'linux', color: 'FCC624', darkIcon: true },
      { name: 'API', logo: 'fastapi', color: '009688' },
      { name: 'Docker', logo: 'docker', color: '2496ED' }
    ]
  },
  {
    name: 'Databases & Data',
    icon: Database,
    skills: [
      { name: 'MySQL', logo: 'mysql', color: '4479A1' },
      { name: 'SQLite', logo: 'sqlite', color: '003B57' },
      { name: 'SSMS', icon: Database },
      { name: 'Excel', logo: 'microsoftexcel', color: '217346' },
      { name: 'Tableau', logo: 'tableau', color: 'E97627' },
      { name: 'Power BI', logo: 'powerbi', color: 'F2C811', darkIcon: true }
    ]
  },
  {
    name: 'Other Strengths',
    icon: Trophy,
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'Pandas', logo: 'pandas', color: '150458' },
      { name: 'NumPy', logo: 'numpy', color: '013243' },
      { name: 'Matplotlib', icon: Trophy },
      { name: 'Competitive Programming', icon: Trophy },
      { name: 'Fast Typing 80 WPM', icon: Trophy }
    ]
  }
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
        <p className="section-subtitle">
          The tools, technologies, and foundations I am actively building with.
        </p>

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
      </div>
    </section>
  )
}

export default Skills
