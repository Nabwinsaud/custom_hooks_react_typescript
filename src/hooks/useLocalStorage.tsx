import { useState, useEffect } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];
// const useLocalStorage = (key: string, value: string | number | object) => {
const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
  const checkInitialvalue = () => {
    if (!initialValue) return;

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };
  const [state, setState] = useState<T | undefined>(checkInitialvalue);
  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      }
    }
  }, [state, key]);

  // custom hook
  return [state, setState];
};

export default useLocalStorage;
