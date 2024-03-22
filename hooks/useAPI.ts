import { useEffect, useState } from "react";

import axios from "@/lib/axios";

interface LMSApiOptions {
  disabled: boolean;
}

export default function useApi<T>(
  url: string,
  payload?: any,
  options?: LMSApiOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (options?.disabled) return;

      setError(null);
      setIsLoading(true);

      try {
        const response = await axios(url, payload);

        setData(response.data);
      } catch (err) {
        let message = "Unknown Error";
        if (err instanceof Error) message = err.message;

        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
