import React, { useEffect } from "react";
import mylogo from "../../images/icons/HarukaISHIKAWA_logo_m.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleToIndex = () => {
    navigate("/");
  };

  const handleToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <header>
        <div className="index" onClick={handleToIndex}>
          <img src={mylogo} alt="" loading="lazy" className="changeColor" />
          <p>HARUKA ISHIKAWA</p>
        </div>
        <div className="menu">
          <p onClick={handleToAbout}>ABOUT/CONTACT</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
