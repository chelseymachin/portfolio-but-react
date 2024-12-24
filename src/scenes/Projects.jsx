import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Projects = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="projects" className="pt-10 pb-24">
          {/* header section */}
          <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair text-blush font-semibold text-4xl mb-5">
                        PERSONAL PROJECTS
                    </p>
                    <LineGradient />
                    <p className="mt-10 mb-7">
                        ALL MY PROJECTS ARE BELONG TO ME
                    </p>
                </motion.div>
            </div>  
            {/* projects section */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* example project #1 */} 
                <div className="flex-col items-center">
                    <div className="mt-16 md:mt-0">
                        {isAboveMediumScreens ? (
                            <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                                before:w-full before:h-full before:border-2
                            before:border-green before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-1.jpeg"
                            />
                        </div>
                        ) : (
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-1.jpeg"
                            />
                        )}
                    </div>
                    <motion.div
                        className="w-full mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative h-16">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">a project name here</p>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </p>
                    </motion.div>
                </div>
                {/* example project #2 */} 
                <div className="flex-col items-center">
                    <div className="mt-16 md:mt-0">
                        {isAboveMediumScreens ? (
                            <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                                before:w-full before:h-full before:border-2
                            before:border-green before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-2.jpeg"
                            />
                        </div>
                        ) : (
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-2.jpeg"
                            />
                        )}
                    </div>
                    <motion.div
                        className="w-full mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative h-16">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">a project name here</p>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </p>
                    </motion.div>
                </div>
                {/* example project #3 */} 
                <div className="flex-col items-center">
                    <div className="mt-16 md:mt-0">
                        {isAboveMediumScreens ? (
                            <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                                before:w-full before:h-full before:border-2
                            before:border-green before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-3.jpeg"
                            />
                        </div>
                        ) : (
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/project-3.jpeg"
                            />
                        )}
                    </div>
                    <motion.div
                        className="w-full mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="relative h-16">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">a project name here</p>
                            </div>
                        </div>
                        <p>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects;