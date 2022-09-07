import React from "react";
import useVanta from "../hooks/useVanta";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { navigationActions } from "../store/navigation";

function Home() {
  const vantaRef = useVanta();
  const dispatch = useDispatch();

  const updateSection = () => {
    dispatch(navigationActions.updateSection("home"));
  };

  return (
    <motion.section
      ref={vantaRef}
      onViewportEnter={updateSection}
      viewport={{ margin: "-100px 0px 0px" }}
      id="home"
      className="flex items-center flex-col justify-center bg-black snap-start min-h-screen text-left sm:text-center"
    >
      {/* Headline */}
      <h1 className="text-[7.5rem] xs:text-[8rem] leading-[9.3rem] mb-[.5rem] text-center flex flex-col items-center">
        <span className="">
          Software <span className="text-purple-primary">Developer</span>
        </span>
        <span className="">
          <span className="text-purple-primary">UI/UX</span> Designer
          <span className="text-purple-primary">.</span>
        </span>
      </h1>
      {/* Sub headline */}
      <p className="text-[2.5rem] xs:mt-0 mt-[.5rem] xs:text-[3rem] text-purple-secondary">
        It's Work and Passion.
      </p>
      {/* CTA button */}
      <a
        href="#contact"
        className="p-[1.5rem] px-[2rem] border-purple-secondary border text-purple-secondary text-[2rem] mt-[5rem] hover:border-white hover:text-white duration-200 rounded-[.5rem]"
      >
        Get in Touch
      </a>
    </motion.section>
  );
}

export default Home;
