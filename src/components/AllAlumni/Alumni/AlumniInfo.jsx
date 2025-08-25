import Image from 'next/image'
import Link from 'next/link'

const AlumniInfo = ({ id, degree, imageUrl, fullName, services, academicDiploma, universityOfStudy  , Promotion, BirthCity, location, email, linkedin, description, currentPosition }) => {
    return (
        <section className='mt-[200px] mb-[100px] gap-3 w-[80%] mx-auto flex flex-col lg:flex-row'>
            <section className='lg:w-[70%]'>
                <header className='flex gap-2 items-center  '>

                    <Image 
                        src={imageUrl || '/Unknown_person.jpg'} 
                        alt={fullName ? `${fullName} - Alumni Image` : "Alumni Image"} 
                        width={160} 
                        height={160} 
                        className=' rounded-3xl object-cover  w-[160px] h-[160px]' 
                    />



                    <div className=' '>
                        <h1 className='text-[24px] sm:text-3xl md:text-4xl   font-semibold text-neutral-900 mb-2'>{fullName}</h1>
                        <p className='text-Primary-600 font-normal '>{currentPosition}</p>
                        <div>
                            <h1 className='text-Primary-700 text-[20px] font-Outfit px-2 border-[0.9px] max-w-max py-1 bg-white rounded-xl border-Primary-200  font-[400]'>{degree}</h1>
                        </div>
                    </div>

                    {/* <div className='flex flex-row space-x-1 lg:ml-auto col-span-2 lg:col-span-1 row-span-1 lg:justify-end'>
                <img src="/locationicon.svg" alt="location icon" />
                <p className='text-neutral-600 font-light text-xs sm:text-sm md:text-lg lg:text-2xl'>{location}</p>
            </div> */}

                </header>
                <div className='col-span-3 mb-6 lg:col-span-2 row-span-1'>
                    <p className='font-light text-neutral-600 text-center lg:text-left text-sm sm:text-base md:text-lg'>{description}</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:col-span-2 col-span-2 row-span-1'>
                    <div className='text-center lg:text-left flex flex-col text-sm sm:text-base md:text-lg mb-6'>
                        <div className='text-Primary-800 flex justify-center lg:justify-start lg:gap-2'>
                            <p className='font-extralight underline'>LinkedIn :</p>
                            <p className='font-normal'>{linkedin}</p>
                        </div>

                        <div className='text-Secondary-700 flex justify-center lg:justify-start lg:gap-2'>
                            <p className='font-extralight underline'>Email :</p>
                            <p className='font-normal'>
                                <Link href={`mailto:${email}`}>
                                    {email}
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center lg:items-center'>
                        <Link href={`/contactAlumni/${id}`}>
                            <button className='bg-Primary-600 flex flex-row items-center gap-2 py-2 px-4 rounded-2xl '>
                                <p className='text-center font-normal text-white text-xs sm:text-sm md:text-xl'>Contact Alumni</p>
                                <img src="/sendicon.svg" alt="send icon" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='flex flex-col place-content-center border border-1 border-neutral-300 p-5 rounded-lg'>
                <section >
                    <h1 className='text-Primary-700 border-b-2 border-b-Primary-700  p-1 font-Outfit font-bold text-lg'>
                        Origin-Residence
                    </h1>
                    <div className='p-3'>
                        {/* <div>
                            <h2 className='font-[500] text-md text-neutral-700'>Birth City</h2>
                            <p className='font-Outfit text-neutral-600 text-xs font-[300] '>{BirthCity}</p>
                        </div> */}
                        <div className=' flex items-center gap-2'>
                            <h2 className='font-[500] text-md text-neutral-700'>Current Location:</h2>
                            <p className='font-Outfit text-neutral-600 text-xl font-[300] '>{location}</p>
                        </div>
                    </div>

                </section>
                <section>
                    <h1 className='text-Primary-700 border-b-2 border-b-Primary-700  p-1 font-Outfit font-bold text-lg'>
                        Education
                    </h1>
                    <div className='p-3'>
                        {/* <div>
                            <h2 className='font-[500] text-md text-neutral-700'>Promotion</h2>
                            <p className='font-Outfit text-neutral-600 text-xs font-[300] '>{Promotion}</p>
                        </div> */}
                        <div className=' flex items-center' >
                            <h2 className='font-[500] text-md text-neutral-700'>School/University Of Study:</h2>
                            <p className='font-Outfit text-neutral-600 text-xl font-[300] '>{universityOfStudy}</p>
                        </div>
                        {/* <div  >
                            <h2 className='font-[500] text-md text-neutral-700'>Last Academic Diploma:</h2>
                            <p className='font-Outfit text-neutral-600 text-xs font-[300] '>{academicDiploma} </p>
                        </div> */}
                    </div>

                </section>
            </section>
        </section >
    )
}

export default AlumniInfo
