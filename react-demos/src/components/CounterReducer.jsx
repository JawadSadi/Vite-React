import React, { useReducer } from "react";
import Counter from "./Counter";

const initialState = { count: 0, inputValue: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      return { ...state, inputValue: action.payload };
    case "increaseByInput":
      return {
        ...state,
        count: state.count + Number(state.inputValue),
        inputValue: 0,
      };
    case "decreaseByInput":
      return {
        ...state,
        count: state.count - Number(state.inputValue),
        inputValue: 0,
      };
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    case "increaseByAmount":
      return { ...state, count: state.count + action.payload };
    case "decreaseByAmount":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0, inputValue: 0 };

    default:
      return state;
  }
};

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <Counter dispatch={dispatch} state={state} />
    </div>
  );
}
