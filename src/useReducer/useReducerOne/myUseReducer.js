import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function MyUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div className='useReducer'>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatchTwo("INCREMENT")}>Increment</button>
      <button onClick={() => dispatchTwo("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatchTwo("RESET")}>Reset</button>
      <h1>{count}</h1>
      <h1>{countTwo}</h1>
    </div>
  );
}

export default MyUseReducer;
