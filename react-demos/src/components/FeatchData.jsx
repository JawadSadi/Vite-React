import React, { useEffect, useState } from "react";

export default function FeatchData() {
  const [todo, setTodo] = useState([]);

  useEffect(function () {
    async function takeData() {
      const take = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await take.json();
      if (data && data.length) setTodo(data);
    }
    takeData();
  }, []);

  return (
    <div>
      <h1>{todo.length > 0 ? todo[0].title : "Loading..."}</h1>
    </div>
  );
}
