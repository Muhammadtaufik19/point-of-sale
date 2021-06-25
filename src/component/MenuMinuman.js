import React from "react";
import "./MenuMinuman.css";

// import dispatch
import { useDispatch } from "react-redux";

// import action add to card
import { addCart } from "../store/actions/product";

// ------------------------------------
const MenuMinuman = ({ item }) => {
  // DISPATCH
  const dispatch = useDispatch();

  // fungsi add to cart
  const addToCart = (id) => {
    dispatch(addCart(id));
  };
  return (
    <div>
      {item.category === "minuman" ? (
        <div className="listMinuman" onClick={() => addToCart(item.id)}>
          <img src={item.image.default} alt="" />
          <div className="detail">
            <p className="name">
              {" "}
              <b>{item.name}</b>
            </p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ) : (
        "0"
      )}
    </div>
  );
};

export default MenuMinuman;
