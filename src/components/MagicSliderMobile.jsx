import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MagicSliderMobile.css";

export default function MagicSliderMobile({ imgSrcs = [] }) {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={"auto"}
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
