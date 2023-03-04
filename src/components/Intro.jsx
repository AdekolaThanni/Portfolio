import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Spider from "./Spider";

function Intro({ setAppVisible, appVisible }) {
  const [loadingVisible, setLoadingVisible] = useState(false);

  useEffect(() => {
    // Spider icon fades in 1 second, then start loading
    setTimeout(() => {
      setLoadingVisible(true);

      // Loading ends in 3 seconds, then show application
      setTimeout(() => {
        setAppVisible(true);
      }, 3200);
    }, 1000);
  }, [setAppVisible]);

  return (
    <AnimatePresence>
      {!appVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          className="bg-black w-full h-full flex items-center justify-center flex-col"
        >
          {/* Spider icon */}
          <Spider
            width="6rem"
            height="6rem"
            gClass="fill-purple-primary"
            svgClass="rotate-180"
          />

          {/* Loading bar */}
          <div
            className={`overflow-hidden ${
              loadingVisible && "bg-[rgba(241,241,241,0.07)]"
            } rounded-lg mt-[4rem] w-[20rem] h-[.5rem]`}
          >
            {loadingVisible && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full block bg-purple-primary loading-bar"
              ></motion.span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
