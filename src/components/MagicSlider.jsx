import React, { useEffect, useState } from "react";
import ModalSlider from "./ModalSlider";

export default function MagicSlider({
  imgSrcs = [],
  autoSlide = false,
  autoSlideInterval = 1000,
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
    setCurrentIndexSlide((currentIndexSlide) =>
      currentIndexSlide + 1 === imgSrcs.length ? 0 : currentIndexSlide + 1
    );
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
          className="w-full h-full bg-center bg-cover duration-500 cursor-pointer"
          style={{
            backgroundImage: `url(${imgSrcs[currentIndexSlide]})`,
          }}
          onClick={() => openModal(currentIndexSlide)}
        />
      </div>

      {/* Dots */}
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

      {isModalOpen && (
        <ModalSlider onClose={closeModal} index={modalIndex} images={imgSrcs} />
      )}
    </div>
  );
}
