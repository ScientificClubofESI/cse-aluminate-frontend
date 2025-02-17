import { Description } from "@mui/icons-material";
import React from "react";
import { useServices } from "@/utils/fetchData";

const Service = ({ element }) => {
  return (
    <li className="bg-white  border-[0.6px] border-neutral-200 px-4 py-4 rounded-md flex flex-col">
      <h1 className="font-bold">{element.name}</h1>
      <div className="flex lg:flex-row justify-between items-start  flex-col ">
        <h3>
          Provided by <strong>{element.description}</strong>
        </h3>
        <button className="bg-Primary-600 w-full lg:max-w-max text-white  font-[600] py-[8px] px-[12px] rounded-md">
          See Service {">"}{" "}
        </button>
      </div>
    </li>
  );
};

const mockdata = [
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
  const { data, isLoading, isError, error } = useServices();
  return (
    <div id="services">
      <h1
        className="text-center p-12 font-bold font-12"
        style={{ fontSize: "48px" }}
      >
        Popular Services
      </h1>
      <ul className="lg:mx-auto max-w-[950px] grid grid-cols-2 mx-3 gap-3">
        {data?.content?.map((element) => (
          <Service element={element} />
        ))}
      </ul>
    </div>
  );
};

export default PopularServices;
