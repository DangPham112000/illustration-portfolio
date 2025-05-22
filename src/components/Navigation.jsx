import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import { useNavBar } from "../context/NavBarContext";
import getCurrentPath from "../utils/getCurrentPath";
import { HashLink } from "react-router-hash-link";
import Line from "./Line";
import { menuList } from "../data/menuList";
import {
  BehanceIcon,
  FacebookIcon,
  FacebookLiteIcon,
  InstagramIcon,
  InstagramLiteIcon,
} from "./button/socialIcon";
import NavigationIpad from "./NavigationIpad";

export default function Navigation() {
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

  const getMenuCss = (link) => {
    return currentPage === link
      ? {
          borderBottomWidth: "2px",
          marginBottom: "-2px",
          borderColor: "black",
        }
      : {};
  };

  return (
    <div className="relative">
      <nav ref={navRef} className="w-full">
        <div className="flex justify-between items-center sm:mx-[60px] ml-10 mr-5 sm:h-[112px] h-[56px]">
          {/* Page name */}
          <Link
            to="/"
            onClick={() => changePageHandling("/")}
            className="h-full"
          >
            <img
              src="/img/logo/NgocVo-WebLogo@3x.jpg"
              className="lg:block hidden h-full w-auto"
            />
            <img
              src="/img/logo/NgocVo-MobileLogo@3x.jpg"
              className="lg:hidden block h-full w-auto"
            />
          </Link>

          {/* Desktop left nav */}
          <div className="hidden lg:block ">
            <div className="flex justify-between gap-10">
              {/* Link */}
              <ul className="flex items-end gap-[30px] font-normal">
                <li onClick={() => changePageHandling("/")}>
                  <HashLink
                    to="/"
                    className="flex justify-center text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px]"
                    style={getMenuCss("/")}
                  >
                    <p>Home</p>
                  </HashLink>
                </li>
                <li className="relative group">
                  <div className="flex justify-center text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px] cursor-pointer group-hover:text-gray-400">
                    <p>Projects</p>
                  </div>
                  <ul className="absolute left-0 pt-[10px] w-[155px] gap-[10px] bg-transparent hidden group-hover:flex flex-col z-10">
                    <li className="" onClick={() => changePageHandling("/magic")}>
                      <HashLink
                        to="/magic"
                        className="flex justify-start text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px] w-fit"
                        style={getMenuCss("/magic")}
                      >
                        Magic and Fairy
                      </HashLink>
                    </li>
                    <li onClick={() => changePageHandling("/life")}>
                      <HashLink
                        to="/life"
                        className="flex justify-start text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px] w-fit"
                        style={getMenuCss("/life")}
                      >
                        Life drawings
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li onClick={() => changePageHandling("/about")}>
                  <HashLink
                    to="/about"
                    className="flex justify-center text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px]"
                    style={getMenuCss("/about")}
                  >
                    <p>About me</p>
                  </HashLink>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex gap-4">
                {/* <FacebookIcon /> */}
                <BehanceIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>

          {/* Ipad left nav */}
          <NavigationIpad currentPage={currentPage} />
          <div className="lg:hidden sm:flex hidden gap-4">
            {/* <FacebookIcon /> */}
            <BehanceIcon />
            <InstagramIcon />
          </div>

          {/* Mobile left nav */}
          <div className="sm:hidden flex items-center gap-5">
            <div className="flex items-center gap-[15px]">
              <FacebookLiteIcon width={25} />
              <InstagramLiteIcon width={29} />
            </div>

            <NavigationMobile currentPage={currentPage} />
          </div>
        </div>
      </nav>
      <Line />
    </div>
  );
}
