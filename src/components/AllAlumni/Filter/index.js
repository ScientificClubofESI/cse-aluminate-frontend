import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Changeremove from "@/components/AllAlumni/Filter/changeremovebuttons";
import Filtersectionbutton from "@/components/AllAlumni/Filter/filtersectionbutton";
import Filterresultresetbutton from "@/components/AllAlumni/Filter/filterresultresetbuttons";
import Services from "@/components/AllAlumni/Filter/services";
import Skills from "@/components/AllAlumni/Filter/skills";
import InputSelectedskills from "@/components/AllAlumni/Filter/input+selectedskills";
import Degree from "@/components/AllAlumni/Filter/degree";
const Filter = () => {
  // const [radiostudent, setradiostudent] = useState(false);
  // const [radiojunior, setradiojunior] = useState(false);
  // const [radiosenior, setradiosenior] = useState(false);
  // const [radioacademic, setradioacademic] = useState(false);

  // const [indexdegree, setindexdegree] = useState(-1);
  // const [indexservices, setindexservices] = useState(-1);
  const [divskillsbool, setdivskillsbool] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [isfiltersection, setisfiltersection] = useState(false);
  const [isfilterbutton, setisfilterbutton] = useState(false);

  const degree_list = [
    {
      id: 0,
      label: "student",
      ischecked: false,
      // booleen: radiostudent,
      // setbooleen: setradiostudent,
    },
    {
      id: 1,
      label: "junior",
      ischecked: false,
      // booleen: radiojunior,
      // setbooleen: setradiojunior,
    },
    {
      id: 2,
      label: "senior",
      ischecked: false,
      // booleen: radiosenior,
      // setbooleen: setradiosenior,
    },
    {
      id: 3,
      label: "academic",
      // booleen: radioacademic,
      // setbooleen: setradioacademic,
    },
  ];
  const [degreelist, setdegreelist] = useState(degree_list);
  const [selecteddegreelist, setselecteddegreelist] = useState([]);
  const skillslist = [
    { id: 0, label: "HTML" },
    { id: 1, label: "CSS" },
    { id: 2, label: "JavaScript" },
    { id: 3, label: "ReactJS" },
    { id: 4, label: "Node.js" },
    { id: 5, label: "Express.js" },
    { id: 6, label: "MongoDB" },
    { id: 7, label: "SQL" },
    { id: 8, label: "Python" },
    { id: 9, label: "Django" },
    { id: 10, label: "Flask" },
    { id: 11, label: "Ruby" },
    { id: 12, label: "Ruby on Rails" },
    { id: 13, label: "Java" },
    { id: 14, label: "Spring Boot" },
    { id: 15, label: "C#" },
    { id: 16, label: "ASP.NET" },
    { id: 17, label: "PHP" },
    { id: 18, label: "Laravel" },
    { id: 19, label: "Vue.js" },
    { id: 20, label: "Angular" },
    { id: 21, label: "Sass" },
    { id: 22, label: "LESS" },
    { id: 23, label: "Bootstrap" },
    { id: 24, label: "Tailwind CSS" },
    { id: 25, label: "GraphQL" },
    { id: 26, label: "RESTful APIs" },
    { id: 27, label: "Docker" },
    { id: 28, label: "Kubernetes" },
    { id: 29, label: "Git" },
    { id: 30, label: "Jenkins" },
    { id: 31, label: "AWS" },
    { id: 32, label: "Azure" },
    { id: 33, label: "Firebase" },
    { id: 34, label: "Flutter" },
    { id: 35, label: "Swift" },
    { id: 36, label: "Kotlin" },
    { id: 37, label: "Machine Learning" },
    { id: 38, label: "Data Science" },
    { id: 39, label: "TensorFlow" },
    { id: 40, label: "PyTorch" },
    { id: 41, label: "Blockchain" },
    { id: 42, label: "Ethereum" },
    { id: 43, label: "Cybersecurity" },
    { id: 44, label: "UI/UX Design" },
    { id: 45, label: "Adobe Photoshop" },
    { id: 46, label: "Figma" },
    { id: 47, label: "Sketch" },
    { id: 48, label: "InVision" },
    { id: 49, label: "Project Management" },
    { id: 50, label: "Agile Methodology" },
  ];

  const services_list = [
    { id: 0, ischecked: false, label: "Job and Internship Opportunities" },
    { id: 1, ischecked: false, label: "Mentorship Program" },
    { id: 2, ischecked: false, label: "Professional Development Workshops" },
    { id: 3, ischecked: false, label: "Networking" },
    { id: 4, ischecked: false, label: "Job and Internship Opportunities" },
    { id: 5, ischecked: false, label: "Mentorship Program" },
    { id: 6, ischecked: false, label: "Professional Development Workshops" },
    { id: 7, ischecked: false, label: "Networking" },
    { id: 8, ischecked: false, label: "Job and Internship Opportunities" },
    { id: 9, ischecked: false, label: "Mentorship Program" },
    { id: 10, ischecked: false, label: "Professional Development Workshops" },
    { id: 11, ischecked: false, label: "Networking" },
  ];
  const [serviceslist, setserviceslist] = useState(services_list);
  const [selectedserviceslist, setselectedserviceslist] = useState([]);
  const [selectedskillslist, setselectedskillslist] = useState([]);
  const [searchedskillslist, setsearchedskillslist] = useState(skillslist);

  const listtoappear = () => {
    if (inputValue != "") {
      return searchedskillslist;
    } else {
      return skillslist;
    }
  };
  const addItemtoSelectedList = (record) => {
    const existitem = selectedskillslist.find((item) => item.id == record.id);
    if (!existitem) {
      setselectedskillslist([...selectedskillslist, record]);
    }
  };

  const deleteitemfromselectedskillslist = (record) => {
    setselectedskillslist(
      selectedskillslist.filter((item) => {
        return item.id != record.id;
      })
    );
  };
  const [final_data, setfinal_data] = useState({
    degree: [],
    skills: [],
    services: [],
  });

  useEffect(() => {
    // Log selectedserviceslist after the state has been updated
    // setselectedserviceslist(
    //   serviceslist.filter((item) => {
    //     if (item.ischecked == false) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   })
    // );
    // console.log("selectedserviceslist", selectedserviceslist);
  }, [serviceslist]);

  return (
    <>
      {isfiltersection && (
        <section className=" w-[90%] mx-auto">
          <Degree
            setisfiltersection={setisfiltersection}
            degreelist={degreelist}
            setdegreelist={setdegreelist}
          />

          <InputSelectedskills
            selectedskillslist={selectedskillslist}
            deleteitemfromselectedskillslist={deleteitemfromselectedskillslist}
            setdivskillsbool={setdivskillsbool}
            setinputValue={setinputValue}
            inputValue={inputValue}
            setsearchedskillslist={setsearchedskillslist}
            skillslist={skillslist}
          />
          {divskillsbool && (
            <Skills
              searchedskillslist={searchedskillslist}
              addItemtoSelectedList={addItemtoSelectedList}
              selectedskillslist={selectedskillslist}
              listtoappear={listtoappear}
            />
          )}

          <p className=" capitalize text-Primary-800 text-3xl">services</p>
          <hr className=" h-[1.5px] bg-Primary-800 mt-1" />
          <Services
            serviceslist={serviceslist}
            setserviceslist={setserviceslist}
          />
          <Filterresultresetbutton
            degreelist={degreelist}
            serviceslist={serviceslist}
            selecteddegreelist={selecteddegreelist}
            selectedskillslist={selectedskillslist}
            selectedserviceslist={selectedserviceslist}
            setselectedserviceslist={setselectedserviceslist}
            setselecteddegreelist={setselecteddegreelist}
            setselectedskillslist={setselectedskillslist}
            final_data={final_data}
            setfinal_data={setfinal_data}
            setisfilterbutton={setisfilterbutton}
            setisfiltersection={setisfiltersection}
            setinputValue={setinputValue}
            setserviceslist={setserviceslist}
            setdegreelist={setdegreelist}
            // using context api will be more appropriate
          />
        </section>
      )}
      {!isfiltersection && (
        <Filtersectionbutton setisfiltersection={setisfiltersection} />
      )}
      {isfilterbutton && !isfiltersection && (
        <Changeremove
          setisfilterbutton={setisfilterbutton}
          setisfiltersection={setisfiltersection}
        />
      )}
    </>
  );
};

export default Filter;
