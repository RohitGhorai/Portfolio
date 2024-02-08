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
      className="flex flex-col justify-center items-center w-full lg:h-screen h-full overflow-hidden"
    >
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col justify-center sm:pb-0 pb-[30px] items-center overflow-hidden">
        <div className="flex flex-col sm:p-4 p-3">
          <h2
            className={`font-poppins font-semibold sm:text-[30px] md:text-[40px] text-[24px] sm:leading-[60px] leading-[50px] dark:text-white text-black opacity-80 ${
              scroll && "fade-in-from-TopToBottom"
            }`}
          >
            Work
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
            scroll && "fade-in-from-TopToBottom"
          }`}
        >
          // These are the technologies I’ve worked with
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly w-full sm:w-[90%] h-[80%] overflow-hidden md:p-[50px] p-[20px]">
        {work.map((card) => (
          <div
            className={`flip-card flex justify-center duration-500 transform items-center w-[80%] sm:w-[350px] h-[250px] rounded-[8px] sm:m-[10px] m-[5px] hover:cursor-pointer work-card relative shadow-lg hover:shadow-[#211e36] overflow-hidden ${
              scroll && "fade-in-from-TopToBottom"
            }`}
          >
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front flex justify-center items-center text-lg sm:text-xl text-black dark:text-[white] font-mono bg-cyan-100 dark:bg-[#211e36] bg-opacity-1 m-[2px] border-[0.5px] border-slate-800 dark:border-cyan-400 rounded-[8px]">
                <span className="text-center p-5">{card.title}</span>
              </div>
              <div className="flip-card-back flex flex-col justify-center items-center text-xs sm:text-sm text-[white] font-mono dark:bg-gray-800 bg-gray-500 m-[2px] border-[1px] border-slate-800 dark:border-cyan-400 rounded-[8px]">
                <span className="text-center font-poppins p-5">
                  {card.content}
                </span>
                <a href={card.src}>
                  <button
                    className="w-[80px] h-[40px] font-semibold rounded-[5px] border-[1px] font-mono border-cyan-400 bg-cyan-400 hover:bg-cyan-500 text-slate-800 hover:scale-[1.03] transition-transform duration-200"
                    href={card.src}
                  >
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
