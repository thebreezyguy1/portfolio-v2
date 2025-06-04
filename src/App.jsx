import { useState } from "react";
import logo from "./assets/logo.png";
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";
import hamburger from "./assets/hamburger.png";
import dorian from "./assets/dorian.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className={`main ` + (theme === "light" ? `light` : `dark`)}>
      <div className="main-inner-container">
        <section className="header">
          <img className="logo" src={logo} alt="" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={handleTheme}
              className="sun-icon"
              src={theme === "light" ? sun : moon}
              alt=""
            />
            <img className="hamburger-icon" src={hamburger} alt="" />
            {menuOpen && (
              <ul className="links">
                <li>About Me</li>
                <li>Resume</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            )}
          </div>
        </section>
        <section id="intro">
          <img className="main-img" src={dorian} alt="" />
          <h1>
            Hi, I'm <span>Dorian Taponzing Donfack</span>
          </h1>
          <p className="text-intro">
            I'm a passionate software engineer and recent Computer Science
            graduate from Kennesaw State University. I love turning complex
            problems into elegant, scalable solutions through code. Welcome to
            my portfolio, where you can explore my projects, experiences, and
            achievements that reflect my journey in tech.
          </p>
          <div className="about-buttons-container">
            <button style={{ backgroundColor: "#80D8C3", marginRight: "15px" }}>
              Download my resume
            </button>
            <button style={{ border: "2px solid #000" }}>Connect</button>
          </div>
        </section>
        <section id="about">
          <h1>About Me</h1>
          <p>
            I'm a curious and driven Computer Science student, graduating in May
            2025, with a strong foundation in software engineering, distributed
            systems, and AI-powered solutions. I’ve had the opportunity to
            intern at Afriland First Bank and MK World Business, where I built
            robust backend services and cross-platform mobile apps that improved
            system efficiency and user engagement.
          </p>
          <p>
            Beyond the code, I'm an active member of the National Society of
            Black Engineers and ColorStack, and I’ve earned multiple honors
            including back-to-back President’s List recognition.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
