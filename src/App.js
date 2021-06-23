import React from "react";
import "./App.css";

import Header from "./component/Header";
import ProductCard from "./component/ProductCard";
import CalculateBox from "./component/CalculateBox";

// card item
import CardItem from "./component/CardItem";
import ListMenu from "./component/ListMenu";

// state data
import { useSelector } from "react-redux";

const App = () => {
  // memanggil state
  const products = useSelector((state) => state.product.products);

  const carts = useSelector((state) => state.product.carts);
  // console.log("cart ", carts);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="menuComponent">
          <ListMenu />
        </div>
        <div className="productComponent">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
        <div className="cardComponent">
          {carts ? `${carts.length} item in cart` : `0 item in cart`}
          {carts.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}

          <CalculateBox />
        </div>
      </div>
    </div>
  );
};

export default App;
