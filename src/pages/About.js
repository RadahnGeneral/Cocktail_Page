import React from "react";
import LoremIpsum from "react-lorem-ipsum";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <LoremIpsum p={1} />
    </section>
  );
};

export default About;
