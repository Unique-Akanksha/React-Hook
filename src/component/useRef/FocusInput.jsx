import { useRef, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "2px solid blue";
    inputRef.current.style.outline = "none";
  };
  const handleBlur = () => {
    inputRef.current.style.border = "2px solid black";
  };
  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setInput(e.target.value);
      inputRef.current.style.border = "3px solid green";
    } else {
      setInput("");
    }
  };
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
        value={input}
      />
      <button onClick={handleFocus}>Foucus</button>
    </>
  );
};
export default FocusInput;
