import React from "react";

function Button(props) {
  console.log(`Button ${props.children}`);
  return <button onClick={props.handleClick}>{props.children}</button>;
}

export default React.memo(Button);
