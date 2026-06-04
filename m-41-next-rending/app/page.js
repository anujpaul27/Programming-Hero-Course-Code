import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Career from "./Components/Career";
import Work from "./Components/Work";
import Contact from "./Components/Contract";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Career/>
    <Work/>
    <Contact/>
    </>
  );
}
