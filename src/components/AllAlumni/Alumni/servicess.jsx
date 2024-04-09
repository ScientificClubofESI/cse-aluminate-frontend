import Image from 'next/image'
import React from 'react'

const Services = () => {
    const servicessArray = ["Internships", "Internships", "Internships", "Internships"]
    return (
        <div className='w-[70%]  bg-white p-1 rounded-md '>
            <h1 className='text-Primary-700  w-full border-b-[1px] p-1 border-b-Primary-700 font-Outfit text-[20px] font-[500]'>Services</h1>

            {
                servicessArray.map((serv) => {
                    return <div className='flex w-max-w items-center gap-2 '>
                        <Image width={8} height={8} src={"/Polygon13.svg"} />

                        <h3 className='font-Outfit p-1 text-neutral-900 font-[300] text-[20px]'>
                            {serv}
                        </h3>
                    </div>
                })
            }
        </div>
    )
}

export default Services
