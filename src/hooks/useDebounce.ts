import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay?: number) {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay || 500);

    // hook clean up is required

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounce;
}
