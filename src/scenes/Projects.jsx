import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="projects" className="pt-10 pb-24">
            {/* Header Section */}
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
                    <p className="mt-10 mb-7 text-sm md:text-base">
                        All projects below link to my individual GitHub repositories. Some of these projects are also hosted on various platforms. If there is a live hosting of the project, that link will be available below the repository link.
                    </p>
                </motion.div>
            </div>  

            {/* Projects Section */}
            <div className="flex flex-col md:flex-row md:justify-between mt-16 gap-10">
                {/* Project Component */}
                {[
                    {
                        title: "Fake News Detector",
                        repo: "https://github.com/chelseymachin/capstone",
                        live: "https://mybinder.org/v2/gh/chelseymachin/capstone/HEAD",
                        details: [
                            "Built using Python + TensorFlow",
                            "Hosted in interactive Jupyter Notebook",
                            "Model trained on open-source data",
                            "Compares new data against model to detect fake news"
                        ],
                    },
                    {
                        title: "Package Delivery Service",
                        repo: "https://github.com/chelseymachin/package-delivery-service",
                        live: "https://replit.com/@ChelseyMachin/package-delivery-service",
                        details: [
                            "CLI program built in Python",
                            "Hosted on Replit through repository",
                            "Can be used with any appropriately formatted data; sample data provided",
                            "Dijkstra's shortest path algorithm implementation"
                        ],
                    },
                    {
                        title: "Appointment Manager",
                        repo: "https://github.com/chelseymachin/Appointment-Customer-Management-App",
                        details: [
                            "Desktop program built in Java + JavaFX + Gradle",
                            "Not currently hosted as it requires local database setup",
                            "Utilizes modern interface options leveraged from a legacy library (JavaFX)",
                            "Full-stack application including localization considerations"
                        ],
                    }
                ].map((project, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-1/3 mt-5"
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
                            <p className="font-playfair font-semibold text-blush text-3xl">{project.title}</p>
                        </div>
                        <div className="mt-4">
                            <ul className="text-sm md:text-base">
                                <li>
                                    <a className="hover:text-green transition duration-500" href={project.repo} rel="noreferrer" target="_blank">
                                        GitHub Repo
                                    </a>
                                </li>
                                {project.live && (
                                    <li>
                                        <a className="hover:text-green transition duration-500" href={project.live} rel="noreferrer" target="_blank">
                                            Live Hosting
                                        </a>
                                    </li>
                                )}
                            </ul>
                            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mt-4">
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
