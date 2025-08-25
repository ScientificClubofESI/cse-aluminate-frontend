import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AlumniCard = ({ id, degree, imageUrl, fullName, services, academicDiploma, SchoolName, Promotion, BirthCity, currentLocation, email, linkedin, description, currentPosition }) => {

    const degreeArray = [
        "Academic", "Professional"
    ]

    const servicessArray = [
        "Workshops", "Networking", "Internship", "Job Opportunities",
        "Mentoring Program"
    ]

    return (
        <div className='bg-white shadow-1 rounded-xl w-[550px] space-y-2  px-[24px] py-[24px]'>
            <header className='flex gap-[20px]  '>
                <div className='text-center'>
                    <Image 
                        className='w-[100px] h-[100px] object-cover rounded-lg' 
                        height={100} 
                        width={100} 
                        src={imageUrl || '/Unknown_person.jpg'} 
                        alt={fullName || 'Alumni'}
                    />
                    {/* <h3 className='text-[12px] p-1 text-neutral-700 font-[400] font-Outfit'>Promo : E{Promotion}</h3> */}
                </div>
                <div className=' '>
                    <div className='flex flex-col'>
                        {/*Name*/}
                        <h1 className='text-neutral-900 font-[600] text-[20px]'>
                            {fullName}
                        </h1>
                        {/* description */}
                        <h2 className=' text-Primary-600 font-[400] text-[12px]'>
                            {currentPosition}
                        </h2>
                        <h3 className='text-neutral-700 font-Outfit font-[300] text-[14px]'>
                            {currentLocation}
                        </h3>
                    </div>
                    {/* degree */}

                </div>
                {
                    <div>
                        <h3 className={`${degree === "Professional" ? "text-Secondary-600  bg-Secondary-50" : "text-Primary-600 bg-Primary-100"} font-Outfit rounded-[10px] px-3 py-1 text-Secondary-600 text-[14px] font-[400]`}>
                            {degree}
                        </h3>
                    </div>
                }

                {/* degree */}
                {/* <div className='flex mt-2 gap-[8px] '>
                    {
                        degreeArray.map((deg) => {
                            const isDeg = deg === degree;
                            return (
                                <div className={`flex text-center w-5   flex-col items-center`
                                } >

                                    <div className={`w-5 h-5 ${isDeg ? "bg-Primary-700" : "bg-Primary-100"}`}>
                                    </div>
                                    <h5 className='font-Outfit text-[12px] font-[200] text-Primary-700'>
                                        {isDeg ? degree : ""}
                                    </h5>
                                </div>

                            )
                        })
                    }
                </div> */}
            </header>
            {/* information */}
            <p className=" md:block text-neutral-600 text-[14px] font-extralight  ">
                {description}
            </p>
            {/* services */}
            <section >
                <h3 className='text-Secondary-700 text-[18px] '>Services</h3>
                {/* line */}
                <h6 className='bg-Secondary-700 w-full h-[0.5px]' >
                </h6>
                <div className="flex my-[10px]  flex-wrap">
                    {
                        services?.map(service => {
                            return (
                                <div key={service.id} className='flex mr-[24px]  gap-[4px]  text-xs   items-center'>

                                    <Image src="/Check.svg" width={16} height={20} />

                                    <h6 className="font-extralight text-[12px] text-neutral-800">{service.name}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* buttons  */}
            <div div className='flex justify-center gap-2' >
                <Link href={`/allalumni/alumni/${id}`}> <button className='px-[20px] py-[8px] rounded-2xl text-white text-[16px] bg-Primary-600'>Visit Profile</button></Link>
                <Link href={`/contactAlumni/${id}`}><button className='px-[20px] py-[8px] underline text-[14px] text-Primary-500'>Contact Alumni</button></Link>
            </div>
        </div>
    )
}

export default AlumniCard
