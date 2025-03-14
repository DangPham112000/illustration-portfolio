import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import magicCollection from "../data/magicCollection";
import Line from "../components/Line";
import MagicSlider from "../components/MagicSlider";
import { Link } from "react-router-dom";
import MagicSliderMobile from "../components/MagicSliderMobile";

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
      <div className="flex flex-col md:flex-1 h-full">
        <div className="lg:grid lg:grid-cols-2 md:gap-[50px] flex flex-col items-start justify-start md:px-[60px] md:py-[60px] md:h-full">
          {/* Ipad - Desktop Slider */}
          <div className="lg:block hidden w-full h-full">
            <MagicSlider autoSlide={false} imgSrcs={magicItem.imgs} />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start py-[30px] px-10 md:py-0 md:px-0 w-full">
            <h2 className="font-semibold text-[32px] w-[364px] md:mb-[30px] mb-5">
              {magicItem.title}
            </h2>
            <pre className="md:mb-[60px] mb-10 text-[17px] whitespace-pre-wrap font-[Inter]">
              {magicItem.description}
            </pre>
            <div className="w-full flex justify-end lg:justify-start">
              <Link
                to={`/magicDetail/${
                  currentIndex + 1 === magicCollection.length
                    ? magicCollection[0].id
                    : magicCollection[currentIndex + 1].id
                }`}
                className="text-[24px]"
                onClick={nextHandling}
              >
                {`Next ->`}
              </Link>
            </div>
          </div>

          {/* Ipad Slider */}
          <div className="md:block hidden lg:hidden w-full h-full">
            <MagicSlider autoSlide={true} imgSrcs={magicItem.imgs} />
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden block w-full h-full">
            <MagicSliderMobile imgSrcs={magicItem.imgs} />
          </div>
        </div>
      </div>
    </>
  );
}
