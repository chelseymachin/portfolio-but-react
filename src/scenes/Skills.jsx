import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* header and image section */}
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
                        SKILLS
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        I have professional experience in a breadth of technologies. I'm currently working at Jamf on a platform services team building out cloud services for enterprise pain points.
                    </p>
                </motion.div>

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
                            src="assets/skills-image.png"
                        />
                    </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png"
                        />
                    )}
                </div>
            </div>

            {/* skills section */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* front end skills */} 
                <motion.div
                    className="md:w-1/3 mt-5"
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
                            <p className="font-playfair font-semibold text-blush text-3xl">Front-End</p>
                        </div>
                    </div>
                    <p>
                        <ul>
                            <li>Vue + Nuxt</li>
                            <li>React + Next</li>
                            <li>Angular</li>
                            <li>Javascript</li>
                            <li>Redwood</li>
                            <li>Storybook</li>
                            <li>Gatsby</li>
                            <li>Typescript</li>
                        </ul>
                    </p>
                </motion.div>
                {/* back end skills */} 
                <motion.div
                    className="md:w-1/3 mt-5"
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
                            <p className="font-playfair font-semibold text-blush text-3xl">Back-End</p>
                        </div>
                    </div>
                    <p>
                        <ul>
                            <li>Typescript</li>
                            <li>Java</li>
                            <li>Node</li>
                            <li>Python</li>
                            <li>AWS</li>
                            <li>Javascript</li>
                            <li>Serverless</li>
                        </ul>
                    </p>
                </motion.div>
                {/* other skills */}
                <motion.div
                    className="md:w-1/3 mt-5"
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
                            <p className="font-playfair font-semibold text-blush text-3xl">& More</p>
                        </div>
                    </div>
                    <p>
                        <ul>
                            <li>Atlassian Suite (Jira, Trello, OpsGenie)</li>
                            <li>Agile + SAFE team structures</li>
                            <li>Comprehensive testing</li>
                            <li>DevOps (monitoring and reporting)</li>
                            <li>Open-source contribution</li>
                        </ul>
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default Skills;