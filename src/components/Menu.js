import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../store/navigation";

function Menu({ isVisible, hideMenu }) {
  const [isVisibleState, setIsVisibleState] = useState(true);
  const currentSection = useSelector((state) => state.navigationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsVisibleState(isVisible);
  }, [isVisible]);

  const navigateTo = (section) => {
    dispatch(navigationActions.updateSection(section));
    hideMenu();
  };

  const parent = {
    hidden: {
      height: 0,
    },
    visible: {
      height: "100vh",
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      height: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisibleState && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hide"
          variants={parent}
          className="fixed flex flex-col items-center justify-center gap-[2rem] overflow-hidden top-0 left-0 w-screen h-screen text-[4rem] bg-[#000000c4] backdrop-blur-lg z-50 "
        >
          {/* Close icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute sm:right-[5rem] right-[3rem] top-[5rem] group cursor-pointer p-[.5rem] w-[5rem] h-[5rem] rounded-full bg-purple-primary z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              onClick={hideMenu}
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
                clip-rule="evenodd"
                className="fill-white"
              />
            </svg>
          </motion.div>
          {/* Sidebar */}
          <a
            href="#home"
            onClick={() => navigateTo("home")}
            className={`text-[5rem] xs:text-[6rem] hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
              currentSection === "home" && "text-purple-primary"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => navigateTo("about")}
            className={`text-[5rem] xs:text-[6rem] hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
              currentSection === "about" && "text-purple-primary"
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => navigateTo("projects")}
            className={`text-[5rem] xs:text-[6rem] hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
              currentSection === "projects" && "text-purple-primary"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => navigateTo("contact")}
            className={`text-[5rem] xs:text-[6rem] hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
              currentSection === "contact" && "text-purple-primary"
            }`}
          >
            Contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
