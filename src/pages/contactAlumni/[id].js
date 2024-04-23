import AlumniInfoContact from "@/components/ContactAlumni/AlumniInfoContact/AlumniInfoContact";
import FormContactAlumni from "@/components/ContactAlumni/FormContactAlumni/FormContactAlumni";
import { useEffect, useState } from "react";
import axios from '../../utils/axios'
import { useRouter } from 'next/router'

const ContactAlumni = () => {
    const router = useRouter();
    const { id } = router.query;

    const [alumniInfo, setAlumniInfo] = useState({ services: [] })


    useEffect(() => {
        const getAlumniInfo = async () => {
            if (id) {
                if (process.env.NEXT_PUBLIC_API_URL) {
                    try {
                        const response = await axios.get(`v1/alumni/${id}`);
                        setAlumniInfo({ ...response.data.content, services: ["Workshops", "Training Sessions", "Consulting", "Networking Events"] });
                    } catch (error) {
                        console.error(error);
                    }

                } else {
                    // use mock data
                    setAlumniInfo({
                        fullName: "Mohamed Amine Bengharbia",
                        currentPosition: "Web Developer at Company X",
                        location: "Paris, France",
                        services: [
                            "Workshops",
                            "Training Sessions",
                            "Consulting",
                            "Networking Events",
                        ],
                        linkedin: "https://www.linkedin.com/in/mohamed-bengharbia",
                        email: "la_kasmi@esi.dz",
                        imageUrl: "/alumni3.svg",
                    })
                }
            }
        }

        getAlumniInfo()
    }, [])

    return (
        <div className="flex">
            <AlumniInfoContact alumniInfo={alumniInfo} />
            <FormContactAlumni destination={alumniInfo.email} services={alumniInfo.services} />
        </div>
    );
};

export default ContactAlumni;
