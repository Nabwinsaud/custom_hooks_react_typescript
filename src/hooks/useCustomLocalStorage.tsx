import { useState, useEffect, SetStateAction } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<SetStateAction<T | undefined>>
];
const useCustomLocalStorage = <T,>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const checkInLocalStorage = () => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };
  const [state, setState] = useState<T | undefined>(checkInLocalStorage);

  useEffect(() => {
    if (state) {
      try {
        // store in localstorage
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        // console.warn("something went wrong at", error);
      }
    }
  }, [state, key]);
  return [state, setState];
  //   return <div>useCustomLocalStorage</div>;
};

export default useCustomLocalStorage;
