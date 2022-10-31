import { SetStateAction, useState } from "react";

interface IUseCountProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: React.Dispatch<SetStateAction<number>>;
}

function useCounter(initialState?: number): IUseCountProps {
  const [count, setCount] = useState(initialState || 0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(initialState || 0);

  return { count, setCount, increment, decrement, reset };
}

export default useCounter;
