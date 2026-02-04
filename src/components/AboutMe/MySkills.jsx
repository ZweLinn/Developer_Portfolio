import { FaReact, FaJs, FaPython, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiRedux, SiExpress, SiNextdotjs, SiTypescript, SiLaravel, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Row } from "react-bootstrap";
import { LiaNode } from "react-icons/lia";
import { motion } from "motion/react"

const skillsData = [
    { id: 1, name: "Tailwind CSS", icon: RiTailwindCssFill, className: "Tailwind-icons", animDir: "top" },
    { id: 2, name: "JavaScript", icon: FaJs, className: "JS-icons", animDir: "top" },
    { id: 3, name: "Node.js", icon: LiaNode, className: "Node-icons", animDir: "top" },
    { id: 4, name: "React", icon: FaReact, className: "React-icons", animDir: "top" },
    { id: 5, name: "Redux", icon: SiRedux, className: "Redux-icons", animDir: "bottom" },
    { id: 6, name: "Express", icon: SiExpress, className: "Express-icons", animDir: "bottom" },
    { id: 7, name: "Next.js", icon: SiNextdotjs, className: "Next-icons", animDir: "bottom" },
    { id: 8, name: "TypeScript", icon: SiTypescript, className: "Typescript-icons", animDir: "bottom" },
    { id: 9, name: "Laravel", icon: SiLaravel, className: "Laravel-icons", animDir: "top" },
    { id: 10, name: "Python", icon: FaPython, className: "Python-icons", animDir: "top" },
    { id: 11, name: "PostgreSQL", icon: SiPostgresql, className: "Postgresql-icons", animDir: "top" },
    { id: 12, name: "Figma", icon: FaFigma, className: "Figma-icons", animDir: "bottom" },
    { id: 13, name: "Git", icon: FaGitAlt, className: "Git-icons", animDir: "bottom" },
    { id: 14, name: "GitHub", icon: FaGithub, className: "GitHub-icons", animDir: "bottom" },
]

const variants = {
    top: { hidden: { y: -80, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    bottom: { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } },
}

export default function MySkills() {
    return (
        <div className="container-fluid skills-section text-light py-5">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-title-wrapper mb-4"
            >
                <span className="section-subtitle">Technologies</span>
                <h2 className="section-title">My Skills</h2>
                <div className="section-title-line"></div>
            </motion.div>

            <Row className="skills-container justify-content-center px-4 pb-5">
                {skillsData.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <motion.div
                            key={skill.id}
                            variants={variants[skill.animDir]}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="col-6 col-sm-4 col-md-3 col-lg-2 p-2"
                        >
                            <div className={`skill-card ${skill.className}`}>
                                <div className="skill-icon-wrapper">
                                    <IconComponent />
                                </div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </Row>
        </div>
    )
}