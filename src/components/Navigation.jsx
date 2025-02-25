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
  }

  return (
    <>
      <nav ref={navRef} className="w-full">
        <div className="flex justify-between items-center py-6 pl-[60px] pr-[30px] mx-auto">
          {/* Page name */}
          <div className="text-[32px] flex items-center">
            <Link to="/" className="font-medium">
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
                    <li key={item.id} onClick={() => changePageHandling(item.link)}>
                      <HashLink
                        to={item.link}
                        className="flex justify-center w-16 text-base xl:text-base py-1 hover:text-secondary hover:font-bold transition-all duration-300"
                        style={{'textDecoration': currentPage === item.link ? 'underline' : ''}}
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

          <div
            className="lg:hidden sm:block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src="/img/icons/Hamburger-iphone.svg" alt="Hamburger-iphone" />
          </div>
        </div>
      </nav>
      <NavigationMobile isOpen={isOpen} />
    </>
  );
}
