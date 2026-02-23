import CV from "../assets/Profile.png";
import { useNavigate } from "react-router-dom";
import Type from "../components/Home/Type";
import { motion } from "motion/react";
export default function Home() {
    
    const downloadCV = () => {
        window.open("https://drive.google.com/file/d/1F8F3-zCnae0c1Jhr2djke4Vlga7XC5gm/view?usp=drive_link");
    };
    const variants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    }

    const variants2 = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    }
    const navigate = useNavigate();
    const handleHireMe = () => {
        navigate("/contact"); // Ensure "/contact" exists in your routes
    };
    return (

        <div className="home-page text-light">
            <section className="container-fluid">
                <div className="home_content row align-items-center pb-5">
                    <div className="col-md-6 text-light text-center">
                        <img
                            src={CV}
                            width="70%"
                            className="mb-3 rounded-circle"
                            alt="Zwe Linn Maung"
                        />
                    </div>
                    <div className="col-md-6 order-md-first">
                        <div className=" intro-content text-start">
                            <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            <span className="words"> Hello I'm</span>
                            <motion.div 
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: .8}}
                            > 
                             <h1 className="fw-bold ">Zwe Linn Maung <span className="style_dot">.</span></h1>
                            </motion.div>
                            <Type />
                            <motion.p
                             variants={variants2}
                                initial="hidden"
                                animate="visible"
                                transition={{duration: 1.5}}
                             className="words">"I can help you turn ideas into digital solutions."</motion.p>
                            <button className="btn btn-primary" onClick={handleHireMe}>Hire Me</button>
                            <button className="btn btn-secondary ms-2" onClick={downloadCV}>Download CV</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}