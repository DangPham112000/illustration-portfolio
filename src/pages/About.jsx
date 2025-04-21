import React from "react";
import Line from "../components/Line";
import { GoArrowDown } from "react-icons/go";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";
import ModalContactMobile from "../components/ModalContactMobile";

export default function About() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* About Section */}
      <div className="lg:bg-[url('/img/background/circle.jpg')] bg-contain bg-center sm:pt-[60px] pt-[30px] lg:px-[60px] px-[40px]">
        <div className="sm:grid flex flex-col lg:grid-cols-3 grid-cols-2 gap-x-[30px] lg:gap-y-[30px] gap-y-[20px]">
          <div className="w-full sm:flex hidden flex-col lg:gap-[30px] gap-5">
            <img
              className="object-cover w-full aspect-square"
              src="/img/aboutme.png"
              alt="me"
            />
            <span className="italic text-[17px] leading-[21px]">
              When I'm not drawing, I'll be in my studio making ceramics and
              crafts, playing the piano, and chasing after my two
              cute-but-naughty dogs, Bom and Bun."
            </span>
          </div>

          <img
            className="sm:hidden block object-cover w-[100px] aspect-square"
            src="/img/aboutme.png"
            alt="me"
          />

          <div className="flex flex-col lg:gap-[10px] sm:gap-5 gap-[10px] lg:px-[30px] sm:text-[17px] text-[16px] sm:leading-[21px] leading-tight">
            <h1 className="lg:text-[28px] sm:text-[24px] text-[16px]">
              Hello!
            </h1>
            <p>
              I'm Ngoc Vo, a Graphic Designer, Illustrator, and now, a rising
              ceramic artists too!
            </p>
            <p>
              From a young age, I explored different art mediums like watercolor
              and gouache, participating in exciting art competitions (and even
              winning some little awards—what a thrill for a kid!).
            </p>
            <p>
              I earned my Bachelor's degree in Architecture Design in 2010, but
              my heart led me to Graphic Design, where I worked full-time until
              late 2024. Now, I embrace the creative freedom of being an
              independent artist, focusing on Illustration and Graphic Design.
            </p>
            <p>
              My work blends both traditional and digital mediums, with
              storytelling at its core. I believe stories bring art to life,
              creating deeper connections with the audience.
            </p>
          </div>

          <div className="w-full h-full lg:hidden sm:flex hidden items-center">
            <img src="/img/contact/Contact_Bom_Bun.jpg" alt="Contact_Bom_Bun" />
          </div>

          <div className="relative flex flex-col sm:gap-[30px] gap-5 h-fit sm:ring-[1px] sm:ring-black sm:mt-0 mt-[10px] sm:p-[30px] sm:pl-[60px] text-[17px] leading-[21px] lg:self-start self-center">
            <p className="font-medium">Recognition</p>
            <ul className="list-disc">
              <li>2012 ASEAN-Korea Multimedia Competition</li>
              <li>2014 Summer program "K-Pop Wave and ASEAN"</li>
              <li>2014 Korea-ASEAN Exhibition in Jakarta</li>
              <li>2024 2024 Media X Space: Across Asia Exhibition</li>
            </ul>
            <div className="absolute -right-[28px] -top-[26px] sm:hidden block">
              <ModalContactMobile />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me Seperate */}
      <div className="w-[400px] sm:flex hidden flex-col items-center justify-between lg:mt-[60px] mt-5 gap-[15px]">
        <Line />
        <div className="flex items-center">
          <div className="flex items-center justify-center w-[58px] aspect-square">
            <GoArrowDown className="w-[45px] h-[45px]" />
          </div>
          <h1 className="text-[28px]">Contact me</h1>
        </div>
        <Line />
      </div>

      {/* Contact Section */}
      <div className="lg:mt-10 mt-5 px-[60px] sm:grid hidden lg:grid-cols-3 grid-cols-2 gap-[30px]">
        <div className="w-full h-full flex items-center">
          <img
            src="/img/contact/Contact_artist_left.jpg"
            alt="Contact_artist_left"
          />
        </div>
        <div className="w-full h-full flex items-center">
          <ContactContent />
        </div>
        <div className="w-full h-full lg:flex hidden items-center">
          <img src="/img/contact/Contact_Bom_Bun.jpg" alt="Contact_Bom_Bun" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex-1 lg:mt-[60px] sm:mt-10 mt-[30px] w-full">
        <Footer />
      </div>
    </div>
  );
}
