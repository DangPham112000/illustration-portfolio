import React, { useEffect, useRef, useState } from "react";
import { useNavBar } from "../context/NavBarContext";
import ImageWithOverlay from "../components/ImageWithOverlay";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "phanthiet",
    link: "/img/magics/PhanThiet.png",
    img: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    link: "/img/magics/VuKienChauChau.png",
    img: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    link: "/img/magics/NguoiLayCoc.png",
    img: "/img/magics/NguoiLayCoc.png",
  },

  {
    title: "phanthiet",
    link: "/img/magics/PhanThiet.png",
    img: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    link: "/img/magics/VuKienChauChau.png",
    img: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    link: "/img/magics/NguoiLayCoc.png",
    img: "/img/magics/NguoiLayCoc.png",
  },

  {
    title: "phanthiet",
    link: "/img/magics/PhanThiet.png",
    img: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    link: "/img/magics/VuKienChauChau.png",
    img: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    link: "/img/magics/NguoiLayCoc.png",
    img: "/img/magics/NguoiLayCoc.png",
  },
];

export default function Magic() {
  const { navBarHeight } = useNavBar();

  const [headSectionHeight, setHeadSectionHeight] = useState(0);

  const collectionRef = useRef(null);
  const headRef = useRef(null);

  const toCollectionHandling = () => {
    collectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toHeadHandling = () => {
    headRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const height = window.innerHeight - navBarHeight;
    setHeadSectionHeight(height);
  }, [navBarHeight]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        {/* Head section */}
        <div ref={headRef} className="absolute -top-80"></div>
        <div
          className="relative w-full md:bg-[url('/img/background/Magic_castles.png')] bg-white bg-cover bg-center"
          style={{ height: `${headSectionHeight}px` }}
        >
          <div className="relative top-[121px] left-[110px] w-[462px]">
            <h3 className="text-2xl mb-[10px]">Magic World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            onClick={toCollectionHandling}
            className="absolute right-[50px] bottom-[30px] cursor-pointer"
          >
            <img src="/img/icons/jump_down.svg" alt="jump_down" />
          </div>
        </div>

        {/* Collection section */}
        <div className="container m-auto py-10 px-0" ref={collectionRef}>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:w-[1156px] sm:w-[764px]">
              {projects.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center w-[372px] h-[372px]"
                  >
                    <ImageWithOverlay
                      imageUrl={item.img}
                      imageTitle={item.title}
                      projectLink={item.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-auto text-center mb-4">
          <p>Copyright @2025 ghfkahgkuahdguad</p>
        </div>
        <div
          onClick={toHeadHandling}
          className="absolute right-[50px] bottom-[30px] cursor-pointer"
        >
          <img src="/img/icons/jump_up.svg" alt="jump_up" />
        </div>
      </div>
    </>
  );
}
