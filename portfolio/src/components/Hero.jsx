import './Hero.css'
import heroImage from '../assets/Media.png'
import cvFile from '../assets/Savin Udana CV Resume.pdf'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-label">Welcome to my portfolio</div>
          <h1 className="hero-name">
            Hi, I'm <span className="last-name">Savin Udana</span>
          </h1>
          
          <p className="hero-tagline"><span className="highlight-text">Full-Stack Developer</span> & Problem Solver</p>
          
          <p className="hero-description">
            I'm a full-stack developer comfortable across frontend and backend, with a focus on building clear, maintainable code and thoughtful user experiences. I enjoy learning new tools, shipping polished features, and solving real problems with simple, scalable solutions.
          </p>

          <div className="hero-buttons">
            <a href={cvFile} download className="btn btn-primary">
              <span className="btn-icon">⬇</span>
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-icon">✉</span>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <div className="image-backdrop"></div>
            <div className="image-frame">
              <img src={heroImage} alt="Savin Udana Abeysekara" className="profile-image" />
            </div>
            <div className="social-sidebar">
              <a href="https://github.com/SaweenAbey" className="social-link github" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/savin-udana/" className="social-link linkedin" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.599 2.898-1.599 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.915.755 1.94 1.71 0 .951-.753 1.71-1.983 1.71zm1.581 11.597H3.754V9.726h3.164v10.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552406349235" className="social-link facebook" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="mailto:saween910@gmail.com" className="social-link email" title="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
