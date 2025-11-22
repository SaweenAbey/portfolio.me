import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Showcasing my projects and skills as an undergraduate Computer Science student at SLIIT University, passionate about software development and innovation.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><a href="mailto:saween910@gmail.com">saween910@gmail.com</a></li>
              <li><a href="tel:+94770201365">077-0201365</a></li>
              <li>Matara, Sri Lanka</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow</h3>
            <div className="footer-social">
              <a href="https://github.com/SaweenAbey">GitHub</a>
              <a href="https://www.linkedin.com/in/savin-udana/">LinkedIn</a>
              <a href="https://www.facebook.com/profile.php?id=61552406349235">Facebook</a>
              <a href="mailto:saween910@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Savin Udana Abeysekara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
