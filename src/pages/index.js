import Navbar from "@/components/lendingPage/navbar/index";
import OurAlumni from "@/components/lendingPage/OurAlumnus";
import PopularServices from "@/components/lendingPage/PopularServices";
// import PopularSkills from "@/components/lendingPage/PopoularSkills";
import ContactUs from "@/components/lendingPage/contactUs";
import Hero from "@/components/lendingPage/hero";
import About from "@/components/lendingPage/about";
import Logos from "@/components/lendingPage/Logos";
import Head from "next/head";

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
      <Head>
        {/* Primary Meta Tags */}
        <title>CSE Aluminate - Connect with CSE Alumni & Find Expert Services</title>
        <meta name="title" content="CSE Aluminate - Connect with CSE Alumni & Find Expert Services" />
        <meta 
          name="description" 
          content="Discover and connect with CSE alumni professionals. Find expert services, skills, and talent across various industries. Join our thriving community of Computer Science Engineering graduates." 
        />
        <meta 
          name="keywords" 
          content="CSE alumni, computer science alumni, engineering graduates, professional network, expert services, skills directory, CSE community, alumni network, tech professionals" 
        />
        <meta name="author" content="Scientific Club of ESI" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cse-aluminate.cse.club/" />
        <meta property="og:title" content="CSE Aluminate - Connect with ESI Alumni & Find Expert Services" />
        <meta 
          property="og:description" 
          content="Discover and connect with ESI alumni professionals. Find expert services, skills, and talent across various industries." 
        />
        <meta property="og:image" content="/SEOpage.png" />
        <meta property="og:image:alt" content="CSE Aluminate - Alumni Network Platform" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="CSE Aluminate" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cse-aluminate.cse.club/" />
        <meta name="twitter:title" content="CSE Aluminate - Connect with ESI Alumni & Find Expert Services" />
        <meta 
          name="twitter:description" 
          content="Discover and connect with ESI alumni professionals. Find expert services, skills, and talent across various industries." 
        />
        <meta name="twitter:image" content="/SEOpage.png" />
        <meta name="twitter:image:alt" content="CSE Aluminate - Alumni Network Platform" />
        
        {/* Additional SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cse-aluminate.cse.club/" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CSE Aluminate",
              "url": "https://cse-aluminate.cse.club",
              "logo": "https://cse-aluminate.cse.club/aluminate.svg",
              "description": "ESI Alumni network platform connecting graduates with expert services and professional opportunities",
              "foundingDate": "2024",
              "sameAs": [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourpage",
                "https://linkedin.com/company/yourpage"
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CSE Aluminate",
              "url": "https://cse-aluminate.cse.club",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cse-aluminate.cse.club/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      
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
