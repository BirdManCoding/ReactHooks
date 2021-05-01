import React, { useReducer } from "react";
import ComponentA from "./subComp/ComponentA";
import ComponentD from "./subComp/ComponentD";

export const CounterContext = React.createContext();

export const ACTION_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.value;
    case ACTION_TYPES.DECREMENT:
      return state - action.value;
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};

function MyUseContextReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <ComponentA />
      <ComponentD />
    </CounterContext.Provider>
  );
}

export default MyUseContextReducer;
