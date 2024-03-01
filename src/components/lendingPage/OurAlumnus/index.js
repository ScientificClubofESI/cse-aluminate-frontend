// import React from 'react'

// const OurAlumni = () => {
//     return (
//         <section>

//         </section>
//     )
// }

// export default OurAlumni
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';



const OurAlumni = () => {
    return (
        <div className=' mx-auto w-[70%]'>
            <Swiper

                modules={[Navigation, Pagination]}

                slidesPerView={3}
                navigation
                loop={true}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide >
                    <div className='w-[300px] h-[]'>
                        <Image className='w-full h-full object-cover' src={"/alumni1.svg"} width={100} height={100} />
                    </div></SwiperSlide>
                <SwiperSlide >
                    <div className='w-[300px]  '>
                        <Image className='w-full h-full object-cover' src={"/alumni1.svg"} width={100} height={100} />

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-[300px]  '>
                        <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-[300px] '>
                        <Image className='w-full h-full object-cover' src={"/alumni2.svg"} width={100} height={100} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OurAlumni