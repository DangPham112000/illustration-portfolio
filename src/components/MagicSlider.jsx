import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function MagicSlider({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 1000,
}) {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);

  const nextHandling = () => {
    setCurrentIndexSlide((currentIndexSlide) =>  currentIndexSlide + 1 === slides.length ? 0 : currentIndexSlide + 1);
  };

  const prevHandling = () => {
    if (currentIndexSlide === 0) {
      setCurrentIndexSlide(slides.length - 1);
      return;
    }
    setCurrentIndexSlide(currentIndexSlide - 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextHandling, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="relative h-full bg-gray-500">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndexSlide * 100}%)` }}
        >
          {slides}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button className="p-1 rounded-full" onClick={prevHandling}>
          <BiChevronLeft size={60} />
        </button>
        <button className="p-1 rounded-full" onClick={nextHandling}>
          <BiChevronRight size={60} />
        </button>
      </div>

      <div className="absolute right-0 left-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
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
    </div>
  );
}
