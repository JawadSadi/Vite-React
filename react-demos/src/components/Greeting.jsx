function Greeting() {
  const name = "Jawad";
  const date = new Date();

  return (
    <div>
      <h1>{name}</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  );
}

export default Greeting;
