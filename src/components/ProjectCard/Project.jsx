import React from "react";
import "./Project.scss";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const navigate = useNavigate();

  const handleNavigateProjectCase = () => {
    navigate(`/project?id=${project.id}`);
  };

  return (
    <div className="project" onClick={handleNavigateProjectCase}>
      <img src={project.url} loading="lazy" />
      <div className="label">
        <div className="titleBox">
          <p className="title">{project.title}</p>
          <p className="year">{project.year}</p>
        </div>
        {project.hashtags && (
          <div className="hashtags">
            {project.hashtags.map((hashtag, i) => (
              <p className="item">{hashtag}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
