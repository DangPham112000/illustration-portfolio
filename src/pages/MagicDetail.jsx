import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import magicCollection from "../data/magicCollection";
import MagicSlider from "../components/MagicSlider";
import { Link } from "react-router-dom";
import MagicSliderMobile from "../components/MagicSliderMobile";
import Footer from "../components/Footer";

export default function MagicDetail() {
  let { id } = useParams();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    magicCollection.findIndex((item) => item.id === id)
  );
  const [magicItem, setMagicItem] = useState(magicCollection[currentIndex]);
  const [secondColumnHeight, setSecondColumnHeight] = useState("100%");

  const nextHandling = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === magicCollection.length ? 0 : prevIndex + 1
    );
  };

  const prevHandling = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? magicCollection.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (typeof currentIndex === "number")
      setMagicItem(magicCollection[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const sliderHeight = sliderRef.current.offsetHeight;
      setSecondColumnHeight(`${sliderHeight}px`);
    }
  }, []);

  return (
    <div className="flex flex-col flex-1 justify-between lg:bg-[url('/img/background/circle.jpg')] bg-contain bg-center h-full">
      <div className="w-full flex-1">
        <div className="w-full lg:grid lg:grid-cols-2 sm:flex sm:flex-col lg:gap-[30px] sm:gap-0 gap-[30px] sm:pt-[60px] pt-[30px] xl:px-[60px] sm:px-[40px]">
          {/* Desktop - Ipad Slider */}
          <div
            ref={sliderRef}
            className="w-full h-fit sm:flex hidden sm:items-center sm:justify-center lg:mb-0 sm:mb-[70px]"
          >
            <div className="lg:max-w-3/4 sm:max-w-2/3 sm:w-2/3 max-h-full">
              <MagicSlider
                autoSlide={false}
                modalSrcs={magicItem.full}
                sliderSrcs={magicItem.square}
              />
            </div>
          </div>

          {/* Content + Button */}
          <div
            className="lg:w-2/3 sm:w-2/3 self-center lg:pl-[30px] sm:p-0 px-10 flex flex-col sm:justify-between gap-[30px]"
            style={{ height: secondColumnHeight }}
          >
            {/* Content  */}
            <div className="overflow-y-auto flex flex-col gap-[30px]">
              <h2 className="sm:font-bold font-semibold sm:text-[32px] text-[21px] leading-tight w-full">
                {magicItem.title}
              </h2>

              <pre className="sm:text-[17px] text-[16px] sm:leading-[21px] leading-tight whitespace-pre-wrap font-sans">
                {magicItem.description}
              </pre>
            </div>

            {/* Prev - Next Btn */}
            <div className="sm:flex hidden justify-start gap-5">
              <button>
                <Link
                  to={`/magicDetail/${
                    currentIndex === 0
                      ? magicCollection[magicCollection.length - 1].id
                      : magicCollection[currentIndex - 1].id
                  }`}
                  className="text-[17px] font-medium underline hover:text-[#FF5900] transform duration-500"
                  onClick={prevHandling}
                >
                  Previous
                </Link>
              </button>
              <span className="font-inter text-[17px] font-semibold flex items-center">
                |
              </span>
              <button>
                <Link
                  to={`/magicDetail/${
                    currentIndex + 1 === magicCollection.length
                      ? magicCollection[0].id
                      : magicCollection[currentIndex + 1].id
                  }`}
                  className="text-[17px] font-medium underline hover:text-[#FF5900] transform duration-500"
                  onClick={nextHandling}
                >
                  Next
                </Link>
              </button>
            </div>
          </div>

          <div className="lg:block hidden"></div>

          <div className="sm:w-2/3 lg:mt-0 sm:mt-[30px] self-center">
            <button className="sm:flex hidden items-center justify-center w-fit p-5 lg:ml-[30px] box-border border-black border-[1px] bg-black text-white hover:bg-white hover:text-black transform duration-500">
              <Link to="/magic" className="text-[17px]">
                Back to Magic world
              </Link>
            </button>
          </div>

          {/* Mobile Slider */}
          <div className="sm:hidden block w-full h-full mt-[30px]">
            <MagicSliderMobile
              imgSrcs={magicItem.square}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="lg:mt-[60px] sm:mt-10 mt-[30px] w-full">
        <Footer />
      </div>
    </div>
  );
}
