import './Skills.css'

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C++', 'Kotlin', 'PHP', 'Arduino']
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'JavaScript ES6+']
  },
  {
    category: 'Backend & Mobile',
    skills: ['Node.js', 'Express.js', 'Kotlin (Android)', 'RESTful APIs', 'System Design']
  },
  {
    category: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Git/GitHub', 'Docker', 'AWS', 'VS Code']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <span className="skill-dot"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-area">
          <h3>Areas of Expertise</h3>
          <div className="expertise-tags">
            <span className="expertise-tag">Full Stack Development</span>
            <span className="expertise-tag">Mobile App Development</span>
            <span className="expertise-tag">System Design & OOP</span>
            <span className="expertise-tag">REST APIs</span>
            <span className="expertise-tag">Database Design</span>
            <span className="expertise-tag">IoT & Embedded Systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
