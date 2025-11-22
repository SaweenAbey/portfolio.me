import { useState, useEffect } from 'react'
import './About.css'

// Animated Counter Component
function Counter({ end, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = end / 50 // Divide into 50 steps for smooth animation
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="stat">
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Computer Science student at SLIIT University with a strong interest in software development and system design. 
              I love building beautiful, functional applications that solve real-world problems across web and mobile platforms.
            </p>
            <p>
              With experience in full-stack development, mobile applications, and IoT projects, I'm always eager to learn new tools and best practices.
              When I'm not coding, you'll find me exploring open-source projects, contributing to community initiatives, or working on innovative side projects.
            </p>
            
            <div className="about-info">
              <div className="info-card">
                <div className="card-header">
                  <h3>🎓</h3>
                </div>
                <div className="card-content">
                  <h4>Education</h4>
                  <p>Software Engineer Student</p>
                  <p className="university">SLIIT University, Sri Lanka</p>
                </div>
              </div>
              <div className="info-card">
                <div className="card-header">
                  <h3>🎯</h3>
                </div>
                <div className="card-content">
                  <h4>Focus Areas</h4>
                  <p>Full-Stack Development</p>
                  <p className="detail">Web, Mobile & Backend Systems</p>
                </div>
              </div>
              <div className="info-card">
                <div className="card-header">
                  <h3>💼</h3>
                </div>
                <div className="card-content">
                  <h4>Experience</h4>
                  <p>2+ Years</p>
                  <p className="detail">Development & Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <Counter end={6} label="Projects Completed" />
            <Counter end={2} label="Years Learning" />
            <Counter end={10} label="Technologies" />
            <div className="stat">
              <div className="stat-number">100</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}