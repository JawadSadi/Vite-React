import { useState } from "react";

function ShoppingList() {
  const [shoppingitems, setShoppingItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setShoppingItems((prevItem) => [...prevItem, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder={"Item Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={quantity}
          placeholder={"Quantity"}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input type="submit" />
      </form>

      <ul>
        {shoppingitems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity : {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
