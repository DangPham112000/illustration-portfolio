import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import { useNavBar } from "../context/NavBarContext";
import getCurrentPath from "../utils/getCurrentPath";
import { HashLink } from "react-router-hash-link";

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
        <div className="flex justify-between items-center sm:py-6 py-[13px] sm:pl-[60px] pl-10 sm:pr-[30px] pr-5 mx-auto">
          {/* Page name */}
          <div className="lg:text-[32px] text-[24px] flex items-center">
            <Link
              to="/"
              onClick={() => changePageHandling("/")}
              className="font-medium"
            >
              <p>Ngoc Vo</p>
            </Link>
          </div>

          {/* Left nav */}
          <div className="hidden lg:block ">
            <div className="flex justify-between items-center gap-[50px]">
              {/* Link */}
              <ul className="flex items-center gap-[40px]">
                {menuList.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => changePageHandling(item.link)}
                    >
                      <HashLink
                        to={item.link}
                        className="flex justify-center w-16 text-base xl:text-base py-1 hover:text-secondary hover:font-bold transition-all duration-300"
                        style={
                          currentPage === item.link
                            ? {
                                TwTextOpacity: "1",
                                color:
                                  "rgb(30 152 209 / var(--tw-text-opacity, 1))",
                                fontWeight: "700",
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
    </div>
  );
}
