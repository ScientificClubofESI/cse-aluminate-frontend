import AlumniInfo from '@/components/AllAlumni/Alumni/AlumniInfo'
import Degree from '@/components/AllAlumni/Alumni/Degree'
import Programs from '@/components/AllAlumni/Alumni/Programs'
import Skills from '@/components/AllAlumni/Alumni/Skills'
import Services from '@/components/AllAlumni/Alumni/servicess'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from '../../../utils/axios'

const ALumni = () => {
    const router = useRouter();
    const { id } = router.query;

    const [alumniInfo, setAlumniInfo] = useState({ services: [] });

    useEffect(() => {
        if (id) {
            // fetch data from the backend
            const getAlumniInfo = async () => {
                if (process.env.NEXT_PUBLIC_API_URL) {
                    try {
                        const response = await axios.get(`v1/alumni/${id}`);
                        console.log("response", response);
                        setAlumniInfo({ ...response.data.content, services: ["Workshops", "Training Sessions", "Consulting", "Networking Events"] });
                    } catch (error) {
                        console.error(error);
                    }
                };
            };

            getAlumniInfo();
        } else {
            // use mock data
            setAlumniInfo({
                fullName: "Mohamed Amine Bengharbia",
                currentPosition: "Web Developer at Company X",
                imageUrl: "/alumni3.svg",
                email: "hello@world.com",
                location: "Paris, France",
                description: "I am a full-stack web developer with 5 years of experience in the field. I have worked with multiple companies and startups in the past and I am currently working as a freelancer.",
                services: [
                    "Workshops",
                    "Training Sessions",
                    "Consulting",
                    "Networking Events",
                ],
                linkedin: "https://www.linkedin.com/in/mohamed-bengharbia",
            });
        }
    }, [id]);


    return (
        <section >
            <AlumniInfo id={alumniInfo.id} fullName={alumniInfo.fullName} imageUrl={alumniInfo.imageUrl} currentPosition={alumniInfo.currentPosition} location={alumniInfo.location} description={alumniInfo.description} email={alumniInfo.email} />
            {/* <Degree degree={"Student"} /> */}
            <Services />
            {/* <Degree />
            <Skills />
            <Services />
            <Programs /> */}
        </section>
    )
}

export default ALumni
