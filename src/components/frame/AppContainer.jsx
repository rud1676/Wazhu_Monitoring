"use client";

import React from "react";
import AppBar from "./AppBar";

import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

import { Box } from "@mui/material";
const AppContainer = ({ children }) => {
  return (
    <Box>
      <AppBar />
      <Toaster containerStyle={{ top: "100px" }} />
      <RecoilRoot>{children}</RecoilRoot>
    </Box>
  );
};

export default AppContainer;
