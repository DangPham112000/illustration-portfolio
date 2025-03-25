import React from "react";
import Line from "../components/Line";
import { GoArrowDown } from "react-icons/go";
import Footer from "../components/Footer";

export default function About2() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* About Section */}
      <div className="bg-[url('/img/contact/circle_BG.jpg')] bg-contain bg-center pt-[60px] px-[60px]">
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="w-full flex flex-col gap-[30px]">
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
          <div className="flex flex-col gap-[10px] px-[30px] text-[17px] leading-[21px]">
            <h1 className="text-[28px]">Hello!</h1>
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
          <div className="flex flex-col gap-[30px] h-fit ring-[1px] ring-black p-[30px] pl-[60px] text-[17px] leading-[21px]">
            <p className="font-medium">Recognition</p>
            <ul className="list-disc">
              <li>2012 ASEAN-Korea Multimedia Competition</li>
              <li>2014 Summer program "K-Pop Wave and ASEAN"</li>
              <li>2014 Korea-ASEAN Exhibition in Jakarta</li>
              <li>2024 2024 Media X Space: Across Asia Exhibition</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Me Seperate */}
      <div className="w-[400px] flex flex-col items-center justify-between mt-[60px] gap-[15px]">
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
      <div className="mt-10 px-[60px] grid grid-cols-3 gap-[30px]">
        <div className="w-full h-full flex items-center">
          <img
            src="/img/contact/Contact_artist_left.jpg"
            alt="Contact_artist_left"
          />
        </div>
        <div className="w-full h-full flex items-center">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-[28px]">Hi! Let's work together.</h1>
            <div className="flex flex-col gap-[5px] text-[17px] leading-[21px]">
              <p>I'm excited to work on:</p>
              <ul className="list-disc ml-[30px]">
                <li>Children's Book Illustration</li>
                <li>Picture Book Illustration</li>
                <li>Editorial Illustration</li>
                <li>Motion Graphics</li>
                <li>Ceramic Arts</li>
              </ul>
              <p>For commissions and project enquiries, please contact:</p>
              <p className="font-medium text-[21px] underline text-[#FF4B6F]">
                ngoc.vo.illustration@gmail.com
              </p>
            </div>
            <div className="w-[52px]">
              <Line />
            </div>
            <p className="text-[17px] leading-[21px] italic font-inter">
              I am happy to hear from you :)
            </p>
          </div>
        </div>
        <div className="w-full h-full flex items-center">
          <img src="/img/contact/Contact_Bom_Bun.jpg" alt="Contact_Bom_Bun" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex-1 mt-[60px] w-full">
        <Footer />
      </div>
    </div>
  );
}
