import React, { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import ProductCard from "./component/ProductCard";
import MenuMinuman from "./component/MenuMinuman";
import CalculateBox from "./component/CalculateBox";

// card item
import CardItem from "./component/CardItem";
import ListMenu from "./component/ListMenu";

// state data
import { useSelector } from "react-redux";

const App = () => {
  // memanggil state
  const products = useSelector((state) => state.product.products);

  // console.log(products[index].category);

  const carts = useSelector((state) => state.product.carts);

  const [ubahMenu, setUbahMenu] = useState("makanan");

  const minuman = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].category === "minuman") {
      // console.log("item: ", products[i]);
      minuman: minuman.push(products[i]); // setUbahMenu(ubah);
    }
  }
  // console.log("minuman: ", minuman);

  const makanan = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].category === "makanan") {
      // console.log("item: ", products[i]);
      makanan: makanan.push(products[i]); // setUbahMenu(ubah);
    }
  }
  // console.log("makanan: ", makanan);

  const changeCategory = (value) => {
    setUbahMenu(value);
    // products = []
  };

  const handleMakanan = () => {
    setUbahMenu("makanan");
  };

  const handleMinuman = () => {
    setUbahMenu("minuman");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="menuComponent">
          <p className="kategory">CATEGORY</p>
          <hr></hr>
          <p className="makanan" onClick={handleMakanan}>
            Makanan
          </p>
          <p className="minuman" onClick={handleMinuman}>
            Minuman
          </p>
          {/* <ListMenu changeCategory={changeCategory} /> */}
        </div>
        <div className="productComponent">
          {ubahMenu === "makanan"
            ? makanan.map((makanan) => (
                <ProductCard key={makanan.id} item={makanan} />
              ))
            : minuman.map((minuman) => (
                <MenuMinuman key={minuman.id} item={minuman} />
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
