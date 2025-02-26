import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import magicCollection from "../data/magicCollection";
import Line from "../components/Line";
import MagicSlider from "../components/MagicSlider";

export default function MagicDetail() {
  let { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [magicItem, setMagicItem] = useState(magicCollection[0]);

  const nextHandling = () => {
    if (currentIndex + 1 === magicCollection.length) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const index = magicCollection.findIndex((item) => item.id === id);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (typeof currentIndex === "number")
      setMagicItem(magicCollection[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <Line />
      <div className="flex-1">
        <div className="grid grid-cols-2 px-[60px] py-[60px] gap-[50px] h-full">
          {/* Slider */}
          <MagicSlider autoSlide={true} >
            {magicItem.imgs.map((imgSrc, index) => (
              <img key={index} src={imgSrc} />
            ))}
          </MagicSlider>

          {/* Content */}
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-[32px] w-[364px] mb-[30px]">
              {magicItem.title}
            </h2>
            <p className="mb-[60px] text-[17px]">{magicItem.description}</p>
            <button
              className="text-[24px]"
              onClick={nextHandling}
            >{`Next ->`}</button>
          </div>
        </div>
      </div>
    </>
  );
}
