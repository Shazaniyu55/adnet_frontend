import Image from "next/image";
import localFont from "next/font/local";
import Layouts from "./components/layout";
import AdainNavBar from "./components/navbar";
import Services from "./components/home";
import Footer from "./components/footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
      <Services/>
     
    </Layouts>

    </>
  );
}
