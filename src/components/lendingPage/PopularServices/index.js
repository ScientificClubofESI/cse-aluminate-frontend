import { Description } from "@mui/icons-material";
import React from "react";
import { useServices } from "@/utils/fetchData";
import Image from "next/image";

const Service = ({ element }) => {
  const logos = ["/aluminate.svg", "/cse.svg"];
  return (
    <li className="bg-white border-[0.6px] border-neutral-200 px-6 py-6 rounded-lg flex place-content-between items-center hover:shadow-lg transition-shadow duration-300">
      <div>
        <h1 className="font-bold text-xl text-neutral-900 mt-4">
          {element.name}
        </h1>
        <p className="text-neutral-600 py-3">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure fugiat consequuntur minus iusto. */}
          {element.description}
        </p>

        {/* Alumni Count and Progress Bar */}
        <div className="mt-4">
          <h3 className="text-neutral-700 mb-2">
            Provided by{" "}
            <strong className="text-green-600">{element.alumniCount}</strong>{" "}
            alumni
          </h3>
        </div>
      </div>
      <div className="w-24 h-24 p-3 bg-Secondary-50 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
        <Image
          width={50}
          height={50}
          src={logos[Math.floor(Math.random() * logos.length)]}
          alt={element.name}
          className="w-full h-full object-contain" // Make the image responsive
        />
      </div>
    </li>
  );
};

const PopularServices = () => {
  const { data, isLoading, isError, error } = useServices();
  return (
    <div id="services">
      <h1
        className="text-center p-12 font-bold font-12"
        style={{ fontSize: "48px" }}
      >
        Popular Services
      </h1>
      {isLoading ? <div className="my-2 mx-auto w-full max-w-6xl relative flex place-content-center">Loading...</div> :
       isError ? <div className="my-2 mx-auto w-full max-w-6xl relative flex place-content-center">Error: {error.message}</div> :
        <ul className="lg:mx-auto max-w-[950px] grid grid-cols-1 sm:grid-cols-2 mx-3 gap-3">
          {data?.content?.map((element) => (
            <Service element={element} />
          ))}
        </ul>
      }
    </div>
  );
};

export default PopularServices;
