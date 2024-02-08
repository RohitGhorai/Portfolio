import { useState, useEffect } from "react";
import { styles } from "../style";

const About = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full h-full sm:h-screen flex flex-col justify-center items-center overflow-hidden px-[35px]"
    >
      <div className="w-full flex justify-center items-center overflow-hidden">
        <div className="flex flex-col p-4">
          <h2
            className={`font-poppins font-semibold sm:text-[50px] text-[38px] sm:leading-[70px] leading-[50px] text-black dark:text-white opacity-90 ${
              scroll && "fade-in-from-TopToBottom"
            }`}
          >
            About
          </h2>
          <div
            className={`border-[#962929] sm:border-b-[5px] border-b-[3px] rounded-2xl ${
              scroll && "fade-in-from-BottomToTop"
            }`}
          />
        </div>
      </div>
      <div className="flex items-center sm:items-start justify-center sm:flex-row flex-col w-full sm:max-w-[924px] overflow-hidden">
        <h4
          className={`font-poppins font-semibold text-[32px] leading-[48px] sm:w-[50%] text-cyan-700 dark:text-white opacity-[80%] sm:text-right text-left sm:px-3 px-0 py-2 ${
            scroll && "fade-in-from-left-to-right"
          }`}
        >
          Hi, I’m Rohit, nice to meet you. Please take a look around!
        </h4>

        <p
          className={`${
            styles.paragraph
          } sm:w-[50%] dark:text-white opacity-[60%] sm:px-7 sm:py-5 px-0 py-1 ${
            scroll && "fade-in-from-right-to-left"
          }`}
        >
          To build career in a growing organization, where I can get the
          opportunities to prove my abilities by accepting challenges,
          fulfilling the organizational goal and climb the career ladder through
          continuous learning and commitment.
        </p>
      </div>
    </section>
  );
};

export default About;
