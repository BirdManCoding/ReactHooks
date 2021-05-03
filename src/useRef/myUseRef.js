import { useRef, useEffect } from "react";

function MyUseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='useState'>
      <input ref={inputRef} type='text' />
    </div>
  );
}

export default MyUseRef;
