
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
//                         <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 text-[24px] font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide >
//                     <div className='w-[300px]  '>
//                         <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 text-[24px] font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide >
//                     <div className='w-[300px]  '>
//                         <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//                         <h1 className='text-neutral-900 text-[24px] font-bold'>
//                             Arthut Donane coyle
//                         </h1>
//                         <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//                         <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OurAlumni
// import Image from 'next/image'
// import React from 'react'
// // import Carousel from 'react-material-ui-carousel'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500
// };
// const OurAlumnus = () => {
//     return (
//         <div className="slider-container">
//             <Slider >
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//             </Slider>
//         </div>
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Icon } from "@mui/material";
import Link from "next/link";

export default function OurAlumni() {
    const array = [1, 2, 3];
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;


        return (

            <div className="max-w-max hidden lg:block absolute cursor-pointer -right-12 top-[50%] bottom-[50%]  ">
                <Image
                    src={"/arrow-circle-right.svg"}
                    width={48}
                    height={48}
                    className={` `}
                    style={{ ...style, display: "block", background: "", height: "48px", width: "48px" }}
                    onClick={onClick}
                />
            </div>

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Image
                className={"max-w-max absolute cursor-pointer -left-12 top-[50%] bottom-[50%]"}
                style={{ display: "block", backgroundColor: "", height: "48px", width: "48px", right: "20px" }}
                src={"/arrow-drop-circle-left.svg"}
                width={48}
                height={48}
                onClick={onClick}
            />

        );
    }

    let settings = {
        arrows: true,
        className: "center",
        centerMode: false,
        infinite: true,
        centerMargin: 10,
        slidesToShow: 3,
        speed: 500,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    centerMode: false,

                }
            },

            {
                breakpoint: 650,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerMargin: 10,
                    slidesToShow: 1,
                    speed: 500,
                }
            }

        ]
    };


    return (
        <div className="slider-container  my-10  max-w-max mx-auto">
            <Slider className=""  {...settings}>


                {
                    array.map((e) => {
                        return (
                            <div className='bg-white p-[16px] border-[2px] rounded-[24px] border-neutral-100'>
                                <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
                                <h1 className='text-neutral-900 text-[24px] font-bold'>
                                    Arthut Donane coyle
                                </h1>
                                <h3 className='text-Primary-600 text-[18px] font-light'>UI/UX Designer at Company X</h3>
                                <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
                                <Link href={""}>
                                    <h4 className="font-Outfit font-[600] text-[20px] text-Primary-600 max-w-max mx-auto">See More</h4>
                                </Link>
                            </div>)
                    })
                }

            </Slider>
        </div>
    );
}

// <div className='w-[80%] mx-auto'>
//     <Slider {...settings} className='mx-auto bg-white rounded-md items-center flex flex-col justify-center p-10'>
//         <div className='w-[300px]  '>
//             <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//             <h1 className='text-neutral-900 text-[24px] font-bold'>
//                 Arthut Donane coyle
//             </h1>
//             <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//             <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//         </div>
//         <div className='w-[300px]  '>
//             <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//             <h1 className='text-neutral-900 text-[24px] font-bold'>
//                 Arthut Donane coyle
//             </h1>
//             <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//             <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//         </div>
//         <div className='w-[300px]  '>
//             <Image className='w-full h-full rounded-[24px] object-cover' src={"/alumni3.svg"} width={100} height={100} />
//             <h1 className='text-neutral-900 text-[24px] font-bold'>
//                 Arthut Donane coyle
//             </h1>
//             <h3 className='text-Primary-600text-[18px] font-light'>UI/UX Designer at Company X</h3>
//             <p className='text-neutral-600 font-extralight text-[16px] '>Arthur is a highly skilled and creative UI/UX designer with a passion for creating exceptional digital experiences. He worked at Company X for over five years and  he led design sprints, conducted user research and testing at Startup Y ...</p>
//         </div>
//     </Slider>
// </div>
//     )
// }


