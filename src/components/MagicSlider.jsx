import React, { useEffect, useState } from "react";
import ModalSlider from "./ModalSlider";

export default function MagicSlider({
  sliderSrcs = [],
  modalSrcs = [],
  autoSlide = false,
  autoSlideInterval = 2000,
}) {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextHandling = () => {
    setCurrentIndexSlide((prevIndexSlide) =>
      prevIndexSlide + 1 === sliderSrcs.length ? 0 : prevIndexSlide + 1
    );
  };

  const prevHandling = () => {
    setCurrentIndexSlide((prevIndexSlide) =>
      prevIndexSlide - 1 < 0 ? sliderSrcs.length - 1 : prevIndexSlide - 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndexSlide(index);
  };

  useEffect(() => {
    setCurrentIndexSlide(0);
    if (!autoSlide) return;
    const slideInterval = setInterval(nextHandling, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, [sliderSrcs]);

  return (
    <div className="relative max-h-full h-full flex flex-col">
      <div
        className="h-full aspect-square bg-center bg-cover duration-500 cursor-pointer"
        style={{
          backgroundImage: `url(${sliderSrcs[currentIndexSlide]})`,
        }}
        onClick={() => openModal(currentIndexSlide)}
      />

      {sliderSrcs.length > 1 && (
        <>
          {/* Left & Right Button */}
          <button
            className="sm:flex hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[100%] w-[50px] aspect-square bg-black items-center justify-center"
            onClick={prevHandling}
          >
            <img
              src="/img/icons/white_slide_left.svg"
              alt="white_slide_left"
              className="w-[17px]"
            />
          </button>
          <button
            className="sm:flex hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-[100%] w-[50px] aspect-square bg-black items-center justify-center"
            onClick={nextHandling}
          >
            <img
              src="/img/icons/white_slide_right.svg"
              alt="white_slide_right"
              className="w-[17px]"
            />
          </button>

          {/* Dots */}
          <div className="absolute left-0 right-0 -bottom-10">
            <div className="flex items-center justify-center gap-[10px]">
              {sliderSrcs.map((_, index) => (
                <div
                  onClick={() => goToIndex(index)}
                  key={index}
                  className={`transition-all w-5 aspect-square border-black border-[1px] rounded-full ${
                    currentIndexSlide === index
                      ? "bg-black"
                      : "bg-white cursor-pointer"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <ModalSlider
          onClose={closeModal}
          index={modalIndex}
          images={modalSrcs}
        />
      )}
    </div>
  );
}
