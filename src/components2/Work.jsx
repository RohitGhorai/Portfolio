import { useState, useEffect } from "react";
import { styles } from "../style";
import { work } from "../constant2";

const Work = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScroll(window.scrollY > window.innerHeight * 2 + 300)
    );
  }, []);

  return (
    <section
      id="work"
      className="flex flex-col justify-center items-center w-full h-screen overflow-hidden"
    >
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col justify-center sm:pb-0 pb-[30px] sm:items-start items-center overflow-hidden">
        <div className="flex flex-col sm:p-4 p-3">
          <h2
            className={`font-poppins font-semibold sm:text-[30px] md:text-[40px] text-[24px] sm:leading-[60px] leading-[50px] text-white opacity-80 ${
              scroll ? "fade-in-from-TopToBottom" : "hidden"
            }`}
          >
            Work
          </h2>
          <div
            className={`border-[#962929] sm:border-b-[5px] border-b-[3px] rounded-2xl ${
              scroll ? "fade-in-from-BottomToTop" : "hidden"
            }`}
          />
        </div>
        <p
          className={`flex items-center sm:justify-start justify-center ${
            styles.paragraph
          } w-full text-dimWhite sm:px-5 px-3 sm:pb-5 pb-2 ${
            scroll ? "fade-in-from-TopToBottom" : "hidden"
          }`}
        >
          // These are the technologies I’ve worked with
        </p>
      </div>
      {work.map((project, index) => (
        <div
          className={`flex justify-center items-center w-[85%] sm:w-[70%] lg:w-[50%] ${
            scroll
              ? [
                  index % 2 !== 0
                    ? "fade-in-from-right-to-left"
                    : "fade-in-from-left-to-right",
                ]
              : "hidden"
          }`}
        >
          <div className="w-[20%] h-full hidden sm:flex justify-center items-center pr-5 pl-2 sm:pr-8 sm:pl-0">
            <div className="flex relative justify-center items-center bg-[#9d1010] h-[90px] lg:h-[90%] w-[2.5px] rounded-[10px]">
              <div className="absolute w-[8px] h-[8px] bg-[#C2CCE5] rounded-full" />
            </div>
          </div>
          <div
            className={`${styles.paragraph} w-full px-5 py-5 border-l-[red] border-l-[1px] border-t-[red] border-t-[1px] rounded-[20px] hover:scale-[1.03] transform transition duration-200 hover:cursor-pointer mb-[10px] work-card`}
          >
            <span className="font-semibold text-[12px] text-[#9d1010] uppercase">
              {project.title}
              {" - "}
            </span>
            <span className="text-justify">{project.content}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
