import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const AlumniInfo = () => {
    return (
        <section className='mt-20 px-[5%] md:px[8%] py-10 items-center lg:items-start space-x-4 lg:space-y-3 grid grid-cols-2 lg:grid-cols-3 grid-rows-3 md:gap-x-8'>
            <div className='flex col-span-1 row-span-2 lg:row-span-3 lg:col-span-1 lg:justify-between lg:items-center mb-6'>
                <Image src="/allumniimg.png" alt="Alumni Image" width={70} layout="responsive" height={80} className='rounded-2xl md:rounded-3xl' />
            </div>

            <div className='flex flex-col col-span-1 row-span-1 relative top-0'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-extrabold font-semibold text-neutral-900 mb-2 md:mb-3'>Emily Johnson</h1>
                <p className='text-Primary-600 font-normal text-sm sm:text-lg md:text-2xl lg:text-3xl'>Web Developer</p>
            </div>

            <div className='flex flex-row space-x-1 lg:ml-auto col-span-2 lg:col-span-1 row-span-1 lg:justify-end'>
                <img src="/locationicon.svg" alt="location icon" />
                <p className='text-neutral-600 font-light text-xs sm:text-sm md:text-lg lg:text-2xl'>Paris, France</p>
            </div>

            <div className='col-span-3 mb-6 lg:col-span-2 row-span-1'>
                <p className='font-light text-neutral-600 text-center lg:text-left text-sm sm:text-base md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in luctus elit. Maecenas non risus sapien. Phasellus ultrices libero vel erat laoreet, nec aliquam ex scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in luctus elit. Maecenas non risus sapien. Phasellus ultrices libero vel erat laoreet, nec aliquam ex scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:col-span-2 col-span-2 row-span-1'>
                <div className='text-center lg:text-left flex flex-col text-sm sm:text-base md:text-lg mb-6'>
                    <div className='text-Primary-800 flex justify-center lg:justify-start lg:gap-2'>
                        <p className='font-extralight underline'>LinkedIn :</p>
                        <p className='font-normal'>Mohammed Bengharbia</p>
                    </div>

                    <div className='text-Secondary-700 flex justify-center lg:justify-start lg:gap-2'>
                        <p className='font-extralight underline'>Email :</p>
                        <p className='font-normal'>im_bengharbia@esi.dz</p>
                    </div>
                </div>

                <div className='flex justify-center lg:items-center'>
                    <Link href={"/contactAlumni"}> <button className='bg-Primary-600 flex flex-row items-center gap-2 py-2 px-4 rounded-2xl '>
                        <p className='text-center font-normal text-white text-xs sm:text-sm md:text-xl'>Contact Alumni</p>
                        <img src="/sendicon.svg" alt="send icon" />
                    </button>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default AlumniInfo
