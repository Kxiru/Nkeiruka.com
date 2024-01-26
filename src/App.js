import "./App.css";
import HeroHeader from "./components/HeroHeader";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SkillsCertifications from "./components/Skills_Certs";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function setDarkModeOnClick() {
    setDarkMode(!darkMode);
    console.log("clicked!");
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <NavBar darkMode={darkMode} setDarkModeOnClick={setDarkModeOnClick} />
        <HeroHeader />
        <AboutMe />
        <Projects />
        <SkillsCertifications />
        <Footer />
      </main>
    </div>
  );
}

export default App;
