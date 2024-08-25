import React, { useState } from "react";

const ShopItem = ({ item, index, buyItem, deleteItem }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="shop-item">
      <span>Name : {item.name} </span>
      <span> RS : {item.price} </span>
      <span> Quantity : {item.quantity} KG </span>
      Buy Quantity : <input
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || null)}
        type="number"
      />
      <button onClick={() => buyItem(index, quantity)}> Buy </button>
      <button onClick={() => deleteItem(index)}> Delete </button>
    </div>
  );
};

export default ShopItem;
