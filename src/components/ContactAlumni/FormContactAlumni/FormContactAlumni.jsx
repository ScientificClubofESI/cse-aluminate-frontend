import React from "react";

const FormContactAlumni = ({ handleSubmit }) => {
  const services = [
    { id: "service1", value: "Workshops", label: "Workshops" },
    {
      id: "service2",
      value: "Internship",
      label: "Internship",
    },
    { id: "service3", value: "Internship", label: "Internship" },
    { id: "service3", value: "job opportunities", label: "job opportunities" },
    { id: "service3", value: "Mentoring program", label: "Mentoring program" },
    { id: "service3", value: "Networking", label: "Networking" },
  ];
  return (
    <div className="grid gap-8 p-5 justify-items-center content-center">
      <p className="text-2xl font-medium text-Primary-600">
        Please fill this form
      </p>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid gap-4">
          <div className="flex gap-4">
            <div className="grid">
              <label htmlFor="name" className="m-2 ">
                Full name*
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your full name"
                className="py-2 px-3  radius-5 font-light rounded-lg"
              />
            </div>
            <div className="grid">
              <label htmlFor="email" className="m-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="px-3 py-2  font-light rounded-lg"
              />
            </div>
          </div>
          <div className="grid">
            <label htmlFor="object" className="m-2">
              Object*
            </label>
            <input
              type="text"
              id="object"
              className="px-3 py-2 rounded-lg font-light"
              placeholder=" Define breifly your object "
            />
          </div>
          <label className="m-2 mt-0">Choose a service*</label>

          <div className="flex gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="gap-1 flex white-space:nowrap items-center"
              >
                <input
                  type="radio"
                  id={service.id}
                  name="service"
                  value={service.value}
                  className="accent-Secondary-600"
                />
                <label
                  htmlFor={service.id}
                  className="flex-wrap font-light whitespace-nowrap"
                >
                  {service.label}
                </label>
              </div>
            ))}
          </div>
          <div className="grid">
            <label htmlFor="" className="m-2 mt-0">
              Description*
            </label>
            <input
              type="text"
              placeholder="Define breifly your object"
              className="pb-[20vh] pt-2 px-3 rounded-lg font-light flex items-start justify-start"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContactAlumni;
