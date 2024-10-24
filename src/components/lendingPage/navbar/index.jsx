

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const toggleRespoList = () => {
        setRespoListVisible(!respoListVisible);
    };
    const [activeSection, setActiveSection] = useState("home");
    const [respoListVisible, setRespoListVisible] = useState(false);
    const respoOff = (event) => {
        setRespoListVisible(false);
    };

    const respoON = (event) => {
        setRespoListVisible(true);
    };

    const sections = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "allumnus", label: "Allumnus" },
        { id: "contact", label: "Contact" },

    ];

    useEffect(() => {
        const handleScroll = () => {

            const scrollOffset = window.scrollY;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const position = element.offsetTop;
                    if (scrollOffset >= position) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex items-center justify-center">

            <nav className="z-50 h-20  rounded-3xl bg-white  nav-shadow   md:flex lg:text-lg items-center md:text-md justify-center top-0  w-[100vw] fixed font-Outfit font-medium">
                <div className="hidden container md:flex justify-between items-center">
                    <img src="./Assets/Logo.png" alt="" className="lg:h-8 md:h-6 " />
                    <ul className="flex space-x-9 md:space-x-6">
                        {sections.map(section => (
                            <Link href={"/"}> <li key={section.id} className="cursor-pointer">
                                {/* <ScrollLink ScrollLink to={section.id} smooth={true} duration={500} className={`flex items-center gap-3 ${activeSection === section.id ? "active" : ""}`}> */}
                                {section.label}
                                {/* </ScrollLink> */}
                            </li>
                            </Link>
                        ))}
                    </ul>
                    <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
                        <div className="text-xs md:text-xl font-normal text-white leading-loose tracking-tight">Find Alumni</div>
                    </button>
                </div>

                <div className="z-20 h-20 w-full items-center shadow-md bg-white flex  fixed md:hidden align-center justify-between ">
                    <img src="./Assets/A_logo.png" alt="" className="h-10 ml-10" />
                    <button onClick={toggleRespoList} className="mr-10">
                        {respoListVisible ? (
                            <FontAwesomeIcon icon={faX} className="h-8" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="h-8" />
                        )}
                    </button>
                </div>
                {respoListVisible && (
                    <div className="">
                        <div className="bg-slate-500   md:hidden flex fixed h-full w-full opacity-50"></div>
                        <div className="bg-white  fixed shadow-lg h-auto p-5  text-xl gap-y-8 w-full content-start top-10 grid md:hidden justify-items-center z-0 ">
                            <div className=" rounded-3xl   mt-16  grid mr-3 content-start gap-12 justify-items-center  ">
                                <ul className="grid  gap-y-6 justify-items-center space-y-0 content-start md:space-x-6">
                                    {sections.map(section => (
                                        <li key={section.id} className="cursor-pointer">
                                            <ScrollLink to={section.id} onClick={toggleRespoList} smooth={true} duration={500} className={`flex items-center gap-3 ${activeSection === section.id ? "active" : ""}`}>
                                                {section.label}
                                            </ScrollLink>
                                        </li>
                                    ))}

                                </ul>

                                <Link href={"/allalumni"}> <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
                                    <div className=" text-xl font-normal text-white leading-loose tracking-tight">Find Alumni</div>
                                </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
