import React from "react";
import "./CalculateBox.css";

import Button from "./Button";

const CalculateBox = () => {
  return (
    <div>
      <div className="box">
        <div className="total">
          <h4>Total</h4>
          <p>30000</p>
        </div>
        <div className="pay">
          <p>Jumlah bayar</p>
          <input type="number" />
        </div>
        <div className="change">
          <p>Kembalian</p>
          <p>10000</p>
        </div>
        <div className="btnBox">
          <Button />
          <Button primary />
        </div>
      </div>
    </div>
  );
};

export default CalculateBox;
