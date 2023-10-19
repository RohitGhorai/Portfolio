import React, { useEffect, useState } from "react";
import {
  Navbar,
  Sidebar,
  ProgressBar,
  Home,
  About,
  Experience,
  Work,
  Contact,
} from "./components2";

function App2() {
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
  console.log(scrollProgress);
  return (
    <div className="bg-[#04172D] overflow-hidden">
      <Sidebar />
      <Navbar scrollProgress={scrollProgress}/>
      <Home />
      <ProgressBar styles="flex" />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App2;
