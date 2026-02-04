import TypeforAbout from "./Type";
import TypeforHobby from "./Type2";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

const hobbiesData = [
    { id: 1, icon: "fa-solid fa-gamepad", title: "Playing Games" },
    { id: 2, icon: "fa-solid fa-book-open", title: "Reading Books" },
    { id: 3, icon: "fa-solid fa-dumbbell", title: "Physical Exercise" },
]

const variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export default function AboutMeText() {
    return (
        <div className="row mt-4">
            {/* Left Side */}
            <div className="col-md-6 align-content-center justify-content-center ps-5 mt-5 text-start">
                <TypeforAbout />
                <p className="text-light words left-side_words">
                    My name is Zwe Linn Maung. I'm a full-stack developer based in Myanmar, currently living in Thailand. I specialize in building modern web applications using Next.js for frontend and Laravel for backend development.
                    <br/> <br/> I have hands-on experience with AI integration, building AI-powered applications and leveraging AI tools to enhance development workflows. My deployment expertise includes traditional VPS hosting with Nginx and PM2, as well as AWS cloud infrastructure.
                    <br/> <br/> I enjoy solving problems, creating user-focused applications, and continuously exploring new technologies to deliver efficient, scalable solutions.
                </p>
                <Link to={'/experiences'}><button className="btn btn-primary mb-5">Experience</button></Link>
            </div>

            {/* Right Side */}
            <div className="col-md-6 my_hobby ps-5 mt-5">
                <h2 className="text-light words left-side_title text-start">Apart from coding,</h2>
                <TypeforHobby />
                <div className="hobby my-5">
                    {hobbiesData.map((hobby, index) => (
                        <motion.div
                            key={hobby.id}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="hobby-item"
                        >
                            <div className="hobby-icon">
                                <i className={hobby.icon}></i>
                            </div>
                            <h5 className="words mb-0">{hobby.title}</h5>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}