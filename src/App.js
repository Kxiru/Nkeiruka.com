import "./App.css";
import HeroHeader from "./components/HeroHeader";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function setDarkModeOnClick() {
    setDarkMode(!darkMode);
    console.log("clicked!");
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <NavBar setDarkModeOnClick={setDarkModeOnClick} />
        <HeroHeader />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
