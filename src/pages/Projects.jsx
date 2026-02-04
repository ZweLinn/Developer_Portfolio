import MyProjects from "../components/Projects/myProjects";
import TypeForProjects from "../components/Projects/Type";
import { motion } from "motion/react";


export default function Projects() {
    return (
        <div className="projects-page container-fluid">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title-wrapper"
            >
                <span className="section-subtitle">Portfolio</span>
                <h2 className="section-title">My Recent Works</h2>
                <div className="section-title-line"></div>
                <TypeForProjects />
            </motion.div>

            <MyProjects/>
        </div>
    )
}