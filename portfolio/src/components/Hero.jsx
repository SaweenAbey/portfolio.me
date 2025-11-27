import './Hero.css'
import heroImage from '../assets/Media.png'
import cvFile from '../assets/Savin Udana CV Resume.pdf'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Savin Udana Abeysekara</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer | SLIIT Student | Problem Solver
          </p>
          <p className="hero-description">
            I create modern, responsive web applications and mobile solutions with clean code and modern technologies.
            Currently an undergraduate at SLIIT University in Sri Lanka, passionate about full-stack development and software engineering.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={cvFile} download className="btn btn-secondary">View CV</a>
            <a href="#contact" className="btn btn-tertiary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="background-circle"></div>
            <div className="image-wrapper">
              <img src={heroImage} alt="Savin Udana Abeysekara" className="hero-image" />
              <div className="image-border"></div>
            </div>
            <div className="status-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
