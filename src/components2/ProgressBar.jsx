import { useState, useEffect } from "react";

const ProgressBar = ({ styles }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles} justify-center sm:visible hidden`}>
      <div
        className="h-[1px] bg-[#962929] rounded"
        style={{
          transition: "width 0.05s ease-in-out",
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
