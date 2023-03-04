import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ToolCard = ({ title, description, colorCode }) => {
  const svgSrc = title.replaceAll(" ", "").replaceAll(".", "dot").toLowerCase();
  return (
    <motion.div
      initial={{ translateY: "40px", opacity: 0 }}
      whileInView={{
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className="h-[33rem] bg-gray-dark flex items-center flex-col pb-[3rem] px-[2rem] relative rounded-3xl hover:bg-gray-light md-b:pb-[1rem] md-b:h-[20rem]"
    >
      <span
        className={`w-[2rem] h-[2rem] rounded-full block absolute top-[2rem] left-[2rem]`}
        style={{ backgroundColor: colorCode }}
      >
        &nbsp;
      </span>
      <div className="w-full h-[14.15rem] relative">
        {/* Logo */}
        <img
          src={require(`../assets/svg/${svgSrc}.svg`)}
          alt={title}
          className="w-[7rem] h-[7rem] absolute bottom-0 left-[50%] translate-x-[-50%] md-b:w-[5rem] md-b:h-[5rem]"
        />
      </div>

      {/* Title */}
      <h3
        className={`mt-[3.5rem] font-bold md-b:mt-[1.5rem]`}
        style={{ color: colorCode }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-[0.5rem] text-[1.8rem] md-b:text-[1.6rem] text-center text-[#d4d4d4]">
        {description}.
      </p>
    </motion.div>
  );
};

function Tools() {
  const tools = useSelector((state) => state.toolsReducer);

  return (
    <div className="grid grid-cols-3 pt-[5rem] gap-[2rem] lg:grid-cols-2 md-b:!grid-cols-1">
      {tools.map((tool, index) => (
        <ToolCard {...tool} key={index} />
      ))}
    </div>
  );
}

export default Tools;
