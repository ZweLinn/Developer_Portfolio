
import { FaReact, FaJs, FaBootstrap, FaPython, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiRedux, SiExpress, SiNextdotjs, SiTypescript, SiLaravel, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";
import { LiaNode } from "react-icons/lia";
import { motion } from "motion/react"
export default function MySkills() {

    const varientAbove={
        hidden: {
            y: -150,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
    }
    const varientBottom={
        hidden: {
            y: 150,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
    }

    return (
        <div className="container-fluid bgColor text-light py-4 ">
            <h3 className="col-4 offset-4 text-center  words text-light ">
                <p>  My skills</p>
            </h3>

            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={6} sm={6} md={4} lg={3} xl={2} className="Tailwind-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <RiTailwindCssFill />
                    </motion.div>

                </Col>


                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="JS-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaJs />
                    </motion.div>
                </Col>


                <Col xs={12} sm={6} md={6} lg={3} xl={2} className="Node-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <LiaNode />
                    </motion.div>
                </Col>

                <Col xs={6} sm={6} md={4} lg={3} xl={2} className="React-icons skills-icons" >
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaReact />
                    </motion.div>
                </Col>

                <Col xs={6} sm={6} md={4} lg={3} xl={3} className="Redux-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiRedux />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Express-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiExpress />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Next-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiNextdotjs />
                    </motion.div>
                </Col>

                
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Typescript-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiTypescript />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Laravel-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiLaravel />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Python-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaPython />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Postgresql-icons skills-icons">
                    <motion.div
                        variants={varientAbove}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <SiPostgresql />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Figma-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaFigma />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="Git-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaGitAlt />
                    </motion.div>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} xl={2} className="GitHub-icons skills-icons">
                    <motion.div
                        variants={varientBottom}
                        initial="hidden"
                        whileInView="whileInView"
                        transition={{ duration: 1 }}
                        >
                        <FaGithub />
                    </motion.div>
                </Col>
            </Row>
        </div>
    )
}