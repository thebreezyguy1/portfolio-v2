import { useState, useRef } from "react";
import logo from "./assets/logo.png";
import moon from "./assets/moon.png";
import hamburger from "./assets/hamburger.png";
import dorian from "./assets/dorian.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "./assets/Dorian-Taponzing-Resume.pdf";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    if (theme === "light") {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  };

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

  const toggleContainerVisibility = () => {
    const container = document.querySelector(".sun-icon");
    const hamburger = document.querySelector(".nav-mob-open");

    if (window.scrollY > 0) {
      container.classList.add("hidden");
      hamburger.setAttribute(
        "src",
        "https://img.icons8.com/ios-glyphs/40/c2c2c2/hamburger.png"
      );
    } else {
      container.classList.remove("hidden");
      hamburger.setAttribute(
        "src",
        "https://img.icons8.com/ios-glyphs/40/f1c40f/hamburger.png"
      );
    }
  };

  window.addEventListener("scroll", toggleContainerVisibility);

  return (
    <div className={`main ` + (theme === "light" ? `light` : `dark`)}>
      <div className="main-inner-container">
        <div className="header">
          <img className="logo" src={logo} alt="" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              onClick={handleTheme}
              className="sun-icon"
              src={
                theme === "light"
                  ? "https://img.icons8.com/material-rounded/40/f1c40f/sun--v1.png"
                  : "https://img.icons8.com/ios-glyphs/40/f1c40f/moon-symbol.png"
              }
              alt=""
            />
            <img
              onClick={openMenu}
              className="nav-mob-open"
              src={"https://img.icons8.com/ios-glyphs/40/f1c40f/hamburger.png"}
              alt=""
            />
            <ul ref={menuRef} className="nav-menu">
              <img
                onClick={closeMenu}
                className="nav-mob-close"
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/30/ffffff/delete-sign--v1.png"
                alt="delete-sign--v1"
              />
              <li>
                <AnchorLink href="#intro">
                  <p>Home</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#about">
                  <p>About Me</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#achievements">
                  <p>Achievements</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#qualifications">
                  <p>Qualifications</p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={50} href="#contacts">
                  <p>Contacts</p>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
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
            <a
              href={resume}
              download={"Dorian-Taponzing-Donfack-Resume.pdf"}
              className="resume-button"
            >
              Download my resume{" "}
              <img
                id="download-icon"
                width="48"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/download--v1.png"
                alt="download--v1"
              />
            </a>
            <AnchorLink className="connect-btn" offset={50} href="#contacts">
              Connect
            </AnchorLink>
          </div>
        </section>
        <section id="about">
          <h1 className="section-title">About Me</h1>
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
                <img
                  className="company-logo"
                  src={"src/assets/kennesaw.png"}
                  alt=""
                />
                <p>August 2024 - May 2025</p>
                <h3>Teaching Lab Assistant</h3>
                <p>Kennesaw State University</p>
              </div>
              <div className="experience">
                <img
                  className="company-logo"
                  src={"src/assets/AFRILAND.png"}
                  alt=""
                />
                <p>May 2023 - August 2023</p>
                <h3>Software Developer Intern</h3>
                <p>Afriland First Bank</p>
              </div>
              <div className="experience">
                <img
                  className="company-logo"
                  src={"src/assets/mk-wbc.png"}
                  alt=""
                />
                <p>June 2022 - August 2022</p>
                <h3>Software Engineer Intern</h3>
                <p>MK World Business</p>
              </div>
            </div>
          )}
          {showEducation && (
            <div className="education">
              <div className="school">
                <img
                  className="company-logo"
                  src={"src/assets/kennesaw.png"}
                  alt=""
                />
                <p>Kennesaw State University</p>
                <h3>Bachelor of Science - Computer Science</h3>
                <p>January 2021 - May 2025</p>
              </div>
              <div className="school">
                <img
                  className="company-logo"
                  src={"src/assets/codepath.png"}
                  alt=""
                />
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
        <section>
          <div className="projects">
            <h1 className="section-title">Projects</h1>
            <div className="project">
              <h3 className="project-name">Redis Server Project</h3>
              <img
                className="project-img"
                src={"src/assets/redis.png"}
                alt=""
              />
              <div className="project-buttons">
                <button>View Project</button>
                <button>See Demo</button>
              </div>
              <div className="project-desc">
                <p>
                  Built a lightweight Redis-inspired in-memory key-value store
                  using Java, focused on performance and scalability. The system
                  uses a HashMap for fast data access and is backed by a
                  multithreaded socket-based server. With ExecutorService and
                  ThreadPoolExecutor, the server supports high concurrency and
                  processes thousands of client commands per second with minimal
                  resource contention. Ideal for educational purposes and
                  demonstrating core concepts in systems programming, concurrent
                  processing, and network communication.
                </p>
              </div>
            </div>
            <div className="project">
              <h3 className="project-name">Campus AI Companion</h3>
              <img src={"src/assets/campus-ai.png"} alt="" />
              <div className="project-desc">
                <p>
                  Developed Campus AI Companion, a full-stack mobile app
                  designed to support students with personalized academic
                  guidance. Built with React Native and Node.js, the app
                  integrates Firebase for secure authentication and real-time
                  updates. By leveraging OpenAI's API, it delivers AI-powered
                  recommendations for study schedules, course planning, and
                  career paths. The app features a responsive, cross-platform UI
                  and demonstrated a measurable increase in user engagement and
                  retention during pilot testing.
                </p>
              </div>
            </div>
            <div className="project">
              <h3 className="project-name">Food Ordering System App</h3>
              <img src={"src/assets/food-ordering.jpg"} alt="" />
              <div className="project-desc">
                <p>
                  Built a desktop-based Food Ordering System using Java, JavaFX,
                  and MySQL, structured around the MVC architecture to promote
                  modularity and scalability. The system enables users to browse
                  menus, customize orders, and process transactions. A
                  well-designed relational database ensures efficient data
                  handling and fast queries. Applied Agile practices such as
                  sprint planning and iteration cycles, which improved team
                  productivity and delivery speed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contacts">
          <div className="contact">
            <h1 className="section-title">Let's connect</h1>
            <form className="contact-form" action="">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter your name" />
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter your email" />
              <label htmlFor="">Write your message here</label>
              <textarea
                name="message"
                rows={8}
                id=""
                placeholder="Write your message here"
              ></textarea>
              <button className="submit-btn">Submit now</button>
            </form>
          </div>
        </section>
        <section id="footer">
          <div className="footer">
            <div className="proverb"></div>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p className="copyright">
              &copy; Dorian Taponzing Donfack. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
