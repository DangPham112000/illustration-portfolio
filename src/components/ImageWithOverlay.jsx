import React from "react";
import { Link } from "react-router-dom";
import colorToRGBA from "../utils/colorToRGBA";

const ImageWithOverlay = ({
  imageUrl,
  imageTitle,
  imageId,
  imageMainColor = "#228B22",
}) => {
  return (
    <Link
      to={`/magicDetail/${imageId}`}
      className="relative group h-full w-full"
    >
      <img
        src={imageUrl}
        alt={imageId}
        className="object-cover h-full w-full"
        loading="lazy"
      />
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-90"
        style={{ backgroundColor: colorToRGBA(imageMainColor) }}
      />
    </Link>
  );
};

export default ImageWithOverlay;
