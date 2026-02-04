import { motion } from "motion/react"

const serviceData = [
    {
        id: 1,
        icon: "fa-solid fa-pencil",
        title: "Creative Design",
        description: "I create modern and visually appealing designs that stand out. My goal is to make your project unique and attractive.",
        animDir: "left"
    },
    {
        id: 2,
        icon: "fa-solid fa-lightbulb",
        title: "Creative Idea",
        description: "I bring fresh and innovative ideas to every project. I always think outside the box to create something special.",
        animDir: "top"
    },
    {
        id: 3,
        icon: "fa-solid fa-laptop",
        title: "User Interface",
        description: "I design user-friendly and responsive interfaces that provide a smooth and enjoyable experience.",
        animDir: "right"
    },
    {
        id: 4,
        icon: "fa-solid fa-briefcase",
        title: "User Experience",
        description: "I focus on making websites easy and pleasant to use, ensuring users stay engaged and satisfied.",
        animDir: "left"
    },
    {
        id: 5,
        icon: "fa-solid fa-code",
        title: "Clean Code",
        description: "I write well-structured, efficient, and maintainable code for high performance and easy updates.",
        animDir: "bottom"
    },
    {
        id: 6,
        icon: "fa-solid fa-desktop",
        title: "Fast Support",
        description: "I provide quick and reliable support, fixing issues and making improvements as soon as possible.",
        animDir: "right"
    },
]

const variants = {
    left: { hidden: { x: -150, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    top: { hidden: { y: -150, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    bottom: { hidden: { y: 150, opacity: 0 }, visible: { y: 0, opacity: 1 } },
}

export default function Myservice() {
    return (
        <div className="container-fluid bgColor text-light py-4 ">
            <div className="col-4 offset-4 text-center words ">
                <p> &#9866; My services</p>
            </div>
            <div className="col-4 offset-4 text-center words text-light fw-bold">
                <h2> What Can I do</h2>
            </div>
            {/* boxes start */}
            <div className="row px-5 mt-2 pb-5 text-center">
                {serviceData.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={variants[service.animDir]}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="col-md-4 col-sm-6 mt-3"
                    >
                        <div className="box bg-dark">
                            <div className="text-light">
                                <i className={`${service.icon} text-primary fs-4 mb-3`}></i>
                                <h4 className="words text-light">{service.title}</h4>
                                <p className="words">{service.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
