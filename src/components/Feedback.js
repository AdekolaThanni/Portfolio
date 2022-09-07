import React from "react";
import { motion } from "framer-motion";

function Feedback({ status }) {
  const transition = {
    duration: 0.4,
    ease: "easeInOut",
  };
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100vh", transition: { duration: 0.1 } }}
      exit={{ height: 0, transition: { duration: 0.1 } }}
      className="absolute w-screen bg-[#000000c4] backdrop-blur-lg flex flex-col items-center justify-center top-0 left-0 z-[1000] text-center"
    >
      {status === "pending" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20rem"
          height="20rem"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
          className="animate-spin"
        >
          <path
            fill="currentColor"
            className="fill-purple-primary"
            d="M10 3a7 7 0 0 0-7 7a.5.5 0 0 1-1 0a8 8 0 1 1 8 8a.5.5 0 0 1 0-1a7 7 0 1 0 0-14Z"
          />
        </svg>
      )}

      {status === "success" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20rem"
            height="20rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <motion.path
              fill="none"
              className="stroke-purple-primary"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 12l6 6L20 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
            />
          </svg>
          <span className="">
            Thanks for reaching out!, will get back to you soon.
          </span>
        </>
      )}

      {status === "fail" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20rem"
            height="20rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <motion.path
              fill="none"
              className="stroke-red-500 origin-top-left"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2 30L30 2m0 28L2 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
            />
          </svg>
          <span className="mt-[1rem]">
            Oops! an error occured. Please try again
          </span>
        </>
      )}
    </motion.div>
  );
}

export default Feedback;
