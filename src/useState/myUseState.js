import { useState } from "react";

function MyUseState() {
  const [count, setCount] = useState(0);
  return (
    <div className='useState'>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default MyUseState;
