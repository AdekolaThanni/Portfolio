import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation";

function Section({ id, className, children, title }) {
  const dispatch = useDispatch();

  const updateSection = () => {
    dispatch(navigationActions.updateSection(id));
  };

  return (
    <motion.section
      onViewportEnter={updateSection}
      viewport={{ margin: "0px 0px -500px 0px" }}
      id={id}
      className={`${className} pt-[35rem] text-left md:pt-[20rem]`}
    >
      <div className="max-w-[102rem] mx-auto px-[4rem] md-b:px-[2rem]">
        {/* Heading */}
        <motion.h2
          initial={{ translateY: "20px", opacity: 0 }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          viewport={{ margin: "0px 0px -200px 0px", once: true }}
          className="mb-[2rem] md-b:!mb-[1rem] text-[6rem] font-bold inline-block text-gradient md-b:text-[4.5rem]"
        >
          {title}
        </motion.h2>

        {/* Section content */}
        {children}
      </div>
    </motion.section>
  );
}

export default Section;
