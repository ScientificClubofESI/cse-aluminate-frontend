import React from "react";
import Image from "next/image";
import reseticon from "/public/resetbutton.svg";
import filtericon from "/public/filterbutton.svg";

const Index = ({
  degreelist,
  serviceslist,
  selecteddegreelist,
  selectedserviceslist,
  selectedskillslist,
  setselectedserviceslist,
  setselecteddegreelist,
  setselectedskillslist,
  setfinal_data,
  final_data,
  setisfilterbutton,
  setisfiltersection,
  setinputValue,
  setserviceslist,
  setdegreelist
}) => {
  return (
    <div className=" flex gap-5 place-content-center mt-10">
      <button
        className=" bg-[#1E9884] px-5 py-3 rounded-3xl flex"
        onClick={() => {
          // setselectedserviceslist(
          //   serviceslist.filter((item) => {
          //     if (item.ischecked == false) {
          //       return false;
          //     } else {
          //       return true;
          //     }
          //   })
          // );
          setselectedserviceslist((prevSelectedServicesList) => {
            const updatedList = serviceslist.filter((item) => item.ischecked);

            return updatedList;
          });
          setselecteddegreelist((prevSelectedServicesList) => {
            const updatedList = degreelist.filter((item) => item.ischecked);

            return updatedList;
          });

          // console.log(degreelist[indexdegree], selectedskillslist);
          // console.log("selectedserviceslist", selectedserviceslist);

          setfinal_data({
            ...final_data,
            degree: selecteddegreelist,
            skills: selectedskillslist,
            services: selectedserviceslist,
          });

          console.log(final_data);
          final_data.degree != null &&
          final_data.services.length != 0 &&
          final_data.skills.length != 0
            ? (setisfilterbutton(true), setisfiltersection(false))
            : "";
        }}
      >
        {" "}
        <p className=" mr-2 text-white text-2xl capitalize">filter result</p>
        <Image src={filtericon} />
      </button>

      <button
        className=" bg-white border-2 border-[#1E9884] px-5 py-3 rounded-3xl flex"
        onClick={() => {
          // setindexdegree(-1);
          setselectedskillslist([]);
          setinputValue(null);
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
        <Image src={reseticon} />
      </button>
    </div>
  );
};

export default Index;
