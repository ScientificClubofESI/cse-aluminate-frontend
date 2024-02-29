import React from "react";
import Image from "next/image";
import reseticon from "/public/resetbutton.svg";
import filtericon from "/public/filterbutton.svg";

const Index = ({
  degreelist,
  serviceslist,
  setselectedskillslist,
  setfinal_data,
  final_data,
  setisfilterbutton,
  setisfiltersection,
  setinputValue,
  setserviceslist,
  setdegreelist,
}) => {
  return (
    <div className=" flex gap-5 place-content-center mt-10">
      <button
        className=" bg-[#1E9884] px-5 py-3 rounded-3xl flex"
        onClick={() => {
          console.log(final_data);
          final_data.degree.length != 0 ||
          final_data.services.length != 0 ||
          final_data.skills.length != 0
            ? // final_data != null
              (setisfilterbutton(true), setisfiltersection(false))
            : "";
        }}
      >
        {" "}
        <p className=" mr-2 text-white text-2xl capitalize">filter result</p>
        <Image alt="filtericon" src={filtericon} />
      </button>

      <button
        className=" bg-white border-2 border-[#1E9884] px-5 py-3 rounded-3xl flex"
        onClick={() => {
          // setindexdegree(-1);
          setselectedskillslist([]);
          setinputValue("");
          setserviceslist(
            serviceslist.map((item) => {
              return { ...item, ischecked: false };
            })
          );
          setdegreelist(
            degreelist.map((item) => {
              return { ...item, ischecked: false };
            })
          );
          setfinal_data({
            ...final_data,
            degree: [],
            skills: [],
            services: [],
          });
        }}
      >
        {" "}
        <p className=" mr-2 text-[#1E9884] text-2xl capitalize">reset</p>
        <Image alt="reseticon" src={reseticon} />
      </button>
    </div>
  );
};

export default Index;
