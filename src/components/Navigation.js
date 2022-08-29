import React, { useState } from "react";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("hom");

  const handleClick = (event) => {
    const value = event.currentTarget.href.split("#")[1];
    setActiveLink(value);
  };
  return (
    <div className="flex gap-[5rem]">
      {/* About Link */}
      <a
        onClick={handleClick}
        href="#about"
        className={`${
          activeLink === "about" && "bg-gray-light"
        } hover:bg-gray-light duration-200 nav-link text-[1.5rem]`}
      >
        About
      </a>
      {/* Projects Link */}
      <a
        onClick={handleClick}
        href="#projects"
        className={`${
          activeLink === "projects" && "bg-gray-light"
        } hover:bg-gray-light duration-200 nav-link text-[1.5rem]`}
      >
        Projects
      </a>
      {/* contact Link */}
      <a
        onClick={handleClick}
        href="#contact"
        className={`${
          activeLink === "contact" && "bg-gray-light"
        } hover:bg-gray-light duration-200 nav-link text-[1.5rem]`}
      >
        Contact
      </a>
    </div>
  );
}

export default Sidebar;
