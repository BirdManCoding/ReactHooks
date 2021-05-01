import { useContext } from "react";
import { CounterContext, ACTION_TYPES } from "../myUseContextReducer";

function ComponentD() {
  const countContext = useContext(CounterContext);
  return (
    <div className='useState'>
      <button
        onClick={() =>
          countContext.countDispatch({ type: ACTION_TYPES.INCREMENT, value: 5 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: ACTION_TYPES.DECREMENT, value: 5 })
        }
      >
        Decrement
      </button>
      <button
        onClick={() => countContext.countDispatch({ type: ACTION_TYPES.RESET })}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentD;
