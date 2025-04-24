import { useState } from "react";

function Profile() {
  const [information, setInformation] = useState({
    name: "",
    age: 0,
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const UpdateObj = () => {
    setInformation({ name: name, age: parseInt(age) });
    setName("");
    setAge("");
  };
  return (
    <div>
      <h3>Myname : {information.name}</h3>
      <h4>MyAge : {information.age}</h4>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={UpdateObj}>Update</button>
    </div>
  );
}

export default Profile;
