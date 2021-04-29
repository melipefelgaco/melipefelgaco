import React from "react";

const ProjectDescription = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default ProjectDescription;
