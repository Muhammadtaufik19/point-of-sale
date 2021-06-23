import React from "react";
import "./Counter.css";

const Counter = ({ inc, dec }) => {
  if (inc) {
    return <div className="inc">+</div>;
  } else {
    return <div className="dec">-</div>;
  }
};

export default Counter;
