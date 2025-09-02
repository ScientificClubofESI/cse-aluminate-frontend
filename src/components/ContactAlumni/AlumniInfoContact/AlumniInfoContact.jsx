import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const AlumniInfoContact = ({ alumniInfo }) => {
  console.log({ alumniInfo });
  return (
    <div className="w-[28%] gap-5 hidden lg:grid mx-8 bg-Primary-200/30 p-5">
      <div className="w-full grid gap-5 justify-items-center ">
        {" "}
        <p className="text-2xl text-Secondary-700 font-semibold">
          Contact Alumni
        </p>
        <Image
          src={alumniInfo.imageUrl || "/Unknown_person.jpg"}
          alt={
            alumniInfo.fullName ? `${alumniInfo.fullName} - Alumni` : "Alumni"
          }
          width={300}
          height={60}
          className="h-60 object-cover rounded-lg"
        />
      </div>

      <div className="grid gap-2">
        {" "}
        <p className=" font-medium text-xl">{alumniInfo.fullName}</p>
        <p className=" font-light text-Primary-600">
          {alumniInfo.currentPosition}
        </p>
        <div className="location flex items-center gap-2 ">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-500 opacity-70 h-4"
          />
          <p className="text-gray-500 text-sm opacity-70">
            {alumniInfo.currentLocation}
          </p>
        </div>
      </div>

      <div className="Services grid gap-2">
        <p className=" text-Secondary-700 text-md ">Services</p>
        <hr className="border-Secondary-700 border-1" />{" "}
        <div className="serv flex gap-4 flex-wrap text-sm">
          {alumniInfo.services?.map((service, index) => (
            <div
              key={index}
              className="flex  gap-1 items-center justify-center"
            >
              <FontAwesomeIcon icon={faCircleCheck} color="#3FD8BF" />
              <p className="font-light">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact grid gap-3">
        <div className="flex items-center gap-3">
          {" "}
          <p className="text-Primary-800 underline  font-extralight">
            LinkedIn:
          </p>
          <a href={alumniInfo.linkedin} target='_blank' className="text-Primary-800 ">
            {alumniInfo.fullName}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {" "}
          <p className="text-Secondary-800   underline font-extralight">
            Email:
          </p>
          <a
            href={`mailto:${alumniInfo.email}`}
            className="  text-Secondary-800"
          >
            {alumniInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlumniInfoContact;
