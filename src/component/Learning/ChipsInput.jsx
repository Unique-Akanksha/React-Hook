import { useState } from "react";

function ChipsInput() {
  const [data, setData] = useState([]);
  const handleDownKey = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const obj = {
        title: e.target.value,
      };
      setData([...data, obj]);
      e.target.value = "";
    }
  };
  const removeItem = (id) => {
    const updataData = data?.filter((_, index) => index !== id);
    setData(updataData);
  };
  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        onKeyDown={(e) => handleDownKey(e)}
      />
      <div style={{ display: "flex", gap: "8px" }}>
        {data?.map((item, index) => {
          console.log("ITEM", item);
          return (
            <div
              style={{
                color: "black",
                background: "gray",
                padding: "8px 10px",
                borderRadius: "8px",
              }}
              key={index}
            >
              {item.title}{" "}
              <span style={{ color: "red" }} onClick={() => removeItem(index)}>
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
