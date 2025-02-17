import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useAlumni } from "@/utils/fetchData";

export default function OurAlumni() {
    const { data, isLoading, isError, error } = useAlumni();

    // Dynamically calculate slidesToShow based on the number of items
    const slidesToShow = Math.min(data?.content?.length || 1, 3); // Max of 3 slides

    const settings = {
        arrows: true,
        className: "center",
        centerMode: false,
        infinite: data?.content?.length > 1, // Only enable infinite if there are multiple slides
        centerMargin: 10,
        slidesToShow: slidesToShow, // Dynamic slidesToShow
        speed: 500,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(slidesToShow, 2), // Max of 2 slides on medium screens
                    slidesToScroll: 1,
                    infinite: data?.content?.length > 1,
                    dots: false,
                    centerMode: false,
                    arrows: true, // Ensure arrows are visible on medium screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Always show 1 slide on small screens
                    slidesToScroll: 1,
                    infinite: data?.content?.length > 1,
                    dots: false,
                    centerMode: true,
                    arrows: true, // Ensure arrows are visible on small screens
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Always show 1 slide on extra small screens
                    slidesToScroll: 1,
                    infinite: data?.content?.length > 1,
                    dots: false,
                    centerMode: true,
                    arrows: false, // Hide arrows on extra small screens
                }
            }
        ]
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <section id="allumnus" className="px-4">
            <h1
                className="text-center p-12 font-bold font-12"
                style={{ fontSize: "48px" }}
            >
                Our Alumnis
            </h1>
            <div className="slider-container my-10 mx-auto w-full max-w-6xl relative md:flex md:place-content-center">
                <Slider key={data?.content?.length || "default"} {...settings}>
                    {data?.content?.length > 0 ? (
                        data.content.map(alumnus => (
                            <div key={alumnus.id} className='bg-white p-[16px] border-[2px] rounded-[24px] border-neutral-100'>
                                <div className="relative w-full h-[350px]">
                                    <Image 
                                        layout="fill"
                                        className='object-cover rounded-[24px]' 
                                        src={alumnus.imageUrl} 
                                        alt={alumnus.fullName} 
                                    />
                                </div>
                                <h1 className='text-neutral-900 text-[24px] font-bold mt-4'>
                                    {alumnus.fullName}
                                </h1>
                                <h3 className='text-Primary-600 text-[18px] font-light'>{alumnus.currentPosition}</h3>
                                <p className='text-neutral-600 font-extralight text-[16px]'>{alumnus.description}</p>
                                <Link href={`/allalumni/alumni/${alumnus.id}`}>
                                    <h4 className="font-Outfit font-[600] text-[20px] text-Primary-600 max-w-max mx-auto mt-4">See More</h4>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No alumni data available.</p>
                    )}
                </Slider>
            </div>
        </section>
    );
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="hidden md:block absolute cursor-pointer -right-12 top-[50%] transform -translate-y-1/2">
            <Image
                src={"/arrow-circle-right.svg"}
                alt="right-arrow"
                width={48}
                height={48}
                onClick={onClick}
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="hidden md:block absolute cursor-pointer -left-12 top-[50%] transform -translate-y-1/2">
            <Image
                src={"/arrow-drop-circle-left.svg"}
                alt="left-arrow"
                width={48}
                height={48}
                onClick={onClick}
            />
        </div>
    );
}