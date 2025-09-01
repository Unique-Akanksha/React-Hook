import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./component/useRef/Counter";
import FocusInput from "./component/useRef/FocusInput";
import StopWatch from "./component/useRef/StopWatch";
import ChipsInput from "./component/Learning/ChipsInput";
import DarkModeToggle from "./component/Learning/DarkMode";

function App() {
  return (
    <>
      <DarkModeToggle />
      {/* <ChipsInput /> */}
      {/* <StopWatch /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
    </>
  );
}

export default App;
