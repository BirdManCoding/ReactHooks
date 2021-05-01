import { UnicornContext } from "../myUseContext";

function ComponentC() {
  return (
    <div className='useState'>
      <UnicornContext.Consumer>
        {unicorn => <div>Hallo sagte {unicorn}</div>}
      </UnicornContext.Consumer>
    </div>
  );
}

export default ComponentC;
