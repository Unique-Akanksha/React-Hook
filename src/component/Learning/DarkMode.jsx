import React, { useEffect, useState } from "react";
import "./../../style/dark.css";
function DarkModeToggle() {
  const [mode, setMode] = useState("lightMode");
  const onCheck = (e) => {
    if (e.target.checked) setMode("darkMode");
    else setMode("lightMode");
  };
  return (
    <div className={`${mode === "lightMode" ? "light-mode" : "dark-mode"} container`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onClick={(e) => onCheck(e)} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{mode === "lightMode" ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
