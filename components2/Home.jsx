import { styles } from "../style";
import profile from "../assets2/profile.png";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Button from "./Button";
import TypeWriter from "typewriter-effect";

const Home = () => {
  return (
    <section
      id="home"
      className="flex sm:flex-row flex-col-reverse w-full h-full md:h-screen py-[80px] md:py-0 justify-center items-center px-[35px] lg:px-[18px] overflow-hidden"
    >
      <div className={`${styles.flexStart} flex-col sm:w-[50%] w-full`}>
        <p className="font-poppins font-semibold text-[12px] leading-[18px] text-[#962929]">
          Hi, my name is
        </p>
        <h2 className={`${styles.heading2} overflow-hidden`}>
          <span className="text-[#C2CCE5]">
          <TypeWriter
              options={{
                strings: ["Rohit Ghorai","Rohit"],
                delay:200,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <span className="text-[grey]">I’m a Full Stack Developer.</span>
        </h2>
        <p
          className={`${styles.paragraph} text-[grey] max-w-[592px] pt-[10px]`}
        >
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional, digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="flex lg:hidden flex-row text-[#828da6] mt-[20px] sm:gap-[20px] gap-[15px]">
          <FaLinkedin className="cursor-pointer hover:bg-[white] hover:text-[#0e76a8] sm:hover:scale-125 transform transition duration-300 w-[40px] h-[40px]" />
          <FaGithubSquare className="cursor-pointer hover:bg-[white] hover:text-[#1c1b1b] sm:hover:scale-125 transform transition duration-300 w-[40px] h-[40px]" />
          <BsInstagram className="cursor-pointer hover:bg-[white] w-[40px] h-[40px] sm:hover:scale-125 transform transition duration-300 instagram" />
          <FaFacebookSquare className="cursor-pointer hover:bg-[white] hover:text-[#0165E1] sm:hover:scale-125 transform transition duration-300 w-[40px] h-[40px]" />
        </div>
        <a href="#work"><Button styles="mt-[20px] md:mt-[35px]" value="View Work" /></a>

      </div>
      <div className="flex justify-center sm:justify-start xs:p-[35px] py-[20px]">
        <div className="relative sm:w-[320px] sm:h-[320px] xs:w-[260px] xs:h-[260px] w-[163px] h-[163px] rounded-full bg-[#D9D9D9] lg:hover:scale-125 transform transition duration-300 lg:hover:cursor-pointer">
          <div
            className="absolute sm:w-[308px] sm:h-[308px] xs:w-[250px] xs:h-[250px] w-[156px] h-[156px] rounded-full sm:m-[6.5px] m-[3.55px] xs:m-[5.5px]"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, #04172D -67.55deg, #04172D 36.93deg, rgba(18, 89, 171, 0.546875) 163.12deg, #04172D 292.45deg, #04172D 396.93deg)",
            }}
          >
            <img
              src={profile}
              alt="profile"
              className="w-[157px] xs:w-full h-[156px] xs:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
