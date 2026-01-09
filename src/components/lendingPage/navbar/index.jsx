import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home");
  const [respoListVisible, setRespoListVisible] = useState(false);

  const toggleRespoList = () => {
    setRespoListVisible(!respoListVisible);
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "allumnus", label: "Alumnis" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is at the bottom of the page
      if (scrollOffset + windowHeight >= documentHeight - 10) {
        setActiveSection("contact");
        return;
      }

      // Find the current section based on scroll position
      let currentSection = "home";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const position = element.offsetTop - 150;
          const nextSection = sections[i + 1];
          const nextElement = nextSection
            ? document.getElementById(nextSection.id)
            : null;
          const nextPosition = nextElement
            ? nextElement.offsetTop - 150
            : documentHeight;

          if (scrollOffset >= position && scrollOffset < nextPosition) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <nav className="z-50 h-20 px-5 rounded-3xl bg-white  md:flex lg:text-lg items-center md:text-md justify-center top-0 w-[100vw] fixed font-Outfit font-medium">
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
            {sections.map((section) =>
              router.pathname === "/" ? (
                <ScrollLink
                  key={section.id}
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer ${
                    activeSection === section.id ? "text-Secondary-500" : ""
                  }`}
                >
                  {section.label}
                </ScrollLink>
              ) : (
                <Link
                  key={section.id}
                  href={{ pathname: "/", query: { scrollTo: section.id } }}
                  className="cursor-pointer"
                >
                  {section.label}
                </Link>
              )
            )}
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
        <div className="z-20 h-20 w-full items-center  bg-white flex fixed md:hidden align-center justify-between p-4">
          <img src="./Assets/A_logo.png" alt="" className="h-10 " />
          <button onClick={toggleRespoList} className="mr-10">
            <FontAwesomeIcon icon={faBars} className="h-8" />
            {/* {respoListVisible ? (
              
            ) : (
              
            )} */}
          </button>
        </div>

        {/* Mobile Menu (updated to slide from top) */}
        <div
          className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            respoListVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-2 mt-5 flex flex-col items-center text-2xl font-semibold pb-10">
            <div className=" flex place-content-between w-full">
              <img src="./Assets/A_logo.png" alt="" className="h-10 ml-5" />
              <button onClick={toggleRespoList}>
                <FontAwesomeIcon icon={faX} className="h-8" />
              </button>
            </div>
            <ul className="space-y-6">
              {sections.map((section) => (
                <li key={section.id} className="cursor-pointer">
                  {router.pathname === "/" ? (
                    <ScrollLink
                      key={section.id}
                      to={section.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={toggleRespoList}
                      className={`${
                        activeSection === section.id ? "text-Secondary-500" : ""
                      }`}
                    >
                      {section.label}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={section.id}
                      onClick={toggleRespoList}
                      href={{ pathname: "/", query: { scrollTo: section.id } }}
                    >
                      {section.label}
                    </Link>
                  )}
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
