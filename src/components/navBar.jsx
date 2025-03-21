import { Link } from "react-router-dom";
import { motion } from "motion/react"
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top ">
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 400 }}
             className="container ">
                <a className="navbar-brand text-light fa" href="#">ZLM</a>
                <button
                    className="navbar-toggler bg-light"
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
                    <ul className="navbar-nav column-gap-3 mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contact">Contact</Link>
                        </li>
                        <li className="social_media d-flex gap-4">
                                <a className="nav-link text-light just_stick md-d-none" href="#"><span>|</span></a>
                                <a className="nav-link text-light " href="https://www.facebook.com/zwe.l.maung.562"> <i className="fa-brands fa-facebook"></i> </a>
                                <a className="nav-link text-light " href="https://github.com/ZweLinn"><i className="fa-brands fa-github"></i> </a>
                                <a className="nav-link text-light " href="https://x.com/Yuno59515218"><i className="fa-brands fa-twitter"></i> </a>
                                <a className="nav-link text-light " href="https://www.linkedin.com/in/zwe-linn-maung-7638a2301"><i class="fa-brands fa-linkedin"></i> </a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </nav>
    )
}