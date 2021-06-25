import React, { useState } from "react";
import "./ListMenu.css";
import MenuMinu from "./MenuMinuman";

const ListMenu = ({ changeCategory }) => {
  const [menu, setMenu] = useState([
    "Faforite",
    "Makanan",
    "Minuman",
    "Cemilan",
  ]);

  const ubahMenu = (menu) => {
    console.log("menu berubah", menu);
    changeCategory(menu);
  };

  return (
    <div>
      <ul>
        {/* <MenuMinu /> */}
        {menu.map((item, index) => (
          <li className="listMenu" key={index} onClick={() => ubahMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
