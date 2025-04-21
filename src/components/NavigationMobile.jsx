import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavBar } from "../context/NavBarContext";
import { menuList } from "../data/menuList";

export default function NavigationMobile({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { navBarHeight } = useNavBar();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // window.addEventListener("resize", () => {
    //   const pageHeight = document.documentElement.scrollHeight;
    //   console.log("Current page height:", pageHeight, navBarHeight);
    // });
    console.log(ref, document.querySelector('#root').clientHeight);
  }, [navBarHeight, ref, isOpen]);

  return (
    <>
      {/* Button */}
      <button className="sm:hidden block" onClick={toggleOpen}>
        {isOpen ? (
          <img src="/img/icons/black_close.svg" alt="black_close" />
        ) : (
          <img src="/img/icons/Hamburger-iphone.svg" alt="Hamburger-iphone" />
        )}
      </button>

      {/* Nav */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full top-full left-0 z-50"
            style={{ height: `calc(100vh - ${navBarHeight}px - 1px)` }}
          >
            <div className="bg-black h-full" ref={ref}>
              <ul className="flex flex-col justify-end items-end gap-[46px] py-[50px] px-[55px]">
                {menuList.map((item) => {
                  return (
                    <li key={item.id}>
                      <HashLink
                        onClick={() => setIsOpen(false)}
                        to={item.link}
                        className="inline-block text-white text-[28px]"
                        style={
                          currentPage === item.link
                            ? {
                                borderBottomWidth: "2px",
                                marginBottom: "-2px",
                                borderColor: "white",
                              }
                            : {}
                        }
                      >
                        {item.title}
                      </HashLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
