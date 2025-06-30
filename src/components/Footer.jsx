import React from "react";
import Line from "./Line";
import {
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
  VimeoIcon,
} from "./button/socialIcon";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-[35px] pb-[35px]">
      <div className="w-[400px]">
        <Line />
      </div>
      <div className="flex gap-[15px]">
        {/* <FacebookIcon /> */}
        <InstagramIcon />
        <BehanceIcon />
        <VimeoIcon />
      </div>
      <p className="text-[14px]">©2025 by Ngoc Vo</p>
    </div>
  );
}
