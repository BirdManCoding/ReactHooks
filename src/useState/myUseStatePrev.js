import { useState } from "react";

function MyUseStatePrev() {
  const [count, setCount] = useState(0);

  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1);
      setCount(prevValue => prevValue + 1);
    }
  }

  return (
    <div className='useState'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default MyUseStatePrev;
