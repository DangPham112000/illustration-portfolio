import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUp from "./ArrowUp";

const ScrollToTopButton = ({ headRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toHeadHandling = () => {
    headRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = (event) => {
    if (event.target.scrollTop > event.target.clientHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const currentDocument = document.querySelector("main");

    currentDocument.addEventListener("scroll", toggleVisibility);

    // Cleanup listener
    return () => {
      currentDocument.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={toHeadHandling}
          className="cursor-pointer w-full"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
