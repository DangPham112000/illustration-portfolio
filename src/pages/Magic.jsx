import React, { useEffect, useState } from "react";
import { useNavBar } from "../context/NavBarContext";
import ImageWithOverlay from "../components/ImageWithOverlay";

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

  useEffect(() => {
    const height = window.innerHeight - navBarHeight;
    setHeadSectionHeight(height);
  }, [navBarHeight]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Head section */}
        <div
          className="w-full md:bg-[url('/img/background/Magic_castles.png')] bg-white bg-cover bg-center"
          style={{ height: `${headSectionHeight}px` }}
        >
          <div className="relative top-56 left-[110px] w-[462px]">
            <h3 className="text-2xl font-bold">Magic World</h3>
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
          <div className="relative"></div>
        </div>

        {/* Collection section */}
        <div className="container m-auto py-10 px-0">
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
      </div>
    </>
  );
}
