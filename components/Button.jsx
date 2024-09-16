import React from "react";

const Button = ({ text, to, type, _style }) => {
  return (
    <a
      href={to}
      style={{
        border: `2px solid ${type === "blank" ? "black" : "white"}`,
        padding: "8px 10px",
        background: `${type === "blank" ? "" : "#ff7400"}`,
        color: `${type === "blank" ? "#003b55" : "white"}`,
        borderRadius: "5px",
        ..._style,
      }}
    >
      {text}
    </a>
  );
};

export default Button;
