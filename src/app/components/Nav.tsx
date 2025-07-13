import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-accent">
      <div className="text-2xl font-bold">JM</div>
      <ul className="flex gap-8 text-sm">
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
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
