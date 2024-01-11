

const SocialMediaIcons = () => {

    return (
        <div className="flex justify-center md:justify-start my-10 gap-5">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/chelsey-machin-269bbb187/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    alt="linkedin"
                    src="../assets/linkedin.png"
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/chelseymachin"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    alt="github"
                    src="../assets/github.png"
                    width={30}
                    height={30}
                />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="mailto:chelseymachin@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    alt="email"
                    src="../assets/email.png"
                />
            </a>
        </div>
        
    )
}

export default SocialMediaIcons;