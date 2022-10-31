import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
const Debounce = () => {
  // 2nd parameter is optional
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.value;
    setValue(event.target.value);
  };

  useEffect(() => {
    // comes in handy while searching
    // working with api
    console.log("component re-renders");
  }, [debounceValue]);
  return (
    <div>
      <p>The text value:{value}</p>
      <p>debounced value :{debounceValue}</p>
      <input type="text" placeholder="type any thing" onChange={handleChange} />
    </div>
  );
};

export default Debounce;
