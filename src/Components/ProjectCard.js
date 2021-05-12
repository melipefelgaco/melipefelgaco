import React from "react";
import data from "../data";

const ProjectCard = () => {
  return (
    <div>
      {data.map((data) => (
        <div className="card">
          <img src={data.img} alt="" />
          <div>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
            <p className="website">
              Website:{" "}
              <a target={"_blank"} rel="noreferrer" href={data.website}>
                {data.title}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
