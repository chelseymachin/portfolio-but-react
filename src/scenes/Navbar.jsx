import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../components/Link";

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className="bg-deep-blue z-40 w-full fixed top-0 py-6">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">CM</h4>

                {/* dektop navbar */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Resume"
                            href="https://u3u3u3.s3.us-west-1.amazonaws.com/Copy+of+1-chelsey-machin-resume-1.pdf"
                            isExternal={true}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                        <button
                            className="rounded-full bg-blush p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img alt="menu-icon" src="../assets/menu-icon.svg" />
                        </button> 
                    )}

                    {/* Mobile menu pop-up */}
                    {!isAboveSmallScreens && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]">
                            {/* close icon */}
                            <div className="flex justify-end p-12">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img src="../assets/close-icon.svg" alt="close-icon" />
                                </button>
                            </div>

                            {/* menu items */}
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Skills"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Resume"
                                    href="https://u3u3u3.s3.us-west-1.amazonaws.com/Copy+of+1-chelsey-machin-resume-1.pdf"
                                    isExternal={true}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        </div>
                    )}
            </div>
        </nav>
    )
} 

export default Navbar;