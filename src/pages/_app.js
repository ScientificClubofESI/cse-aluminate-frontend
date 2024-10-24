import Navbar from "@/components/lendingPage/navbar";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
