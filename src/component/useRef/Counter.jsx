import { useRef } from "react";

const Counter = () => {
  const val = useRef(0);
  const Increment = () => {
    val.current = val.current + 1;
    alert("Counter Value :" + val.current);
  };
  return (
    <>
      <div></div>
      <button onClick={Increment}>Increment</button>
    </>
  );
};
export default Counter;
