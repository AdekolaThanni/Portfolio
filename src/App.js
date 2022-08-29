import Content from "./components/Content";
import Header from "./components/Header";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import { useRef } from "react";
function App() {
  const scrollView = useRef();
  return (
    <main
      ref={scrollView}
      className="snap-y snap-mandatory h-screen overflow-y-scroll text-white"
    >
      <Home />
      <About />
    </main>
  );
}

export default App;
