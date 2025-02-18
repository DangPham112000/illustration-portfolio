import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

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
    link: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export default function NavigationMobile({ isOpen }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden absolute w-full top-20 left-0"
        >
          <div className="bg-black h-full">
            <ul className="flex flex-col justify-end items-end gap-10 py-10 px-10">
              {menuList.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block text-white text-4xl py-1 px-2 hover:text-secondary hover:font-bold transition-all duration-300 font-normal"
                    >
                      {item.title}
                    </Link>
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
