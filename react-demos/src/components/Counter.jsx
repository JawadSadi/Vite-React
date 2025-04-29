// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increament</button>
//       <button onClick={() => setCount(count - 1)}>Increament</button>
//     </div>
//   );
// }

import React from "react";

export default function Counter({ dispatch, state }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
      <button onClick={() => dispatch({ type: "decreament" })}>-</button>
      <button
        onClick={() => dispatch({ type: "increaseByAmount", payload: 5 })}
      >
        +5
      </button>
      <button
        onClick={() => dispatch({ type: "decreaseByAmount", payload: 5 })}
      >
        -5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        value={state.inputValue}
      />
      <button onClick={() => dispatch({ type: "increaseByInput" })}>Add</button>
      <button onClick={() => dispatch({ type: "decreaseByInput" })}>
        Subtract
      </button>
    </div>
  );
}
