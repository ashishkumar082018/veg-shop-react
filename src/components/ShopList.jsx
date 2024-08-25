import React from "react";
import ShopItem from "./ShopItem";

const ShopList = ({ items, buyItem, deleteItem }) => {
  return (
    <div className="shop-list">
      {items.map((item, index) => (
        <ShopItem
          key={index}
          item={item}
          index={index}
          buyItem={buyItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ShopList;
