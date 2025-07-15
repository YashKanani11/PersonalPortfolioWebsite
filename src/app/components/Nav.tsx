import React from "react";
import ThemeToggle from "./thememode";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-6 border-accent">
        <div className="text-2xl font-bold flex items-center">Yash Kanani</div>
        <ul className="flex gap-8 text-sm items-center">
          <li>
            <a href="#projects" className="hover:text-accent">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent">
              Contat
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <div className="w-full flex">
        <div className="border-b w-[78%] border-border h-[3px]"></div>
        <div className="border-b w-[7%] border-[#4ade80] animate-rainbow-border"></div>
        <div className="border-b w-[6%] border-[#facc15] animate-rainbow-border delay-2"></div>
        <div className="border-b w-[5%] border-[#60a5fa] animate-rainbow-border delay-3"></div>
        <div className="border-b w-[4%] border-[#f87171] animate-rainbow-border delay-4"></div>
      </div>
    </>
  );
};

export default Nav;
