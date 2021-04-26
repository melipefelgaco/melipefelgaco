import React from "react";
import conversorIMG from "../images/curConverter.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My projects</h1>
      <div className="project-name">
        <h4>Currency Converter</h4>
        <p>
          Currency Converter was a project that initially started with vanilla
          JS and CSS using Bootstrap. Only later it was remade in React. The
          calculation when it was first deployed used to be based on an API that
          later changed to a model that required the user to pay for a
          key to exchange the
          currency. So I made the change to what is now the current working API.
          The current API happens to sometimes go down but hey, at least it's
          free.It was a very fun project to make, and it was my first deployed
          project. Currently it converts between
          the following currencies: BRL, USD and EUR.
        </p>
        <p>
          Website:{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://fmagesty.github.io/currency-converter/"
          >
            Currency Converter
          </a>
        </p>
      </div>
      <div className="project-name">
        <h4>Search Ships using the Star Wars API</h4>
        <p>
          This project is all about working with an API and Json data. It was a
          project developed by the PodCodar community and asked the developer to
          search the starwar ships on the API and show it's information without
          using any library that worked with it. This was a good challenge and
          interesting project. It was made in React.
        </p>
        <p>
          Website:{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://fmagesty.github.io/react-sw-api/"
          >
            Search Ships using the Star Wars API
          </a>
        </p>
      </div>
      <div className="project-name">
        <h4>Escape From Tarkov: Ballistics Simulator</h4>
        <p>
          EFT: Ballistics Simulator was made for players to solve the problem of
          not knowing about which of the ingame ammo to use. Until the
          developers of EFT release a public API this one will be my only EFT
          project for the moment.
        </p>
        <p>
          Website:{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://fmagesty.github.io/react-tarkov-ballistics/"
          >
            Escape From Tarkov: Ballistics Simulator
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
