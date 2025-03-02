import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function MagicSlider({
  imgSrcs = [],
  autoSlide = false,
  autoSlideInterval = 1000,
}) {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);

  const nextHandling = () => {
    setCurrentIndexSlide((currentIndexSlide) =>
      currentIndexSlide + 1 === imgSrcs.length ? 0 : currentIndexSlide + 1
    );
  };

  const prevHandling = () => {
    if (currentIndexSlide === 0) {
      setCurrentIndexSlide(imgSrcs.length - 1);
      return;
    }
    setCurrentIndexSlide(currentIndexSlide - 1);
  };

  const goToIndex = (index) => {
    setCurrentIndexSlide(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextHandling, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="relative h-full">
      <div className="h-[90%]">
        <div
          style={{
            backgroundImage: `url(${imgSrcs[currentIndexSlide]})`,
          }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
      </div>

      {/* arrow */}
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full" onClick={prevHandling}>
          <BiChevronLeft size={60} />
        </button>
        <button className="p-1 rounded-full" onClick={nextHandling}>
          <BiChevronRight size={60} />
        </button>
      </div> */}

      {/* Dot */}
      {imgSrcs.length > 1 && (
        <div className="absolute right-0 left-0 bottom-4">
          <div className="flex items-center justify-center gap-2">
            {imgSrcs.map((_, index) => (
              <div
                onClick={() => goToIndex(index)}
                key={index}
                className={`transition-all w-7 h-7 border-black border-[1px] rounded-full ${
                  currentIndexSlide === index
                    ? "bg-black"
                    : "bg-white cursor-pointer"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
