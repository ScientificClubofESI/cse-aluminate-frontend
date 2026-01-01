import Image from 'next/image'
import Link from 'next/link'

const AlumniInfo = ({ id, degree, imageUrl, fullName, services, academicDiploma, universityOfStudy  , Promotion, BirthCity, location, email, linkedin, description, currentPosition }) => {
    return (
        <section className='pt-[172px] mb-[100px] gap-10 w-[80%] mx-auto flex flex-col lg:flex-row '>
            <section className='lg:w-[70%]'>
                <header className='flex gap-3 items-center  mb-3'>

                    <Image 
                        src={imageUrl || '/Unknown_person.jpg'} 
                        alt={fullName ? `${fullName} - Alumni Image` : "Alumni Image"} 
                        width={160} 
                        height={160} 
                        className=' rounded-3xl object-cover  w-[160px] h-[160px]' 
                    />

                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[24px] sm:text-3xl md:text-4xl   font-semibold text-neutral-900'>{fullName}</h1>
                        <p className='text-Primary-600 font-Outfit '>{currentPosition}</p>
                        <div>
                            <h1 className='text-Primary-700 text-sm sm:text-base md:text-lg lg:text-lg font-Outfit px-2 sm:px-3 border-[0.9px] max-w-max py-1 sm:py-2 bg-white rounded-[100px] border-Primary-200 font-[400]'>{degree}</h1>
                        </div>
                    </div>

                </header>
                <div className='col-span-3 mb-6 lg:col-span-2 row-span-1'>
                    <p className='font-light text-neutral-600 text-center lg:text-left text-sm sm:text-base md:text-lg'>{description}</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:col-span-2 col-span-2 row-span-1'>
                    <div className='text-center lg:text-left flex flex-col text-sm sm:text-base md:text-lg mb-6'>
                        <div className='text-Primary-800 flex justify-center lg:justify-start lg:gap-2'>
                            <p className='font-extralight underline'>LinkedIn :</p>
                            <Link href={`${linkedin}`} target="_blank" className='font-normal'>{fullName}</Link>
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

            {/* Sidebar Section */}
            <aside className='lg:w-[30%] space-y-6'>
                {/* Origin-Residence Card */}
                <div className='bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden'>
                    <h3 className='text-Primary-700 bg-Primary-50 border-b-2 border-b-Primary-700 px-5 py-3 font-bold text-lg'>
                        Origin-Residence
                    </h3>
                    <div className='p-5 space-y-3'>
                        <div className='space-y-1'>
                            <h4 className='font-medium text-sm text-neutral-500 uppercase tracking-wide'>Current Location</h4>
                            <p className='font-Outfit text-neutral-700 text-lg font-normal'>{location}</p>
                        </div>
                    </div>
                </div>

                {/* Education Card */}
                <div className='bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden'>
                    <h3 className='text-Primary-700 bg-Primary-50 border-b-2 border-b-Primary-700 px-5 py-3 font-bold text-lg'>
                        Education
                    </h3>
                    <div className='p-5 space-y-3'>
                        <div className='space-y-1'>
                            <h4 className='font-medium text-sm text-neutral-500 uppercase tracking-wide'>University</h4>
                            <p className='font-Outfit text-neutral-700 text-base font-normal leading-relaxed'>{universityOfStudy}</p>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default AlumniInfo
