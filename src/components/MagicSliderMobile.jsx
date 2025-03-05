import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MagicSliderMobile.css";

export default function MagicSliderMobile({ imgSrcs = [] }) {
  const getMargin = (index) => {
    if (index === imgSrcs.length - 1 || index === 0) return "40px";
    return "10px";
  };
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={"auto"}
        // spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
      >
        {imgSrcs.map((imgSrc, index) => (
          <SwiperSlide key={index} className="w-[303px] h-[379px]">
            <img
              className="w-full h-full object-cover"
              src={imgSrc}
              alt={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
