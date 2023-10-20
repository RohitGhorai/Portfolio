import { useState, useEffect } from "react";
import { styles } from "../style";
import { exp } from "../constant2";

const Experience = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight + 300);
    });
  }, []);
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center w-full h-screen md:py-0 py-[80px]"
    >
      <div className="w-[80%] sm:w-[70%] lg:w-[50%] flex flex-col justify-center sm:pb-0 pb-[30px] sm:items-start items-center overflow-hidden">
        <div className="flex flex-col sm:p-4 p-3">
          <h2
            className={`font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[60px] leading-[50px] text-white opacity-80 ${
              scroll ? "fade-in-from-TopToBottom" : "lg:hidden"
            }`}
          >
            Experience
          </h2>
          <div
            className={`border-[#962929] sm:border-b-[5px] border-b-[3px] rounded-2xl ${
              scroll ? "fade-in-from-BottomToTop" : "lg:hidden"
            }`}
          />
        </div>
        <p
          className={`flex items-center sm:justify-start justify-center ${
            styles.paragraph
          } w-full text-dimWhite sm:px-5 px-3 sm:pb-5 pb-2 ${
            scroll ? "fade-in-from-left-to-right" : "lg:hidden"
          }`}
        >
          // These are the technologies I’ve worked with
        </p>
      </div>
      <div className="flex flex-wrap w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] justify-center sm:justify-start items-center overflow-hidden">
        {exp.map((exp, index) => (
          <div
            className={`flex flex-col justify-center items-center md:w-[155px] w-[128px] md:h-[149px] h-[127px] mt-[15px] sm:mt-[15px] ml-[30px] sm:ml-[15px] sm:mb-[10px] mb-0 hover:cursor-pointer hover:border-t-[#962929] hover:border-l-[#962929] hover:border-t-[1px] hover:border-l-[1px] relative rounded-[15px] shadow-lg hover:shadow-[#211e36] border-[1px] border-[#211e36] overflow-hidden ${
              scroll ? [
                index % 2 !== 0
                  ? "fade-in-from-left-to-right"
                  : "fade-in-from-right-to-left",
              ] : "lg:hidden"
            }`}
          >
            <img
              id={exp.id}
              src={exp.src}
              className={`${
                scroll ? [
                  index % 2 !== 0
                    ? "fade-in-from-left-to-right"
                    : "fade-in-from-right-to-left",
                ] : "lg:hidden"
              } my-2`}
              alt="html"
            />
            <p
              className={`${styles.paragraph} text-dimWhite pb-5 ${
                scroll ? "fade-in-from-right-to-left" : "lg:hidden"
              } justify-center items-center flex w-full h-full`}
            >
              {exp.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
