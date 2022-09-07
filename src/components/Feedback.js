import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function Feedback({ status, closeFeedback }) {
  const transition = {
    duration: 0.4,
    ease: "easeInOut",
  };
  return ReactDOM.createPortal(
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100vh", transition: { duration: 0.1 } }}
      exit={{ height: 0, transition: { duration: 0.1 } }}
      className="absolute w-screen bg-[#000000c4] backdrop-blur-lg flex flex-col items-center justify-center top-0 left-0 z-[1000] text-center text-white"
    >
      {/* Close Icon */}
      <div className="hover:scale-110 absolute sm:right-[5rem] right-[3rem] top-[5rem] group cursor-pointer p-[.5rem] w-[5rem] h-[5rem] rounded-full bg-purple-primary z-[1000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4rem"
          height="4rem"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
          onClick={closeFeedback}
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
    </motion.div>,
    document.getElementById("overlay")
  );
}

export default Feedback;
