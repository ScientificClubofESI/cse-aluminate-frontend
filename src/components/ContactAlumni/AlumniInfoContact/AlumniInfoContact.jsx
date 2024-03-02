import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const AlumniInfoContact = () => {
  const alumniInfo = {
    name: "Mohamed Amine Bengharbia",
    position: "Web Developer at Company X",
    location: "Paris, France",
    services: [
      "Workshops",
      "Training Sessions",
      "Consulting",
      "Networking Events",
      "Networking Events",
      "Networking Events",
    ],
    linkedin: "https://www.linkedin.com/in/mohamed-bengharbia",
    linkedinName: "Mohamed Bengharbia",
    email: "im_engharbia@esi.dz",
    image: "./Assets/Alumni.png",
  };

  return (
    <div className="w-[30%] gap-8 hidden lg:grid m-5">
      <p>Contact Alumni</p>
      <img src={alumniInfo.image} alt={alumniInfo.name} className="h-60" />
      <div className="grid gap-2">
        {" "}
        <p className=" font-medium text-xl">{alumniInfo.name}</p>
        <p className=" font-light text-Primary-600">{alumniInfo.position}</p>
        <div className="location flex items-center gap-3 ">
          <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
          <p className="text-gray-500">{alumniInfo.location}</p>
        </div>
      </div>

      <div className="Services grid gap-2">
        <p className=" text-Secondary-700 text-xl">Services</p>
        <hr className="border-Secondary-700 border-1" />{" "}
        <div className="serv flex gap-4 flex-wrap">
          {alumniInfo.services.map((service, index) => (
            <div
              key={index}
              className="flex  gap-1 items-center justify-center"
            >
              <FontAwesomeIcon icon={faCircleCheck} color="#3FD8BF" />
              <p className="font-light">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact grid gap-3">
        <div className="flex items-center gap-3">
          {" "}
          <p className="text-Primary-800 underline text-xl font-extralight">
            LinkedIn:
          </p>
          <a href={alumniInfo.linkedin} className="text-Primary-800 text-xl ">
            {alumniInfo.linkedinName}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {" "}
          <p className="text-Secondary-800 text-xl  underline font-extralight">
            Email:
          </p>
          <a
            href={`mailto:${alumniInfo.email}`}
            className="text-xl  text-Secondary-800"
          >
            {alumniInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlumniInfoContact;
