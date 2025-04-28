import React, { useContext, useState } from "react";
import { Data } from "./UseContext";

export default function UpdateUser() {
  const [newName, setNewName] = useState("");

  const { updateName } = useContext(Data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateName(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h1>Update user name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
