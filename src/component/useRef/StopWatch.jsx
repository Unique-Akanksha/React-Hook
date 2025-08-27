import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);
  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setCount((setCount) => setCount + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };
  useEffect(() => {
    clearInterval(timeRef.current);
  }, []);
  return (
    <>
      <p>
        Stopwatch <b>{count}</b> Seconds
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};
export default StopWatch;
