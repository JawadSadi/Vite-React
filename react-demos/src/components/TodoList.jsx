import { useState } from "react";

function TodoList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = [...items, item];
    setItems(newItem);
    setItem("");
  };
  return (
    <>
      <div>
        {items.map((i, k) => (
          <p key={k}>
            Item {k + 1} : {i}
          </p>
        ))}
      </div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input type="submit" value={"Add"} />
      </form>
    </>
  );
}

export default TodoList;
