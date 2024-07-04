import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeBtn.scss";

const ThemeBtn = () => {
  const handleTheme = useTheme();
  return (
    <div className="themeColor" onClick={handleTheme}>
      <div className="themeBtn_container">
        <p className="themeBtn">LIGHT</p>
        <p className="lineLight"></p>
      </div>
      <p>/</p>
      <div className="themeBtn_container">
        <p className="themeBtn">DARK</p>
        <p className="lineDark"></p>
      </div>
    </div>
  );
};

export default ThemeBtn;
