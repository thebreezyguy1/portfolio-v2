import { useEffect, useState } from "react";
import projects_data from "../../assets/projects_data";
import "./projects.css";

const Projects = ({ iconColor }) => {
  const [showFull, setShowFull] = useState(
    Array(projects_data.length).fill(false)
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMoreDesc = (idx) => {
    setShowFull((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  const handleShowLessDesc = (idx) => {
    setShowFull((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  const shortDesc = (desc) => {
    return desc.length > 200 ? desc.slice(0, 200) + "..." : desc;
  };

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
    <section id="projects">
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
              <p className="project-desc">
                {isDesktop &&
                proj.proj_desc.length > 200 &&
                !showFull[index] ? (
                  <>
                    {shortDesc(proj.proj_desc)}
                    <span
                      className="show-more-link"
                      onClick={() => handleShowMoreDesc(index)}
                      style={{
                        color: "#3498db",
                        cursor: "pointer",
                        marginLeft: "8px",
                      }}
                    >
                      Show more
                    </span>
                  </>
                ) : (
                  proj.proj_desc
                )}
                {isDesktop &&
                  proj.proj_desc.length > 200 &&
                  showFull[index] && (
                    <span
                      className="show-less-link"
                      onClick={() => handleShowLessDesc(index)}
                      style={{
                        color: "#3498db",
                        cursor: "pointer",
                        marginLeft: "8px",
                      }}
                    >
                      Show less
                    </span>
                  )}
              </p>
              {/* <p className="project-desc"> */}

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
              src={`https://img.icons8.com/ios-glyphs/30/${iconColor}/long-arrow-right.png`}
              alt="Show more"
            />
          </div>
        )}
        {visibleProjects > INITIAL_PROJECTS && (
          <div className="show-less-button" onClick={handleShowLess}>
            <p>Show less</p>
            <img
              src={`https://img.icons8.com/ios-glyphs/30/${iconColor}/long-arrow-right.png`}
              alt="Show less"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
