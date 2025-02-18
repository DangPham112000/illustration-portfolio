import React from "react";

export default function About() {
  return (
    <>
      <div className="mb-auto mt-[160px]">
        <div className="flex justify-between items-center px-[60px] gap-10">
          <img
            className="object-cover w-[449px] h-[449px]"
            src="/img/projects/NguoiLayCoc.png"
            alt="NguoiLayCoc"
          />
          <div className="flex flex-col gap-10">
            <p>Hello!</p>
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
        </div>
      </div>
    </>
  );
}
