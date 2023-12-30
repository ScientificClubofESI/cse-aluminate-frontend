import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from "@/components/navbar/index"
import About from '@/components/about'




export default function Home() {
  return (
    <>
      <Navbar />
      <About />
    </>
  )
}
