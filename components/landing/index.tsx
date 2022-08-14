import React from "react";
import Hero from "components/Hero";
import Bio from "components/bio";
import Contact from "components/contact";
import Projects from "components/project";
const Landing = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Bio />
      <Contact />
    </>
  );
};

export default Landing;
