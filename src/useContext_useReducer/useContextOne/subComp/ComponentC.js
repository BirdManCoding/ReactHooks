import { useContext } from "react";

import { CounterContext } from "../myUseContextReducer";

function ComponentC() {
  const countContext = useContext(CounterContext);
  return (
    <div className='useState'>
      <h1>{countContext.countState}</h1>
    </div>
  );
}

export default ComponentC;
