// function Greeting() {
//   const name = "Jawad";
//   const date = new Date();

//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>Date : {date.getDate()}</p>
//     </div>
//   );
// }

function Greeting({ timeOfDay }) {
  return (
    <div>
      {timeOfDay === "morning" ? (
        <h2>Good Morning!</h2>
      ) : (
        <h2>Good Afternoon!</h2>
      )}
    </div>
  );
}

export default Greeting;
