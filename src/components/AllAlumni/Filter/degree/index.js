import React from "react";
import Image from "next/image";
import xiconblack from "/public/xbuttonblack.svg";

const Index = ({
  setisfiltersection,
  degreelist,
  setdegreelist,
  setselecteddegreelist,
  setfinal_data,
}) => {
  return (
    <>
      <div className=" flex place-content-between">
        <p className=" capitalize text-Primary-800 text-3xl">degree</p>
        <button
          onClick={() => {
            setisfiltersection(false);
          }}
        >
          {" "}
          <Image alt="xiconbutton" className="" src={xiconblack} />
        </button>
      </div>
      <hr className=" h-[1.5px] bg-Primary-800 mt-1" />
      <ul className=" flex place-content-start gap-10">
        {degreelist.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                name="degree"
                id={item.label}
                value={item.label}
                checked={item.ischecked}
                onChange={() => {
                  setdegreelist((prevDegreeList) => {
                    const updatedList = prevDegreeList.map((record) => {
                      if (record.id === item.id) {
                        return { ...record, ischecked: !record.ischecked };
                      } else {
                        return record;
                      }
                    });

                    setselecteddegreelist((prevSelectedDegreeList) => {
                      const updatedSelectedList = updatedList.filter(
                        (item) => item.ischecked
                      );

                      setfinal_data((prevFinalData) => {
                        return {
                          ...prevFinalData,
                          degree: updatedSelectedList,
                        };
                      });

                      return updatedSelectedList;
                    });

                    return updatedList;
                  }); // because of the nature of setstate (asyncronus)
                }}
              />
              {/* we can replace the input with div and display the bg color*/}
              <label htmlFor={item.label} className=" capitalize text-xl">
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Index;
