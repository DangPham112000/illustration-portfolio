import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import magicCollection from "../data/magicCollection";
import MagicSlider from "../components/MagicSlider";
import { Link } from "react-router-dom";
import MagicSliderMobile from "../components/MagicSliderMobile";
import Copyright from "../components/Copyright";

export default function MagicDetail() {
  let { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(
    magicCollection.findIndex((item) => item.id === id)
  );
  const [magicItem, setMagicItem] = useState(magicCollection[currentIndex]);

  const nextHandling = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === magicCollection.length ? 0 : prevIndex + 1
    );
  };

  const prevHandling = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? magicCollection.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (typeof currentIndex === "number")
      setMagicItem(magicCollection[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full flex-1">
        <div className="w-full flex xl:flex-row flex-col items-stretch xl:gap-[30px] sm:gap-[70px] gap-[30px] sm:pt-[60px] pt-[30px] xl:px-[60px] sm:px-[90px] md:px-[134px] xl:mb-10">
          {/* Ipad - Desktop Slider */}
          <div className="xl:w-1/2 flex-1 sm:flex hidden justify-center">
            <div className="xl:w-full lg:w-[566px] md:w-[500px] sm:w-[450px]">
              <MagicSlider autoSlide={false} imgSrcs={magicItem.imgs} />
            </div>
          </div>

          {/* Content */}
          <div className="xl:w-1/2 w-full flex-1 sm:p-0 px-10">
            <div className="xl:w-2/3 w-full h-full">
              <div className="h-full xl:pl-[30px] flex flex-col justify-between items-start gap-[30px]">
                <div className=" flex flex-col items-start gap-[30px]">
                  <h2 className="sm:font-bold font-semibold sm:text-[32px] text-[21px] leading-tight w-full">
                    {magicItem.title}
                  </h2>
                  <pre className="sm:text-[17px] text-[16px] sm:leading-[21px] leading-tight whitespace-pre-wrap font-sans">
                    {magicItem.description}
                  </pre>
                  <div className="sm:flex hidden justify-start gap-5">
                    <button>
                      <Link
                        to={`/magicDetail/${
                          currentIndex === 0
                            ? magicCollection[magicCollection.length - 1].id
                            : magicCollection[currentIndex - 1].id
                        }`}
                        className="text-[17px] font-medium underline hover:text-[#FF5900] transform duration-500"
                        onClick={prevHandling}
                      >
                        Previous
                      </Link>
                    </button>
                    <span className="font-inter text-[17px] font-semibold flex items-center">
                      |
                    </span>
                    <button>
                      <Link
                        to={`/magicDetail/${
                          currentIndex + 1 === magicCollection.length
                            ? magicCollection[0].id
                            : magicCollection[currentIndex + 1].id
                        }`}
                        className="text-[17px] font-medium underline hover:text-[#FF5900] transform duration-500"
                        onClick={nextHandling}
                      >
                        Next
                      </Link>
                    </button>
                  </div>
                </div>
                <button className="sm:flex hidden items-center justify-center py-[21px] px-[30px] box-border border-black border-[1px] bg-black text-white hover:bg-white hover:text-black transform duration-500">
                  <Link to="/magic" className=" text-[24px]">
                    Back to Magic world
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden block w-full h-full">
            <MagicSliderMobile imgSrcs={magicItem.imgs} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center m-5">
        <Copyright />
      </div>
    </div>
  );
}
