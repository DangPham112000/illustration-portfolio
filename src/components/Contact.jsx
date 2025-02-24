import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Contact() {
  return (
    <>
      <div className="relative flex flex-col h-[100vh] justify-between items-center bg-[url('/img/background/Contact_desktop.png')] bg-cover bg-center">
        <div className="opacity-0"></div>

        <div className="text-center mb-4">
          <p>Copyright @2025 ghfkahgkuahdguad</p>
        </div>
        <div className="absolute flex flex-col justify-center top-[114px] right-[246px]">
          <h3 className="text-[28px]">Hello!</h3>
          <p className="text-[17px]">
            For commissions and project inquiries, please email to:
          </p>
          <h3 className="font-semibold text-[28px]">
            ngoc.vo.illustration@gmail.com
          </h3>
          <div className="p-0 my-[20px] h-[1px] w-[78px] bg-black"></div>
          <p className="italic text-[17px]">I am happy to hear from you :)</p>
        </div>

        <HashLink to="#about" className="absolute right-[50px] bottom-[30px]">
          <img src="/img/icons/jump_up.svg" alt="jump_up" />
        </HashLink>
      </div>
    </>
  );
}
