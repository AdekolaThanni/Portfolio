import Content from "./components/Content";
import Header from "./components/Header";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import { useRef } from "react";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
function App() {
  const scrollView = useRef();
  return (
    <main
      ref={scrollView}
      className="snap-y snap-mandatory h-screen overflow-y-scroll text-white"
    >
      {/* Hamburger */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        className="absolute top-[5rem] right-[4rem] z-10 group cursor-pointer"
      >
        <path
          fill="#eee"
          className="fill-white group-hover:fill-purple-primary duration-200"
          d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"
        />
      </svg>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
