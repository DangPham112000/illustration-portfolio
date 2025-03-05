import React, { useEffect, useState } from "react";
import Line from "./Line";
import { useNavBar } from "../context/NavBarContext";
import { Link } from "react-router-dom";

export default function About({contactRef}) {
  const { navBarHeight } = useNavBar();

  const [headSectionHeight, setHeadSectionHeight] = useState(0);

  const toContactHandling = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const height = window.innerHeight - navBarHeight;
    setHeadSectionHeight(height);
  }, [navBarHeight]);

  return (
    <>
      <Line />
      <div
        className="relative flex sm:justify-start xl:justify-center xl:items-center justify-start items-start"
        style={{ height: `${headSectionHeight}px` }}
      >
        <div className="flex xl:flex-row flex-col sm:justify-start justify-center sm:px-[60px] px-10 sm:mt-[60px] mt-[30px] sm:gap-[50px] gap-5">
          <img
            className="object-cover xl:w-[449px] lg:w-[602px] sm:w-[400px] w-[200px] aspect-square"
            src="/img/aboutme.png"
            alt="NguoiLayCoc"
          />
          <div className="flex flex-col sm:gap-5 gap-[10px] xl:w-[572px] lg:w-[771px] sm:text-[17px] text-[16px] leading-5">
            <p>Hello!</p>
            <p>
              I'm Ngoc Vo, a Graphic Designer, Illustrator, and now, a rising
              ceramic artists too!
            </p>
            <p>
              From a young age, I explored different art mediums like watercolor
              and gouache, participating in exciting art competitions (and even
              winning some little awards—what a thrill for a kid!).
            </p>
            <p>
              I earned my Bachelor's degree in Architecture Design in 2010, but
              my heart led me to Graphic Design, where I worked full-time until
              late 2024. Now, I embrace the creative freedom of being an
              independent artist, focusing on Illustration and Graphic Design.
            </p>
            <p>
              My work blends both traditional and digital mediums, with
              storytelling at its core. I believe stories bring art to life,
              creating deeper connections with the audience.
            </p>
          </div>
        </div>
        <Link to="#contact" onClick={toContactHandling} className="sm:block hidden absolute right-[50px] bottom-[30px]">
          <img src="/img/icons/jump_down.svg" alt="jump_down" />
        </Link>
      </div>
    </>
  );
}
