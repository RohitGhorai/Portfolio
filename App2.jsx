import React from "react";
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
  return (
    <div className="bg-[#04172D]">
      <Sidebar />
      <Navbar />
      <Home />
      <ProgressBar styles="flex" />
      <About />
      <ProgressBar styles="flex" />
      <Experience />
      <ProgressBar styles="hidden lg:flex" />
      <Work />
      <ProgressBar styles="hidden lg:flex" />
      <Contact />
    </div>
  );
}

export default App2;
