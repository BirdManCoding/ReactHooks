import { useReducer } from "react";

const ACTION_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT2: "increment2",
  DECREMENT2: "decrement2",
  RESET: "reset",
};

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case ACTION_TYPES.INCREMENT2:
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case ACTION_TYPES.DECREMENT2:
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};

function MyUseReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='useReducer'>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT, value: 2 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT, value: 2 })}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT, value: 5 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT, value: 5 })}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT2, value: 5 })}
      >
        Increment2
      </button>
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT2, value: 5 })}
      >
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.RESET })}>
        Reset
      </button>
      <h1>{count.firstCounter}</h1>
      <h1>{count.secondCounter}</h1>
    </div>
  );
}

export default MyUseReducerTwo;
