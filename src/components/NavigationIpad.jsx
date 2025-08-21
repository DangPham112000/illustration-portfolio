import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuList } from "../data/menuList";
import { HashLink } from "react-router-hash-link";
import { useNavBar } from "../context/NavBarContext";

export default function NavigationIpad({ currentPage, changePageHandling }) {
  const [isOpen, setIsOpen] = useState(false);

  const { navBarHeight } = useNavBar();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Button */}
      <button className="lg:hidden sm:block hidden" onClick={toggleOpen}>
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
            initial={{ opacity: 0, y: navBarHeight }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full h-[300px] top-0 left-0 z-50"
          >
            <div className="bg-black h-full flex items-center justify-center">
              <ul className="flex justify-between gap-[60px]">
                {menuList.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.external ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="inline-block text-white text-[28px] font-light"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <HashLink
                          onClick={() => {
                            setIsOpen(false);
                            changePageHandling(item.link);
                          }}
                          to={item.link}
                          className="inline-block text-white text-[28px] font-light"
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
                      )}
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
