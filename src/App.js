import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import ProjectCard from "./Components/ProjectCard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import cConverterImg from "./images/cConverter.png";
import starWarsImg from "./images/starWarsApi.png";
import tarkovImg from "./images/tarkovBallistics.png";

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
      <h1>My projects</h1>
      <div className="section" id="projects">
        <ProjectCard
          className="card"
          title="Currency Converter"
          image={cConverterImg}
          description={
            <p>
              Currency Converter was a project that initially started with vanilla
              JS and CSS using Bootstrap. Only later it was remade in React. The
              calculation when it was first deployed used to be based on an API that
              later changed to a model that required the user to pay for a
              key to exchange the
              currency. So I made the change to what is now the current working API.
              The current API happens to sometimes go
              down but hey, at least it's
              free.It was a very fun project to make,
              and it was my first deployed
              project. Currently it converts between
              the following currencies: BRL, USD and EUR.
              <p className="website">
                Website:{" "}
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://fmagesty.github.io/currency-converter/"
                >
                  Currency Converter
                </a>
              </p>
            </p>
          }
        />
        <ProjectCard
          className="card"
          title="Search Ships using the Star Wars API"
          image={starWarsImg}
          description={
            <p>
              This project is all about working with an API and Json data. It
              was a project developed by the PodCodar community and asked the
              developer to search the starwar ships on the API and show it's
              information without using any library that worked with it. This
              was a good challenge and interesting project. It was made in
              React.
              <p className="website">
                Website:{" "}
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://fmagesty.github.io/react-sw-api/"
                >
                  Search Ships using the Star Wars API
                </a>
              </p>
            </p>
          }
        />
        <ProjectCard
          className="card"
          title="Escape From Tarkov: Ballistics Simulator"
          image={tarkovImg}
          description={
            <p>
              EFT: Ballistics Simulator was made for players to solve the
              problem of not knowing about which of the ingame ammo to use.
              Until the developers of EFT release a public API this one will be
              my only EFT project for the moment.
              <p className="website">
                Website:{" "}
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://fmagesty.github.io/react-tarkov-ballistics/"
                >
                  Escape From Tarkov: Ballistics Simulator
                </a>
              </p>
            </p>
          }
        />
      </div>
      <About />
      <Contact />
    </div>
  );
}
