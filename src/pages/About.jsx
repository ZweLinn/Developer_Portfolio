import AboutMeText from "../components/AboutMe/AboutMeText";
import Myservice from "../components/AboutMe/Myservice";
import MySkills from "../components/AboutMe/MySkills";
import { FaArrowDownLong } from "react-icons/fa6";

export default function About() {
    return (
        <div className="about_me " id="content's_about ">

            <div className="container-fluid min-vh-100 text-light">
                
                <div className=" col-4 offset-4 text-center mt-3 text-bg-dark  ">
                    <h2 className=" fw-bold fontWithGrayBG py-2   bgColor">
                        About Me
                    </h2>
                </div>
                <AboutMeText />
                <h3 className="words"><FaArrowDownLong /></h3>
                
            </div>

            

            <MySkills />
            <Myservice />
        </div>
    )
}