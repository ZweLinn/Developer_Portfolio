import { Col, Row } from "react-bootstrap";
import bookstoreImg from "../../assets/projectImage/Bookstore.png"
import CoinSite from "../../assets/projectImage/CoinInsight.png"
import MDJ from "../../assets/projectImage/MyanmarDevJobs.png"
import SwayNway from "../../assets/projectImage/SwayNway.png"
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react"
export default function MyProjects() {
    const projectData = [
        {
            id: 1,
            title: "MyanmarDevJobs",
            description: "Jobs portal site for Myanmar developers and designers.",
            image: MDJ,
            link: "https://myanmardevjobs.com",
            repo: null
        },
        {
            id: 2,
            title: "Sway Nway",
            description: "A book discussion platform powered by AI.",
            image: SwayNway,
            link: "https://swaynway.site",
            repo: "https://github.com/ZweLinn/Sway-Nway"

        },
        {
            id: 3,
            title: "BookStore",
            description: "Simple CURD book info note with MERN stack",
            image: bookstoreImg,
            link: "https://bookstore-taf6.vercel.app",
            repo: "https://github.com/ZweLinn/Bookstore"
        },
        {
            id: 4,
            title: "Coin Insight",
            description: "Crypto info site with React, RTK query.",
            image: CoinSite,
            link: "https://coin-insight-beta.vercel.app/",
            repo: "https://github.com/ZweLinn/Coin_Insight"
        },
    ]
    return (
        <Row className="g-4 d-flex justify-content-center  my-5">
            {projectData.map((project) => (
                    <motion.Col
                    custom={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: project.id * 0.5 , ease: "easeOut"}}
                    key={project.id} xl={6} md={12} style={{ width: '25rem', margin: '10px 10px 10px 10px' }}  >
                        <Card className="bg-dark projectCard" style={{ borderRadius: '20px', padding: '10px', height: '100%' }} >
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '20px' }}>
                                <Card.Img variant="top" src={project.image} style={{ borderRadius: '20px', objectFit: 'cover', height: '100%', width: '100%' }} />
                            </div>
                            <Card.Body className=" d-flex flex-column" >
                                <Card.Title className="text-light">{project.title}</Card.Title>
                                <Card.Text className="words">
                                    {project.description}
                                </Card.Text>
                                <div className="mt-auto">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        View Project
                                    </a>
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary ms-3">
                                            <FaGithub />&nbsp;GitHub
                                        </a>
                                    )}
                                </div>
                            </Card.Body>

                        </Card>
                    </motion.Col>
            ))}
        </Row>
    )
}