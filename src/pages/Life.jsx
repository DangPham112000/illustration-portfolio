import React, { useState } from "react";
import Line from "../components/Line";
import Copyright from "../components/Copyright";
import LifeSlider from "../components/LifeSlider";
import ModalSlider from "../components/ModalSlider";
import lifeImages from "../data/lifeImages";

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
      <Line />
      <div className="flex flex-1 flex-col items-center justify-between">
        {/* Introduce */}
        <div className="flex flex-col items-start justify-center xl:px-[130px] xl:pt-[60px] xl:pb-[50px] sm:p-[60px] py-[30px] px-10 w-full">
          <h3 className="sm:text-[32px] text-[21px] font-medium">
            Capturing life
          </h3>
          <p className="xl:w-[597px] w-full py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Desktop - Slider */}
        <div className="xl:block hidden w-full">
          <LifeSlider openModal={openModal} />
        </div>

        {/* Ipad - grid */}
        <div className="w-full flex justify-center items-center px-[60px]">
          <div className="xl:hidden sm:grid lg:grid-cols-3 sm:grid-cols-2 hidden gap-5">
            {lifeImages.map((image, index) => (
              <img
                className="w-[288px] aspect-square object-cover"
                src={image}
                alt={index}
                key={index}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {/* Iphone - flex */}
        <div className="sm:hidden flex flex-col gap-5">
          {lifeImages.map((image, index) => (
            <img className="" src={image} alt={index} />
          ))}
        </div>

        {isModalOpen && (
          <ModalSlider
            index={modalIndex}
            images={lifeImages}
            onClose={closeModal}
          />
        )}

        {/* Copyright */}
        <div className="text-center mb-4 mt-20">
          <Copyright />
        </div>
      </div>
    </>
  );
}
