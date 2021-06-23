import React from "react";
import "./Counter.css";

const Counter = ({ inc, dec }) => {
  if (inc) {
    return (
      <div className="inc" onClick={inc}>
        +
      </div>
    );
  } else {
    return (
      <div className="dec" onClick={dec}>
        -
      </div>
    );
  }
};

export default Counter;
