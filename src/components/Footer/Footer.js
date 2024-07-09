import React, { useEffect } from "react";
import "./Footer.scss";
import pic001 from "../../images/pics/pic001.jpeg";
import githubBl from "../../images/icons/github-bl.png";
import linkedinBl from "../../images/icons/linked-in-bl.png";
import githubWh from "../../images/icons/github-wh.png";
import linkedinWh from "../../images/icons/linked-in-wh.png";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeBtn from "../ThemeColor/ThemeBtn";
// import { useTheme } from "../ThemeColor/ThemeContext";

const Footer = () => {
  const navigate = useNavigate();

  const visitLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/haruka-ishikawa-795685232/",
      "_blank"
    );
  };
  const visitGithub = () => {
    window.open("https://github.com/HAL13000", "_blank");
  };

  const handleToIndex = () => {
    navigate("/");
  };
  const handleToProject = () => {
    // window.location.reload();
    let path = window.location.pathname;
    let project = document.getElementById("project");
    // console.log(path);
    if (path === "/") {
      const offset = -50;
      const elementPosition =
        project.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate("/", { state: { targetId: "project" } });
    }
  };

  const handleToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <footer>
        <div className="footer_aboutMe">
          <div className="footer_image" onClick={handleToAbout}></div>
          <div className="box1">
            <p className="name">HARUKA ISHIKAWA</p>
            <p>Web Designer | UX/UI Designer</p>
            <div className="icons">
              {/* <img src={iconGithub} alt={"${theme} them icon "} />
              <img src={iconLinkedin} alt={"${theme} them icon "} /> */}
              <img
                className="changeColor"
                src={githubBl}
                alt=""
                loading="lazy"
                onClick={visitGithub}
              />
              <img
                className="changeColor"
                src={linkedinBl}
                alt=""
                loading="lazy"
                onClick={visitLinkedIn}
              />
            </div>
          </div>
        </div>
        <div className="footer_nav">
          <div className="box2">
            <p className="navBtn" onClick={handleToIndex}>
              HOME
            </p>
            <p className="navBtn" onClick={handleToProject}>
              PROJECTS
            </p>
            <p className="navBtn" onClick={handleToAbout}>
              CONTACT
            </p>
          </div>
        </div>
        <div className="box3">
          {/* <div className="languages">
            <p className="languageBtn">EN</p>
            <p>/</p>
            <p className="languageBtn">FR</p>
          </div> */}
          <p className="copyright">&copy; All rights reserved 2024</p>
          <ThemeBtn />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
