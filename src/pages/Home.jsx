import React from "react";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col flex-1 lg:bg-[url('/img/background/Homepage_illustration_desktop.jpg')] md:bg-[url('/img/background/Homepage_illustration_tablet.png')] bg-[url('/img/background/Homepage_illustration_phone.png')] bg-cover bg-center">
        <div className="absolute sm:top-[110px] top-[130px] sm:left-[60px] left-10 sm:w-[371px] w-[219px] text-base">
          <p>
            I draw, design, write, make ceramics and I love creating new things
            wherever I go — all with a joyful heart.
          </p>
          <p>Welcome to my little world!</p>
        </div>
        <div className="mt-auto text-center mb-4">
          <Copyright />
        </div>
      </div>
    </>
  );
}
