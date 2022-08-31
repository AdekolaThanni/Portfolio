import React from "react";
import useVanta from "../../hooks/useVanta";

function Home() {
  const vantaRef = useVanta();
  return (
    <section
      ref={vantaRef}
      id="home"
      className="flex items-center flex-col justify-center relative"
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

      {/* CTA */}
      <div className="hidden absolute bottom-[2rem] right-[4rem] flex-col items-center group cursor-pointer">
        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5rem"
          height="2.5rem"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 384 512"
          className="animate-bounce"
        >
          <path
            fill="#eee"
            className="fill-white"
            d="M169.4 278.6c6.2 6.3 14.4 9.4 22.6 9.4s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zm160-13.2L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.72-12.475-45.22.025z"
          />
        </svg>
        {/* Message */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5rem"
          height="5rem"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
          className=""
        >
          <path
            className="fill-white"
            d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"
          />
        </svg>
      </div>

      <button className="p-[1.5rem] px-[2rem] border-purple-secondary border text-purple-secondary text-[2rem] mt-[5rem] hover:border-white hover:text-white duration-200">
        Get in Touch
      </button>
    </section>
  );
}

export default Home;
