"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
