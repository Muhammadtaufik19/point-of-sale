import React, { useState } from "react";
import "./ListMenu.css";

const ListMenu = () => {
  const [menu] = useState(["Faforite", "Makanan", "Minuman", "Cemilan"]);
  return (
    <div>
      <ul>
        {menu.map((item, index) => (
          <li className="listMenu" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
