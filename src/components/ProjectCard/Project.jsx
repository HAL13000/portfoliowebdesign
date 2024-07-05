import React from "react";
import "./Project.scss";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.url} />
      <div className="label">
        <div className="title">{project.title}</div>
        {project.hashtags && (
          <div className="hashtags">
            {project.hashtags.map((hashtag, i) => (
              <p>{hashtag}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
