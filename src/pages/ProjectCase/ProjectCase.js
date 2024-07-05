import React from "react";
import "./projectCase.scss";
import Button from "../../components/Button/Button";

export const Project = () => {
  return (
    <div className="projectCase">
      <div className="projectCase_container">
        <img></img>
        <div className="projectDetail">
          <p className="title"></p>
          <p className="description"></p>
          <Button text="Discover" />
        </div>
      </div>
    </div>
  );
};
