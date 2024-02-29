import React from "react";

const Index = ({serviceslist , setserviceslist}) => {
  return (
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
                setserviceslist(
                  serviceslist.map((record) => {
                    if (record.id == item.id) {
                      return { ...record, ischecked: !record.ischecked };
                    } else {
                      return record;
                    }
                  })
                );

                // setselectedserviceslist(
                //   serviceslist.filter((item) => {
                //     if (item.ischecked == false) {
                //       return false;
                //     } else {
                //       return true;
                //     }
                //   })
                // );
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
  );
};

export default Index;
