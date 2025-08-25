import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Qualifications from "./components/Qualifications/Qualifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [iconColor, setIconColor] = useState("213547");
  const [contactIconColor, setContactIconColor] = useState("213547");

  return (
    <div className="main">
      <div className="main-inner-container">
        <NavBar
          setIconColor={setIconColor}
          setContactIconColor={setContactIconColor}
        />
        <Header iconColor={iconColor} />
        <About />
        <Qualifications />
        <Projects iconColor={iconColor} />
        <Contact contactIconColor={contactIconColor} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
