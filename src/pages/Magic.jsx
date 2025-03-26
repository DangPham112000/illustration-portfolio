import React, { useEffect, useRef, useState } from "react";
import { useNavBar } from "../context/NavBarContext";
import ImageWithOverlay from "../components/ImageWithOverlay";
import magicCollection from "../data/magicCollection";
import Copyright from "../components/Copyright";
import Line from "../components/Line";
import ArrowDown from "../components/button/ArrowDown";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ScrollToTopButton from "../components/button/ScrollToTopButton";
import Footer from "../components/Footer";

export default function Magic() {
  const { navBarHeight } = useNavBar();

  const [headSectionHeight, setHeadSectionHeight] = useState(0);
  const [isOpenMoreDetail, setIsOpenMoreDetail] = useState(false);

  const collectionRef = useRef(null);
  const headRef = useRef(null);

  const toCollectionHandling = () => {
    collectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const moreDetailOpening = () => {
    setIsOpenMoreDetail(!isOpenMoreDetail);
  };

  useEffect(() => {
    let height;
    if (window.innerWidth > 1024) {
      height = window.innerHeight - navBarHeight;
    } else if (window.innerWidth <= 1024 && window.innerWidth > 834) {
      height = 557;
    } else {
      height = 470;
    }
    setHeadSectionHeight(height);
  }, [navBarHeight]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <div ref={headRef} className="absolute -top-[200px]" />
        {/* Desktop - Ipad */}
        <div
          className="sm:block hidden relative w-full sm:bg-[url('/img/background/Magic_castles.jpg')] bg-white bg-cover bg-center"
          style={{ height: `${headSectionHeight}px` }}
        >
          {/* 1280 - 1728 Head Content */}
          <div className="xl:grid hidden grid-cols-3 px-[60px] pt-[85px] gap-[30px]">
            <div className="relative w-full bg-white bg-opacity-80 h-fit px-5 py-10 flex flex-col gap-[30px]">
              <h3 className="text-[32px] font-medium">Magic World</h3>
              <div className="w-[90px]">
                <Line />
              </div>
              <p className="font-medium 3xl:w-[426px] w-full text-[17px] leading-[21px]">
                Fairy tales have sparked my imagination and inspired the themes
                of my artworks. I hope you can find hope and happiness through
                my illustrations and drawings.
              </p>
              <div
                onClick={moreDetailOpening}
                className={`${
                  isOpenMoreDetail ? "hidden" : "block"
                } absolute top-5 right-5 aspect-square w-[50px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer transform duration-300`}
              >
                <SlArrowRight size={30} />
              </div>
            </div>
            <div
              className={`${
                isOpenMoreDetail ? "flex" : "hidden"
              } flex-col gap-[10px] relative w-full bg-white bg-opacity-80 text-base px-5 pb-10 pt-[90px]`}
            >
              <p>
                Old folk stories always take me back to my childhood, making me
                feel like a time traveler.
              </p>
              <p>
                There, I can meet various characters like the kings and queens,
                princes and princesses, etc. living in majestic castles. I must
                admit every page of a fairy tale gives me a sense of wonder and
                magic. Despite not being a child anymore, I still find it
                enjoyable to be immersed in the fantasy world.
              </p>
              <p>
                Reading fairy stories and poems brings me nostalgic feelings and
                thought-provoking life lessons as well. I understand more about
                cultural and societal values, the world and the love around us.
                Fairy tales hold a special place in my heart. They always remind
                me to be gentle, kind, and strong no matter what adversity I
                have to face.
              </p>
              <div
                onClick={moreDetailOpening}
                className="absolute top-5 left-5 aspect-square w-[50px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white hover:cursor-pointer transform duration-300"
              >
                <SlArrowLeft size={30} />
              </div>
            </div>
          </div>

          {/* 640 - 1280 Head Content */}
          <div className="xl:hidden sm:block hidden absolute left-[60px] top-10 w-[430px] text-[14px] leading-[21px]">
            <p>
              Old folk stories always take me back to my childhood, where I feel
              like a time traveler.
            </p>
            <p>
              There, I meet fictional characters—princes, princesses, and
              majestic castles that fill me with wonder and pure fantasy.
            </p>
            <p className="mb-[5px]">
              I see and feel the breathtaking beauty of ancient times, a world
              both thrilling and enchanting.
            </p>
            <p>
              Sometimes, I simply immerse myself in gentle stories and poems,
              where love shines through simple acts everyday life, bringing me
              comfort and hope in this beautiful world.
            </p>
            <p className="mb-[5px]">
              They teach me to be a better person, to do good and avoid evils.
              Be resilient, persevere, and spread love wherever I go.
            </p>
            <p className="mb-[5px]">Fairy tales set my imagination free!</p>
          </div>
          {/* Button down */}
          <div
            onClick={toCollectionHandling}
            className="absolute right-[90px] bottom-10 cursor-pointer lg:w-20 w-[60px]"
          >
            <p className="absolute text-[24px] -top-10 right-1/2 transform translate-x-1/2 min-w-max font-inter">
              see projects
            </p>
            <ArrowDown />
          </div>
        </div>
        {/* Mobile */}
        <div className="sm:hidden block px-10 py-[30px]">
          <h3 className="text-[21px] mb-[10px]">Magic World</h3>
          <p className="text-[16px] leading-tight">
            Old folk stories always take me back to my childhood, where I feel
            like a time traveler.
          </p>
          <p className="text-[16px] mt-[10px]">
            Fairy tales set my imagination free!
          </p>
        </div>

        {/* Collection section */}
        <div
          className="sm:my-[60px] sm:px-10 xl:px-[60px] p-0 w-full"
          ref={collectionRef}
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-[30px] gap-[10px] w-full">
              {magicCollection.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center w-full sm:h-auto h-[270px] sm:aspect-square"
                  >
                    <ImageWithOverlay
                      imageUrl={item.priImg}
                      imageTitle={item.title}
                      imageId={item.id}
                      imageMainColor={undefined}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[60px]">
          <Footer />
        </div>

        {/* Btn up */}
        <div className="fixed right-[90px] bottom-10 sm:block hidden lg:w-20 w-[60px]">
          <ScrollToTopButton headRef={headRef} />
        </div>
      </div>
    </>
  );
}
