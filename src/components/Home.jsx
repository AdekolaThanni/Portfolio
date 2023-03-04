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
      className="flex items-center flex-col justify-center h-full bg-black text-left sm:text-center relative"
    >
      {/* Headline */}
      <motion.h1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="text-[9rem] leading-[10rem] mb-[.5rem] text-center flex flex-col items-center font-extrabold xl:text-[7rem] xl:leading-[8rem] md-b:text-[7.5rem]"
      >
        <span className="md:mb-[1.5rem]">
          Fullstack{" "}
          <span className="text-purple-primary text-gradient">Developer</span>
        </span>
        <span className="">
          <span className="text-purple-primary text-gradient">
            UI/UX
            <br className="hidden md:inline" />
          </span>{" "}
          <span>Designer</span>
          <span className="text-purple-primary text-gradient">.</span>
        </span>
      </motion.h1>

      {/* CTA button */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        href="#contact"
        className="p-[1.5rem] px-[2rem] border-purple-secondary border text-purple-secondary text-[2rem] hover:border-white hover:text-white duration-200 rounded-[.5rem] absolute bottom-[7rem] left-[50%] -translate-x-[50%]"
      >
        Get In Touch!
      </motion.a>

      {/* Scrolldown indicator */}
      <div className="absolute bottom-[5rem] right-[-4rem] flex items-center gap-[1rem] rotate-90">
        <span className="text-[1rem] block bounce uppercase">scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-[2rem] h-[2rem]"
        >
          <path
            fill="currentColor"
            d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"
          />
        </svg>
      </div>
    </motion.section>
  );
}

export default Home;
