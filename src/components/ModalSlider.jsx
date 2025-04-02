import React, { useState } from "react";

export default function ModalSlider({
  images = [],
  index = 0,
  onClose = () => {},
}) {
  const [currentIndex, setCurrentIndex] = useState(index);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-around z-50">
      {/* Left btn */}
      {images.length > 1 && (
        <button className="lg:m-[50px] m-[20px]" onClick={handlePrev}>
          <img
            className="min-h-[50px] h-[50px]"
            src="/img/icons/thin_white_left.png"
            alt="thin_white_left"
          />
        </button>
      )}
      {/* IMG */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="max-h-[75vh] object-contain"
        />
      </div>
      {/* Right btn */}
      {images.length > 1 && (
        <button className="lg:m-[50px] m-[20px]" onClick={handleNext}>
          <img
            className="min-h-[50px] h-[50px]"
            src="/img/icons/thin_white_right.png"
            alt="thin_white_right"
          />
        </button>
      )}

      {/* Close btn */}
      <button className="absolute top-0 right-0 m-10" onClick={onClose}>
        <img
          className="w-[50px] aspect-square"
          src="/img/icons/thin_white_close.png"
          alt="thin_white_close"
        />
      </button>
    </div>
  );
}
