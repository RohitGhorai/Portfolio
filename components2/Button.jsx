import React from "react";

const Button = ({ value, styles }) => (
  // <button className={`py-4 px-8 focus:outline-none bg-gradient font-poppins font-medium text-[16px] text-white border ${styles} hover:text-black`}>
  //   {value}
  // </button>
  <button
    href="#_"
    class={`${styles} relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-poppins font-medium group`}
  >
    <span class="w-full h-full absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-150 ease-in-out group-hover:text-[#04172D]">
      {value}
    </span>
    <span class="absolute inset-0 border-[1px] border-white"></span>
  </button>
);

export default Button;
