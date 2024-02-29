import React from "react";
import { useState } from "react";
import Changeremove from "@/components/AllAlumni/Filter/changeremovebuttons";
import Filtersectionbutton from "@/components/AllAlumni/Filter/filtersectionbutton";
import Filterresultresetbutton from "@/components/AllAlumni/Filter/filterresultresetbuttons";
import Services from "@/components/AllAlumni/Filter/services";
import Skills from "@/components/AllAlumni/Filter/skills";
import InputSelectedskills from "@/components/AllAlumni/Filter/input+selectedskills";
import Degree from "@/components/AllAlumni/Filter/degree";
import { skillslist } from "./data/skillslist";
import { services_list } from "./data/services_list";
import { degree_list } from "./data/degree_list";

const Filter = () => {
  const [divskillsbool, setdivskillsbool] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [isfiltersection, setisfiltersection] = useState(false);
  const [isfilterbutton, setisfilterbutton] = useState(false);
  const [degreelist, setdegreelist] = useState(degree_list);
  const [selecteddegreelist, setselecteddegreelist] = useState([]);
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
    const existitem = selectedskillslist.find((item) => item.id === record.id);
    if (!existitem) {
      setselectedskillslist((prevSelectedSkillsList) => {
        const updatedList = [...prevSelectedSkillsList, record];

        setfinal_data((prevFinalData) => {
          return {
            ...prevFinalData,
            skills: updatedList,
          };
        });

        return updatedList;
      });
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

  return (
    <>
      {isfiltersection && (
        <section className=" w-[90%] mx-auto">
          <Degree
            setisfiltersection={setisfiltersection}
            degreelist={degreelist}
            setdegreelist={setdegreelist}
            setselecteddegreelist={setselecteddegreelist}
            setfinal_data={setfinal_data}
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
            setselectedserviceslist={setselectedserviceslist}
            setfinal_data={setfinal_data}
          />
          <Filterresultresetbutton
            degreelist={degreelist}
            serviceslist={serviceslist}
            setselectedskillslist={setselectedskillslist}
            final_data={final_data}
            setfinal_data={setfinal_data}
            setisfilterbutton={setisfilterbutton}
            setisfiltersection={setisfiltersection}
            setinputValue={setinputValue}
            setserviceslist={setserviceslist}
            setdegreelist={setdegreelist}
            // using context api or moving data states to their main component will be more appropriate
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
