import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from "@/components/navbar/index"
import OurAlumni from '@/components/OurAlumnus'
import PopularServices from '@/components/PopularServices'
import PopularSkills from '@/components/PopoularSkills'
import ContactUs from '@/components/contactUs'
import Hero from '@/components/hero'
import About from '@/components/about'
import Logos from '@/components/Logos'





export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurAlumni />
      <PopularServices />
      <PopularSkills />
      <Logos />
      <ContactUs />
    </>


  );
}
