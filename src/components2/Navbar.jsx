import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { navLinks } from "../constant2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrollProgress }) => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const handleClick = () => setToggle(!toggle);

  return (
    <>
      <nav
        className={`flex fixed ${
          scroll && "shadow-lg bg-[#fffdfdbd]"
        } z-[99] w-full justify-between items-center dark:bg-[#04172D]`}
      >
        <div className="flex w-full z-10 justify-between items-center text-white dark:bg-[#04172D] py-3 px-8">
          <div className="flex w-[15%] gap-1 justify-center items-center lg:hover:scale-125 transform transition duration-300">
            <img
              src={logo}
              alt="logo"
              className="w-[47px] h-[47px] bg-white rounded-full"
              style={{ mixBlendMode: "white" }}
            />
            <span className="font-mono text-slate-900 dark:text-red-800 text-2xl font-semibold">
              Rohit
            </span>
          </div>
          <ul className="hidden sm:flex gap-[44px] items-center justify-end">
            {navLinks.map((navLink) => (
              <a href={`#${navLink.id}`} key={`${navLink.id}`}>
                <li className="font-poppins text-black hover:text-slate-800 dark:text-[#9B96B9] text-[18px] dark:hover:text-white hover:scale-125 transform transition duration-300">
                  {navLink.title}
                </li>
              </a>
            ))}
          </ul>
          <div
            onClick={handleClick}
            className="sm:hidden w-[30px] h-[20px] cursor-pointer text-slate-800 hover:text-slate-200 dark:hover:text-white"
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
              : "absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center navToggle"
          }
        >
          {navLinks.map((navLink) => (
            <a href={`#${navLink.id}`} key={`${navLink.id}`}>
              <li className="font-poppins py-6 text-black text-2xl hover:text-[#b7b4c8]">
                {navLink.title}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <div className="h-screen fixed right-0 z-[100]" key={"progress"}>
        <div
          className="bg-[#962929] w-[3px] lg:w-[5px] rounded"
          style={{
            transition: "height 0s ease-in-out",
            height: `${scrollProgress}%`,
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
