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
      className="flex flex-col justify-center items-center w-full h-full md:h-screen md:py-0 py-[80px]"
    >
      <div className="w-[80%] sm:w-[70%] lg:w-[50%] flex flex-col justify-center sm:pb-0 pb-[30px] items-center overflow-hidden">
        <div className="flex flex-col sm:p-4 p-3">
          <h2
            className={`font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[60px] leading-[50px] text-black dark:text-white opacity-80 ${
              scroll && "fade-in-from-TopToBottom"
            }`}
          >
            Experience
          </h2>
          <div
            className={`border-[#962929] sm:border-b-[5px] border-b-[3px] rounded-2xl ${
              scroll && "fade-in-from-BottomToTop"
            }`}
          />
        </div>
        <p
          className={`flex items-center justify-center ${
            styles.paragraph
          } w-full text-dimWhite sm:px-5 px-3 sm:pb-5 pb-2 ${
            scroll && "fade-in-from-left-to-right"
          }`}
        >
          // These are the technologies I’ve worked with
        </p>
      </div>
      <div className="flex flex-wrap w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] justify-center items-center overflow-hidden">
        {exp.map((exp, index) => (
          <div
            className={`bg-white hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex flex-col justify-center items-center md:w-[120px] w-[100px] md:h-[130px] h-[115px] mt-[15px] sm:mt-[15px] ml-[30px] sm:ml-[15px] sm:mb-[10px] mb-0 hover:cursor-pointer hover:border-t-cyan-600 hover:border-l-cyan-600 hover:border-t-[1px] hover:border-l-[1px] relative rounded-[15px] shadow-lg hover:shadow-[#211e36] border-[1px] border-[#211e36] overflow-hidden ${
              scroll
                && [
                    index % 2 !== 0
                      ? "fade-in-from-left-to-right"
                      : "fade-in-from-right-to-left",
                  ]
              
            }`}
          >
            <img
              id={exp.id}
              src={exp.src}
              className={`${
                scroll
                  && [
                      index % 2 !== 0
                        ? "fade-in-from-left-to-right"
                        : "fade-in-from-right-to-left",
                    ]
                
              } my-2 object-fill h-[60px] w-[20]`}
              alt={exp.title + ` logo`}
            />
            <p
              className={`${styles.paragraph} text-dimWhite pb-5 ${
                scroll && "fade-in-from-right-to-left"
              } justify-center items-center flex w-full h-full text-cyan-700 font-semibold dark:text-slate-200`}
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
