import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Sidebar = () => {
  return (
    <nav className="lg:flex hidden fixed flex-col h-screen justify-center">
      <div className="flex flex-col text-[#828da6] mt-[20px] sm:gap-[10px] gap-[5px]">
        <a href="https://www.linkedin.com/in/rohit-ghorai-9b6717210/">
          <div className="flex group gap-[5px] bg-[#0e76a8] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[145px]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px]">
              LinkedIn&nbsp;&nbsp;
              <FaLinkedin className="flex cursor-pointer bg-[white] text-[#0e76a8] w-[40px] h-[40px]" />
            </p>
          </div>
        </a>
        <a href="https://www.github.com/RohitGhorai">
          <div className="flex group gap-[5px] bg-[#1c1b1b] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[130px]">
            <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px]">
              Github&nbsp;&nbsp;
              <FaGithubSquare className="flex cursor-pointer bg-[white] text-[#1c1b1b] w-[40px] h-[40px]" />
            </p>
          </div>
        </a>
        <div className="flex group gap-[5px] bg-[#0e76a8] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[170px]">
          <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px]">
            Instagram&nbsp;&nbsp;
            <BsInstagram className="flex cursor-pointer bg-[white] text-[#0e76a8] w-[40px] h-[40px]" />
          </p>
        </div>
        <div className="flex group gap-[5px] bg-[#0165E1] transition-all ease-in-out duration-[500ms] w-[40px] justify-end hover:w-[160px] cursor-pointer">
          <p className="flex items-center font-poppins font-semibold text-[20px] text-[white] pl-[5px]">
            Facebook&nbsp;&nbsp;
            <FaFacebookSquare className="flex bg-[white] text-[#0165E1] w-[40px] h-[40px]" />
          </p>
        </div>
        {/* <FaGithubSquare className="cursor-pointer hover:bg-[white] hover:text-[#1c1b1b] w-[40px] h-[40px]" />
        <BsInstagram className="cursor-pointer hover:bg-[white] w-[40px] h-[40px] instagram" />
        <FaFacebookSquare className="cursor-pointer hover:bg-[white] hover:text-[#0165E1] w-[40px] h-[40px]" /> */}
      </div>
    </nav>
  );
};

export default Sidebar;
