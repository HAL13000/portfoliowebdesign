import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeBtn.scss";

const ThemeBtn = () => {
  const handleTheme = useTheme();
  return (
    <div className="themeColor" onClick={handleTheme}>
      <p className="themeBtn">LIGHT</p>
      {/* <p className="light"></p> */}
      <p>/</p>
      <p className="themeBtn">DARK</p>
      {/* <p className="dark"></p> */}
    </div>
  );
};

export default ThemeBtn;
