import { motion } from "framer-motion";
import { Row } from "react-bootstrap";

const Experiences = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 1 },
    }),
  };

  const experiences = [
    { Date :"Present" ,title: "Freelancer", description: "I am currently working as a freelancer." },
    { Date :"September 2025 - February 2026",title: "Full Stack Engineer", description: "Worked as a Full Stack Engineer in a YGNCodelab" },
    { Date :"January 2023 - December 2024",title: "System Support", description: "Worked as a system support(odoo erp) in a Software provider company." },
  ];

  return (
    <div className="experiences-page">
        <h3 className="words text-light mt-4">My work experience</h3>
    <Row className=" p-5 container-fluid exp-container">
      {experiences.map((exp, index) => (
        <div className="col-12" key={index}>
          <h5 className="words mt-5">{exp.Date}</h5>
          <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={boxVariants}
            className="exp-box bg-dark"
          >
            <div className="text-light align-items-center">
              <h4 className="words text-light">{exp.title}</h4>
              <p className="words">{exp.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </Row>
    </div>
  );
};

export default Experiences;