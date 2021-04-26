import React from "react";
import curConverter from "../../images/curConverter.png";
import ProjectDescription from "./ProjectDescription";

const ProjectCard = () => {
  return (
    <div id="project-card">
      <img src={curConverter} alt="" />
      <ProjectDescription />
    </div>
  );
};

export default ProjectCard;
