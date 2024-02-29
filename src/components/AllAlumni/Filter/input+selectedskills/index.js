import React from "react";
import xicon from "/public/xbutton.svg";
import Image from "next/image";

const Index = ({
  selectedskillslist,
  deleteitemfromselectedskillslist,
  setdivskillsbool,
  setinputValue,
  inputValue,
  setsearchedskillslist,
  skillslist,
}) => {
  return (
    <>
      <p className=" capitalize text-Primary-800 text-3xl">skills</p>
      <hr className=" h-[1.5px] bg-Primary-800 mt-1" />
      <div
        // onClick={() => setdivskillsbool(!divskillsbool)}
        className=" bg-slate-200 p-3 flex flex-wrap items-center relative z-[]"
      >
        {" "}
        {/* {selectedskillslist.length == 0 && (
  <p className=" text-gray-400 absolute z-[20] ">
    Tap to pick the skill that you’re searching for (exp : UI , UX, HTML
    , CSS , ReactJS , ...)
  </p>
)} */}
        <ul className=" z-30 flex flex-wrap gap-3">
          {/* selected skills list should be in here */}
          {selectedskillslist.map((item) => {
            return (
              <li
                key={item.id}
                className="  bg-Primary-300 text-white px-2 py-1 rounded-lg flex"
              >
                {/* <FontAwesomeIcon icon={faX} /> */}
                <button
                  onClick={() => {
                    deleteitemfromselectedskillslist(item);
                  }}
                  className=" cursor-pointer z-50 "
                >
                  <Image src={xicon} />
                </button>

                <p>{item.label} </p>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          onFocus={() => setdivskillsbool(true)}
          // onClick={(e) => e.stopPropagation()}
          className=" z-30 w-[500px] ml-2 px-2 py-1"
          placeholder="Tap to pick the skill that you’re searching for (exp : UI , UX, HTML
    , CSS , ReactJS , ...)"
          value={inputValue}
          onChange={(e) => {
            setinputValue(e.target.value);
            setsearchedskillslist(
              skillslist.filter((item) => {
                return item.label
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              })
            );
          }}
        />
      </div>
    </>
  );
};

export default Index;
