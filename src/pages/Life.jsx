import React, { useState } from "react";
import Line from "../components/Line";
import LifeSlider from "../components/LifeSlider";
import ModalSlider from "../components/ModalSlider";
import lifeImages from "../data/lifeImages";
import LifeGridIpad from "../components/LifeGridIpad";
import Footer from "../components/Footer";

export default function Life() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-1 flex-col items-center">
        {/* Introduce */}
        <div className="flex flex-col items-start justify-center sm:gap-[30px] gap-5 lg:px-[60px] sm:px-[40px] sm:pb-[50px] sm:pt-[60px] py-[30px] px-10 w-full">
          <h3 className="sm:text-[32px] text-[21px] font-medium">
            Capturing life
          </h3>
          <p className="lg:w-1/2 sm:w-2/3 w-full">
            To me, life is beautiful - even in ordinary moments. My heart fills with happiness through lines of poetry, and photos I capture while traveling and exploring new places.
          </p>
        </div>

        {/* Desktop - Slider */}
        <div className="lg:block hidden w-full px-[60px]">
          <LifeSlider openModal={openModal} />
        </div>

        {/* Ipad - grid */}
        <div className="w-full px-[40px]">
          <LifeGridIpad imgs={lifeImages} openModal={openModal} />
        </div>

        {/* Iphone - flex */}
        <div className="sm:hidden flex flex-col gap-5">
          {lifeImages.map((imgName, index) => (
            <img
              key={index}
              className=""
              src={`/img/life/full/${imgName}`}
              alt={index}
            />
          ))}
        </div>

        {isModalOpen && (
          <ModalSlider
            index={modalIndex}
            images={lifeImages.map((imgName) => `/img/life/full/${imgName}`)}
            onClose={closeModal}
          />
        )}

        {/* Footer */}
        <div className="flex-1 mt-[60px] flex flex-col justify-end">
          <Footer />
        </div>
      </div>
    </>
  );
}
