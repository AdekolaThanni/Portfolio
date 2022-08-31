import React from "react";
import useVanta from "../hooks/useVanta";

function Home() {
  const vantaRef = useVanta();
  return (
    <section
      ref={vantaRef}
      id="home"
      className="flex items-center flex-col justify-center"
    >
      <h1 className="text-[8rem] leading-[9rem] mb-[.5rem] text-center">
        Software <span className="text-purple-primary">Developer</span> <br />
        <span className="text-purple-primary">UI/UX</span> Designer
        <span className="text-purple-primary">.</span>
      </h1>
      {/* Sub headline */}
      <p className="text-[3rem] text-purple-secondary">
        It's Work and Passion.
      </p>

      <a
        href="#contact"
        className="p-[1.5rem] px-[2rem] border-purple-secondary border text-purple-secondary text-[2rem] mt-[5rem] hover:border-white hover:text-white duration-200"
      >
        Get in Touch
      </a>
    </section>
  );
}

export default Home;
