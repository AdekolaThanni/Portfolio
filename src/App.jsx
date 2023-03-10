import React, { useState } from "react";
import Intro from "./components/Intro";
import useAppHeight from "./hooks/useAppHeight";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TelegramCaseStudy from "./components/TelegramCaseStudy";
import RunnerCaseStudy from "./components/RunnerCaseStudy";
import ShortlyCaseStudy from "./components/ShortlyCaseStudy";

const Contact = React.lazy(() => import("./components/Contact"));
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {
  const [appVisible, setAppVisible] = useState(false);
  useAppHeight();

  return (
    <>
      {/* Intro page */}
      <Intro setAppVisible={setAppVisible} appVisible={appVisible} />

      {appVisible && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="text-white scrollbar w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth"
        >
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />

          {/* Case studies */}
          <TelegramCaseStudy />
          <RunnerCaseStudy />
          <ShortlyCaseStudy />
        </motion.main>
      )}
    </>
  );
}

export default App;
