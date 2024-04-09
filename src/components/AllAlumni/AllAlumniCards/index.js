import React from 'react'
import AlumniCard from './alumniCard'


const AllAlumniCards = () => {
    return (
        <section className='w-[95%] items-center justify-center mx-auto gap-7 flex flex-wrap'>
            <AlumniCard degree={"Academic"} />
            <AlumniCard degree={"Professional"} />
            <AlumniCard degree={"Professional"} />

            <AlumniCard degree={"Academic"} />
        </section>
    )
}

export default AllAlumniCards
