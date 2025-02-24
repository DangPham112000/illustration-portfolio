import { useState } from "react";
import { motion } from "framer-motion";
const images = [
  {
    title: "phanthiet",
    src: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    src: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    src: "/img/magics/NguoiLayCoc.png",
  },

  {
    title: "phanthiet",
    src: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    src: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    src: "/img/magics/NguoiLayCoc.png",
  },

  {
    title: "phanthiet",
    src: "/img/magics/PhanThiet.png",
  },
  {
    title: "VuKienChauChau",
    src: "/img/magics/VuKienChauChau.png",
  },
  {
    title: "NguoiLayCoc",
    src: "/img/magics/NguoiLayCoc.png",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-[75%] mx-auto">
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        &lt;
      </button>

      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${(image.width / image.height) * 100}px`, // Maintain aspect ratio
              marginRight: index < images.length - 1 ? "15px" : "0", // Gap between images
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>

      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
