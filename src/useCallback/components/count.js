import React from "react";

function Count({ text, count }) {
  console.log(`count comp ${text}`);
  return (
    <div>
      <h1>{text}</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default React.memo(Count);
