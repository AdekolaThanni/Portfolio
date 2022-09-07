import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation";
import { useEffect } from "react";

function Section({ id, className, children, title }) {
  const computedClassName = `${className} bg-black snap-start min-h-screen pt-[2rem] sm:pt-[5rem] text-left sm:text-center px-[1rem] sm:px-[2.5rem]`;
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const dispatch = useDispatch();

  const updateSection = () => {
    dispatch(navigationActions.updateSection(id));
  };

  useEffect(() => {
    console.log(`${ref.current.id} is in view`);
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.section
      onViewportEnter={updateSection}
      viewport={{ margin: "-50px" }}
      id={id}
      ref={ref}
      className={computedClassName}
    >
      <div
        className={`${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[10rem]"
        } duration-[900ms] ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-[500ms]`}
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
      </div>
    </motion.section>
  );
}

export default Section;
