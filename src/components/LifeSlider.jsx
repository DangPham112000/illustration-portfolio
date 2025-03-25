import React, { useEffect, useState } from "react";
import lifeImages from "../data/lifeImages";

const MAX_IMG_SHOW = 3;
const IMG_GAP = 30;

export default function LifeSlider({ openModal }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [IMG_WIDTH, setIMG_WIDTH] = useState(326);

  useEffect(() => {
    const lifeSliderWidth = document.getElementById("LifeSlider").offsetWidth;
    const newIMG_WIDTH =
      (lifeSliderWidth - IMG_GAP * (MAX_IMG_SHOW - 1)) / MAX_IMG_SHOW;
    setIMG_WIDTH(newIMG_WIDTH);
  }, []);

  const nextHandling = () => {
    setSlideIndex(
      slideIndex + 1 !== lifeImages.length - 2 ? slideIndex + 1 : 0
    );
  };
  const prevHandling = () => {
    setSlideIndex(slideIndex - 1 < 0 ? lifeImages.length - 3 : slideIndex - 1);
  };

  return (
    <div
      id="LifeSlider"
      className="relative w-full flex justify-center items-center overflow-hidden"
    >
      <div
        className="overflow-hidden"
        style={{
          width: `${MAX_IMG_SHOW * IMG_WIDTH + (MAX_IMG_SHOW - 1) * IMG_GAP}px`,
        }}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            gap: `${IMG_GAP}px`,
            width: `${
              lifeImages.length * IMG_WIDTH + (lifeImages.length - 1) * IMG_GAP
            }px`,
            transform: `translateX(-${slideIndex * (IMG_WIDTH + IMG_GAP)}px)`,
          }}
        >
          {lifeImages.map((img, index) => (
            <div
              key={index}
              className="bg-cover bg-center aspect-square cursor-pointer"
              style={{
                width: `${IMG_WIDTH}px`,
                backgroundImage: `url(/img/life/square/${img})`,
              }}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        className="xl:flex hidden absolute left-0 top-1/2 -translate-y-1/2 w-[50px] aspect-square bg-black items-center justify-center"
        onClick={prevHandling}
      >
        <img
          src="/img/icons/white_slide_left.svg"
          alt="white_slide_left"
          className="w-[17px]"
        />
      </button>
      <button
        className="xl:flex hidden absolute right-0 top-1/2 -translate-y-1/2 w-[50px] aspect-square bg-black items-center justify-center"
        onClick={nextHandling}
      >
        <img
          src="/img/icons/white_slide_right.svg"
          alt="white_slide_right"
          className="w-[17px]"
        />
      </button>
    </div>
  );
}
