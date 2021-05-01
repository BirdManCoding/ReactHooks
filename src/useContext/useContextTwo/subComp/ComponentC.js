import { useContext } from "react";
import { UnicornContext } from "../myUseContext";

function ComponentC() {
  const unicorn = useContext(UnicornContext);

  return (
    <div className='useState'>
      <div>Hallo sagte {unicorn} =D</div>
    </div>
  );
}

export default ComponentC;
