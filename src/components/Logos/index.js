import React from "react";
import Image from "next/image";
import cselogo from "../../../public/cse.svg";
import aluminate from "../../../public/aluminate.svg";

const Logos = () => {
  return (
    <section>
      <p className=" capitalize font-bold text-5xl text-center">
        for more questions about
      </p>
      <div className=" flex place-content-center lg:gap-20 gap-14 mt-10">
        {/* <Image src={cselogo} className=" xl:w-[180px] w-[100px]" />
        <Image src={aluminate} className=" xl:w-[180px] w-[130px]" /> */}
        <Image src={cselogo} className=" xl:w-[150px] w-[120px] " />
        <Image src={aluminate} className=" xl:w-[200px] w-[150px]" />
      </div>
    </section>
  );
};

export default Logos;
