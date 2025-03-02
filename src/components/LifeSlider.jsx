import React, { useState } from "react";
import lifeImages from "../data/lifeImages";

const MAX_IMG_SHOW = 3;
const IMG_WIDTH = 326;
const IMG_GAP = 20;

export default function LifeSlider({ openModal }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextHandling = () => {
    setSlideIndex(
      slideIndex + 1 !== lifeImages.length - 2 ? slideIndex + 1 : 0
    );
  };
  const prevHandling = () => {
    setSlideIndex(slideIndex - 1 < 0 ? lifeImages.length - 3 : slideIndex - 1);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <button className="m-[52px]" onClick={prevHandling}>
        <img src="/img/icons/slide_left.svg" alt="slide_left" />
      </button>
      <div
        className="overflow-hidden w-[80%]"
        style={{
          width: `${MAX_IMG_SHOW * IMG_WIDTH + (MAX_IMG_SHOW - 1) * IMG_GAP}px`,
        }}
      >
        <div
          className="flex gap-5 transition-transform ease-out duration-500"
          style={{
            width: `${
              lifeImages.length * IMG_WIDTH + (lifeImages.length - 1) * IMG_GAP
            }px`,
            transform: `translateX(-${slideIndex * (IMG_WIDTH + IMG_GAP)}px)`,
          }}
        >
          {lifeImages.map((img, index) => (
            <div
              key={index}
              className="bg-cover bg-center w-[326px] aspect-square cursor-pointer"
              style={{
                backgroundImage: `url(${img})`,
              }}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      <button className="m-[52px]" onClick={nextHandling}>
        <img src="/img/icons/slide_right.svg" alt="slide_right" />
      </button>
    </div>
  );
}
