import React from "react";
import "./Button.css";

const Button = ({ primary, action, text }) => {
  if (primary) {
    return (
      <button className="primary" onClick={action}>
        {text}
      </button>
    );
  } else {
    return (
      <button className="warning" onClick={action}>
        {text}
      </button>
    );
  }
};

export default Button;
