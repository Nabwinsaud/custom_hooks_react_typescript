import { useState } from "react";
import ClickOutSide from "../event/ClickOutSide";
export function Index() {
  // count when clicked outside
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  const handleOutSide = (event: React.MouseEvent) => {
    setCount(0);
    event.stopPropagation();
  };
  const ref = ClickOutSide(handleClick);

  return (
    <div
      onClick={handleOutSide}
      className="flex flex-col w-[300px] rounded-md py-4 my-6 border-indigo-500 border"
    >
      <button
        ref={ref}
        onClick={handleClick}
        className="rounded-md bg-indigo-700 w-[50%] py-2 uppercase text-xl  mx-auto  text-white"
      >
        count:{count}
      </button>
    </div>
  );
}
