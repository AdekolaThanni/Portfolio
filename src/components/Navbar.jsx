import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../store/navigation";
import Spider from "./Spider";

const NavLink = ({ section, children }) => {
  const currentSection = useSelector((state) => state.navigationReducer);
  const dispatch = useDispatch();

  const updateSection = () => {
    dispatch(navigationActions.updateSection(section));
  };

  return (
    <a
      onClick={() => updateSection()}
      href={`#${section}`}
      className={`${
        currentSection === section && "text-gradient"
      } lowercase hover:opacity-70 duration-100 md:capitalize`}
    >
      {children}
    </a>
  );
};

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const currentSection = useSelector((state) => state.navigationReducer);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-center z-10 backdrop-blur-sm bg-[#00000004] ${
        navbarVisible && "backdrop-blur-[unset]"
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, translateY: -30 }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 1,
          },
        }}
        className={`mt-[1.5rem] mx-[2rem] bg-[#00000059] backdrop-blur-lg flex items-center justify-between basis-[140rem] py-[1rem] px-[10rem] rounded-full gap-[5rem] lg:px-[5rem] ${
          navbarVisible && "md:backdrop-blur-[unset]"
        }`}
      >
        {/* Spider logo */}
        <NavLink section="home">
          <Spider
            svgClass="rotate-180 w-[3rem] h-[3rem]"
            gClass={`${currentSection === "home" ? "svg-gradient-fill" : ""}`}
          />
        </NavLink>

        <div
          className={`text-white text-[2rem] flex items-center justify-between basis-[35rem] gap-[2rem] lg:basis-[30rem] duration-200 md:absolute md:top-0 md:right-0 md:h-screen md:bg-[#00000080] md:backdrop-blur-md md:basis-0 md:flex-col md:justify-center md:text-[5rem] md:gap-[4rem] md:overflow-hidden ${
            navbarVisible ? "md:w-screen " : "md:w-0"
          }`}
          id="menu-overlay"
          onClick={(event) => {
            if (event.target.id === "menu-overlay") return;
            setNavbarVisible(false);
          }}
        >
          <NavLink section="about">About</NavLink>
          <NavLink section="projects">Projects</NavLink>
          <NavLink section="contact">Contact</NavLink>

          {/* Close Icon */}
          <div className="hover:scale-110 absolute right-[5rem] top-[5rem] group cursor-pointer p-[.5rem] w-[5rem] h-[5rem] rounded-full background-gradient z-[1000] duration-100 hidden md:inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              onClick={() => setNavbarVisible(false)}
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
                clip-rule="evenodd"
                className="fill-white"
              />
            </svg>
          </div>
        </div>

        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[3rem] h-[3rem] hidden md:inline-block"
          onClick={() => setNavbarVisible(true)}
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </motion.nav>
    </div>
  );
}

export default Navbar;
