import './App.css'
import NavBar from './components/navBar'
import {Routes, Route, Link} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

const socialLinks = [
  { icon: "fa-brands fa-facebook", url: "https://www.facebook.com/zwe.l.maung.562" },
  { icon: "fa-brands fa-github", url: "https://github.com/ZweLinn" },
  { icon: "fa-brands fa-twitter", url: "https://x.com/Yuno59515218" },
  { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/zwe-linn-maung-7638a2301" },
]

function App() {
  return (
    <div className="App">
      <div className="navBar word">
        <NavBar/>
      </div>

      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/experiences' element={<Experiences/>}/>
        </Routes>
      </div>

      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">ZLM</Link>
              <p className="footer-tagline">Full Stack Developer</p>
              <p className="footer-description">Building modern web experiences with passion and precision.</p>
            </div>

            <div className="footer-nav">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-social-section">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <p className="footer-cta">Let's work together!</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-line"></div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Zwe Linn Maung. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
