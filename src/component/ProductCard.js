import React from "react";
import "./ProductCard.css";
// import makanan1 from "../assets/foods/makanan1.jpg";

// import dispatch
import { useDispatch } from "react-redux";

// import action add to card
import { addCart } from "../store/actions/product";

const ProductCard = ({ item }) => {
  // DISPATCH
  const dispatch = useDispatch();

  // fungsi add to cart
  const addToCart = (id) => {
    dispatch(addCart(id));
  };
  return (
    <div>
      <div className="productCard" onClick={() => addToCart(item.id)}>
        <img src={item.image.default} alt="" />
        <div className="detail">
          <p className="name">
            {" "}
            <b>{item.name}</b>
          </p>
          <p className="price">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
