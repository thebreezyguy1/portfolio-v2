import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h1 className="section-title">About Me</h1>
      <p>
        I'm a curious and driven Computer Science student, graduating in May
        2025, with a strong foundation in software engineering, distributed
        systems, and AI-powered solutions. I’ve had the opportunity to intern at
        Afriland First Bank and MK World Business, where I built robust backend
        services and cross-platform mobile apps that improved system efficiency
        and user engagement.
      </p>
      <p>
        Beyond the code, I'm an active member of the National Society of Black
        Engineers and ColorStack, and I’ve earned multiple honors including
        back-to-back President’s List recognition.
      </p>
      <div id="achievements">
        <div className="achievement">
          <h3 className="data">4+</h3>
          <p>Coding Expertise</p>
        </div>
        <div className="achievement">
          <h3>🇨🇲</h3>
          <p>Nationality</p>
        </div>
        <div className="achievement">
          <h3 className="data">15+</h3>
          <p>Programming Languages</p>
        </div>
        <div className="achievement">
          <h3 className="data">English / French</h3>
          <p>Languages</p>
        </div>
      </div>
    </section>
  );
};

export default About;
