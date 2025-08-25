import React from "react";
import { useState } from "react";
import "./qualifications.css";
import kennesaw from "../../assets/kennesaw.png";
import afriland from "../../assets/AFRILAND.png";
import mkwbc from "../../assets/mk-wbc.png";
import codepath from "../../assets/codepath.png";

const Qualifications = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const handleDisplay = (content) => {
    if (content === "experience") {
      setShowExperience(true);
      setShowEducation(false);
      setShowSkills(false);
    } else if (content === "education") {
      setShowEducation(true);
      setShowExperience(false);
      setShowSkills(false);
    } else {
      setShowSkills(true);
      setShowEducation(false);
      setShowExperience(false);
    }
  };

  return (
    <section id="qualifications">
      <h1 className="section-title">Qualifications</h1>
      <div className="qualification-btns">
        <button
          id={showExperience ? "active" : ""}
          onClick={() => handleDisplay("experience")}
        >
          Experience
        </button>
        <button
          id={showEducation ? "active" : ""}
          onClick={() => handleDisplay("education")}
        >
          Education
        </button>
        <button
          id={showSkills ? "active" : ""}
          onClick={() => handleDisplay("skills")}
        >
          Skills
        </button>
      </div>
      {showExperience && (
        <div className="experiences">
          <div className="experience">
            <img className="company-logo" src={kennesaw} alt="kennesaw" />
            <p>August 2024 - May 2025</p>
            <h3>Teaching Lab Assistant</h3>
            <p>Kennesaw State University</p>
          </div>
          <div className="experience">
            <img className="company-logo" src={afriland} alt="afriland" />
            <p>May 2023 - August 2023</p>
            <h3>Software Developer Intern</h3>
            <p>Afriland First Bank</p>
          </div>
          <div className="experience">
            <img className="company-logo" src={mkwbc} alt="mk-wbc" />
            <p>June 2022 - August 2022</p>
            <h3>Software Engineer Intern</h3>
            <p>MK World Business</p>
          </div>
        </div>
      )}
      {showEducation && (
        <div className="education">
          <div className="school">
            <img className="company-logo" src={kennesaw} alt="kennesaw" />
            <p>Kennesaw State University</p>
            <h3>Bachelor of Science - Computer Science</h3>
            <p>January 2021 - May 2025</p>
          </div>
          <div className="school">
            <img className="company-logo" src={codepath} alt="codepath" />
            <p>CodePath</p>
            <h3>Technical Interview Prep</h3>
            <p>June 2024 - August 2024</p>
          </div>
        </div>
      )}
      {showSkills && (
        <div className="skills">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
        </div>
      )}
    </section>
  );
};

export default Qualifications;
