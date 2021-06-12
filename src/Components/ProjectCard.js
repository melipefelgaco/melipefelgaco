import React from "react";
import data from "../data";

const ProjectCard = () => {
  return (
    <div>
      <h1 className="section-title">My projects</h1>
      {data.map((data) => (
        <div className="card" key={data.title}>
          <img src={data.img} alt="project screenshot" className="card-img" />
          <div className="info-card">
            <h4 className="card-title">{data.title}</h4>
            <p>{data.text}</p>
            <p className="website">
              Website:{" "}
              <a target={"_blank"} rel="noreferrer" href={data.website}>
                {data.title}
              </a>
            </p>
            <p>
              Code:{" "}
              <a target={"_blank"} rel="noreferrer" href={data.code}>
                Github Repository
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
