import { useRef, useState } from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageScrollProgress from "./components/PageScrollProgress";

function App() {
  const scrollRef = useRef();
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <>
      <main
        ref={scrollRef}
        className="snap-y snap-mandatory overflow-x-hidden h-screen overflow-y-scroll text-white scroll-smooth"
      >
        {/* Page scroll progress */}
        <PageScrollProgress scrollRef={scrollRef} />
        {/* Hamburger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          className="absolute sm:top-[5rem] sm:right-[4rem] top-[2rem] right-[1rem] z-10 group cursor-pointer"
          onClick={() => setMenuVisibility(true)}
        >
          <path
            fill="#eee"
            className="fill-white group-hover:fill-purple-primary duration-200"
            d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"
          />
        </svg>
        <Menu
          isVisible={menuVisibility}
          hideMenu={() => setMenuVisibility(false)}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
