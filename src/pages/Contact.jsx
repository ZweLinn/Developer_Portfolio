import ContactForm from "../components/Contact/contactForm";
import TypeforContact from "../components/Contact/Type";
import { FaRegHandPointDown } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <div className="contact-page container-fluid">
            <div className="row text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-title-wrapper"
                >
                    <span className="section-subtitle">Get in touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <div className="section-title-line"></div>
                    <p className="words mt-3">I'm available for Freelance Projects</p>
                    <div className="scroll-indicator"><FaRegHandPointDown /></div>
                </motion.div>
                <ContactForm/>
            </div>
        </div>
    )
}