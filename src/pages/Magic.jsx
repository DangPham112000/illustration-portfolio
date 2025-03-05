import React, { useEffect, useRef, useState } from "react";
import { useNavBar } from "../context/NavBarContext";
import ImageWithOverlay from "../components/ImageWithOverlay";
import magicCollection from "../data/magicCollection";
import Copyright from "../components/Copyright";
import Line from "../components/Line";

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
      <div className="lg:hidden">
        <Line />
      </div>
      <div className="relative flex flex-col items-center justify-center">
        {/* Head section */}
        <div ref={headRef} className="absolute -top-80"></div>
        {/* Ipad - Desktop */}
        <div
          className="md:block hidden relative w-full md:bg-[url('/img/background/Magic_castles.png')] bg-white bg-cover bg-center"
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
        {/* Mobile */}
        <div className="md:hidden block px-10 py-[30px]">
          <h3 className="text-[21px] mb-[10px]">Magic World</h3>
          <p className="text-[15px]">
            Old folk stories always take me back to my childhood, where I feel
            like a time traveler.
          </p>
          <p className="text-[15px] mt-[10px]">Fairy tales set my imagination free!</p>
        </div>

        {/* Collection section */}
        <div className="md:m-auto md:py-10 px-0 w-full" ref={collectionRef}>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 xl:w-[1156px] lg:w-[764px] 2xl:w-[1548px]">
              {magicCollection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center md:w-[372px] md:h-[372px] h-[270px]"
                  >
                    <ImageWithOverlay
                      imageUrl={item.priImg}
                      imageTitle={item.title}
                      imageId={item.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:mt-auto mt-5 text-center mb-4">
          <Copyright />
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
