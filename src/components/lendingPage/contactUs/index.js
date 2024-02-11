import React from "react";

import Image from "next/image";
// import cselogo from "../../../public/cse.svg";
// import aluminate from "../../../public/aluminate.svg";

const ContactUs = () => {
  const socialmedias = [
    {
      id: 0,
      label: "/facebook.svg",
      link: "https://www.facebook.com/club.scientifique.esi?locale=fr_FR",
    },

    {
      id: 1,
      label: "/instagram.svg",
      link: "https://www.instagram.com/cse.club/",
    },
    {
      id: 2,
      label: "/twitter.svg",
      link: "https://twitter.com/CSESI_Club",
    },
    {
      id: 3,
      label: "/youtube.svg",
      link: "https://www.youtube.com/@ClubScientifiqueESI-CSE",
    },
    {
      id: 4,
      label: "/linkedin.svg",
      link: "https://www.linkedin.com/company/cse-club/",
    },
  ];
  return (
    <div className=" relative ">
      <section className=" flex flex-col place-content-between xl:gap-10 w-full mx-auto absolute lg:mt-10 mt-24">
        <div className=" flex flex-col items-center">
          <p className="  uppercase font-bold xl:text-5xl text-4xl">
            contact us
          </p>
          <p className=" text-neutral-900 mt-2">
            By email{" "}
            <span className=" text-Secondary-600 cursor-pointer">
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
                <Image width={100} height={150} src={item.label} />
              </a>
            );
          })}
        </div>
      </section>
      <svg
        //  className=" absolute sm:bottom-0 bottom-[-20px] z-[-5] lg:h-[250px] h-[300px]"
        className=""
        width=""
        height="246"
        viewBox="0 0 1440 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="720" cy="379" rx="884" ry="379" fill="#D0E2FF" />
      </svg>
    </div>
  );
};

export default ContactUs;
