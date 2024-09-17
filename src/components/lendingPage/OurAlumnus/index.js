import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from '../../../utils/axios'

export default function OurAlumni() {
    const [alumni, setAlumni] = useState([{}, {}, {}]);

    useEffect(() => {
        // fetch alumni data
        const fetchAlumni = async () => {
            if (process.env.NEXT_PUBLIC_API_URL) {
                try {
                    const response = await axios.get("v1/alumni");
                    const alumniData = response.data.content;
                    console.log(alumniData);
                    setAlumni(alumniData);

                } catch (error) {
                    console.error("Error fetching alumni data: ", error);
                };

            } else {
                // use mock data
                setAlumni([
                    {
                        fullName: "Mohamed Amine Bengharbia",
                        currentPosition: "Web Developer at Company X",
                        imageUrl: "/alumni3.svg",
                        description: "I am a full-stack web developer with 5 years of experience in the field. I have worked with multiple companies and startups in the past and I am currently working as a freelancer.",
                        id: 1
                    },
                    {
                        fullName: "Mohamed Amine Bengharbia",
                        currentPosition: "Web Developer at Company X",
                        imageUrl: "/alumni3.svg",
                        description: "I am a full-stack web developer with 5 years of experience in the field. I have worked with multiple companies and startups in the past and I am currently working as a freelancer.",
                        id: 2
                    },
                    {
                        fullName: "Mohamed Amine Bengharbia",
                        currentPosition: "Web Developer at Company X",
                        imageUrl: "/alumni3.svg",
                        description: "I am a full-stack web developer with 5 years of experience in the field. I have worked with multiple companies and startups in the past and I am currently working as a freelancer.",
                        id: 3
                    }
                ]);
            }
        }

        fetchAlumni();
    }, []);

    function SampleNextArrow(props) {
        const { style, onClick } = props;

        return (
            <div className="max-w-max hidden lg:block absolute cursor-pointer -right-12 top-[50%] bottom-[50%]  ">
                <Image
                    src={"/arrow-circle-right.svg"}
                    alt="right-arrow"
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
        const { onClick } = props;
        return (
            <Image
                className={"max-w-max absolute cursor-pointer -left-12 top-[50%] bottom-[50%]"}
                style={{ display: "block", backgroundColor: "", height: "48px", width: "48px", right: "20px" }}
                src={"/arrow-drop-circle-left.svg"}
                alt="left-arrow"
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
                    alumni.map(alumnus => {
                        return (
                            <div key={alumnus.fullName} className='bg-white p-[16px] border-[2px] rounded-[24px] border-neutral-100'>
                                <Image className='w-full h-full rounded-[24px] object-cover' src={alumnus.imageUrl} alt="" width={100} height={100} />
                                <h1 className='text-neutral-900 text-[24px] font-bold'>
                                    {alumnus.fullName}
                                </h1>
                                <h3 className='text-Primary-600 text-[18px] font-light'>{alumnus.currentPosition}</h3>
                                <p className='text-neutral-600 font-extralight text-[16px] '>{alumnus.description}</p>
                                <Link href={`/allalumni/alumni/${alumnus.id}`}>
                                    <h4 className="font-Outfit font-[600] text-[20px] text-Primary-600 max-w-max mx-auto">See More</h4>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}
