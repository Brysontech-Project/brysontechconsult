import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Button = ({ text, to, type, _style, image }) => {
  return (
    <a
      href={to}
      style={{
        border: `2px solid ${type === "blank" ? "black" : "white"}`,
        padding: "16px 36px",
        background: `${type === "blank" ? "" : "#ff7400"}`,
        color: `${type === "blank" ? "#003b55" : "white"}`,
        borderRadius: "5px",
        ..._style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Image src={image} alt="button" width={25} height={25} />
        <Typography> {text}</Typography>
      </Stack>
    </a>
  );
};

export default Button;
