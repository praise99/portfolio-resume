import React, { useRef } from "react";
import Hero from "components/Hero";
import Bio from "components/bio";
import Contact from "components/contact";
import Projects from "components/project";
const Landing = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Bio />
      <Contact />
    </div>
  );
};

export default Landing;
