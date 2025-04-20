function ProductList() {
  const users = [
    { id: 1, name: "Phone", price: "$600" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphone", price: "$200" },
  ];
  return (
    <div>
      {users.map(({ name, price, id }) => (
        <div key={id}>
          <h3>Name : {name}</h3>
          <h5>Price: {price}</h5>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
