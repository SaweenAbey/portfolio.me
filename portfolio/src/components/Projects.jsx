import { useState } from 'react'
import './Projects.css'
import trainImage from '../assets/image.png'
import getzImage from '../assets/gettz.png'
import redlyImg from '../assets/readly.jpeg'
import welnest from '../assets/welnest.png'

const projectsData = [
  {
    id: 1,
    title: 'Train Reservation System',
    description: 'Y2S1 SLIIT OOP Group Assignment - A comprehensive train booking and management system built with Java, demonstrating object-oriented principles and system design.',
    technologies: ['Java', 'OOP', 'System Design', 'Database'],
    image: trainImage,
    isImageUrl: true,
    link: 'https://github.com/SaweenAbey/Train-Reservation-System',
    github: 'https://github.com/SaweenAbey/Train-Reservation-System'
  },
  {
    id: 2,
    title: 'READLY - E-Book Reading App',
    description: 'A mobile application for reading e-books with a user-friendly interface, built with Kotlin for Android platform.',
    technologies: ['Kotlin', 'Android', 'Mobile Development', 'UI/UX','Android Studio','MVVM'],
    image: redlyImg,
    isImageUrl: true,
    link: 'https://github.com/SaweenAbey/READLY-E-Book-Reading-Mobile-Application',
    github: 'https://github.com/SaweenAbey/READLY-E-Book-Reading-Mobile-Application'
  },
  {
    id: 3,
    title: 'WellNest - Health & Wellness App',
    description: 'A mobile application focused on health and wellness tracking, providing users with tools to monitor their well-being.',
    technologies: ['Kotlin', 'Android', 'Health Tech', 'Firebase'],
    image: welnest,
    isImageUrl: true,
    link: 'https://github.com/SaweenAbey/WellNest-Mobile-Application',
    github: 'https://github.com/SaweenAbey/WellNest-Mobile-Application'
  },
  {
    id: 4,
    title: 'Arduino Automated Hand Clean System',
    description: 'IoT project implementing an automated hand sanitizing system using Arduino, demonstrating embedded systems and IoT skills.',
    technologies: ['C++', 'Arduino', 'IoT', 'Embedded Systems'],
    image: '🤖',
    link: 'https://github.com/SaweenAbey/Arduino-Auto-mated-Hand-clean-System',
    github: 'https://github.com/SaweenAbey/Arduino-Auto-mated-Hand-clean-System'
  },
  {
    id: 5,
    title: 'Bus Booking System',
    description: 'A collaborative project for bus booking and reservation with a dynamic navigation interface, built with PHP and modern web technologies.',
    technologies: ['PHP', 'Web Development', 'Database', 'Frontend'],
    image: '�',
    link: 'https://github.com/InoshMatheesha/Bus-Booking-System',
    github: 'https://github.com/InoshMatheesha/Bus-Booking-System'
  },
  {
    id: 6,
    title: 'Gettz Fitness Application',
    description: 'A fitness tracking and management application where users can manage workouts, track progress, and achieve fitness goals.',
    technologies: ['React', 'JavaScript', 'Fitness Tech', 'Full Stack'],
    image: getzImage,
    isImageUrl: true,
    link: 'https://github.com/WasikaAnusanga/Gettz-Fitness',
    github: 'https://github.com/WasikaAnusanga/Gettz-Fitness'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.technologies.some(tech => 
        tech.toLowerCase().includes(filter.toLowerCase())
      ))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            React
          </button>
          <button 
            className={`filter-btn ${filter === 'node' ? 'active' : ''}`}
            onClick={() => setFilter('node')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'full' ? 'active' : ''}`}
            onClick={() => setFilter('full')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.isImageUrl ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} className="project-link">Live Demo</a>
                  <a href={project.github} className="project-link github">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
