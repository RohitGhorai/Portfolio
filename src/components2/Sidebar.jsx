import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Sidebar = () => {
  return (
    <nav className="lg:flex hidden fixed flex-col h-screen justify-center">
      <div className="flex flex-col text-[#828da6] mt-[20px] sm:gap-[10px] gap-[5px]">
        <a
          key="linkedin"
          href="https://www.linkedin.com/in/rohit-ghorai-9b6717210/"
        >
          <div className="flex group gap-[5px] bg-[#0e76a8] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[145px] border-[2px] border-[#0e76a8]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px] gap-2">
              LinkedIn
              <FaLinkedin className="flex cursor-pointer bg-[white] text-[#0e76a8] w-[40px] h-[40px]" />
            </p>
          </div>
        </a>
        <a key="github" href="https://www.github.com/RohitGhorai">
          <div className="flex group gap-[5px] bg-[#1c1b1b] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[130px] border-[2px] border-[#1c1b1b]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px] gap-2">
              Github
              <FaGithubSquare className="flex cursor-pointer bg-[white] text-[#1c1b1b] w-[40px] h-[40px]" />
            </p>
          </div>
        </a>
        <a key="instagram" href="https://www.instagram.com/rohit.ghorai_">
          <div className="flex group gap-[5px] transition-all ease-in-out duration-[500ms] w-[40px] cursor-pointer justify-end hover:w-[170px] bg-gradient-to-r from-[#f09433] to-[#bc1888] border-[2px] border-[#f09433]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px] gap-2">
              Instagram
              <BsInstagram className="flex bg-[white] text-[#fff] w-[40px] h-[40px] bg-gradient-to-r from-[#f09433] to-[#bc1888]" />
            </p>
          </div>
        </a>
        <a key="facebook" href="https://www.facebook.com/rohit.ghorai.37/">
          <div className="flex group gap-[5px] bg-[#0165E1] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[160px] cursor-pointer border-[2px] border-[#0165E1]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px] gap-2">
              Facebook
              <FaFacebookSquare className="flex bg-[white] text-[#0165E1] w-[40px] h-[40px]" />
            </p>
          </div>
        </a>
        {/* <FaGithubSquare className="cursor-pointer hover:bg-[white] hover:text-[#1c1b1b] w-[40px] h-[40px]" />
        <BsInstagram className="cursor-pointer hover:bg-[white] w-[40px] h-[40px] instagram" />
        <FaFacebookSquare className="cursor-pointer hover:bg-[white] hover:text-[#0165E1] w-[40px] h-[40px]" /> */}
      </div>
    </nav>
  );
};

export default Sidebar;
