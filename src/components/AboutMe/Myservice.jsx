import { motion } from "motion/react"

export default function Myservice() {
    const varients = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1
        },
        visible: {
            x: 0,
            opacity: 1
        },
    }

    const varients2 = {
        hidden: {
            x: 30,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },

    }
    const varients3 = {
        hidden: {
            y: -150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        },
    }
    const varients4 = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        },
    }
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
                {/* creative design */}
                <motion.div
                    variants={varients}
                    initial="hidden"
                    animate= 'visible'
                     viewport={{ once: true }}
                    transition={{ duration: 1 }}

                    className="col-md-4 col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-pencil text-primary fs-4 mb-3"></i>
                            <h4 className="words text-light">Creative Design</h4>
                            <p className="words">I create modern and visually appealing designs that stand out. My goal is to make your project unique and attractive.</p>
                        </div>
                    </div>
                </motion.div>
                {/* Creative Idea */}
                <motion.div
                    variants={varients3}
                    initial="hidden"
                     viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-4 col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-lightbulb text-primary fs-4 mb-3"></i>
                            <h4 className="words text-light">Creative Idea</h4>
                            <p className="words">I bring fresh and innovative ideas to every project. I always think outside the box to create something special.</p>
                        </div>
                    </div>
                </motion.div>
                {/* User Interface */}
                <motion.div
                    variants={varients2}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-4 col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-laptop text-primary fs-4 mb-3" ></i>
                            <h4 className="words text-light">User Interface</h4>
                            <p className="words">I design user-friendly and responsive interfaces that provide a smooth and enjoyable experience.</p>
                        </div>
                    </div>
                </motion.div>
                {/* User Experience */}
                <motion.div
                    variants={varients}
                    initial="hidden"
                     viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-4 col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-briefcase text-primary fs-4 mb-3"></i>
                            <h4 className="words text-light">User Experience</h4>
                            <p className="words">I focus on making websites easy and pleasant to use, ensuring users stay engaged and satisfied.</p>
                        </div>
                    </div>

                </motion.div>
                {/* Clean Code */}
                <motion.div
                    variants={varients4}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-4  col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-code text-primary fs-4 mb-3"></i>
                            <h4 className="words text-light">Clean Code</h4>
                            <p className="words">I write well-structured, efficient, and maintainable code for high performance and easy updates.</p>
                        </div>
                    </div>
                </motion.div>
                {/* Fast Support */}
                <motion.div
                    variants={varients2}
                    initial="hidden"
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-4 col-sm-6 mt-3">
                    <div className="box bg-dark">
                        <div className="text-light">
                            <i className="fa-solid fa-desktop text-primary fs-4 mb-3"></i>
                            <h4 className="words text-light">Fast Support</h4>
                            <p className="words">I provide quick and reliable support, fixing issues and making improvements as soon as possible.</p>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    )

}