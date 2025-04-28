import React, { createContext, useState } from "react";
import UserProfile from "./UserProfile";
// import UpdateUser from "./UpdateUser";

const Data = createContext();

export default function UseContext({ children }) {
  const [user, setName] = useState({ name: "JAWAD" });

  const updateName = (newName) => {
    setName({ name: newName });
  };
  return (
    <div>
      <Data.Provider value={{ user, updateName }}>{children}</Data.Provider>
    </div>
  );
}

export { UseContext, Data };
