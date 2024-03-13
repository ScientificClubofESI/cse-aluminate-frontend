
// // import React from 'react'

// // const OurAlumni = () => {
// //     return (
// //         <section>

// //         </section>
// //     )
// // }

// // export default OurAlumni
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Image from 'next/image';



// const OurAlumni = () => {
//     return (
//         <div className=' mx-auto w-[70%] '>
//             <Swiper
//                 className=''
//                 modules={[Navigation, Pagination]}
//                 slidesPerView={1}
//                 navigation
//                 loop={true}
//                 grabCursor={true}
//                 onSlideChange={() => console.log('slide change')}
//             >
//                 <SwiperSlide >
//                     <div className='w-[300px]  '>
//                         <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide >
//                     <div className='w-[300px]  '>
//                         <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide >
//                     <div className='w-[300px]  '>
//                         <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OurAlumni
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

const OurAlumnus = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Carousel className='mx-auto bg-white rounded-md items-center flex flex-col justify-center p-10'>
                <div className='w-[300px]  '>
                    <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
                    <h1 className='text-neutral-900 font-bold'>
                        Arthut Donane coyle
                    </h1>
                    <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
                    <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
                </div>
                <div className='w-[300px]  '>
                    <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
                    <h1 className='text-neutral-900 font-bold'>
                        Arthut Donane coyle
                    </h1>
                    <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
                    <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
                </div>
                <div className='w-[300px]  '>
                    <Image className='w-full h-full object-cover' src={"/alumni3.svg"} width={100} height={100} />
                    <h1 className='text-neutral-900 font-bold'>
                        Arthut Donane coyle
                    </h1>
                    <h3 className='text-Primary-600 font-light'>UI/UX Designer at Company X</h3>
                    <p className='text-neutral-600 font-extralight '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
                </div>
            </Carousel>
        </div>
    )
}

export default OurAlumnus
