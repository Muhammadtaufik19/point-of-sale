import React, { useState } from "react";
import "./CardItem.css";

import Counter from "./Counter";

// dispahing action
import { useDispatch } from "react-redux";

// IMPORT dispaching action type
import { inc, dec, remove } from "../store/actions/product";

const CardItem = ({ item }) => {
  // state
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  // fungsi tambah
  const increment = (id) => {
    setCount(count + 1);
    dispatch(inc(id));
  };
  const decrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(dec(id));
    } else if (count === 1) {
      dispatch(remove(id));
    }
  };

  return (
    <div className="cardItem">
      <div className="itemName"> {item.name}</div>
      <div className="counterContainer">
        <Counter inc={() => increment(item.id)} />
        <div className="counterTotal">{count}</div>
        <Counter dec={() => decrement(item.id)} />
      </div>
      <div className="price">{item.price}</div>
    </div>
  );
};

export default CardItem;
