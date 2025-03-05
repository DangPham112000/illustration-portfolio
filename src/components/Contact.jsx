import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

export default function Contact({ aboutRef }) {
  const toAboutHandling = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative flex flex-col h-[100vh] justify-between items-center sm:bg-[url('/img/background/Contact_desktop.png')] bg-[url('/img/background/contact_mobile.png')] bg-cover bg-center">
        <div className="sm:block hidden opacity-0"></div>

        <div className="sm:block hidden text-center mb-4">
          <Copyright />
        </div>
        <div className="sm:absolute flex flex-col justify-center xl:top-[114px] xl:right-[246px] mt-[54px] mx-[38px]">
          <h3 className="sm:text-[28px] text-[24px]">Hello!</h3>
          <p className="sm:text-[17px] text-[16px]">
            For commissions and project inquiries, please email to:
          </p>
          <h3 className="font-semibold sm:text-[28px] text-[20px]">
            ngoc.vo.illustration@gmail.com
          </h3>
          <div className="p-0 my-[20px] h-[1px] w-[78px] bg-black"></div>
          <p className="italic sm:text-[17px] text-[16px]">I am happy to hear from you :)</p>
        </div>

        <Link
          to="#about"
          onClick={toAboutHandling}
          className="sm:block hidden absolute right-[50px] bottom-[30px]"
        >
          <img src="/img/icons/jump_up.svg" alt="jump_up" />
        </Link>
      </div>
    </>
  );
}
