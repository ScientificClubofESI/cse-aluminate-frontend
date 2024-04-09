import AlumniInfo from '@/components/AllAlumni/Alumni/AlumniInfo'
import Degree from '@/components/AllAlumni/Alumni/Degree'
import Programs from '@/components/AllAlumni/Alumni/Programs'
import Skills from '@/components/AllAlumni/Alumni/Skills'
import Services from '@/components/AllAlumni/Alumni/servicess'
import React from 'react'

const ALumni = () => {
    return (
        <section >
            <AlumniInfo />
            <Degree degree={"Student"} />
            <Degree />
            <Services />
            {/* <Degree />
            <Skills />
            <Services />
            <Programs /> */}
        </section>

    )
}

export default ALumni
