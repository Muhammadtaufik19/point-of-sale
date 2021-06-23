import React, { useState } from "react";
import "./CardItem.css";

import Counter from "./Counter";

const CardItem = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="cardItem">
      <div className="itemName">Nama</div>
      <div className="counterContainer">
        <Counter inc />
        <div className="counterTotal">{count}</div>
        <Counter dec />
      </div>
      <div className="price">50000</div>
    </div>
  );
};

export default CardItem;
