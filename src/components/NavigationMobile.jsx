import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { useNavBar } from "../context/NavBarContext";

const menuList = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "magic",
    title: "Magic",
    link: "/magic",
  },
  {
    id: "life",
    title: "Life",
    link: "/life",
  },
  {
    id: "about",
    title: "About",
    link: "/abco",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/abco#contact",
  },
];

export default function NavigationMobile({ isOpen, setIsOpen }) {
  const { navBarHeight } = useNavBar();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden absolute w-full top-full left-0 z-50"
          style={{ height: `calc(100vh - ${navBarHeight}px)` }}
        >
          <div className="bg-black h-full">
            <ul className="flex flex-col justify-end items-end gap-[46px] py-[50px] px-[55px]">
              {menuList.map((item) => {
                return (
                  <li key={item.id}>
                    <HashLink
                      onClick={() => setIsOpen(false)}
                      to={item.link}
                      className="inline-block text-white text-[28px] hover:text-secondary hover:font-bold transition-all duration-300"
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
  );
}
