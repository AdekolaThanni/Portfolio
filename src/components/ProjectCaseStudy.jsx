import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { caseStudyActions } from "../store/caseStudy";

function ProjectCaseStudy({ children, visible }) {
  // useEffect(() => {
  //   alert("Change");
  // }, [visible]);

  const dispatch = useDispatch();

  return (
    visible && (
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000090] backdrop-blur-xl z-[1000] text-white overflow-y-scroll scrollbar ">
        {/* Close icon */}
        <div
          onClick={() => dispatch(caseStudyActions.hideCaseStudy())}
          className="hover:scale-110 fixed right-[5rem] top-[5rem] group cursor-pointer p-[.5rem] w-[5rem] h-[5rem] rounded-full background-gradient z-[1000] duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4rem"
            height="4rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
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

        {/* Content */}
        <div className="max-w-[120rem] mx-auto py-[10rem] text-[1.8rem] px-[2rem]">
          {children}
        </div>
      </div>
    )
  );
}

export default ProjectCaseStudy;
