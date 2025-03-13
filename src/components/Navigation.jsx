import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import { useNavBar } from "../context/NavBarContext";
import getCurrentPath from "../utils/getCurrentPath";
import { HashLink } from "react-router-hash-link";
import Line from "./Line";
import { menuList } from "../data/menuList";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(getCurrentPath());
  const navRef = useRef(null);
  const { updateNavBarHeight } = useNavBar();

  useEffect(() => {
    if (navRef.current) {
      updateNavBarHeight(navRef.current.offsetHeight);
    }
  }, [updateNavBarHeight]);

  const changePageHandling = (link) => {
    setCurrentPage(link);
  };

  return (
    <div className="relative">
      <nav ref={navRef} className="w-full">
        {/* sm:py-6 py-[13px] sm:pl-[60px] pl-10 sm:pr-[30px] pr-5 mx-auto */}
        <div className="flex justify-between items-center sm:mx-[60px] ml-10 mr-5 sm:h-[112px] h-[56px]">
          {/* Page name */}
          <div className="text-[32px] flex items-center">
            <Link
              to="/"
              onClick={() => changePageHandling("/")}
              className="font-medium font-logo"
            >
              <p>Ngoc Vo</p>
            </Link>
          </div>

          {/* Left nav */}
          <div className="hidden lg:block ">
            <div className="flex justify-between items-center gap-[40px]">
              {/* Link */}
              <ul className="flex items-center gap-[30px]">
                {menuList.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => changePageHandling(item.link)}
                    >
                      <HashLink
                        to={item.link}
                        className="flex justify-center text-[17px] px-1 hover:border-b-2 hover:border-black  hover:-mb-[2px]"
                        style={
                          currentPage === item.link
                            ? {
                                borderBottomWidth: "2px",
                                marginBottom: "-2px",
                                borderColor: "black",
                              }
                            : {}
                        }
                      >
                        <p>{item.title}</p>
                      </HashLink>
                    </li>
                  );
                })}
              </ul>

              {/* Social icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/icons/Facebook.svg" alt="Facebook" />
                </a>
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/icons/Insta.svg" alt="Insta" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <img src="/img/icons/black_close.svg" alt="black_close" />
            ) : (
              <img
                src="/img/icons/Hamburger-iphone.svg"
                alt="Hamburger-iphone"
              />
            )}
          </div>
        </div>
      </nav>
      <NavigationMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:hidden fixed bottom-5 right-5 z-10 flex flex-col gap-[10px] ">
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/icons/Facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/icons/Insta.svg" alt="Insta" />
        </a>
      </div>
      <Line />
    </div>
  );
}
