import React from "react";
import ReactDOM from "react-dom";

function ProjectCaseStudy() {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#ffffff49] backdrop-blur-md z-100 text-white">
      <div className="max-w-[120rem] mx-auto py-[10rem]">
        <h2 className="">Runner</h2>
        <p className="mt-[2rem] text-[2rem]">
          This is a web app that was made to allow the buying of shoe products
          by customers
        </p>
      </div>
      {/* Title */}
    </div>,
    document.getElementById("overlay")
  );
}

export default ProjectCaseStudy;
