import React from "react";
import mylogo from "../../images/icons/HarukaISHIKAWA_logo_m.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleToIndex = () => {
    navigate("/");
  };
  const handleToWork = () => {
    navigate("/work");
  };
  const handleToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <header>
        <div className="index" onClick={handleToIndex}>
          <img src={mylogo} alt="" loading="lazy" />
          <p>HARUKA ISHIKAWA</p>
        </div>
        <div className="menu">
          <p onClick={handleToWork}>WORK</p>
          <p onClick={handleToAbout}>ABOUT/CONTACT</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
