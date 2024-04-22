import AlumniInfoContact from "@/components/ContactAlumni/AlumniInfoContact/AlumniInfoContact";
import FormContactAlumni from "@/components/ContactAlumni/FormContactAlumni/FormContactAlumni";
import { useEffect, useState } from "react";
import axios from '../../utils/axios'

const ContactAlumni = () => {
    const id = 8; //get it from the dynamic route
    const [alumniInfo, setAlumniInfo] = useState({ services: [] })

    const getAlumniInfo = async () => {
        if (process.env.NEXT_PUBLIC_API_URL) {
            try {
                const response = await axios.get(`v1/alumni/${id}`);
                setAlumniInfo({...response.data.content, services: ["Workshops", "Training Sessions", "Consulting", "Networking Events"]});
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
                imageUrl: "./Assets/Alumni.png",
            })
        }
    }

    useEffect(() => {
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
