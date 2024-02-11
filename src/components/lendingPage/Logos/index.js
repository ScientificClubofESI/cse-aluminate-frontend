import React from "react";
import Image from "next/image";


const Logos = () => {
  return (
    <section className="mt-10 mb-10">
      <p className=" capitalize font-bold text-5xl text-center">
        for more questions about
      </p>
      <div className=" flex place-content-center lg:gap-20 gap-14 mt-10">
        {/* <Image src={cselogo} className=" xl:w-[180px] w-[100px]" />
        <Image src={aluminate} className=" xl:w-[180px] w-[130px]" /> */}
        <Image width={150} height={150} src={"/cse.svg"} className=" xl:w-[150px] w-[120px]  " />
        <Image width={200} height={200} src={"/aluminate.svg"} className=" xl:w-[200px] w-[150px]" />
      </div>
    </section>
  );
};

export default Logos;
