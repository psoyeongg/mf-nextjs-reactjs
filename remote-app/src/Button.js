import React, { useState } from "react";

const _style = {
  background: "#4b4be8",
  color: "#fff",
  padding: 12,
};

const Button = ({ title, style }) => {
  const [text, setText] = useState("");

  return (
    <>
      <button
        style={style || _style}
        onClick={() => setText(title || "Click Btn@!")}
      >
        {title || "Remote Button"}
      </button>
      <div>{text}</div>
    </>
  );
};

export default Button;
