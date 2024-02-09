import React from 'react'
import Image from 'next/image'


const Hero = () => {
    return (
        <section className='px-[5%] lg:px-[8%] flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:grid lg:grid-cols-2 lg:my-[5%]'>

                    <p className='text-4xl lg:text-5xl font-extrabold text-center lg:text-left lg:justify-start'>Connecting Alumni Uniting Dreams</p> 

                    <div className='mx-[8%] h-auto flex justify-center items-center lg:row-span-3'>
                        <div className='rounded-[24px] lg:rounded-[32px] border border-Primary-100 bg-Primary-50 flex justify-center items-center p-2'>
                            <Image src='/heroimage.jpg' width={70} layout="responsive" height={80} className='rounded-2xl lg:rounded-3xl'/>
                        </div>
                    </div>

                    
                
                    <div className='bg-white w-full rounded-[72px] border border-Secondary-50 flex items-center justify-between lg:hidden'>
                        <div className='pl-[36px] py-[12px] flex items-center justify-start'>
                            <img src='searchicon.svg' alt='Search Icon'/>
                            <div className='text-neutral-300 text-neutral text-xs lg:text-lg'>Search</div>
                        </div>

                        <div className='lg:px-[8px] lg:py-[8px]'>
                            <button className='bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6'>
                                <div className='text-xs lg:text-xl font-normal text-white leading-loose tracking-tight'>Find Alumni</div>
                            </button>
                        </div>
                    </div>


                    <p className='font-light text-base text-center lg:text-left'>Welcome to Aluminate, where alumni come together to reignite old connections and embark on exciting journeys of collaboration.</p>

                    <div className='bg-white w-full rounded-[72px] border border-Secondary-50 flex items-center justify-between hidden lg:block lg:flex'>
                        <div className='pl-[36px] py-[12px] flex items-center justify-start'>
                            <img src='searchicon.svg' alt='Search Icon'/>
                            <div className='text-neutral-300 text-neutral text-xs lg:text-lg'>Search</div>
                        </div>

                        <div className='lg:px-[8px] lg:py-[8px]'>
                            <button className='bg-Secondary-500 rounded-[24px] py-2 lg:py-3 px-4 lg:px-6'>
                                <div className='text-xs lg:text-xl font-normal text-white leading-loose tracking-tight'>Find Alumni</div>
                            </button>
                        </div>
                    </div>
            
            
        </section>
    )
}

export default Hero
