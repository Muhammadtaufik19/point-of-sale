import React from "react";
import "./Button.css";

const Button = ({ primary }) => {
  if (primary) {
    return <button className="primary">Selesai</button>;
  } else {
    return <button className="warning">Cancel</button>;
  }
};

export default Button;
