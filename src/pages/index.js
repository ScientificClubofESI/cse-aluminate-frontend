import Navbar from "@/components/lendingPage/navbar/index";
import OurAlumni from "@/components/lendingPage/OurAlumnus";
import PopularServices from "@/components/lendingPage/PopularServices";
// import PopularSkills from "@/components/lendingPage/PopoularSkills";
import ContactUs from "@/components/lendingPage/contactUs";
import Hero from "@/components/lendingPage/hero";
import About from "@/components/lendingPage/about";
import Logos from "@/components/lendingPage/Logos";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollTo) {
      const el = document.getElementById(router.query.scrollTo);
      if (el) {
        const elementPosition = el.offsetTop;
        const offsetPosition = elementPosition - 80; // Account for navbar height (h-20 = 80px)
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      // 🔹 clean the URL so ?scrollTo=about disappears
      router.replace("/", undefined, { shallow: true });
    }
  }, [router.query]);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(/Hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Hero />
      </div>

      <About />
      <OurAlumni />
      <PopularServices />
      {/* <PopularSkills /> */}
      <Logos />
      <ContactUs />
    </>
  );
}
