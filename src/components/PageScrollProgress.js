import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function PageScrollProgress({ scrollRef }) {
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="w-[0.2rem] h-screen origin-top bg-purple-primary fixed top-0 bottom-0 right-0 z-[1000]"
      style={{ scaleY }}
    ></motion.div>
  );
}

export default PageScrollProgress;
