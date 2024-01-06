import React from 'react'
import Image from 'next/image'


const Hero = () => {
    return (
        <section className='px-[8%] w-full h-auto flex justify-between my-[5%]'>
            <div className='w-5/12 h-auto flex flex-col justify-between'>
                <div className='w-full text-neutral-900 mb-8'>
                    <h1 className='pb-4'>Connecting Alumni Uniting Dreams</h1> 
                    <p className='font-light text-2xl'>Welcome to Aluminate, where alumni come together to reignite old connections and embark on exciting journeys of collaboration.</p>
                </div>

                <div className='w-full'>
                    <div className='bg-white rounded-[72px] border border-Secondary-50 flex items-center justify-between'>
                        <div className='pl-[36px] py-[12px] flex items-center justify-start'>
                            <img src='searchicon.svg' alt='Search Icon'/>
                            <div className='text-neutral-300 text-lg'>Search</div>
                        </div>

                        <div className='px-[8px] py-[8px]'>
                            <button className='bg-Secondary-500 rounded-[24px] py-3 px-6'>
                                <div className='text-xl font-normal text-white leading-loose tracking-tight'>Find Alumni</div>
                            </button>
                        </div>

                    </div>
                </div>    
            </div>


            <div className='w-1/2 h-auto flex justify-center items-center'>
                <div className='rounded-[39px] border border-Primary-100 bg-Primary-50 flex justify-center items-center p-4'>
                    <Image src='/heroimage.jpg' width={70} layout="responsive" height={80} className='rounded-3xl'/>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
