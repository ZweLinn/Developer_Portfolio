import { useRef } from "react";
import TypeforAbout from "./Type";
import TypeforHobby from "./Type2";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

export default function AboutMeText() {
    const varients = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },
    }

    const varients2 = {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },
    }
    const scrollRef = useRef(null)
    return (
        <div className="row mt-4">
            {/* Left Side */}
            <div className="col-md-6 align-content-center justify-content-center ps-5 mt-5 text-start">
                <TypeforAbout />
                <p className="text-lighst words left-side_words">
                My name is Zwe Linn Maung. I'm a web developer based in Myanmar, currently living in Thailand, with a solid foundation in HTML, CSS, JavaScript, and responsive design. I have also worked on modern Javascript library and framework like React.js, redux and Next.js. <br /> <br />
                    I enjoy solving problems and building user-focused websites. I’m continuously learning new technologies to expand my skills and tech stack.
                    I also have experiences with Node.js, Express.js, and RESTful APIs for server-side development.
                </p>
                <Link to={'/experiences'}><button className="btn btn-primary mb-5">Experience</button></Link>
                
            </div>

            {/* Right Side */}
            <div className="col-md-6 my_hobby ps-5 mt-5">
                <h2 className="text-light words left-side_title text-start">Apart from coding,</h2>
                <TypeforHobby />
                <div className="hobby my-5 mx-5">

                    <div className="playingGame d-flex gap-5 mb-4">
                        <motion.div
                            variants={varients}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                        >
                            <i className="fa-solid fa-gamepad fa-2x style_dot"></i>
                        </motion.div>
                        <motion.h5
                            variants={varients2}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            className="words">
                            Playing Games
                        </motion.h5>

                    </div>
                    <div className="reading d-flex gap-5 mb-4">
                        <motion.div
                            variants={varients}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                        >
                            <i className="fa-solid fa-book-open fa-2x style_dot"></i>
                        </motion.div>

                        <motion.h5
                            variants={varients2}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            className="words">
                            Reading Books
                        </motion.h5>

                    </div>
                    <div className="reading d-flex gap-5 mb-4">
                        <motion.div
                            variants={varients}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                        >
                            <i className="fa-solid fa-dumbbell fa-2x style_dot"></i>
                        </motion.div>

                        <motion.h5
                            variants={varients2}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            className="words">
                            Physical Exercise
                        </motion.h5>

                    </div>
                </div>

            </div>
        </div>
    )
}