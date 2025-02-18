import React, { useEffect, useRef, useState } from "react";
import { Vibrant } from "node-vibrant/browser";

const ImageWithOverlay = ({ imageUrl, imageTitle, projectLink }) => {
  const imgRef = useRef(null);
  const [mainColor, setMainColor] = useState("rgba(0, 0, 0, 0)");

  useEffect(() => {
    const img = imgRef.current;

    if (img.complete) {
      extractColor(img.src);
    } else {
      img.addEventListener("load", () => {
        extractColor(img.src);
      });
    }

    return () => {
      img.removeEventListener("load", () => {});
    };
  }, [imageUrl]);

  const extractColor = (src) => {
    Vibrant.from(src)
      .getPalette()
      .then((palette) => {
        const color = palette.Vibrant.hex;
        setMainColor(
          `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
            color.slice(3, 5),
            16
          )}, ${parseInt(color.slice(5, 7), 16)}, 0.5)`
        );
      });
  };

  return (
    <a href={projectLink} className="relative group h-full w-full">
      <img
        ref={imgRef}
        src={imageUrl}
        alt={imageTitle}
        className="object-cover h-full w-full"
      />
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: mainColor }}
      />
    </a>
  );
};

export default ImageWithOverlay;
