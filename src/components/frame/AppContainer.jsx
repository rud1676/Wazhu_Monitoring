"use client";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  typography: {
    // fontFamily: "Spoqa Han Sans Neo",
  },
  breakpoints: {
    values: {
      desktop: 1090,
    },
  },
});

export default function AppContainer({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster containerStyle={{ top: "100px" }} />
      <CssBaseline>
        <RecoilRoot>{children}</RecoilRoot>
      </CssBaseline>
    </ThemeProvider>
  );
}
