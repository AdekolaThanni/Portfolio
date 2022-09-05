import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation";

function Section({ id, className, children, title }) {
  const computedClassName = `${className} bg-black snap-start min-h-screen pt-[2rem] sm:pt-[5rem] text-left sm:text-center`;
  const dispatch = useDispatch();

  const updateSection = () => {
    dispatch(navigationActions.updateSection(id));
  };

  return (
    <motion.section
      onViewportEnter={updateSection}
      viewport={{ margin: "-50px" }}
      id={id}
      className={computedClassName}
    >
      {/* Heading */}
      {title && (
        <h2 className="mb-[2rem] sm:mb-[5rem] text-[4rem] text-purple-primary block sm:flex items-center gap-[1.2rem] justify-center">
          <svg
            width="100"
            height="3"
            viewBox="0 0 100 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block "
          >
            <line
              y1="1.5"
              x2="100"
              y2="1.5"
              stroke="currentColor"
              stroke-width="3"
            />
          </svg>
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}

export default Section;
