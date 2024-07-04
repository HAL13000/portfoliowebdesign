import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type}
      for={props.for}
      onClick={props.onClick}
      {...props}
    >
      {props.text}
    </button>
  );
};

export default Button;
