import AlumniInfo from "@/components/AllAlumni/Alumni/AlumniInfo";
import Degree from "@/components/AllAlumni/Alumni/Degree";
import Programs from "@/components/AllAlumni/Alumni/Programs";
import Skills from "@/components/AllAlumni/Alumni/Skills";
import Services from "@/components/AllAlumni/Alumni/servicess";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useAlumniId } from "@/utils/fetchData";
import Loading from "@/components/LOADING/Loading";
import ErrorLayout from "@/components/ERROR/Error";

const ALumni = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error, isSuccess } = useAlumniId(id);
  const [alumniInfo, setAlumniInfo] = useState({ services: [] });
  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    return <ErrorLayout />;
  }
  console.log("data from alumni profile page : ", { data });

  return (
    <section>
      <AlumniInfo key={data?.content.id} {...data?.content} />
      {/* <Degree degree={"Student"} /> */}
      <Services services={data?.content.services} />
      {/* <Degree />
            <Skills />
            <Services />
            <Programs /> */}
    </section>
  );
};

export default ALumni;
