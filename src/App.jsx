import { useState, useRef } from "react";
import logo from "./assets/logo.png";
import moon from "./assets/moon.png";
import hamburger from "./assets/hamburger.png";
import dorian from "./assets/dorian.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "./assets/Dorian-Taponzing-Resume.pdf";
import "./App.css";
import projects_data from "./assets/projects_data";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [iconColor, setIconColor] = useState("213547");

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
      setIconColor("ffffff");
    } else {
      document.body.classList.remove("darkmode");
      setIconColor("213547");
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

  const INITIAL_PROJECTS = 2;
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 1);
  };

  const handleShowLess = () => {
    setVisibleProjects(INITIAL_PROJECTS);
  };

  const handleMouseEnter = (index) => {
    document.getElementById(`overlay-${index}`).classList.add("show");
  };

  const handleMouseLeave = (index) => {
    document.getElementById(`overlay-${index}`).classList.remove("show");
  };

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
              My resume{" "}
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
          <div className="social-network-container">
            <div className="social-network-inner-container">
              <a
                href="https://www.instagram.com/thebreezyguy/"
                className="social-icon"
              >
                <img
                  src={`https://img.icons8.com/windows/${iconColor}/40/instagram-new.png`}
                  alt="instagram"
                />
              </a>
              <a href="https://x.com/thebreezyguy168" className="social-icon">
                <img
                  src={`https://img.icons8.com/material-rounded/${iconColor}/40/twitterx--v2.png`}
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dorian-taponzing-donfack"
                className="social-icon"
              >
                <img
                  src={`https://img.icons8.com/ios-glyphs/40/${iconColor}/linkedin-2--v1.png`}
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/thebreezyguy1"
                className="social-icon"
              >
                <img
                  src={`https://img.icons8.com/ios-glyphs/${iconColor}/40/github.png`}
                  alt="github"
                />
              </a>
            </div>
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
            <div className="projects-container">
              {projects_data.slice(0, visibleProjects).map((proj, index) => (
                <div
                  key={index}
                  className="project"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <h3 className="project-title">{proj.proj_name}</h3>
                  <div className="image-container">
                    <img src={proj.proj_img} alt={proj.proj_name} />
                    <div id={`overlay-${index}`} className="overlay">
                      <a className="proj-buttons" href={proj.proj_github_link}>
                        View Project
                      </a>
                      <a className="proj-buttons" href={proj.proj_demo_link}>
                        See Demo
                      </a>
                    </div>
                  </div>
                  <p className="project-desc">{proj.proj_desc}</p>
                  <p className="tech-task">{proj.proj_tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="show-container">
            {visibleProjects < projects_data.length && (
              <div className="show-more-button" onClick={handleShowMore}>
                <p>Show more</p>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
                  alt="Show more"
                />
              </div>
            )}
            {visibleProjects > INITIAL_PROJECTS && (
              <div className="show-less-button" onClick={handleShowLess}>
                <p>Show less</p>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png"
                  alt="Show less"
                />
              </div>
            )}
          </div>
        </section>
        <section id="contacts">
          <div className="contact">
            <h1 className="section-title">Let's connect</h1>
            <p>I am available for 2025 New Grade roles.</p>
            <p>Connect with me through email or phone.</p>
            <div className="contact-info-container">
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/material-rounded/30/new-post.png"
                  alt="email"
                />
                <p>
                  dtaponzi@students.kennesaw.edu | doriantaponzing@gmail.com
                </p>
              </div>
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                  alt="phone"
                />
                <p>+1 470-439-9907</p>
              </div>
              <div className="contact-info">
                <img
                  src="https://img.icons8.com/material-rounded/30/marker.png"
                  alt="location"
                />
                <p>Lilburn, Georgia, USA</p>
              </div>
            </div>

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
            <div className="proverb">
              <p className="proverb-title">Proverbs 16:3</p>
              <p>
                "Commit your work to the Lord, and your plans will be
                established."
              </p>
            </div>
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
