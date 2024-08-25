import React, { useState } from "react";

const ShopForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, price, quantity });
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name :</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Price :</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <label>Quantity :</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
      </div>
      <button type="submit">ADD TO SHOP</button>
    </form>
  );
};

export default ShopForm;
