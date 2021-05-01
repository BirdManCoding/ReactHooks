import React from "react";
import ComponentA from "./subComp/ComponentA";

export const UnicornContext = React.createContext();

function MyUseContextTwo() {
  return (
    <UnicornContext.Provider value='Uni the Unicorn'>
      <ComponentA />
    </UnicornContext.Provider>
  );
}

export default MyUseContextTwo;
