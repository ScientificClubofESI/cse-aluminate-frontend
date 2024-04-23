import Navbar from "@/components/lendingPage/navbar";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
