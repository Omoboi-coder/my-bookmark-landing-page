import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Extension from "./Components/Extension";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Extension />
      <Faq />
      <Footer />   
  </>
  );
}
