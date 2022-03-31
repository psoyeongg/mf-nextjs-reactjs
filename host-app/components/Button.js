import React, { useState } from "react";

const style = {
  background: "#ffc600",
  color: "#000",
  padding: 12,
};

export default function Button() {
  const [text, setText] = useState("");
  return (
    <>
      <button onClick={() => setText("host button")} style={style}>
        Next JS Button!!!
      </button>
      <p>{text}</p>
    </>
  );
}
