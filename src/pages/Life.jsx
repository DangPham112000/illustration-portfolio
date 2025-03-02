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
        <div className="flex flex-col items-start justify-center px-[130px] pt-[60px] pb-[50px] w-full">
          <h3 className="text-[32px] font-medium">Capturing life</h3>
          <p className="w-[597px] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* <ImageSlider/> */}
        <LifeSlider openModal={openModal} />

        {isModalOpen && <ModalSlider index={modalIndex} images={lifeImages} onClose={closeModal}/>}

        {/* Copyright */}
        <div className="text-center mb-4 mt-20">
          <Copyright />
        </div>
      </div>
    </>
  );
}
