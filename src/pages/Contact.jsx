
import ContactForm from "../components/Contact/contactForm";
import TypeforContact from "../components/Contact/Type";
import { FaRegHandPointDown } from "react-icons/fa6";
export default function Contact() {
    return (
        <div className="container-fluid  bg-dark">
            <div className="row text-center">
                <div className="py-4" >
                    <p className="words">Do you have any projects?</p>
                    <h4 className="words text-light">I'm avaliable for Freelance Project</h4>
                    <h5 className="words">Contact me</h5>
                    <div className="fs-5 words mt-4"><FaRegHandPointDown /></div>
                
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}