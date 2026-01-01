import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="min-h-screen font-Outfit flex flex-col justify-center items-center px-[5%] py-20 lg:px-[8%] lg:pt-32 lg:pb-11 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      id="home"
     
    >
      {/* Left Content Container */}
      <div className="flex flex-col gap-4 max-w-2xl lg:order-1">
        {/* Title */}
        <p className="text-4xl lg:text-5xl font-extrabold text-center lg:text-left text-[#151E2C]">
          Connecting Alumni Uniting Dreams
        </p>

        {/* Description - Desktop only */}
        <p className="hidden lg:block font-light text-base lg:text-2xl text-center lg:text-left text-[#151E2C]">
          Welcome to Aluminate, where alumni come together to reignite old connections and embark on exciting journeys of collaboration
        </p>

        {/* Button - Desktop only */}
        <div className="hidden lg:flex items-center justify-center lg:justify-start">
          <Link href="/allalumni">
            <button className="bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6">
              <div className="text-base lg:text-xl font-normal text-white leading-loose tracking-tight">
                Find Alumni
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex h-auto justify-center items-center mt-8 lg:mt-0 lg:order-2">
        <div className="rounded-[24px] lg:rounded-[32px] border border-Primary-100 bg-Primary-50 flex justify-center items-center p-2">
          <Image
            src="/heroimage.jpg"
            width={632}
            layout="responsive"
            height={368.3817138671875}
            className="rounded-2xl lg:rounded-3xl w-[632px] h-[368.3817138671875px]"
          />
        </div>
      </div>

      {/* Description - Mobile only (below image) */}
      <p className="flex lg:hidden font-light text-base text-center text-[#151E2C] mt-8 order-3 max-w-2xl">
        Welcome to Aluminate, where alumni come together to reignite old connections and embark on exciting journeys of collaboration
      </p>

      {/* Button - Mobile only (below description) */}
      <div className="flex lg:hidden items-center justify-center mt-4 order-4">
        <Link href="/allalumni">
          <button className="bg-Secondary-500 rounded-[24px] py-2 px-4">
            <div className="text-base font-normal text-white leading-loose tracking-tight">
              Find Alumni
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
