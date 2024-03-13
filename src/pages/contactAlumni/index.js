import AlumniInfoContact from "@/components/ContactAlumni/AlumniInfoContact/AlumniInfoContact";
import FormContactAlumni from "@/components/ContactAlumni/FormContactAlumni/FormContactAlumni";
import React from "react";

const ContactAlumni = () => {
  return (
    <div className="flex">
      <AlumniInfoContact />
      <FormContactAlumni />
    </div>
  );
};

export default ContactAlumni;
