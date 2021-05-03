import { useState } from "react";

function useHttp(requestConfig) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest() {
    setIsLoading(true);
    setError(null);

    try {
      const defaultHeaders = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || defaultHeaders,
        body: requestConfig.body
          ? JSON.stringify(requestConfig.body)
          : undefined,
      });

      if (!response.ok) return setError(`Error ${response.status}`);

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }

  return { isLoading, error, sendRequest };
}

export default useHttp;
