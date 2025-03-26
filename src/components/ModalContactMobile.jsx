import React, { useState } from "react";
import { GoX } from "react-icons/go";
import ContactContent from "./ContactContent";

export default function ModalContactMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Button Open */}
      <button
        className="w-20 aspect-square flex items-center justify-center bg-black rounded-full shadow-[6px_6px_6px_rgba(0,0,0,0.3)]"
        onClick={onOpen}
      >
        <span className="font-inter text-[16px] leading-tight text-white">
          Contact me
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-5">
          <div className="relative bg-white h-fit">
            <button className="absolute top-0 right-0 m-3" onClick={onClose}>
              <GoX className="w-[60px] h-[60px]" />
            </button>

            <img
              src="/img/contact/Contact_artist_left.jpg"
              alt="Contact_artist_left"
            />

            <div className="px-5 py-[30px]">
              <ContactContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
