import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../store/navigation";

function Menu({ isVisible, hideMenu }) {
  const [isVisibleState, setIsVisibleState] = useState(isVisible);
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
      width: 0,
    },
    visible: {
      width: "100vw",
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      width: 0,
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
          className="fixed overflow-hidden top-0 left-0 w-screen h-screen text-[4rem] bg-[#00000079] backdrop-blur-md shadow-md z-50 "
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5rem"
            height="5rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
            className={`absolute right-[5rem] top-[5rem] group cursor-pointer duration-[10ms] z-10`}
            onClick={hideMenu}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
              clip-rule="evenodd"
              className="fill-white group-hover:fill-purple-primary"
            />
          </svg>
          {/* Sidebar */}
          <div className="text-white w-screen md:w-[50vw] relative h-screen bg-[#00000091] backdrop-blur-md">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-start justify-center gap-[3rem]">
              <a
                href="#home"
                onClick={() => navigateTo("home")}
                className={`hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
                  currentSection === "home" && "text-purple-primary"
                }`}
              >
                <svg
                  width="100"
                  height="3"
                  viewBox="0 0 100 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="100"
                    y2="1.5"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                </svg>
                Home
              </a>
              <a
                href="#about"
                onClick={() => navigateTo("about")}
                className={`hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
                  currentSection === "about" && "text-purple-primary"
                }`}
              >
                <svg
                  width="100"
                  height="3"
                  viewBox="0 0 100 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="100"
                    y2="1.5"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                </svg>
                About
              </a>
              <a
                href="#projects"
                onClick={() => navigateTo("projects")}
                className={`hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
                  currentSection === "projects" && "text-purple-primary"
                }`}
              >
                <svg
                  width="100"
                  height="3"
                  viewBox="0 0 100 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="100"
                    y2="1.5"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                </svg>
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => navigateTo("contact")}
                className={`hover:text-purple-secondary duration-75 flex gap-[1rem] items-center ${
                  currentSection === "contact" && "text-purple-primary"
                }`}
              >
                <svg
                  width="100"
                  height="3"
                  viewBox="0 0 100 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.5"
                    x2="100"
                    y2="1.5"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
