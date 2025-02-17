import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [respoListVisible, setRespoListVisible] = useState(false);

  const toggleRespoList = () => {
    setRespoListVisible(!respoListVisible);
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "allumnus", label: "Alumnis" },
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
      <nav className="z-50 h-20 px-5 rounded-3xl bg-white nav-shadow md:flex lg:text-lg items-center md:text-md justify-center top-0 w-[100vw] fixed font-Outfit font-medium">
        {/* Desktop Navbar (unchanged) */}
        <div className="hidden container md:flex justify-between items-center">
          <Link href="/">
            <img
              src="./Assets/Logo.png"
              alt=""
              className="lg:h-8 md:h-6 cursor-pointer"
            />
          </Link>
          <ul className="flex space-x-9 md:space-x-6">
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {section.label}
              </ScrollLink>
            ))}
          </ul>
          <Link href={"/allalumni"}>
            <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
              <div className="text-xs md:text-xl font-normal text-white leading-loose tracking-tight">
                Find Alumni
              </div>
            </button>
          </Link>
        </div>

        {/* Mobile Navbar (unchanged) */}
        <div className="z-20 h-20 w-full items-center shadow-md bg-white flex fixed md:hidden align-center justify-between">
          <img src="./Assets/A_logo.png" alt="" className="h-10 ml-10" />
          <button onClick={toggleRespoList} className="mr-10">
            {respoListVisible ? (
              <FontAwesomeIcon icon={faX} className="h-8" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu (updated to slide from top) */}
        <div
          className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            respoListVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-5 mt-16">
            <ul className="space-y-6">
              {sections.map((section) => (
                <li key={section.id} className="cursor-pointer">
                  <ScrollLink
                    to={section.id}
                    onClick={toggleRespoList}
                    smooth={true}
                    duration={500}
                    className={`flex items-center gap-3 ${
                      activeSection === section.id ? "active" : ""
                    }`}
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <Link href={"/allalumni"}>
              <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6 mt-6">
                <div className="text-xl font-normal text-white leading-loose tracking-tight">
                  Find Alumni
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Overlay (unchanged) */}
        {respoListVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleRespoList}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;