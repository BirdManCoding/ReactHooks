import { useEffect } from "react";
import useHttp from "./httpHook/use-Http";

function CustomHook() {
  const { isLoading, error, sendRequest } = useHttp({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  useEffect(() => {
    (async () => {
      const req = await sendRequest();
      console.log(req);
    })();
  }, []);

  console.log({ loading: isLoading, error: error });

  return (
    <div className='useState'>
      <h1>Custom Hook</h1>
    </div>
  );
}

export default CustomHook;
