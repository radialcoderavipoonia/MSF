"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "./common/Helper";
import { MenuIcon, SearchIcon } from "./common/Icons";
import CustomSolidButton from "./common/CustomSolidButton";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="bg-white-smoke p-3 flex-grow-0 relative z-50">
      <div className="flex items-center justify-between container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <Link href="/">
          <Image
            src="/assets/images/navbar/logo.svg"
            width={56}
            height={56}
            alt="Logo"
          />
        </Link>
        <ul className="hidden lg:flex gap-9">
          {navLink.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  aria-label={link.title}
                  className="text-onxy font-georgia relative before:absolute before:w-0 before:hover:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-primary-orange before:left-[50%] before:hover:left-0 before:bottom-[-10px] text-base font-normal leading-normal transition-all ease-in-out duration-300"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2">
          <span className="cursor-pointer">
            <SearchIcon />
          </span>
          <div className="sm:block hidden">
            <CustomSolidButton content="Free Consultation" />
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          aria-label="menu icon"
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <MenuIcon />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed h-full inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      {/* Sidebar content */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full h-screen bg-white-smoke z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-3 h-screen flex justify-center items-center flex-col">
          {/* Close button for mobile */}
          <button
            aria-label="cross icon"
            className="text-black text-3xl absolute top-4 sm:end-10 end-5 z-40"
            onClick={sidebarHandler}
          >
            <MenuIcon />
          </button>
          {/* Mobile navigation links */}
          <ul className="flex flex-col w-full gap-6 justify-center items-center">
            {navLink.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    aria-label={link.title}
                    className="text-onxy font-georgia relative before:absolute before:w-0 before:hover:w-full before:transition-all before:duration-300 before:h-[2px] before:bg-primary-orange before:left-[50%] before:hover:left-0 before:bottom-[-10px] text-base font-normal leading-normal transition-all ease-in-out duration-300"
                    href={link.path}
                    onClick={sidebarHandler}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Access button for mobile */}
          <div className="mt-6">
            <div className="sm:hidden block">
              <CustomSolidButton content="Free Consultation" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
