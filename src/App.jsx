import React, { useState } from 'react';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = (items) => {
    const newTotal = items.reduce((acc, item) => acc + parseInt(item.quantity), 0);
    setTotal(newTotal);
  };

  const addItem = (item) => {
    if (!item.name || !item.price || !item.quantity) {
      alert("Please fill all fields.");
      return;
    }
    const updatedItems = [...items, item];
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const buyItem = (index, quantity) => {
    const updatedItems = [...items];
    const purchasedQuantity = Math.min(quantity, updatedItems[index].quantity);

    updatedItems[index].quantity -= purchasedQuantity;

    if (updatedItems[index].quantity < 1) {
      updatedItems.splice(index, 1);
    }

    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  return (
    <div>
      <h1>VEG SHOP</h1>
      <ShopForm addItem={addItem} />
      <ShopList items={items} buyItem={buyItem} deleteItem={deleteItem} />
      <h2>Total : {total}</h2>
    </div>
  );
};

export default App;
