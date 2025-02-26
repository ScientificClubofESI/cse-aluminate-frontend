import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="px-[5%] mt-[200px] lg:px-[8%] flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:grid lg:grid-cols-2 lg:my-[5%]"
      id="home"
    >
      {/* Title */}
      <p className="text-4xl lg:text-5xl mt-10 font-extrabold text-center lg:text-left lg:justify-start">
        Connecting Alumni Uniting Dreams
      </p>

      {/* Hero Image */}
      <div className="mx-[8%] h-auto flex justify-center items-center lg:row-span-3">
        <div className="rounded-[24px] lg:rounded-[32px] border border-Primary-100 bg-Primary-50 flex justify-center items-center p-2">
          <Image
            src="/heroimage.jpg"
            width={70}
            layout="responsive"
            height={80}
            className="rounded-2xl lg:rounded-3xl"
          />
        </div>
      </div>

      {/* Mobile Button (No Div) */}
      <div className="relative w-full flex items-center justify-center lg:hidden">
        <Link href={"/allalumni"}>
          <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
            <div className=" lg:text-xl font-normal text-white leading-loose tracking-tight">
              Find Alumni
            </div>
          </button>
        </Link>
      </div>

      {/* Description */}
      <p className="font-light text-base text-center lg:text-left">
        Welcome to Aluminate. Here, you can reignite old connections, forge
        new partnerships, and embark on exciting journeys of professional and
        personal growth. Join a vibrant community of like-minded individuals who
        are shaping the future together.
      </p>

      {/* Desktop Button (No Div) */}
      <div className="w-full hidden lg:flex">
        <Link href={"/allalumni"}>
          <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
            <div className="text-xs lg:text-xl font-normal text-white leading-loose tracking-tight">
              Find Alumni
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
