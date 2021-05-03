import { useState, useMemo } from "react";

function MyUseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  function incrementOne() {
    setCounterOne(prev => prev + 1);
  }

  function incrementTwo() {
    setCounterTwo(prev => prev + 1);
  }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className='useState'>
      <button onClick={incrementOne}>Increment One</button>
      <button onClick={incrementTwo}>Increment Two</button>
      <h3>Increment One is {isEven ? "Even" : "Odd"}</h3>
      <h2>Count One {counterOne}</h2>
      <h2>Count Two {counterTwo}</h2>
    </div>
  );
}

export default MyUseMemo;
