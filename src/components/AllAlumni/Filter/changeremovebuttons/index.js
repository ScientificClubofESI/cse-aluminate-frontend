import React from "react";
import removebutton from "/public/removebutton.svg";
import Image from "next/image";

const Index = ({ setisfilterbutton, setisfiltersection }) => {
  return (
    <div className=" flex gap-5 place-content-center mt-10">
      <button
        className=" bg-[#1E9884] px-5 py-3 rounded-3xl flex"
        onClick={() => {
          setisfiltersection(true);
        }}
      >
        {" "}
        <p className=" mr-2 text-white text-2xl capitalize">change filter</p>
      </button>

      <button
        className=" bg-white border-2 border-gray-200 px-5 py-3 rounded-3xl flex"
        onClick={() => {
          setisfilterbutton(false);
        }}
      >
        {" "}
        <p className=" mr-2 text-red-500 text-2xl capitalize">remove</p>
        <Image alt="removebutton" src={removebutton} />
      </button>
    </div>
  );
};

export default Index;
