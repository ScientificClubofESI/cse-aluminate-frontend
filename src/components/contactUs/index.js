import React from "react";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";
import linkedin from "../../../public/linkedin.svg";
7;
import footerbg from "../../../public/footerbackground.svg";

import Image from "next/image";

const ContactUs = () => {
  const socialmedias = [
    {
      id: 0,
      label: facebook,
      link: "https://www.facebook.com/club.scientifique.esi?locale=fr_FR",
    },

    {
      id: 1,
      label: instagram,
      link: "https://www.instagram.com/cse.club/",
    },
    {
      id: 2,
      label: twitter,
      link: "https://twitter.com/CSESI_Club",
    },
    {
      id: 3,
      label: youtube,
      link: "https://www.youtube.com/@ClubScientifiqueESI-CSE",
    },
    {
      id: 4,
      label: linkedin,
      link: "https://www.linkedin.com/company/cse-club/",
    },
  ];
  return (
    <section className="">
      <section className=" xl:mt-14 lg:mt-24 sm:mt-28 mt-[3rem] flex flex-col h-[150px] place-content-between xl:gap-10">
        <div className=" flex flex-col items-center">
          <p className="  uppercase font-bold xl:text-5xl text-4xl">
            contact us
          </p>
          <p className=" text-gray-600 mt-2">
            By email{" "}
            <span className=" text-green-500 cursor-pointer">
              {" "}
              <a href="mailto:cse@esi.dz"> cse@esi.dz</a>
            </span>{" "}
            or on social media
          </p>
        </div>
        <div className=" flex place-content-center xl:gap-14 lg:gap-10 gap-5 xl:pb-0 pb-3">
          {socialmedias.map((item) => {
            return (
              <a
                key={item.id}
                className=" bg-white cursor-pointer lg:w-14 lg:h-14 w-12 h-12 flex items-center place-content-center rounded-2xl hover:border-blue-800 transition-all duration-300 border-2 border-transparent "
                href={item.link}
                target="_blank"
              >
                <Image src={item.label} />
              </a>
            );
          })}
        </div>
      </section>
      {/* <Image src={footerbg} className=" absolute bottom-0 z-[-5]" /> */}
      <svg
        className=" absolute sm:bottom-0 bottom-[-20px] z-[-5] lg:h-[250px] h-[300px]"
        width=""
        height="246"
        viewBox="0 0 1440 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="720" cy="379" rx="884" ry="379" fill="#D0E2FF" />
      </svg>
    </section>
  );
};

export default ContactUs;
