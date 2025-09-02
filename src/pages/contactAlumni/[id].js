import AlumniInfoContact from "@/components/ContactAlumni/AlumniInfoContact/AlumniInfoContact";
import FormContactAlumni from "@/components/ContactAlumni/FormContactAlumni/FormContactAlumni";
import { useEffect, useState } from "react";
import axios from '../../utils/axios'
import { useRouter } from 'next/router'
import { useAlumniId } from "@/utils/fetchData";
import Loading from "@/components/LOADING/Loading";
import ErrorLayout from "@/components/ERROR/Error";

const ContactAlumni = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, isError, error } = useAlumniId(id);
    const [alumniInfo, setAlumniInfo] = useState({ services: [] })
    console.log({ data });

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <div>{...error.message}</div>
    }

    return (
        <div className="flex flex-col lg:flex-row mt-[100px] lg:mt-[200px] px-4 lg:px-0">
            <AlumniInfoContact alumniInfo={data?.content} />
            <FormContactAlumni destination={data?.content.email} services={data?.content.services} />
        </div>
    );
};

export default ContactAlumni;
