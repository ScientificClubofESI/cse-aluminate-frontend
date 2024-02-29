import React from "react";

const Index = ({ searchedskillslist , addItemtoSelectedList , selectedskillslist , listtoappear}) => {
  return (
    <div>
      <p className=" capitalize text-xl text-neutral-900">suggested skills</p>
      <ul className=" flex flex-wrap gap-3 mt-5">
        {searchedskillslist.length != 0 ? (
          listtoappear().map((item) => {
            return (
              <li
                key={item.id}
                className=" cursor-pointer bg-Primary-50 text-neutral-700 px-5 py-1 rounded-lg"
                onClick={() => {
                  addItemtoSelectedList(item);
                  console.log(selectedskillslist);
                }}
              >
                {item.label}{" "}
              </li>
            );
          })
        ) : (
          <p className=" capitalize">no skill found!</p>
        )}
      </ul>
    </div>
  );
};

export default Index;
