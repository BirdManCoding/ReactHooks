import { useState } from "react";

import HookMouse from "./mouseHook";

function MyUseEffectCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse Hook</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MyUseEffectCleanup;
