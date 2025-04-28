import React, { useContext } from "react";
import { Data } from "./UseContext";

export default function UserProfile() {
  const { user } = useContext(Data);

  return <div>my name is {user.name}</div>;
}
