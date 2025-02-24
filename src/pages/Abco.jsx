import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Abco() {
  return (
    <>
      <div className="relative flex flex-col">
        <div id="about" className="absolute -top-80" />
        <About />
        <div id="contact" />
        <Contact />
      </div>
    </>
  );
}
