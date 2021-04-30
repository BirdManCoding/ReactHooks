import { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMousePosition(e) {
    console.log("MouseEvent");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div className='useEffect'>
      <p>
        X Position: {x} | Y Position: {y}
      </p>
    </div>
  );
}

export default HookMouse;
