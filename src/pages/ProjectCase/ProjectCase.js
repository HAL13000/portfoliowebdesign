import React from "react";
import "./ProjectCase.scss";
import Button from "../../components/Button/Button";
import { useSearchParams } from "react-router-dom";
import { data } from "../Index/_data";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const Project = () => {
  let [searchParams, _] = useSearchParams();
  let id = searchParams.get("id");

  // console.log(id);
  const project = data.find((entry) => entry.id === id);
  const handleDiscoverMore = () => {
    window.open(`${project.link}`, "_blank");
  };

  if (project) {
    return (
      <div className="projectCase">
        <Header />
        <main>
          <div className="projectCaseContainer">
            <div className="imgContainer">
              {/* <img src={project.url} />
              <img src={project.url} />
              <img src={project.url} /> */}
              {project.projectImages.map((projectImage, i) => (
                <img src={projectImage} />
              ))}
            </div>
            <div className="projectContainer">
              <div className="projectDetail">
                <p className="title">{project.title}</p>
                <p className="description">{project.description}</p>
                <Button text="Discover" onClick={handleDiscoverMore} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <div>Error 500</div>;
};
