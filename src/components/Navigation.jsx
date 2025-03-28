import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import { useNavBar } from "../context/NavBarContext";
import getCurrentPath from "../utils/getCurrentPath";
import { HashLink } from "react-router-hash-link";
import Line from "./Line";
import { menuList } from "../data/menuList";
import {
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

  return (
    <div className="relative">
      <nav ref={navRef} className="w-full">
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

          {/* Desktop left nav */}
          <div className="hidden lg:block ">
            <div className="flex justify-between gap-10">
              {/* Link */}
              <ul className="flex items-end gap-[30px]">
                {menuList.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => changePageHandling(item.link)}
                    >
                      <HashLink
                        to={item.link}
                        className="flex justify-center text-[17px] px-1 hover:border-b-2 hover:border-black hover:-mb-[2px]"
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
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>

          {/* Ipad left nav */}
          <NavigationIpad currentPage={currentPage} />
          <div className="lg:hidden sm:flex hidden gap-4">
            <FacebookIcon />
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
