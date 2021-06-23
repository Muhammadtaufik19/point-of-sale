import React, { useState } from "react";
import "./CalculateBox.css";

import Button from "./Button";

// hooks useSelector
import { useSelector, useDispatch } from "react-redux";

// import action reset
import { reset } from "../store/actions/product";

// --------------------------------------------------------------------------------------------------//
const CalculateBox = () => {
  // state cart
  const carts = useSelector((state) => state.product.carts);
  const dispatch = useDispatch();

  const totalBayar = carts.reduce(
    (previus, current) => previus + current.price,
    0
  );

  const [change, setChange] = useState("");

  const [pay, setPay] = useState("");

  const handleChange = (e) => {
    setPay(e.target.value);
  };

  const handleKembalian = (e) => {
    if (pay > change) {
      return setChange(totalBayar - pay);
    }
  };

  const resetCard = () => {
    dispatch(reset());
    setPay("");
    setChange("");
  };

  return (
    <div>
      <div className="box">
        <div className="total">
          <h4>Total</h4>
          <p>{totalBayar}</p>
        </div>
        <div className="pay">
          <p>Jumlah bayar</p>
          <input type="number" value={pay} onChange={handleChange} />
        </div>
        <div className="change">
          <p>Kembalian</p>
          <p>{change}</p>
        </div>
        <div className="btnBox">
          <Button text="Reset" action={resetCard} />
          <Button text="Selesai" primary action={handleKembalian} />
        </div>
      </div>
    </div>
  );
};

export default CalculateBox;
