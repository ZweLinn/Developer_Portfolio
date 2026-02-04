import AboutMeText from "../components/AboutMe/AboutMeText";
import Myservice from "../components/AboutMe/Myservice";
import MySkills from "../components/AboutMe/MySkills";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "motion/react";

export default function About() {
    return (
        <div className="about-page" id="content's_about">
            <div className="container-fluid min-vh-100 text-light">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-title-wrapper"
                >
                    <span className="section-subtitle">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-title-line"></div>
                </motion.div>
                <AboutMeText />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="scroll-indicator"
                >
                    <FaArrowDownLong />
                </motion.div>
            </div>

            <MySkills />
            <Myservice />
        </div>
    )
}