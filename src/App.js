import "./App.css";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { useState } from "react";
import ProjectSection from "./Components/ProjectSection/ProjectSection";

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
      <ProjectSection />
      {/* <Projects /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}
