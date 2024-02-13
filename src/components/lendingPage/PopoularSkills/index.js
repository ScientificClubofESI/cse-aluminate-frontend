import React from "react";
import Image from "next/image";

// mx-auto
// bg-white

const Skills = ({ skill }) => {
  return (
    <div
      className="flex flex-col items-center   gap-3 lg:flex lg:flex-row"
      id="skills"
    >
      <div>
        <Image src={skill.iconPath} width={100} height={100} />
        {/**image */}
      </div>

      <div>
        {" "}
        {/**div Data Science*/}
        <div className="  lg:items-start items-center flex flex-col">
          <div class="pb-2">
            <h5
              className="font-semibold leading-25.2 tracking-1 mb-0 pb-0"
              style={{ fontSize: "20px" }}
            >
              {skill.name}
            </h5>
            <p
              className="hidden lg:block font-light text-14 leading-17.64 tracking-1"
              style={{ fontSize: "14px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
              luctus elit. Maecenas non risus sapien. Phasellus ultrices libero
              vel erat laoreet, nec{" "}
            </p>
          </div>
          <div className="flex">
            <a
              href="#"
              className="text-center font-normal text-16 underline leading-20.16 tracking-1 text-Secondary-600 "
              style={{ fontSize: "16px" }}
            >
              See Skill{" "}
            </a>
            {/**icon */}
            <Image src="/mini_icon.svg" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PopularSkills = () => {
  const skillsRight = [
    {
      id: 1,
      name: "UI/UX Design",
      iconPath: "/ui_ux.svg",
    },
    {
      id: 2,
      name: "Marketing",
      iconPath: "/Marketing.svg",
    },
    {
      id: 3,
      name: "Data Science",
      iconPath: "/data_science.svg",
    },
  ];
  const skillsLeft = [
    {
      id: 4,
      name: "Web development",
      iconPath: "/webdev.svg",
    },
    {
      id: 5,
      name: "Data Analyst",
      iconPath: "/data_analyst.svg",
    },
    {
      id: 6,
      name: "Graphic Design",
      iconPath: "/graphic_des.svg",
    },
  ];

  return (
    <section className="bg-white">
      <h1
        className="text-center p-12 font-bold font-12"
        style={{ fontSize: "48px" }}
      >
        Popular Skills
      </h1>

      <main className="flex  w-full bg-white ">
        <div className="flex justify-between md:w-full w-[90%]  sm:w-[60%] mx-auto">
          <Image
            className=" hidden md:block"
            src="/ellipseg.svg"
            width={100}
            height={100}
          />

          <section className="flex flex-col gap-7">
            {skillsLeft.map((skill) => {
              return <Skills key={skill.id} skill={skill} />;
            })}
          </section>

          <section className="flex flex-col gap-7">
            {skillsRight.map((skill) => {
              return <Skills key={skill.id} skill={skill} />;
            })}
          </section>

          <Image
            className=" hidden md:block"
            src="/ellipsed.svg"
            width={200}
            height={200}
          />
        </div>
      </main>
    </section>
  );
};

export default PopularSkills;
