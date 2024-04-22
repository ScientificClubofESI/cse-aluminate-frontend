import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/lendingPage/navbar/index";
import OurAlumni from "@/components/lendingPage/OurAlumnus";
import PopularServices from "@/components/lendingPage/PopularServices";
import PopularSkills from "@/components/lendingPage/PopoularSkills";
import ContactUs from "@/components/lendingPage/contactUs";
import Hero from "@/components/lendingPage/hero";
import About from "@/components/lendingPage/about";
import ContactAlumni from "./contactAlumni";
import Logos from "@/components/lendingPage/Logos";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Logos />
            <PopularServices />
            <PopularSkills />
            <OurAlumni />
            <ContactUs />
            {/* <ContactAlumni /> */}
        </>
    );
}
