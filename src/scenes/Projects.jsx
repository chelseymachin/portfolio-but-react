import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
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
                        PROJECTS
                    </p>
                    <LineGradient />
                    <p className="mt-10 mb-7">
                        All projects below link to my indivudal github repositories.  Some of these projects are also individually hosted on various platforms.  If there is a live hosting of the project, that link will be available below the repository link.
                    </p>
                </motion.div>
            </div>  
            {/* projects section */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* project #1 */} 
                <div className="flex-col items-center">
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
                        <div className="relative h-18">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">Fake News Detector</p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                {/* example project #2 */} 
                <div className="flex-col items-center">
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
                        <div className="relative h-18">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">Package Delivery Service</p>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                {/* example project #3 */} 
                <div className="flex-col items-center">
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
                        <div className="relative h-18">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-blush text-3xl">Appointment Manager</p>                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>main tech points</li>
                                <li>features</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects;