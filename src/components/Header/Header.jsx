import dorian from "../../assets/dorian.JPG";
import resume from "../../assets/Dorian-Taponzing-Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./header.css";

const Header = ({ iconColor }) => {
  return (
    <section id="intro">
      <img className="main-img" src={dorian} alt="" />
      <h1>
        Hi, I'm <span>Dorian Taponzing Donfack</span>
      </h1>
      <p className="text-intro">
        I'm a passionate software engineer and recent Computer Science graduate
        from Kennesaw State University. I love turning complex problems into
        elegant, scalable solutions through code. Welcome to my portfolio, where
        you can explore my projects, experiences, and achievements that reflect
        my journey in tech.
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
          <a href="https://github.com/thebreezyguy1" className="social-icon">
            <img
              src={`https://img.icons8.com/ios-glyphs/${iconColor}/40/github.png`}
              alt="github"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
