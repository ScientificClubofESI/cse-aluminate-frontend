import { Description } from "@mui/icons-material";
import React from "react";

const Service = ({ element }) => {
  return (
    <li className="bg-white  border-[0.6px] border-neutral-200 px-4 py-4 rounded-md flex flex-col">
      <h1 className="font-bold">{element.title}</h1>
      <div className="flex lg:flex-row justify-between items-start  flex-col ">
        <h3>
          Provided by <strong>{element.Description}</strong>
        </h3>
        <button className="bg-Primary-600 w-full lg:max-w-max text-white  font-[600] py-[8px] px-[12px] rounded-md">
          See Service {">"}{" "}
        </button>
      </div>
    </li>
  );
};
const data = [
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
  {
    id: 1,
    title: "Job and Internship Opportunities",
    Description: "13 alumnis",
  },
];
const PopularServices = () => {
  return (
    <div id="services">
      <h1
        className="text-center p-12 font-bold font-12"
        style={{ fontSize: "48px" }}
      >
        Popular Services
      </h1>
      <ul className="lg:mx-auto max-w-[950px] grid grid-cols-2 mx-3 gap-3">
        {data.map((element) => (
          <Service element={element} />
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;
