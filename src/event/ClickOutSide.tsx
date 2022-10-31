import { useRef, useEffect } from "react";

const ClickOutSide = (cb: Function) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      // when want
      if (ref?.current && !ref.current.contains(event.target)) {
        console.log("it contains");

        cb();
      }
      document.addEventListener("click", handleClick, true);
      console.log("button activated");
    };

    // hook clean up
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);
  return ref;
  //   return <div>ClickOutSide</div>;
};

export default ClickOutSide;
