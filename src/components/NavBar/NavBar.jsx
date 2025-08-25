import { useState, useRef } from "react";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

const NavBar = ({ setIconColor, setContactIconColor }) => {
  const [theme, setTheme] = useState("light");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-100%";
    }
  };

  const handleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.body.classList.add("darkmode");
        setIconColor("ffffff");
        setContactIconColor("a0a0a0");
      } else {
        document.body.classList.remove("darkmode");
        setIconColor("213547");
        setContactIconColor("213547");
      }
      return newTheme;
    });
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
    <div className="navbar">
      <img className="logo" src={logo} alt="Portfolio Logo" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          onClick={handleTheme}
          className="sun-icon"
          src={
            theme === "light"
              ? "https://img.icons8.com/material-rounded/40/f1c40f/sun--v1.png"
              : "https://img.icons8.com/ios-glyphs/40/f1c40f/moon-symbol.png"
          }
          alt={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        />
        <img
          onClick={openMenu}
          className="nav-mob-open"
          src={"https://img.icons8.com/ios-glyphs/40/f1c40f/hamburger.png"}
          alt="Open navigation menu"
        />
        <ul ref={menuRef} className="nav-menu">
          <img
            onClick={closeMenu}
            className="nav-mob-close"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/30/ffffff/delete-sign--v1.png"
            alt="Close navigation menu"
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
  );
};

export default NavBar;
