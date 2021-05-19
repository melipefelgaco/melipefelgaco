import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard";
import About from "./Components/About";
import Contact from "./Components/Contact";

const colors = {
  dark: {
    text: "white",
    bg: "black",
  },
  light: {
    text: "black",
    bg: "white",
  },
};

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const themeColors = colors[theme] || colors.light;
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: themeColors.bg,
        color: themeColors.text,
      }}
    >
      <Header themeColors={themeColors} toggleTheme={toggleTheme} />
      <div className="project-cards" id="project-cards">
        <ProjectCard />
      </div>
      <About />
      <Contact />
    </div>
  );
}
