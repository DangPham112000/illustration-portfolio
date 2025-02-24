import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import { useNavBar } from "../context/NavBarContext";
import getCurrentPath from "../utils/getCurrentPath";
import Line from "./Line";

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
      <nav ref={navRef} className="nav w-full">
        <div className="container flex justify-between items-center py-6 mx-auto">
          {/* Page name */}
          <div className="text-3xl flex items-center">
            <Link to="/" className="font-medium">
              <p>Ngoc Vo</p>
            </Link>
          </div>

          {/* Left nav */}
          <div className="hidden lg:block ">
            <div className="flex justify-between items-center gap-6">
              <ul className="flex items-center gap-6">
                {menuList.map((item) => {
                  return (
                    <li key={item.id} onClick={() => changePageHandling(item.link)}>
                      <Link
                        to={item.link}
                        className="inline-block text-gray-600 text-base xl:text-base py-1 px-2 xl:px-3 hover:text-secondary hover:font-bold transition-all duration-300 font-normal"
                        style={{'textDecoration': currentPage === item.link ? 'underline' : ''}}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Social icons */}
              <div className="flex space-x-6">
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
