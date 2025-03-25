import React, { useEffect, useState } from "react";

const IMG_GAP = 30;
const MAX_COL = 2;

export default function LifeGridIpad({ imgs, openModal }) {
  const [imgWidth, setImgWidth] = useState(288);

  useEffect(() => {
    const lifeGridWidth = document.getElementById("LifeGrid").offsetWidth;
    const newImgWidth = (lifeGridWidth - IMG_GAP * (MAX_COL - 1)) / MAX_COL;
    setImgWidth(newImgWidth);
  }, []);

  return (
    <div
      id="LifeGrid"
      className="lg:hidden sm:grid sm:grid-cols-2 hidden gap-5"
      style={{
        gap: `${IMG_GAP}px`,
      }}
    >
      {imgs.map((imgName, index) => (
        <img
          src={`/img/life/square/${imgName}`}
          alt={index}
          key={index}
          onClick={() => openModal(index)}
          className="aspect-square object-cover"
          style={{
            width: `${imgWidth}px`,
          }}
        />
      ))}
    </div>
  );
}
