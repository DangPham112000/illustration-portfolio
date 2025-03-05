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
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center z-50"
      style={{
        justifyContent: images.length > 1 ? "space-between" : "center",
      }}
    >
      {/* Left btn */}
      {images.length > 1 && (
        <button className="lg:m-[50px] m-[20px]" onClick={handlePrev}>
          <img src="/img/icons/white_slide_left.svg" alt="white_slide_left" />
        </button>
      )}
      {/* IMG */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="max-w-[70vw] max-h-[90vh] object-contain"
        />
      </div>
      {/* Right btn */}
      {images.length > 1 && (
        <button className="lg:m-[50px] m-[20px]" onClick={handleNext}>
          <img src="/img/icons/white_slide_right.svg" alt="white_slide_right" />
        </button>
      )}

      {/* Close btn */}
      <button className="absolute top-0 right-0 m-4" onClick={onClose}>
        <img src="/img/icons/white_close.svg" alt="white_close" />
      </button>
    </div>
  );
}
