import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";

const Landing = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="home" 
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >

            {/* Image section */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                            before:rounded-t-[400px] before:w-full before:max-w-[600px] before:h-full 
                            before:border-2 before:border-green before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:grayscale transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="hover:filter hover:grayscale transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div>
            {/*  Main section  */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/*  Headings  */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Chelsey {""}
                        <span
                        className="xs:relative xs:font-semibold z-20
                        before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Machin
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    Full-stack software engineer versed in modern front-end frameworks and scalable, compliant APIs
                    </p>
                </motion.div>

                {/*  Social media links  */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default Landing;