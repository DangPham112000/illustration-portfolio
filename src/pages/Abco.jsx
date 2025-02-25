import React, { useEffect, useRef } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import getCurrentHashPath from "../utils/getCurrentHashPath";

export default function Abco() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentHash = getCurrentHashPath();
    if (currentHash === "#contact") {
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col">
        <About contactRef={contactRef} />
        <Contact aboutRef={aboutRef} />
        <div id="about" ref={aboutRef} className="absolute -top-80" />
        <div id="contact" ref={contactRef} />
      </div>
    </>
  );
}
