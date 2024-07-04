import React from "react";
import "./Footer.scss";
import pic001 from "../../images/pics/pic001.jpeg";
import githubBl from "../../images/icons/github-bl.png";
import linkedinBl from "../../images/icons/linked-in-bl.png";
import githubWh from "../../images/icons/github-wh.png";
import linkedinWh from "../../images/icons/linked-in-wh.png";
import { useNavigate } from "react-router-dom";
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
  // const handleToAbout = () => {
  //   navigate("/about");
  // };
  // const handleToAbout = () => {
  //   navigate("/about");
  // };
  // const handleToAbout = () => {
  //   navigate("/about");
  // };
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
                // className="iconGithub"
                src={githubBl}
                alt=""
                loading="lazy"
                onClick={visitGithub}
              />
              <img
                // className="iconLinkedIn"
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
            <p className="navBtn">WEB DESIGN & WEB DEVELOPMENT</p>
            <p className="navBtn">GRAPHIC DESIGN</p>
            <p className="navBtn">ILLUSTRATION</p>
            <p className="navBtn" onClick={handleToAbout}>
              CONTACT
            </p>
          </div>
          <div className="box3">
            <div className="languages">
              <p className="languageBtn">EN</p>
              <p>/</p>
              <p className="languageBtn">FR</p>
            </div>
            <ThemeBtn />
          </div>
        </div>
        <p className="copyright">&copy; All rights reserved 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
