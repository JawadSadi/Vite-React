function UserList() {
  const users = [
    { id: 1, name: "Jawad", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charli", age: 32 },
  ];
  return (
    <div>
      {users.map(({ name, age, id }) => (
        <div key={id}>
          <h3>UserName : {name}</h3>
          <h5>Age : {age}</h5>
        </div>
      ))}
    </div>
  );
}

export default UserList;
