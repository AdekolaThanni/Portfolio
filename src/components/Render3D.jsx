import React from "react";
import { motion } from "framer-motion";

function Render3d({ src3D }) {
  return (
    <motion.img
      src={src3D}
      alt="3d render"
      className="absolute top-[25rem] right-[15rem] xl:right-0 md:top-[10rem] w-[15rem] h-[15rem] inline-block md-b:w-[12rem] md-b:h-[12rem]"
      initial={{ translateX: "60px", opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeIn" },
      }}
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
    />
  );
}

export default Render3d;
