import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react"

const navLinks = [
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

export default function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md sticky-top modern-navbar">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container"
            >
                <Link to="/" className="navbar-brand">
                    <span className="brand-text">ZLM</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    className={`nav-link-custom ${location.pathname === link.path ? 'active' : ''}`}
                                    to={link.path}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-divider d-none d-md-flex">
                            <span>|</span>
                        </li>
                        {socialLinks.map((social, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-social-link"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={social.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </nav>
    )
}