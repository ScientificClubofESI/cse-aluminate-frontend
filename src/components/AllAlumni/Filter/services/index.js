import React from "react";

const Index = ({
  serviceslist,
  setserviceslist,
  setselectedserviceslist,
  setfinal_data,
}) => {
  return (
    <>
      <p className=" capitalize text-Primary-800 text-3xl">services</p>
      <hr className=" h-[1.5px] bg-Primary-800 mt-1" />
      <ul className=" flex place-content-around gap-5 flex-wrap">
        {serviceslist.map((item) => {
          return (
            <li className=" " key={item.id}>
              <input
                type="checkbox"
                name="services"
                id={item.label}
                value={item.label}
                checked={item.ischecked}
                onChange={() => {
                  setserviceslist((prevServicesList) => {
                    const updatedList = prevServicesList.map((record) => {
                      if (record.id === item.id) {
                        return { ...record, ischecked: !record.ischecked };
                      } else {
                        return record;
                      }
                    });

                    setselectedserviceslist((prevSelectedServicesList) => {
                      const updatedSelectedList = updatedList.filter(
                        (item) => item.ischecked
                      );
                      setfinal_data((prevFinalData) => {
                        return {
                          ...prevFinalData,
                          services: updatedSelectedList,
                        };
                      });
                      return updatedSelectedList;
                    });

                    return updatedList;
                  });
                }}
                className="text-green-500 bg-purple-200 p-2 rounded-md border-2 border-green-500"
                style={{
                  backgroundColor: "green",
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
