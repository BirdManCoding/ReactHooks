import React from "react";

function Title() {
  console.log("title");
  return <h1>Hello Dudes</h1>;
}

export default React.memo(Title);
