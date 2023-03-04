import React from "react";
import Section from "./Section";
import Bubble from "../assets/3d/Bubble.png";
import Tools from "./Tools";
import Render3D from "./Render3D";

function About() {
  return (
    <Section id="about" className="relative" title="About Me">
      {/* Text */}
      <p className="">
        Hi, my name is Adekola Thanni,
        <br></br>
        I’m a Fullstack developer and a UI/UX designer, I started my coding
        journey in the year 2019 and since then it has been a rollercoaster
        ride, not complaining though. Learning stacks after stacks, building
        projects upon projects has been my mission for the past years now.
        <br></br>
        <br></br>I work <span className="text-purple-secondary">Remotely </span>
        with the best tools possible to create High end, SEO optimized, Fast and
        Responsive web apps.
        <br></br>
        <br></br>
        The tools I work with?
      </p>

      {/* 3d icon */}
      <Render3D src3D={Bubble} />

      {/* Tools */}
      <Tools />
    </Section>
  );
}

export default About;
