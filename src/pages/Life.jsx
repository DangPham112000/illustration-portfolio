import React from "react";
import Line from "../components/Line";
import Copyright from "../components/Copyright";

export default function Life() {
  return (
    <>
      <Line />
      <div className="flex flex-col items-center justify-center">
        {/* Introduce */}
        <div className="flex flex-col items-start justify-center px-[130px] py-20 w-full">
          <h3 className="text-[32px] font-medium">Capturing life</h3>
          <p className="w-[597px] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* <ImageSlider/> */}
        <div className="h-[300px] w-full bg-gray-700"></div>

        {/* Copyright */}
        <div className="text-center mb-4 mt-20">
          <Copyright />
        </div>
      </div>
    </>
  );
}
