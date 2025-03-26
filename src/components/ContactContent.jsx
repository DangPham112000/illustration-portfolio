import React from "react";
import Line from "./Line";

export default function ContactContent() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[28px]">Hi! Let's work together.</h1>
      <div className="flex flex-col gap-[5px] sm:text-[17px] text-[16px] leading-[21px]">
        <p>I'm excited to work on:</p>
        <ul className="list-disc ml-[30px]">
          <li>Children's Book Illustration</li>
          <li>Picture Book Illustration</li>
          <li>Editorial Illustration</li>
          <li>Motion Graphics</li>
          <li>Ceramic Arts</li>
        </ul>
        <p>For commissions and project enquiries, please contact:</p>
        <p className="font-medium text-[21px] underline text-[#FF4B6F] overflow-hidden">
          ngoc.vo.illustration@gmail.com
        </p>
      </div>
      <div className="w-[52px]">
        <Line />
      </div>
      <p className="sm:text-[17px] text-[16px] leading-[21px] italic font-inter">
        I am happy to hear from you :)
      </p>
    </div>
  );
}
