import React from "react";
import ProjectDescription from "./ProjectDescription";

const ProjectCard = (props) => {
  return (
    <div className="card">
      {props.image && <img src={props.image} alt="" />}
      <ProjectDescription title={props.title} description={props.description} />
    </div>
  );
};

export default ProjectCard;
