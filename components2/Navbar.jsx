import React, { useState, useEffect } from "react";
import logo from "../assets2/logo.jpg";
import { navLinks } from "../constant2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const handleClick = () => setToggle(!toggle);

  return (
    <nav
      className={`flex fixed ${
        scroll ? "shadow-lg" : ""
      } z-[99] w-full justify-between items-center bg-[#04172D]`}
    >
      <div className="flex w-full z-10 justify-between items-center bg-[#04172D] py-3 px-8">
        <img src={logo} alt="logo" className="w-[55px] h-[47px] lg:hover:scale-125 transform transition duration-300" />
        <ul className="hidden sm:flex gap-[44px] items-center justify-end">
          {navLinks.map((navLink) => (
            <a href={`#${navLink.id}`}>
              <li
                key={`${navLink.id}`}
                className="font-poppins text-[#9B96B9] text-[18px] hover:text-white hover:scale-125 transform transition duration-300"
              >
                {navLink.title}
              </li>
            </a>
          ))}
        </ul>
        <div
          onClick={handleClick}
          className="sm:hidden w-[30px] h-[20px] text-dimWhite cursor-pointer hover:text-white"
        >
          {toggle ? (
            <FaTimes className="w-[30px] h-[20px]" />
          ) : (
            <FaBars className="w-[30px] h-[20px]" />
          )}
        </div>
      </div>
      <ul
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 w-full h-screen flex flex-col justify-center items-center navToggle"
        }
      >
        {navLinks.map((navLink) => (
          <a href={`#${navLink.id}`}>
            <li
              key={`${navLink.id}`}
              className="font-poppins py-6 text-white text-2xl hover:text-[#b7b4c8]"
            >
              {navLink.title}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
