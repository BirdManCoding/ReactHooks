import { useState, useEffect } from "react";

function MyUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className='useState'>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Klick: {count}</button>
    </div>
  );
}

export default MyUseEffect;
